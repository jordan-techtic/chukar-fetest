export interface ApiErrorDetail {
  field?: string;
  message: string;
}

export interface ApiErrorBody {
  code: string;
  details?: ApiErrorDetail[] | unknown;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error: ApiErrorBody;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface HealthData {
  status: string;
  organization: string;
  role: string;
}

export type HealthResponse = ApiSuccessResponse<HealthData>;

export interface LoginUser {
  id: string;
  email: string;
  username: string;
  role: string;
}

export interface LoginData {
  access_token: string;
  refresh_token: string;
  token_type: "bearer";
  user: LoginUser;
}

export type LoginResponse = ApiSuccessResponse<LoginData>;
