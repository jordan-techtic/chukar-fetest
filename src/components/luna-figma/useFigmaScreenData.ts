/** luna-spec-codegen: data-hook — wire API data here; do not restyle.
 *
 * Screen state, API loading, and submit handling live in this module (the
 * owned layout files never need behavior edits beyond prop spreads).
 *
 * API contract binding: endpoints are invoked only where the generated Luna
 * contract binds them (figmaReadOperations / figmaWriteOperation per frame,
 * display bindings in figmaDisplay.ts, submit action ids in SUBMIT_ACTIONS).
 * Unbound endpoints stay unused.
 */
"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { clearAllAuthStorage, getAccessToken } from "@/lib/auth/token-storage";

import {
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import {
  clearReadPayloads,
  figmaDisplayOperations,
  FIGMA_DISPLAY_BINDINGS,
  publishReadPayload,
  publishSelectOptions,
  setListOffset,
  useFigmaPayloadVersion,
} from "./figmaDisplay";
import { resolveBoundRead } from "./figmaMockReads";
import {
  applyFieldErrors,
  collectFieldErrors,
  collectFieldValues,
  getFieldError,
  getFieldValue,
  setFieldValue,
  subscribeFieldErrors,
  getFieldErrorSnapshot,
  getFieldValuesSnapshot,
  subscribeFieldValues,
} from "./figmaFieldStore";
import {
  clearScreenStatus,
  getScreenStatusSnapshot,
  publishScreenStatus,
  subscribeScreenStatus,
} from "./figmaStatusStore";
import { FigmaScreenStatusRegion } from "./figmaScreenStatus";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
  /** Set while the bound submit request is in flight. */
  disabled?: boolean;
};

export type FigmaFormBinding = {
  onSubmit?: (event: { preventDefault: () => void }) => void;
};

// ── Figma frame per route ───────────────────────────────────────────────────
/** Route path (as stamped by the generated Next.js wrappers) → Figma frame id. */
const ROUTE_FRAME_IDS: Readonly<Record<string, string>> = {
  "my-profile": "5329:12027",
  "manage-holiday": "5621:28270",
  "manage-activity": "5359:17106",
  "manage-category": "5449:19126",
  "manage-users": "5359:17424",
  "audit-logs": "5329:12177",
  "annual-calendar-default": "5645:60757",
  "week-calendar-historical-view": "5584:26945",
  "monthly-calendar-historical-view": "5645:33753",
};

const FrameIdContext = createContext<string | null>(null);

function useFrameId(): string | null {
  return useContext(FrameIdContext);
}

// ── API client ──────────────────────────────────────────────────────────────
/**
 * Base URL is the server origin. NEXT_PUBLIC_API_BASE_URL is authoritative;
 * the project's configured backend base URL (NEXT_PUBLIC_API_URL, used by
 * src/lib/api/client.ts) is the configured fallback. Contract paths already
 * include their prefix (/api/...), so joining is base with the trailing
 * slash trimmed + path. An empty base means same-origin (the Next.js rewrite
 * proxies /api/* to the backend in this environment). No hardcoded host.
 */
function apiBaseUrl(): string {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").trim();
  if (base) {
    return base.replace(/\/+$/, "");
  }
  const projectBase = (process.env.NEXT_PUBLIC_API_URL ?? "").trim();
  return projectBase.replace(/\/+$/, "");
}

export class FigmaApiRequestError extends Error {
  readonly status: number;
  readonly payload: unknown;
  /** UI-safe message from the API error envelope, when present. */
  readonly uiMessage: string;

  constructor(message: string, status: number, payload: unknown) {
    super(message);
    this.name = "FigmaApiRequestError";
    this.status = status;
    this.payload = payload;
    const envelope = payload !== null && typeof payload === "object" && !Array.isArray(payload)
      ? (payload as Record<string, unknown>)
      : null;
    this.uiMessage =
      typeof envelope?.message === "string" && envelope.message
        ? envelope.message
        : typeof envelope?.detail === "string"
          ? envelope.detail
          : "";
  }
}

function describeApiError(error: unknown): string {
  if (error instanceof FigmaApiRequestError) {
    return error.uiMessage || error.message;
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "The request could not be completed.";
}

/**
 * Fetch wrapper for every contract-bound call. Do not read VITE_MOCK_DATA
 * here — mock resolution happens in loadReads via resolveBoundRead.
 */
async function figmaApiRequest(
  method: string,
  path: string,
  body?: unknown,
): Promise<unknown> {
  const headers: Record<string, string> = { Accept: "application/json" };
  const token = getAccessToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  const response = await fetch(`${apiBaseUrl()}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (response.status === 401) {
    // Sign-out / session expiry: clear local authentication state and bound
    // display payloads; keep the user on the current screen. Never retry and
    // never call a logout endpoint from here.
    clearAllAuthStorage();
    clearReadPayloads();
    clearScreenStatus();
  }
  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }
  if (!response.ok) {
    throw new FigmaApiRequestError(
      `Request failed (${response.status}) for ${method} ${path}`,
      response.status,
      payload,
    );
  }
  return payload;
}

// ── Dialog state ────────────────────────────────────────────────────────────
// A module-level emitter lets figmaActionProps stay a plain function while
// still driving useDialogState() hooks in any component. No dialog is bound
// in the current contract, so this stays an inert registry.
const _dialogListeners = new Set<(actionId: string | null) => void>();

/** Open the dialog associated with an action id. Called by figmaActionProps. */
export function openFigmaDialog(actionId: string): void {
  _dialogListeners.forEach((fn) => fn(actionId));
}

/** Close any open dialog. Call from a dialog's close button or backdrop. */
export function closeFigmaDialog(): void {
  _dialogListeners.forEach((fn) => fn(null));
}

/**
 * Subscribe to dialog open/close state for one action id.
 * Returns { isOpen, close } for use in generated page components.
 */
export function useDialogState(actionId: string): { isOpen: boolean; close: () => void } {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const listener = (id: string | null) => setIsOpen(id === actionId);
    _dialogListeners.add(listener);
    return () => {
      _dialogListeners.delete(listener);
    };
  }, [actionId]);
  return { isOpen, close: closeFigmaDialog };
}

// ── Screen-scoped router for figmaActionProps ───────────────────────────────
// useRouter() must be called at the top of the provider (never inside an
// onClick handler); figmaActionProps then navigates with router.push().
type NextRouter = { push: (href: string, options?: { scroll?: boolean }) => void };
let _router: NextRouter | null = null;

// Semantic actions with an explicit Figma destination. Every other navigate
// action in the contract is a reaction_without_destination and stays inert.
const ACTION_DESTINATIONS: Readonly<Record<string, string>> = {
  // Annual calendar header toggle → the week historical route (CF-124).
  act_580733380960: "/week-calendar-historical-view",
  act_860bce35c6ee: "/monthly-calendar-historical-view",
};

// Form-submit action ids from the field contract: the control carries the
// submitNodeId of the frame's write operation. figmaActionProps calls
// submitScreen() for these (never just a data-figma-action-fired flag).
const SUBMIT_ACTIONS: Readonly<Record<string, string>> = {
  // CF-127 my-profile — Save button (node 5335:4291) → PUT /profile
  act_4d5182b12c73: "5329:12027",
};

// ── Submit in-flight store ──────────────────────────────────────────────────
const _submittingFrames = new Set<string>();
let _submitVersion = 0;
const _submitListeners = new Set<() => void>();

function subscribeSubmitting(listener: () => void): () => void {
  _submitListeners.add(listener);
  return () => {
    _submitListeners.delete(listener);
  };
}

function getSubmittingSnapshot(): number {
  return _submitVersion;
}

function isSubmitting(frameId: string): boolean {
  return _submittingFrames.has(frameId);
}

function setMutationInFlight(key: string, inFlight: boolean): void {
  if (inFlight === _submittingFrames.has(key)) {
    return;
  }
  if (inFlight) {
    _submittingFrames.add(key);
  } else {
    _submittingFrames.delete(key);
  }
  _submitVersion += 1;
  _submitListeners.forEach((fn) => fn());
}

// ── Submit handling ─────────────────────────────────────────────────────────
/**
 * Submit a frame's write operation: request body from requestBodyFor (Figma
 * form-state keys renamed to API fields), client checks from validateValues,
 * server field errors from fieldErrorsFromResponse. After POST/PUT/PATCH/DELETE
 * the related GET is refetched. Loading state stays off-canvas; the submit
 * control is disabled while the request is in flight.
 */
async function submitScreen(frameId: string): Promise<void> {
  const writeOp = figmaWriteOperation(frameId);
  if (!writeOp || isSubmitting(frameId)) {
    return;
  }
  _submittingFrames.add(frameId);
  _submitVersion += 1;
  _submitListeners.forEach((fn) => fn());
  try {
    const values: FigmaFieldValues = {};
    for (const [field, value] of Object.entries(collectFieldValues())) {
      values[field] = value;
    }
    const errors = validateValues(writeOp, values);
    if (Object.keys(errors).length > 0) {
      applyFieldErrors(errors);
      publishScreenStatus("Please fix the highlighted fields.");
      return;
    }
    applyFieldErrors({});
    const body = requestBodyFor(writeOp, values);
    const response = await figmaApiRequest(writeOp.method, writeOp.path, body);
    const serverErrors = fieldErrorsFromResponse(writeOp, response);
    if (Object.keys(serverErrors).length > 0) {
      applyFieldErrors(serverErrors);
      publishScreenStatus("Please fix the highlighted fields.");
      return;
    }
    const envelope = response !== null && typeof response === "object" && !Array.isArray(response)
      ? (response as Record<string, unknown>)
      : null;
    publishScreenStatus(
      typeof envelope?.message === "string" && envelope.message
        ? envelope.message
        : "Saved successfully.",
    );
    // After a write, refetch the related GET so display bindings refresh.
    await loadReads(frameId);
  } catch (error) {
    publishScreenStatus(describeApiError(error));
  } finally {
    _submittingFrames.delete(frameId);
    _submitVersion += 1;
    _submitListeners.forEach((fn) => fn());
  }
}

/**
 * Submit binding for a <form data-figma-form> wrapper: Enter key and native
 * submit route through the same guarded submitScreen().
 */
export function figmaFormProps(frameId: string): FigmaFormBinding {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      void submitScreen(frameId);
    },
  };
}

/**
 * Semantic actions from Figma prototype reactions.
 *   - submit actions (field-contract submitNodeId): call submitScreen()
 *   - navigate actions with a contract destination: router.push(destination)
 *   - everything else (reaction_without_destination / unknown): inert
 */
export function figmaActionProps(action: string): FigmaActionBinding {
  const submitFrameId = SUBMIT_ACTIONS[action];
  if (submitFrameId) {
    useSyncExternalStore(subscribeSubmitting, getSubmittingSnapshot, getSubmittingSnapshot);
    return {
      onClick: (event) => {
        event.preventDefault();
        void submitScreen(submitFrameId);
      },
      disabled: isSubmitting(submitFrameId),
    };
  }
  const destination = ACTION_DESTINATIONS[action];
  if (!destination) {
    return {};
  }
  return {
    onClick: (event) => {
      event.preventDefault();
      _router?.push(destination);
    },
  };
}

/**
 * LUNA-UNRESOLVED-ACTION stub: this control has no Figma prototype
 * reaction and no field-contract submit binding, so Luna could not wire
 * any behavior for it. In development this logs a visible warning (with
 * the action/node id) on every click so the gap surfaces during normal
 * dev testing instead of being silently invisible. Replace the call site
 * with a real handler once this control's behavior is known.
 */
export function figmaUnresolvedActionProps(actionId: string): FigmaActionBinding {
  return {
    onClick: () => {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[luna] unresolved action clicked:",
          actionId,
          "— no prototype reaction or submit binding found; wire manually."
        );
      }
    },
  };
}

// ── Field bindings (local form state; unresolved fields never sent) ─────────
/** Controlled binding for a data-figma-field control (form state only). */
export function figmaFieldProps(field: string, fallbackValue?: string): FigmaFieldBinding {
  useSyncExternalStore(subscribeFieldValues, getFieldValuesSnapshot, getFieldValuesSnapshot);
  const stored = getFieldValue(field);
  return {
    value: stored === "" && fallbackValue !== undefined ? fallbackValue : stored,
    onChange: (event) => {
      setFieldValue(field, event.target.value);
    },
  };
}

/** Field error message for a data-figma-field control. */
export function figmaFieldError(field: string): string {
  useSyncExternalStore(subscribeFieldErrors, getFieldErrorSnapshot, getFieldErrorSnapshot);
  return getFieldError(field);
}

// ── Collection row mutations (CF-134 holidays) ──────────────────────────────
const HOLIDAYS_FRAME = "5621:28270";
export const FIGMA_HOLIDAYS_OPERATION = "GET /api/v1/marketing-team-member/holidays";
const HOLIDAYS_OPERATION = FIGMA_HOLIDAYS_OPERATION;
const HOLIDAYS_MUTATION_KEY = "5621:28270:row-mutation";

/** The `data.items` array of the latest published response for one operation. */
function itemsForOperation(operation: string): Record<string, unknown>[] {
  const data = asRecord(asRecord(_latestPayloads.get(operation))?.data) ??
    asRecord(_latestPayloads.get(operation)) ??
    {};
  return Array.isArray(data.items) ? (data.items as Record<string, unknown>[]) : [];
}

/** Repeated-card index for a row container node (from the display binding path). */
function rowIndexFor(rowNodeId: string): number | null {
  const binding = FIGMA_DISPLAY_BINDINGS[rowNodeId];
  const last = binding?.path[binding.path.length - 1];
  return typeof last === "number" ? last : null;
}

function envelopeMessage(payload: unknown, fallback: string): string {
  const message = asRecord(payload)?.message;
  return typeof message === "string" && message ? message : fallback;
}

interface RowMutationContext {
  /** Operation key ("GET /path") whose `data.items` feed the bound rows. */
  operation: string;
  /** Frame whose reads are refetched after the write. */
  frameId: string;
  /** In-flight guard key (one mutation at a time per collection). */
  mutationKey: string;
}

/**
 * Shared collection-row mutation core (exact ticket paths). Resolves the row's
 * item from the published read payload via its display-binding index, runs the
 * write, publishes the envelope message, and refetches the related GET. DELETE
 * returns 200 (not 204) with the standard envelope — treated as success; a 409
 * (e.g. a published activity) surfaces the envelope message off-frame.
 */
async function collectionRowMutation(
  context: RowMutationContext,
  rowNodeId: string,
  kind: "toggle" | "delete",
  buildRequest: (
    item: Record<string, unknown>,
    rowKind: "toggle" | "delete",
  ) => { method: string; path: string; body?: Record<string, string | boolean> } | null,
): Promise<void> {
  if (isSubmitting(context.mutationKey)) {
    return;
  }
  const index = rowIndexFor(rowNodeId);
  const item = index !== null ? asRecord(itemsForOperation(context.operation)[index]) : null;
  const id = typeof item?.id === "string" ? item.id : null;
  if (!id || !item) {
    // Row data has not loaded yet; nothing to mutate.
    return;
  }
  const request = buildRequest(item, kind);
  if (!request) {
    return;
  }
  setMutationInFlight(context.mutationKey, true);
  try {
    const response = await figmaApiRequest(request.method, request.path, request.body);
    publishScreenStatus(envelopeMessage(response, "Saved successfully."));
    // After a write, refetch the list so display bindings refresh.
    await loadReads(context.frameId);
  } catch (error) {
    publishScreenStatus(describeApiError(error));
  } finally {
    setMutationInFlight(context.mutationKey, false);
  }
}

function figmaRowActionProps(
  context: RowMutationContext,
  rowNodeId: string,
  kind: "toggle" | "delete",
  buildRequest: (
    item: Record<string, unknown>,
    rowKind: "toggle" | "delete",
  ) => { method: string; path: string; body?: Record<string, string | boolean> } | null,
): FigmaActionBinding {
  useSyncExternalStore(subscribeSubmitting, getSubmittingSnapshot, getSubmittingSnapshot);
  return {
    onClick: (event) => {
      event.preventDefault();
      void collectionRowMutation(context, rowNodeId, kind, buildRequest);
    },
    disabled: isSubmitting(context.mutationKey),
  };
}

/** Holiday row request builder shared by the toggle and delete bindings. */
function holidayRowRequest(
  holiday: Record<string, unknown>,
  rowKind: "toggle" | "delete",
): { method: string; path: string; body?: Record<string, string | boolean> } | null {
  if (rowKind !== "toggle") {
    return { method: "DELETE", path: `/api/v1/marketing-team-member/holidays/${holiday.id as string}` };
  }
  const status = holiday.status === "inactive" ? "active" : "inactive";
  return {
    method: "PUT",
    path: `/api/v1/marketing-team-member/holidays/${holiday.id as string}`,
    body: { status },
  };
}

/** Status toggle (switch) for one bound holiday row → PUT { status }. */
export function figmaHolidayToggleProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    { operation: HOLIDAYS_OPERATION, frameId: HOLIDAYS_FRAME, mutationKey: HOLIDAYS_MUTATION_KEY },
    rowNodeId,
    "toggle",
    holidayRowRequest,
  );
}

/** Delete for one bound holiday row → DELETE /holidays/{id}. */
export function figmaHolidayDeleteProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    { operation: HOLIDAYS_OPERATION, frameId: HOLIDAYS_FRAME, mutationKey: HOLIDAYS_MUTATION_KEY },
    rowNodeId,
    "delete",
    holidayRowRequest,
  );
}

// ── Collection row mutations (CF-129 activities) ─────────────────────────────
const ACTIVITIES_FRAME = "5359:17106";
export const FIGMA_ACTIVITIES_OPERATION = "GET /api/v1/marketing-team-member/activities";
const ACTIVITIES_OPERATION = FIGMA_ACTIVITIES_OPERATION;
const ACTIVITIES_MUTATION_KEY = "5359:17106:row-mutation";

/**
 * Activity row request builder (CF-129 contract, exact paths):
 *   - toggle: PUT /api/v1/marketing-team-member/activities/{id} { status }
 *   - delete: DELETE /api/v1/marketing-team-member/activities/{id}
 * Status enum is pending | published | archived (aliases active=published,
 * inactive=archived): the switch flips between archived (off) and published
 * (on) using the canonical values. Editing a published activity returns it to
 * pending per the contract, which the refetched GET reflects.
 */
function activityRowRequest(
  activity: Record<string, unknown>,
  rowKind: "toggle" | "delete",
): { method: string; path: string; body?: Record<string, string | boolean> } | null {
  if (rowKind !== "toggle") {
    return { method: "DELETE", path: `/api/v1/marketing-team-member/activities/${activity.id as string}` };
  }
  const status = activity.status === "archived" ? "published" : "archived";
  return {
    method: "PUT",
    path: `/api/v1/marketing-team-member/activities/${activity.id as string}`,
    body: { status },
  };
}

/** Status toggle (switch) for one bound activity row → PUT { status }. */
export function figmaActivityToggleProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    {
      operation: ACTIVITIES_OPERATION,
      frameId: ACTIVITIES_FRAME,
      mutationKey: ACTIVITIES_MUTATION_KEY,
    },
    rowNodeId,
    "toggle",
    activityRowRequest,
  );
}

/** Delete for one bound activity row → DELETE /activities/{id}. */
export function figmaActivityDeleteProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    {
      operation: ACTIVITIES_OPERATION,
      frameId: ACTIVITIES_FRAME,
      mutationKey: ACTIVITIES_MUTATION_KEY,
    },
    rowNodeId,
    "delete",
    activityRowRequest,
  );
}

// ── Collection row mutations (CF-132 categories) ─────────────────────────────
const CATEGORIES_FRAME = "5449:19126";
export const FIGMA_CATEGORIES_OPERATION = "GET /api/v1/marketing-team-member/categories";
const CATEGORIES_OPERATION = FIGMA_CATEGORIES_OPERATION;
const CATEGORIES_MUTATION_KEY = "5449:19126:row-mutation";

/**
 * Category row request builder (CF-132 contract, exact paths):
 *   - toggle: PUT /api/v1/marketing-team-member/categories/{id} { status }
 *   - delete: DELETE /api/v1/marketing-team-member/categories/{id}
 * Category status is active | inactive: the switch flips between them using
 * the canonical values.
 */
function categoryRowRequest(
  category: Record<string, unknown>,
  rowKind: "toggle" | "delete",
): { method: string; path: string; body?: Record<string, string | boolean> } | null {
  if (rowKind !== "toggle") {
    return { method: "DELETE", path: `/api/v1/marketing-team-member/categories/${category.id as string}` };
  }
  const status = category.status === "inactive" ? "active" : "inactive";
  return {
    method: "PUT",
    path: `/api/v1/marketing-team-member/categories/${category.id as string}`,
    body: { status },
  };
}

/** Status toggle (switch) for one bound category row → PUT { status }. */
export function figmaCategoryToggleProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    {
      operation: CATEGORIES_OPERATION,
      frameId: CATEGORIES_FRAME,
      mutationKey: CATEGORIES_MUTATION_KEY,
    },
    rowNodeId,
    "toggle",
    categoryRowRequest,
  );
}

/** Delete for one bound category row → DELETE /categories/{id}. */
export function figmaCategoryDeleteProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    {
      operation: CATEGORIES_OPERATION,
      frameId: CATEGORIES_FRAME,
      mutationKey: CATEGORIES_MUTATION_KEY,
    },
    rowNodeId,
    "delete",
    categoryRowRequest,
  );
}

// ── Collection row mutations (CF-133 users) ─────────────────────────────────
const USERS_FRAME = "5359:17424";
export const FIGMA_USERS_OPERATION = "GET /api/v1/users";
const USERS_OPERATION = FIGMA_USERS_OPERATION;
const USERS_MUTATION_KEY = "5359:17424:row-mutation";

/**
 * User row request builder (CF-133 contract, exact paths):
 *   - toggle: PATCH /api/v1/users/{user_id} { is_active: boolean }
 * The contract binds no user delete endpoint, so "delete" is a no-op here.
 * No optimistic flip: on failure nothing changed client-side, so the painted
 * switch state stays correct (revert-on-failure for free).
 */
function usersRowRequest(
  user: Record<string, unknown>,
  rowKind: "toggle" | "delete",
): { method: string; path: string; body?: Record<string, string | boolean> } | null {
  if (rowKind !== "toggle") {
    return null;
  }
  return {
    method: "PATCH",
    path: `/api/v1/users/${user.id as string}`,
    body: { is_active: user.is_active !== true },
  };
}

/** Status toggle (switch) for one bound user row → PATCH { is_active }. */
export function figmaUserSwitchProps(rowNodeId: string): FigmaActionBinding {
  return figmaRowActionProps(
    { operation: USERS_OPERATION, frameId: USERS_FRAME, mutationKey: USERS_MUTATION_KEY },
    rowNodeId,
    "toggle",
    usersRowRequest,
  );
}

/**
 * Switch state for one bound user row: true when the row item has
 * is_active === true (the painted default), false only on loaded data.
 */
export function figmaUserSwitchChecked(rowNodeId: string): boolean {
  useFigmaPayloadVersion();
  const index = rowIndexFor(rowNodeId);
  const item = index !== null ? asRecord(itemsForOperation(USERS_OPERATION)[index]) : null;
  if (!item || !("is_active" in item)) {
    return true;
  }
  return item.is_active === true;
}

// ── Pagination state ────────────────────────────────────────────────────────
// Total pages are not bound via figmaReadOperations in this codegen, so the
// documented default (10) applies.
const FIGMA_PAGINATION_TOTAL_PAGES = 10;

const CHIP_ACTIVE_CLASS = "bg-brand-primary-a21d35";
const CHIP_INACTIVE_CLASS = "border-[#e2d9d0] border-[1px] bg-background-ffffff";
const CHIP_ACTIVE_TEXT_CLASS = "text-background-ffffff";
const CHIP_INACTIVE_TEXT_CLASS = "text-text-body-231f20";

const _paginationPages = new Map<string, number>();
let _paginationVersion = 0;
const _paginationListeners = new Set<() => void>();

function subscribePagination(listener: () => void): () => void {
  _paginationListeners.add(listener);
  return () => {
    _paginationListeners.delete(listener);
  };
}

function getPaginationSnapshot(): number {
  return _paginationVersion;
}

function setPaginationPage(group: string, page: number, max = FIGMA_PAGINATION_TOTAL_PAGES): void {
  const clamped = Math.min(Math.max(1, page), max);
  if (_paginationPages.get(group) === clamped) {
    return;
  }
  _paginationPages.set(group, clamped);
  _paginationVersion += 1;
  _paginationListeners.forEach((fn) => fn());
}

export interface FigmaPaginationBinding {
  currentPage: number;
  totalPages: number;
  canPrev: boolean;
  canNext: boolean;
  goTo: (page: number) => void;
  goPrev: () => void;
  goNext: () => void;
  /** Container class for a numeric page chip (active/inactive Figma styles). */
  chipClass: (page: number) => string;
  /** Text class for a numeric page chip label (active/inactive Figma styles). */
  chipTextClass: (page: number) => string;
}

export interface FigmaPaginationOptions {
  /** Operation key ("GET /path") whose repeated cards slice client-side. */
  listOperation?: string;
  /** Painted rows per page for that operation's cards. */
  pageSize?: number;
  /**
   * Server-paginated mode: payload key ("GET /path") whose data.total drives
   * totalPages, and the frame to refetch on every page change.
   */
  serverTotalKey?: string;
  /** Rows per page the server returns in that mode. */
  serverPageSize?: number;
  /** Frame id whose reads refetch after each page change. */
  serverFrameId?: string;
}

/** Pagination bar binding for a data-figma-pagination="true" container. */
export function figmaPaginationProps(
  group: string,
  options?: FigmaPaginationOptions,
): FigmaPaginationBinding {
  useSyncExternalStore(subscribePagination, getPaginationSnapshot, getPaginationSnapshot);
  useFigmaPayloadVersion();
  const currentPage = _paginationPages.get(group) ?? 1;
  const serverMode = Boolean(options?.serverTotalKey && options?.serverPageSize);
  let totalPages = FIGMA_PAGINATION_TOTAL_PAGES;
  if (serverMode) {
    const payload = _latestPayloads.get(options?.serverTotalKey as string);
    const data = asRecord(asRecord(payload)?.data) ?? asRecord(payload) ?? {};
    const total = typeof data.total === "number" ? data.total : 0;
    totalPages = total > 0 ? Math.ceil(total / (options?.serverPageSize ?? 1)) : 1;
  }
  const applyOffset = (page: number) => {
    if (options?.listOperation && options.pageSize) {
      setListOffset(options.listOperation, (page - 1) * options.pageSize);
    }
  };
  const goToPage = (page: number) => {
    setPaginationPage(group, page, Math.max(1, totalPages));
    applyOffset(page);
    if (options?.serverFrameId) {
      void loadReads(options.serverFrameId);
    }
  };
  return {
    currentPage,
    totalPages,
    canPrev: currentPage > 1,
    canNext: currentPage < totalPages,
    goTo: goToPage,
    goPrev: () => {
      goToPage(Math.max(1, currentPage - 1));
    },
    goNext: () => {
      goToPage(Math.min(totalPages, currentPage + 1));
    },
    chipClass: (page: number) =>
      page === currentPage ? CHIP_ACTIVE_CLASS : CHIP_INACTIVE_CLASS,
    chipTextClass: (page: number) =>
      page === currentPage ? CHIP_ACTIVE_TEXT_CLASS : CHIP_INACTIVE_TEXT_CLASS,
  };
}

// ── CF-128 audit log: filters, server pagination, user options ──────────────
const AUDIT_FRAME = "5329:12177";
export const AUDIT_READ_OP_BASE = "/api/v1/marketing-team-member/audit-log";
const AUDIT_CANONICAL_PATH = `${AUDIT_READ_OP_BASE}?limit=6&page=1`;
export const AUDIT_CANONICAL_OP = `GET ${AUDIT_CANONICAL_PATH}`;
const AUDIT_PAGINATION_GROUP = "5354:14485";
const AUDIT_PAGE_SIZE = 6;
const AUDIT_USER_SELECT_NODE = "5329:12265";

interface AuditFilters {
  dateRange: string;
  user: string;
  action: string;
}

// Default matches the painted Figma "Date range" option so the UI and the
// applied query agree before the visitor touches the filter.
let _auditFilters: AuditFilters = { dateRange: "Sep 1, 2026 - Sep 18, 2026", user: "", action: "" };
let _auditVersion = 0;
const _auditListeners = new Set<() => void>();

function subscribeAudit(listener: () => void): () => void {
  _auditListeners.add(listener);
  return () => {
    _auditListeners.delete(listener);
  };
}

function getAuditSnapshot(): number {
  return _auditVersion;
}

function setAuditFilters(filters: AuditFilters): void {
  _auditFilters = filters;
  _auditVersion += 1;
  _auditListeners.forEach((fn) => fn());
}

/** Painted "Date range" option → ISO date_from/date_to for the audit-log query. */
function auditDateRange(range: string): { dateFrom: string; dateTo: string } {
  // The painted Figma option is a literal range label: "Sep 1, 2026 - Sep 18, 2026".
  const painted = range.match(
    /^([A-Za-z]{3}) (\d{1,2}), (\d{4}) - ([A-Za-z]{3}) (\d{1,2}), (\d{4})$/,
  );
  if (painted) {
    const months: Record<string, string> = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    const iso = (mon: string, day: string, year: string) =>
      `${year}-${months[mon] ?? "01"}-${day.padStart(2, "0")}`;
    return {
      dateFrom: iso(painted[1], painted[2], painted[3]),
      dateTo: iso(painted[4], painted[5], painted[6]),
    };
  }
  const now = new Date();
  const iso = (date: Date) => date.toISOString().slice(0, 10);
  switch (range) {
    case "This Week": {
      const monday = new Date(now);
      monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
      return { dateFrom: iso(monday), dateTo: "" };
    }
    case "This Month":
      return { dateFrom: iso(new Date(now.getFullYear(), now.getMonth(), 1)), dateTo: "" };
    case "Last Month":
      return { dateFrom: iso(new Date(now.getFullYear(), now.getMonth() - 1, 1)), dateTo: "" };
    case "Last 30 Days":
    case "Last 30 days": {
      const cutoff = new Date(now);
      cutoff.setDate(cutoff.getDate() - 30);
      return { dateFrom: iso(cutoff), dateTo: "" };
    }
    case "This Year":
      return { dateFrom: `${now.getFullYear()}-01-01`, dateTo: "" };
    default:
      return { dateFrom: "", dateTo: "" };
  }
}

/** Audit-log read path for one page with the active filters applied. */
function auditLogPath(page: number): string {
  const params = new URLSearchParams();
  params.set("limit", String(AUDIT_PAGE_SIZE));
  params.set("page", String(page));
  if (_auditFilters.user) {
    params.set("user_id", _auditFilters.user);
  }
  if (_auditFilters.action) {
    params.set("action", _auditFilters.action);
  }
  const range = auditDateRange(_auditFilters.dateRange);
  if (range.dateFrom) {
    params.set("date_from", range.dateFrom);
  }
  if (range.dateTo) {
    params.set("date_to", range.dateTo);
  }
  return `${AUDIT_READ_OP_BASE}?${params.toString()}`;
}

/** Export path carrying the active audit filters (no page/limit). */
export function auditExportPath(): string {
  const params = new URLSearchParams();
  if (_auditFilters.user) {
    params.set("user_id", _auditFilters.user);
  }
  if (_auditFilters.action) {
    params.set("action", _auditFilters.action);
  }
  const range = auditDateRange(_auditFilters.dateRange);
  if (range.dateFrom) {
    params.set("date_from", range.dateFrom);
  }
  if (range.dateTo) {
    params.set("date_to", range.dateTo);
  }
  const query = params.toString();
  return query ? `${AUDIT_READ_OP_BASE}/export?${query}` : `${AUDIT_READ_OP_BASE}/export`;
}

/**
 * Publish the audit response's users array as the User filter select options
 * (value = actor id, label = actor name).
 */
function publishAuditUserOptions(): void {
  for (const [key, payload] of _latestPayloads) {
    if (!key.startsWith(`GET ${AUDIT_READ_OP_BASE}`)) {
      continue;
    }
    const data = asRecord(asRecord(payload)?.data) ?? asRecord(payload) ?? {};
    const users = Array.isArray(data.users) ? (data.users as unknown[]) : [];
    const options = users
      .map((user) => {
        const record = asRecord(user);
        return {
          value: record && record.id !== undefined ? String(record.id) : "",
          label: record && typeof record.name === "string" ? record.name : "",
        };
      })
      .filter((option) => option.value !== "" && option.label !== "");
    if (options.length > 0) {
      publishSelectOptions(AUDIT_USER_SELECT_NODE, options);
      return;
    }
  }
}

/**
 * Controlled binding for one audit filter select; every change refetches
 * GET /audit-log with the updated query (page reset to 1). Field names are the
 * Figma field keys; they map onto the filter query params.
 */
export type FigmaAuditFilterField = "date-range" | "user" | "action-type";

const AUDIT_FILTER_KEYS: Record<FigmaAuditFilterField, keyof AuditFilters> = {
  "date-range": "dateRange",
  user: "user",
  "action-type": "action",
};

export function figmaAuditFilterProps(
  field: FigmaAuditFilterField,
): FigmaFieldBinding {
  useSyncExternalStore(subscribeAudit, getAuditSnapshot, getAuditSnapshot);
  const key = AUDIT_FILTER_KEYS[field];
  return {
    value: _auditFilters[key],
    onChange: (event) => {
      setAuditFilters({ ..._auditFilters, [key]: event.target.value });
      setPaginationPage(AUDIT_PAGINATION_GROUP, 1);
      void loadReads(AUDIT_FRAME);
    },
  };
}

/** RESET control: clear every filter and refetch page 1. */
export function figmaAuditResetProps(): FigmaActionBinding {
  useSyncExternalStore(subscribeAudit, getAuditSnapshot, getAuditSnapshot);
  return {
    onClick: (event) => {
      event.preventDefault();
      setAuditFilters({ dateRange: "", user: "", action: "" });
      setPaginationPage(AUDIT_PAGINATION_GROUP, 1);
      void loadReads(AUDIT_FRAME);
    },
  };
}

// ── Blob downloads (export endpoints) ───────────────────────────────────────
const _pendingDownloads = new Set<string>();
let _downloadVersion = 0;
const _downloadListeners = new Set<() => void>();

function subscribeDownloads(listener: () => void): () => void {
  _downloadListeners.add(listener);
  return () => {
    _downloadListeners.delete(listener);
  };
}

function getDownloadSnapshot(): number {
  return _downloadVersion;
}

function setDownloadPending(key: string, pending: boolean): void {
  if (pending === _pendingDownloads.has(key)) {
    return;
  }
  if (pending) {
    _pendingDownloads.add(key);
  } else {
    _pendingDownloads.delete(key);
  }
  _downloadVersion += 1;
  _downloadListeners.forEach((fn) => fn());
}

export interface FigmaExportBlobOptions {
  method: string;
  /** Full contract path, including any query string. */
  path: string;
  /** JSON body for POST export endpoints (e.g. { year, view }). */
  body?: unknown;
  /** Download filename for the object-URL anchor. */
  filename: string;
  /** Expected response MIME type (also sent as the Accept header). */
  mime: string;
}

export type FigmaExportBlobBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
  /** True while the export request is in flight. */
  disabled?: boolean;
};

/**
 * Wire a control to download a binary export endpoint as a blob
 * (GET /audit-log/export → text/csv, POST /export-calendar → application/pdf).
 * Disabled while its own download is pending.
 */
export function figmaExportBlobProps(
  key: string,
  options: FigmaExportBlobOptions,
): FigmaExportBlobBinding {
  useSyncExternalStore(subscribeDownloads, getDownloadSnapshot, getDownloadSnapshot);
  return {
    onClick: (event) => {
      event.preventDefault();
      void runExportDownload(key, options);
    },
    disabled: _pendingDownloads.has(key),
  };
}

async function runExportDownload(
  key: string,
  options: FigmaExportBlobOptions,
): Promise<void> {
  if (_pendingDownloads.has(key)) {
    return;
  }
  setDownloadPending(key, true);
  try {
    const headers: Record<string, string> = { Accept: options.mime };
    const token = getAccessToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    if (options.body !== undefined) {
      headers["Content-Type"] = "application/json";
    }
    const response = await fetch(`${apiBaseUrl()}${options.path}`, {
      method: options.method,
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
    if (response.status === 401) {
      clearAllAuthStorage();
      clearReadPayloads();
      clearScreenStatus();
    }
    if (!response.ok) {
      let payload: unknown = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
      throw new FigmaApiRequestError(
        `Request failed (${response.status}) for ${options.method} ${options.path}`,
        response.status,
        payload,
      );
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = options.filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    publishScreenStatus("Export ready — your download has started.");
  } catch (error) {
    publishScreenStatus(describeApiError(error));
  } finally {
    setDownloadPending(key, false);
  }
}

// ── Read loading ────────────────────────────────────────────────────────────
/** Latest raw response bodies per "METHOD path" (shared with useCurrentUser). */
const _latestPayloads = new Map<string, unknown>();

/**
 * Defensive parse for the untyped GET /api/v1/users response: accept
 * {data:{items}}, {data:[…]}, {items:[…]} or a bare array and normalize every
 * item to the shape the manage-users display bindings expect.
 */
function normalizeUsersPayload(body: unknown): unknown {
  const record = asRecord(body);
  const data = asRecord(record?.data) ?? record;
  let items: unknown = null;
  let wrappedData: Record<string, unknown> | null = null;
  if (Array.isArray(body)) {
    items = body;
  } else if (data && Array.isArray(data.items)) {
    items = data.items;
    wrappedData = data;
  } else if (record && Array.isArray(record.items)) {
    items = record.items;
    wrappedData = record;
  }
  if (!Array.isArray(items)) {
    return body;
  }
  const normalized = items.map((raw) => {
    const item = asRecord(raw) ?? {};
    const first = typeof item.first_name === "string" ? item.first_name : "";
    const last = typeof item.last_name === "string" ? item.last_name : "";
    const name =
      typeof item.name === "string" && item.name.trim()
        ? item.name
        : `${first} ${last}`.trim();
    return {
      ...item,
      id: item.id ?? item.user_id ?? item._id,
      name,
      email: typeof item.email === "string" ? item.email : "",
      role: item.role ?? item.role_name ?? "",
      is_active: item.is_active === undefined ? true : item.is_active === true,
      last_active:
        item.last_active ?? item.last_active_at ?? item.last_login ?? "",
    };
  });
  if (Array.isArray(body)) {
    return normalized;
  }
  if (wrappedData) {
    if (record && record.data === wrappedData && wrappedData !== record) {
      return { ...record, data: { ...wrappedData, items: normalized } };
    }
    return { ...wrappedData, items: normalized };
  }
  return body;
}

function applyReadPayload(op: FigmaOperation, body: unknown): void {
  const key = `${op.method.toUpperCase()} ${op.path}`;
  const payload = key === "GET /api/v1/users" ? normalizeUsersPayload(body) : body;
  publishReadPayload(op.method, op.path, payload);
  _latestPayloads.set(key, payload);
  // Audit display bindings reference the canonical page-1 operation key, so a
  // page/filter-specific fetch is also published under that key.
  if (op.path.startsWith(`/api/v1/marketing-team-member/audit-log`)) {
    publishReadPayload(op.method, AUDIT_CANONICAL_PATH, payload);
    _latestPayloads.set(`GET ${AUDIT_CANONICAL_PATH}`, payload);
  }
  const values = valuesFromResponse(op, body);
  for (const [field, value] of Object.entries(values)) {
    if (typeof value === "string") {
      setFieldValue(field, value);
    }
  }
}

function collectReadOperations(frameId: string): FigmaOperation[] {
  const byKey = new Map<string, FigmaOperation>();
  for (const op of figmaReadOperations(frameId)) {
    byKey.set(`${op.method.toUpperCase()} ${op.path}`, op);
  }
  for (const key of figmaDisplayOperations(frameId)) {
    if (!byKey.has(key) && process.env.NODE_ENV !== "production") {
      console.warn(
        `[luna] display read ${key} has no field-contract operation for frame ${frameId}; not fetched.`,
      );
    }
  }
  return [...byKey.values()];
}

/**
 * Load EVERY bound read operation for a frame concurrently (Promise.allSettled,
 * never sequential await). Mock resolution goes through resolveBoundRead inside
 * loadReads only; every response (network or mock body) is published to the
 * display bindings via publishReadPayload.
 */
async function loadReads(frameId: string): Promise<void> {
  let ops = collectReadOperations(frameId);
  if (frameId === AUDIT_FRAME) {
    // CF-128: substitute the server path for the current page + filters.
    const page = _paginationPages.get(AUDIT_PAGINATION_GROUP) ?? 1;
    ops = ops.map((op) =>
      op.path.startsWith(AUDIT_READ_OP_BASE)
        ? { ...op, path: auditLogPath(page) }
        : op,
    );
  }
  if (ops.length === 0) {
    return;
  }

  publishScreenStatus("Loading data…", "loading");
  const results = await Promise.allSettled(
    ops.map(async (op) => {
      const resolution = resolveBoundRead(op);
      if (resolution.mode === "missing") {
        publishScreenStatus(resolution.diagnostic);
        return;
      }
      if (resolution.mode === "mock") {
        // No fetch for mock mode: pass the body through the same unwrap +
        // valuesFromResponse path as a real response.
        applyReadPayload(op, resolution.body);
        return;
      }
      const body = await figmaApiRequest(op.method, op.path);
      applyReadPayload(op, body);
    }),
  );

  const failure = results.find(
    (result): result is PromiseRejectedResult => result.status === "rejected",
  );
  if (failure) {
    publishScreenStatus(describeApiError(failure.reason));
    return;
  }
  if (frameId === AUDIT_FRAME) {
    publishAuditUserOptions();
  }
  clearScreenStatus();
}

// ── Screen data provider ────────────────────────────────────────────────────
/**
 * Mounted around every screen by the generated Next.js route wrappers. Put
 * screen state, API loading, and submit handlers here so the owned layout
 * files never need behavior edits.
 */
export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = routePath ? ROUTE_FRAME_IDS[routePath] ?? null : null;

  // Router wiring lives at the top of the provider (never inside onClick).
  useEffect(() => {
    _router = router;
    return () => {
      _router = null;
    };
  }, [router]);

  useEffect(() => {
    if (!frameId) {
      return;
    }
    void loadReads(frameId);
    // Clear stale API payloads when navigating between screens so the next
    // screen never briefly shows data from the previous route.
    return () => {
      clearReadPayloads();
    };
  }, [frameId]);

  return createElement(
    FrameIdContext.Provider,
    { value: frameId },
    createElement(FigmaScreenStatusRegion),
    children,
  );
}

// ── Screen data hook ────────────────────────────────────────────────────────
export interface FigmaScreenData {
  /** Empty until a contract binds this screen's form to a write operation. */
  bound: string;
  frameId: string | null;
  values: Record<string, string>;
  fieldErrors: Record<string, string>;
  statusMessage: string;
  submitting: boolean;
  reload: () => Promise<void>;
  submit: () => Promise<void>;
}

export function useFigmaScreenData(): FigmaScreenData {
  const frameId = useFrameId();
  useSyncExternalStore(subscribeFieldValues, getFieldValuesSnapshot, getFieldValuesSnapshot);
  useSyncExternalStore(subscribeFieldErrors, getFieldErrorSnapshot, getFieldErrorSnapshot);
  useSyncExternalStore(subscribeSubmitting, getSubmittingSnapshot, getSubmittingSnapshot);
  const [, setStatusVersion] = useState(0);

  useEffect(
    () =>
      subscribeScreenStatus(() => {
        setStatusVersion((v) => v + 1);
      }),
    [],
  );

  const reload = useCallback(async () => {
    if (!frameId) {
      return;
    }
    await loadReads(frameId);
  }, [frameId]);

  const submit = useCallback(async () => {
    if (!frameId) {
      return;
    }
    await submitScreen(frameId);
  }, [frameId]);

  return {
    bound: "",
    frameId,
    values: collectFieldValues(),
    fieldErrors: collectFieldErrors(),
    statusMessage: getScreenStatusSnapshot().message,
    submitting: frameId ? isSubmitting(frameId) : false,
    reload,
    submit,
  };
}

// ── Current user ────────────────────────────────────────────────────────────
const PROFILE_METHOD = "GET";
const PROFILE_PATH = "/api/v1/marketing-team-member/profile";
const PROFILE_KEY = `${PROFILE_METHOD} ${PROFILE_PATH}`;

let _currentUser: { name: string; avatarUrl: string } | null = null;
let _currentUserVersion = 0;
const _currentUserListeners = new Set<() => void>();
let _profileRequest: Promise<void> | null = null;

function subscribeCurrentUser(listener: () => void): () => void {
  _currentUserListeners.add(listener);
  return () => {
    _currentUserListeners.delete(listener);
  };
}

function getCurrentUserSnapshot(): number {
  return _currentUserVersion;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function userFromProfilePayload(payload: unknown): { name: string; avatarUrl: string } {
  const record = asRecord(payload);
  const data = asRecord(record?.data) ?? record ?? {};
  const firstName = typeof data.first_name === "string" ? data.first_name : "";
  const lastName = typeof data.last_name === "string" ? data.last_name : "";
  const avatarUrl = typeof data.avatar_url === "string" ? data.avatar_url : "";
  return { name: `${firstName} ${lastName}`.trim(), avatarUrl };
}

function applyCurrentUser(payload: unknown): void {
  _currentUser = userFromProfilePayload(payload);
  _currentUserVersion += 1;
  _currentUserListeners.forEach((fn) => fn());
}

/**
 * GET /api/v1/marketing-team-member/profile is explicitly bound in the Luna
 * contract (field-contract read + display binding 5335:4278). This fetches it
 * lazily once per session, shares the loadReads payload when already fetched,
 * and publishes it so display bindings resolve.
 */
function requestProfileOnce(): void {
  if (_profileRequest) {
    return;
  }
  const existing = _latestPayloads.get(PROFILE_KEY);
  if (existing !== undefined) {
    applyCurrentUser(existing);
    return;
  }
  _profileRequest = (async () => {
    try {
      const body = await figmaApiRequest(PROFILE_METHOD, PROFILE_PATH);
      publishReadPayload(PROFILE_METHOD, PROFILE_PATH, body);
      _latestPayloads.set(PROFILE_KEY, body);
      applyCurrentUser(body);
    } catch (error) {
      // Off-canvas only: the profile stays empty; allow a later retry.
      _profileRequest = null;
      publishScreenStatus(describeApiError(error));
    }
  })();
}

export function useCurrentUser(): { name: string; avatarUrl: string } {
  useSyncExternalStore(subscribeCurrentUser, getCurrentUserSnapshot, getCurrentUserSnapshot);
  useEffect(() => {
    requestProfileOnce();
  }, []);
  return _currentUser ?? { name: "", avatarUrl: "" };
}

// Re-exported for convenience: the sr-only status region is rendered by the
// provider above, and FigmaFieldError renders validation messages beside
// their field. useFigmaScreenData.ts stays a plain .ts module — the JSX
// lives in figmaScreenStatus.tsx.
export { FigmaFieldError, FigmaScreenStatusRegion } from "./figmaScreenStatus";
export { clearScreenStatus, publishScreenStatus } from "./figmaStatusStore";