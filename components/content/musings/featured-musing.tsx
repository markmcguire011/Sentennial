import Link from "next/link";
import { Musing } from "@/interfaces/musing";

type Props = {
  musing: Musing;
};

export default function FeaturedMusing({ musing }: Props) {
  // Define a CSS variable for border color that can be easily changed
  const borderColorClass = "border-brand-dark/10"; // This can be changed to any color class

  return (
    <div
      className={`group mt-12 border ${borderColorClass} rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300`}
    >
      {/* Header section */}
      <div
        className={`${borderColorClass} px-6 py-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-color/70"></div>
          <h2 className="text-xl font-bold text-slate-800 group-hover:text-brand-color transition-colors duration-200">
            {musing.title}
          </h2>
        </div>
      </div>

      {/* Content section */}
      <div className="px-6 pt-3">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          {musing.excerpt || "Read this featured reflection..."}
        </p>
      </div>

      {/* Footer section */}
      <div className={`flex bg-slate-50/50`}>
        <div
          className={`py-3 pl-6 pr-3 font-mono text-sm text-slate-600`}
        >
          {new Date(musing.comp_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="py-3 px-3 font-mono text-sm text-slate-600 flex-grow">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-architecture mr-2"></span>
            Featured
          </span>
        </div>
        <div className="flex mr-4 p-4 justify-end">
          <Link
            href={`/musings/${musing.slug}`}
            className="group/link inline-flex items-center text-slate-800 font-medium hover:text-brand-color transition-colors duration-200"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
