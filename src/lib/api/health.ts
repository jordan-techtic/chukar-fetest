import apiClient from "@/lib/api/client";
import type { ApiSuccessResponse, HealthData } from "@/lib/api/types";

export async function fetchHealth(): Promise<ApiSuccessResponse<HealthData>> {
  const response = await apiClient.get<ApiSuccessResponse<HealthData>>("/api/v1/health");
  return response.data;
}
