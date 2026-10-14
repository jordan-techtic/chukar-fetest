export interface FieldValidationDetail {
  field: string;
  message: string;
}

export interface ApiErrorBody {
  code: string;
  details?: FieldValidationDetail[] | unknown;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error: ApiErrorBody;
}

export interface ApiSuccessResponse<TData> {
  success: true;
  message: string;
  data: TData;
}

export type ApiEnvelope<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;

export interface HealthData {
  status: string;
  organization: string;
  role: string;
}
