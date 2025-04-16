import Articles from "@/components/content/articles/articles";
import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";
import { getAll, getAllSeries } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default async function Page() {
  return (
    <div className="w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <ArticlesContent />
      </Suspense>
    </div>
  );
}

async function ArticlesContent() {
  const articles = await getAll("articles");
  const series = await getAllSeries();

  return (
    <Articles
      articles={articles as Article[]}
      series={series as ArticleSeries[]}
    />
  );
}
