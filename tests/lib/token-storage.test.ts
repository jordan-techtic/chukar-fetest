import {
  clearTokens,
  getAccessToken,
  getAccessTokenForApi,
  hasRouteAccess,
  isSessionRejected,
  markSessionRejected,
  setAccessToken,
} from "@/lib/auth/token-storage";

describe("token-storage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("stores and reads api tokens", () => {
    setAccessToken("real-token", "api");
    expect(getAccessToken()).toBe("real-token");
    expect(getAccessTokenForApi()).toBe("real-token");
    expect(hasRouteAccess()).toBe(true);
  });

  it("does not send dev route tokens to the api layer", () => {
    setAccessToken("dev-route-access", "route-dev");
    expect(getAccessToken()).toBe("dev-route-access");
    expect(getAccessTokenForApi()).toBeNull();
    expect(hasRouteAccess()).toBe(false);
  });

  it("clears access when session is rejected", () => {
    setAccessToken("real-token", "api");
    markSessionRejected();
    expect(isSessionRejected()).toBe(true);
    expect(getAccessToken()).toBeNull();
    clearTokens();
    sessionStorage.removeItem("mcc_session_rejected");
  });

  it("does not grant page access without a stored session token", () => {
    expect(getAccessToken()).toBeNull();
    expect(hasRouteAccess()).toBe(false);
  });
});
