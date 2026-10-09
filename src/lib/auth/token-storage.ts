import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  SESSION_REJECTED_KEY,
} from "./constants";

function storage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.localStorage;
}

export function getAccessToken(): string | null {
  const rejected = storage()?.getItem(SESSION_REJECTED_KEY);
  if (rejected === "true") {
    return null;
  }
  return storage()?.getItem(ACCESS_TOKEN_KEY) ?? null;
}

export function setAccessToken(token: string): void {
  storage()?.setItem(ACCESS_TOKEN_KEY, token);
  clearSessionRejected();
}

export function getRefreshToken(): string | null {
  return storage()?.getItem(REFRESH_TOKEN_KEY) ?? null;
}

export function setRefreshToken(token: string): void {
  storage()?.setItem(REFRESH_TOKEN_KEY, token);
}

export function clearAccessToken(): void {
  storage()?.removeItem(ACCESS_TOKEN_KEY);
  storage()?.removeItem(REFRESH_TOKEN_KEY);
}

export function setSessionRejected(rejected: boolean): void {
  if (rejected) {
    storage()?.setItem(SESSION_REJECTED_KEY, "true");
  } else {
    storage()?.removeItem(SESSION_REJECTED_KEY);
  }
}

export function clearSessionRejected(): void {
  storage()?.removeItem(SESSION_REJECTED_KEY);
}

export function clearAllAuthStorage(): void {
  clearAccessToken();
  clearSessionRejected();
}
