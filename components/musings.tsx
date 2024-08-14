"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Musing } from '@/interfaces/musing';
import MusingButton from './musing_button';

type Props = {
  musings: Musing[]
}

export default function Musings({ musings }: Props) {
//   const [content, setContent] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const handleClick = (category: string): void => {
//     if (selectedCategory === category) {
//       setSelectedCategory(null);
//       setContent("")
//     } else {
//       setSelectedCategory(category);
//       setContent(category)
//     }
//   };

//   const filteredArticles = selectedCategory 
//     ? articles.filter(article => article.categories.includes(selectedCategory))
//     : articles;

  return (
    <div className="flex flex-col justify-center px-[calc(12vw)]">
        <div className="pt-20 pb-10">
            <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
                <div className="pr-10 max-w-[825px]">
                <h1 className="text-6xl pb-10 font-bold opacity-75 color-brand-dark">Musings.</h1>
                <p className="text-xl opacity-75 color-brand-dark pb-6">
                    <b className="font-semibold">Short reflections loosely based on occurences. </b>
                    These are mostly random thoughts or lines-of-thought that are inspired by the world, by other people, or just boredom.
                </p>
                <svg className="fill-brand-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m15 4.946-6-2-7 2.333v16.108l7-2.333 6 2 7-2.333V2.613zm-5 .442 4 1.333v11.891l-4-1.333zM4 6.721l4-1.333v11.891l-4 1.334zm16 10.558-4 1.333V6.721l4-1.334z"/></svg>
                </div>
                <div>
                <Image 
                    src="/musings/palace_garden.jpg"
                    width={400}
                    height={600}
                    alt="Some very contemplating-looking gardens" 
                    className="rounded-md"
                />
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center pb-10">
            <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
        </div>
        <div className='flex flex-col gap-10 pb-10'>
          <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">Latest</h1>
          <div className="flex flex-col gap-7">
            {musings.map((musing) => (
                <MusingButton key={musing.slug + "-musing"} data = {musing as Musing} />
            ))}
          </div>
        </div>
    </div>
  );
}