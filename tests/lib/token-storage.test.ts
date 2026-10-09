import {
  clearAllAuthStorage,
  getAccessToken,
  setAccessToken,
  setSessionRejected,
} from "@/lib/auth/token-storage";

describe("token-storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores and reads access token", () => {
    setAccessToken("test-token");
    expect(getAccessToken()).toBe("test-token");
  });

  it("returns null when session rejected", () => {
    setAccessToken("test-token");
    setSessionRejected(true);
    expect(getAccessToken()).toBeNull();
  });

  it("clears tokens", () => {
    setAccessToken("test-token");
    clearAllAuthStorage();
    expect(getAccessToken()).toBeNull();
  });
});
