import { render, screen } from "../test-utils";
import ArticlePage from "@/app/articles/[slug]/page";

describe("Article Detail Page", () => {
  it("renders the article detail page correctly", async () => {
    const { findByText } = render(
      await ArticlePage({ params: Promise.resolve({ slug: "test-article" }) })
    );

    // Check for main elements
    expect(await findByText("Test Article")).toBeInTheDocument();
    expect(await findByText("Test Subtitle")).toBeInTheDocument();
    expect(await findByText("Converted markdown content")).toBeInTheDocument();
  });
});
