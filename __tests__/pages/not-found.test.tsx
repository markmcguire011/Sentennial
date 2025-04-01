import { render, screen } from "../test-utils";
import NotFound from "@/app/not-found";

describe("Not Found Page", () => {
  it("renders the 404 page correctly", () => {
    render(<NotFound />);

    // Check for main elements
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Return to Civilization/i })
    ).toBeInTheDocument();
  });
});
