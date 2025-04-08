"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";
import { ArticleSeries } from "@/interfaces/article-series";

type Props = {
  collection: (Article | Musing | ArticleSeries)[];
  type: string;
  customStyles?: string;
};

export default function Random({ collection, type, customStyles }: Props) {
  const [random, setRandom] = useState<Article | Musing | ArticleSeries | null>(
    null
  );

  useEffect(() => {
    if (collection && collection.length > 0) {
      const index = Math.floor(Math.random() * collection.length);
      setRandom(collection[index]);
    }
  }, [collection]);

  if (!random) {
    return null;
  }

  // Determine the correct URL path based on content type
  let path;
  if (type === "series") {
    path = `/series/${(random as ArticleSeries).id}`;
  } else {
    // For articles and musings, use the plural form and slug
    path = `/${type + "s"}/${(random as Article | Musing).slug}`;
  }

  return (
    <Link href={path} className={`flex items-center ${customStyles}`}>
      <div className="group flex items-center gap-2 text-sm text-slate-400 hover:text-brand-color transition-colors">
        <span className="opacity-75">random</span>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M11 18h6" />
        </svg>
      </div>
    </Link>
  );
}
