import { render, screen } from "../test-utils";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the home page correctly", () => {
    render(<Home />);

    // Check for main elements
    expect(screen.getByText("Sentennial.")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Exploring the intersections of technology, history, and human nature/i
      )
    ).toBeInTheDocument();

    // Check for intro section
    expect(screen.getByText(/Hey I'm Mark!/i)).toBeInTheDocument();

    // Check for topic links
    expect(screen.getByRole("link", { name: /History/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Computer Science/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Philosophy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Architecture/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Psychology/i })
    ).toBeInTheDocument();
  });
});
