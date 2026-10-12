const LOGIN_ROUTE = "/login";

/**
 * Centralized redirect for unauthorized (401) responses.
 *
 * The /login route does not exist yet, so today we fall back to the root
 * route where the auth guard flow lives. When the login ticket lands, this
 * helper is the single place to flip to the real login route.
 */
export function redirectToLogin(): void {
  if (typeof window === "undefined") {
    return;
  }
  if (window.location.pathname !== LOGIN_ROUTE) {
    window.location.assign(LOGIN_ROUTE);
  }
}
