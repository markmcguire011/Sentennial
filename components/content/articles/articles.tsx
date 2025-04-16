"use client";

import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";

import { usePathname, useSearchParams } from "next/navigation";
import { useArticlesFiltering } from "@/hooks/use-articles-filtering";

import ArticlesHeader from "@/components/content/articles/articles-header";
import ArticlesFilters from "@/components/content/articles/articles-filters";
import ArticlesContent from "@/components/content/articles/articles-content";
import Pagination from "@/components/ui/pagination";

type Props = {
  articles: Article[];
  series?: ArticleSeries[];
};

export default function Articles({ articles, series = [] }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const {
    selectedCategory,
    activeTab,
    handleCategoryClick,
    handleTabChange,
  } = useArticlesFiltering(pathname, searchParams);

  const articlesPerPage = 4;

  const { filteredContent, totalPages } = useFilteredContent(
    articles,
    series,
    selectedCategory,
    activeTab,
    articlesPerPage,
    currentPage
  );

  return (
    <div className="flex flex-col max-w-[1200px] px-[calc(8vw)] mx-auto text-black min-h-[calc(100vh-76px)]">
      <ArticlesHeader />

      <div className="flex items-center justify-center pb-10">
        <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
      </div>

      <ArticlesFilters
        activeTab={activeTab}
        selectedCategory={selectedCategory}
        onTabChange={handleTabChange}
        onCategoryClick={handleCategoryClick}
      />

      <ArticlesContent
        content={filteredContent}
        activeTab={activeTab}
        selectedCategory={selectedCategory}
        articles={articles}
        series={series}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        createPageURL={(pageNumber) => {
          const params = new URLSearchParams(searchParams);
          params.set("page", pageNumber.toString());
          return `${pathname}?${params.toString()}`;
        }}
      />
    </div>
  );
}

function useFilteredContent(
  articles: Article[],
  series: ArticleSeries[],
  selectedCategory: string | null,
  activeTab: "articles" | "series",
  itemsPerPage: number,
  currentPage: number
) {

  const filteredArticles = selectedCategory
    ? articles.filter((article) =>
        article.categories.includes(selectedCategory)
      )
    : articles;

  const filteredSeries = selectedCategory
    ? series.filter((s) =>
        s.articles.some((article) =>
          article.categories.includes(selectedCategory)
        )
      )
    : series;

  const activeContent =
    activeTab === "articles" ? filteredArticles : filteredSeries;

  const sortedContent = [...activeContent].sort((a, b) => {
    const dateA =
      activeTab === "series"
        ? new Date((a as ArticleSeries).lastUpdated).getTime()
        : new Date((a as Article).date).getTime();
    const dateB =
      activeTab === "series"
        ? new Date((b as ArticleSeries).lastUpdated).getTime()
        : new Date((b as Article).date).getTime();
    return dateB - dateA;
  });

  const totalPages = Math.ceil(sortedContent.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContent = sortedContent.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return {
    filteredContent: paginatedContent,
    totalPages,
  };
}
