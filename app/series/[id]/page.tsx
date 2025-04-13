import { getSeriesById } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import ArticleButton from "@/components/content/articles/article-button";
import { Article } from "@/interfaces/article";

type Params = Promise<{ id: string }>;

export default async function SeriesPage({ params }: { params: Params }) {
  const { id } = await params;
  const series = getSeriesById(id);

  if (!series) {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-[1200px] min-h-screen mx-auto px-[calc(8vw)] text-black">
      <div className="pt-20 pb-10">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-6xl text-5xl font-bold opacity-75 text-brand-dark">
            {series.title}
          </h1>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                series.status === "ongoing"
                  ? "bg-blue-100 text-blue-800"
                  : series.status === "research"
                  ? "bg-purple-100 text-purple-800"
                  : series.status === "planning"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {series.status === "ongoing"
                ? "Ongoing Series"
                : series.status === "research"
                ? "Researching Series"
                : series.status === "planning"
                ? "Planning Series"
                : "Completed Series"}
            </span>
            <span className="text-slate-500 text-sm">
              Last updated:{" "}
              <span className="font-mono">
                {formatDate(series.lastUpdated)}
              </span>
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1">
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
              {series.totalReadTime} min total
            </span>
          </div>

          <p className="text-xl opacity-75 max-w-3xl">{series.description}</p>
        </div>
      </div>

      <div className="pb-20 min-h-[40vh]">
        <h2 className="text-2xl font-medium opacity-75 text-brand-dark mb-6">
          Articles in this series
        </h2>

        {series.articles.length > 0 ? (
          <div className="flex flex-col gap-6">
            {series.articles.map((article) => (
              <ArticleButton
                key={`article-${(article as Article).slug}`}
                data={article as Article}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-6 bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              {series.status === "ongoing" && (
                <>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
                  <span className="text-sm font-mono uppercase tracking-wider text-slate-500">
                    In Progress
                  </span>
                </>
              )}
              {series.status === "research" && (
                <>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2" />
                  <span className="text-sm font-mono uppercase tracking-wider text-slate-500">
                    Researching
                  </span>
                </>
              )}
              {series.status === "planning" && (
                <>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2" />
                  <span className="text-sm font-mono uppercase tracking-wider text-slate-500">
                    Planning
                  </span>
                </>
              )}
              {series.status === "completed" && (
                <>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <span className="text-sm font-mono uppercase tracking-wider text-slate-500">
                    Archived
                  </span>
                </>
              )}
            </div>

            <p className="text-xl text-center opacity-75 max-w-2xl text-brand-dark mb-2">
              {series.status === "ongoing"
                ? "Articles are being written..."
                : series.status === "research"
                ? "Research in progress..."
                : series.status === "planning"
                ? "Series is being planned..."
                : "This series has been archived."}
            </p>

            <p className="text-sm text-center text-slate-500 max-w-lg">
              {series.status === "ongoing" && (
                <>
                  The first articles in this series are currently being written.
                  {series.estimatedCompletion && (
                    <> Expected completion: {series.estimatedCompletion}.</>
                  )}
                </>
              )}
              {series.status === "research" && (
                <>
                  This series is currently in the research phase.
                  {series.progress && (
                    <> Research is approximately {series.progress}% complete.</>
                  )}
                  {series.estimatedCompletion && (
                    <>
                      {" "}
                      Expected to begin publishing: {series.estimatedCompletion}
                      .
                    </>
                  )}
                </>
              )}
              {series.status === "planning" && (
                <>
                  This series is in the early planning stages.
                  {series.estimatedCompletion && (
                    <>
                      {" "}
                      Research is expected to begin soon with publication
                      targeted for {series.estimatedCompletion}.
                    </>
                  )}
                </>
              )}
              {series.status === "completed" && (
                <>
                  This series has been completed but all articles have been
                  archived or moved.
                </>
              )}
            </p>

            {series.progress && series.status !== "completed" && (
              <div className="mt-6 w-full max-w-md">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Progress</span>
                  <span>{series.progress}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      series.status === "ongoing"
                        ? "bg-blue-500"
                        : series.status === "research"
                        ? "bg-purple-500"
                        : "bg-yellow-500"
                    }`}
                    style={{ width: `${series.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-brand-color hover:text-brand-dark transition-colors"
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
        </div>
      </div>
    </div>
  );
}
