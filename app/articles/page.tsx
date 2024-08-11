import Articles from "@/components/articles"
import { getAllArticles } from "@/lib/api";

export default async function Page() {
  const articles = getAllArticles()

  return (
    <Articles articles ={ articles }/>
  )
}