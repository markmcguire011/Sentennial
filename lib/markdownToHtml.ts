import { remark } from "remark";
import html from "remark-html";
import remarkFootnotes from "remark-footnotes"

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkFootnotes, { inlineNotes: true })
    .use(html)
    .process(markdown);
  return result.toString();
}