import apiClient from "@/lib/api/client";

export type ApiUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  is_active: boolean;
  last_active_at?: string | null;
  avatar_url?: string | null;
};

export type ListUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  status?: string;
};

export type ListUsersResult = {
  items: ApiUser[];
  total: number;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function normalizeUser(raw: unknown): ApiUser | null {
  const row = asRecord(raw);
  if (!row) {
    return null;
  }
  const id = String(row.id ?? row.user_id ?? "");
  if (!id) {
    return null;
  }
  return {
    id,
    first_name: String(row.first_name ?? ""),
    last_name: String(row.last_name ?? ""),
    email: String(row.email ?? ""),
    role: String(row.role ?? ""),
    is_active: row.is_active !== false && row.is_active !== "false" && row.status !== "inactive",
    last_active_at:
      typeof row.last_active_at === "string"
        ? row.last_active_at
        : typeof row.last_active === "string"
          ? row.last_active
          : null,
    avatar_url:
      typeof row.avatar_url === "string"
        ? row.avatar_url
        : typeof row.avatar === "string"
          ? row.avatar
          : null,
  };
}

export function unwrapUsersList(body: unknown): ListUsersResult {
  const root = asRecord(body);
  const data = asRecord(root?.data) ?? root;
  const rawItems =
    data?.items ??
    data?.users ??
    data?.results ??
    (Array.isArray(data) ? data : Array.isArray(body) ? body : []);
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map(normalizeUser)
    .filter((user): user is ApiUser => user !== null);
  const total = Number(
    data?.total ?? data?.total_count ?? data?.count ?? root?.total ?? items.length,
  );
  return { items, total: Number.isFinite(total) ? total : items.length };
}

export type InviteUserPayload = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone?: string | null;
  bio?: string | null;
};

export async function inviteUser(payload: InviteUserPayload): Promise<unknown> {
  const response = await apiClient.post<unknown>("/api/v1/users/invite", payload);
  return response.data;
}

export async function setUserActive(userId: string, isActive: boolean): Promise<unknown> {
  const response = await apiClient.patch<unknown>(`/api/v1/users/${encodeURIComponent(userId)}`, {
    is_active: isActive,
  });
  return response.data;
}

export async function listUsers(params: ListUsersParams): Promise<ListUsersResult> {
  const query: Record<string, string | number> = {};
  if (params.page !== undefined) {
    query.page = params.page;
  }
  if (params.limit !== undefined) {
    query.limit = params.limit;
  }
  if (params.search?.trim()) {
    query.search = params.search.trim();
  }
  if (params.role?.trim()) {
    query.role = params.role.trim();
  }
  if (params.status?.trim()) {
    query.status = params.status.trim();
  }
  const response = await apiClient.get<unknown>("/api/v1/users", { params: query });
  return unwrapUsersList(response.data);
}
