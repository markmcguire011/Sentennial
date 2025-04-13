import { Article } from "@/interfaces/article";

export interface ArticleSeries {
  id: string;
  title: string;
  description: string;
  articles: Article[];
  totalReadTime?: number;
  status: "planning" | "research" | "ongoing" | "completed";
  lastUpdated: string;
  estimatedCompletion?: string;
  link?: string;
  progress?: number;
}
