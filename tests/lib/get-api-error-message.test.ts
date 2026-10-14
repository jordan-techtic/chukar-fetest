import axios from "axios";

import { getApiErrorMessage } from "@/lib/api/get-api-error-message";

describe("getApiErrorMessage", () => {
  it("returns envelope message when present", () => {
    const error = new axios.AxiosError("fail");
    error.response = {
      status: 400,
      data: { success: false, message: "Bad request", error: { code: "BAD_REQUEST" } },
      statusText: "Bad Request",
      headers: {},
      config: {} as never,
    };
    expect(getApiErrorMessage(error)).toBe("Bad request");
  });

  it("maps network failures", () => {
    const error = new axios.AxiosError("Network Error");
    error.response = undefined;
    expect(getApiErrorMessage(error)).toBe("Unable to connect. Please check your connection.");
  });
});
