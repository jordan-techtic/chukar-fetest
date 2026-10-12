import { AxiosError, type AxiosAdapter } from "axios";

import apiClient, { resetApiClientForTests } from "@/lib/api/client";
import { redirectToLogin } from "@/lib/auth/redirect";
import { SESSION_REJECTED_KEY } from "@/lib/auth/constants";
import { setAccessToken } from "@/lib/auth/token-storage";

jest.mock("@/lib/auth/redirect", () => ({
  redirectToLogin: jest.fn(),
}));

const mockedRedirect = redirectToLogin as jest.Mock;
const adapter = jest.fn() as jest.Mock & AxiosAdapter;

function unauthorizedError(config: unknown): AxiosError {
  return new AxiosError(
    "Request failed with status code 401",
    AxiosError.ERR_BAD_REQUEST,
    config as never,
    {},
    {
      status: 401,
      statusText: "Unauthorized",
      headers: {},
      config,
    } as never,
  );
}

beforeEach(() => {
  resetApiClientForTests();
  window.localStorage.clear();
  jest.clearAllMocks();
  adapter.mockImplementation((requestConfig) =>
    Promise.reject(unauthorizedError(requestConfig)),
  );
  apiClient.defaults.adapter = adapter;
});

describe("api client 401 handling", () => {
  it("clears the access token and marks the session rejected", async () => {
    setAccessToken("stale-token");

    await expect(apiClient.get("/api/v1/calendar")).rejects.toBeDefined();

    expect(window.localStorage.getItem("mcc_access_token")).toBeNull();
    expect(window.localStorage.getItem(SESSION_REJECTED_KEY)).toBe("true");
  });

  it("invokes the login redirect exactly once and never retries", async () => {
    setAccessToken("stale-token");

    await expect(apiClient.get("/api/v1/calendar")).rejects.toBeDefined();

    expect(mockedRedirect).toHaveBeenCalledTimes(1);
    expect(adapter).toHaveBeenCalledTimes(1);
  });

  it("does not redirect twice for concurrent 401 responses", async () => {
    setAccessToken("stale-token");

    await Promise.allSettled([
      apiClient.get("/api/v1/calendar"),
      apiClient.get("/api/v1/calendar"),
    ]);

    expect(mockedRedirect).toHaveBeenCalledTimes(1);
  });
});
