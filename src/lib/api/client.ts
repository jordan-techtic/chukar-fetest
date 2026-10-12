import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";

import {
  clearAccessToken,
  clearSessionRejected,
  getAccessToken,
  setSessionRejected,
} from "@/lib/auth/token-storage";

import { resolveApiBaseUrl } from "./resolve-base-url";

const apiClient = axios.create({
  baseURL: resolveApiBaseUrl(),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let handlingUnauthorized = false;

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      clearAccessToken();
      setSessionRejected(true);
      if (!handlingUnauthorized) {
        handlingUnauthorized = true;
        const url = new URL(window.location.href);
        if (!url.searchParams.has("auth")) {
          url.searchParams.set("auth", "required");
          window.location.replace(url.pathname + url.search);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;

export function resetApiClientForTests(): void {
  handlingUnauthorized = false;
  clearSessionRejected();
}
