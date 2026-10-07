describe("api client auth interceptor", () => {
  const originalEnv = process.env.NEXT_PUBLIC_API_URL;

  beforeAll(() => {
    process.env.NEXT_PUBLIC_API_URL = "http://example.test";
  });

  afterAll(() => {
    process.env.NEXT_PUBLIC_API_URL = originalEnv;
  });

  beforeEach(() => {
    jest.resetModules();
    localStorage.clear();
    sessionStorage.clear();
  });

  it("attaches Authorization header when access token is stored", async () => {
    localStorage.setItem("mcc_access_token", "test-token");

    const axios = (await import("axios")).default;
    const createSpy = jest.spyOn(axios, "create").mockReturnValue({
      interceptors: {
        request: {
          use: jest.fn(
            (handler: (config: { headers: Record<string, string> }) => unknown) => {
              const config = handler({ headers: {} });
              expect(config).toEqual(
                expect.objectContaining({
                  headers: { Authorization: "Bearer test-token" },
                }),
              );
            },
          ),
        },
        response: { use: jest.fn() },
      },
    } as unknown as ReturnType<typeof axios.create>);

    await import("@/lib/api/client");

    expect(createSpy).toHaveBeenCalled();
    createSpy.mockRestore();
  });
});
