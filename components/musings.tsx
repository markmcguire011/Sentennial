"use client";

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { Musing } from '@/interfaces/musing';
import MusingButton from './musing_button';

type Props = {
  musings: Musing[]
  page: number
}

export default function Musings({ musings, page }: Props) {
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

//   const musings = selectedCategory 
//     ? articles.filter(article => article.categories.includes(selectedCategory))
//     : articles;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const musingsPerPage = 5

  const numPages = Math.ceil(musings.length / musingsPerPage)

  const startIndex = (currentPage - 1) * musingsPerPage;
  const paginatedMusings = musings.slice(startIndex, startIndex + musingsPerPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col max-w-[1200px] px-[calc(4vw)] mx-auto text-black min-h-[calc(100vh-76px)]">
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
                    src="static/assets/images/musings/palace_garden.jpg"
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
            {paginatedMusings.map((musing) => (
                <MusingButton key={musing.slug + "-musing"} data = {musing as Musing} />
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