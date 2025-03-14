"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

type Book = {
  title: string;
  author: string;
  thoughts: string;
  category: "Philosophy" | "Engineering" | "Science" | "Literature";
  status: "reading" | "completed" | "queued";
  rating: number;
  coverImage?: string;
  relevantProjects?: string[];
  keyTakeaways?: string[];
  dateCompleted?: string;
};

export default function Library() {
  const [selectedCategory, setSelectedCategory] =
    useState<Book["category"]>("Philosophy");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const books: Book[] = [
    {
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      thoughts: "A fascinating exploration of consciousness and free will",
      category: "Philosophy",
      status: "completed",
      rating: 5,
      keyTakeaways: [
        "The paradox of human consciousness",
        "The limits of rational self-interest",
        "The desire for free will vs determinism",
      ],
      dateCompleted: "2024-01-15",
    },
    // Add more books...
  ];

  const categories: Book["category"][] = [
    "Philosophy",
    "Engineering",
    "Science",
    "Literature",
  ];

  return (
    <div className="px-[calc(8vw)] pb-20">
      <div className="flex justify-between items-center mb-8">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-slate-100 p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  clsx(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    selected
                      ? "bg-white text-brand-color shadow"
                      : "text-slate-700 hover:bg-white/[0.12] hover:text-brand-color"
                  )
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={clsx(
              "p-2 rounded",
              viewMode === "grid" ? "bg-brand-color text-white" : "bg-slate-100"
            )}
          >
            <GridIcon />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={clsx(
              "p-2 rounded",
              viewMode === "list" ? "bg-brand-color text-white" : "bg-slate-100"
            )}
          >
            <ListIcon />
          </button>
        </div>
      </div>

      <motion.div
        layout
        className={clsx(
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
        )}
      >
        {books
          .filter((book) => book.category === selectedCategory)
          .map((book) => (
            <motion.div
              layout
              key={book.title}
              className={clsx(
                "bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
                viewMode === "list" ? "flex gap-6" : "flex flex-col"
              )}
            >
              <div className="relative aspect-[3/4] bg-slate-100">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <BookIcon />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <StatusBadge status={book.status} />
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-slate-600">{book.author}</p>
                <p className="text-sm">{book.thoughts}</p>
                <div className="flex gap-1">
                  {Array.from({ length: book.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                {book.keyTakeaways && (
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold mb-1">
                      Key Takeaways
                    </h4>
                    <ul className="text-sm list-disc list-inside">
                      {book.keyTakeaways.map((takeaway, i) => (
                        <li key={i}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}

function GridIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-yellow-400"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: Book["status"] }) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded-full text-xs font-medium",
        status === "reading" && "bg-green-100 text-green-800",
        status === "completed" && "bg-blue-100 text-blue-800",
        status === "queued" && "bg-yellow-100 text-yellow-800"
      )}
    >
      {status}
    </span>
  );
}
