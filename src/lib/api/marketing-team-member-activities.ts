import apiClient from "@/lib/api/client";

export type MarketingActivity = {
  id: string;
  title: string;
  start_date: string;
  end_date?: string;
  date?: string;
  activity_type: string;
  type?: string;
  description?: string | null;
  notes?: string | null;
  details?: string | null;
  category: string;
  color?: string;
  status: string;
  created_at?: string;
  updated_at?: string;
  additional_info?: string | null;
};

type ActivitiesListEnvelope = {
  success?: boolean;
  message?: string;
  data?: {
    items: MarketingActivity[];
    page: number;
    limit: number;
    total: number;
    description?: string;
  };
};

export type ListMarketingActivitiesParams = {
  search?: string;
  page?: number;
  limit?: number;
};

export type ListMarketingActivitiesResult = {
  items: MarketingActivity[];
  page: number;
  limit: number;
  total: number;
  description: string;
};

export type CreateMarketingActivityBody = {
  title: string;
  start_date: string;
  activity_type: string;
  end_date?: string | null;
  details?: string | null;
  additional_info?: string | null;
  category?: string | null;
  status?: string | null;
};

export type UpdateMarketingActivityBody = {
  title?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  activity_type?: string | null;
  details?: string | null;
  additional_info?: string | null;
  category?: string | null;
  status?: string | null;
  updated_at?: string | null;
};

type ActivityMutationEnvelope = {
  success?: boolean;
  message?: string;
  data?: MarketingActivity;
};

export async function createMarketingActivity(
  body: CreateMarketingActivityBody,
): Promise<MarketingActivity> {
  const response = await apiClient.post<ActivityMutationEnvelope>(
    "/api/v1/marketing-team-member/activities",
    body,
  );
  const data = response.data?.data;
  if (!data) {
    throw new Error(response.data?.message ?? "Unable to create activity.");
  }
  return data;
}

export async function updateMarketingActivity(
  id: string,
  body: UpdateMarketingActivityBody,
): Promise<MarketingActivity> {
  const response = await apiClient.put<ActivityMutationEnvelope>(
    `/api/v1/marketing-team-member/activities/${id}`,
    body,
  );
  const data = response.data?.data;
  if (!data) {
    throw new Error(response.data?.message ?? "Unable to update activity.");
  }
  return data;
}

export async function deleteMarketingActivity(id: string): Promise<string> {
  const response = await apiClient.delete<{ message?: string }>(
    `/api/v1/marketing-team-member/activities/${id}`,
  );
  return response.data?.message ?? "Activity deleted.";
}

export async function listMarketingActivities(
  params: ListMarketingActivitiesParams,
): Promise<ListMarketingActivitiesResult> {
  const response = await apiClient.get<ActivitiesListEnvelope>(
    "/api/v1/marketing-team-member/activities",
    {
      params: {
        search: params.search?.trim() || undefined,
        page: params.page ?? 1,
        limit: params.limit ?? 6,
      },
    },
  );
  const data = response.data?.data;
  if (!data) {
    throw new Error(response.data?.message ?? "Unable to load activities.");
  }
  return {
    items: data.items ?? [],
    page: data.page ?? 1,
    limit: data.limit ?? 6,
    total: data.total ?? 0,
    description: data.description ?? "",
  };
}
