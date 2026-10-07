import { apiRequest } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_PROFILE_PATH =
  "/api/v1/marketing-team-member/profile" as const;

export interface ProfileUser {
  id: string;
  email: string;
  username: string;
  role: string;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export type ProfileResponse = ApiSuccessResponse<ProfileUser>;

export interface UpdateProfileRequest {
  first_name?: string | null;
  last_name?: string | null;
  username?: string | null;
  email?: string | null;
}

export type UpdateProfileResponse = ApiSuccessResponse<ProfileUser>;

/** GET /api/v1/marketing-team-member/profile */
export async function getMarketingTeamMemberProfile(token?: string | null) {
  return apiRequest(
    "GET",
    "/api/v1/marketing-team-member/profile",
    undefined,
    token,
  );
}

/** PUT /api/v1/marketing-team-member/profile */
export async function updateMarketingTeamMemberProfile(
  body: UpdateProfileRequest,
  token?: string | null,
) {
  return apiRequest(
    "PUT",
    "/api/v1/marketing-team-member/profile",
    body,
    token,
  );
}
