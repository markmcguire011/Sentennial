import { useState } from "react";
import CurrentlyReading from "@/components/content/about/currently-reading";
import ReadingQueue from "@/components/content/about/reading-queue";
import FinishedBooks from "@/components/content/about/finished-books";
import { Book } from "@/interfaces/book";
export default function BookshelfSection() {
  const currentlyReading: Book[] = [
    {
      title: "Citizens: A Chronicle of the French Revolution",
      author: "Simon Schama",
      progress: 14,
      emoji: "🇫🇷",
      color: "bg-purple-100",
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      progress: 2,
      emoji: "📖",
      color: "bg-amber-100",
    },
  ];

  const readingQueue: Book[] = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      emoji: "🧩",
      color: "bg-green-100",
    },
    {
      title: "The Age of AI",
      author: "Henry Kissinger, Eric Schmidt, Daniel Huttenlocher",
      emoji: "🧠",
      color: "bg-blue-100",
    },
    {
      title: "Foreign Bodies: Pandemics, Vaccines, and the Health of Nations",
      author: "Simon Schama",
      emoji: "🔬",
      color: "bg-red-100",
    },
  ];

  const finishedBooks: Book[] = [
    {
      title: "Notes from the Underground",
      author: "Fyodor Dostoevsky",
      progress: 100,
      emoji: "📝",
      color: "bg-blue-100",
    },
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      emoji: "🚀",
      color: "bg-green-100",
    },
    {
      title: "The Art of Fielding",
      author: "Chad Harbach",
      emoji: "🏌️‍♂️",
      color: "bg-red-100",
    },
    
  ];

  return (
    <div>
      <div className="mt-8 md:mt-10 mb-2">
        <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
          My Bookshelf
        </h2>
        <p className="mt-2 mb-4 text-base md:text-lg opacity-75">
          I spend a lot of time reading and trying to learn about all the
          awesome stuff we as humans have created, shaped, and have yet to
          build. You learn a lot about yourself through the act of reading, so
          here&apos;s what&apos;s currently on my list:
        </p>
      </div>
      <CurrentlyReading books={currentlyReading} />
      <ReadingQueue books={readingQueue} />
      <FinishedBooks books={finishedBooks} />
    </div>
  );
}
