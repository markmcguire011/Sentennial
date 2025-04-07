import { getAll, getBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { Article } from "@/interfaces/article";
import Category from "@/components/content/category";
import markdownStyles from "@/components/shared/markdown-styles.module.css";
import markdownToReact from "@/lib/markdownToReact";
import ScrollProgress from "@/components/ui/scroll-progress";
import "katex/dist/katex.min.css";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import SeriesBadge from "@/components/ui/series-badge";
import Link from "next/link";
import { getAllSeries } from "@/lib/api";

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getBySlug<Article>(slug, "articles");

  if (!article) {
    return notFound();
  }

  const content = await markdownToReact(article.content || "");

  // Check if this article is part of a series
  const allSeries = getAllSeries();
  const seriesInfo = allSeries.find((series) =>
    series.articles.some((a) => a.slug === article.slug)
  );

  let seriesBadgeInfo;
  if (seriesInfo) {
    const articleIndex = seriesInfo.articles.findIndex(
      (a) => a.slug === article.slug
    );
    seriesBadgeInfo = {
      id: seriesInfo.id,
      title: seriesInfo.title,
      position: articleIndex + 1,
      total: seriesInfo.articles.length,
    };
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex flex-col px-[calc(8vw)] max-w-[1200px] py-[calc(4vh)] mx-auto text-black">
        <ScrollProgress />
        {seriesBadgeInfo && (
          <div className="mb-4">
            <SeriesBadge
              seriesId={seriesBadgeInfo.id}
              seriesTitle={seriesBadgeInfo.title}
              position={seriesBadgeInfo.position}
              total={seriesBadgeInfo.total}
            />
          </div>
          )}
        <div className="flex flex-col gap-2 pb-6">
          <h1 className="text-6xl break-words font-bold opacity-75 color-brand-dark">
            {article.title}
          </h1>
          <h1 className="text-4xl break-words font-semibold opacity-50 color-brand-dark">
            {article.subtitle}
          </h1>
        </div>
        <div className="flex">
          <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-items-start gap-4 py-2">
          <div className="flex items-center gap-4 text-slate-500">
            <time dateTime={article.date}>{article.date}</time>
            {article.readTime && (
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {article.readTime} min read
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            {article.categories.map((category) => (
              <Category key={article.slug + category} name={category} />
            ))}
          </div>
        </div>
        <div className={markdownStyles["markdown"]}>{content}</div>
      </div>

      <div className="px-[calc(8vw)] pb-20">
        <div className="flex justify-between items-center border-t border-slate-200 pt-6">
          <Link
            href="/articles"
            className="flex items-center gap-2 text-brand-color hover:text-brand-dark transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to all articles
          </Link>

          {seriesInfo && (
            <Link
              href={`/series/${seriesInfo.id}`}
              className="flex items-center gap-2 text-brand-color hover:text-brand-dark transition-colors"
            >
              View full series
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </Suspense>
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getBySlug(slug, "articles");

  if (!article) {
    return notFound();
  }

  const title = `${article.title} | Sentennial`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const articles = getAll("articles");

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
