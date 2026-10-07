import { apiRequest } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_ACTIVITIES_PATH =
  "/api/v1/marketing-team-member/activities" as const;

export interface ActivityTypeField {
  name: string;
  label: string;
  required: boolean;
  max_length: number | null;
}

export interface ActivityTypeOption {
  value: string;
  label: string;
  category: string;
  color: string;
  fields: ActivityTypeField[];
}

export interface ActivityOut {
  id: string;
  title: string;
  date: string;
  start_date: string;
  end_date: string;
  type: string;
  activity_type: string;
  description: string | null;
  notes: string | null;
  details: string | null;
  additional_info: string | null;
  category: string;
  campaign_code: string;
  status: string;
  color: string;
  organization: string;
  role: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  activity_types?: ActivityTypeOption[];
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface ActivityCreateRequest {
  title: string;
  start_date: string;
  end_date?: string | null;
  activity_type: string;
  details?: string | null;
  additional_info?: string | null;
  category?: string | null;
  status?: string | null;
}

export type ActivityCreateResponse = ApiSuccessResponse<
  ActivityOut & { activity_types: ActivityTypeOption[] }
>;

export interface ActivityUpdateRequest {
  title?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  activity_type?: string | null;
  details?: string | null;
  additional_info?: string | null;
  category?: string | null;
  status?: string | null;
  updated_at?: string | null;
}

export type ActivityUpdateResponse = ApiSuccessResponse<ActivityOut>;

export interface ActivityListData {
  items: ActivityOut[];
  page: number;
  limit: number;
  total: number;
  description: string;
}

export type ActivityListResponse = ApiSuccessResponse<ActivityListData>;

export type ActivityDeleteResponse = ApiSuccessResponse<Record<string, never>>;

/** Locked contract path template — do not rewrite. */
export const MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH =
  "/api/v1/marketing-team-member/activities/{id}" as const;

export interface ActivitiesQueryParams {
  search?: string;
  category?: string;
  activity_type?: string;
  status?: string;
  year?: string;
  month?: string;
  date_from?: string;
  date_to?: string;
  sort?: string;
  page?: number;
  limit?: number;
  format?: string;
}

function activitiesQueryString(params?: ActivitiesQueryParams): string {
  if (!params) {
    return "";
  }
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      search.set(key, String(value));
    }
  }
  const query = search.toString();
  return query ? `?${query}` : "";
}

/** Resolved instance path for PUT/DELETE /activities/{id}. */
export function marketingTeamMemberActivityPath(id: string): string {
  return `${MARKETING_TEAM_MEMBER_ACTIVITIES_PATH}/${encodeURIComponent(id)}`;
}

/** GET /api/v1/marketing-team-member/activities */
export async function listMarketingTeamMemberActivities(
  params?: ActivitiesQueryParams,
  token?: string | null,
) {
  return apiRequest(
    "GET",
    `${MARKETING_TEAM_MEMBER_ACTIVITIES_PATH}${activitiesQueryString(params)}`,
    undefined,
    token,
  );
}

/** POST /api/v1/marketing-team-member/activities */
export async function createMarketingTeamMemberActivity(
  body: ActivityCreateRequest,
  token?: string | null,
) {
  return apiRequest(
    "POST",
    MARKETING_TEAM_MEMBER_ACTIVITIES_PATH,
    body,
    token,
  );
}

/** PUT /api/v1/marketing-team-member/activities/{id} */
export async function updateMarketingTeamMemberActivity(
  id: string,
  body: ActivityUpdateRequest,
  token?: string | null,
) {
  return apiRequest("PUT", marketingTeamMemberActivityPath(id), body, token);
}

/** DELETE /api/v1/marketing-team-member/activities/{id} */
export async function deleteMarketingTeamMemberActivity(
  id: string,
  token?: string | null,
) {
  return apiRequest("DELETE", marketingTeamMemberActivityPath(id), undefined, token);
}
