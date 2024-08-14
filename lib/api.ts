import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";

const articlesDirectory = join(process.cwd(), "posts/articles");
const musingsDirectory = join(process.cwd(), "posts/musings");

export function getSlugs(mora: boolean) {
  return mora ?  fs.readdirSync(articlesDirectory) : fs.readdirSync(musingsDirectory);
}

export function getBySlug(slug: string, mora: boolean) {
  const realSlug = slug.replace(/\.md$/, "");
  var fullPath;
  if (mora) {
    fullPath = join(articlesDirectory, `${realSlug}.md`);
  } else {
    fullPath = join(musingsDirectory, `${realSlug}.md`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Article;
}

export function getAll(mora: boolean): Article[] | Musing[] {
  const slugs = getSlugs(mora)
  const posts = slugs
    .map((slug) => getBySlug(slug, mora))
    .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
  return posts;
}

export function getAllArticlesByCategory(category: string): Article[] {
  const slugs = getSlugs(true)
  const posts = slugs
    .map((slug) => getBySlug(slug, true))
    .filter(post => post.categories.includes(category))
    .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
  return posts;
}