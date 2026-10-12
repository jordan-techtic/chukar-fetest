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
  setListOffset,
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
    this.uiMessage = typeof envelope?.message === "string" ? envelope.message : "";
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
  act_580733380960: "/monthly-calendar-historical-view",
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
export function figmaFieldProps(field: string): FigmaFieldBinding {
  useSyncExternalStore(subscribeFieldValues, getFieldValuesSnapshot, getFieldValuesSnapshot);
  return {
    value: getFieldValue(field),
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

function setPaginationPage(group: string, page: number): void {
  const clamped = Math.min(Math.max(1, page), FIGMA_PAGINATION_TOTAL_PAGES);
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
}

/** Pagination bar binding for a data-figma-pagination="true" container. */
export function figmaPaginationProps(
  group: string,
  options?: FigmaPaginationOptions,
): FigmaPaginationBinding {
  useSyncExternalStore(subscribePagination, getPaginationSnapshot, getPaginationSnapshot);
  const currentPage = _paginationPages.get(group) ?? 1;
  const applyOffset = (page: number) => {
    if (options?.listOperation && options.pageSize) {
      setListOffset(options.listOperation, (page - 1) * options.pageSize);
    }
  };
  return {
    currentPage,
    totalPages: FIGMA_PAGINATION_TOTAL_PAGES,
    canPrev: currentPage > 1,
    canNext: currentPage < FIGMA_PAGINATION_TOTAL_PAGES,
    goTo: (page: number) => {
      setPaginationPage(group, page);
      applyOffset(page);
    },
    goPrev: () => {
      const page = Math.max(1, currentPage - 1);
      setPaginationPage(group, page);
      applyOffset(page);
    },
    goNext: () => {
      const page = Math.min(FIGMA_PAGINATION_TOTAL_PAGES, currentPage + 1);
      setPaginationPage(group, page);
      applyOffset(page);
    },
    chipClass: (page: number) =>
      page === currentPage ? CHIP_ACTIVE_CLASS : CHIP_INACTIVE_CLASS,
    chipTextClass: (page: number) =>
      page === currentPage ? CHIP_ACTIVE_TEXT_CLASS : CHIP_INACTIVE_TEXT_CLASS,
  };
}

// ── Read loading ────────────────────────────────────────────────────────────
/** Latest raw response bodies per "METHOD path" (shared with useCurrentUser). */
const _latestPayloads = new Map<string, unknown>();

function applyReadPayload(op: FigmaOperation, body: unknown): void {
  publishReadPayload(op.method, op.path, body);
  _latestPayloads.set(`${op.method.toUpperCase()} ${op.path}`, body);
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
  const ops = collectReadOperations(frameId);
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