import { apiGet } from "@/lib/api/client";
import type { HealthResponse } from "@/types/api";

export async function getHealth(): Promise<HealthResponse> {
  return apiGet<HealthResponse>("/api/v1/health");
}
