/** luna-spec-codegen: data-hook — wire API data here; do not restyle. */
"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import {
  USERS_INVITE_PATH,
  USERS_LIST_PATH,
  axiosErrorResult,
  inviteUser,
  listUsers,
  listUsersQueryFromFilters,
  type InviteUserRequest,
} from "@/lib/api/users";
import applicationModel from "./application-model.json";
import { clearReadPayloads, publishReadPayload } from "./figmaDisplay";
import {
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  figmaWriteOperationForSubmitNode,
  requestBodyFor,
  UNRESOLVED_FIGMA_FIELDS,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

const ROUTE_TO_FRAME: Readonly<Record<string, string>> = {
  "": "5584:26945",
  "week-calendar-historical-view": "5584:26945",
  "week-calendar-default": "5602:71490",
  "week-calendar-default-1": "5602:62165",
  "manage-users": "5359:17424",
};

const NAVIGATE_ACTIONS: Readonly<Record<string, string>> = {
  act_3817c363078d: "/manage-users",
  act_5dacece3ba1d: "/week-calendar-default",
  act_608aa0d2e082: "/week-calendar-default",
  act_6460d2bfa6d4: "/week-calendar-default-1",
  act_682a7a535751: "/week-calendar-default",
  act_a9b8b4dbf4c5: "/week-calendar-default-1",
  act_ed2875c8f17c: "/week-calendar-historical-view",
  act_fda92fdd76ba: "/week-calendar-historical-view",
};

const CLOSE_OVERLAY_ACTIONS = new Set([
  "act_0405fb82335d",
  "act_4d0d41980c96",
  "act_843f9ef07e04",
  "act_8e7dfd94745a",
  "act_9167c77e843f",
  "act_be37233c02a1",
  "act_dc40cbd8e8b6",
  "act_e54eb5cc83d4",
  "act_fb19efc84982",
]);

const DIALOG_ACTION_IDS = new Set(
  Object.keys(applicationModel.dialogs ?? {})
    .map((key) => key.replace(/^dialog:app:/, ""))
    .filter((id) => id.startsWith("act_")),
);

function resolveApiBaseUrl(): string {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "";
  return base.replace(/\/$/, "");
}

function joinApiUrl(path: string): string {
  const base = resolveApiBaseUrl();
  if (!base) {
    return path;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

async function apiRequest(
  method: string,
  path: string,
  body?: Record<string, string | boolean>,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const { getAccessTokenForApi } = await import("@/lib/auth/token-storage");
  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  const token = getAccessTokenForApi();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(joinApiUrl(path), {
    method: method.toUpperCase(),
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: "include",
  });
  let payload: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      payload = JSON.parse(text) as unknown;
    } catch {
      payload = text;
    }
  }
  if (response.status === 401) {
    clearReadPayloads();
    const { clearTokens, markSessionRejected } = await import("@/lib/auth/token-storage");
    clearTokens();
    markSessionRejected();
  }
  return { ok: response.ok, status: response.status, body: payload };
}

function unwrapPayload(payload: unknown, op: FigmaOperation): unknown {
  if (!op.responseUnwrap || payload === null || typeof payload !== "object") {
    return payload;
  }
  const record = payload as Record<string, unknown>;
  return record[op.responseUnwrap] ?? payload;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function roleLabel(role: unknown): string {
  if (role === "super_admin") {
    return "Super Admin";
  }
  if (role === "admin") {
    return "Admin";
  }
  return typeof role === "string" ? role : "";
}

function normalizeUsersListPayload(body: unknown): unknown {
  const envelope = asRecord(body);
  if (!envelope) {
    return body;
  }
  const data = asRecord(envelope.data) ?? envelope;
  let items: unknown[] | undefined;
  if (Array.isArray(data.items)) {
    items = data.items;
  } else if (Array.isArray(envelope.items)) {
    items = envelope.items;
  } else if (Array.isArray(data.users)) {
    items = data.users;
  } else if (Array.isArray(envelope.data)) {
    items = envelope.data;
  } else if (Array.isArray(body)) {
    items = body as unknown[];
  }
  if (!items) {
    return body;
  }
  const normalizedItems = items.map((entry) => {
    const user = asRecord(entry);
    if (!user) {
      return entry;
    }
    const first = typeof user.first_name === "string" ? user.first_name.trim() : "";
    const last = typeof user.last_name === "string" ? user.last_name.trim() : "";
    const displayName =
      [first, last].filter(Boolean).join(" ") ||
      (typeof user.username === "string" ? user.username : "");
    const lastActive =
      user.last_active ?? user.last_activity ?? user.last_active_at ?? null;
    return {
      ...user,
      display_name: displayName,
      role_label: roleLabel(user.role),
      last_active_at: lastActive,
    };
  });
  if (envelope.data !== undefined) {
    return { ...envelope, data: { ...data, items: normalizedItems } };
  }
  return { ...envelope, items: normalizedItems };
}

async function contractApiRequest(
  method: string,
  path: string,
  body?: Record<string, string | boolean>,
  filterValues?: FigmaFieldValues,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  if (method.toUpperCase() === "GET" && path === USERS_LIST_PATH) {
    try {
      const query = listUsersQueryFromFilters(filterValues ?? {});
      const data = await listUsers(query);
      return { ok: true, status: 200, body: data };
    } catch (error) {
      const result = axiosErrorResult(error);
      if (result.status === 401) {
        clearReadPayloads();
        const { clearTokens, markSessionRejected } = await import("@/lib/auth/token-storage");
        clearTokens();
        markSessionRejected();
      }
      return result;
    }
  }
  if (method.toUpperCase() === "POST" && path === USERS_INVITE_PATH && body) {
    try {
      const data = await inviteUser(body as InviteUserRequest);
      return { ok: true, status: 200, body: data };
    } catch (error) {
      const result = axiosErrorResult(error);
      if (result.status === 401) {
        clearReadPayloads();
        const { clearTokens, markSessionRejected } = await import("@/lib/auth/token-storage");
        clearTokens();
        markSessionRejected();
      }
      return result;
    }
  }
  return apiRequest(method, path, body);
}

function apiErrorMessage(body: unknown): string {
  const record = asRecord(body);
  if (record && record.success === false && typeof record.message === "string") {
    return record.message;
  }
  return getApiErrorMessage(body);
}

// ── Dialog state ────────────────────────────────────────────────────────────
const _dialogListeners = new Set<(actionId: string | null) => void>();

export function openFigmaDialog(actionId: string): void {
  _dialogListeners.forEach((fn) => fn(actionId));
}

export function closeFigmaDialog(): void {
  _dialogListeners.forEach((fn) => fn(null));
}

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

// ── Auth context ─────────────────────────────────────────────────────────────
export function useCurrentUser(): { name: string; avatarUrl: string } {
  return { name: "", avatarUrl: "" };
}

// ── Screen data context ──────────────────────────────────────────────────────
type FieldAccess = {
  getValue: (field: string) => string;
  setValue: (field: string, value: string) => void;
  getError: (field: string) => string | undefined;
};

let fieldAccessRef: FieldAccess | null = null;
let dispatchActionRef: ((actionId: string) => void) | null = null;
let submitAccessRef: (() => Promise<void>) | null = null;

type ScreenDataContextValue = {
  frameId: string;
  bound: string;
  values: FigmaFieldValues;
  fieldErrors: Record<string, string>;
  submit: () => Promise<void>;
  submitting: boolean;
  loadingReads: boolean;
  totalPages: number | null;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  calendarYear: number;
  calendarMonth: number;
  setCalendarYear: (year: number) => void;
  setCalendarMonth: (month: number) => void;
  loadReads: () => Promise<void>;
  statusMessage: string;
};

const ScreenDataContext = createContext<ScreenDataContextValue | null>(null);

function frameIdForRoute(routePath?: string): string {
  if (routePath === undefined) {
    return "";
  }
  return ROUTE_TO_FRAME[routePath] ?? "";
}

function initialUnresolvedValues(frameId: string): FigmaFieldValues {
  const keys = UNRESOLVED_FIGMA_FIELDS[frameId] ?? [];
  const values: FigmaFieldValues = {};
  for (const key of keys) {
    values[key] = "";
  }
  return values;
}

function FigmaScreenDataProviderInner({
  frameId,
  routePath,
  children,
}: {
  frameId: string;
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;

  const writeOp = frameId ? figmaWriteOperation(frameId) : undefined;
  const [values, setValues] = useState<FigmaFieldValues>(() => initialUnresolvedValues(frameId));
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [loadingReads, setLoadingReads] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const valuesRef = useRef(values);
  valuesRef.current = values;
  const userFiltersMountedRef = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const now = new Date();
  const [calendarYear, setCalendarYear] = useState(now.getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(now.getMonth() + 1);

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    setStatusMessage("");
    setLoadingReads(true);
    const operations = figmaReadOperations(frameId);
    try {
      await Promise.all(
        operations.map(async (op) => {
          const resolution = resolveBoundRead(op);
          if (resolution.mode === "missing") {
            setStatusMessage(resolution.diagnostic);
            return;
          }
          let body: unknown;
          if (resolution.mode === "mock") {
            body = resolution.body;
          } else {
            const result = await contractApiRequest(
              op.method,
              op.path,
              undefined,
              valuesRef.current,
            );
            body = result.body;
            if (!result.ok) {
              if (result.status === 401) {
                clearReadPayloads();
                routerRef.current.push("/");
                toast.error(apiErrorMessage(result.body));
              } else if (result.status !== 401) {
                toast.error(apiErrorMessage(result.body));
              }
              return;
            }
          }
          if (op.path === USERS_LIST_PATH) {
            body = normalizeUsersListPayload(body);
          }
          publishReadPayload(op.method, op.path, body);
          const unwrapped = unwrapPayload(body, op);
          if (op.fields.length > 0) {
            setValues((prev) => ({ ...prev, ...valuesFromResponse(op, unwrapped) }));
          }
          const record =
            unwrapped !== null && typeof unwrapped === "object" && !Array.isArray(unwrapped)
              ? (unwrapped as Record<string, unknown>)
              : null;
          const pages = record?.total_pages ?? record?.totalPages;
          if (typeof pages === "number" && pages > 0) {
            setTotalPages(pages);
          }
        }),
      );
    } finally {
      setLoadingReads(false);
    }
  }, [frameId]);

  useEffect(() => {
    void loadReads();
  }, [loadReads, calendarYear, calendarMonth, currentPage]);

  useEffect(() => {
    if (frameId !== "5359:17424") {
      userFiltersMountedRef.current = false;
      return;
    }
    if (!userFiltersMountedRef.current) {
      userFiltersMountedRef.current = true;
      return;
    }
    const handle = globalThis.setTimeout(() => {
      void loadReads();
    }, 350);
    return () => {
      globalThis.clearTimeout(handle);
    };
  }, [
    frameId,
    loadReads,
    values["role-filter"],
    values["search-input"],
    values["status-filter"],
  ]);

  useEffect(() => {
    setValues(initialUnresolvedValues(frameId));
    setFieldErrors({});
    setCurrentPage(1);
    setTotalPages(null);
  }, [frameId, routePath]);

  const submit = useCallback(async () => {
    if (!writeOp) {
      return;
    }
    const clientErrors = validateValues(writeOp, values);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }
    setFieldErrors({});
    setSubmitting(true);
    try {
      const payload = requestBodyFor(writeOp, values);
      const result = await contractApiRequest(writeOp.method, writeOp.path, payload, values);
      if (!result.ok) {
        if (result.status === 401) {
          routerRef.current.push("/");
          toast.error(apiErrorMessage(result.body));
          return;
        }
        const serverErrors = fieldErrorsFromResponse(writeOp, result.body);
        if (Object.keys(serverErrors).length > 0) {
          setFieldErrors(serverErrors);
        } else {
          toast.error(apiErrorMessage(result.body));
        }
        return;
      }
      const successBody = asRecord(result.body);
      if (successBody && typeof successBody.message === "string" && successBody.message.trim()) {
        toast.success(successBody.message);
      }
      closeFigmaDialog();
      await loadReads();
    } finally {
      setSubmitting(false);
    }
  }, [loadReads, values, writeOp]);

  useEffect(() => {
    submitAccessRef = submit;
    return () => {
      if (submitAccessRef === submit) {
        submitAccessRef = null;
      }
    };
  }, [submit]);

  const dispatchAction = useCallback((actionId: string) => {
    const destination = NAVIGATE_ACTIONS[actionId];
    if (destination) {
      routerRef.current.push(destination);
      return;
    }
    if (CLOSE_OVERLAY_ACTIONS.has(actionId)) {
      closeFigmaDialog();
      return;
    }
    if (DIALOG_ACTION_IDS.has(actionId)) {
      openFigmaDialog(actionId);
      return;
    }
  }, []);

  useEffect(() => {
    dispatchActionRef = dispatchAction;
    return () => {
      if (dispatchActionRef === dispatchAction) {
        dispatchActionRef = null;
      }
    };
  }, [dispatchAction]);

  useEffect(() => {
    fieldAccessRef = {
      getValue: (field) => {
        const value = values[field];
        return typeof value === "string" ? value : value === undefined ? "" : String(value);
      },
      setValue: (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        setFieldErrors((prev) => {
          if (!prev[field]) {
            return prev;
          }
          const next = { ...prev };
          delete next[field];
          return next;
        });
      },
      getError: (field) => fieldErrors[field],
    };
    return () => {
      if (fieldAccessRef) {
        fieldAccessRef = null;
      }
    };
  }, [fieldErrors, values]);

  const contextValue = useMemo<ScreenDataContextValue>(
    () => ({
      frameId,
      bound: writeOp ? `${writeOp.method} ${writeOp.path}` : "",
      values,
      fieldErrors,
      submit,
      submitting,
      totalPages,
      currentPage,
      setCurrentPage,
      calendarYear,
      calendarMonth,
      setCalendarYear,
      setCalendarMonth,
      loadReads,
      loadingReads,
      statusMessage,
    }),
    [
      calendarMonth,
      calendarYear,
      currentPage,
      fieldErrors,
      frameId,
      loadReads,
      loadingReads,
      statusMessage,
      submit,
      submitting,
      totalPages,
      values,
      writeOp,
    ],
  );

  return createElement(
    ScreenDataContext.Provider,
    { value: contextValue },
    statusMessage
      ? createElement("span", { className: "sr-only", "aria-live": "polite" }, statusMessage)
      : null,
    children,
  );
}

export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const frameId = frameIdForRoute(routePath);
  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);
  return createElement(FigmaScreenDataProviderInner, { frameId, routePath, children });
}

export function useFigmaScreenData(): ScreenDataContextValue {
  const ctx = useContext(ScreenDataContext);
  if (ctx) {
    return ctx;
  }
  return {
    frameId: "",
    bound: "",
    values: {},
    fieldErrors: {},
    submit: async () => {},
    submitting: false,
    loadingReads: false,
    totalPages: null,
    currentPage: 1,
    setCurrentPage: () => {},
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth() + 1,
    setCalendarYear: () => {},
    setCalendarMonth: () => {},
    loadReads: async () => {},
    statusMessage: "",
  };
}

export function figmaFieldProps(field: string): FigmaFieldBinding {
  const access = fieldAccessRef;
  const error = access?.getError(field);
  return {
    value: access?.getValue(field) ?? "",
    onChange: (event) => access?.setValue(field, event.target.value),
    ...(error
      ? { "aria-invalid": true as const, "aria-describedby": `figma-field-error-${field}` }
      : {}),
  };
}

export function useFigmaActionProps(actionId: string): FigmaActionBinding {
  const router = useRouter();
  return useMemo(
    () => ({
      onClick: (event) => {
        event.preventDefault();
        const destination = NAVIGATE_ACTIONS[actionId];
        if (destination) {
          router.push(destination);
          return;
        }
        if (CLOSE_OVERLAY_ACTIONS.has(actionId)) {
          closeFigmaDialog();
          return;
        }
        if (DIALOG_ACTION_IDS.has(actionId)) {
          openFigmaDialog(actionId);
          return;
        }
      },
    }),
    [actionId, router],
  );
}

export function figmaActionProps(action: string): FigmaActionBinding {
  return {
    onClick: (event) => {
      event.preventDefault();
      dispatchActionRef?.(action);
    },
  };
}

export function figmaSubmitActionProps(submitNodeId: string): FigmaActionBinding {
  const frameId = "5359:17424";
  const bound = figmaWriteOperationForSubmitNode(frameId, submitNodeId);
  return {
    onClick: (event) => {
      event.preventDefault();
      if (!bound) {
        return;
      }
      void submitAccessRef?.();
    },
  };
}

export function useFigmaSubmitActionProps(submitNodeId: string): FigmaActionBinding {
  const { frameId, submit } = useFigmaScreenData();
  const bound = frameId ? figmaWriteOperationForSubmitNode(frameId, submitNodeId) : undefined;
  return useMemo(
    () => ({
      onClick: (event) => {
        event.preventDefault();
        if (!bound) {
          return;
        }
        void submit();
      },
    }),
    [bound, submit],
  );
}

export function useFigmaSubmitDisabled(submitNodeId: string): boolean {
  const { frameId, submitting, loadingReads } = useFigmaScreenData();
  const bound = frameId ? figmaWriteOperationForSubmitNode(frameId, submitNodeId) : undefined;
  return Boolean(bound && (submitting || loadingReads));
}

export function figmaUnresolvedActionProps(actionId: string): FigmaActionBinding {
  return {
    onClick: () => {
      if (process.env.NODE_ENV !== "production") {
        globalThis.console.warn(
          "[luna] unresolved action clicked:",
          actionId,
          "— no prototype reaction or submit binding found; wire manually.",
        );
      }
    },
  };
}
