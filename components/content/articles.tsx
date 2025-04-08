"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";
import ArticleButton from "@/components/content/article-button";
import ArticleSeriesButton from "@/components/content/article-series-button";
import { usePathname, useSearchParams } from "next/navigation";
import RandomDiscovery from "@/components/ui/random-discovery";
import Random from "@/components/ui/random";
import PaginationArrow from "@/components/ui/pagination-arrow";

type Props = {
  articles: Article[];
  series?: ArticleSeries[];
};

export default function Articles({ articles, series = [] }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"articles" | "series">("articles");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // get category from URL
  const categoryParam = searchParams.get("category");
  const tabParam = searchParams.get("tab");

  // set initial from URL
  useEffect(() => {
    if (categoryParam) {
      // formatting
      const formattedCategory = categoryParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setSelectedCategory(formattedCategory);
    }

    if (tabParam) {
      if (tabParam === "series" || tabParam === "articles") {
        setActiveTab(tabParam);
      }
    }
  }, [categoryParam, tabParam]);

  const articlesPerPage = 4;

  // Filter articles by category if selected
  const filteredArticles = selectedCategory
    ? articles.filter((article) =>
        article.categories.includes(selectedCategory)
      )
    : articles;

  // Filter series by category if selected
  const filteredSeries = selectedCategory
    ? series.filter((s) =>
        s.articles.some((article) =>
          article.categories.includes(selectedCategory)
        )
      )
    : series;

  // Get content based on active tab
  const activeContent =
    activeTab === "articles" ? filteredArticles : filteredSeries;

  // Sort by date (newest first)
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

  const numPages = Math.ceil(sortedContent.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedContent = sortedContent.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleClick = (category: string): void => {
    if (selectedCategory === category) {
      setSelectedCategory(null);

      // removes category filter
      const params = new URLSearchParams(searchParams);
      params.delete("category");
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    } else {
      setSelectedCategory(category);

      // includes category filter
      const categorySlug = category.toLowerCase().replace(" ", "-");
      const params = new URLSearchParams(searchParams);
      params.set("category", categorySlug);
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    }
  };

  const handleTabChange = (tab: "articles" | "series") => {
    setActiveTab(tab);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    params.set("page", "1"); // Reset to first page when changing tabs
    window.history.pushState({}, "", `${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col max-w-[1200px] px-[calc(8vw)] mx-auto text-black min-h-[calc(100vh-76px)]">
      <div className="pt-20 pb-10">
        <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
          <div className="pr-0 md:pr-10 max-w-full md:max-w-[825px]">
            <h1 className="text-5xl md:text-6xl pb-6 md:pb-10 font-bold opacity-75 text-brand-dark">
              Articles.
            </h1>
            <p className="text-lg md:text-xl opacity-75 color-brand-dark pb-6">
              <b className="font-semibold">
                Long-form pieces with coherent themes and messages.{" "}
              </b>
              These are more structured than musings, and usually have a
              specific point or message that I want to convey.
            </p>
            <div className="block md:hidden mb-6">
              <Image
                src="/articles/alien_building.JPG"
                width={400}
                height={600}
                alt="Cool alien-looking building"
                className="rounded-md w-full max-w-[400px] mx-auto"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-3 md:gap-4 flex-wrap mb-4">
              <FilterButton
                category="History"
                isSelected={selectedCategory === "History"}
                onClick={() => handleClick("History")}
              />
              <FilterButton
                category="Computer Science"
                isSelected={selectedCategory === "Computer Science"}
                onClick={() => handleClick("Computer Science")}
              />
              <FilterButton
                category="Philosophy"
                isSelected={selectedCategory === "Philosophy"}
                onClick={() => handleClick("Philosophy")}
              />
              <FilterButton
                category="Architecture"
                isSelected={selectedCategory === "Architecture"}
                onClick={() => handleClick("Architecture")}
              />
              <FilterButton
                category="Psychology"
                isSelected={selectedCategory === "Psychology"}
                onClick={() => handleClick("Psychology")}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/articles/alien_building.JPG"
              width={400}
              height={600}
              alt="Cool alien-looking building"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-10">
        <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
      </div>

      {/* Tab navigation */}
      <div className="flex border-b border-slate-200 mb-8">
        <button
          onClick={() => handleTabChange("articles")}
          className={clsx(
            "py-3 px-6 font-medium text-lg transition-colors",
            activeTab === "articles"
              ? "text-brand-color border-b-2 border-brand-color"
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          Individual
        </button>
        <button
          onClick={() => handleTabChange("series")}
          className={clsx(
            "py-3 px-6 font-medium text-lg transition-colors",
            activeTab === "series"
              ? "text-brand-color border-b-2 border-brand-color"
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          Series
        </button>
      </div>

      <div className="flex flex-col gap-10 pb-10 min-h-[600px] relative">
        <div className="flex justify-between">
          <h1 className="text-3xl md:text-4xl font-bold opacity-75 text-brand-dark">
            {activeTab === "articles"
              ? "Individual Articles"
              : "Article Series"}
            {selectedCategory ? ` in ${selectedCategory}` : ""}
          </h1>
          <Random
            collection={activeTab === "articles" ? articles : series}
            type={activeTab === "articles" ? "article" : "series"}
            customStyles="w-auto"
          />
        </div>
        <div className="flex flex-col gap-7 flex-grow min-h-[492px] relative">
          {paginatedContent.length > 0 ? (
            paginatedContent.map((item) =>
              activeTab === "series" ? (
                <ArticleSeriesButton
                  key={`series-${(item as ArticleSeries).id}`}
                  series={item as ArticleSeries}
                />
              ) : (
                <ArticleButton
                  key={`article-${(item as Article).slug}`}
                  data={item as Article}
                  seriesInfo={
                    series.find((s) =>
                      s.articles.some((a) => a.slug === (item as Article).slug)
                    )
                      ? {
                          id: series.find((s) =>
                            s.articles.some(
                              (a) => a.slug === (item as Article).slug
                            )
                          )!.id,
                          title: series.find((s) =>
                            s.articles.some(
                              (a) => a.slug === (item as Article).slug
                            )
                          )!.title,
                          position:
                            series
                              .find((s) =>
                                s.articles.some(
                                  (a) => a.slug === (item as Article).slug
                                )
                              )!
                              .articles.findIndex(
                                (a) => a.slug === (item as Article).slug
                              ) + 1,
                          total: series.find((s) =>
                            s.articles.some(
                              (a) => a.slug === (item as Article).slug
                            )
                          )!.articles.length,
                        }
                      : undefined
                  }
                />
              )
            )
          ) : (
            <div className="text-center py-10 text-slate-500">
              No {activeTab} found{" "}
              {selectedCategory ? `in ${selectedCategory}` : ""}
            </div>
          )}
          {paginatedContent.length < 2 && <RandomDiscovery />}
        </div>
      </div>
      <div className="flex justify-between pb-10">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= numPages}
        />
      </div>
    </div>
  );
}

function FilterButton({
  category,
  isSelected,
  onClick,
}: {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  // get slug for mapping
  const categorySlug = category.toLowerCase().replace(" ", "-");

  // color mapping
  const colorMap: Record<
    string,
    { bg: string; hover: string; active: string; text: string }
  > = {
    history: {
      bg: "bg-history",
      hover: "hover:bg-history/40",
      active: "active:bg-history/90",
      text: "text-white",
    },
    "computer-science": {
      bg: "bg-computer-science",
      hover: "hover:bg-computer-science/40",
      active: "active:bg-computer-science/90",
      text: "text-white",
    },
    philosophy: {
      bg: "bg-philosophy",
      hover: "hover:bg-philosophy/40",
      active: "active:bg-philosophy/90",
      text: "text-white",
    },
    architecture: {
      bg: "bg-architecture",
      hover: "hover:bg-architecture/40",
      active: "active:bg-architecture/90",
      text: "text-white",
    },
    psychology: {
      bg: "bg-psychology",
      hover: "hover:bg-psychology/40",
      active: "active:bg-psychology/90",
      text: "text-white",
    },
  };

  const colors = colorMap[categorySlug] || {
    bg: "bg-gray-800",
    hover: "hover:bg-gray-700",
    active: "active:bg-gray-900",
    text: "text-white",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative py-2 px-4 rounded-full font-normal transition-all duration-200 text-md",
        "transform active:scale-95",
        {
          "bg-white text-brand-dark opacity-75": !isSelected,
          [colors.hover]: !isSelected,
          "shadow-md": !isSelected,

          [colors.bg]: isSelected,
          [colors.text]: isSelected,
          "shadow-inner": isSelected,
        }
      )}
    >
      {category}
    </button>
  );
}

function TypeFilterButton({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative py-2 px-4 rounded-full font-normal transition-all duration-200 text-md",
        "transform active:scale-95",
        {
          // not selected
          "bg-white text-brand-dark opacity-75": !isSelected,
          "hover:bg-slate-100": !isSelected,
          "shadow-md": !isSelected,

          // selected
          "bg-brand-color text-white": isSelected,
          "shadow-inner": isSelected,
        }
      )}
    >
      {label}
    </button>
  );
}
