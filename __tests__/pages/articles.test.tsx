import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Articles from "@/components/content/articles";
import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";

// Mock the usePathname and useSearchParams hooks
const mockPush = jest.fn();
const mockPathname = "/articles";
let mockSearchParams = new URLSearchParams("page=1");

jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => mockSearchParams,
}));

// Mock window.history.pushState
const mockPushState = jest.fn();
Object.defineProperty(window, "history", {
  writable: true,
  value: {
    ...window.history,
    pushState: mockPushState,
  },
});

// Sample articles for testing
const mockArticles: Article[] = [
  {
    slug: "test-article-1",
    title: "Test Article 1",
    subtitle: "Philosophy Test",
    date: "2023-01-01",
    comp_date: new Date("2023-01-01"),
    categories: ["Philosophy"],
    content: "Test content 1",
    readTime: 1,
  },
  {
    slug: "test-article-2",
    title: "Test Article 2",
    subtitle: "History Test",
    date: "2023-01-02",
    comp_date: new Date("2023-01-02"),
    categories: ["History"],
    content: "Test content 2",
    readTime: 2,
  },
  {
    slug: "test-article-3",
    title: "Test Article 3",
    subtitle: "Computer Science Test",
    date: "2023-01-03",
    comp_date: new Date("2023-01-03"),
    categories: ["Computer Science"],
    content: "Test content 3",
    readTime: 3,
  },
  {
    slug: "test-article-4",
    title: "Test Article 4",
    subtitle: "Psychology Test",
    date: "2023-01-04",
    comp_date: new Date("2023-01-04"),
    categories: ["Psychology"],
    content: "Test content 4",
    readTime: 4,
  },
  {
    slug: "test-article-5",
    title: "Test Article 5",
    subtitle: "Architecture Test",
    date: "2023-01-05",
    comp_date: new Date("2023-01-05"),
    categories: ["Architecture"],
    content: "Test content 5",
    readTime: 5,
  },
  {
    slug: "test-article-6",
    title: "Test Article 6",
    subtitle: "Multiple Categories",
    date: "2023-01-06",
    comp_date: new Date("2023-01-06"),
    categories: ["Philosophy", "History"],
    content: "Test content 6",
    readTime: 6,
  },
];

// Sample article series for testing
const mockSeries: ArticleSeries[] = [
  {
    id: "test-series-1",
    title: "Test Series 1",
    description: "A test series about Philosophy",
    lastUpdated: "2023-01-10",
    articles: [mockArticles[0], mockArticles[5]],
    status: "completed",
  },
  {
    id: "test-series-2",
    title: "Test Series 2",
    description: "A test series about History",
    lastUpdated: "2023-01-15",
    articles: [mockArticles[1], mockArticles[5]],
    status: "ongoing",
  },
];

describe("Articles Component", () => {
  beforeEach(() => {
    mockSearchParams = new URLSearchParams("page=1");
    mockPushState.mockClear();
  });

  it("renders all articles when no category is selected", () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Should show the first 4 articles (pagination)
    expect(screen.getByText("Test Article 1")).toBeInTheDocument();
    expect(screen.getByText("Test Article 2")).toBeInTheDocument();
    expect(screen.getByText("Test Article 3")).toBeInTheDocument();
    expect(screen.getByText("Test Article 4")).toBeInTheDocument();

    // Should not show articles from page 2
    expect(screen.queryByText("Test Article 5")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Article 6")).not.toBeInTheDocument();
  });

  it("filters articles when a category is selected", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Click on Philosophy filter
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    fireEvent.click(philosophyButton);

    // Should only show Philosophy articles
    await waitFor(() => {
      expect(screen.getByText("Test Article 1")).toBeInTheDocument();
      expect(screen.getByText("Test Article 6")).toBeInTheDocument();
      expect(screen.queryByText("Test Article 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Test Article 3")).not.toBeInTheDocument();
    });

    // Should update URL with category parameter
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      "",
      "/articles?page=1&category=philosophy"
    );
  });

  it("deselects category when clicking the same filter again", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Click on Philosophy filter
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    fireEvent.click(philosophyButton);

    // Click on Philosophy filter again to deselect
    fireEvent.click(philosophyButton);

    // Should show all articles again
    await waitFor(() => {
      expect(screen.getByText("Test Article 1")).toBeInTheDocument();
      expect(screen.getByText("Test Article 2")).toBeInTheDocument();
      expect(screen.getByText("Test Article 3")).toBeInTheDocument();
      expect(screen.getByText("Test Article 4")).toBeInTheDocument();
    });

    // Should remove category parameter from URL
    expect(mockPushState).toHaveBeenCalledWith({}, "", "/articles?page=1");
  });

  it("changes filter when clicking a different category", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Click on Philosophy filter
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    fireEvent.click(philosophyButton);

    // Click on History filter
    const historyButton = screen.getByRole("button", { name: /History/i });
    fireEvent.click(historyButton);

    // Should only show History articles
    await waitFor(() => {
      expect(screen.getByText("Test Article 2")).toBeInTheDocument();
      expect(screen.getByText("Test Article 6")).toBeInTheDocument();
      expect(screen.queryByText("Test Article 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Test Article 3")).not.toBeInTheDocument();
    });

    // Should update URL with new category parameter
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      "",
      "/articles?page=1&category=history"
    );
  });

  it("handles pagination correctly", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    const nextPageButton = screen.getByLabelText("Next Page");
    fireEvent.click(nextPageButton);

    // Should update URL with page=2
    expect(mockPushState).toHaveBeenCalledWith({}, "", "/articles?page=2");
  });

  it("initializes with category from URL", async () => {
    // Set up URL with category parameter
    mockSearchParams = new URLSearchParams("page=1&category=philosophy");

    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Should only show Philosophy articles
    await waitFor(() => {
      expect(screen.getByText("Test Article 1")).toBeInTheDocument();
      expect(screen.getByText("Test Article 6")).toBeInTheDocument();
      expect(screen.queryByText("Test Article 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Test Article 3")).not.toBeInTheDocument();
    });

    // Philosophy button should be selected
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    expect(philosophyButton).toHaveClass("bg-philosophy");
  });

  it("displays the correct heading when a category is selected", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Initially should show "Individual Articles"
    expect(screen.getByText("Individual Articles")).toBeInTheDocument();

    // Click on Philosophy filter
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    fireEvent.click(philosophyButton);

    // Should now show "Individual Articles in Philosophy"
    await waitFor(() => {
      expect(
        screen.getByText("Individual Articles in Philosophy")
      ).toBeInTheDocument();
    });
  });

  it("disables pagination arrows when at first or last page", () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // First page - previous arrow should be disabled
    const prevArrow = screen.getByLabelText("Previous Page");
    expect(prevArrow).toHaveClass("pointer-events-none");

    // Next arrow should be enabled (since we have more than 4 articles)
    const nextArrow = screen.getByLabelText("Next Page");
    expect(nextArrow).not.toHaveClass("pointer-events-none");
  });

  it("switches between articles and series tabs", async () => {
    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Initially should be on articles tab
    expect(screen.getByText("Individual Articles")).toBeInTheDocument();

    // Click on Series tab
    const seriesTab = screen.getByRole("button", { name: /Series/i });
    fireEvent.click(seriesTab);

    // Should now show series content
    await waitFor(() => {
      expect(screen.getByText("Article Series")).toBeInTheDocument();
      expect(screen.getByText("Test Series 1")).toBeInTheDocument();
      expect(screen.getByText("Test Series 2")).toBeInTheDocument();
    });

    // Should update URL with tab parameter
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      "",
      "/articles?tab=series&page=1"
    );
  });

  it("initializes with tab from URL", async () => {
    // Set up URL with tab parameter
    mockSearchParams = new URLSearchParams("page=1&tab=series");

    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Should show series content
    await waitFor(() => {
      expect(screen.getByText("Article Series")).toBeInTheDocument();
      expect(screen.getByText("Test Series 1")).toBeInTheDocument();
      expect(screen.getByText("Test Series 2")).toBeInTheDocument();
    });

    // Series tab should be selected
    const seriesTab = screen.getByRole("button", { name: /Series/i });
    expect(seriesTab).toHaveClass("text-brand-color");
  });

  it("filters series by category", async () => {
    // Switch to series tab first
    mockSearchParams = new URLSearchParams("page=1&tab=series");

    render(<Articles articles={mockArticles} series={mockSeries} />);

    // Click on Philosophy filter
    const philosophyButton = screen.getByRole("button", {
      name: /Philosophy/i,
    });
    fireEvent.click(philosophyButton);

    // Should only show Philosophy series
    await waitFor(() => {
      expect(screen.getByText("Test Series 1")).toBeInTheDocument();
      expect(screen.queryByText("Test Series 2")).not.toBeInTheDocument();
    });

    // Should update URL with category parameter
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      "",
      "/articles?tab=series&page=1&category=philosophy"
    );
  });
});
