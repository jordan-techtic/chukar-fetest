import apiClient, { resolveApiBaseUrl } from "@/lib/api/client";
import type { ApiEnvelope } from "@/lib/api/types";

export type HolidayStatus = "active" | "inactive";

export interface HolidayOut {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  status: HolidayStatus;
  last_active_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface HolidayListData {
  items: HolidayOut[];
}

export type HolidayListResponse = ApiEnvelope<HolidayListData>;

export interface HolidayCreateRequest {
  name: string;
  start_date: string;
  end_date: string;
  status?: HolidayStatus;
}

export interface HolidayUpdateRequest {
  name?: string;
  start_date?: string;
  end_date?: string;
  status?: HolidayStatus;
}

const HOLIDAYS_PATH = "/api/v1/marketing-team-member/holidays";

function holidaysApiUrl(pathSuffix = ""): string {
  return `${resolveApiBaseUrl()}${HOLIDAYS_PATH}${pathSuffix}`;
}

export async function listHolidays(params?: {
  search?: string;
  status?: HolidayStatus;
}): Promise<HolidayListResponse> {
  const response = await apiClient.get<HolidayListResponse>(holidaysApiUrl(), { params });
  return response.data;
}

export async function createHoliday(body: HolidayCreateRequest): Promise<ApiEnvelope<HolidayOut>> {
  const response = await apiClient.post<ApiEnvelope<HolidayOut>>(holidaysApiUrl(), body);
  return response.data;
}

export async function updateHoliday(
  id: string,
  body: HolidayUpdateRequest,
): Promise<ApiEnvelope<HolidayOut>> {
  const response = await apiClient.put<ApiEnvelope<HolidayOut>>(holidaysApiUrl(`/${id}`), body);
  return response.data;
}

export async function deleteHoliday(id: string): Promise<ApiEnvelope<Record<string, never>>> {
  const response = await apiClient.delete<ApiEnvelope<Record<string, never>>>(
    holidaysApiUrl(`/${id}`),
  );
  return response.data;
}
