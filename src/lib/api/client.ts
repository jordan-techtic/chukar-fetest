import axios from "axios";

import {
  clearTokens,
  getAccessTokenForApi,
  markSessionRejected,
} from "@/lib/auth/token-storage";
import { LOGIN_PATH, isLoginApiUrl, isPublicPath } from "@/lib/auth/public-paths";
import { clearReadPayloads } from "@/components/luna-figma/figmaDisplay";

export function resolveApiBaseUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_URL?.trim();
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
      if (isLoginApiUrl(error.config?.url)) {
        return Promise.reject(error);
      }
      clearReadPayloads();
      clearTokens();
      markSessionRejected();
      if (typeof window !== "undefined" && !isPublicPath(window.location.pathname)) {
        window.location.replace(LOGIN_PATH);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
