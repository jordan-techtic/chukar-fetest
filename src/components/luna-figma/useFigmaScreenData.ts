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
  deleteCategory as deleteCategoryApi,
  listCategories,
  type ApiCategory,
} from "@/lib/api/categories";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import {
  deleteHoliday as deleteHolidayApi,
  importHolidays,
  listHolidays,
  type ApiHoliday,
  type HolidayImportResult,
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
  act_343c44276459: "/marketing-team-member-week-calendar-default",
  act_9b8446277dda: "/marketing-team-member-week-calendar-default",
  act_9916cd70561d: "/manage-category",
  act_fda92fdd76ba: "/marketing-team-member/week-calendar-historical/1",
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
  "act_0e7f4be472d9",
  "act_302ca0c59c1b",
  "act_8e0ab36f39bd",
  "act_9c6be34838f4",
  "act_10a2fe67aa7b",
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
const MANAGE_HOLIDAY_PAGE_SIZE = 6;
const MANAGE_CATEGORY_PAGE_SIZE = 5;
const FILTER_CATEGORIES_MAX_LENGTH = 200;
const CATEGORY_WRITE_FRAME_ID = "5359:17278";

function validateFilterCategoriesValue(raw: string): string | null {
  if (raw.length > FILTER_CATEGORIES_MAX_LENGTH) {
    return `Use at most ${FILTER_CATEGORIES_MAX_LENGTH} characters.`;
  }
  if (raw.length > 0 && raw.trim() === "") {
    return "This field is required.";
  }
  return null;
}

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
  holidays: ApiHoliday[];
  holidaysLoading: boolean;
  holidaysError: string | null;
  totalHolidays: number;
  categories: ApiCategory[];
  categoriesLoading: boolean;
  categoriesError: string | null;
  totalCategories: number;
  currentPage: number;
  setCurrentPage: (page: number | ((p: number) => number)) => void;
  totalPages: number;
  totalUsers: number;
  pageSize: number;
  clearFilters: () => void;
  statusMessage: string;
  submitError: string | null;
  toggleUserStatus: (userId: string, nextActive: boolean) => Promise<void>;
  statusTogglingId: string | null;
  deleteHolidayRow: (id: string) => Promise<void>;
  deleteCategoryRow: (id: string) => Promise<void>;
  beginEditHoliday: (holiday: ApiHoliday) => void;
  beginEditCategory: (category: ApiCategory) => void;
  resetHolidayForm: () => void;
  resetCategoryForm: () => void;
  deleteInProgressId: string | null;
  mutationError: string | null;
  holidayImportInProgress: boolean;
  holidayImportSummary: HolidayImportResult | null;
  uploadHolidayList: (file: File) => Promise<void>;
  isEditingCategory: boolean;
  blurValidateField: (field: string) => void;
  setFieldError: (key: string, message: string | null) => void;
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
  const [allHolidays, setAllHolidays] = useState<ApiHoliday[]>([]);
  const [holidaysLoading, setHolidaysLoading] = useState(false);
  const [holidaysError, setHolidaysError] = useState<string | null>(null);
  const [holidayImportInProgress, setHolidayImportInProgress] = useState(false);
  const [holidayImportSummary, setHolidayImportSummary] = useState<HolidayImportResult | null>(null);
  const [allCategories, setAllCategories] = useState<ApiCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [statusTogglingId, setStatusTogglingId] = useState<string | null>(null);
  const [deleteInProgressId, setDeleteInProgressId] = useState<string | null>(null);
  const [mutationError, setMutationError] = useState<string | null>(null);
  const editingHolidayIdRef = useRef<string | null>(null);
  const editingCategoryIdRef = useRef<string | null>(null);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const fieldValuesRef = useRef(fieldValues);
  fieldValuesRef.current = fieldValues;
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pageSize =
    frameId === "5621:28270"
      ? MANAGE_HOLIDAY_PAGE_SIZE
      : frameId === "5449:19126"
        ? MANAGE_CATEGORY_PAGE_SIZE
        : MANAGE_USERS_PAGE_SIZE;

  const setFieldError = useCallback((key: string, message: string | null) => {
    setFieldErrors((prev) => {
      if (!message) {
        if (!prev[key]) {
          return prev;
        }
        const next = { ...prev };
        delete next[key];
        return next;
      }
      if (prev[key] === message) {
        return prev;
      }
      return { ...prev, [key]: message };
    });
  }, []);

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

    if (frameId === "5359:17424") {
      setUsersLoading(true);
      setUsersError(null);
    } else if (frameId === "5621:28270") {
      setHolidaysLoading(true);
      setHolidaysError(null);
    } else if (frameId === "5449:19126") {
      setCategoriesLoading(true);
      setCategoriesError(null);
    }
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
          } else if (op.path === "/api/v1/marketing-team-member/holidays") {
            const result = await listHolidays({
              search: String(fv["search-users"] ?? ""),
            });
            body = { data: { items: result.items } };
            setAllHolidays(result.items);
          } else if (op.path === "/api/v1/marketing-team-member/categories") {
            const result = await listCategories();
            body = { data: { items: result.items, total: result.total } };
            setAllCategories(result.items);
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
      const message = getApiErrorMessage(error);
      if (frameId === "5359:17424") {
        setUsersError(message || "Unable to load users.");
        setAllUsers([]);
        setTotalUsers(0);
      } else if (frameId === "5621:28270") {
        setHolidaysError(message || "Unable to load holidays.");
        setAllHolidays([]);
      } else if (frameId === "5449:19126") {
        setCategoriesError(message || "Unable to load categories.");
        setAllCategories([]);
      }
    } finally {
      if (frameId === "5359:17424") {
        setUsersLoading(false);
      } else if (frameId === "5621:28270") {
        setHolidaysLoading(false);
      } else if (frameId === "5449:19126") {
        setCategoriesLoading(false);
      }
    }
  }, [frameId]);

  const users = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_USERS_PAGE_SIZE;
    return allUsers.slice(start, start + MANAGE_USERS_PAGE_SIZE);
  }, [allUsers, currentPage]);

  const totalHolidays = allHolidays.length;

  const holidays = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_HOLIDAY_PAGE_SIZE;
    return allHolidays.slice(start, start + MANAGE_HOLIDAY_PAGE_SIZE);
  }, [allHolidays, currentPage]);

  const filteredCategories = useMemo(() => {
    const query = String(fieldValues["filter-categories"] ?? "")
      .trim()
      .toLowerCase();
    if (!query) {
      return allCategories;
    }
    return allCategories.filter(
      (row) =>
        row.title.toLowerCase().includes(query) ||
        row.description.toLowerCase().includes(query) ||
        row.value.toLowerCase().includes(query),
    );
  }, [allCategories, fieldValues]);

  const totalCategories = filteredCategories.length;

  const categories = useMemo(() => {
    const start = (currentPage - 1) * MANAGE_CATEGORY_PAGE_SIZE;
    return filteredCategories.slice(start, start + MANAGE_CATEGORY_PAGE_SIZE);
  }, [filteredCategories, currentPage]);

  useEffect(() => {
    if (frameId !== "5359:17424" || totalUsers <= 0) {
      return;
    }
    const pages = Math.ceil(totalUsers / MANAGE_USERS_PAGE_SIZE);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalUsers, frameId]);

  useEffect(() => {
    if (frameId !== "5621:28270" || totalHolidays <= 0) {
      return;
    }
    const pages = Math.ceil(totalHolidays / MANAGE_HOLIDAY_PAGE_SIZE);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalHolidays, frameId]);

  useEffect(() => {
    if (frameId !== "5449:19126" || totalCategories <= 0) {
      return;
    }
    const pages = Math.ceil(totalCategories / MANAGE_CATEGORY_PAGE_SIZE);
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, totalCategories, frameId]);

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

  const pickWriteOperation = useCallback((targetFrame: string): FigmaOperation | undefined => {
    const writes = figmaOperations(targetFrame).filter((op) => op.role === "write");
    if (targetFrame === "5621:28800" && editingHolidayIdRef.current) {
      return writes.find((op) => op.method === "PUT") ?? figmaWriteOperation(targetFrame);
    }
    if (targetFrame === "5359:17278" && editingCategoryIdRef.current) {
      return writes.find((op) => op.method === "PUT") ?? figmaWriteOperation(targetFrame);
    }
    return writes.find((op) => op.method === "POST") ?? figmaWriteOperation(targetFrame);
  }, []);

  const submit = useCallback(
    async (frameIdOverride?: string) => {
      const targetFrame = frameIdOverride ?? frameId;
      const op = pickWriteOperation(targetFrame);
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
      setMutationError(null);
      try {
        const payload = requestBodyFor(op, fieldValuesRef.current);
        let url = op.path;
        if (targetFrame === "5621:28800" && editingHolidayIdRef.current) {
          url = op.path.replace("{id}", encodeURIComponent(editingHolidayIdRef.current));
        }
        if (targetFrame === CATEGORY_WRITE_FRAME_ID && editingCategoryIdRef.current) {
          url = op.path.replace("{id}", encodeURIComponent(editingCategoryIdRef.current));
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
        if (targetFrame === "5621:28800") {
          editingHolidayIdRef.current = null;
          setFieldValues((prev) => ({
            ...prev,
            "holiday-name": "",
            "start-date": "",
            "end-date": "",
          }));
        }
        if (targetFrame === CATEGORY_WRITE_FRAME_ID) {
          editingCategoryIdRef.current = null;
          setIsEditingCategory(false);
          setFieldValues((prev) => ({
            ...prev,
            "category-title": "",
            "category-description": "",
          }));
        }
        await loadReads();
        closeFigmaDialog();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          setMutationError(message || "You do not have permission to perform this action.");
        }
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
    [frameId, loadReads, pickWriteOperation],
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
    setFieldErrors((prev) => {
      if (!prev["filter-categories"]) {
        return prev;
      }
      const next = { ...prev };
      delete next["filter-categories"];
      return next;
    });
    setCurrentPage(1);
    if (frameId === "5449:19126") {
      return;
    }
    void loadReads();
  }, [frameId, loadReads]);

  const resetHolidayForm = useCallback(() => {
    editingHolidayIdRef.current = null;
    setFieldValues((prev) => ({
      ...prev,
      "holiday-name": "",
      "start-date": "",
      "end-date": "",
    }));
    setFieldErrors({});
    setSubmitError(null);
  }, []);

  const resetCategoryForm = useCallback(() => {
    editingCategoryIdRef.current = null;
    setIsEditingCategory(false);
    setFieldValues((prev) => ({
      ...prev,
      "category-title": "",
      "category-description": "",
    }));
    setFieldErrors({});
    setSubmitError(null);
  }, []);

  const blurValidateField = useCallback(
    (field: string) => {
      if (field === "filter-categories") {
        const raw = String(fieldValuesRef.current["filter-categories"] ?? "");
        const message = validateFilterCategoriesValue(raw);
        setFieldErrors((prev) => {
          const next = { ...prev };
          if (message) {
            next[field] = message;
          } else {
            delete next[field];
          }
          return next;
        });
        return;
      }
      if (field === "category-title" || field === "category-description") {
        const op = pickWriteOperation(CATEGORY_WRITE_FRAME_ID);
        if (!op) {
          return;
        }
        const clientErrors = validateValues(op, fieldValuesRef.current);
        const message = clientErrors[field];
        setFieldErrors((prev) => {
          const next = { ...prev };
          if (message) {
            next[field] = message;
          } else {
            delete next[field];
          }
          return next;
        });
      }
    },
    [pickWriteOperation],
  );

  const beginEditHoliday = useCallback((holiday: ApiHoliday) => {
    editingHolidayIdRef.current = holiday.id;
    setFieldValues((prev) => ({
      ...prev,
      "holiday-name": holiday.name,
      "start-date": holiday.start_date,
      "end-date": holiday.end_date,
    }));
    setFieldErrors({});
    setSubmitError(null);
  }, []);

  const beginEditCategory = useCallback((category: ApiCategory) => {
    editingCategoryIdRef.current = category.id;
    setIsEditingCategory(true);
    setFieldValues((prev) => ({
      ...prev,
      "category-title": category.title,
      "category-description": category.description,
    }));
    setFieldErrors({});
    setSubmitError(null);
  }, []);

  const deleteHolidayRow = useCallback(
    async (id: string) => {
      setDeleteInProgressId(id);
      setMutationError(null);
      try {
        await deleteHolidayApi(id);
        await loadReads();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          setMutationError(message || "You do not have permission to delete holidays.");
        } else {
          setMutationError(message || "Unable to delete holiday.");
        }
      } finally {
        setDeleteInProgressId(null);
      }
    },
    [loadReads],
  );

  const uploadHolidayList = useCallback(
    async (file: File) => {
      setHolidayImportInProgress(true);
      setMutationError(null);
      setHolidayImportSummary(null);
      try {
        const result = await importHolidays(file);
        await loadReads();
        setHolidayImportSummary(result);
        if (result.failed > 0) {
          const parts = [`Imported ${result.created} holiday(s).`];
          parts.push(`${result.failed} row(s) could not be imported.`);
          setMutationError(parts.join(" "));
        }
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          setMutationError(message || "You do not have permission to import holidays.");
        } else {
          setMutationError(message || "Unable to import holiday list.");
        }
      } finally {
        setHolidayImportInProgress(false);
      }
    },
    [loadReads],
  );

  const deleteCategoryRow = useCallback(
    async (id: string) => {
      setDeleteInProgressId(id);
      setMutationError(null);
      try {
        await deleteCategoryApi(id);
        await loadReads();
      } catch (error) {
        const message = getApiErrorMessage(error);
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          setMutationError(message || "You do not have permission to delete categories.");
        } else {
          setMutationError(message || "Unable to delete category.");
        }
      } finally {
        setDeleteInProgressId(null);
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
  }, [frameId, totalHolidays, totalCategories, totalUsers]);

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
    holidays,
    holidaysLoading,
    holidaysError,
    totalHolidays,
    categories,
    categoriesLoading,
    categoriesError,
    totalCategories,
    currentPage,
    setCurrentPage,
    totalPages,
    totalUsers,
    pageSize,
    clearFilters,
    statusMessage,
    submitError,
    toggleUserStatus,
    statusTogglingId,
    deleteHolidayRow,
    deleteCategoryRow,
    beginEditHoliday,
    beginEditCategory,
    resetHolidayForm,
    resetCategoryForm,
    deleteInProgressId,
    mutationError,
    holidayImportInProgress,
    holidayImportSummary,
    uploadHolidayList,
    isEditingCategory,
    blurValidateField,
    setFieldError,
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
      categories: [] as ApiCategory[],
      categoriesLoading: false,
      categoriesError: null as string | null,
      totalCategories: 0,
      pageSize: MANAGE_USERS_PAGE_SIZE,
      deleteHolidayRow: async () => {},
      deleteCategoryRow: async () => {},
      beginEditHoliday: () => {},
      beginEditCategory: () => {},
      resetHolidayForm: () => {},
      resetCategoryForm: () => {},
      deleteInProgressId: null as string | null,
      mutationError: null as string | null,
      holidayImportInProgress: false,
      holidayImportSummary: null,
      uploadHolidayList: async () => {},
      isEditingCategory: false,
      blurValidateField: () => {},
      setFieldError: () => {},
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
      let nextValue = event.target.value;
      if (field === "filter-categories" && nextValue.length > FILTER_CATEGORIES_MAX_LENGTH) {
        nextValue = nextValue.slice(0, FILTER_CATEGORIES_MAX_LENGTH);
      }
      ctx.setFieldValue(field, nextValue);
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
        ctx.setFieldError("filter-categories", validateFilterCategoriesValue(nextValue));
      }
    },
    onBlur:
      field === "filter-categories" ||
      field === "category-title" ||
      field === "category-description"
        ? () => {
            ctx.blurValidateField(field);
          }
        : undefined,
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
