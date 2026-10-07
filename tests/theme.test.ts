import { colorTokens, breakpoints, gridSettings } from "@/styles/theme";

describe("theme tokens", () => {
  it("exports Sofia color tokens", () => {
    expect(colorTokens.background).toBe("#fde8ed");
    expect(colorTokens.surface).toBe("#a21d35");
    expect(colorTokens.secondary).toBe("#ffffff");
  });

  it("exports breakpoints and grid settings", () => {
    expect(breakpoints.md).toBe("768px");
    expect(gridSettings.columns).toBe(12);
    expect(gridSettings.maxWidth).toBe("1280px");
  });
});
