/** luna-spec-codegen: data-hook */
import {
  clearTokens,
  getAccessTokenForApi,
  markSessionRejected,
} from "@/lib/auth/token-storage";

export function resolveFigmaApiBaseUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "";
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/$/, "");
  }
  return "";
}

export type ApiRequestResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; status: number; body: unknown; message: string };

export async function figmaApiRequest(
  method: string,
  path: string,
  options?: {
    body?: unknown;
    signal?: AbortSignal;
    searchParams?: Record<string, string | number | undefined>;
  },
): Promise<ApiRequestResult> {
  const base = resolveFigmaApiBaseUrl();
  let urlPath = path.startsWith("/") ? path : `/${path}`;
  if (options?.searchParams) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.searchParams)) {
      if (value !== undefined && value !== "") {
        params.set(key, String(value));
      }
    }
    const query = params.toString();
    if (query) {
      urlPath = `${urlPath}?${query}`;
    }
  }
  const url = `${base}${urlPath}`;
  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  const token = getAccessTokenForApi();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  let init: RequestInit = { method: method.toUpperCase(), headers, signal: options?.signal };
  if (options?.body !== undefined && method.toUpperCase() !== "GET") {
    headers["Content-Type"] = "application/json";
    init = { ...init, body: JSON.stringify(options.body) };
  }
  const response = await fetch(url, init);
  let body: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      body = text;
    }
  }
  if (response.status === 401) {
    clearTokens();
    markSessionRejected();
    return {
      ok: false,
      status: 401,
      body,
      message: "Unauthorized",
    };
  }
  if (!response.ok) {
    const record = body !== null && typeof body === "object" ? (body as Record<string, unknown>) : null;
    const message =
      typeof record?.message === "string"
        ? record.message
        : `Request failed (${response.status})`;
    return { ok: false, status: response.status, body, message };
  }
  return { ok: true, status: response.status, body };
}

export function unwrapApiEnvelope(body: unknown, unwrapKey: string | null): unknown {
  if (!unwrapKey || body === null || typeof body !== "object") {
    return body;
  }
  const record = body as Record<string, unknown>;
  if (record.success === false) {
    return body;
  }
  return record[unwrapKey] ?? body;
}
