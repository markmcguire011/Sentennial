"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Article } from '@/interfaces/article';
import ArticleButton from './article_button';

type Props = {
  articles: Article[]
}

export default function Articles({ articles }: Props) {
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleClick = (category: string): void => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setContent("")
    } else {
      setSelectedCategory(category);
      setContent(category)
    }
  };

  const filteredArticles = selectedCategory 
    ? articles.filter(article => article.categories.includes(selectedCategory))
    : articles;

  return (
    <div className="flex flex-col justify-center gap-[20px] px-[calc(12vw)]">
        <div className="pt-20">
          <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
            <div className="pr-10 max-w-[825px]">
              <h1 className="text-6xl pb-10 font-bold opacity-75 color-brand-dark">Articles.</h1>
              <p className="text-xl opacity-75 color-brand-dark pb-6">
                <b className="font-semibold">Full length pieces with more of a coherent theme or message. </b>
                These are usually about things I've read or things I'm interested in. More abstract.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M21.515 5.143A9.218 9.218 0 0 0 12 4.82a9.223 9.223 0 0 0-9.515.323L2 5.434v14.332l1.515-.909A7.19 7.19 0 0 1 11.4 18.8l.6.442.6-.439a7.194 7.194 0 0 1 7.889.054l1.511.909V5.434zM7.559 15.656A9.3 9.3 0 0 0 4 16.378V6.585a7.2 7.2 0 0 1 7-.035v9.792a9.086 9.086 0 0 0-3.441-.686zM20 16.378a9.057 9.057 0 0 0-7-.038V6.55a7.2 7.2 0 0 1 7 .035z"/></svg>
              <div className="flex flex-wrap gap-x-10 gap-y-5 pt-10">
                <button onClick={() => handleClick('Psychology')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-psychology ${selectedCategory === 'Psychology' ? 'bg-psychology text-slate-100' : ''}`}>Psychology</button>
                <button onClick={() => handleClick('Computer Science')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-computer-science ${selectedCategory === 'Computer Science' ? 'bg-computer-science text-slate-100' : ''}`}>Computer Science</button>
                <button onClick={() => handleClick('History')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-history ${selectedCategory === 'History' ? 'bg-history text-slate-100' : ''}`}>History</button>
                <button onClick={() => handleClick('Architecture')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-architecture ${selectedCategory === 'Architecture' ? 'bg-architecture text-slate-100' : ''}`}>Architecture</button>
                {/* <button onClick={() => handleClick('Politics')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-politics ${selectedCategory === 'Politics' ? 'bg-politics text-slate-100' : ''}`}>Politics</button> */}
              </div>
            </div>
            <div>
              <Image 
                src="/articles/alien_building.jpg"
                width={400}
                height={600}
                alt="Cool alien-looking building" 
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-10">
          <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
        </div>
        <div className='flex flex-col gap-10 pb-10'>
          <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">Latest<span> {content}</span></h1>
          <div className="flex flex-col gap-7">
            {filteredArticles.map((article) => (
                <ArticleButton key={article.slug + "-article"} data = {article} />
            ))}
          </div>
        </div>
      </div>
  );
}