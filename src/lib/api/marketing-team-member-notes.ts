import { apiRequest } from "./client";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_NOTES_PATH =
  "/api/v1/marketing-team-member/notes" as const;

export const MARKETING_TEAM_MEMBER_NOTE_BY_ID_PATH =
  "/api/v1/marketing-team-member/notes/{id}" as const;

export interface NoteOut {
  id: string;
  title: string;
  description: string | null;
  visibility: "everyone" | "me";
  year: number;
  month: number;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface NoteListData {
  items: NoteOut[];
  year: number;
  month: number;
}

export type NoteListResponse = ApiSuccessResponse<NoteListData>;

export interface NoteCreateRequest {
  title: string;
  description?: string | null;
  visibility: "everyone" | "me";
  year: number;
  month: number;
}

export interface NoteUpdateRequest {
  title?: string | null;
  description?: string | null;
  visibility?: "everyone" | "me" | null;
  year?: number | null;
  month?: number | null;
}

export type NoteMutationResponse = ApiSuccessResponse<NoteOut>;

export interface NoteListQueryParams {
  year: string;
  month: string;
}

function notesPath(params: NoteListQueryParams): string {
  const search = new URLSearchParams();
  search.set("year", params.year);
  search.set("month", params.month);
  return `${MARKETING_TEAM_MEMBER_NOTES_PATH}?${search.toString()}`;
}

function noteByIdPath(id: string): string {
  return `/api/v1/marketing-team-member/notes/${encodeURIComponent(id)}`;
}

/** GET /api/v1/marketing-team-member/notes */
export async function listMarketingTeamMemberNotes(
  params: NoteListQueryParams,
  token?: string | null,
) {
  return apiRequest("GET", notesPath(params), undefined, token);
}

/** POST /api/v1/marketing-team-member/notes */
export async function createMarketingTeamMemberNote(
  body: NoteCreateRequest,
  token?: string | null,
) {
  return apiRequest("POST", MARKETING_TEAM_MEMBER_NOTES_PATH, body, token);
}

/** PUT /api/v1/marketing-team-member/notes/{id} */
export async function updateMarketingTeamMemberNote(
  id: string,
  body: NoteUpdateRequest,
  token?: string | null,
) {
  return apiRequest("PUT", noteByIdPath(id), body, token);
}

/** DELETE /api/v1/marketing-team-member/notes/{id} */
export async function deleteMarketingTeamMemberNote(
  id: string,
  token?: string | null,
) {
  return apiRequest("DELETE", noteByIdPath(id), undefined, token);
}
