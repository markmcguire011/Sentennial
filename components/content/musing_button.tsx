import Link from "next/link";
import { Musing } from "@/interfaces/musing";
import { formatDate } from "@/lib/utils";
type Props = {
  data: Musing;
};

export default function MusingButton({ data }: Props) {
  return (
    <Link
      href={`/musings/${data.slug}`}
      className="flex flex-col w-full items-center"
    >
      <div className="group bg-white flex flex-col justify-between rounded w-full shadow-sm hover:shadow-md border">
        <div className="flex justify-between px-6 pt-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-color/20 group-hover:bg-brand-color mt-2"></div>
            <h1 className="text-lg group-hover:text-brand-color group-hover:underline">
              {data.title}
            </h1>
          </div>
          <svg
            className="md:flex hidden group-hover:fill-brand-color"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z" />
            <path d="M7 7h10v2H7zm0 4h7v2H7z" />
          </svg>
        </div>
        <div className="flex flex-col px-6 md:pb-3 pb-5 md:flex-row-reverse justify-between">
          <span className="font-mono text-md text-slate-400/50 sm:flex hidden">
            {formatDate(data.date)}
          </span>
        </div>
        <div className="flex">
          <div className="h-0 w-full bg-gradient-to-r from-brand-color/5 via-brand-color/10 to-brand-color/5"></div>
        </div>
      </div>
    </Link>
  );
}
