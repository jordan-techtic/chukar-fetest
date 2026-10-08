import { apiRequest } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_CATEGORIES_PATH =
  "/api/v1/marketing-team-member/categories" as const;

export const MARKETING_TEAM_MEMBER_CATEGORY_BY_ID_PATH =
  "/api/v1/marketing-team-member/categories/{id}" as const;

export interface CategoryOut {
  id: string;
  title: string;
  description: string | null;
  value: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface CategoryListData {
  items: CategoryOut[];
}

export type CategoryListResponse = ApiSuccessResponse<CategoryListData>;

export interface CategoryCreateRequest {
  title: string;
  description?: string | null;
  status?: "active" | "inactive";
}

export interface CategoryUpdateRequest {
  title?: string | null;
  description?: string | null;
  status?: "active" | "inactive" | null;
}

export type CategoryMutationResponse = ApiSuccessResponse<CategoryOut>;

export interface CategoryListQueryParams {
  status?: string;
}

function categoriesPath(params?: CategoryListQueryParams): string {
  if (!params?.status) {
    return MARKETING_TEAM_MEMBER_CATEGORIES_PATH;
  }
  const search = new URLSearchParams();
  search.set("status", params.status);
  return `${MARKETING_TEAM_MEMBER_CATEGORIES_PATH}?${search.toString()}`;
}

function categoryByIdPath(id: string): string {
  return `/api/v1/marketing-team-member/categories/${encodeURIComponent(id)}`;
}

/** GET /api/v1/marketing-team-member/categories */
export async function listMarketingTeamMemberCategories(
  params?: CategoryListQueryParams,
  token?: string | null,
) {
  return apiRequest("GET", categoriesPath(params), undefined, token);
}

/** POST /api/v1/marketing-team-member/categories */
export async function createMarketingTeamMemberCategory(
  body: CategoryCreateRequest,
  token?: string | null,
) {
  return apiRequest(
    "POST",
    MARKETING_TEAM_MEMBER_CATEGORIES_PATH,
    body,
    token,
  );
}

/** PUT /api/v1/marketing-team-member/categories/{id} */
export async function updateMarketingTeamMemberCategory(
  id: string,
  body: CategoryUpdateRequest,
  token?: string | null,
) {
  return apiRequest("PUT", categoryByIdPath(id), body, token);
}

/** DELETE /api/v1/marketing-team-member/categories/{id} */
export async function deleteMarketingTeamMemberCategory(
  id: string,
  token?: string | null,
) {
  return apiRequest("DELETE", categoryByIdPath(id), undefined, token);
}
