import React from "react";
import { Article } from "@/interfaces/article";

type Props = {
  articles: Article[];
  maxDisplay?: number;
};

export default function ArticleAvatars({ articles, maxDisplay = 3 }: Props) {
  const displayCount = Math.min(maxDisplay, articles.length);
  const hasMore = articles.length > maxDisplay;

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="hidden sm:flex -space-x-2 ml-auto sm:ml-0">
      {articles.slice(0, displayCount).map((article, index) => (
        <div
          key={article.slug}
          className="w-6 h-6 rounded-full bg-slate-200 border border-white flex items-center justify-center text-xs font-medium"
          style={{ zIndex: displayCount - index }}
        >
          {article.title.charAt(0)}
        </div>
      ))}
      {hasMore && (
        <div
          className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-xs font-medium"
          style={{ zIndex: 0 }}
        >
          +{articles.length - displayCount}
        </div>
      )}
    </div>
  );
}