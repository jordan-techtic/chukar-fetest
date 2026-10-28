import apiClient from "@/lib/api/client";

export type ApiCategory = {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
};

export type ListCategoriesParams = {
  status?: string;
};

export type ListCategoriesResult = {
  items: ApiCategory[];
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function normalizeCategory(raw: unknown): ApiCategory | null {
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
    title: String(row.title ?? row.name ?? ""),
    description: String(row.description ?? ""),
    status: status.toLowerCase(),
    created_at: String(row.created_at ?? ""),
  };
}

export function unwrapCategoriesList(body: unknown): ListCategoriesResult {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems = data?.items ?? (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeCategory)
    .filter((row): row is ApiCategory => row !== null);
  return { items };
}

export async function listCategories(params: ListCategoriesParams = {}): Promise<ListCategoriesResult> {
  const query: Record<string, string> = {};
  if (params.status?.trim()) {
    query.status = params.status.trim();
  }
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/categories", {
    params: query,
  });
  return unwrapCategoriesList(response.data);
}

export type CategoryWritePayload = {
  title: string;
  description?: string;
  icon?: string | null;
  status?: string;
};

export async function createCategory(payload: CategoryWritePayload): Promise<unknown> {
  const response = await apiClient.post<unknown>("/api/v1/marketing-team-member/categories", payload);
  return response.data;
}

export async function updateCategory(id: string, payload: CategoryWritePayload): Promise<unknown> {
  const response = await apiClient.put<unknown>(
    `/api/v1/marketing-team-member/categories/${encodeURIComponent(id)}`,
    payload,
  );
  return response.data;
}

export async function deleteCategory(id: string): Promise<unknown> {
  const response = await apiClient.delete<unknown>(
    `/api/v1/marketing-team-member/categories/${encodeURIComponent(id)}`,
  );
  return response.data;
}

export function formatCategoryCreatedDate(iso: string): string {
  if (!iso) {
    return "—";
  }
  const date = new Date(iso.includes("T") ? iso : `${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function isCategoryActive(status: string): boolean {
  const key = status.toLowerCase();
  return key === "active" || key === "enabled" || key === "true";
}
