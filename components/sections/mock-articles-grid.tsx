"use client";

import { useMemo } from "react";
import MockArticle from "@/components/ui/mock-article";
import { useRouter } from "next/navigation";
import { getAll } from "@/lib/api";

export default function MockArticlesGrid() {
  const router = useRouter();

  // Fetch articles only once using useMemo
  const articles = useMemo(() => getAll("articles"), []);

  const navigateToRandomArticle = () => {
    if (articles.length === 0) return;

    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];
    router.push(`/articles/${randomArticle.slug}`);
  };

  return (
    <div
      className="relative grid grid-cols-2 md:grid-cols-3 gap-[10px] w-screen md:w-1/2 p-[40px] overflow-hidden [--mouse-x:50%] [--mouse-y:50%] hover:[&>div]:opacity-100"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
      }}
    >
      <div
        className="pointer-events-none absolute -inset-[100px] opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(77,136,184,0.05), transparent 40%)`,
          transform: "translate3d(0,0,0)",
        }}
      />
      <MockArticle numLines={4} onClick={navigateToRandomArticle} />
      <MockArticle numLines={3} onClick={navigateToRandomArticle} />
      <MockArticle numLines={2} onClick={navigateToRandomArticle} />
      <MockArticle
        numLines={1}
        className="hidden md:flex"
        onClick={navigateToRandomArticle}
      />
      <MockArticle
        numLines={3}
        className="hidden md:flex"
        onClick={navigateToRandomArticle}
      />
      <MockArticle numLines={4} onClick={navigateToRandomArticle} />
      <MockArticle
        numLines={2}
        className="hidden md:flex"
        onClick={navigateToRandomArticle}
      />
      <MockArticle numLines={1} onClick={navigateToRandomArticle} />
    </div>
  );
}
