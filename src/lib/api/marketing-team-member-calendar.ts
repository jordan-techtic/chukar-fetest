import { apiRequest } from "./client";
import type {
  ActivityOut,
  ActivityTypeOption,
  ApiSuccessResponse,
} from "./marketing-team-member-activities";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_CALENDAR_PATH =
  "/api/v1/marketing-team-member/calendar" as const;

export interface CalendarData {
  year: number;
  month?: number | null;
  week_start: "monday";
  today: string;
  organization: string;
  role: string;
  activity_types: ActivityTypeOption[];
  activities: ActivityOut[];
}

export type CalendarResponse = ApiSuccessResponse<CalendarData>;

export interface CalendarQueryParams {
  year?: string;
  month?: string;
  category?: string;
  activity_type?: string;
}

function calendarPath(params?: CalendarQueryParams): string {
  if (!params) {
    return MARKETING_TEAM_MEMBER_CALENDAR_PATH;
  }
  const search = new URLSearchParams();
  if (params.year !== undefined && params.year !== "") {
    search.set("year", params.year);
  }
  if (params.month !== undefined && params.month !== "") {
    search.set("month", params.month);
  }
  if (params.category !== undefined && params.category !== "") {
    search.set("category", params.category);
  }
  if (params.activity_type !== undefined && params.activity_type !== "") {
    search.set("activity_type", params.activity_type);
  }
  const query = search.toString();
  return query
    ? `${MARKETING_TEAM_MEMBER_CALENDAR_PATH}?${query}`
    : MARKETING_TEAM_MEMBER_CALENDAR_PATH;
}

/** GET /api/v1/marketing-team-member/calendar */
export async function getMarketingTeamMemberCalendar(
  params?: CalendarQueryParams,
  token?: string | null,
) {
  return apiRequest("GET", calendarPath(params), undefined, token);
}
