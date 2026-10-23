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
import { toast } from "sonner";

type NextAppRouter = ReturnType<typeof useRouter>;

import { figmaActionDefinition } from "./figmaActionContract";
import { apiRequest } from "./figmaApiRequest";
import { clearReadPayloads, publishReadPayload } from "./figmaDisplay";
import {
  ACTIVITIES_LIST_PATH,
  MARKETING_CALENDAR_PATH,
  MARKETING_HISTORICAL_CALENDAR_PATH,
  USERS_INVITE_PATH,
  USERS_LIST_PATH,
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  UNRESOLVED_FIGMA_FIELDS,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";
import { frameIdForRoutePath } from "./figmaRouteFrames";
import { annualCalendarQueryParams } from "./figmaAnnualCalendarReadParams";
import { manageUsersListQueryParams } from "./figmaManageUsersReadParams";
import { weekActivitiesQueryParams } from "./figmaWeekCalendarReadParams";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import { listMarketingActivities } from "@/lib/api/marketing-team-member/activities";
import { getMarketingCalendar } from "@/lib/api/marketing-team-member/calendar";
import { getHistoricalCalendar } from "@/lib/api/marketing-team-member/historical";
import {
  mondayIsoWeekStart,
  weekRangeFromMondayStart,
} from "@/lib/api/marketing-team-member/week-range";
import {
  inviteUser,
  listUsers,
  setUserActive,
  type InviteUserRequest,
  type UserRecord,
} from "@/lib/api/users";

const WEEK_CALENDAR_FRAME_ID = "5602:71490";
const ANNUAL_CALENDAR_FRAME_ID = "5645:60757";
const MANAGE_USERS_FRAME_ID = "5359:17424";
const HISTORICAL_CALENDAR_FRAME_ID = "5584:26945";

const HISTORICAL_CONTRACT_GAP_MESSAGE =
  "Historical calendar data is unavailable (API contract gap). Retry when GET /api/v1/marketing-team-member/calendar/historical is available.";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  disabled?: boolean;
  "aria-invalid"?: boolean;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
  disabled?: boolean;
};

export interface FigmaScreenData {
  bound: string;
  frameId: string;
  values: FigmaFieldValues;
  fieldErrors: Record<string, string>;
  submit: (submitNodeId?: string) => Promise<void>;
  submitting: boolean;
  totalPages: number | undefined;
  currentPage: number;
  setCurrentPage: (value: number | ((prev: number) => number)) => void;
  calendarYear: number;
  calendarMonth: number;
  setCalendarPeriod: (year: number, month: number) => void;
  loadReads: () => Promise<void>;
  statusMessage: string;
  users: UserRecord[];
  toggleUserActive: (userId: string, isActive: boolean) => Promise<void>;
}

const defaultScreenData: FigmaScreenData = {
  bound: "",
  frameId: "",
  values: {},
  fieldErrors: {},
  submit: async () => {},
  submitting: false,
  totalPages: undefined,
  currentPage: 1,
  setCurrentPage: () => {},
  calendarYear: new Date().getFullYear(),
  calendarMonth: new Date().getMonth() + 1,
  setCalendarPeriod: () => {},
  loadReads: async () => {},
  statusMessage: "",
  users: [],
  toggleUserActive: async () => {},
};

const ScreenDataContext = createContext<FigmaScreenData>(defaultScreenData);

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

// ── Auth ────────────────────────────────────────────────────────────────────
export function useCurrentUser(): { name: string; avatarUrl: string } {
  return { name: "", avatarUrl: "" };
}

// ── Field props (plain function — synced from provider) ─────────────────────
type FieldBridge = {
  values: FigmaFieldValues;
  errors: Record<string, string>;
  setField: (field: string, value: string) => void;
  submitting: boolean;
  loadingReads: boolean;
};

let fieldBridge: FieldBridge = {
  values: {},
  errors: {},
  setField: () => {},
  submitting: false,
  loadingReads: false,
};

export function figmaFieldProps(field: string): FigmaFieldBinding {
  return {
    value: typeof fieldBridge.values[field] === "string" ? fieldBridge.values[field] : "",
    onChange: (event) => fieldBridge.setField(field, event.target.value),
    disabled: fieldBridge.submitting || fieldBridge.loadingReads,
    ...(fieldBridge.errors[field] ? { "aria-invalid": true as const } : {}),
  };
}

// ── Action props (plain function — router from provider) ───────────────────
let actionRouter: NextAppRouter | null = null;

function runFigmaAction(actionId: string, preventDefault: () => void): void {
  const contract = figmaActionDefinition(actionId);
  if (!contract) {
    return;
  }
  switch (contract.kind) {
    case "navigate": {
      if (!contract.destination || !actionRouter) {
        return;
      }
      preventDefault();
      actionRouter.push(contract.destination);
      return;
    }
    case "open_overlay": {
      preventDefault();
      openFigmaDialog(actionId);
      return;
    }
    case "close_overlay": {
      preventDefault();
      closeFigmaDialog();
      return;
    }
    case "change_variant": {
      preventDefault();
      return;
    }
    default:
      return;
  }
}

export function figmaActionProps(action: string): FigmaActionBinding {
  return {
    onClick: (event) => runFigmaAction(action, () => event.preventDefault()),
  };
}

/** Submit control bound to a contract write operation (by Figma submit node id). */
export function figmaSubmitProps(submitNodeId: string): FigmaActionBinding {
  return {
    onClick: (event) => {
      event.preventDefault();
      void submitBridge(submitNodeId);
    },
    disabled: fieldBridge.submitting || fieldBridge.loadingReads,
  };
}

let submitBridge: (submitNodeId: string) => Promise<void> = async () => {};

/** Hook for screens that build action bindings in component scope (uses App Router). */
export function useFigmaActionProps(): (actionId: string) => FigmaActionBinding {
  const router = useRouter();
  return useCallback(
    (actionId: string) => ({
      onClick: (event) => {
        const prev = actionRouter;
        actionRouter = router;
        try {
          runFigmaAction(actionId, () => event.preventDefault());
        } finally {
          actionRouter = prev;
        }
      },
    }),
    [router],
  );
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

function FigmaScreenDataProviderBody({
  routePath,
  weekStartMonday,
  children,
}: {
  routePath?: string;
  weekStartMonday?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = frameIdForRoutePath(routePath);
  const bound = frameId;
  const effectiveWeekStartMonday =
    weekStartMonday ??
    (frameId === HISTORICAL_CALENDAR_FRAME_ID ? mondayIsoWeekStart() : undefined);

  const [values, setValues] = useState<FigmaFieldValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState<number | undefined>(undefined);
  const [statusMessage, setStatusMessage] = useState("");
  const [calendarYear, setCalendarYear] = useState(() => {
    if (routePath === "week-calendar-default") {
      return 2026;
    }
    if (
      routePath === "marketing-calendar/annual" ||
      routePath === "annual-calendar-default"
    ) {
      return 2025;
    }
    return new Date().getFullYear();
  });
  const [calendarMonth, setCalendarMonth] = useState(() =>
    routePath === "week-calendar-default" ? 9 : new Date().getMonth() + 1,
  );
  const [loadingReads, setLoadingReads] = useState(false);
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [historicalContractGap, setHistoricalContractGap] = useState(false);

  useEffect(() => {
    actionRouter = router;
    return () => {
      if (actionRouter === router) {
        actionRouter = null;
      }
    };
  }, [router]);

  const setField = useCallback((field: string, value: string) => {
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

  useEffect(() => {
    fieldBridge = { values, errors: fieldErrors, setField, submitting, loadingReads };
  }, [values, fieldErrors, setField, submitting, loadingReads]);

  const setCalendarPeriod = useCallback((year: number, month: number) => {
    setCalendarYear(year);
    setCalendarMonth(month);
  }, []);

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    if (!historicalContractGap) {
      setStatusMessage("");
    }
    setLoadingReads(true);
    const ops = figmaReadOperations(frameId);
    try {
      await Promise.all(
        ops.map(async (op) => {
          const resolved = resolveBoundRead(op);
          if (resolved.mode === "missing") {
            setStatusMessage(resolved.diagnostic);
            return;
          }
          try {
            let params: Record<string, string | number | boolean | undefined> | undefined;
            if (
              frameId === WEEK_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === ACTIVITIES_LIST_PATH
            ) {
              params = weekActivitiesQueryParams(calendarYear, calendarMonth);
            } else if (
              frameId === ANNUAL_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === MARKETING_CALENDAR_PATH
            ) {
              params = annualCalendarQueryParams(calendarYear);
            } else if (
              frameId === MANAGE_USERS_FRAME_ID &&
              op.method === "GET" &&
              op.path === USERS_LIST_PATH
            ) {
              params = manageUsersListQueryParams(values);
            } else if (
              frameId === HISTORICAL_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === MARKETING_HISTORICAL_CALENDAR_PATH &&
              effectiveWeekStartMonday
            ) {
              const monday = new Date(`${effectiveWeekStartMonday}T00:00:00`);
              params = weekRangeFromMondayStart(monday);
            }
            let body: unknown;
            if (resolved.mode === "mock") {
              body = resolved.body;
            } else if (
              frameId === WEEK_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === ACTIVITIES_LIST_PATH
            ) {
              body = await listMarketingActivities(params);
            } else if (
              frameId === ANNUAL_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === MARKETING_CALENDAR_PATH
            ) {
              body = await getMarketingCalendar(params);
            } else if (
              frameId === HISTORICAL_CALENDAR_FRAME_ID &&
              op.method === "GET" &&
              op.path === MARKETING_HISTORICAL_CALENDAR_PATH
            ) {
              if (!params?.start_date || !params.end_date) {
                setStatusMessage("Invalid week range for historical calendar.");
                return;
              }
              body = await getHistoricalCalendar({
                start_date: String(params.start_date),
                end_date: String(params.end_date),
              });
              setHistoricalContractGap(false);
            } else if (
              frameId === MANAGE_USERS_FRAME_ID &&
              op.method === "GET" &&
              op.path === USERS_LIST_PATH
            ) {
              const listed = await listUsers(params);
              setUsers(listed);
              body = listed;
            } else {
              body = await apiRequest(op.method, op.path, undefined, params);
            }
            publishReadPayload(op.method, op.path, body);
            if (op.fields.length > 0) {
              const nextValues = valuesFromResponse(op, body);
              setValues((prev) => ({ ...prev, ...nextValues }));
            }
          } catch (error) {
            if (
              frameId === HISTORICAL_CALENDAR_FRAME_ID &&
              op.path === MARKETING_HISTORICAL_CALENDAR_PATH
            ) {
              setHistoricalContractGap(true);
              setStatusMessage(HISTORICAL_CONTRACT_GAP_MESSAGE);
            } else {
              setStatusMessage(getApiErrorMessage(error));
            }
            if (process.env.NODE_ENV !== "production") {
              globalThis.console.warn("[luna] read failed:", op.method, op.path, error);
            }
          }
        }),
      );
    } finally {
      setLoadingReads(false);
    }
  }, [frameId, calendarYear, calendarMonth, values, effectiveWeekStartMonday, historicalContractGap]);

  const toggleUserActive = useCallback(
    async (userId: string, isActive: boolean) => {
      const previous = users;
      setUsers((current) =>
        current.map((user) =>
          user.id === userId ? { ...user, is_active: isActive } : user,
        ),
      );
      try {
        await setUserActive(userId, isActive);
        toast.success(isActive ? "User activated." : "User deactivated.");
        await loadReads();
      } catch (error) {
        setUsers(previous);
        toast.error(getApiErrorMessage(error));
      }
    },
    [users, loadReads],
  );

  useEffect(() => {
    clearReadPayloads();
    void loadReads();
  }, [loadReads, routePath]);

  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);

  const submit = useCallback(
    async (submitNodeId?: string) => {
      if (!frameId) {
        return;
      }
      const writeOp = figmaWriteOperation(frameId, submitNodeId);
      if (!writeOp) {
        return;
      }
      const clientErrors = validateValues(writeOp, values);
      if (Object.keys(clientErrors).length > 0) {
        setFieldErrors(clientErrors);
        return;
      }
      setFieldErrors({});
      setStatusMessage("");
      setSubmitting(true);
      try {
        const body = requestBodyFor(writeOp, values);
        const response =
          writeOp.method === "POST" && writeOp.path === USERS_INVITE_PATH
            ? await inviteUser(body as unknown as InviteUserRequest)
            : await apiRequest(writeOp.method, writeOp.path, body);
        const serverErrors = fieldErrorsFromResponse(writeOp, response);
        if (Object.keys(serverErrors).length > 0) {
          setFieldErrors(serverErrors);
          return;
        }
        await loadReads();
        if (writeOp.path === USERS_INVITE_PATH) {
          closeFigmaDialog();
        }
      } catch (error: unknown) {
        const errBody =
          error !== null &&
          typeof error === "object" &&
          "response" in error &&
          error.response !== null &&
          typeof error.response === "object" &&
          "data" in error.response
            ? (error.response as { data: unknown }).data
            : error;
        const serverErrors = fieldErrorsFromResponse(writeOp, errBody);
        if (Object.keys(serverErrors).length > 0) {
          setFieldErrors(serverErrors);
        } else {
          setStatusMessage(getApiErrorMessage(error));
        }
      } finally {
        setSubmitting(false);
      }
    },
    [frameId, values, loadReads],
  );

  useEffect(() => {
    submitBridge = (submitNodeId: string) => submit(submitNodeId);
  }, [submit]);

  const contextValue = useMemo<FigmaScreenData>(
    () => ({
      bound,
      frameId,
      values,
      fieldErrors,
      submit,
      submitting,
      totalPages,
      currentPage,
      setCurrentPage,
      calendarYear,
      calendarMonth,
      setCalendarPeriod,
      loadReads,
      statusMessage,
      users,
      toggleUserActive,
    }),
    [
      bound,
      frameId,
      values,
      fieldErrors,
      submit,
      submitting,
      totalPages,
      currentPage,
      calendarYear,
      calendarMonth,
      setCalendarPeriod,
      loadReads,
      statusMessage,
      users,
      toggleUserActive,
    ],
  );

  return createElement(
    ScreenDataContext.Provider,
    { value: contextValue },
    createElement(
      Fragment,
      null,
      statusMessage
        ? createElement(
            "div",
            {
              className: historicalContractGap
                ? "mx-auto mb-2 max-w-[1440px] px-5 py-3 text-sm text-destructive"
                : "sr-only",
              role: historicalContractGap ? "alert" : undefined,
              "aria-live": "polite",
            },
            statusMessage,
            historicalContractGap
              ? createElement(
                  "button",
                  {
                    type: "button",
                    className:
                      "ml-3 rounded-[6px] border border-[#e2d9d0] px-3 py-1 text-[13px]",
                    onClick: () => {
                      void loadReads();
                    },
                  },
                  "Retry",
                )
              : null,
          )
        : null,
      children,
    ),
  );
}

export function FigmaScreenDataProvider({
  routePath,
  weekStartMonday,
  children,
}: {
  routePath?: string;
  weekStartMonday?: string;
  children?: ReactNode;
}) {
  return createElement(FigmaScreenDataProviderBody, { routePath, weekStartMonday, children });
}

export function useFigmaScreenData(): FigmaScreenData {
  return useContext(ScreenDataContext);
}
