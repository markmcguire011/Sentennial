"use client";

import { useState } from "react";
import { Book } from "@/interfaces/book";


type Props = {
  books: Book[];
};

export default function FinishedBooks({ books }: Props) {
  const [showAllFinished, setShowAllFinished] = useState(false);

  return (
    <div className="mb-1">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-lg font-medium opacity-75 text-brand-dark">
          Recently Finished
        </h3>
        {/* <button
          className="text-xs text-brand-color hover:text-brand-dark transition-colors"
          onClick={() => setShowAllFinished(!showAllFinished)}
        >
          {showAllFinished ? "Show less" : "Show all"}
        </button> */}
      </div>
      <div
        className={`grid grid-cols-1 gap-2 transition-all duration-300 ${
          showAllFinished ? "max-h-[1000px]" : "max-h-[120px]"
        } overflow-hidden`}
      >
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border flex items-center gap-3 group hover:bg-white/80 transition-colors w-fit inline-flex"
          >
            <div className="flex flex-row gap-3 items-center">
              <h4 className="font-medium text-sm text-brand-dark">
                {book.title}
              </h4>
              <p className="text-xs text-brand-dark opacity-75">
                by {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
