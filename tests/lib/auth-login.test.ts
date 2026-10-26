import { loginRequest } from "@/lib/api/auth";
import apiClient from "@/lib/api/client";
import {
  LOGIN_API_PATH,
  isLoginApiUrl,
  isPublicPath,
  loginPathWithNext,
  safeNextPath,
} from "@/lib/auth/public-paths";

jest.mock("@/lib/api/client", () => ({
  __esModule: true,
  default: { post: jest.fn() },
}));

const mockedClient = apiClient as jest.Mocked<typeof apiClient>;

describe("loginRequest", () => {
  beforeEach(() => {
    mockedClient.post.mockReset();
  });

  it("posts email_or_username and password to the login endpoint", async () => {
    mockedClient.post.mockResolvedValue({
      data: {
        success: true,
        message: "Login successful",
        data: {
          access_token: "access",
          refresh_token: "refresh",
          token_type: "bearer",
        },
      },
    });

    const result = await loginRequest({
      email_or_username: "  dev  ",
      password: "secret",
    });

    expect(mockedClient.post).toHaveBeenCalledWith(LOGIN_API_PATH, {
      email_or_username: "dev",
      password: "secret",
    });
    expect(result.data.access_token).toBe("access");
    expect(result.data.refresh_token).toBe("refresh");
  });
});

describe("public paths", () => {
  it("treats /login as public and login API urls as auth requests", () => {
    expect(isPublicPath("/login")).toBe(true);
    expect(isPublicPath("/manage-users")).toBe(false);
    expect(isLoginApiUrl("/api/v1/marketing-team-member/login")).toBe(true);
    expect(isLoginApiUrl("/api/v1/users")).toBe(false);
  });

  it("returns to a safe in-app path after login", () => {
    expect(safeNextPath("/manage-users")).toBe("/manage-users");
    expect(safeNextPath("//evil")).toBe("/");
    expect(safeNextPath("/login")).toBe("/");
    expect(loginPathWithNext("/manage-users")).toBe("/login?next=%2Fmanage-users");
    expect(loginPathWithNext("/")).toBe("/login");
  });
});
