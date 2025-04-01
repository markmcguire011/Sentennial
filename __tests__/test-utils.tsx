import React from "react";
import { render as rtlRender } from "@testing-library/react";

// Mock Next.js navigation hooks
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ""} />;
  },
}));

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      animate,
      initial,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    }: any) => <div {...props}>{children}</div>,
    p: ({
      children,
      animate,
      initial,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    }: any) => <p {...props}>{children}</p>,
    h1: ({
      children,
      animate,
      initial,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    }: any) => <h1 {...props}>{children}</h1>,
    form: ({
      children,
      animate,
      initial,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    }: any) => <form {...props}>{children}</form>,
  },
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
  useTransform: () => 0,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// Mock API functions
jest.mock("@/lib/api", () => ({
  getAll: (type: string) => {
    if (type === "articles") {
      return [
        {
          title: "Test Article",
          subtitle: "Test Subtitle",
          slug: "test-article",
          date: "2023-01-01",
          categories: ["History", "Philosophy"],
          content: "Test content",
        },
      ];
    }
    if (type === "musings") {
      return [
        {
          title: "Test Musing",
          slug: "test-musing",
          date: "2023-01-01",
          content: "Test content",
        },
      ];
    }
    return [];
  },
  getBySlug: (slug: string) => ({
    title: "Test Article",
    subtitle: "Test Subtitle",
    slug,
    date: "2023-01-01",
    categories: ["History", "Philosophy"],
    content: "Test content",
  }),
}));

// Mock markdown conversion
jest.mock("@/lib/markdownToReact", () => {
  return {
    __esModule: true,
    default: jest.fn(async (markdown: string) => (
      <div>Converted markdown content</div>
    )),
  };
});

export * from "@testing-library/react";
