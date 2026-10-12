export interface ApiSuccessResponse<TData> {
  success: true;
  message: string;
  data: TData;
}

export interface FieldValidationDetail {
  field: string;
  message: string;
}

export interface ErrorBody {
  code: string;
  details?: FieldValidationDetail[] | unknown;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error: ErrorBody;
}

export type ApiResponse<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: string;
}

export interface LoginData {
  access_token: string;
  refresh_token: string;
  token_type: "bearer";
  user: AuthUser;
}

export type LoginResponse = ApiSuccessResponse<LoginData>;

export interface HealthData {
  status: string;
  organization: string;
  role: string;
}
