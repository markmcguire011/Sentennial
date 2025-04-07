import Articles from "@/components/content/articles";
import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";
import { getAll, getAllSeries } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

const articles = getAll("articles");
const series = getAllSeries();

export default async function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Articles
        articles={articles as Article[]}
        series={series as ArticleSeries[]}
      />
    </Suspense>
  );
}
