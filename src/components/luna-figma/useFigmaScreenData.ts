/** luna-spec-codegen: data-hook — wire API data here; do not restyle.
 * Consumed reads (role read, non-empty fields) use resolveBoundRead from
 * figmaMockReads.ts inside loadReads.
 */
"use client";

import {
  createContext,
  createElement,
  Fragment,
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

import { figmaActionContract } from "./figmaActionContract";
import {
  clearReadPayloads,
  publishReadPayload,
  setListOffset,
  useFigmaPayloadVersion,
} from "./figmaDisplay";
import {
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  UNRESOLVED_FIGMA_FIELDS,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import {
  clearTokens,
  getAccessTokenForApi,
  markSessionRejected,
} from "@/lib/auth/token-storage";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  disabled?: boolean;
  "aria-invalid"?: boolean;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void; currentTarget?: EventTarget | null }) => void;
};

const ROUTE_TO_FRAME: Readonly<Record<string, string>> = {
  "": "5602:71490",
  "marketing-calendar/week": "5602:71490",
  "manage-holiday": "5621:28270",
  "week-calendar-historical-view": "5584:26945",
  "monthly-calendar-historical-view": "5645:33753",
  "marketing-team-member/annual-calendar-default": "5645:60757",
  "week-calendar-default-1": "5602:62165",
  "annual-calendar-default-1": "5524:33463",
};

const HOLIDAYS_LIST_OP = "GET /api/v1/marketing-team-member/holidays";
const HOLIDAY_PAGE_SIZE = 6;

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

// ── Router bridge (figmaActionProps is not a hook) ───────────────────────────
let navigateTo: (destination: string) => void = () => {};

function toggleChangeVariant(event: { preventDefault: () => void; currentTarget?: EventTarget | null }): void {
  event.preventDefault();
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const variantEl = target.closest('[data-figma-component="5602:68955"]');
  if (!variantEl?.parentElement) {
    return;
  }
  const siblings = [...variantEl.parentElement.children].filter(
    (el) => el instanceof HTMLElement && el.getAttribute("data-figma-component") === "5602:68955",
  );
  siblings.forEach((el) => {
    if (el === variantEl) {
      el.classList.toggle("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
  if (siblings.every((el) => el.classList.contains("hidden"))) {
    siblings[0]?.classList.remove("hidden");
  }
}

export function figmaActionProps(action: string): FigmaActionBinding {
  const contract = figmaActionContract(action);
  if (!contract) {
    return figmaUnresolvedActionProps(action);
  }
  return {
    onClick: (event) => {
      event.preventDefault();
      switch (contract.kind) {
        case "navigate":
          if (contract.destination) {
            navigateTo(contract.destination);
          }
          break;
        case "open_overlay":
          openFigmaDialog(action);
          break;
        case "close_overlay":
          closeFigmaDialog();
          break;
        case "change_variant":
          toggleChangeVariant(event);
          break;
        default:
          break;
      }
    },
  };
}

export function figmaUnresolvedActionProps(actionId: string): FigmaActionBinding {
  return {
    onClick: (event) => {
      event.preventDefault();
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

// ── Auth ─────────────────────────────────────────────────────────────────────
export function useCurrentUser(): { name: string; avatarUrl: string } {
  return { name: "", avatarUrl: "" };
}

// ── API ──────────────────────────────────────────────────────────────────────
function resolveApiBaseUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/$/, "");
  }
  return "";
}

function holidaysListPath(basePath: string, searchQuery: string): string {
  if (!searchQuery) {
    return basePath;
  }
  const params = new URLSearchParams({ search: searchQuery });
  return `${basePath}?${params.toString()}`;
}

function messageFromBody(body: unknown): string {
  if (typeof body === "object" && body !== null && "message" in body) {
    const message = (body as { message: unknown }).message;
    if (typeof message === "string" && message.trim()) {
      return message;
    }
  }
  return getApiErrorMessage(body);
}

function joinApiUrl(path: string): string {
  const base = resolveApiBaseUrl();
  return base ? `${base}${path.startsWith("/") ? path : `/${path}`}` : path;
}

async function apiRequest(
  method: string,
  path: string,
  body?: Record<string, unknown> | FormData,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const headers: Record<string, string> = {};
  const token = getAccessTokenForApi();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  let payload: BodyInit | undefined;
  if (body instanceof FormData) {
    payload = body;
  } else if (body !== undefined) {
    headers["Content-Type"] = "application/json";
    payload = JSON.stringify(body);
  }
  const response = await fetch(joinApiUrl(path), {
    method: method.toUpperCase(),
    headers,
    body: payload,
    credentials: "same-origin",
  });
  if (response.status === 401) {
    clearTokens();
    markSessionRejected();
    clearReadPayloads();
  }
  const text = (await response.text()).trim();
  let parsed: unknown = null;
  if (text) {
    try {
      parsed = JSON.parse(text) as unknown;
    } catch {
      parsed = text;
    }
  }
  return { ok: response.ok, status: response.status, body: parsed };
}

function unwrapPayload(op: FigmaOperation, payload: unknown): unknown {
  const record =
    payload !== null && typeof payload === "object" && !Array.isArray(payload)
      ? (payload as Record<string, unknown>)
      : null;
  if (op.responseUnwrap && record) {
    return record[op.responseUnwrap] ?? payload;
  }
  return payload;
}

function listItemCount(payload: unknown, op: FigmaOperation): number {
  const unwrapped = unwrapPayload(op, payload);
  const record =
    unwrapped !== null && typeof unwrapped === "object" && !Array.isArray(unwrapped)
      ? (unwrapped as Record<string, unknown>)
      : null;
  const items = record?.items;
  return Array.isArray(items) ? items.length : 0;
}

// ── Screen context ───────────────────────────────────────────────────────────
type ScreenContextValue = {
  routePath: string;
  frameId: string;
  values: FigmaFieldValues;
  setFieldValue: (field: string, value: string) => void;
  fieldErrors: Record<string, string>;
  submitting: boolean;
  loadingReads: boolean;
  submit: () => Promise<void>;
  loadReads: () => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number | ((p: number) => number)) => void;
  totalPages: number | null;
  listTotal: number | null;
  statusMessage: string;
};

const ScreenContext = createContext<ScreenContextValue | null>(null);

function frameIdForRoute(routePath: string): string {
  return ROUTE_TO_FRAME[routePath] ?? ROUTE_TO_FRAME[""];
}

export function FigmaScreenDataProvider({
  routePath = "",
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = frameIdForRoute(routePath);
  const [values, setValues] = useState<FigmaFieldValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [loadingReads, setLoadingReads] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [listTotal, setListTotal] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef("");

  useEffect(() => {
    navigateTo = (destination: string) => {
      router.push(destination);
    };
    return () => {
      navigateTo = () => {};
    };
  }, [router]);

  const setFieldValue = useCallback((field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleUnauthorized = useCallback(() => {
    toast.error("Session expired. Please sign in again.");
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.replace("/");
    }
  }, [router]);

  const loadReads = useCallback(async () => {
    const reads = figmaReadOperations(frameId);
    if (reads.length === 0) {
      return;
    }
    statusRef.current = "";
    setStatusMessage("");
    setLoadingReads(true);

    try {
      await Promise.all(
        reads.map(async (op) => {
          const resolution = resolveBoundRead(op);
          if (resolution.mode === "missing") {
            statusRef.current = resolution.diagnostic;
            setStatusMessage(resolution.diagnostic);
            return;
          }

          let body: unknown;
          if (resolution.mode === "mock") {
            body = resolution.body;
          } else {
            const requestPath =
              frameId === "5621:28270" && op.path.includes("/holidays")
                ? holidaysListPath(op.path, debouncedSearch)
                : op.path;
            const result = await apiRequest(op.method, requestPath);
            if (result.status === 401) {
              handleUnauthorized();
              return;
            }
            if (!result.ok) {
              toast.error(messageFromBody(result.body));
              return;
            }
            body = result.body;
          }

          publishReadPayload(op.method, op.path, body);

          const count = listItemCount(body, op);
          if (op.path.includes("/holidays")) {
            const pages = count > 0 ? Math.ceil(count / HOLIDAY_PAGE_SIZE) : 0;
            setListTotal(count);
            setTotalPages(pages > 1 ? pages : null);
            setCurrentPage((page) => {
              if (pages === 0) {
                return 1;
              }
              return page > pages ? pages : page;
            });
          }

          const initial = valuesFromResponse(op, unwrapPayload(op, body));
          if (Object.keys(initial).length > 0) {
            setValues((prev) => ({ ...prev, ...initial }));
          }
        }),
      );
    } finally {
      setLoadingReads(false);
    }
  }, [frameId, debouncedSearch, handleUnauthorized]);

  const searchInputValue = values["search-input"];
  useEffect(() => {
    const next = typeof searchInputValue === "string" ? searchInputValue.trim() : "";
    const timer = window.setTimeout(() => {
      setDebouncedSearch((prev) => {
        if (prev !== next) {
          setCurrentPage(1);
        }
        return next;
      });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchInputValue]);

  useEffect(() => {
    void loadReads();
  }, [loadReads]);

  useEffect(() => {
    if (frameId === "5621:28270") {
      setListOffset(HOLIDAYS_LIST_OP, (currentPage - 1) * HOLIDAY_PAGE_SIZE);
    }
  }, [currentPage, frameId]);

  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);

  const submit = useCallback(async () => {
    const writeOp = figmaWriteOperation(frameId);
    if (!writeOp) {
      return;
    }
    const clientErrors = validateValues(writeOp, values);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }
    setSubmitting(true);
    setFieldErrors({});
    try {
      const payload = requestBodyFor(writeOp, values);
      const result = await apiRequest(writeOp.method, writeOp.path, payload);
      if (result.status === 401) {
        handleUnauthorized();
        return;
      }
      if (!result.ok) {
        const serverErrors = fieldErrorsFromResponse(writeOp, result.body);
        if (Object.keys(serverErrors).length > 0) {
          setFieldErrors(serverErrors);
        } else {
          toast.error(messageFromBody(result.body));
        }
        return;
      }
      await loadReads();
    } finally {
      setSubmitting(false);
    }
  }, [frameId, values, loadReads, handleUnauthorized]);

  const ctx = useMemo<ScreenContextValue>(
    () => ({
      routePath,
      frameId,
      values,
      setFieldValue,
      fieldErrors,
      submitting,
      loadingReads,
      submit,
      loadReads,
      currentPage,
      setCurrentPage,
      totalPages,
      listTotal,
      statusMessage,
    }),
    [
      routePath,
      frameId,
      values,
      setFieldValue,
      fieldErrors,
      submitting,
      loadingReads,
      submit,
      loadReads,
      currentPage,
      totalPages,
      listTotal,
      statusMessage,
    ],
  );

  return createElement(
    ScreenContext.Provider,
    { value: ctx },
    createElement(Fragment, null, children),
    statusMessage
      ? createElement("p", { className: "sr-only", "aria-live": "polite" }, statusMessage)
      : null,
  );
}

function useScreenContext(): ScreenContextValue {
  const ctx = useContext(ScreenContext);
  if (!ctx) {
    return {
      routePath: "",
      frameId: ROUTE_TO_FRAME[""],
      values: {},
      setFieldValue: () => {},
      fieldErrors: {},
      submitting: false,
      loadingReads: false,
      submit: async () => {},
      loadReads: async () => {},
      currentPage: 1,
      setCurrentPage: () => {},
      totalPages: null,
      listTotal: null,
      statusMessage: "",
    };
  }
  return ctx;
}

export function figmaFieldProps(field: string): FigmaFieldBinding {
  const { values, setFieldValue, fieldErrors, submitting, loadingReads, frameId } =
    useScreenContext();
  const unresolved = UNRESOLVED_FIGMA_FIELDS[frameId]?.includes(field);
  const raw = values[field];
  const value = typeof raw === "boolean" ? (raw ? "true" : "false") : (raw ?? "");
  return {
    value,
    disabled: submitting || loadingReads,
    "aria-invalid": fieldErrors[field] ? true : undefined,
    onChange: unresolved
      ? (event) => {
          setFieldValue(field, event.target.value);
        }
      : (event) => {
          setFieldValue(field, event.target.value);
        },
  };
}

export function useFigmaScreenData() {
  const {
    frameId,
    values,
    submit,
    submitting,
    loadingReads,
    fieldErrors,
    currentPage,
    setCurrentPage,
    totalPages,
    listTotal,
  } = useScreenContext();
  useFigmaPayloadVersion();

  const writeOp = figmaWriteOperation(frameId);
  const reads = figmaReadOperations(frameId);
  const bound = writeOp ? `${writeOp.method} ${writeOp.path}` : reads[0] ? `${reads[0].method} ${reads[0].path}` : "";

  return {
    bound,
    values: Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, typeof v === "boolean" ? String(v) : (v ?? "")]),
    ) as Record<string, string>,
    fieldErrors,
    submitting,
    loadingReads,
    submit,
    currentPage,
    setCurrentPage,
    totalPages,
    listTotal,
    pageSize: HOLIDAY_PAGE_SIZE,
  };
}
