import apiClient from "@/lib/api/client";

export const MARKETING_NOTES_PATH = "/api/v1/marketing-team-member/notes";

export type MarketingNotesQuery = {
  year?: number;
  month?: number;
};

export async function listMarketingNotes(params?: MarketingNotesQuery): Promise<unknown> {
  const response = await apiClient.get(MARKETING_NOTES_PATH, { params });
  return response.data;
}

export async function createMarketingNote(body: unknown): Promise<unknown> {
  const response = await apiClient.post(MARKETING_NOTES_PATH, body);
  return response.data;
}
