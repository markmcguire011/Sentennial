import Articles from "@/components/content/articles";
import { Article } from "@/interfaces/article";
import { getAll } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

type Params = Promise<{ page: string }>;

export default async function Page({ params }: { params: Params }) {
  const { page } = await params;
  const currentPage = Number(page) || 1;
  const articles = getAll("articles");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Articles articles={articles as Article[]} page={currentPage} />
    </Suspense>
  );
}
