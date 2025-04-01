import Articles from "@/components/content/articles";
import { Article } from "@/interfaces/article";
import { getAll } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

const articles = getAll("articles");

export default async function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Articles articles={articles as Article[]} />
    </Suspense>
  );
}
