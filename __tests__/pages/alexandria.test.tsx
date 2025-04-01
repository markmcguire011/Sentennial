import { render, screen } from "../test-utils";
import Alexandria from "@/app/alexandria/page";

describe("Alexandria Page", () => {
  it("renders the alexandria page correctly", () => {
    render(<Alexandria />);

    // Check for main elements
    expect(screen.getByText(/Alexandria/i)).toBeInTheDocument();
    expect(
      screen.getByText(/An open-access digital repository/i)
    ).toBeInTheDocument();

    // Check for WIP indicator
    expect(screen.getByText(/Building the Repository/i)).toBeInTheDocument();
  });
});
