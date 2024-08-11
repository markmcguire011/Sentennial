import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Article } from "@/interfaces/article";

const postsDirectory = join(process.cwd(), "posts");

export function getArticleSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Article;
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const posts = slugs
    .map((slug) => getArticleBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}