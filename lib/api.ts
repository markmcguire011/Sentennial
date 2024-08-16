import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";

// const postsDirectory = (type: "articles" | "musings") =>
//   join(process.cwd(), `posts/${type}`);

// const articlesDirectory = join(process.cwd(), "posts/articles");
// const musingsDirectory = join(process.cwd(), "posts/musings");

// export function getSlugs(mora: boolean) {
//   return mora ?  fs.readdirSync(articlesDirectory) : fs.readdirSync(musingsDirectory);
// }

// export function getBySlug(slug: string, mora: boolean) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(mora ? articlesDirectory: musingsDirectory, `${realSlug}.md`)
//   try {
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const { data, content } = matter(fileContents);

//     if (mora) {
//       return { ...data, slug: realSlug, content } as Article ;
//     } else {
//       return { ...data, slug: realSlug, content } as Musing ;
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
//         console.error('No such post');
//       } else {
//         console.error('An error occurred:', error.message);
//       }
//     }
//     else {
//       console.log('An unknown error occured')
//     }
//   }
// }

// export function getAll(mora: boolean): Article[] | Musing[] {
//   const slugs = getSlugs(mora)
//   const posts = slugs
//     .map((slug) => getBySlug(slug, mora))
//     .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
//   return posts;
// }

const postsDirectory = (type: "articles" | "musings") =>
  join(process.cwd(), `posts/${type}`);

export function getSlugs(type: "articles" | "musings") {
  return fs.readdirSync(postsDirectory(type));
}

export function getBySlug<T extends Article | Musing>(
  slug: string,
  type: "articles" | "musings"
): T | undefined{
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(type), `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    console.error(`Post not found - ${slug}`);
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as T;
}

export function getAll<T extends Article | Musing>(
  type: "articles" | "musings"
): T[] {
  const slugs = getSlugs(type);
  const posts = slugs
    .map((slug) => getBySlug<T>(slug, type))
    .filter((post): post is T => post !== undefined)
    .sort((post1, post2) => (post1.comp_date > post2.comp_date ? -1 : 1));
  return posts;
}