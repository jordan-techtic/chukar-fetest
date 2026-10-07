const ACCESS_TOKEN_KEY = "mcc_access_token";
const REFRESH_TOKEN_KEY = "mcc_refresh_token";
const SESSION_REJECTED_KEY = "mcc_session_rejected";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  if (sessionStorage.getItem(SESSION_REJECTED_KEY) === "true") return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setTokens(accessToken: string, refreshToken: string): void {
  if (!isBrowser()) return;
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  sessionStorage.removeItem(SESSION_REJECTED_KEY);
}

export function clearTokens(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  sessionStorage.setItem(SESSION_REJECTED_KEY, "true");
}

export function isSessionRejected(): boolean {
  if (!isBrowser()) return false;
  return sessionStorage.getItem(SESSION_REJECTED_KEY) === "true";
}

export function isAuthenticated(): boolean {
  return Boolean(getAccessToken());
}
