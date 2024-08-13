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
            <div className="pr-10">
              <h1 className="text-6xl pb-10 font-bold opacity-75 color-[#1E1E1E]">Articles.</h1>
              <p className="text-xl opacity-75 color-brand-dark pb-6">
                <b className="font-semibold">Full length pieces with more of a coherent theme or message. </b>
                These are usually about things I've read or things I'm interested in. More abstract.
              </p>
              <svg className="fill-brand-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m15 4.946-6-2-7 2.333v16.108l7-2.333 6 2 7-2.333V2.613zm-5 .442 4 1.333v11.891l-4-1.333zM4 6.721l4-1.333v11.891l-4 1.334zm16 10.558-4 1.333V6.721l4-1.334z"/></svg>
              <div className="flex flex-wrap gap-x-10 gap-y-5 pt-10">
                <button onClick={() => handleClick('Psychology')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-psychology ${selectedCategory === 'Psychology' ? 'bg-psychology text-slate-100' : ''}`}>Psychology</button>
                <button onClick={() => handleClick('Computer Science')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-computer-science ${selectedCategory === 'Computer Science' ? 'bg-computer-science text-slate-100' : ''}`}>Computer Science</button>
                <button onClick={() => handleClick('History')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-history ${selectedCategory === 'History' ? 'bg-history text-slate-100' : ''}`}>History</button>
                <button onClick={() => handleClick('Architecture')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-architecture ${selectedCategory === 'Architecture' ? 'bg-architecture text-slate-100' : ''}`}>Architecture</button>
                <button onClick={() => handleClick('Politics')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-politics ${selectedCategory === 'Politics' ? 'bg-politics text-slate-100' : ''}`}>Politics</button>
              </div>
            </div>
            <div>
              <Image 
                src="/alien_building.jpg"
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