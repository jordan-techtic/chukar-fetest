const ACCESS_TOKEN_KEY = "mcc_access_token";
const REFRESH_TOKEN_KEY = "mcc_refresh_token";
const SESSION_REJECTED_KEY = "mcc_session_rejected";
const TOKEN_KIND_KEY = "mcc_token_kind";

export type TokenKind = "api" | "route-dev";

function getStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.sessionStorage;
}

export function isSessionRejected(): boolean {
  return getStorage()?.getItem(SESSION_REJECTED_KEY) === "true";
}

export function markSessionRejected(): void {
  getStorage()?.setItem(SESSION_REJECTED_KEY, "true");
}

export function clearSessionRejected(): void {
  getStorage()?.removeItem(SESSION_REJECTED_KEY);
}

export function getTokenKind(): TokenKind | null {
  const kind = getStorage()?.getItem(TOKEN_KIND_KEY);
  if (kind === "api" || kind === "route-dev") {
    return kind;
  }
  return null;
}

export function getAccessToken(): string | null {
  if (isSessionRejected()) {
    return null;
  }
  return getStorage()?.getItem(ACCESS_TOKEN_KEY) ?? null;
}

/** Bearer token for API calls — excludes dev-only route tokens. */
export function getAccessTokenForApi(): string | null {
  if (isSessionRejected()) {
    return null;
  }
  const token = getAccessToken();
  if (!token || getTokenKind() === "route-dev") {
    return null;
  }
  return token;
}

export function setAccessToken(token: string, kind: TokenKind = "api"): void {
  clearSessionRejected();
  getStorage()?.setItem(ACCESS_TOKEN_KEY, token);
  getStorage()?.setItem(TOKEN_KIND_KEY, kind);
}

export function setRefreshToken(token: string): void {
  getStorage()?.setItem(REFRESH_TOKEN_KEY, token);
}

export function getRefreshToken(): string | null {
  return getStorage()?.getItem(REFRESH_TOKEN_KEY) ?? null;
}

export function clearTokens(): void {
  getStorage()?.removeItem(ACCESS_TOKEN_KEY);
  getStorage()?.removeItem(REFRESH_TOKEN_KEY);
  getStorage()?.removeItem(TOKEN_KIND_KEY);
}

export function hasRouteAccess(): boolean {
  return Boolean(getAccessToken());
}
