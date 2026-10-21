import { setAccessToken } from "@/lib/auth/token-storage";

/**
 * Dev-only access helper.
 * Prefer `applyDevAuthTokensFromServer()` for real JWTs; this is the sync fallback.
 */
export function grantDevRouteAccess(): void {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  setAccessToken("dev-route-access", "route-dev");
}
