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
  createMarketingTeamMemberCategory,
  deleteMarketingTeamMemberCategory,
  listMarketingTeamMemberCategories,
  MARKETING_TEAM_MEMBER_CATEGORIES_PATH,
  MARKETING_TEAM_MEMBER_CATEGORY_BY_ID_PATH,
  updateMarketingTeamMemberCategory,
  type CategoryCreateRequest,
  type CategoryUpdateRequest,
} from "./marketing-team-member-categories";
import {
  getMarketingTeamMemberCalendar,
  MARKETING_TEAM_MEMBER_CALENDAR_PATH,
} from "./marketing-team-member-calendar";
import {
  createMarketingTeamMemberNote,
  deleteMarketingTeamMemberNote,
  MARKETING_TEAM_MEMBER_NOTE_BY_ID_PATH,
  MARKETING_TEAM_MEMBER_NOTES_PATH,
  updateMarketingTeamMemberNote,
  type NoteCreateRequest,
  type NoteUpdateRequest,
} from "./marketing-team-member-notes";
import {
  getMarketingTeamMemberPerformanceMetrics,
  MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH,
} from "./marketing-team-member-performance-metrics";
import {
  exportMarketingTeamMemberCalendar,
  MARKETING_TEAM_MEMBER_EXPORT_CALENDAR_PATH,
  type ExportCalendarRequest,
} from "./marketing-team-member-export-calendar";
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
  if (method === "GET" && path === MARKETING_TEAM_MEMBER_CATEGORIES_PATH) {
    return listMarketingTeamMemberCategories(undefined, token);
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
  if (method === "POST" && path === MARKETING_TEAM_MEMBER_CATEGORIES_PATH) {
    return createMarketingTeamMemberCategory(body as CategoryCreateRequest, token);
  }
  if (method === "PUT" && path === MARKETING_TEAM_MEMBER_CATEGORY_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Category id is required for update.");
    }
    const updateBody = { ...(body as CategoryUpdateRequest & { id?: string }) };
    delete updateBody.id;
    return updateMarketingTeamMemberCategory(id, updateBody, token);
  }
  if (method === "DELETE" && path === MARKETING_TEAM_MEMBER_CATEGORY_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Category id is required for delete.");
    }
    return deleteMarketingTeamMemberCategory(id, token);
  }
  const categoryByIdMatch = path.match(
    /^\/api\/v1\/marketing-team-member\/categories\/([^/]+)$/,
  );
  if (method === "PUT" && categoryByIdMatch) {
    return updateMarketingTeamMemberCategory(
      decodeURIComponent(categoryByIdMatch[1]),
      body as CategoryUpdateRequest,
      token,
    );
  }
  if (method === "DELETE" && categoryByIdMatch) {
    return deleteMarketingTeamMemberCategory(
      decodeURIComponent(categoryByIdMatch[1]),
      token,
    );
  }
  if (method === "POST" && path === MARKETING_TEAM_MEMBER_NOTES_PATH) {
    return createMarketingTeamMemberNote(body as NoteCreateRequest, token);
  }
  if (method === "PUT" && path === MARKETING_TEAM_MEMBER_NOTE_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Note id is required for update.");
    }
    const updateBody = { ...(body as NoteUpdateRequest & { id?: string }) };
    delete updateBody.id;
    return updateMarketingTeamMemberNote(id, updateBody, token);
  }
  if (method === "DELETE" && path === MARKETING_TEAM_MEMBER_NOTE_BY_ID_PATH) {
    const id = (body as { id?: string } | null)?.id;
    if (!id) {
      throw new Error("Note id is required for delete.");
    }
    return deleteMarketingTeamMemberNote(id, token);
  }
  const noteByIdMatch = path.match(
    /^\/api\/v1\/marketing-team-member\/notes\/([^/]+)$/,
  );
  if (method === "PUT" && noteByIdMatch) {
    return updateMarketingTeamMemberNote(
      decodeURIComponent(noteByIdMatch[1]),
      body as NoteUpdateRequest,
      token,
    );
  }
  if (method === "DELETE" && noteByIdMatch) {
    return deleteMarketingTeamMemberNote(decodeURIComponent(noteByIdMatch[1]), token);
  }
  if (method === "POST" && path === MARKETING_TEAM_MEMBER_EXPORT_CALENDAR_PATH) {
    const blob = await exportMarketingTeamMemberCalendar(
      body as ExportCalendarRequest,
      token,
    );
    return { status: 200, body: blob, headers: new Headers() };
  }
  return apiRequest(method, path, body, token);
}
