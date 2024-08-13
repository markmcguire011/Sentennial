import { remark } from "remark";
import html from "remark-html";
import remarkFootnotes from "remark-footnotes"
import remarkGfm from "remark-gfm"

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .process(markdown);
  return result.toString();
}