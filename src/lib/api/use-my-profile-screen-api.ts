"use client";

import {
  figmaWriteOperation,
  requestBodyFor,
  type FigmaFieldValues,
} from "@/components/luna-figma/figmaFieldContract";
import { useFigmaScreenData } from "@/components/luna-figma/useFigmaScreenData";
import { getAccessToken } from "@/lib/auth/token-storage";

import { updateMarketingTeamMemberProfile } from "./marketing-team-member-profile";

const MY_PROFILE_FRAME_ID = "5329:12027";

/** CF-23 my-profile screen → GET /api/v1/marketing-team-member/profile */
export function useMyProfileScreenApi() {
  const { retryProfileLoad } = useFigmaScreenData();
  return { loadProfile: retryProfileLoad };
}

/** CF-23 profile form save → PUT /api/v1/marketing-team-member/profile */
export async function saveMyProfileFromScreen(values: FigmaFieldValues) {
  const writeOp = figmaWriteOperation(MY_PROFILE_FRAME_ID);
  if (!writeOp) {
    return null;
  }
  const token = getAccessToken();
  const payload = requestBodyFor(writeOp, values);
  return updateMarketingTeamMemberProfile(payload, token);
}
