import axios from "axios";

import {
  clearTokens,
  getAccessTokenForApi,
  markSessionRejected,
} from "@/lib/auth/token-storage";

export function resolveApiBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/$/, "");
  }
  return "";
}

const apiClient = axios.create({
  baseURL: resolveApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  // Empty 204/200 bodies must not throw "Unexpected end of JSON input".
  transformResponse: [
    (data) => {
      if (data === "" || data === null || data === undefined) {
        return null;
      }
      if (typeof data !== "string") {
        return data;
      }
      const trimmed = data.trim();
      if (!trimmed) {
        return null;
      }
      try {
        return JSON.parse(trimmed);
      } catch {
        return data;
      }
    },
  ],
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessTokenForApi();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      clearTokens();
      markSessionRejected();
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.replace("/");
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
