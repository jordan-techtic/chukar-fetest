"use client";

import { useCallback, useEffect } from "react";

import {
  figmaReadOperation,
  figmaWriteOperation,
  requestBodyFor,
  valuesFromResponse,
  type FigmaFieldValues,
} from "@/components/luna-figma/figmaFieldContract";
import { publishReadPayload } from "@/components/luna-figma/figmaDisplay";
import { useFigmaScreenData } from "@/components/luna-figma/useFigmaScreenData";
import { clearAccessToken, getAccessToken } from "@/lib/auth/token-storage";
import { ApiRequestError } from "@/lib/api/client";

import {
  getMarketingTeamMemberProfile,
  updateMarketingTeamMemberProfile,
} from "./marketing-team-member-profile";

const MY_PROFILE_FRAME_ID = "5329:12027";

function unwrapPayload(payload: unknown, unwrapKey: string | null): unknown {
  if (!unwrapKey || payload === null || typeof payload !== "object") {
    return payload;
  }
  const record = payload as Record<string, unknown>;
  return record[unwrapKey] ?? payload;
}

/** CF-23 my-profile screen → GET /api/v1/marketing-team-member/profile */
export function useMyProfileScreenApi() {
  const { bound, setFieldValue } = useFigmaScreenData();

  const loadProfile = useCallback(async () => {
    const readOp = figmaReadOperation(MY_PROFILE_FRAME_ID);
    if (!readOp) {
      return;
    }
    const token = getAccessToken();
    const response = await getMarketingTeamMemberProfile(token);
    publishReadPayload(readOp.method, readOp.path, response.body);
    const merged = valuesFromResponse(
      readOp,
      unwrapPayload(response.body, readOp.responseUnwrap),
    );
    for (const [field, value] of Object.entries(merged)) {
      if (typeof value === "string") {
        setFieldValue(field, value);
      }
    }
  }, [setFieldValue]);

  useEffect(() => {
    if (bound !== MY_PROFILE_FRAME_ID) {
      return;
    }
    void loadProfile().catch((error) => {
      if (error instanceof ApiRequestError && error.status === 401) {
        clearAccessToken();
      }
    });
  }, [bound, loadProfile]);

  return { loadProfile };
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
