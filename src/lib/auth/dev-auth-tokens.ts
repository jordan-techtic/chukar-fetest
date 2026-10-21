import {
  clearSessionRejected,
  getAccessTokenForApi,
  setAccessToken,
  setRefreshToken,
} from "@/lib/auth/token-storage";

function applyTokens(access: string, refresh?: string | null): void {
  clearSessionRejected();
  setAccessToken(access, "api");
  if (refresh?.trim()) {
    setRefreshToken(refresh.trim());
  }
}

/**
 * Sync path: NEXT_PUBLIC_DEV_* (legacy). Prefer server-only DEV_* via bootstrap fetch.
 */
export function applyDevAuthTokens(options?: { force?: boolean }): boolean {
  if (process.env.NODE_ENV === "production") {
    return false;
  }
  const access = process.env.NEXT_PUBLIC_DEV_ACCESS_TOKEN?.trim();
  if (!access) {
    return false;
  }
  if (!options?.force && getAccessTokenForApi()) {
    return true;
  }
  applyTokens(access, process.env.NEXT_PUBLIC_DEV_REFRESH_TOKEN);
  return true;
}

/** Async path: load tokens from `/api/dev-auth/session` (server-only env). */
export async function applyDevAuthTokensFromServer(options?: {
  force?: boolean;
}): Promise<boolean> {
  if (process.env.NODE_ENV === "production") {
    return false;
  }
  if (typeof window === "undefined") {
    return false;
  }
  if (!options?.force && getAccessTokenForApi()) {
    return true;
  }

  try {
    // Outside /api/* so next.config.js backend rewrites do not steal this route.
    const response = await fetch("/dev-auth/session", {
      method: "GET",
      cache: "no-store",
      credentials: "same-origin",
    });
    if (!response.ok) {
      return applyDevAuthTokens(options);
    }
    const text = (await response.text()).trim();
    if (!text) {
      return applyDevAuthTokens(options);
    }
    let data: { access_token?: string | null; refresh_token?: string | null };
    try {
      data = JSON.parse(text) as {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    } catch {
      return applyDevAuthTokens(options);
    }
    const access = data.access_token?.trim();
    if (!access) {
      return applyDevAuthTokens(options);
    }
    applyTokens(access, data.refresh_token);
    return true;
  } catch {
    return applyDevAuthTokens(options);
  }
}
