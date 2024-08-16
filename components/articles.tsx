"use client";

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { Article } from '@/interfaces/article';
import ArticleButton from './article_button';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  articles: Article[]
  page: number
}

export default function Articles({ articles, page }: Props) {
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const articlesPerPage = 4

  const filteredArticles = selectedCategory 
  ? articles.filter(article => article.categories.includes(selectedCategory))
  : articles;

  const numPages = Math.ceil(filteredArticles.length / articlesPerPage)

  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleClick = (category: string): void => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setContent("")
    } else {
      setSelectedCategory(category);
      setContent(category)
    }
  };

  return (
    <div className="flex flex-col gap-[20px] max-w-[1200px] px-[calc(8vw)] mx-auto text-black min-h-[calc(100vh-76px)]">
        <div className="pt-20">
          <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
            <div className="pr-10 max-w-[825px]">
              <h1 className="text-6xl pb-10 font-bold opacity-75 text-brand-dark">Articles.</h1>
              <p className="text-xl opacity-75 color-brand-dark pb-6">
                <b className="font-semibold">Full length pieces with more of a coherent theme or message. </b>
                These are usually about things I&apos;ve read or things I&apos;m interested in. More abstract.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M21.515 5.143A9.218 9.218 0 0 0 12 4.82a9.223 9.223 0 0 0-9.515.323L2 5.434v14.332l1.515-.909A7.19 7.19 0 0 1 11.4 18.8l.6.442.6-.439a7.194 7.194 0 0 1 7.889.054l1.511.909V5.434zM7.559 15.656A9.3 9.3 0 0 0 4 16.378V6.585a7.2 7.2 0 0 1 7-.035v9.792a9.086 9.086 0 0 0-3.441-.686zM20 16.378a9.057 9.057 0 0 0-7-.038V6.55a7.2 7.2 0 0 1 7 .035z"/></svg>
              <div className="flex flex-wrap gap-x-10 gap-y-5 pt-10">
                <button onClick={() => handleClick('Psychology')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-psychology ${selectedCategory === 'Psychology' ? 'bg-psychology text-white border-white' : ''}`}>Psychology</button>
                <button onClick={() => handleClick('Computer Science')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-computer-science ${selectedCategory === 'Computer Science' ? 'bg-computer-science text-white border-white' : ''}`}>Computer Science</button>
                <button onClick={() => handleClick('History')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-history ${selectedCategory === 'History' ? 'bg-history text-white border-white' : ''}`}>History</button>
                <button onClick={() => handleClick('Architecture')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-architecture ${selectedCategory === 'Architecture' ? 'bg-architecture text-white border-white' : ''}`}>Architecture</button>
                {/* <button onClick={() => handleClick('Politics')} className={`border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-politics ${selectedCategory === 'Politics' ? 'bg-politics text-slate-100' : ''}`}>Politics</button> */}
              </div>
            </div>
            <div>
              <Image 
                src="/articles/alien_building.JPG"
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
            {paginatedArticles.map((article) => (
                <ArticleButton key={article.slug + "-article"} data = {article} />
            ))}
          </div>
        </div>
        <div className='flex justify-between pb-10'>
          <PaginationArrow direction='left' href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />
          <PaginationArrow direction='right' href={createPageURL(currentPage + 1)} isDisabled={currentPage >= numPages} />
        </div>
      </div>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}