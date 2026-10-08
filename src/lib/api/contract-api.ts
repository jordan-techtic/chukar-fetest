import { apiRequest } from "./client";
import {
  createMarketingTeamMemberActivity,
  deleteMarketingTeamMemberActivity,
  listMarketingTeamMemberActivities,
  MARKETING_TEAM_MEMBER_ACTIVITIES_PATH,
  MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH,
  updateMarketingTeamMemberActivity,
  type ActivityCreateRequest,
  type ActivityUpdateRequest,
} from "./marketing-team-member-activities";
import {
  getMarketingTeamMemberCalendar,
  MARKETING_TEAM_MEMBER_CALENDAR_PATH,
} from "./marketing-team-member-calendar";
import {
  getMarketingTeamMemberPerformanceMetrics,
  MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH,
} from "./marketing-team-member-performance-metrics";
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
  if (method === "GET" && path === MARKETING_TEAM_MEMBER_CALENDAR_PATH) {
    return getMarketingTeamMemberCalendar(undefined, token);
  }
  if (method === "GET" && path === MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH) {
    return getMarketingTeamMemberPerformanceMetrics(undefined, token);
  }
  if (method === "GET" && path === MARKETING_TEAM_MEMBER_ACTIVITIES_PATH) {
    return listMarketingTeamMemberActivities(undefined, token);
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
  if (method === "POST" && path === MARKETING_TEAM_MEMBER_ACTIVITIES_PATH) {
    return createMarketingTeamMemberActivity(body as ActivityCreateRequest, token);
  }
  if (method === "PUT" && path === MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Activity id is required for update.");
    }
    const updateBody = { ...(body as ActivityUpdateRequest & { id?: string }) };
    delete updateBody.id;
    return updateMarketingTeamMemberActivity(id, updateBody, token);
  }
  if (method === "DELETE" && path === MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Activity id is required for delete.");
    }
    return deleteMarketingTeamMemberActivity(id, token);
  }
  const activityByIdMatch = path.match(
    /^\/api\/v1\/marketing-team-member\/activities\/([^/]+)$/,
  );
  if (method === "PUT" && activityByIdMatch) {
    return updateMarketingTeamMemberActivity(
      decodeURIComponent(activityByIdMatch[1]),
      body as ActivityUpdateRequest,
      token,
    );
  }
  if (method === "DELETE" && activityByIdMatch) {
    return deleteMarketingTeamMemberActivity(
      decodeURIComponent(activityByIdMatch[1]),
      token,
    );
  }
  return apiRequest(method, path, body, token);
}
