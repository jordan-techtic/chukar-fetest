import { setAccessToken } from "@/lib/auth/token-storage";

/** Dev-only: grants route guard access without attaching a Bearer token to API calls. */
export function grantDevRouteAccess(): void {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  setAccessToken("dev-route-access", "route-dev");
}
