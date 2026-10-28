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
import {
  createCategory,
  deleteCategory as deleteCategoryApi,
  listCategories,
  updateCategory,
  type ApiCategory,
} from "@/lib/api/categories";
import {
  createHoliday,
  deleteHoliday as deleteHolidayApi,
  importHolidays as importHolidaysApi,
  listHolidays,
  updateHoliday,
  type ApiHoliday,
} from "@/lib/api/holidays";
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
  onBlur?: () => void;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

const ROUTE_TO_FRAME: Record<string, string> = {
  "manage-users": "5359:17424",
  "manage-holiday": "5621:28270",
  "manage-category": "5449:19126",
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
  act_343c44276459: "/week-calendar-default",
  act_9b8446277dda: "/week-calendar-default",
  act_9916cd70561d: "/manage-category",
  act_608aa0d2e082: "/week-calendar-default",
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
  "act_3e52a9e8a905",
  "act_9cb2d6ba2b8b",
  "act_084002b35e7a",
  "act_47a65406f291",
  "act_4acaeab4fb49",
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
  "act_0e7f4be472d9",
  "act_8e0ab36f39bd",
  "act_9c6be34838f4",
  "act_302ca0c59c1b",
]);

const MANAGE_USERS_PAGE_SIZE = 6;
const MANAGE_HOLIDAY_PAGE_SIZE = 6;
const MANAGE_CATEGORY_PAGE_SIZE = 5;
const FILTER_CATEGORIES_MAX_LENGTH = 200;
const HOLIDAY_MODAL_FRAME_ID = "5621:28800";
const CATEGORY_MODAL_FRAME_ID = "5359:17278";

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
  holidays: ApiHoliday[];
  holidaysLoading: boolean;
  holidaysError: string | null;
  totalHolidays: number;
  toggleHolidayStatus: (holidayId: string, nextActive: boolean) => Promise<void>;
  deleteHoliday: (holidayId: string) => Promise<void>;
  beginEditHoliday: (holidayId: string) => void;
  openAddHolidayDialog: () => void;
  closeHolidayDialog: () => void;
  editingHolidayId: string | null;
  beginEditCategory: (categoryId: string) => void;
  openAddCategoryDialog: () => void;
  closeCategoryDialog: () => void;
  editingCategoryId: string | null;
  validateFilterCategoriesField: () => void;
  categories: ApiCategory[];
  categoriesLoading: boolean;
  categoriesError: string | null;
  totalCategories: number;
  toggleCategoryStatus: (categoryId: string, nextActive: boolean) => Promise<void>;
  deleteCategory: (categoryId: string) => Promise<void>;
  deleteConfirmId: string | null;
  setDeleteConfirmId: (id: string | null) => void;
  confirmDelete: () => Promise<void>;
  importHolidayList: (file: File) => Promise<void>;
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
  const [allHolidays, setAllHolidays] = useState<ApiHoliday[]>([]);
  const [holidaysLoading, setHolidaysLoading] = useState(false);
  const [holidaysError, setHolidaysError] = useState<string | null>(null);
  const [totalHolidays, setTotalHolidays] = useState(0);
  const [allCategoriesRaw, setAllCategoriesRaw] = useState<ApiCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [editingHolidayId, setEditingHolidayId] = useState<string | null>(null);
  const editingHolidayIdRef = useRef<string | null>(null);
  editingHolidayIdRef.current = editingHolidayId;
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const editingCategoryIdRef = useRef<string | null>(null);
  editingCategoryIdRef.current = editingCategoryId;
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

    const fv = fieldValuesRef.current;
    const isUsers = frameId === "5359:17424";
    const isHolidays = frameId === "5621:28270";
    const isCategories = frameId === "5449:19126";

    if (isUsers) {
      setUsersLoading(true);
      setUsersError(null);
    }
    if (isHolidays) {
      setHolidaysLoading(true);
      setHolidaysError(null);
    }
    if (isCategories) {
      setCategoriesLoading(true);
      setCategoriesError(null);
    }
    setStatusMessage("");

    const loadErrorMessage = (error: unknown, fallback: string): string => {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;
        if (typeof data === "object" && data && "message" in data) {
          return String((data as { message: unknown }).message);
        }
        if (error.message) {
          return error.message;
        }
      }
      return fallback;
    };

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
          } else if (op.path === "/api/v1/marketing-team-member/holidays") {
            const result = await listHolidays({
              search: String(fv["search-users"] ?? ""),
            });
            body = { data: { items: result.items } };
            setAllHolidays(result.items);
            setTotalHolidays(result.items.length);
          } else if (op.path === "/api/v1/marketing-team-member/categories") {
            const result = await listCategories();
            body = { data: { items: result.items } };
            setAllCategoriesRaw(result.items);
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
      const message = loadErrorMessage(
        error,
        isUsers
          ? "Unable to load users."
          : isHolidays
            ? "Unable to load holidays."
            : "Unable to load categories.",
      );
      if (isUsers) {
        setUsersError(message);
        setAllUsers([]);
        setTotalUsers(0);
      }
      if (isHolidays) {
        setHolidaysError(message);
        setAllHolidays([]);
        setTotalHolidays(0);
      }
      if (isCategories) {
        setCategoriesError(message);
        setAllCategoriesRaw([]);
      }
    } finally {
      if (isUsers) {
        setUsersLoading(false);
      }
      if (isHolidays) {
        setHolidaysLoading(false);
      }
      if (isCategories) {
        setCategoriesLoading(false);
      }
    }
  }, [frameId]);

  const users = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_USERS_PAGE_SIZE;
    return allUsers.slice(start, start + MANAGE_USERS_PAGE_SIZE);
  }, [allUsers, currentPage]);

  const holidays = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_HOLIDAY_PAGE_SIZE;
    return allHolidays.slice(start, start + MANAGE_HOLIDAY_PAGE_SIZE);
  }, [allHolidays, currentPage]);

  const filteredCategoriesAll = useMemo(() => {
    const q = String(fieldValues["filter-categories"] ?? "")
      .trim()
      .toLowerCase();
    if (!q) {
      return allCategoriesRaw;
    }
    return allCategoriesRaw.filter(
      (row) =>
        row.title.toLowerCase().includes(q) || row.description.toLowerCase().includes(q),
    );
  }, [allCategoriesRaw, fieldValues]);

  const totalCategories = filteredCategoriesAll.length;

  const categories = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_CATEGORY_PAGE_SIZE;
    return filteredCategoriesAll.slice(start, start + MANAGE_CATEGORY_PAGE_SIZE);
  }, [filteredCategoriesAll, currentPage]);

  useEffect(() => {
    let total = 0;
    let pageSize = MANAGE_USERS_PAGE_SIZE;
    if (frameId === "5621:28270") {
      total = totalHolidays;
      pageSize = MANAGE_HOLIDAY_PAGE_SIZE;
    } else if (frameId === "5449:19126") {
      total = totalCategories;
      pageSize = MANAGE_CATEGORY_PAGE_SIZE;
    } else if (frameId === "5359:17424") {
      total = totalUsers;
      pageSize = MANAGE_USERS_PAGE_SIZE;
    } else {
      return;
    }
    if (total <= 0) {
      return;
    }
    const pages = Math.ceil(total / pageSize);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalUsers, totalHolidays, totalCategories, frameId]);

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
        if (targetFrame === HOLIDAY_MODAL_FRAME_ID && editingHolidayIdRef.current) {
          const existing = allHolidays.find((row) => row.id === editingHolidayIdRef.current);
          await updateHoliday(editingHolidayIdRef.current, {
            name: String(payload.name ?? existing?.name ?? ""),
            start_date: String(payload.start_date ?? existing?.start_date ?? ""),
            end_date: String(payload.end_date ?? existing?.end_date ?? ""),
            status: existing?.status ?? "active",
          });
        } else if (targetFrame === HOLIDAY_MODAL_FRAME_ID) {
          await createHoliday({
            name: String(payload.name),
            start_date: String(payload.start_date),
            end_date: String(payload.end_date),
            status: "active",
          });
        } else if (targetFrame === CATEGORY_MODAL_FRAME_ID && editingCategoryIdRef.current) {
          const existing = allCategoriesRaw.find((row) => row.id === editingCategoryIdRef.current);
          await updateCategory(editingCategoryIdRef.current, {
            title: String(payload.title ?? existing?.title ?? ""),
            description:
              payload.description !== undefined
                ? String(payload.description)
                : (existing?.description ?? ""),
            icon: payload.icon !== undefined ? String(payload.icon) : undefined,
            status: existing?.status ?? "active",
          });
        } else if (targetFrame === CATEGORY_MODAL_FRAME_ID) {
          await createCategory({
            title: String(payload.title),
            description: payload.description ? String(payload.description) : undefined,
            icon: payload.icon ? String(payload.icon) : undefined,
            status: "active",
          });
        } else {
          await apiClient.request({
            method: op.method,
            url: op.path,
            data: payload,
          });
        }
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
        if (targetFrame === HOLIDAY_MODAL_FRAME_ID) {
          setFieldValues((prev) => ({
            ...prev,
            "holiday-name": "",
            "start-date": "",
            "end-date": "",
          }));
          setEditingHolidayId(null);
        }
        if (targetFrame === CATEGORY_MODAL_FRAME_ID) {
          setFieldValues((prev) => ({
            ...prev,
            "category-title": "",
            "category-description": "",
            icon: "",
          }));
          setEditingCategoryId(null);
        }
        await loadReads();
        closeFigmaDialog();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          setSubmitError(message);
        } else if (axios.isAxiosError(error) && error.response?.data) {
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
          if (
            error.response.status === 409 &&
            targetFrame === CATEGORY_MODAL_FRAME_ID &&
            !fromServer["category-title"]
          ) {
            const code =
              typeof error.response.data === "object" &&
              error.response.data &&
              "error" in error.response.data &&
              typeof (error.response.data as { error?: { code?: string } }).error?.code === "string"
                ? (error.response.data as { error: { code: string } }).error.code
                : "";
            if (code === "CATEGORY_TITLE_CONFLICT" || message.toLowerCase().includes("title")) {
              setFieldErrors((prev) => ({
                ...prev,
                "category-title": message,
              }));
            }
          }
        } else {
          setSubmitError(message);
        }
      } finally {
        setSubmitting(false);
      }
    },
    [frameId, allHolidays, allCategoriesRaw, loadReads],
  );

  const clearFilters = useCallback(() => {
    setFieldValues((prev) => {
      const cleared: FigmaFieldValues = { ...prev };
      if (frameId === "5621:28270") {
        cleared["search-users"] = "";
      } else if (frameId === "5449:19126") {
        cleared["filter-categories"] = "";
      } else {
        cleared["search-input"] = "";
        cleared["role-filter"] = "";
        cleared["status-filter"] = "";
      }
      fieldValuesRef.current = cleared;
      return cleared;
    });
    setCurrentPage(1);
    if (frameId === "5359:17424" || frameId === "5621:28270") {
      void loadReads();
    }
  }, [frameId, loadReads]);

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
    if (frameId === "5621:28270") {
      if (totalHolidays <= 0) {
        return 0;
      }
      return Math.ceil(totalHolidays / MANAGE_HOLIDAY_PAGE_SIZE);
    }
    if (frameId === "5449:19126") {
      if (totalCategories <= 0) {
        return 0;
      }
      return Math.ceil(totalCategories / MANAGE_CATEGORY_PAGE_SIZE);
    }
    if (totalUsers <= 0) {
      return 0;
    }
    return Math.ceil(totalUsers / MANAGE_USERS_PAGE_SIZE);
  }, [frameId, totalUsers, totalHolidays, totalCategories]);

  const findHoliday = useCallback(
    (id: string) => allHolidays.find((row) => row.id === id),
    [allHolidays],
  );

  const findCategory = useCallback(
    (id: string) => allCategoriesRaw.find((row) => row.id === id),
    [allCategoriesRaw],
  );

  const toggleHolidayStatus = useCallback(
    async (holidayId: string, nextActive: boolean) => {
      const row = findHoliday(holidayId);
      if (!row) {
        return;
      }
      setStatusTogglingId(holidayId);
      try {
        await updateHoliday(holidayId, {
          name: row.name,
          start_date: row.start_date,
          end_date: row.end_date,
          status: nextActive ? "active" : "inactive",
        });
        await loadReads();
      } finally {
        setStatusTogglingId(null);
      }
    },
    [findHoliday, loadReads],
  );

  const toggleCategoryStatus = useCallback(
    async (categoryId: string, nextActive: boolean) => {
      const row = findCategory(categoryId);
      if (!row) {
        return;
      }
      setStatusTogglingId(categoryId);
      try {
        await updateCategory(categoryId, {
          title: row.title,
          description: row.description,
          status: nextActive ? "active" : "inactive",
        });
        await loadReads();
      } finally {
        setStatusTogglingId(null);
      }
    },
    [findCategory, loadReads],
  );

  const deleteHoliday = useCallback(
    async (holidayId: string) => {
      await deleteHolidayApi(holidayId);
      setDeleteConfirmId(null);
      await loadReads();
    },
    [loadReads],
  );

  const deleteCategory = useCallback(
    async (categoryId: string) => {
      try {
        await deleteCategoryApi(categoryId);
        setDeleteConfirmId(null);
        setCategoriesError(null);
        await loadReads();
      } catch (error) {
        setDeleteConfirmId(null);
        setCategoriesError(getApiErrorMessage(error));
      }
    },
    [loadReads],
  );

  const confirmDelete = useCallback(async () => {
    if (!deleteConfirmId) {
      return;
    }
    if (frameId === "5621:28270") {
      await deleteHoliday(deleteConfirmId);
      return;
    }
    if (frameId === "5449:19126") {
      await deleteCategory(deleteConfirmId);
    }
  }, [deleteConfirmId, deleteCategory, deleteHoliday, frameId]);

  const importHolidayList = useCallback(
    async (file: File) => {
      setHolidaysError(null);
      try {
        await importHolidaysApi(file);
        await loadReads();
      } catch (error) {
        setHolidaysError(getApiErrorMessage(error) || "Could not import holidays.");
      }
    },
    [loadReads],
  );

  const resetHolidayForm = useCallback(() => {
    setEditingHolidayId(null);
    setFieldErrors({});
    setSubmitError(null);
    setFieldValues((prev) => ({
      ...prev,
      "holiday-name": "",
      "start-date": "",
      "end-date": "",
    }));
  }, []);

  const openAddHolidayDialog = useCallback(() => {
    resetHolidayForm();
    openFigmaDialog("act_8e0ab36f39bd");
  }, [resetHolidayForm]);

  const closeHolidayDialog = useCallback(() => {
    resetHolidayForm();
    closeFigmaDialog();
  }, [resetHolidayForm]);

  const beginEditHoliday = useCallback(
    (holidayId: string) => {
      const row = findHoliday(holidayId);
      if (!row) {
        return;
      }
      setEditingHolidayId(holidayId);
      setFieldErrors({});
      setSubmitError(null);
      setFieldValues((prev) => ({
        ...prev,
        "holiday-name": row.name,
        "start-date": row.start_date,
        "end-date": row.end_date,
      }));
      openFigmaDialog("act_8e0ab36f39bd");
    },
    [findHoliday],
  );

  const resetCategoryForm = useCallback(() => {
    setEditingCategoryId(null);
    setFieldErrors({});
    setSubmitError(null);
    setFieldValues((prev) => ({
      ...prev,
      "category-title": "",
      "category-description": "",
      icon: "",
    }));
  }, []);

  const openAddCategoryDialog = useCallback(() => {
    resetCategoryForm();
    openFigmaDialog("act_9c6be34838f4");
  }, [resetCategoryForm]);

  const closeCategoryDialog = useCallback(() => {
    resetCategoryForm();
    closeFigmaDialog();
  }, [resetCategoryForm]);

  const beginEditCategory = useCallback(
    (categoryId: string) => {
      const row = findCategory(categoryId);
      if (!row) {
        return;
      }
      setEditingCategoryId(categoryId);
      setFieldErrors({});
      setSubmitError(null);
      setFieldValues((prev) => ({
        ...prev,
        "category-title": row.title,
        "category-description": row.description ?? "",
        icon: "",
      }));
      openFigmaDialog("act_9c6be34838f4");
    },
    [findCategory],
  );

  const validateFilterCategoriesField = useCallback(() => {
    const text = String(fieldValuesRef.current["filter-categories"] ?? "");
    if (text.length > FILTER_CATEGORIES_MAX_LENGTH) {
      setFieldErrors((prev) => ({
        ...prev,
        "filter-categories": `Use at most ${FILTER_CATEGORIES_MAX_LENGTH} characters.`,
      }));
      return;
    }
    setFieldErrors((prev) => {
      if (!prev["filter-categories"]) {
        return prev;
      }
      const next = { ...prev };
      delete next["filter-categories"];
      return next;
    });
  }, []);

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
    holidays,
    holidaysLoading,
    holidaysError,
    totalHolidays,
    toggleHolidayStatus,
    deleteHoliday,
    beginEditHoliday,
    openAddHolidayDialog,
    closeHolidayDialog,
    editingHolidayId,
    beginEditCategory,
    openAddCategoryDialog,
    closeCategoryDialog,
    editingCategoryId,
    validateFilterCategoriesField,
    categories,
    categoriesLoading,
    categoriesError,
    totalCategories,
    toggleCategoryStatus,
    deleteCategory,
    deleteConfirmId,
    setDeleteConfirmId,
    confirmDelete,
    importHolidayList,
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
      holidays: [] as ApiHoliday[],
      holidaysLoading: false,
      holidaysError: null as string | null,
      totalHolidays: 0,
      toggleHolidayStatus: async () => {},
      deleteHoliday: async () => {},
      beginEditHoliday: () => {},
      openAddHolidayDialog: () => {},
      closeHolidayDialog: () => {},
      editingHolidayId: null as string | null,
      beginEditCategory: () => {},
      openAddCategoryDialog: () => {},
      closeCategoryDialog: () => {},
      editingCategoryId: null as string | null,
      validateFilterCategoriesField: () => {},
      categories: [] as ApiCategory[],
      categoriesLoading: false,
      categoriesError: null as string | null,
      totalCategories: 0,
      toggleCategoryStatus: async () => {},
      deleteCategory: async () => {},
      deleteConfirmId: null as string | null,
      setDeleteConfirmId: () => {},
      confirmDelete: async () => {},
      importHolidayList: async () => {},
    };
  }
  return {
    ...ctx,
    bound: ctx.frameId,
    values: ctx.fieldValues as Record<string, string>,
  };
}

export function useFigmaFieldProps(field: string): FigmaFieldBinding {
  const ctx = useContext(FigmaScreenContext);
  if (!ctx) {
    return {};
  }
  const value = String(ctx.fieldValues[field] ?? "");
  const binding: FigmaFieldBinding = {
    value,
    onChange: (event) => {
      let next = event.target.value;
      if (field === "filter-categories" && next.length > FILTER_CATEGORIES_MAX_LENGTH) {
        next = next.slice(0, FILTER_CATEGORIES_MAX_LENGTH);
      }
      ctx.setFieldValue(field, next);
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
  if (field === "filter-categories") {
    binding.onBlur = () => {
      ctx.validateFilterCategoriesField();
    };
  }
  return binding;
}

export function useFigmaActionProps(action: string): FigmaActionBinding {
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

/** Luna codegen spread sites — alias of `useFigmaActionProps`. */
export const figmaActionProps = useFigmaActionProps;

/** Luna codegen spread sites — alias of `useFigmaFieldProps`. */
export const figmaFieldProps = useFigmaFieldProps;

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
