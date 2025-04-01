import { render, screen } from "../test-utils";
import MusingPage from "@/app/musings/[slug]/page";

describe("Musing Detail Page", () => {
  it("renders the musing detail page correctly", async () => {
    const { findByText } = render(
      await MusingPage({ params: Promise.resolve({ slug: "test-musing" }) })
    );

    // Check for main elements
    expect(await findByText("Test Article")).toBeInTheDocument();
    expect(await findByText("Converted markdown content")).toBeInTheDocument();
  });
});
