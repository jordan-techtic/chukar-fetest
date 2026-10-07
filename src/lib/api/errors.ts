import type { ApiErrorResponse } from "@/types/api";

export class ApiClientError extends Error {
  code: string;
  status?: number;
  details?: ApiErrorResponse["error"]["details"];

  constructor(
    message: string,
    code: string,
    status?: number,
    details?: ApiErrorResponse["error"]["details"],
  ) {
    super(message);
    this.name = "ApiClientError";
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function isApiErrorResponse(value: unknown): value is ApiErrorResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    (value as ApiErrorResponse).success === false &&
    "message" in value &&
    "error" in value
  );
}

export function getApiErrorMessage(error: unknown): string {
  if (error instanceof ApiClientError) {
    return error.message;
  }

  if (error instanceof Error) {
    if (error.message.includes("Network Error")) {
      return "Unable to connect. Please check your connection.";
    }
    return "Something went wrong. Please try again.";
  }

  return "Something went wrong. Please try again.";
}

export function parseApiError(status: number, body: unknown): ApiClientError {
  if (isApiErrorResponse(body)) {
    if (status === 401) {
      return new ApiClientError(
        "Your session may have expired. Please sign in again.",
        body.error.code,
        status,
        body.error.details,
      );
    }

    return new ApiClientError(
      body.message,
      body.error.code,
      status,
      body.error.details,
    );
  }

  if (status >= 500) {
    return new ApiClientError(
      "Something went wrong. Please try again.",
      "INTERNAL_ERROR",
      status,
    );
  }

  return new ApiClientError(
    "Something went wrong. Please try again.",
    "UNKNOWN_ERROR",
    status,
  );
}
