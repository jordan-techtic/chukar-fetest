import apiClient from "@/lib/api/client";
import type {
  ApiSuccessResponse,
  HolidayCreateBody,
  HolidayListData,
  HolidayOut,
  HolidayUpdateBody,
} from "@/lib/api/types";

const HOLIDAYS_PATH = "/api/v1/marketing-team-member/holidays";

export type HolidayListParams = {
  search?: string;
  status?: string;
};

export async function fetchHolidays(
  params?: HolidayListParams,
): Promise<ApiSuccessResponse<HolidayListData>> {
  const response = await apiClient.get<ApiSuccessResponse<HolidayListData>>(HOLIDAYS_PATH, {
    params,
  });
  return response.data;
}

export async function createHoliday(
  body: HolidayCreateBody,
): Promise<ApiSuccessResponse<HolidayOut>> {
  const response = await apiClient.post<ApiSuccessResponse<HolidayOut>>(HOLIDAYS_PATH, body);
  return response.data;
}

export async function updateHoliday(
  id: string,
  body: HolidayUpdateBody,
): Promise<ApiSuccessResponse<HolidayOut>> {
  const response = await apiClient.put<ApiSuccessResponse<HolidayOut>>(
    `${HOLIDAYS_PATH}/${id}`,
    body,
  );
  return response.data;
}

export async function deleteHoliday(id: string): Promise<ApiSuccessResponse<Record<string, never>>> {
  const response = await apiClient.delete<ApiSuccessResponse<Record<string, never>>>(
    `${HOLIDAYS_PATH}/${id}`,
  );
  return response.data;
}

export async function importHolidays(
  file: File,
): Promise<ApiSuccessResponse<unknown>> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await apiClient.post<ApiSuccessResponse<unknown>>(
    `${HOLIDAYS_PATH}/import`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
}
