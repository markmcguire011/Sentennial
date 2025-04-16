"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Musing } from "@/interfaces/musing";

import MusingsHeader from "@/components/content/musings/musings-header";
import MusingsContent from "@/components/content/musings/musings-content";
import Pagination from "@/components/ui/pagination";

type Props = {
  musings: Musing[];
};

export default function Musings({ musings }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const musingsPerPage = 4;
  const numPages = Math.ceil(musings.length / musingsPerPage);

  const featuredMusing = musings.find((musing) => musing.excerpt) || musings[0];

  const startIndex = (currentPage - 1) * musingsPerPage;
  const paginatedMusings = musings.slice(
    startIndex,
    startIndex + musingsPerPage
  );

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col max-w-[1200px] px-[calc(8vw)] mx-auto text-black min-h-[calc(100vh-76px)]">
      <MusingsHeader featuredMusing={featuredMusing} />

      <div className="flex items-center justify-center pb-10">
        <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
      </div>

      <MusingsContent musings={paginatedMusings} allMusings={musings} />

      <Pagination
        currentPage={currentPage}
        totalPages={numPages}
        createPageURL={createPageURL}
      />
    </div>
  );
}
