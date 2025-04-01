import { render, screen } from "../test-utils";
import About from "@/app/about/page";

describe("About Page", () => {
  it("renders the about page correctly", () => {
    render(<About />);

    // Check for main elements
    expect(screen.getByText(/Alexandria Repository/i)).toBeInTheDocument();
    expect(screen.getByText(/Ethics of AI/i)).toBeInTheDocument();

    // Check for newsletter section
    expect(screen.getByText("Stay Updated")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Subscribe/i })
    ).toBeInTheDocument();
  });
});
