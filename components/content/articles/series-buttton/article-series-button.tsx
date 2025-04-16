"use client";

import Link from "next/link";
import { ArticleSeries } from "@/interfaces/article-series";
import { formatDate } from "@/lib/utils";
import { useMemo } from "react";
import React from "react";
import StatusBadge from "@/components/content/articles/series-buttton/status-badge";
import ArticleCount from "@/components/content/articles/series-buttton/article-count";
import ReadTime from "@/components/content/articles/series-buttton/read-time";
import ArticleAvatars from "@/components/content/articles/series-buttton/article-avatars";
import { categoryColors } from "@/lib/constants";

type Props = {
  series: ArticleSeries;
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
        categoryColor: categoryColors.default,
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
      categoryColors[dominantCategory as keyof typeof categoryColors] ||
      categoryColors.default;

    return { dominantCategory, categoryColor };
  }, [articles]);

  return (
    <Link href={`/series/${id}`} className="block">
      <div
        className="group flex flex-col py-4 px-4 sm:px-8 rounded-lg border border-slate-200 hover:shadow-md bg-white"
        style={
          {
            "--hover-color": categoryColor,
          } as React.CSSProperties
        }
      >
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <h3 className="text-lg sm:text-xl text-slate-800 group-hover:text-[var(--hover-color)] group-hover:opacity-80 group-hover:underline">
                {title}
              </h3>
              <StatusBadge status={status} />
            </div>
            <ArticleCount count={articleCount} />
          </div>

          <p className="text-sm text-slate-500 mt-2 line-clamp-2">
            {description}
          </p>

          <div className="mt-auto pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row font-mono items-start sm:items-center gap-2 sm:gap-4">
              <span className="hidden sm:block">
                Updated: {formatDate(lastUpdated)}
              </span>
              <ReadTime minutes={totalReadTime} />
            </div>

            <ArticleAvatars articles={articles} maxDisplay={3} />
          </div>
        </div>
      </div>
    </Link>
  );
}