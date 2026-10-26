export const LOGIN_PATH = "/login";
export const LOGIN_API_PATH = "/api/v1/marketing-team-member/login";

export function isPublicPath(pathname: string): boolean {
  return pathname === LOGIN_PATH;
}

export function safeNextPath(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/login")) {
    return "/";
  }
  return value;
}

export function loginPathWithNext(pathname: string): string {
  if (isPublicPath(pathname) || pathname === "/") {
    return LOGIN_PATH;
  }
  return `${LOGIN_PATH}?next=${encodeURIComponent(pathname)}`;
}

export function isLoginApiUrl(url: string | undefined): boolean {
  return Boolean(url && url.includes(LOGIN_API_PATH));
}
