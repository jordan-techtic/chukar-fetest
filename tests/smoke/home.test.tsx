import { render, screen } from "@testing-library/react";

import { HomePlaceholder } from "@/components/features/home/HomePlaceholder";

describe("HomePlaceholder", () => {
  it("renders the product title", () => {
    render(<HomePlaceholder />);
    expect(
      screen.getByRole("heading", { name: "Marketing Content Calendar" }),
    ).toBeInTheDocument();
  });
});
