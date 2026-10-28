import apiClient from "@/lib/api/client";

export type ApiHoliday = {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  status: string;
};

export type ListHolidaysParams = {
  search?: string;
  status?: string;
};

export type ListHolidaysResult = {
  items: ApiHoliday[];
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
  const statusRaw = row.status;
  const status =
    typeof statusRaw === "boolean"
      ? statusRaw
        ? "active"
        : "inactive"
      : String(statusRaw ?? "active");
  return {
    id,
    name: String(row.name ?? ""),
    start_date: String(row.start_date ?? ""),
    end_date: String(row.end_date ?? ""),
    status: status.toLowerCase(),
  };
}

export function unwrapHolidaysList(body: unknown): ListHolidaysResult {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems = data?.items ?? (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeHoliday)
    .filter((row): row is ApiHoliday => row !== null);
  return { items };
}

export async function listHolidays(params: ListHolidaysParams = {}): Promise<ListHolidaysResult> {
  const query: Record<string, string> = {};
  if (params.search?.trim()) {
    query.search = params.search.trim();
  }
  if (params.status?.trim()) {
    query.status = params.status.trim();
  }
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/holidays", {
    params: query,
  });
  return unwrapHolidaysList(response.data);
}

export type HolidayWritePayload = {
  name: string;
  start_date: string;
  end_date: string;
  status?: string;
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

export async function importHolidays(file: File): Promise<unknown> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await apiClient.post<unknown>(
    "/api/v1/marketing-team-member/holidays/import",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
}

export function formatHolidayDate(iso: string): string {
  if (!iso) {
    return "—";
  }
  const date = new Date(iso.includes("T") ? iso : `${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function isHolidayActive(status: string): boolean {
  const key = status.toLowerCase();
  return key === "active" || key === "enabled" || key === "true";
}
