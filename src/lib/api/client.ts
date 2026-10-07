import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

import { parseApiError } from "@/lib/api/errors";
import { clearTokens, getAccessToken } from "@/lib/auth/token-storage";
import { dispatchUnauthorizedEvent } from "@/lib/auth/unauthorized";

function getBaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }
  return baseUrl.replace(/\/$/, "");
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      clearTokens();
      dispatchUnauthorizedEvent();
    }

    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(parseApiError(error.response.status, error.response.data));
    }

    if (axios.isAxiosError(error)) {
      return Promise.reject(
        parseApiError(0, {
          success: false,
          message: "Unable to connect. Please check your connection.",
          error: { code: "NETWORK_ERROR" },
        }),
      );
    }

    return Promise.reject(error);
  },
);

export async function apiGet<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await apiClient.get<T>(path, config);
  return response.data;
}
