import { getAll } from "@/lib/api";
import ArticleButton from "@/components/article_button";
import Random from "@/components/random";
import MusingButton from "@/components/musing_button";
import MockArticlesGrid from "@/components/mock-articles-grid";
import IntroSection from "@/components/intro-section";
import { Article } from "@/interfaces/article";
import AnimatedHero from "@/components/animated-hero";

export default function Page() {
  const articles = getAll("articles");
  const musings = getAll("musings");
  const recentArticles = articles.slice(0, 4);
  const recentMusings = musings.slice(0, 4);

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto text-black">
      <div className="min-h-[101vh] flex flex-col items-center justify-center relative">
        <AnimatedHero />

        <div className="absolute -bottom-1 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <p className="text-sm">Scroll to explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col mx-auto md:flex-row gap-[40px]">
          <IntroSection />
          <MockArticlesGrid />
        </div>
        <div className="flex flex-col gap-8 pb-20 px-4 md:px-8">
          <div className="flex items-center justify-center pb-6">
            <h1 className="text-4xl opacity-75 font-bold color-[#1E1E1E]">
              Discover
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold opacity-75">Articles</h2>
                <div className="h-[1px] flex-grow bg-slate-200"></div>
                <Random
                  collection={articles}
                  type="article"
                  customStyles="w-auto"
                />
              </div>
              <div className="flex flex-col gap-6">
                {recentArticles.map((article) => (
                  <ArticleButton
                    key={article.slug + "-landing"}
                    data={article as Article}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold opacity-75">Musings</h2>
                <div className="h-[1px] flex-grow bg-slate-200"></div>
                <Random
                  collection={musings}
                  type="musing"
                  customStyles="w-auto"
                />
              </div>
              <div className="flex flex-col gap-6">
                {recentMusings.map((musing) => (
                  <MusingButton key={musing.slug + "-landing"} data={musing} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
