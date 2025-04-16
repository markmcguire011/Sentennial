import { Article } from "@/interfaces/article";
import { ArticleSeries } from "@/interfaces/article-series";

import ArticleButton from "@/components/content/articles/article-button";
import ArticleSeriesButton from "@/components/content/articles/series-buttton/article-series-button";
import Random from "@/components/ui/random";
import RandomDiscovery from "@/components/ui/random-discovery";
import RandomDiscoveryMobile from "@/components/ui/random-discovery-mobile";

type Props = {
  content: (Article | ArticleSeries)[];
  activeTab: "articles" | "series";
  selectedCategory: string | null;
  articles: Article[];
  series: ArticleSeries[];
};

export default function ArticlesContent({
  content,
  activeTab,
  selectedCategory,
  articles,
  series,
}: Props) {
  return (
    <div className="flex flex-col gap-10 pb-10 min-h-[600px] relative">
      <div className="flex justify-between">
        <h1 className="text-3xl md:text-4xl font-bold opacity-75 text-brand-dark">
          {activeTab === "articles" ? "Individual Articles" : "Article Series"}
          {selectedCategory ? ` in ${selectedCategory}` : ""}
        </h1>
        <Random
          collection={activeTab === "articles" ? articles : series}
          type={activeTab === "articles" ? "article" : "series"}
          customStyles="w-auto"
        />
      </div>
      <div className="flex flex-col gap-7 flex-grow min-h-[492px] relative">
        {content.length > 0 ? (
          content.map((item) =>
            activeTab === "series" ? (
              <ArticleSeriesButton
                key={`series-${(item as ArticleSeries).id}`}
                series={item as ArticleSeries}
              />
            ) : (
              <ArticleButton
                key={`article-${(item as Article).slug}`}
                data={item as Article}
                seriesInfo={
                  series.find((s) =>
                    s.articles.some((a) => a.slug === (item as Article).slug)
                  )
                    ? {
                        id: series.find((s) =>
                          s.articles.some(
                            (a) => a.slug === (item as Article).slug
                          )
                        )!.id,
                        title: series.find((s) =>
                          s.articles.some(
                            (a) => a.slug === (item as Article).slug
                          )
                        )!.title,
                        position:
                          series
                            .find((s) =>
                              s.articles.some(
                                (a) => a.slug === (item as Article).slug
                              )
                            )!
                            .articles.findIndex(
                              (a) => a.slug === (item as Article).slug
                            ) + 1,
                        total: series.find((s) =>
                          s.articles.some(
                            (a) => a.slug === (item as Article).slug
                          )
                        )!.articles.length,
                      }
                    : undefined
                }
              />
            )
          )
        ) : (
          <div className="text-center py-10 text-slate-500">
            No {activeTab} found{" "}
            {selectedCategory ? `in ${selectedCategory}` : ""}
          </div>
        )}
        {content.length < 2 && (
          <>
            <div className="hidden md:block">
              <RandomDiscovery />
            </div>
            <div className="block md:hidden">
              <RandomDiscoveryMobile />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
