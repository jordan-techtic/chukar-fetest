import axios from "axios";

import apiClient from "@/lib/api/client";
import type { ApiSuccessResponse } from "@/lib/api/types";

/** Locked contract path — GET list users. */
export const USERS_LIST_PATH = "/api/v1/users";

/** Locked contract path — POST invite user. */
export const USERS_INVITE_PATH = "/api/v1/users/invite";

/** PATCH /api/v1/users/{user_id} — update user fields (e.g. is_active). */
export function userPatchPath(userId: string): string {
  return `/api/v1/users/${encodeURIComponent(userId)}`;
}

export type PatchUserActiveRequest = {
  is_active: boolean;
};

export type ListUsersQuery = {
  search?: string;
  status?: "active" | "inactive";
  role?: "admin" | "super_admin";
};

export type InviteUserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone?: string | null;
  bio?: string | null;
};

/** List unwrap: envelope `data`, then `items` (with fallbacks handled by the screen). */
export type UsersListData = {
  items?: unknown[];
  users?: unknown[];
  total_pages?: number;
  totalPages?: number;
  [key: string]: unknown;
};

export async function listUsers(
  query: ListUsersQuery = {},
): Promise<ApiSuccessResponse<UsersListData> | Record<string, unknown>> {
  const params: Record<string, string> = {};
  if (query.search?.trim()) {
    params.search = query.search.trim();
  }
  if (query.status === "active" || query.status === "inactive") {
    params.status = query.status;
  }
  if (query.role === "admin" || query.role === "super_admin") {
    params.role = query.role;
  }
  const response = await apiClient.get<ApiSuccessResponse<UsersListData> | Record<string, unknown>>(
    USERS_LIST_PATH,
    { params },
  );
  return response.data;
}

export async function inviteUser(
  body: InviteUserRequest,
): Promise<ApiSuccessResponse<unknown> | Record<string, unknown>> {
  const response = await apiClient.post<ApiSuccessResponse<unknown> | Record<string, unknown>>(
    USERS_INVITE_PATH,
    body,
  );
  return response.data;
}

export async function patchUserActive(
  userId: string,
  body: PatchUserActiveRequest,
): Promise<ApiSuccessResponse<unknown> | Record<string, unknown>> {
  const response = await apiClient.patch<ApiSuccessResponse<unknown> | Record<string, unknown>>(
    userPatchPath(userId),
    body,
  );
  return response.data;
}

export function listUsersQueryFromFilters(values: Record<string, string | boolean | undefined>): ListUsersQuery {
  const query: ListUsersQuery = {};
  const search = values["search-input"];
  if (typeof search === "string" && search.trim()) {
    query.search = search.trim();
  }
  const status = values["status-filter"];
  if (status === "active" || status === "inactive") {
    query.status = status;
  }
  const role = values["role-filter"];
  if (role === "admin" || role === "super_admin") {
    query.role = role;
  }
  return query;
}

export function axiosErrorResult(error: unknown): { ok: false; status: number; body: unknown } {
  if (axios.isAxiosError(error)) {
    return {
      ok: false,
      status: error.response?.status ?? 0,
      body: error.response?.data ?? null,
    };
  }
  return { ok: false, status: 0, body: null };
}
