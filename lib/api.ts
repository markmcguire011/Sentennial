import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";
import { ArticleSeries } from "@/interfaces/article-series";

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
) {
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

// Add this function to get article by slug with specific fields
export function getArticleBySlug(slug: string) {
  return getBySlug<Article>(slug, "articles");
}

/**
 * Get all article series
 */
export function getAllSeries(): ArticleSeries[] {
  const seriesDirectory = join(process.cwd(), "posts/series");

  // Check if directory exists
  if (!fs.existsSync(seriesDirectory)) {
    return [];
  }

  const seriesFiles = fs.readdirSync(seriesDirectory);

  const allSeries = seriesFiles
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = join(seriesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const seriesData = JSON.parse(fileContents) as Omit<
        ArticleSeries,
        "articles"
      > & { articleSlugs: string[] };

      // Get the full article data for each article in the series
      const articles = seriesData.articleSlugs
        ? seriesData.articleSlugs
            .map((slug: string) => {
              const article = getArticleBySlug(slug);
              return article as Article;
            })
            .filter(Boolean)
        : [];

      // Calculate total read time if not provided
      const totalReadTime =
        seriesData.totalReadTime ||
        articles.reduce(
          (total: number, article: Article) => total + (article.readTime || 0),
          0
        );

      // Return the complete series object
      return {
        ...seriesData,
        articles,
        totalReadTime,
        id: file.replace(/\.json$/, ""),
      } as ArticleSeries;
    });

  // Sort by lastUpdated date (newest first)
  return allSeries.sort((a, b) => {
    return (
      new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    );
  });
}

/**
 * Get a specific series by ID
 */
export function getSeriesById(id: string): ArticleSeries | null {
  const seriesDirectory = join(process.cwd(), "posts/series");
  const fullPath = join(seriesDirectory, `${id}.json`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const seriesData = JSON.parse(fileContents) as Omit<
    ArticleSeries,
    "articles"
  > & { articleSlugs: string[] };

  // Get the full article data for each article in the series
  const articles = seriesData.articleSlugs
    ? seriesData.articleSlugs
        .map((slug: string) => {
          const article = getArticleBySlug(slug);
          return article as Article;
        })
        .filter(Boolean)
    : [];

  // Calculate total read time if not provided
  const totalReadTime =
    seriesData.totalReadTime ||
    articles.reduce(
      (total: number, article: Article) => total + (article.readTime || 0),
      0
    );

  // Return the complete series object
  return {
    ...seriesData,
    articles,
    totalReadTime,
    id,
  } as ArticleSeries;
}
