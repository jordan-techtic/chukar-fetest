import { apiRequest } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_CATEGORIES_PATH =
  "/api/v1/marketing-team-member/categories" as const;

export type CategoryStatus = "active" | "inactive";

export interface CategoryOut {
  id: string;
  title: string;
  description: string | null;
  value: string;
  status: CategoryStatus;
  created_at: string;
  updated_at: string;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export type CategoryListData = { items: CategoryOut[] };

export type CategoryListResponse = ApiSuccessResponse<CategoryListData>;

export interface CategoryCreateRequest {
  title: string;
  description?: string | null;
  status?: CategoryStatus;
}

export type CategoryCreateResponse = ApiSuccessResponse<CategoryOut>;

export interface CategoryUpdateRequest {
  title?: string | null;
  description?: string | null;
  status?: CategoryStatus | null;
}

export type CategoryUpdateResponse = ApiSuccessResponse<CategoryOut>;

/** GET /api/v1/marketing-team-member/categories */
export async function listMarketingTeamMemberCategories(
  query?: { status?: string },
  token?: string | null,
) {
  const params = new URLSearchParams();
  if (query?.status) {
    params.set("status", query.status);
  }
  const suffix = params.toString() ? `?${params.toString()}` : "";
  return apiRequest(
    "GET",
    `${MARKETING_TEAM_MEMBER_CATEGORIES_PATH}${suffix}`,
    undefined,
    token,
  );
}

/** POST /api/v1/marketing-team-member/categories */
export async function createMarketingTeamMemberCategory(
  body: CategoryCreateRequest,
  token?: string | null,
) {
  return apiRequest("POST", MARKETING_TEAM_MEMBER_CATEGORIES_PATH, body, token);
}

/** PUT /api/v1/marketing-team-member/categories/{id} */
export async function updateMarketingTeamMemberCategory(
  id: string,
  body: CategoryUpdateRequest,
  token?: string | null,
) {
  return apiRequest(
    "PUT",
    `${MARKETING_TEAM_MEMBER_CATEGORIES_PATH}/${encodeURIComponent(id)}`,
    body,
    token,
  );
}

/** DELETE /api/v1/marketing-team-member/categories/{id} */
export async function deleteMarketingTeamMemberCategory(
  id: string,
  token?: string | null,
) {
  return apiRequest(
    "DELETE",
    `${MARKETING_TEAM_MEMBER_CATEGORIES_PATH}/${encodeURIComponent(id)}`,
    undefined,
    token,
  );
}
