import Link from "next/link";
import { Musing } from "@/interfaces/musing";

type Props = {
  musing: Musing;
};

export default function FeaturedMusing({ musing }: Props) {
  // Define a CSS variable for border color that can be easily changed
  const borderColorClass = "border-brand-dark/50"; // This can be changed to any color class

  return (
    <div
      className={`group mt-12 border ${borderColorClass} rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300`}
    >
      {/* Header section */}
      <div
        className={`border-b ${borderColorClass} px-6 py-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-color/70"></div>
          <h2 className="text-xl font-bold text-slate-800 group-hover:text-brand-color transition-colors duration-200">
            {musing.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <span className="font-semibold">Mark McGuire</span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          {musing.excerpt || "Read this featured reflection..."}
        </p>

        <div className="flex justify-end">
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

      {/* Footer section */}
      <div className={`flex border-t ${borderColorClass} bg-slate-50/50`}>
        <div
          className={`py-3 px-6 border-r ${borderColorClass} font-mono text-sm text-slate-600`}
        >
          {new Date(musing.comp_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="py-3 px-6 font-mono text-sm text-slate-600 flex-grow">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-architecture mr-2"></span>
            Featured
          </span>
        </div>
      </div>
    </div>
  );
}
