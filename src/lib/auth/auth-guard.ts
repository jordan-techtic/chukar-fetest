import { isAuthenticated, isSessionRejected } from "@/lib/auth/token-storage";

export function canAccessProtectedRoute(): boolean {
  if (isSessionRejected()) {
    return false;
  }
  return isAuthenticated();
}

export function getLoginRedirectPath(pathname: string): string {
  const params = new URLSearchParams();
  if (pathname && pathname !== "/login") {
    params.set("redirect", pathname);
  }
  const query = params.toString();
  return query ? `/login?${query}` : "/login";
}
