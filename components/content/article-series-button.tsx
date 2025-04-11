"use client";

import Link from "next/link";
import { ArticleSeries } from "@/interfaces/article-series";
import { formatDate } from "@/lib/utils";
import { useMemo } from "react";
import React from "react";

type Props = {
  series: ArticleSeries;
};

// color mapping
const CATEGORY_COLORS = {
  psychology: "#9dc8db",
  "computer-science": "#ddaee4",
  history: "#f1adaf",
  architecture: "#ffda89",
  philosophy: "#9ad4bc",
  default: "#6366f1",
};

export default function ArticleSeriesButton({ series }: Props) {
  const { id, title, description, articles, status, lastUpdated } = series;

  // Calculate total articles and read time
  const articleCount = articles.length;
  const totalReadTime =
    series.totalReadTime ||
    articles.reduce((total, article) => total + (article.readTime || 0), 0);

  // Determine the dominant category - computed once per render
  const { categoryColor } = useMemo(() => {
    if (!articles.length)
      return {
        dominantCategory: "default",
        categoryColor: CATEGORY_COLORS.default,
      };

    const categoryCounts: Record<string, number> = {};

    // Process all categories from all articles
    articles.forEach((article) => {
      if (article.categories && article.categories.length) {
        article.categories.forEach((category) => {
          // Normalize category name to match the format in CATEGORY_COLORS
          const normalizedCategory = category.toLowerCase().replace(" ", "-");
          categoryCounts[normalizedCategory] =
            (categoryCounts[normalizedCategory] || 0) + 1;
        });
      }
    });

    let maxCount = 0;
    let dominantCategory = "default";

    Object.entries(categoryCounts).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantCategory = category;
      }
    });

    // Get the appropriate color for this category
    const categoryColor =
      CATEGORY_COLORS[dominantCategory as keyof typeof CATEGORY_COLORS] ||
      CATEGORY_COLORS.default;

    return { dominantCategory, categoryColor };
  }, [articles]);

  return (
    <Link href={`/series/${id}`} className="block">
      <div
        className="group flex flex-col md:flex-row gap-4 py-4 px-8 rounded-lg border border-slate-200 hover:shadow-md bg-white"
        style={
          {
            "--hover-color": categoryColor,
          } as React.CSSProperties
        }
      >
        {/* <div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 group-hover:text-[var(--hover-color)] transition-colors mr-4"
            style={{
              color: "var(--hover-color)",
              opacity: 0.7,
            }}
          >
            {categoryIcon}
          </div> */}

        <div className="flex flex-col flex-grow">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <h3 className="text-xl text-slate-800 group-hover:text-[var(--hover-color)] group-hover:opacity-80 group-hover:underline">
                {title}
              </h3>
              <span
                className={`text-xs px-2 py-1 text-center rounded-full flex items-center justify-center ${
                  status === "ongoing"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {status === "ongoing" ? "Ongoing" : "Completed"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                {articleCount} article{articleCount !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-2 line-clamp-2">
            {description}
          </p>

          <div className="mt-auto pt-3 flex items-center justify-between text-xs text-slate-500">
            <div className="flex font-mono items-center gap-4">
              <span>Updated: {formatDate(lastUpdated)}</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {totalReadTime} min total
              </span>
            </div>

            <div className="flex -space-x-2">
              {articles.slice(0, 3).map((article, index) => (
                <div
                  key={article.slug}
                  className="w-6 h-6 rounded-full bg-slate-200 border border-white flex items-center justify-center text-xs font-medium"
                  style={{ zIndex: 3 - index }}
                >
                  {article.title.charAt(0)}
                </div>
              ))}
              {articleCount > 3 && (
                <div
                  className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-xs font-medium"
                  style={{ zIndex: 0 }}
                >
                  +{articleCount - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
