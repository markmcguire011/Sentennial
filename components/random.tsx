"use client";

import Link from "next/link"
import { useState, useEffect } from "react"
import { Article } from "@/interfaces/article";
import { Musing } from "@/interfaces/musing";

type Props = {
    collection: Article[] | Musing[];
    type: string;
    customStyles: string;
};
  

export default function Random({ collection, type, customStyles }: Props) {
    const [random, setRandom] = useState<Article | Musing | null>(null);


    useEffect(() => {
        const index = Math.floor(Math.random()*collection.length)
        setRandom(collection[index]);
    }, [collection])

    return (
        <Link href={`/${type + "s"}/${random ? random.slug : ""}`} className={`flex w-full items-center ${customStyles}`}>
            <div className="group bg-white flex justify-between rounded w-full shadow-sm hover:shadow-md hover:animate-pulse p-6 border">
              <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">{`A random ${type}...`}</h1>
              {type == "article" ? <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M22 13v-1a10 10 0 0 0-20 0v1h9v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1h-2v1h-1v-7zM12 4a8.013 8.013 0 0 1 7.938 7H4.062A8.013 8.013 0 0 1 12 4z"/></svg>
              : <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M22 13v-1a10 10 0 0 0-20 0v1h9v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1h-2v1h-1v-7zM12 4a8.013 8.013 0 0 1 7.938 7H4.062A8.013 8.013 0 0 1 12 4z"/></svg>}
            </div>
        </Link>
    )
}