"use client";

import { useState, useEffect } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";

export function useArticlesFiltering(
  pathname: string,
  searchParams: ReadonlyURLSearchParams
) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"articles" | "series">("articles");

  // params from url
  const categoryParam = searchParams.get("category");
  const tabParam = searchParams.get("tab");

  useEffect(() => {
    if (categoryParam) {

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

  const handleCategoryClick = (category: string): void => {
    if (selectedCategory === category) {
      setSelectedCategory(null);

      const params = new URLSearchParams(searchParams);
      params.delete("category");
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    } else {
      setSelectedCategory(category);

      const categorySlug = category.toLowerCase().replace(" ", "-");
      const params = new URLSearchParams(searchParams);
      params.set("category", categorySlug);
      window.history.pushState({}, "", `${pathname}?${params.toString()}`);
    }
  };

  const handleTabChange = (tab: "articles" | "series") => {
    setActiveTab(tab);

    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    params.set("page", "1");
    window.history.pushState({}, "", `${pathname}?${params.toString()}`);
  };

  return {
    selectedCategory,
    activeTab,
    setSelectedCategory,
    setActiveTab,
    handleCategoryClick,
    handleTabChange,
  };
}
