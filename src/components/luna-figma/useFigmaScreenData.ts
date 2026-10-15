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

import { clearReadPayloads, publishReadPayload } from "./figmaDisplay";
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
import { setFigmaFieldErrors } from "./figmaFieldErrors";
import type { HolidayOut } from "@/lib/api/holidays";

import { figmaApiRequest, unwrapApiEnvelope } from "./figmaApiRequest";
import { FIGMA_DIALOG_ACTIONS, FIGMA_NAVIGATE_ACTIONS } from "./figmaActionMaps";

const MANAGE_HOLIDAY_FRAME = "5621:28270";
const HISTORICAL_VIEW_FRAME = "5584:26945";
const HOLIDAYS_LIST_PATH = "/api/v1/marketing-team-member/holidays";
const ACTIVITIES_LIST_PATH = "/api/v1/marketing-team-member/activities";
const HOLIDAY_TABLE_PAGE_SIZE = 6;

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  disabled?: boolean;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

const ROUTE_TO_FRAME: Readonly<Record<string, string>> = {
  "": "5602:71490",
  "marketing-calendar/week": "5602:71490",
  "manage-holiday": "5621:28270",
  "week-calendar-historical-view": "5584:26945",
  "week-calendar-default-1": "5602:62165",
};

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

export function useCurrentUser(): { name: string; avatarUrl: string } {
  return { name: "", avatarUrl: "" };
}

type ScreenContextValue = {
  frameId: string;
  values: FigmaFieldValues;
  setFieldValue: (field: string, value: string) => void;
  submitting: boolean;
  loadingReads: boolean;
  loadReads: () => Promise<void>;
  submit: () => Promise<void>;
  totalPages: number | null;
  currentPage: number;
  setCurrentPage: (page: number | ((p: number) => number)) => void;
  calendarYear: number;
  calendarMonth: number;
  setCalendarYear: (year: number) => void;
  setCalendarMonth: (month: number) => void;
  statusMessage: string;
};

const FigmaScreenContext = createContext<ScreenContextValue | null>(null);

function frameIdForRoute(routePath: string | undefined): string {
  const key = routePath ?? "";
  return ROUTE_TO_FRAME[key] ?? "";
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function holidayItemsFromBody(body: unknown): HolidayOut[] {
  const envelope = asRecord(body);
  const data = asRecord(envelope?.data);
  const items = data?.items;
  if (!Array.isArray(items)) {
    return [];
  }
  return items.filter((item): item is HolidayOut => {
    const row = asRecord(item);
    return typeof row?.id === "string" && typeof row?.name === "string";
  });
}

function buildHolidayListEnvelope(body: unknown, pageItems: HolidayOut[]): unknown {
  const envelope = asRecord(body);
  if (!envelope) {
    return { success: true, message: "", data: { items: pageItems } };
  }
  const data = asRecord(envelope.data) ?? {};
  return {
    ...envelope,
    data: {
      ...data,
      items: pageItems,
    },
  };
}

function filterHolidaysBySearch(items: HolidayOut[], search: string): HolidayOut[] {
  const query = search.trim().toLowerCase();
  if (!query) {
    return items;
  }
  return items.filter((item) => item.name.toLowerCase().includes(query));
}

function readQueryParams(
  frameId: string,
  op: FigmaOperation,
  calendarYear: number,
  calendarMonth: number,
): Record<string, string | number | undefined> | undefined {
  if (
    frameId === HISTORICAL_VIEW_FRAME &&
    op.method === "GET" &&
    op.path === ACTIVITIES_LIST_PATH
  ) {
    return {
      year: calendarYear,
      month: calendarMonth,
      page: 1,
      limit: 200,
    };
  }
  return undefined;
}

async function fetchReadOperation(
  op: FigmaOperation,
  signal: AbortSignal,
  searchParams?: Record<string, string | number | undefined>,
): Promise<{ body?: unknown; diagnostic?: string }> {
  const resolution = resolveBoundRead(op);
  if (resolution.mode === "missing") {
    return { diagnostic: resolution.diagnostic };
  }
  if (resolution.mode === "mock") {
    publishReadPayload(op.method, op.path, resolution.body);
    return { body: resolution.body };
  }
  const result = await figmaApiRequest(op.method, op.path, { signal, searchParams });
  if (result.status === 401) {
    clearReadPayloads();
    return { diagnostic: "Unauthorized" };
  }
  if (!result.ok) {
    return { diagnostic: result.message };
  }
  publishReadPayload(op.method, op.path, result.body);
  return { body: result.body };
}

function FigmaScreenDataProviderInner({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = frameIdForRoute(routePath);
  const [values, setValues] = useState<FigmaFieldValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [loadingReads, setLoadingReads] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [calendarYear, setCalendarYear] = useState(() => new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(() => new Date().getMonth() + 1);
  const abortRef = useRef<AbortController | null>(null);
  const holidayListBodyRef = useRef<unknown>(null);
  const holidayItemsRef = useRef<HolidayOut[]>([]);
  const valuesRef = useRef(values);
  valuesRef.current = values;

  const publishHolidayTablePage = useCallback(
    (page: number, search: string) => {
      if (frameId !== MANAGE_HOLIDAY_FRAME || !holidayListBodyRef.current) {
        return;
      }
      const filtered = filterHolidaysBySearch(holidayItemsRef.current, search);
      const pages = Math.max(1, Math.ceil(filtered.length / HOLIDAY_TABLE_PAGE_SIZE));
      const safePage = Math.min(Math.max(1, page), pages);
      const start = (safePage - 1) * HOLIDAY_TABLE_PAGE_SIZE;
      const slice = filtered.slice(start, start + HOLIDAY_TABLE_PAGE_SIZE);
      publishReadPayload(
        "GET",
        HOLIDAYS_LIST_PATH,
        buildHolidayListEnvelope(holidayListBodyRef.current, slice),
      );
      setTotalPages(pages > 1 ? pages : null);
      if (safePage !== page) {
        setCurrentPage(safePage);
      }
    },
    [frameId],
  );

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setStatusMessage("");
    setLoadingReads(true);

    const ops = figmaReadOperations(frameId);
    if (ops.length === 0) {
      setLoadingReads(false);
      return;
    }

    try {
      const results = await Promise.all(
        ops.map((op) =>
          fetchReadOperation(
            op,
            controller.signal,
            readQueryParams(frameId, op, calendarYear, calendarMonth),
          ),
        ),
      );

      if (controller.signal.aborted) {
        return;
      }

      const unauthorized = results.some((r) => r.diagnostic === "Unauthorized");
      if (unauthorized) {
        toast.error("Session expired");
        router.push("/");
        return;
      }

      const diagnostic = results.find((r) => r.diagnostic)?.diagnostic;
      if (diagnostic) {
        setStatusMessage(diagnostic);
        toast.error(diagnostic);
      }

      let merged: FigmaFieldValues = {};
      ops.forEach((op, index) => {
        const { body } = results[index] ?? {};
        if (body !== undefined && op.fields.length > 0) {
          const unwrapped = unwrapApiEnvelope(body, op.responseUnwrap);
          merged = { ...merged, ...valuesFromResponse(op, unwrapped) };
        }
        if (
          frameId === MANAGE_HOLIDAY_FRAME &&
          op.method === "GET" &&
          op.path === HOLIDAYS_LIST_PATH &&
          body !== undefined
        ) {
          holidayListBodyRef.current = body;
          holidayItemsRef.current = holidayItemsFromBody(body);
          setCurrentPage(1);
          publishHolidayTablePage(1, String(valuesRef.current["search-input"] ?? ""));
        }
      });
      if (Object.keys(merged).length > 0) {
        setValues((prev) => ({ ...prev, ...merged }));
      }

      if (frameId !== MANAGE_HOLIDAY_FRAME) {
        setTotalPages(null);
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoadingReads(false);
      }
    }
  }, [frameId, publishHolidayTablePage, router, calendarYear, calendarMonth]);

  useEffect(() => {
    void loadReads();
    return () => {
      abortRef.current?.abort();
    };
  }, [loadReads]);

  useEffect(() => {
    if (frameId !== MANAGE_HOLIDAY_FRAME || !holidayListBodyRef.current) {
      return;
    }
    publishHolidayTablePage(currentPage, String(values["search-input"] ?? ""));
  }, [currentPage, frameId, publishHolidayTablePage, values]);

  const setFieldValue = useCallback((field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFigmaFieldErrors({});
  }, []);

  const submit = useCallback(async () => {
    if (!frameId) {
      return;
    }
    const op = figmaWriteOperation(frameId);
    if (!op) {
      return;
    }
    const clientErrors = validateValues(op, values);
    if (Object.keys(clientErrors).length > 0) {
      setFigmaFieldErrors(clientErrors);
      return;
    }
    setSubmitting(true);
    setFigmaFieldErrors({});
    try {
      const body = requestBodyFor(op, values);
      const result = await figmaApiRequest(op.method, op.path, { body });
      if (result.status === 401) {
        clearReadPayloads();
        toast.error("Session expired");
        router.push("/");
        return;
      }
      if (!result.ok) {
        const serverErrors = fieldErrorsFromResponse(op, result.body);
        if (Object.keys(serverErrors).length > 0) {
          setFigmaFieldErrors(serverErrors);
        } else {
          toast.error(result.message);
        }
        return;
      }
      await loadReads();
    } finally {
      setSubmitting(false);
    }
  }, [frameId, values, loadReads, router]);

  const ctx = useMemo<ScreenContextValue>(
    () => ({
      frameId,
      values,
      setFieldValue,
      submitting,
      loadingReads,
      loadReads,
      submit,
      totalPages,
      currentPage,
      setCurrentPage,
      calendarYear,
      calendarMonth,
      setCalendarYear,
      setCalendarMonth,
      statusMessage,
    }),
    [
      frameId,
      values,
      setFieldValue,
      submitting,
      loadingReads,
      loadReads,
      submit,
      totalPages,
      currentPage,
      calendarYear,
      calendarMonth,
      statusMessage,
    ],
  );

  return createElement(
    FigmaScreenContext.Provider,
    { value: ctx },
    createElement(
      Fragment,
      null,
      createElement("span", { className: "sr-only", "aria-live": "polite" }, statusMessage),
      children,
    ),
  );
}

export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  useEffect(() => {
    return () => {
      clearReadPayloads();
    };
  }, [routePath]);

  return createElement(FigmaScreenDataProviderInner, { routePath, children });
}

function useScreenContext(): ScreenContextValue {
  const ctx = useContext(FigmaScreenContext);
  if (!ctx) {
    return {
      frameId: "",
      values: {},
      setFieldValue: () => {},
      submitting: false,
      loadingReads: false,
      loadReads: async () => {},
      submit: async () => {},
      totalPages: null,
      currentPage: 1,
      setCurrentPage: () => {},
      calendarYear: new Date().getFullYear(),
      calendarMonth: new Date().getMonth() + 1,
      setCalendarYear: () => {},
      setCalendarMonth: () => {},
      statusMessage: "",
    };
  }
  return ctx;
}

function isUnresolvedFigmaField(field: string): boolean {
  for (const fields of Object.values(UNRESOLVED_FIGMA_FIELDS)) {
    if (fields.includes(field)) {
      return true;
    }
  }
  return false;
}

export function figmaFieldProps(field: string): FigmaFieldBinding {
  const { frameId, values, setFieldValue, submitting } = useScreenContext();
  const unresolved = isUnresolvedFigmaField(field);
  if (!unresolved) {
    const op = figmaWriteOperation(frameId);
    const bound = op?.fields.some((f) => f.figmaField === field);
    if (!bound) {
      return {};
    }
  }
  const raw = values[field];
  return {
    value: typeof raw === "string" ? raw : raw === undefined ? "" : String(raw),
    onChange: (event) => setFieldValue(field, event.target.value),
    disabled: submitting,
  };
}

export function useFigmaActionProps(action: string): FigmaActionBinding {
  const router = useRouter();
  return useMemo(
    () => ({
      onClick: (event) => {
        event.preventDefault();
        const destination = FIGMA_NAVIGATE_ACTIONS[action];
        if (destination) {
          router.push(destination);
          return;
        }
        if (FIGMA_DIALOG_ACTIONS.has(action)) {
          openFigmaDialog(action);
          return;
        }
      },
    }),
    [action, router],
  );
}

export function figmaActionProps(action: string): FigmaActionBinding {
  return useFigmaActionProps(action);
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

export function useFigmaScreenData() {
  const {
    frameId,
    values,
    submit,
    submitting,
    loadingReads,
    totalPages,
    currentPage,
    setCurrentPage,
    loadReads,
    calendarYear,
    calendarMonth,
    setCalendarYear,
    setCalendarMonth,
  } = useScreenContext();
  const bound =
    figmaReadOperations(frameId)
      .map((op) => `${op.method} ${op.path}`)
      .join(", ") || (frameId ? "" : "unbound");

  return {
    bound,
    values: values as Record<string, string>,
    submit,
    submitting,
    loadingReads,
    totalPages,
    currentPage,
    setCurrentPage,
    loadReads,
    calendarYear,
    calendarMonth,
    setCalendarYear,
    setCalendarMonth,
    paginationHidden: totalPages === null || totalPages <= 1,
  };
}

/** Pagination controls for manage-holiday table (`data-figma-pagination`). */
export function useFigmaPaginationProps(
  target: "prev" | "next" | number,
): { onClick: () => void; disabled?: boolean } {
  const { totalPages, currentPage, setCurrentPage, loadingReads } = useScreenContext();
  const disabled = loadingReads || totalPages === null || totalPages <= 1;
  return useMemo(() => {
    if (target === "prev") {
      return {
        onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
        disabled: disabled || currentPage <= 1,
      };
    }
    if (target === "next") {
      return {
        onClick: () => setCurrentPage((p) => (totalPages ? Math.min(totalPages, p + 1) : p + 1)),
        disabled: disabled || (totalPages !== null && currentPage >= totalPages),
      };
    }
    return {
      onClick: () => setCurrentPage(target),
      disabled: disabled,
    };
  }, [currentPage, disabled, setCurrentPage, target, totalPages]);
}
