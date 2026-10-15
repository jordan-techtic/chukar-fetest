import apiClient, { resolveApiBaseUrl } from "@/lib/api/client";
import type { ApiEnvelope } from "@/lib/api/types";

export interface ActivityOut {
  id: string;
  title: string;
  date: string;
  start_date: string;
  end_date: string;
  type: string;
  activity_type: string;
  category: string;
  campaign_code: string;
  status: string;
  color: string;
  organization: string;
  role: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityListData {
  items: ActivityOut[];
  page: number;
  limit: number;
  total: number;
  description: string;
}

export type ActivityListResponse = ApiEnvelope<ActivityListData>;

const ACTIVITIES_PATH = "/api/v1/marketing-team-member/activities";

export function activitiesApiUrl(): string {
  return `${resolveApiBaseUrl()}${ACTIVITIES_PATH}`;
}

export async function listActivities(params?: {
  search?: string;
  category?: string;
  activity_type?: string;
  status?: string;
  year?: number;
  month?: number;
  date_from?: string;
  date_to?: string;
  sort?: string;
  page?: number;
  limit?: number;
}): Promise<ActivityListResponse> {
  const response = await apiClient.get<ActivityListResponse>(activitiesApiUrl(), { params });
  return response.data;
}
