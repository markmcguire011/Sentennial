import Articles from "@/components/content/articles";
import { Article } from "@/interfaces/article";
import { getAll } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const articles = getAll("articles");

  return <Articles articles={articles as Article[]} page={currentPage} />;
}
