import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Musings from "@/components/content/musings";
import { Musing } from "@/interfaces/musing";

const mockPush = jest.fn();
const mockPathname = "/musings";
let mockSearchParams = new URLSearchParams("page=1");

jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => mockSearchParams,
}));

const mockPushState = jest.fn();
Object.defineProperty(window, "history", {
  writable: true,
  value: {
    ...window.history,
    pushState: mockPushState,
  },
});

const mockMusings: Musing[] = [
  {
    slug: "test-musing-1",
    title: "Test Musing 1",
    date: "2023-01-01",
    comp_date: new Date("2023-01-01"),
    content: "Test content 1",
  },
  {
    slug: "test-musing-2",
    title: "Test Musing 2",
    date: "2023-01-02",
    comp_date: new Date("2023-01-02"),
    content: "Test content 2",
  },
  {
    slug: "test-musing-3",
    title: "Test Musing 3",
    date: "2023-01-03",
    comp_date: new Date("2023-01-03"),
    content: "Test content 3",
  },
  {
    slug: "test-musing-4",
    title: "Test Musing 4",
    date: "2023-01-04",
    comp_date: new Date("2023-01-04"),
    content: "Test content 4",
  },
  {
    slug: "test-musing-5",
    title: "Test Musing 5",
    date: "2023-01-05",
    comp_date: new Date("2023-01-05"),
    content: "Test content 5",
  },
];

jest.mock("@/lib/api", () => ({
  getAll: jest.fn(() => mockMusings),
  getBySlug: jest.fn((slug) => ({
    title: "Test Musing",
    slug,
    date: "2023-01-01",
    content: "Test content",
  })),
}));

jest.mock("@/components/ui/random", () => ({
  __esModule: true,
  default: ({ type }: { type: string }) => (
    <button>Random {type.charAt(0).toUpperCase() + type.slice(1)}</button>
  ),
}));

jest.mock("@/components/ui/random-discovery", () => ({
  __esModule: true,
  default: () => <div>Random Discovery</div>,
}));

describe("Musings Component", () => {
  beforeEach(() => {
    mockSearchParams = new URLSearchParams("page=1");
    mockPushState.mockClear();
  });

  it("renders all musings with pagination", () => {
    render(<Musings musings={mockMusings} />);

    expect(screen.getByText("Test Musing 1")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 2")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 3")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 4")).toBeInTheDocument();

    expect(screen.queryByText("Test Musing 5")).not.toBeInTheDocument();
  });

  it("handles pagination correctly", async () => {
    render(<Musings musings={mockMusings} />);

    const nextPageButton = screen.getByRole("link", { name: "Next Page" });
    fireEvent.click(nextPageButton);

    expect(mockPushState).toHaveBeenCalledWith({}, "", "/musings?page=2");
  });

  it("disables pagination arrows when at first or last page", () => {
    // First page
    mockSearchParams = new URLSearchParams("page=1");
    const { rerender } = render(<Musings musings={mockMusings} />);

    // Check first page arrows
    const prevArrowFirstPage = screen.getByLabelText("Previous Page");
    expect(prevArrowFirstPage).toHaveClass("pointer-events-none");

    const nextArrowFirstPage = screen.getByRole("link", { name: "Next Page" });
    expect(nextArrowFirstPage).not.toHaveClass("pointer-events-none");

    // Move to last page
    mockSearchParams = new URLSearchParams("page=2");
    rerender(<Musings musings={mockMusings} />);

    // Check last page arrows
    const nextArrowLastPage = screen.getByLabelText("Next Page");
    expect(nextArrowLastPage).toHaveClass("pointer-events-none");

    const prevArrowLastPage = screen.getByRole("link", {
      name: "Previous Page",
    });
    expect(prevArrowLastPage).not.toHaveClass("pointer-events-none");
  });

  it("shows random discovery when there are fewer musings", () => {
    const fewMusings = mockMusings.slice(0, 2);
    render(<Musings musings={fewMusings} />);

    expect(screen.getByText("Random Discovery")).toBeInTheDocument();
  });

  it("renders the page title and description", () => {
    render(<Musings musings={mockMusings} />);

    expect(screen.getByText("Musings.")).toBeInTheDocument();
    expect(
      screen.getByText(/Short reflections loosely based on occurences/i)
    ).toBeInTheDocument();
  });

  it("renders the random musing button", () => {
    render(<Musings musings={mockMusings} />);

    expect(screen.getByText("Random Musing")).toBeInTheDocument();
  });

  it("creates links to individual musing pages", () => {
    render(<Musings musings={mockMusings} />);

    const links = screen.getAllByRole("link");
    const musingLinks = links.filter((link) =>
      link.getAttribute("href")?.startsWith("/musings/test-musing")
    );

    expect(musingLinks.length).toBe(4);
    expect(musingLinks[0]).toHaveAttribute("href", "/musings/test-musing-1");
  });

  it("displays the correct musings when changing pages", () => {
    // Start on page 1
    mockSearchParams = new URLSearchParams("page=1");
    const { rerender } = render(<Musings musings={mockMusings} />);

    // Check first page musings
    expect(screen.getByText("Test Musing 1")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 2")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 3")).toBeInTheDocument();
    expect(screen.getByText("Test Musing 4")).toBeInTheDocument();
    expect(screen.queryByText("Test Musing 5")).not.toBeInTheDocument();

    // Change to page 2
    mockSearchParams = new URLSearchParams("page=2");
    rerender(<Musings musings={mockMusings} />);

    // Check second page musings
    expect(screen.getByText("Test Musing 5")).toBeInTheDocument();
    expect(screen.queryByText("Test Musing 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Musing 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Musing 3")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Musing 4")).not.toBeInTheDocument();
  });
});
