/** luna-spec-codegen: data-hook — wire API data here; do not restyle. */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import apiClient, { resolveApiBaseUrl } from "@/lib/api/client";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import { listUsers, setUserActive, type ApiUser } from "@/lib/api/users";

import { publishReadPayload, clearReadPayloads } from "./figmaDisplay";
import {
  type FigmaFieldValues,
  type FigmaOperation,
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  validateValues,
  valuesFromResponse,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

const ROUTE_TO_FRAME: Record<string, string> = {
  "manage-users": "5359:17424",
  "week-calendar-default": "5602:71490",
  "week-calendar-historical-view": "5584:26945",
  "": "5584:26945",
};

const NAV_ACTIONS: Record<string, string> = {
  act_ed2875c8f17c: "/week-calendar-historical-view",
  act_682a7a535751: "/week-calendar-default",
  act_6460d2bfa6d4: "/week-calendar-default",
  act_a9b8b4dbf4c5: "/week-calendar-default",
  act_5dacece3ba1d: "/week-calendar-default",
  act_3817c363078d: "/manage-users",
};

const CLOSE_OVERLAY_ACTIONS = new Set([
  "act_843f9ef07e04",
  "act_9167c77e843f",
  "act_0405fb82335d",
  "act_be37233c02a1",
  "act_4d0d41980c96",
  "act_8e7dfd94745a",
  "act_fb19efc84982",
  "act_e54eb5cc83d4",
  "act_dc40cbd8e8b6",
]);

const OPEN_OVERLAY_ACTIONS = new Set([
  "act_a268edc2f554",
  "act_5d3bddc2d00c",
  "act_1b4093185628",
  "act_0dd4ae302327",
  "act_c77f170c369e",
  "act_92c2bc48e53b",
  "act_9e536ea73c9b",
  "act_b05a5772e3b4",
  "act_b53969b2b08b",
  "act_6441534980cd",
  "act_cf995b38c14e",
  "act_0cb0a53c99a1",
  "act_eb03a5748bf5",
  "act_f090b2e84752",
  "act_0f667934c905",
  "act_6334ed17b298",
  "act_4ca62c4f178b",
  "act_125a2d5d83d0",
  "act_8ab4e85a63ea",
  "act_9442c7c92558",
  "act_e6a676c62e03",
  "act_0728381d9460",
  "act_02bcf34befab",
  "act_8dfb23821c94",
  "act_a265bc8eaca0",
  "act_c7ff9bcc9388",
  "act_e94d6603581d",
]);

const MANAGE_USERS_PAGE_SIZE = 6;

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

function unwrapPayload(op: FigmaOperation, body: unknown): unknown {
  if (!op.responseUnwrap || body === null || typeof body !== "object") {
    return body;
  }
  const record = body as Record<string, unknown>;
  return record[op.responseUnwrap] ?? body;
}

type ScreenContextValue = {
  routePath: string;
  frameId: string;
  fieldValues: FigmaFieldValues;
  fieldErrors: Record<string, string>;
  setFieldValue: (key: string, value: string) => void;
  submit: (frameIdOverride?: string) => Promise<void>;
  submitting: boolean;
  loadReads: () => Promise<void>;
  users: ApiUser[];
  usersLoading: boolean;
  usersError: string | null;
  currentPage: number;
  setCurrentPage: (page: number | ((p: number) => number)) => void;
  totalPages: number;
  totalUsers: number;
  clearFilters: () => void;
  statusMessage: string;
  submitError: string | null;
  toggleUserStatus: (userId: string, nextActive: boolean) => Promise<void>;
  statusTogglingId: string | null;
};

const FigmaScreenContext = createContext<ScreenContextValue | null>(null);
const searchReloadRegistry = new WeakMap<ScreenContextValue, () => void>();

function useFigmaScreenDataInternal(routePath: string): ScreenContextValue {
  const frameId = ROUTE_TO_FRAME[routePath] ?? "";
  const [fieldValues, setFieldValues] = useState<FigmaFieldValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [allUsers, setAllUsers] = useState<ApiUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [statusTogglingId, setStatusTogglingId] = useState<string | null>(null);
  const fieldValuesRef = useRef(fieldValues);
  fieldValuesRef.current = fieldValues;
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setFieldValue = useCallback((key: string, value: string) => {
    setFieldValues((prev) => {
      const next = { ...prev, [key]: value };
      fieldValuesRef.current = next;
      return next;
    });
    setFieldErrors((prev) => {
      if (!prev[key]) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const loadReads = useCallback(async () => {
    if (!frameId) {
      return;
    }
    const reads = figmaReadOperations(frameId);
    if (reads.length === 0) {
      return;
    }

    setUsersLoading(true);
    setUsersError(null);
    setStatusMessage("");

    const fv = fieldValuesRef.current;

    try {
      await Promise.all(
        reads.map(async (op) => {
          const resolution = resolveBoundRead(op);
          if (resolution.mode === "missing") {
            setStatusMessage(resolution.diagnostic);
            return;
          }

          let body: unknown;
          if (resolution.mode === "mock") {
            body = resolution.body;
          } else if (op.path === "/api/v1/users") {
            const result = await listUsers({
              search: String(fv["search-input"] ?? ""),
              role: String(fv["role-filter"] ?? ""),
              status: String(fv["status-filter"] ?? ""),
            });
            body = { data: { items: result.items, total: result.total } };
            setAllUsers(result.items);
            setTotalUsers(result.total);
          } else {
            const response = await apiClient.request<{ data?: unknown }>({
              method: op.method,
              url: op.path,
            });
            body = response.data;
          }

          publishReadPayload(op.method, op.path, body);
          const unwrapped = unwrapPayload(op, body);
          if (op.fields.length > 0) {
            const fromApi = valuesFromResponse(op, unwrapped);
            setFieldValues((prev) => ({ ...prev, ...fromApi }));
          }
        }),
      );
    } catch (error) {
      let message = "Unable to load users.";
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;
        if (typeof data === "object" && data && "message" in data) {
          message = String((data as { message: unknown }).message);
        } else if (error.message) {
          message = error.message;
        }
      }
      setUsersError(message);
      setAllUsers([]);
      setTotalUsers(0);
    } finally {
      setUsersLoading(false);
    }
  }, [frameId]);

  const users = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_USERS_PAGE_SIZE;
    return allUsers.slice(start, start + MANAGE_USERS_PAGE_SIZE);
  }, [allUsers, currentPage]);

  useEffect(() => {
    if (totalUsers <= 0) {
      return;
    }
    const pages = Math.ceil(totalUsers / MANAGE_USERS_PAGE_SIZE);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalUsers]);

  useEffect(() => {
    void loadReads();
  }, [loadReads]);

  useEffect(() => {
    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
      clearReadPayloads();
    };
  }, [routePath]);

  const submit = useCallback(
    async (frameIdOverride?: string) => {
      const targetFrame = frameIdOverride ?? frameId;
      const op = figmaWriteOperation(targetFrame);
      if (!op) {
        return;
      }
      const clientErrors = validateValues(op, fieldValuesRef.current);
      if (Object.keys(clientErrors).length > 0) {
        setFieldErrors(clientErrors);
        return;
      }
      setSubmitting(true);
      setFieldErrors({});
      setSubmitError(null);
      try {
        const payload = requestBodyFor(op, fieldValuesRef.current);
        await apiClient.request({
          method: op.method,
          url: op.path,
          data: payload,
        });
        if (targetFrame === "5449:19395") {
          setFieldValues((prev) => ({
            ...prev,
            "first-name": "",
            "last-name": "",
            "email-address": "",
            "phone-number": "",
            role: "",
          }));
        }
        await loadReads();
        closeFigmaDialog();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.data) {
          const fromServer = fieldErrorsFromResponse(op, error.response.data);
          setFieldErrors(fromServer);
          if (Object.keys(fromServer).length === 0) {
            setSubmitError(message);
          }
          if (error.response.status === 409 && !fromServer["email-address"]) {
            setFieldErrors((prev) => ({
              ...prev,
              "email-address": message,
            }));
          }
        } else {
          setSubmitError(message);
        }
      } finally {
        setSubmitting(false);
      }
    },
    [frameId, loadReads],
  );

  const clearFilters = useCallback(() => {
    setFieldValues((prev) => {
      const cleared: FigmaFieldValues = {
        ...prev,
        "search-input": "",
        "role-filter": "",
        "status-filter": "",
      };
      fieldValuesRef.current = cleared;
      return cleared;
    });
    setCurrentPage(1);
    void loadReads();
  }, [loadReads]);

  const toggleUserStatus = useCallback(
    async (userId: string, nextActive: boolean) => {
      let snapshot: ApiUser[] = [];
      setStatusTogglingId(userId);
      setAllUsers((rows) => {
        snapshot = rows;
        return rows.map((row) => (row.id === userId ? { ...row, is_active: nextActive } : row));
      });
      try {
        await setUserActive(userId, nextActive);
        await loadReads();
      } catch {
        setAllUsers(snapshot);
      } finally {
        setStatusTogglingId(null);
      }
    },
    [loadReads],
  );

  const totalPages = useMemo(() => {
    if (totalUsers <= 0) {
      return 0;
    }
    return Math.ceil(totalUsers / MANAGE_USERS_PAGE_SIZE);
  }, [totalUsers]);

  const scheduleSearchReload = useCallback(() => {
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }
    searchDebounceRef.current = setTimeout(() => {
      void loadReads();
    }, 350);
  }, [loadReads]);

  const contextValue: ScreenContextValue = {
    routePath,
    frameId,
    fieldValues,
    fieldErrors,
    setFieldValue,
    submit,
    submitting,
    loadReads,
    users,
    usersLoading,
    usersError,
    currentPage,
    setCurrentPage,
    totalPages,
    totalUsers,
    clearFilters,
    statusMessage,
    submitError,
    toggleUserStatus,
    statusTogglingId,
  };

  // Attach debounced search helper on context (used by figmaFieldProps via ref map)
  searchReloadRegistry.set(contextValue, scheduleSearchReload);

  return contextValue;
}

export function FigmaScreenDataProvider({
  routePath = "",
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const value = useFigmaScreenDataInternal(routePath);
  return createElement(FigmaScreenContext.Provider, { value }, children);
}

export function useFigmaScreenData() {
  const ctx = useContext(FigmaScreenContext);
  if (!ctx) {
    return {
      bound: "",
      values: {} as Record<string, string>,
      submit: async () => {},
      routePath: "",
      frameId: "",
      fieldValues: {} as FigmaFieldValues,
      fieldErrors: {},
      setFieldValue: () => {},
      submitting: false,
      loadReads: async () => {},
      users: [] as ApiUser[],
      usersLoading: false,
      usersError: null as string | null,
      currentPage: 1,
      setCurrentPage: () => {},
      totalPages: 0,
      totalUsers: 0,
      clearFilters: () => {},
      statusMessage: "",
      submitError: null as string | null,
      toggleUserStatus: async () => {},
      statusTogglingId: null as string | null,
    };
  }
  return {
    ...ctx,
    bound: ctx.frameId,
    values: ctx.fieldValues as Record<string, string>,
  };
}

export function figmaFieldProps(field: string): FigmaFieldBinding {
  const ctx = useContext(FigmaScreenContext);
  if (!ctx) {
    return {};
  }
  const value = String(ctx.fieldValues[field] ?? "");
  return {
    value,
    onChange: (event) => {
      ctx.setFieldValue(field, event.target.value);
      if (field === "role-filter" || field === "status-filter") {
        ctx.setCurrentPage(1);
        void ctx.loadReads();
        return;
      }
      if (field === "search-input") {
        ctx.setCurrentPage(1);
        searchReloadRegistry.get(ctx)?.();
      }
    },
  };
}

export function figmaActionProps(action: string): FigmaActionBinding {
  const router = useRouter();
  const onClick = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const destination = NAV_ACTIONS[action];
      if (destination) {
        router.push(destination);
        return;
      }
      if (CLOSE_OVERLAY_ACTIONS.has(action)) {
        closeFigmaDialog();
        return;
      }
      if (OPEN_OVERLAY_ACTIONS.has(action)) {
        openFigmaDialog(action);
      }
    },
    [action, router],
  );
  return { onClick };
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

export { resolveApiBaseUrl };
