import apiClient from "@/lib/api/client";

export type HolidayStatus = "active" | "inactive";

export type ApiHoliday = {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  status: HolidayStatus;
  is_active: boolean;
};

export type ListHolidaysParams = {
  search?: string;
  status?: string;
};

export type ListHolidaysResult = {
  items: ApiHoliday[];
  total: number;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function normalizeHoliday(raw: unknown): ApiHoliday | null {
  const row = asRecord(raw);
  if (!row) {
    return null;
  }
  const id = String(row.id ?? "");
  if (!id) {
    return null;
  }
  const name = String(row.name ?? "");
  const start_date = String(row.start_date ?? row.startDate ?? "");
  const end_date = String(row.end_date ?? row.endDate ?? start_date);
  const statusRaw = row.status;
  const status: HolidayStatus =
    statusRaw === "inactive" || statusRaw === "active"
      ? statusRaw
      : row.is_active === false || row.is_active === "false" || row.is_active === 0
        ? "inactive"
        : "active";
  const is_active = status === "active";
  return { id, name, start_date, end_date, status, is_active };
}

export function unwrapHolidaysList(body: unknown): ListHolidaysResult {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems =
    data?.items ??
    data?.holidays ??
    (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeHoliday)
    .filter((row): row is ApiHoliday => row !== null);
  const total = Number(
    data?.total ?? data?.total_count ?? data?.count ?? root?.total ?? items.length,
  );
  return { items, total: Number.isFinite(total) ? total : items.length };
}

export type HolidayWritePayload = {
  name: string;
  start_date: string;
  end_date: string;
  status?: "active" | "inactive";
};

export type HolidayImportRowError = {
  row: number;
  message: string;
};

export type HolidayImportResult = {
  created: number;
  failed: number;
  message?: string;
  errors?: HolidayImportRowError[];
};

export async function listHolidays(params: ListHolidaysParams = {}): Promise<ListHolidaysResult> {
  const query: Record<string, string> = {};
  if (params.search?.trim()) {
    query.search = params.search.trim();
  }
  if (params.status?.trim()) {
    query.status = params.status.trim();
  }
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/holidays", {
    params: Object.keys(query).length > 0 ? query : undefined,
  });
  return unwrapHolidaysList(response.data);
}

export async function createHoliday(payload: HolidayWritePayload): Promise<unknown> {
  const body = { ...payload, status: payload.status ?? "active" };
  const response = await apiClient.post<unknown>("/api/v1/marketing-team-member/holidays", body);
  return response.data;
}

export async function updateHoliday(
  id: string,
  payload: Partial<HolidayWritePayload>,
): Promise<unknown> {
  const response = await apiClient.put<unknown>(
    `/api/v1/marketing-team-member/holidays/${encodeURIComponent(id)}`,
    payload,
  );
  return response.data;
}

export async function importHolidays(file: File): Promise<HolidayImportResult> {
  const form = new FormData();
  form.append("file", file);
  const response = await apiClient.post<unknown>(
    "/api/v1/marketing-team-member/holidays/import",
    form,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  const root = asRecord(response.data);
  const data = asRecord(root?.data) ?? root;
  const created = Number(data?.created ?? 0);
  const failed = Number(data?.failed ?? 0);
  const message = typeof root?.message === "string" ? root.message : undefined;
  const rawErrors = data?.errors;
  const errors = (Array.isArray(rawErrors) ? rawErrors : [])
    .map((entry) => {
      const item = asRecord(entry);
      if (!item) {
        return null;
      }
      const row = Number(item.row);
      const errMessage = String(item.message ?? "");
      if (!Number.isFinite(row) || !errMessage) {
        return null;
      }
      return { row, message: errMessage };
    })
    .filter((entry): entry is HolidayImportRowError => entry !== null);
  return {
    created: Number.isFinite(created) ? created : 0,
    failed: Number.isFinite(failed) ? failed : 0,
    message,
    errors: errors.length > 0 ? errors : undefined,
  };
}

export async function deleteHoliday(id: string): Promise<unknown> {
  const response = await apiClient.delete<unknown>(
    `/api/v1/marketing-team-member/holidays/${encodeURIComponent(id)}`,
  );
  return response.data;
}
