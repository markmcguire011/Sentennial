"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Article } from "@/interfaces/article";
import ArticleButton from "@/components/content/article_button";
import { usePathname, useSearchParams } from "next/navigation";
import RandomDiscovery from "@/components/ui/random-discovery";
import Random from "@/components/ui/random";
import PaginationArrow from "@/components/ui/pagination-arrow";

type Props = {
  articles: Article[];
};

export default function Articles({ articles }: Props) {
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // get category from URL
  const categoryParam = searchParams.get("category");

  // set initial from URL
  useEffect(() => {
    if (categoryParam) {
      // formatting
      const formattedCategory = categoryParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setSelectedCategory(formattedCategory);
      setContent(formattedCategory);
    }
  }, [categoryParam]);

  const articlesPerPage = 4;

  const filteredArticles = selectedCategory
    ? articles.filter((article) =>
        article.categories.includes(selectedCategory)
      )
    : articles;

  const numPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
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
      setContent("");

      // removes category filter
      const params = new URLSearchParams(searchParams);
      params.delete("category");
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    } else {
      setSelectedCategory(category);
      setContent(category);

      // includes category filter
      const categorySlug = category.toLowerCase().replace(" ", "-");
      const params = new URLSearchParams(searchParams);
      params.set("category", categorySlug);
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    }
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
            <div className="flex gap-3 md:gap-4 flex-wrap">
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
      <div className="flex flex-col gap-10 pb-10 min-h-[600px] relative">
        <div className="flex justify-between">
          <h1 className="text-3xl md:text-4xl font-bold opacity-75 text-brand-dark">
            Latest {selectedCategory ? selectedCategory : ""}
          </h1>

          <Random collection={articles} type="article" customStyles="w-auto" />
        </div>
        <div className="flex flex-col gap-7 flex-grow min-h-[492px] relative">
          {paginatedArticles.map((article) => (
            <ArticleButton
              key={article.slug + "-article"}
              data={article as Article}
            />
          ))}
          {paginatedArticles.length < 2 && <RandomDiscovery />}
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
        "relative py-2 px-4 rounded-full font-medium transition-all duration-200 text-md",
        "transform active:scale-95",
        {
          // not selected
          "bg-white text-brand-dark opacity-85": !isSelected,
          [colors.hover]: !isSelected,
          "shadow-md": !isSelected,

          // selected
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
