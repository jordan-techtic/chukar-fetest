import apiClient from "@/lib/api/client";

export const MARKETING_HISTORICAL_CALENDAR_PATH =
  "/api/v1/marketing-team-member/calendar/historical";

export type HistoricalCalendarQuery = {
  start_date: string;
  end_date: string;
};

export async function getHistoricalCalendar(
  params: HistoricalCalendarQuery,
): Promise<unknown> {
  const response = await apiClient.get(MARKETING_HISTORICAL_CALENDAR_PATH, { params });
  return response.data;
}
