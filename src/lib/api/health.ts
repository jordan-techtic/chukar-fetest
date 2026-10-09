import apiClient from "./client";
import type { ApiSuccessResponse, HealthData } from "./types";

export async function fetchHealth(): Promise<ApiSuccessResponse<HealthData>> {
  const response = await apiClient.get<ApiSuccessResponse<HealthData>>(
    "/api/v1/health",
  );
  return response.data;
}
