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
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { toast } from "@/components/ui/toast";

import { FIGMA_ACTION_DESTINATIONS, FIGMA_SUBMIT_ACTIONS } from "./figmaActionRoutes";
import {
  fieldErrorsFromResponse,
  figmaOperations,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  UNRESOLVED_FIGMA_FIELDS,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import { clearReadPayloads, figmaDisplayOperations, publishReadPayload } from "./figmaDisplay";
import { apiRequest, LunaApiError } from "./lunaApiClient";
import { resolveBoundRead } from "./figmaMockReads";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
  disabled?: boolean;
};

const ROUTE_TO_FRAME: Record<string, string> = {
  "my-profile": "5329:12027",
  "manage-users": "5359:17424",
  "annual-calendar-default": "5645:60757",
  "create-activity-type": "5449:18415",
  "manage-holiday": "5621:28270",
  "week-calendar-historical-view": "5584:26945",
  "manage-activity": "5359:17106",
  "manage-category": "5449:19126",
};

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

type ScreenContextValue = {
  bound: string;
  values: FigmaFieldValues;
  fieldErrors: Record<string, string>;
  submitting: boolean;
  loadingReads: boolean;
  statusMessage: string;
  setFieldValue: (figmaField: string, value: string) => void;
  submit: () => Promise<void>;
  reload: () => Promise<void>;
  setCalendarPeriod: (year: number, month: number) => void;
  calendarPeriod: { year: number; month: number };
};

const ScreenContext = createContext<ScreenContextValue | null>(null);

function useScreenContext(): ScreenContextValue {
  const ctx = useContext(ScreenContext);
  if (!ctx) {
    throw new Error("FigmaScreenDataProvider is required");
  }
  return ctx;
}

function operationKey(op: FigmaOperation): string {
  return `${op.method.toUpperCase()} ${op.path}`;
}

const CALENDAR_GET_PATH = "/api/v1/marketing-team-member/calendar";

const CALENDAR_PERIOD_FRAME_IDS = new Set(["5645:60757", "5584:26945"]);

function frameUsesCalendarPeriod(frameId: string | undefined): boolean {
  return frameId !== undefined && CALENDAR_PERIOD_FRAME_IDS.has(frameId);
}

function defaultCalendarPeriod(): { year: number; month: number } {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

function calendarQueryForOp(
  op: FigmaOperation,
  period: { year: number; month: number },
): Record<string, string> | null {
  if (op.method.toUpperCase() === "GET" && op.path === CALENDAR_GET_PATH) {
    return {
      year: String(period.year),
      month: String(period.month),
    };
  }
  return null;
}

function parseDisplayOperation(key: string): { method: string; path: string } | null {
  const space = key.indexOf(" ");
  if (space <= 0) {
    return null;
  }
  return { method: key.slice(0, space), path: key.slice(space + 1) };
}

async function fetchReadOperation(
  op: FigmaOperation,
  calendarPeriod?: { year: number; month: number },
): Promise<unknown> {
  const resolution = resolveBoundRead(op);
  if (resolution.mode === "missing") {
    throw new Error(resolution.diagnostic);
  }
  if (resolution.mode === "mock") {
    return resolution.body;
  }
  const query = calendarPeriod ? calendarQueryForOp(op, calendarPeriod) : null;
  return apiRequest(op.method, op.path, null, query);
}

let profileUserCache: { name: string; avatarUrl: string } | null = null;

function syncProfileUserCache(body: unknown): void {
  const outer =
    typeof body === "object" && body !== null && "data" in body
      ? (body as { data: Record<string, unknown> }).data
      : null;
  if (!outer) {
    return;
  }
  const first = typeof outer.first_name === "string" ? outer.first_name : "";
  const last = typeof outer.last_name === "string" ? outer.last_name : "";
  const name = [first, last].filter(Boolean).join(" ").trim();
  profileUserCache = { name, avatarUrl: "" };
}

export function useCurrentUser(): { name: string; avatarUrl: string } {
  const [user, setUser] = useState(() => profileUserCache ?? { name: "", avatarUrl: "" });

  useEffect(() => {
    if (profileUserCache) {
      return;
    }
    apiRequest("GET", "/api/v1/marketing-team-member/profile")
      .then((body) => {
        syncProfileUserCache(body);
        if (profileUserCache) {
          setUser(profileUserCache);
        }
      })
      .catch(() => undefined);
  }, []);

  return user;
}

export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = routePath ? ROUTE_TO_FRAME[routePath] : undefined;
  const [values, setValues] = useState<FigmaFieldValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [loadingReads, setLoadingReads] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [calendarPeriod, setCalendarPeriodState] = useState(defaultCalendarPeriod);

  const setCalendarPeriod = useCallback((year: number, month: number) => {
    setCalendarPeriodState({ year, month });
  }, []);

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    setStatusMessage("");
    setLoadingReads(true);

    try {
    const readOps = [...figmaReadOperations(frameId)];
    for (const displayKey of figmaDisplayOperations(frameId)) {
      const parsed = parseDisplayOperation(displayKey);
      if (!parsed) {
        continue;
      }
      const synthetic: FigmaOperation = {
        method: parsed.method,
        path: parsed.path,
        role: "read",
        fields: [],
        unboundRequired: [],
        responseUnwrap: null,
        submitNodeId: null,
      };
      if (!readOps.some((op) => operationKey(op) === operationKey(synthetic))) {
        readOps.push(synthetic);
      }
    }

    const results = await Promise.allSettled(
      readOps.map(async (op) => {
        try {
          const resolution = resolveBoundRead(op);
          if (resolution.mode === "missing") {
            setStatusMessage(resolution.diagnostic);
            return;
          }
          const body = await fetchReadOperation(
            op,
            frameUsesCalendarPeriod(frameId) ? calendarPeriod : undefined,
          );
          publishReadPayload(op.method, op.path, body);
          if (
            op.method.toUpperCase() === "GET" &&
            op.path === "/api/v1/marketing-team-member/profile"
          ) {
            syncProfileUserCache(body);
          }
          if (op.fields.length > 0) {
            setValues((prev) => ({ ...prev, ...valuesFromResponse(op, body) }));
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "Failed to load data.";
          setStatusMessage(message);
          toast.error(message);
        }
      }),
    );

    void results;
    } finally {
      setLoadingReads(false);
    }
  }, [frameId, calendarPeriod]);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) {
        void loadReads();
      }
    });
    return () => {
      cancelled = true;
    };
  }, [loadReads]);

  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);

  const setFieldValue = useCallback((figmaField: string, value: string) => {
    setValues((prev) => ({ ...prev, [figmaField]: value }));
    setFieldErrors((prev) => {
      if (!prev[figmaField]) {
        return prev;
      }
      const next = { ...prev };
      delete next[figmaField];
      return next;
    });
  }, []);

  const submit = useCallback(async () => {
    if (!frameId) {
      return;
    }
    const writeOp = figmaWriteOperation(frameId);
    if (!writeOp) {
      return;
    }

    if (writeOp.unboundRequired.length > 0) {
      const message = `This form cannot be submitted from the design: required API fields ${writeOp.unboundRequired.join(", ")} have no Figma control.`;
      toast.error(message);
      setStatusMessage(message);
      return;
    }

    const clientErrors = validateValues(writeOp, values);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setSubmitting(true);
    setStatusMessage("");
    try {
      const body = requestBodyFor(writeOp, values);
      const response = await apiRequest(writeOp.method, writeOp.path, body);
      if (typeof response === "object" && response !== null && "message" in response) {
        toast.success(String((response as { message: unknown }).message));
      } else {
        toast.success("Saved.");
      }
      await loadReads();
      if (frameId === "5449:18415") {
        router.push("/manage-activity");
      }
    } catch (error) {
      if (error instanceof LunaApiError) {
        const mapped = fieldErrorsFromResponse(writeOp, error.body);
        if (Object.keys(mapped).length > 0) {
          setFieldErrors(mapped);
        }
        toast.error(error.message);
        setStatusMessage(error.message);
      } else {
        const message = error instanceof Error ? error.message : "Request failed.";
        toast.error(message);
        setStatusMessage(message);
      }
    } finally {
      setSubmitting(false);
    }
  }, [frameId, loadReads, router, values]);

  const bound = useMemo(() => {
    if (!frameId) {
      return "";
    }
    return figmaOperations(frameId)
      .map((op) => operationKey(op))
      .join("|");
  }, [frameId]);

  const contextValue = useMemo<ScreenContextValue>(
    () => ({
      bound,
      values,
      fieldErrors,
      submitting,
      loadingReads,
      statusMessage,
      setFieldValue,
      submit,
      reload: loadReads,
      setCalendarPeriod,
      calendarPeriod,
    }),
    [
      bound,
      values,
      fieldErrors,
      submitting,
      loadingReads,
      statusMessage,
      setFieldValue,
      submit,
      loadReads,
      setCalendarPeriod,
      calendarPeriod,
    ],
  );

  return createElement(
    Fragment,
    null,
    createElement(
      "span",
      { className: "sr-only", role: "status", "aria-live": "polite" },
      loadingReads
        ? frameUsesCalendarPeriod(frameId)
          ? "Loading calendar data."
          : "Loading data."
        : statusMessage,
    ),
    createElement(ScreenContext.Provider, { value: contextValue }, children),
  );
}

export function useFigmaFieldProps(field: string): FigmaFieldBinding {
  const { values, fieldErrors, setFieldValue } = useScreenContext();
  const value = values[field];
  const errorId = fieldErrors[field] ? `figma-field-error-${field}` : undefined;
  return {
    value: typeof value === "string" ? value : value === undefined ? "" : String(value),
    onChange: (event) => setFieldValue(field, event.target.value),
    "aria-invalid": Boolean(fieldErrors[field]) || undefined,
    "aria-describedby": errorId,
  };
}

export function useFigmaActionProps(action: string): FigmaActionBinding {
  const router = useRouter();
  const destination = FIGMA_ACTION_DESTINATIONS[action];
  const { submit, submitting } = useScreenContext();

  if (FIGMA_SUBMIT_ACTIONS[action]) {
    return {
      disabled: submitting,
      onClick: (event) => {
        event.preventDefault();
        void submit();
      },
    };
  }

  if (!destination) {
    return {};
  }

  return {
    onClick: (event) => {
      event.preventDefault();
      router.push(`/${destination}`);
    },
  };
}

export function useFigmaScreenData() {
  const ctx = useScreenContext();
  return {
    bound: ctx.bound,
    values: ctx.values,
    fieldErrors: ctx.fieldErrors,
    submitting: ctx.submitting,
    loadingReads: ctx.loadingReads,
    submit: ctx.submit,
    reload: ctx.reload,
    setCalendarPeriod: ctx.setCalendarPeriod,
    calendarPeriod: ctx.calendarPeriod,
  };
}

export function useFigmaFieldError(field: string): string | undefined {
  const { fieldErrors } = useScreenContext();
  return fieldErrors[field];
}

export function isUnresolvedField(frameId: string, field: string): boolean {
  return (UNRESOLVED_FIGMA_FIELDS[frameId] ?? []).includes(field);
}

export { useFigmaPagination } from "./figmaPagination";
export { FigmaFieldInlineError } from "./figmaFieldInlineError";
