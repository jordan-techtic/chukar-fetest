import apiClient from "@/lib/api/client";

export type ApiCategory = {
  id: string;
  title: string;
  description: string;
  value: string;
  is_active: boolean;
  created_at?: string | null;
};

export type ListCategoriesResult = {
  items: ApiCategory[];
  total: number;
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
  const title = String(row.title ?? row.name ?? "");
  const description = String(row.description ?? "");
  const value = String(row.value ?? "");
  const is_active =
    row.is_active !== false &&
    row.is_active !== "false" &&
    row.status !== "inactive" &&
    row.is_active !== 0;
  const created_at =
    typeof row.created_at === "string"
      ? row.created_at
      : typeof row.createdAt === "string"
        ? row.createdAt
        : null;
  return { id, title, description, value, is_active, created_at };
}

export function unwrapCategoriesList(body: unknown): ListCategoriesResult {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems =
    data?.items ??
    data?.categories ??
    (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeCategory)
    .filter((row): row is ApiCategory => row !== null);
  const total = Number(
    data?.total ?? data?.total_count ?? data?.count ?? root?.total ?? items.length,
  );
  return { items, total: Number.isFinite(total) ? total : items.length };
}

export type CategoryWritePayload = {
  title: string;
  description?: string;
  status?: "active" | "inactive";
};

export async function listCategories(): Promise<ListCategoriesResult> {
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/categories");
  return unwrapCategoriesList(response.data);
}

export async function createCategory(payload: CategoryWritePayload): Promise<unknown> {
  const response = await apiClient.post<unknown>(
    "/api/v1/marketing-team-member/categories",
    payload,
  );
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
