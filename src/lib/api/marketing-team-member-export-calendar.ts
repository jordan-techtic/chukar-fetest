import { ApiRequestError, joinApiUrl } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_EXPORT_CALENDAR_PATH =
  "/api/v1/marketing-team-member/export-calendar" as const;

export interface ExportCalendarRequest {
  search?: string | null;
  category?: string[] | null;
  activity_type?: string[] | null;
  status?: string | null;
  year?: number | null;
  month?: number | null;
  date_from?: string | null;
  date_to?: string | null;
  view?: string | null;
}

export async function exportMarketingTeamMemberCalendar(
  body: ExportCalendarRequest,
  token?: string | null,
): Promise<Blob> {
  const headers: Record<string, string> = {
    Accept: "application/pdf",
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(joinApiUrl(MARKETING_TEAM_MEMBER_EXPORT_CALENDAR_PATH), {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type") ?? "";
    let parsed: unknown = null;
    if (contentType.includes("application/json")) {
      parsed = await response.json();
    }
    const message =
      typeof parsed === "object" &&
      parsed !== null &&
      "message" in parsed &&
      typeof (parsed as { message: unknown }).message === "string"
        ? (parsed as { message: string }).message
        : response.statusText;
    throw new ApiRequestError(message, response.status, parsed);
  }

  return response.blob();
}

export function downloadCalendarExportBlob(blob: Blob, filename = "marketing-calendar.pdf"): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function downloadMarketingTeamMemberCalendarExport(
  token: string | null | undefined,
  body: ExportCalendarRequest = {},
): Promise<void> {
  const now = new Date();
  const payload: ExportCalendarRequest = {
    year: body.year ?? now.getFullYear(),
    month: body.month ?? now.getMonth() + 1,
    ...body,
  };
  const blob = await exportMarketingTeamMemberCalendar(payload, token);
  downloadCalendarExportBlob(blob);
}
