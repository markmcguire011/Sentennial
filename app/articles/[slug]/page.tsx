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

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getBySlug<Article>(slug, "articles");

  if (!article) {
    return notFound();
  }

  const content = await markdownToReact(article.content || "");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex flex-col px-[calc(8vw)] max-w-[1200px] py-[calc(4vh)] mx-auto text-black">
        <ScrollProgress />
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
        <h1 className="text-l opacity-50 color-brand-dark">{article.date}</h1>
        <div className="flex flex-wrap gap-4">
          {article.categories.map((category) => (
            <Category key={article.slug + category} name={category} />
          ))}
        </div>
      </div>
        <div className={markdownStyles["markdown"]}>{content}</div>
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
