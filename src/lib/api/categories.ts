import apiClient from "@/lib/api/client";

export type ApiCategory = {
  id: string;
  title: string;
  description?: string | null;
  icon?: string | null;
  status?: string | null;
  created_at?: string | null;
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
  return {
    id,
    title: String(row.title ?? ""),
    description:
      typeof row.description === "string" ? row.description : row.description === null ? null : undefined,
    icon: typeof row.icon === "string" ? row.icon : null,
    status: typeof row.status === "string" ? row.status : null,
    created_at:
      typeof row.created_at === "string"
        ? row.created_at
        : typeof row.createdAt === "string"
          ? row.createdAt
          : null,
  };
}

export function unwrapCategoriesList(body: unknown): { items: ApiCategory[]; total: number } {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems = data?.items ?? (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeCategory)
    .filter((item): item is ApiCategory => item !== null);
  const total = Number(data?.total ?? data?.total_count ?? data?.count ?? items.length);
  return { items, total: Number.isFinite(total) ? total : items.length };
}

export async function listCategories(): Promise<{ items: ApiCategory[]; total: number }> {
  const response = await apiClient.get<unknown>("/api/v1/marketing-team-member/categories");
  return unwrapCategoriesList(response.data);
}

export type CategoryWritePayload = {
  title?: string;
  description?: string | null;
  icon?: string | null;
  status?: string | null;
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
