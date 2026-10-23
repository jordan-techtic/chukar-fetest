import apiClient from "@/lib/api/client";

export const MARKETING_CALENDAR_PATH = "/api/v1/marketing-team-member/calendar";

export type MarketingCalendarQuery = {
  year?: number;
  month?: number;
};

export async function getMarketingCalendar(
  params?: MarketingCalendarQuery,
): Promise<unknown> {
  const response = await apiClient.get(MARKETING_CALENDAR_PATH, { params });
  return response.data;
}
