"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  seriesId: string;
  seriesTitle: string;
  position: number;
  total: number;
};

export default function SeriesBadge({
  seriesId,
  seriesTitle,
  position,
  total,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <Link
        href={`/series/${seriesId}`}
        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-brand-color/10 text-brand-color hover:bg-brand-color/20 transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
        <span>
          {position}/{total}
        </span>
      </Link>

      {/* Tooltip that appears to the right of the badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-full ml-2 -top-1/4 -translate-y-1/2 bg-white border border-slate-200 shadow-md rounded-md px-3 py-2 text-xs whitespace-nowrap z-10"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.15 }}
          >
            {/* Triangle pointer */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-slate-200 border-b-[6px] border-b-transparent"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-[7px] w-0 h-0 border-t-[5px] border-t-transparent border-r-[5px] border-r-white border-b-[5px] border-b-transparent"></div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-brand-dark">
                Part of series:
              </span>
              <span className="text-brand-color">{seriesTitle}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
