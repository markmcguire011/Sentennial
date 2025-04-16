import FilterButton from "@/components/content/articles/filter-button";
import clsx from "clsx";

/* eslint-disable no-unused-vars */

type Props = {
  activeTab: "articles" | "series";
  selectedCategory: string | null;
  onTabChange: (tab: "articles" | "series") => void;
  onCategoryClick: (category: string) => void;
};

export default function ArticlesFilters({
  activeTab,
  selectedCategory,
  onTabChange,
  onCategoryClick,
}: Props) {
  return (
    <>
      {/* Category filters */}
      <div className="flex gap-3 md:gap-4 flex-wrap mb-8">
        <FilterButton
          category="History"
          isSelected={selectedCategory === "History"}
          onClick={() => onCategoryClick("History")}
        />
        <FilterButton
          category="Computer Science"
          isSelected={selectedCategory === "Computer Science"}
          onClick={() => onCategoryClick("Computer Science")}
        />
        <FilterButton
          category="Philosophy"
          isSelected={selectedCategory === "Philosophy"}
          onClick={() => onCategoryClick("Philosophy")}
        />
        <FilterButton
          category="Architecture"
          isSelected={selectedCategory === "Architecture"}
          onClick={() => onCategoryClick("Architecture")}
        />
        <FilterButton
          category="Psychology"
          isSelected={selectedCategory === "Psychology"}
          onClick={() => onCategoryClick("Psychology")}
        />
      </div>

      {/* Tab navigation */}
      <div className="flex border-b border-slate-200 mb-8">
        <button
          onClick={() => onTabChange("articles")}
          className={clsx(
            "py-3 px-6 font-medium text-lg transition-colors border-b-2",
            activeTab === "articles"
              ? "border-brand-color"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          Individual
        </button>
        <button
          onClick={() => onTabChange("series")}
          className={clsx(
            "py-3 px-6 font-medium text-lg transition-colors border-b-2",
            activeTab === "series"
              ? "border-brand-color"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          Series
        </button>
      </div>
    </>
  );
}
