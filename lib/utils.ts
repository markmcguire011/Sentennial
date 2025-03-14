import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}.${day}.${year}`;
}

export function calculateWritingStreak(
  articles: Article[],
  musings: Musing[]
): number {
  const allContent = [...articles, ...musings];

  // Sort by date descending
  const sortedDates = allContent
    .map((content) => new Date(content.date))
    .sort((a, b) => b.getTime() - a.getTime());

  if (sortedDates.length === 0) return 0;

  let streak = 1;
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

  // Start from the most recent date
  for (let i = 0; i < sortedDates.length - 1; i++) {
    const dayDiff = Math.round(
      (sortedDates[i].getTime() - sortedDates[i + 1].getTime()) / oneDay
    );

    if (dayDiff <= 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
