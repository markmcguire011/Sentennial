import { getAll, getAllSeries } from "@/lib/api";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sentennial.org";

  // statics
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/musings`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alexandria`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // articles
  const articles = getAll("articles");
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // musings
  const musings = getAll("musings");
  const musingRoutes = musings.map((musing) => ({
    url: `${baseUrl}/musings/${musing.slug}`,
    lastModified: new Date(musing.date || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // series
  const series = getAllSeries();
  const seriesRoutes = series.map((seriesItem) => ({
    url: `${baseUrl}/series/${seriesItem.id}`,
    lastModified: new Date(seriesItem.lastUpdated || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // routes
  return [...staticRoutes, ...articleRoutes, ...musingRoutes, ...seriesRoutes];
}
