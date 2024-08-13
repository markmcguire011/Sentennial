import MoackArticle from "@/components/elements"
import Link from "next/link"
import { getAllArticles } from "@/lib/api"
import ArticleButton from "@/components/article_button"
import RandomArticle from "@/components/random_article"

export default function Page() {
  const articles = getAllArticles()

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col items-center justify-center gap-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 40 40" fill="none">
          <path d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="text-6xl font-bold opacity-75 color-[#1E1E1E]">Sentennial.</h1>
      </div>
      <div className="flex flex-col mx-auto md:flex-row gap-[40px]">
        <div className="flex flex-col md:w-1/2 w-screen gap-[20px] p-[60px]">
          <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">Articles n' Stuff</h1>
          <div className="w-prose">
            <p className="text-xl color-[#1E1E1E">
              Hey I'm Mark! This is a personal project/blog where I record thoughts and stories about random stuff.
              <br />
              <br />
              Here's some of the things that I write about:
            </p>
          </div>
          <div className="flex items-center pl-[30px]">
              <ul className="list-image-none text-xl">
                <li className="underline decoration-brand-color">History</li>
                <li className="underline decoration-brand-color">Computer Science</li>
                <li className="underline decoration-brand-color">Machine Learning</li>
                <li className="underline decoration-brand-color">Pyschology</li>
                <li className="underline decoration-brand-color">Politics</li>
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
        <div className="flex justify-center items-center gap-10">
          <RandomArticle articles = {articles}/>
          <Link href={"/musings"} className="flex w-2/5 items-center">
            <div className="group bg-white flex justify-between rounded w-full shadow-sm hover:shadow-md hover:animate-pulse p-6 border">
              <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">A random musing...</h1>
              <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M22 13v-1a10 10 0 0 0-20 0v1h9v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1h-2v1h-1v-7zM12 4a8.013 8.013 0 0 1 7.938 7H4.062A8.013 8.013 0 0 1 12 4z"/></svg>
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-5 md:gap-10">
          <div className="flex flex-col gap-10 w-2/5">
            {articles.map((article) => (
              <ArticleButton key = {article.slug + "-landing"} data = {article}/>
            ))}
          </div>
          <div className="h-auto w-[3px] rounded bg-slate-200"></div>
          <div className="flex flex-col gap-10 w-2/5">
            <Link href={"/articles"} className="flex flex-col w-full items-center">
              <div className="group bg-white flex flex-col justify-between rounded w-full shadow-sm hover:shadow-md p-6 border">
                <div className="flex justify-between">
                  <h1 className="text-lg group-hover:underline group-hover:decoration-brand-color group-hover:text-brand-color">What is a Chronometer?</h1>
                  <svg className="md:flex hidden group-hover:fill-brand-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                </div> 
                <div className="flex flex-col md:flex-row justify-between">
                  <h1 className="text-lg text-slate-400">i don't know</h1>
                  <h1 className="txt-md text-slate-400">August 10th, 2024</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}  