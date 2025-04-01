import { render, screen } from "../test-utils";
import HereBeDragons from "@/app/herebedragons/page";

describe("Here Be Dragons Page", () => {
  it("renders the here be dragons page correctly", () => {
    render(<HereBeDragons />);

    // Check for main elements
    expect(screen.getByText("Here Be Dragons")).toBeInTheDocument();
    expect(
      screen.getByText(
        /In ancient maps, cartographers would mark unexplored territories/i
      )
    ).toBeInTheDocument();
  });
});
