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

export type HolidayStatus = "active" | "inactive";

export interface HolidayOut {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  status: HolidayStatus;
  created_at: string;
  updated_at: string;
  last_active_at: string | null;
}

export interface HolidayListData {
  items: HolidayOut[];
}

export interface HolidayCreateBody {
  name: string;
  start_date: string;
  end_date: string;
  status?: HolidayStatus;
}

export interface HolidayUpdateBody {
  name?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  status?: HolidayStatus | null;
}
