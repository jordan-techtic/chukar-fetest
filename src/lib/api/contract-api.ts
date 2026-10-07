import { apiRequest } from "./client";
import {
  getMarketingTeamMemberProfile,
  MARKETING_TEAM_MEMBER_PROFILE_PATH,
  updateMarketingTeamMemberProfile,
  type UpdateProfileRequest,
} from "./marketing-team-member-profile";

/** Contract read dispatch — each locked route uses its typed service call. */
export async function fetchContractRead(
  method: string,
  path: string,
  token?: string | null,
) {
  if (method === "GET" && path === MARKETING_TEAM_MEMBER_PROFILE_PATH) {
    return getMarketingTeamMemberProfile(token);
  }
  return apiRequest(method, path, undefined, token);
}

/** Contract write dispatch — refetch the related GET after mutations in the screen hook. */
export async function fetchContractWrite(
  method: string,
  path: string,
  body: unknown,
  token?: string | null,
) {
  if (method === "PUT" && path === MARKETING_TEAM_MEMBER_PROFILE_PATH) {
    return updateMarketingTeamMemberProfile(body as UpdateProfileRequest, token);
  }
  return apiRequest(method, path, body, token);
}
