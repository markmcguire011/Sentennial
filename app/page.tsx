import MoackArticle from "@/components/elements"
import { getAll } from "@/lib/api"
import { Article } from "@/interfaces/article"
import ArticleButton from "@/components/article_button"
import Random from "@/components/random"
import MusingButton from "@/components/musing_button"
import Image from "next/image"

import cursor from "@/public/cursor.svg"

export default function Page() {
  const articles = getAll("articles")
  const musings = getAll("musings")

  const recentArticles = articles.slice(0, 4);
  const recentMusings = musings.slice(0, 4);

  

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto text-black">
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 40 40" fill="none">
          <path d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="text-6xl font-bold opacity-75 color-[#1E1E1E]">Sentennial.</h1>
      </div>
      <div className="flex flex-col mx-auto md:flex-row gap-[40px]">
        <div className="flex flex-col md:w-1/2 w-screen gap-[20px] p-[60px]">
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-[#a8a8a8] rounded"></div>
          <div className="relative">
            <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">A Development</h1>
            <div className="-ml-5 absolute inset-0 flex">
              <div className="relative w-[48px] h-[48px]">
                <div className="absolute transform -translate-x-1/2 -rotate-[60deg] bg-[#a8a8a8] w-[1px] h-[24px]"></div>
                <div className="absolute transform -translate-x-1/2 translate-y-1/2 rotate-[60deg] bg-[#a8a8a8] w-[1px] h-[24px]"></div>
              </div>
            </div>
            <div className="ml-[80px] -mt-[5px] absolute inset-0 flex justify-center">
              <div className="relative w-[64px] h-[64px]">
                <div className="absolute inset-x-0 transform -translate-y-1/2 bg-[#a8a8a8] h-8 w-[1px]"></div>
                <div className="absolute inset-y-0 transform -translate-x-1/2 bg-[#a8a8a8] w-8 h-[1px]"></div>
              </div>
            </div>
            <Image className="ml-[160px] mt-8 absolute inset-0 flex justify-center" src={cursor} alt="cursor"/>
          </div>
          <div className="w-2/3 h-[1px] bg-gradient-to-l from-[#a8a8a8] rounded"></div>
          <div className="w-prose">
            <p className="text-xl color-[#1E1E1E">
              Hey I&apos;m Mark! This is a personal project/blog where I record thoughts and stories about various topics.
              <br />
              <br />
              Here&apos;s some of the things that I write about:
            </p>
          </div>
          <div className="flex items-center pl-[30px]">
              <ul className="list-image-none text-xl">
                <li className="underline decoration-brand-color">History</li>
                <li className="underline decoration-brand-color">Computer Science</li>
                <li className="underline decoration-brand-color">Machine Learning</li>
                <li className="underline decoration-brand-color">Pyschology</li>
                <li className="underline decoration-brand-color">Architecture</li>
              </ul>
           </div>
           <p className="text-xl color-[#1E1E1E">
              
            </p>
        </div>
        <div className="grid grid-cols-3 gap-[10px] md:w-1/2 w-screen p-[40px]">
          <MoackArticle numLines={4} />
          <MoackArticle numLines={3} />
          <MoackArticle numLines={2} />
          <MoackArticle numLines={1} />
          <MoackArticle numLines={3} />
          <MoackArticle numLines={4} />
          <MoackArticle numLines={2} />
          <MoackArticle numLines={1} />
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
      </div>
      <div className="flex flex-col gap-8 pb-20">
        <div className="flex items-center justify-center pb-6">
          <h1 className="text-4xl opacity-75 font-bold color-[#1E1E1E]">Discover</h1>
        </div>
        <div className="flex md:flex-row flex-col md:items-start items-center justify-center gap-5 md:gap-10">
          <div className="flex flex-col gap-10 md:w-2/5 w-4/5">
            <Random collection={articles} type="article" customStyles="md:ml-5"/>
            <div className="w-4 h-[3px] rounded bg-slate-200 place-self-center -my-4 md:hidden flex"></div>
            {recentArticles.map((article) => (
              <ArticleButton key = {article.slug + "-landing"} data = {article as Article}/>
            ))}
          </div>
          <div className="h-[42svh] w-[3px] md:flex hidden rounded bg-slate-200 place-self-end"></div>
          <div className="md:hidden flex py-5 gap-3 items-center">
            <div className="w-10 h-[3px] rounded bg-slate-200"></div>
            <h1 className="text-3xl opacity-75 font-bold">Or</h1>
            <div className="w-10 h-[3px] rounded bg-slate-200"></div>
          </div>
          <div className="flex flex-col gap-16 md:w-2/5 w-4/5">
            <Random collection={musings} type="musing" customStyles="md:-ml-5"/>
            <div className="w-4 h-[3px] rounded bg-slate-200 place-self-center -my-10 md:hidden flex"></div>
            {recentMusings.map((musing) => (
              <MusingButton key = {musing.slug + "-landing"} data = {musing}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}  