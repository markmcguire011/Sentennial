"use client";

import Link from "next/link"
import { getArticleSlugs } from "@/lib/api"
import { useState, useEffect } from "react"
import { Article } from "@/interfaces/article";

type Props = {
    articles: Article[];
};
  

export default function RandomArticle({ articles }: Props) {
    const [random, setRandom] = useState<Article | null>(null);


    useEffect(() => {
        const index = Math.floor(Math.random()*articles.length)
        setRandom(articles[index]);
    }, [articles])

    return (
        <Link href={`/articles/${random ? random.slug : ""}`} className="flex w-2/5 items-center">
            <div className="group bg-white flex justify-between rounded w-full shadow-sm hover:shadow-md hover:animate-pulse p-6 border">
              <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">A random article...</h1>
              <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M22 13v-1a10 10 0 0 0-20 0v1h9v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1h-2v1h-1v-7zM12 4a8.013 8.013 0 0 1 7.938 7H4.062A8.013 8.013 0 0 1 12 4z"/></svg>
            </div>
        </Link>
    )
}