import { getAccessToken, clearAccessToken, setSessionRejected } from "@/lib/auth/token-storage";

function apiBaseUrl(): string {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "";
  return base.replace(/\/$/, "");
}

export function buildApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const base = apiBaseUrl();
  return base ? `${base}${normalizedPath}` : normalizedPath;
}

export class LunaApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, body: unknown, message: string) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export async function apiRequest(
  method: string,
  path: string,
  body?: Record<string, string | boolean> | null,
  query?: Record<string, string> | null,
): Promise<unknown> {
  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  const token = getAccessToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const init: RequestInit = { method: method.toUpperCase(), headers };
  if (body !== undefined && body !== null && method.toUpperCase() !== "GET") {
    headers["Content-Type"] = "application/json";
    init.body = JSON.stringify(body);
  }

  let requestPath = path;
  if (query && Object.keys(query).length > 0) {
    const search = new URLSearchParams(query).toString();
    requestPath = `${path}${path.includes("?") ? "&" : "?"}${search}`;
  }

  const response = await fetch(buildApiUrl(requestPath), init);

  if (response.status === 401 && typeof window !== "undefined") {
    clearAccessToken();
    setSessionRejected(true);
    clearReadPayloadsSafe();
  }

  const contentType = response.headers.get("content-type") ?? "";
  let parsed: unknown = null;
  if (contentType.includes("application/json")) {
    parsed = await response.json();
  } else if (contentType.includes("application/pdf")) {
    parsed = await response.blob();
  } else if (response.status !== 204) {
    const text = await response.text();
    parsed = text.length > 0 ? text : null;
  }

  if (!response.ok) {
    const message =
      typeof parsed === "object" &&
      parsed !== null &&
      "message" in parsed &&
      typeof (parsed as { message: unknown }).message === "string"
        ? (parsed as { message: string }).message
        : response.statusText;
    throw new LunaApiError(response.status, parsed, message);
  }

  return parsed;
}

function clearReadPayloadsSafe(): void {
  import("./figmaDisplay")
    .then(({ clearReadPayloads }) => clearReadPayloads())
    .catch(() => undefined);
}
