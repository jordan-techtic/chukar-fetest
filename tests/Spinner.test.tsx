import { render, screen } from "@testing-library/react";

import { Spinner } from "@/components/ui/spinner";

describe("Spinner", () => {
  it("renders with accessible status label", () => {
    render(<Spinner label="Loading data" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading data");
    expect(screen.getByText("Loading data")).toBeInTheDocument();
  });
});
