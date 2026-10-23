import apiClient from "@/lib/api/client";

export const MARKETING_ACTIVITIES_PATH = "/api/v1/marketing-team-member/activities";

export type MarketingActivitiesQuery = {
  year?: number;
  month?: number;
};

export async function listMarketingActivities(
  params?: MarketingActivitiesQuery,
): Promise<unknown> {
  const response = await apiClient.get(MARKETING_ACTIVITIES_PATH, { params });
  return response.data;
}

export async function createMarketingActivity(body: unknown): Promise<unknown> {
  const response = await apiClient.post(MARKETING_ACTIVITIES_PATH, body);
  return response.data;
}

export async function updateMarketingActivity(body: unknown): Promise<unknown> {
  const response = await apiClient.put(MARKETING_ACTIVITIES_PATH, body);
  return response.data;
}

export async function deleteMarketingActivity(body: unknown): Promise<unknown> {
  const response = await apiClient.delete(MARKETING_ACTIVITIES_PATH, { data: body });
  return response.data;
}
