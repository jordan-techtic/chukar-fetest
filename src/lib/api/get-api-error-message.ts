import axios from "axios";

import type { ApiErrorResponse } from "@/lib/api/types";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as ApiErrorResponse | undefined;

    if (data && data.success === false && typeof data.message === "string") {
      return data.message;
    }

    if (status === 401) {
      return "Your session may have expired. Please sign in again.";
    }

    if (status === 422) {
      return "Please check the form and try again.";
    }

    if (!error.response) {
      return "Unable to connect. Please check your connection.";
    }

    if (status && status >= 500) {
      return "Something went wrong. Please try again.";
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}
