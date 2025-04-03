import { getAll, getBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { Musing } from "@/interfaces/musing";
import markdownStyles from "@/components/shared/markdown-styles.module.css";
import markdownToReact from "@/lib/markdownToReact";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

type Params = Promise<{ slug: string }>;

export default async function MusingPage({ params }: { params: Params }) {
  const { slug } = await params;
  const musing = getBySlug<Musing>(slug, "musings");

  if (!musing) {
    return notFound();
  }

  const content = await markdownToReact(musing.content || "");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex flex-col px-[calc(8vw)] max-w-[1200px] mx-auto py-[calc(4vh)] text-black">
        <div className="flex flex-col gap-2 pb-6">
          <h1 className="text-6xl font-bold opacity-75 color-brand-dark">
          {musing.title}
        </h1>
      </div>
      <div className="flex">
        <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
      </div>
      {/* <div className="flex gap-6 items-center p-2">
                <h1 className="text-l opacity-50 color-brand-dark">{article.date}</h1>
                {article.categories.map((category) => (
                    <Category key = {article.slug + category} name = {category} />
                ))}
            </div> */}
      <div className="flex gap-6 items-center p-2">
        <h1 className="text-l opacity-50 color-brand-dark">{musing.date}</h1>
      </div>
        <div className={markdownStyles["markdown"]}>{content}</div>
      </div>
    </Suspense>
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const musing = getBySlug(slug, "musings");

  if (!musing) {
    return notFound();
  }

  const title = `${musing.title} | Sentennial`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const musings = getAll("musings");

  return musings.map((musing) => ({
    slug: musing.slug,
  }));
}
