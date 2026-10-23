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

export interface UserRecord {
  id: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  is_active?: boolean;
}

export type UsersListResponse =
  | UserRecord[]
  | { users: UserRecord[] }
  | { data: UserRecord[] | { users: UserRecord[] } };

export type ListUsersQuery = {
  search?: string;
  status?: string;
  role?: string;
};

function normalizeUsersList(payload: unknown): UserRecord[] {
  if (Array.isArray(payload)) {
    return payload as UserRecord[];
  }
  const record = payload as Record<string, unknown> | null;
  if (!record) {
    return [];
  }
  if (Array.isArray(record.users)) {
    return record.users as UserRecord[];
  }
  const data = record.data;
  if (Array.isArray(data)) {
    return data as UserRecord[];
  }
  if (data && typeof data === "object" && Array.isArray((data as { users?: UserRecord[] }).users)) {
    return (data as { users: UserRecord[] }).users;
  }
  return [];
}

export async function listUsers(params?: ListUsersQuery): Promise<UserRecord[]> {
  const response = await apiClient.get<UsersListResponse>(USERS_LIST_PATH, { params });
  return normalizeUsersList(response.data);
}

export async function inviteUser(body: InviteUserRequest): Promise<unknown> {
  const response = await apiClient.post(USERS_INVITE_PATH, body);
  return response.data;
}

export async function setUserActive(userId: string, is_active: boolean): Promise<unknown> {
  const response = await apiClient.patch(`/api/v1/users/${userId}`, { is_active });
  return response.data;
}

export async function updateUserActive(
  userId: string,
  body: { is_active: boolean },
): Promise<unknown> {
  return setUserActive(userId, body.is_active);
}

export { normalizeUsersList };
