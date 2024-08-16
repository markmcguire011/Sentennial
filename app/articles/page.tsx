import Articles from "@/components/articles"
import { Article } from "@/interfaces/article";
import { getAll } from "@/lib/api";

export default async function Page({ searchParams } : {
  searchParams?: {
    page?: number
  }
}) {

  const currentPage = Number(searchParams?.page) || 1;
  const articles = getAll("articles")

  return (
    <Articles articles ={ articles as Article[]} page = { currentPage }/>
  )
}