import apiClient from "@/lib/api/client";

export const USERS_LIST_PATH = "/api/v1/users";
export const USERS_INVITE_PATH = "/api/v1/users/invite";

export interface InviteUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone?: string | null;
  bio?: string | null;
}

export type ListUsersQuery = {
  search?: string;
  status?: string;
  role?: string;
};

export async function listUsers(params?: ListUsersQuery): Promise<unknown> {
  const response = await apiClient.get(USERS_LIST_PATH, { params });
  return response.data;
}

export async function inviteUser(body: InviteUserRequest): Promise<unknown> {
  const response = await apiClient.post(USERS_INVITE_PATH, body);
  return response.data;
}
