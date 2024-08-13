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
  const slugs = getArticleSlugs()
  const posts = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
  return posts;
}

export function getAllArticlesByCategory(category: string): Article[] {
  const slugs = getArticleSlugs()
  const posts = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter(post => post.categories.includes(category))
    .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
  return posts;
}