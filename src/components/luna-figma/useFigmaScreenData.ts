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
import {
  deleteCategory as apiDeleteCategory,
  listCategories,
  type ApiCategory,
} from "@/lib/api/categories";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import {
  deleteHoliday as apiDeleteHoliday,
  importHolidaysList,
  listHolidays,
  type ApiHoliday,
} from "@/lib/api/holidays";
import { listUsers, setUserActive, type ApiUser } from "@/lib/api/users";

import { publishReadPayload, clearReadPayloads } from "./figmaDisplay";
import {
  type FigmaFieldValues,
  type FigmaOperation,
  fieldErrorsFromResponse,
  figmaOperations,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  validateValues,
  valuesFromResponse,
} from "./figmaFieldContract";
import { setFigmaFieldErrors } from "./figmaFieldErrors";
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
  "marketing-team-member-manage-users": "5359:17424",
  "manage-category": "5449:19126",
  "manage-holiday": "5621:28270",
  "week-calendar-default": "5602:71490",
  "week-calendar-historical-view": "5584:26945",
  "": "5584:26945",
};

const PAGE_SIZE_BY_FRAME: Record<string, number> = {
  "5359:17424": 6,
  "5449:19126": 5,
  "5621:28270": 6,
};

const NAV_ACTIONS: Record<string, string> = {
  act_ed2875c8f17c: "/week-calendar-historical-view",
  act_682a7a535751: "/week-calendar-default",
  act_6460d2bfa6d4: "/week-calendar-default",
  act_a9b8b4dbf4c5: "/week-calendar-default",
  act_5dacece3ba1d: "/week-calendar-default",
  act_3817c363078d: "/manage-users",
  act_9916cd70561d: "/manage-category",
  act_0b52f00d4464: "/marketing-team-member-manage-users",
  act_f070fb01db4f: "/week-calendar-default",
  act_610642e70be9: "/my-profile",
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
  "act_9c6be34838f4",
  "act_8e0ab36f39bd",
  "act_9000c49ea1a5",
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

function writeOperationForFrame(frameId: string, editingId: string | null): FigmaOperation | undefined {
  const writes = figmaOperations(frameId).filter((op) => op.role === "write");
  if (editingId) {
    return writes.find((op) => op.method === "PUT");
  }
  return writes.find((op) => op.method === "POST") ?? figmaWriteOperation(frameId);
}

const _dialogListeners = new Set<(actionId: string | null) => void>();

export function openFigmaDialog(actionId: string): void {
  _dialogListeners.forEach((fn) => fn(actionId));
}

export function closeFigmaDialog(): void {
  _dialogListeners.forEach((fn) => fn(null));
}

type HolidayModalSnapshot = {
  name: string;
  "start-date": string;
  "end-date": string;
};

let holidayDialogOpener: HTMLElement | null = null;
let holidayModalBaseline: HolidayModalSnapshot | null = null;

function snapshotHolidayFields(values: FigmaFieldValues): HolidayModalSnapshot {
  return {
    name: String(values.name ?? "").trim(),
    "start-date": String(values["start-date"] ?? "").trim(),
    "end-date": String(values["end-date"] ?? "").trim(),
  };
}

export function registerHolidayDialogOpener(element: HTMLElement): void {
  holidayDialogOpener = element;
}

export function captureHolidayModalBaseline(values: FigmaFieldValues): void {
  holidayModalBaseline = snapshotHolidayFields(values);
}

export function isHolidayModalDirty(values: FigmaFieldValues): boolean {
  if (!holidayModalBaseline) {
    return false;
  }
  const current = snapshotHolidayFields(values);
  return (
    current.name !== holidayModalBaseline.name ||
    current["start-date"] !== holidayModalBaseline["start-date"] ||
    current["end-date"] !== holidayModalBaseline["end-date"]
  );
}

export function clearHolidayModalSession(): void {
  holidayDialogOpener = null;
  holidayModalBaseline = null;
}

function restoreHolidayDialogOpenerFocus(): void {
  holidayDialogOpener?.focus();
  clearHolidayModalSession();
}

type CategoryModalSnapshot = {
  title: string;
  description: string;
  icon: string;
};

let categoryDialogOpener: HTMLElement | null = null;
let categoryModalBaseline: CategoryModalSnapshot | null = null;

function snapshotCategoryFields(values: FigmaFieldValues): CategoryModalSnapshot {
  return {
    title: String(values.title ?? "").trim(),
    description: String(values.description ?? "").trim(),
    icon: String(values.icon ?? "").trim(),
  };
}

export function registerCategoryDialogOpener(element: HTMLElement): void {
  categoryDialogOpener = element;
}

export function captureCategoryModalBaseline(values: FigmaFieldValues): void {
  categoryModalBaseline = snapshotCategoryFields(values);
}

export function isCategoryModalDirty(values: FigmaFieldValues): boolean {
  if (!categoryModalBaseline) {
    return false;
  }
  const current = snapshotCategoryFields(values);
  return (
    current.title !== categoryModalBaseline.title ||
    current.description !== categoryModalBaseline.description ||
    current.icon !== categoryModalBaseline.icon
  );
}

export function clearCategoryModalSession(): void {
  categoryDialogOpener = null;
  categoryModalBaseline = null;
}

function restoreCategoryDialogOpenerFocus(): void {
  categoryDialogOpener?.focus();
  clearCategoryModalSession();
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
  categories: ApiCategory[];
  holidays: ApiHoliday[];
  collectionKind: "users" | "categories" | "holidays" | null;
  pageSize: number;
  totalFiltered: number;
  pageItemsCount: number;
  beginEditCategory: (id: string, opener?: HTMLElement) => void;
  beginEditHoliday: (id: string, opener?: HTMLElement) => void;
  deleteCategoryById: (id: string) => Promise<void>;
  deleteHolidayById: (id: string) => Promise<void>;
  resetModalForm: () => void;
  editingCategoryId: string | null;
  editingHolidayId: string | null;
  closeHolidayModal: () => void;
  closeCategoryModal: () => void;
  uploadHolidayList: (file: File) => Promise<void>;
  importingHolidayList: boolean;
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
  const [allCategories, setAllCategories] = useState<ApiCategory[]>([]);
  const [allHolidays, setAllHolidays] = useState<ApiHoliday[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [importingHolidayList, setImportingHolidayList] = useState(false);
  const fieldValuesRef = useRef(fieldValues);
  const editingIdRef = useRef(editingId);
  editingIdRef.current = editingId;
  fieldValuesRef.current = fieldValues;
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [debouncedCategoryFilter, setDebouncedCategoryFilter] = useState("");
  const categoryFilterDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    const raw = String(fieldValues["filter-categories"] ?? "");
    if (categoryFilterDebounceRef.current) {
      clearTimeout(categoryFilterDebounceRef.current);
    }
    categoryFilterDebounceRef.current = setTimeout(() => {
      setDebouncedCategoryFilter(raw.trim().toLowerCase());
    }, 350);
    return () => {
      if (categoryFilterDebounceRef.current) {
        clearTimeout(categoryFilterDebounceRef.current);
      }
    };
  }, [fieldValues["filter-categories"]]);

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
          } else if (op.path === "/api/v1/marketing-team-member/categories") {
            const result = await listCategories();
            body = { data: { items: result.items, total: result.total } };
            setAllCategories(result.items);
            if (frameId === "5449:19126" || frameId === "5359:17278") {
              setTotalUsers(result.total);
            }
          } else if (op.path === "/api/v1/marketing-team-member/holidays") {
            const result = await listHolidays({
              search: String(fv["search-users"] ?? ""),
            });
            body = { data: { items: result.items, total: result.total } };
            setAllHolidays(result.items);
            if (frameId === "5621:28270" || frameId === "5621:28800") {
              setTotalUsers(result.total);
            }
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
      let message = "Unable to load data.";
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          clearReadPayloads();
        }
        const data = error.response?.data;
        if (typeof data === "object" && data && "message" in data) {
          message = String((data as { message: unknown }).message);
        } else if (error.message) {
          message = error.message;
        }
      }
      setUsersError(message);
      setAllUsers([]);
      setAllCategories([]);
      setAllHolidays([]);
      setTotalUsers(0);
    } finally {
      setUsersLoading(false);
    }
  }, [frameId]);

  const pageSize = PAGE_SIZE_BY_FRAME[frameId] ?? MANAGE_USERS_PAGE_SIZE;

  const collectionKind = useMemo((): "users" | "categories" | "holidays" | null => {
    if (frameId === "5449:19126") {
      return "categories";
    }
    if (frameId === "5621:28270") {
      return "holidays";
    }
    if (frameId === "5359:17424") {
      return "users";
    }
    return null;
  }, [frameId]);

  const filteredCategories = useMemo(() => {
    const q = debouncedCategoryFilter;
    if (!q) {
      return allCategories;
    }
    return allCategories.filter(
      (row) =>
        row.title.toLowerCase().includes(q) ||
        (row.description ?? "").toLowerCase().includes(q),
    );
  }, [allCategories, debouncedCategoryFilter]);

  const users = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return allUsers.slice(start, start + pageSize);
  }, [allUsers, currentPage, pageSize]);

  const categories = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredCategories.slice(start, start + pageSize);
  }, [filteredCategories, currentPage, pageSize]);

  const holidays = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return allHolidays.slice(start, start + pageSize);
  }, [allHolidays, currentPage, pageSize]);

  const totalFiltered = useMemo(() => {
    if (collectionKind === "categories") {
      return filteredCategories.length;
    }
    if (collectionKind === "holidays") {
      return allHolidays.length;
    }
    return totalUsers;
  }, [collectionKind, filteredCategories.length, allHolidays.length, totalUsers]);

  const pageItemsCount =
    collectionKind === "categories"
      ? categories.length
      : collectionKind === "holidays"
        ? holidays.length
        : users.length;

  useEffect(() => {
    if (totalFiltered <= 0) {
      return;
    }
    const pages = Math.ceil(totalFiltered / pageSize);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalFiltered, pageSize]);

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

  const resetModalForm = useCallback(() => {
    setEditingId(null);
    setFieldValues((prev) => {
      const next = {
        ...prev,
        title: "",
        description: "",
        icon: "",
        name: "",
        "start-date": "",
        "end-date": "",
      };
      fieldValuesRef.current = next;
      captureHolidayModalBaseline(next);
      captureCategoryModalBaseline(next);
      return next;
    });
    setFieldErrors({});
    setFigmaFieldErrors({});
    setSubmitError(null);
  }, []);

  const closeCategoryModal = useCallback(() => {
    if (isCategoryModalDirty(fieldValuesRef.current)) {
      if (!globalThis.confirm("Discard unsaved changes?")) {
        return;
      }
    }
    setEditingId(null);
    setFieldValues((prev) => {
      const next = {
        ...prev,
        title: "",
        description: "",
        icon: "",
      };
      fieldValuesRef.current = next;
      return next;
    });
    setFieldErrors({});
    setFigmaFieldErrors({});
    setSubmitError(null);
    closeFigmaDialog();
    restoreCategoryDialogOpenerFocus();
  }, []);

  const closeHolidayModal = useCallback(() => {
    if (isHolidayModalDirty(fieldValuesRef.current)) {
      if (!globalThis.confirm("Discard unsaved changes?")) {
        return;
      }
    }
    setEditingId(null);
    setFieldValues((prev) => {
      const next = {
        ...prev,
        name: "",
        "start-date": "",
        "end-date": "",
      };
      fieldValuesRef.current = next;
      return next;
    });
    setFieldErrors({});
    setFigmaFieldErrors({});
    setSubmitError(null);
    closeFigmaDialog();
    restoreHolidayDialogOpenerFocus();
  }, []);

  const submit = useCallback(
    async (frameIdOverride?: string) => {
      const targetFrame = frameIdOverride ?? frameId;
      const modalFrame = targetFrame === "5359:17278" || targetFrame === "5621:28800";
      const activeEditId = modalFrame ? editingIdRef.current : null;
      const op = writeOperationForFrame(targetFrame, activeEditId);
      if (!op) {
        return;
      }
      if (op.unboundRequired.length > 0) {
        setStatusMessage(`Missing required API fields: ${op.unboundRequired.join(", ")}`);
        return;
      }
      const clientErrors = validateValues(op, fieldValuesRef.current);
      if (Object.keys(clientErrors).length > 0) {
        setFieldErrors(clientErrors);
        setFigmaFieldErrors(clientErrors);
        return;
      }
      setSubmitting(true);
      setFieldErrors({});
      setFigmaFieldErrors({});
      setSubmitError(null);
      setStatusMessage("");
      try {
        const payload = requestBodyFor(op, fieldValuesRef.current);
        let url = op.path;
        if (activeEditId && op.method === "PUT") {
          url = url.replace("{id}", encodeURIComponent(activeEditId));
        }
        await apiClient.request({
          method: op.method,
          url,
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
        if (modalFrame) {
          if (targetFrame === "5621:28800") {
            setEditingId(null);
            setFieldValues((prev) => {
              const next = {
                ...prev,
                name: "",
                "start-date": "",
                "end-date": "",
              };
              fieldValuesRef.current = next;
              return next;
            });
            setFieldErrors({});
            setFigmaFieldErrors({});
            setSubmitError(null);
            await loadReads();
            closeFigmaDialog();
            restoreHolidayDialogOpenerFocus();
            return;
          }
          if (targetFrame === "5359:17278") {
            setEditingId(null);
            setFieldValues((prev) => {
              const next = {
                ...prev,
                title: "",
                description: "",
                icon: "",
              };
              fieldValuesRef.current = next;
              return next;
            });
            setFieldErrors({});
            setFigmaFieldErrors({});
            setSubmitError(null);
            await loadReads();
            closeFigmaDialog();
            restoreCategoryDialogOpenerFocus();
            return;
          }
          resetModalForm();
        }
        await loadReads();
        closeFigmaDialog();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          clearReadPayloads();
        }
        if (axios.isAxiosError(error) && error.response?.data) {
          const fromServer = fieldErrorsFromResponse(op, error.response.data);
          setFieldErrors(fromServer);
          setFigmaFieldErrors(fromServer);
          if (Object.keys(fromServer).length === 0) {
            setSubmitError(message);
          }
          if (error.response.status === 409 && !fromServer["email-address"]) {
            const merged = { ...fromServer, "email-address": message };
            setFieldErrors(merged);
            setFigmaFieldErrors(merged);
          }
        } else {
          setSubmitError(message);
        }
      } finally {
        setSubmitting(false);
      }
    },
    [frameId, loadReads, resetModalForm],
  );

  const clearFilters = useCallback(() => {
    setFieldValues((prev) => {
      const cleared: FigmaFieldValues = {
        ...prev,
        "search-input": "",
        "role-filter": "",
        "status-filter": "",
        "filter-categories": "",
        "search-users": "",
      };
      fieldValuesRef.current = cleared;
      return cleared;
    });
    setCurrentPage(1);
    void loadReads();
  }, [loadReads]);

  const beginEditCategory = useCallback((id: string, opener?: HTMLElement) => {
    const row = allCategories.find((item) => item.id === id);
    if (!row) {
      return;
    }
    if (opener) {
      registerCategoryDialogOpener(opener);
    }
    setEditingId(id);
    setFieldValues((prev) => {
      const next = {
        ...prev,
        title: row.title ?? "",
        description: row.description ?? "",
        icon: row.icon ?? "",
      };
      fieldValuesRef.current = next;
      captureCategoryModalBaseline(next);
      return next;
    });
    setFieldErrors({});
    setFigmaFieldErrors({});
    openFigmaDialog("act_9c6be34838f4");
  }, [allCategories]);

  const deleteCategoryById = useCallback(
    async (id: string) => {
      if (!globalThis.confirm("Delete this category?")) {
        return;
      }
      try {
        await apiDeleteCategory(id);
        await loadReads();
      } catch (error) {
        setSubmitError(getApiErrorMessage(error));
      }
    },
    [loadReads],
  );

  const beginEditHoliday = useCallback((id: string, opener?: HTMLElement) => {
    const row = allHolidays.find((item) => item.id === id);
    if (!row) {
      return;
    }
    if (opener) {
      registerHolidayDialogOpener(opener);
    }
    setEditingId(id);
    setFieldValues((prev) => {
      const next = {
        ...prev,
        name: row.name ?? "",
        "start-date": row.start_date ?? "",
        "end-date": row.end_date ?? "",
      };
      fieldValuesRef.current = next;
      captureHolidayModalBaseline(next);
      return next;
    });
    setFieldErrors({});
    setFigmaFieldErrors({});
    openFigmaDialog("act_8e0ab36f39bd");
  }, [allHolidays]);

  const deleteHolidayById = useCallback(
    async (id: string) => {
      if (!globalThis.confirm("Delete this holiday?")) {
        return;
      }
      try {
        await apiDeleteHoliday(id);
        await loadReads();
      } catch (error) {
        setSubmitError(getApiErrorMessage(error));
      }
    },
    [loadReads],
  );

  const uploadHolidayList = useCallback(
    async (file: File) => {
      setImportingHolidayList(true);
      setSubmitError(null);
      setStatusMessage("");
      try {
        const body = await importHolidaysList(file);
        const record =
          body !== null && typeof body === "object" ? (body as Record<string, unknown>) : null;
        const message =
          typeof record?.message === "string" ? record.message : "Holiday list uploaded.";
        setStatusMessage(message);
        await loadReads();
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          clearReadPayloads();
        }
        setSubmitError(getApiErrorMessage(error));
      } finally {
        setImportingHolidayList(false);
      }
    },
    [loadReads],
  );

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
    if (totalFiltered <= 0) {
      return 0;
    }
    return Math.ceil(totalFiltered / pageSize);
  }, [totalFiltered, pageSize]);

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
    categories,
    holidays,
    collectionKind,
    pageSize,
    totalFiltered,
    pageItemsCount,
    beginEditCategory,
    deleteCategoryById,
    beginEditHoliday,
    deleteHolidayById,
    resetModalForm,
    editingCategoryId: editingId,
    editingHolidayId: editingId,
    closeHolidayModal,
    closeCategoryModal,
    uploadHolidayList,
    importingHolidayList,
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
      categories: [] as ApiCategory[],
      holidays: [] as ApiHoliday[],
      collectionKind: null as "users" | "categories" | "holidays" | null,
      pageSize: 6,
      totalFiltered: 0,
      pageItemsCount: 0,
      beginEditCategory: () => {},
      deleteCategoryById: async () => {},
      beginEditHoliday: () => {},
      deleteHolidayById: async () => {},
      resetModalForm: () => {},
      editingCategoryId: null,
      editingHolidayId: null,
      closeHolidayModal: () => {},
      closeCategoryModal: () => {},
      uploadHolidayList: async () => {},
      importingHolidayList: false,
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
      if (field === "search-input" || field === "search-users") {
        ctx.setCurrentPage(1);
        searchReloadRegistry.get(ctx)?.();
      }
      if (field === "filter-categories") {
        ctx.setCurrentPage(1);
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
