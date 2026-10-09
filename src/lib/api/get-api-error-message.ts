import axios from "axios";

import type { ApiErrorResponse } from "./types";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as ApiErrorResponse | undefined;
    if (data?.message && typeof data.message === "string") {
      return data.message;
    }
    if (status === 401) {
      return "Your session may have expired. Please sign in again.";
    }
    if (status && status >= 500) {
      return "Something went wrong. Please try again.";
    }
    if (error.code === "ERR_NETWORK") {
      return "Unable to connect. Please check your connection.";
    }
  }
  return "Something went wrong. Please try again.";
}
