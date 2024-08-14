import Articles from "@/components/articles"
import { Article } from "@/interfaces/article";
import { getAll } from "@/lib/api";

export default async function Page() {
  const articles = getAll(true)

  return (
    <Articles articles ={ articles as Article[]}/>
  )
}