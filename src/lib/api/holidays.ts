import apiClient from "@/lib/api/client";

export type ApiHoliday = {
  id: string;
  name: string;
  start_date?: string | null;
  end_date?: string | null;
  status?: string | null;
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
  return {
    id,
    name: String(row.name ?? ""),
    start_date:
      typeof row.start_date === "string"
        ? row.start_date
        : typeof row.startDate === "string"
          ? row.startDate
          : null,
    end_date:
      typeof row.end_date === "string"
        ? row.end_date
        : typeof row.endDate === "string"
          ? row.endDate
          : null,
    status: typeof row.status === "string" ? row.status : null,
  };
}

export function unwrapHolidaysList(body: unknown): { items: ApiHoliday[]; total: number } {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems = data?.items ?? (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeHoliday)
    .filter((item): item is ApiHoliday => item !== null);
  const total = Number(data?.total ?? data?.total_count ?? data?.count ?? items.length);
  return { items, total: Number.isFinite(total) ? total : items.length };
}

export type ListHolidaysParams = {
  search?: string;
};

export async function listHolidays(params: ListHolidaysParams = {}): Promise<{ items: ApiHoliday[]; total: number }> {
  const query: Record<string, string> = {};
  if (params.search?.trim()) {
    query.search = params.search.trim();
  }
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/holidays", { params: query });
  return unwrapHolidaysList(response.data);
}

export type HolidayWritePayload = {
  name?: string;
  start_date?: string;
  end_date?: string;
};

export async function createHoliday(payload: HolidayWritePayload): Promise<unknown> {
  const response = await apiClient.post<unknown>("/api/v1/marketing-team-member/holidays", payload);
  return response.data;
}

export async function updateHoliday(id: string, payload: HolidayWritePayload): Promise<unknown> {
  const response = await apiClient.put<unknown>(
    `/api/v1/marketing-team-member/holidays/${encodeURIComponent(id)}`,
    payload,
  );
  return response.data;
}

export async function deleteHoliday(id: string): Promise<unknown> {
  const response = await apiClient.delete<unknown>(
    `/api/v1/marketing-team-member/holidays/${encodeURIComponent(id)}`,
  );
  return response.data;
}

/** Bulk import from CSV/XLSX (Upload List on Manage Holiday). */
export async function importHolidaysList(file: File): Promise<unknown> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await apiClient.post<unknown>(
    "/api/v1/marketing-team-member/holidays/import",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
}
