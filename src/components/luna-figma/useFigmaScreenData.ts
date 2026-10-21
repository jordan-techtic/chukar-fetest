/** luna-spec-codegen: data-hook — wire API data here; do not restyle. */
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

import { toast } from "@/components/ui/sonner";
import { DEFAULT_SEARCH_DEBOUNCE_MS } from "@/lib/constants";

import apiClient from "@/lib/api/client";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";

import { figmaApplicationAction } from "./figmaActionRegistry";
import {
  figmaDisplayOperations,
  publishReadPayload,
  clearReadPayloads,
  useFigmaPayloadVersion,
} from "./figmaDisplay";
import {
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  figmaWriteOperationForSubmit,
  requestBodyFor,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import { setFigmaFieldErrors } from "./figmaFieldErrors";
import { registerHolidayReload } from "./figmaHolidayMutations";
import { resolveBoundRead } from "./figmaMockReads";

export {
  figmaHolidayPaginationActionProps,
  figmaHolidayPaginationSummary,
  figmaHolidayRowActionProps,
  figmaHolidayUploadListProps,
} from "./figmaHolidayMutations";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  disabled?: boolean;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void; currentTarget: EventTarget | null }) => void;
  disabled?: boolean;
};

const ROUTE_TO_FRAME: Readonly<Record<string, string>> = {
  "": "5584:26945",
  "week-calendar-historical-view": "5584:26945",
  "week-calendar-default": "5602:71490",
  "week-calendar-default-1": "5602:62165",
  "manage-holiday": "5621:28270",
  "manage-users": "5359:17424",
};

function routePathToFrameId(routePath?: string): string {
  const key = (routePath ?? "").replace(/^\//, "");
  return ROUTE_TO_FRAME[key] ?? "";
}

function parseOperationKey(key: string): { method: string; path: string } {
  const space = key.indexOf(" ");
  return { method: key.slice(0, space).toUpperCase(), path: key.slice(space + 1) };
}

function collectReadOperations(frameId: string): FigmaOperation[] {
  const ops = [...figmaReadOperations(frameId)];
  const seen = new Set(ops.map((op) => `${op.method.toUpperCase()} ${op.path}`));
  for (const key of figmaDisplayOperations(frameId)) {
    if (seen.has(key)) {
      continue;
    }
    const { method, path } = parseOperationKey(key);
    ops.push({
      method,
      path,
      role: "read",
      fields: [],
      unboundRequired: [],
      responseUnwrap: "data",
      submitNodeId: null,
    });
    seen.add(key);
  }
  return ops;
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

// ── Navigation runtime (figmaActionProps is not a hook) ─────────────────────
type NavigateFn = (destination: string) => void;
let navigateFn: NavigateFn | null = null;

function navigateToRoute(route: string): void {
  const path = route.startsWith("/") ? route : `/${route}`;
  navigateFn?.(path);
}

function runPrototypeVariantToggle(sourceNodeId: string | undefined, el: Element): void {
  if (!sourceNodeId) {
    return;
  }
  const variant = el.closest('[data-figma-component="5602:68955"]');
  if (!variant?.parentElement) {
    return;
  }
  const parent = variant.parentElement;
  const nodeId = variant.getAttribute("data-figma-node") ?? "";
  const rowKey = nodeId.split(";").slice(0, 2).join(";");
  const movingToMenu = !nodeId.includes("5725:52065");
  parent.querySelectorAll('[data-figma-component="5602:68955"]').forEach((child) => {
    const id = child.getAttribute("data-figma-node") ?? "";
    if (!id.startsWith(rowKey)) {
      return;
    }
    if (id.includes("5725:52065")) {
      child.classList.toggle("hidden", !movingToMenu);
    } else if (id.includes("5725:47922")) {
      child.classList.toggle("hidden", movingToMenu);
    } else if (id.includes("5602:69270")) {
      child.classList.add("hidden");
    }
  });
}

function handleFigmaActionClick(
  actionId: string,
  event: { preventDefault: () => void; currentTarget: EventTarget | null },
): void {
  const contract = figmaApplicationAction(actionId);
  if (!contract) {
    return;
  }
  switch (contract.kind) {
    case "navigate": {
      if (!contract.destination_route) {
        return;
      }
      event.preventDefault();
      navigateToRoute(contract.destination_route);
      return;
    }
    case "open_dialog": {
      event.preventDefault();
      openFigmaDialog(actionId);
      return;
    }
    case "close_dialog": {
      event.preventDefault();
      closeFigmaDialog();
      return;
    }
    case "prototype": {
      event.preventDefault();
      if (event.currentTarget instanceof Element) {
        runPrototypeVariantToggle(contract.source_node_id, event.currentTarget);
      }
      return;
    }
    default:
      return;
  }
}

export function figmaActionProps(action: string): FigmaActionBinding {
  return {
    onClick: (event) => handleFigmaActionClick(action, event),
  };
}

/** Hook form of action bindings when a component can call useRouter directly. */
export function useFigmaActionProps(action: string): FigmaActionBinding {
  const router = useRouter();
  useEffect(() => {
    navigateFn = (destination: string) => {
      router.push(destination);
    };
  }, [router]);
  return useMemo(
    () => ({
      onClick: (event) => handleFigmaActionClick(action, event),
    }),
    [action],
  );
}

/** Submit control bound in figmaFieldContract (Save / Create, etc.). */
export function figmaSubmitActionProps(
  submitNodeId: string,
  options?: { onSuccess?: () => void },
): FigmaActionBinding {
  return {
    disabled: formSubmitting,
    onClick: async (event) => {
      event.preventDefault();
      const ok = await runSubmitForNode?.(submitNodeId);
      if (ok) {
        options?.onSuccess?.();
      }
    },
  };
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

// ── Screen context ───────────────────────────────────────────────────────────
type FigmaScreenContextValue = {
  bound: string;
  frameId: string;
  values: FigmaFieldValues;
  setFieldValue: (field: string, value: string | boolean) => void;
  submit: () => Promise<void>;
  submitting: boolean;
  loadReads: () => Promise<void>;
  statusMessage: string;
  totalPages: number | undefined;
};

const emptyScreen: FigmaScreenContextValue = {
  bound: "",
  frameId: "",
  values: {},
  setFieldValue: () => {},
  submit: async () => {},
  submitting: false,
  loadReads: async () => {},
  statusMessage: "",
  totalPages: undefined,
};

const FigmaScreenContext = createContext<FigmaScreenContextValue>(emptyScreen);

let fieldSnapshot: FigmaFieldValues = {};
let patchFieldValue: ((field: string, value: string | boolean) => void) | null = null;
let mergeFieldValues: ((patch: FigmaFieldValues) => void) | null = null;
let formSubmitting = false;
let runSubmitForNode: ((submitNodeId: string) => Promise<boolean>) | null = null;

const HOLIDAYS_LIST_PATH = "/api/v1/marketing-team-member/holidays";

export function figmaFieldProps(field: string): FigmaFieldBinding {
  const value = fieldSnapshot[field];
  return {
    value: typeof value === "boolean" ? (value ? "true" : "false") : (value ?? ""),
    disabled: formSubmitting,
    onChange: (event) => {
      patchFieldValue?.(field, event.target.value);
    },
  };
}

function readQueryParams(
  op: FigmaOperation,
  values: FigmaFieldValues,
): Record<string, string> | undefined {
  if (op.method.toUpperCase() !== "GET" || op.path !== HOLIDAYS_LIST_PATH) {
    return undefined;
  }
  const rawSearch = values["search-input"];
  const search = typeof rawSearch === "string" ? rawSearch.trim() : "";
  if (!search) {
    return undefined;
  }
  return { search };
}

async function executeRead(
  op: FigmaOperation,
  setStatus: (msg: string) => void,
  values: FigmaFieldValues,
): Promise<void> {
  const resolution =
    op.fields.length > 0 ? resolveBoundRead(op) : ({ mode: "network" } as const);

  if (resolution.mode === "missing") {
    setStatus(resolution.diagnostic);
    return;
  }

  if (resolution.mode === "mock") {
    publishReadPayload(op.method, op.path, resolution.body);
    const initial = valuesFromResponse(op, resolution.body);
    if (Object.keys(initial).length > 0) {
      mergeFieldValues?.(initial);
    }
    return;
  }

  try {
    const response = await apiClient.request({
      method: op.method.toLowerCase() as "get",
      url: op.path,
      params: readQueryParams(op, values),
    });
    publishReadPayload(op.method, op.path, response.data);
    const initial = valuesFromResponse(op, response.data);
    if (Object.keys(initial).length > 0) {
      mergeFieldValues?.(initial);
    }
  } catch (error) {
    toast.error(getApiErrorMessage(error));
    if (process.env.NODE_ENV !== "production") {
      globalThis.console.warn("[luna] read failed:", op.method, op.path, error);
    }
  }
}

export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = routePathToFrameId(routePath);
  const [values, setValues] = useState<FigmaFieldValues>({});
  const valuesRef = useRef(values);
  valuesRef.current = values;
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const payloadVersion = useFigmaPayloadVersion();

  useEffect(() => {
    navigateFn = (destination: string) => {
      router.push(destination);
    };
    return () => {
      if (navigateFn) {
        navigateFn = null;
      }
    };
  }, [router]);

  useEffect(() => {
    fieldSnapshot = values;
    patchFieldValue = (field, value) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    };
    mergeFieldValues = (patch) => {
      setValues((prev) => ({ ...prev, ...patch }));
    };
    return () => {
      patchFieldValue = null;
      mergeFieldValues = null;
    };
  }, [values]);

  useEffect(() => {
    formSubmitting = submitting;
  }, [submitting]);

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    setStatusMessage("");
    const ops = collectReadOperations(frameId);
    await Promise.allSettled(ops.map((op) => executeRead(op, setStatusMessage, valuesRef.current)));
  }, [frameId]);

  useEffect(() => {
    void loadReads();
  }, [loadReads]);

  useEffect(() => {
    registerHolidayReload(loadReads);
    return () => {
      registerHolidayReload(null);
    };
  }, [loadReads]);

  useEffect(() => {
    if (frameId !== "5621:28270") {
      return;
    }
    const timer = globalThis.setTimeout(() => {
      void loadReads();
    }, DEFAULT_SEARCH_DEBOUNCE_MS);
    return () => {
      globalThis.clearTimeout(timer);
    };
  }, [frameId, values["search-input"], loadReads]);

  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);

  const submitWrite = useCallback(
    async (op: FigmaOperation): Promise<boolean> => {
      if (op.unboundRequired.length > 0) {
        toast.error(
          `Cannot complete this action: missing ${op.unboundRequired.join(", ")}.`,
        );
        return false;
      }
      const clientErrors = validateValues(op, values);
      if (Object.keys(clientErrors).length > 0) {
        setFigmaFieldErrors(clientErrors);
        return false;
      }
      setFigmaFieldErrors({});
      setSubmitting(true);
      try {
        const body = requestBodyFor(op, values);
        const response = await apiClient.request({
          method: op.method.toLowerCase() as "post" | "put" | "patch" | "delete",
          url: op.path,
          data: Object.keys(body).length > 0 ? body : undefined,
        });
        const serverErrors = fieldErrorsFromResponse(op, response.data);
        if (Object.keys(serverErrors).length > 0) {
          setFigmaFieldErrors(serverErrors);
          return false;
        }
        const envelope = response.data as { message?: string };
        if (typeof envelope?.message === "string" && envelope.message.trim()) {
          toast.success(envelope.message);
        } else {
          toast.success("Changes saved successfully.");
        }
        await loadReads();
        return true;
      } catch (error: unknown) {
        const responseData =
          error && typeof error === "object" && "response" in error
            ? (error as { response?: { data?: unknown } }).response?.data
            : undefined;
        if (responseData) {
          setFigmaFieldErrors(fieldErrorsFromResponse(op, responseData));
        }
        toast.error(getApiErrorMessage(error));
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [values, loadReads],
  );

  const submit = useCallback(async () => {
    if (!frameId) {
      return;
    }
    const op = figmaWriteOperation(frameId);
    if (!op) {
      return;
    }
    await submitWrite(op);
  }, [frameId, submitWrite]);

  const submitForSubmitNode = useCallback(
    async (submitNodeId: string): Promise<boolean> => {
      if (!frameId) {
        return false;
      }
      const op = figmaWriteOperationForSubmit(frameId, submitNodeId);
      if (!op) {
        return false;
      }
      return submitWrite(op);
    },
    [frameId, submitWrite],
  );

  useEffect(() => {
    runSubmitForNode = submitForSubmitNode;
    return () => {
      runSubmitForNode = null;
    };
  }, [submitForSubmitNode]);

  const bound =
    collectReadOperations(frameId)
      .map((op) => `${op.method} ${op.path}`)
      .join(", ") || "";

  const ctx = useMemo(
    (): FigmaScreenContextValue => ({
      bound,
      frameId,
      values,
      setFieldValue: (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
      },
      submit,
      submitting,
      loadReads,
      statusMessage,
      totalPages: undefined,
    }),
    [bound, frameId, values, submit, submitting, loadReads, statusMessage, payloadVersion],
  );

  return createElement(
    FigmaScreenContext.Provider,
    { value: ctx },
    createElement(
      Fragment,
      null,
      statusMessage
        ? createElement("span", { className: "sr-only", role: "status" }, statusMessage)
        : null,
      children,
    ),
  );
}

export function useFigmaScreenData(): FigmaScreenContextValue {
  const ctx = useContext(FigmaScreenContext);
  if (!ctx.frameId && process.env.NODE_ENV !== "production") {
    globalThis.console.debug("[luna] useFigmaScreenData outside FigmaScreenDataProvider");
  }
  return ctx;
}
