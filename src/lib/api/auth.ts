import apiClient from "@/lib/api/client";
import type { ApiSuccessResponse } from "@/lib/api/types";
import { LOGIN_API_PATH } from "@/lib/auth/public-paths";

export type LoginRequest = {
  email_or_username: string;
  password: string;
};

export type LoginUser = {
  id: string;
  email: string;
  username: string;
  role: string;
};

export type LoginData = {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  user?: LoginUser;
};

export async function loginRequest(
  body: LoginRequest,
): Promise<ApiSuccessResponse<LoginData>> {
  const response = await apiClient.post<ApiSuccessResponse<LoginData>>(LOGIN_API_PATH, {
    email_or_username: body.email_or_username.trim(),
    password: body.password,
  });
  return response.data;
}
