import React from "react";

interface MockArticleProps {
  numLines: number;
  className?: string;
}

export default function MockArticle({ numLines, className }: MockArticleProps) {
  const lines = [];

  for (let i = 0; i < numLines; i++) {
    lines.push(
      <div
        key={"lines_" + i.toString()}
        className="bg-slate-400/50 rounded h-[10px] w-full group-hover:bg-slate-400 transition-all duration-300"
      ></div>
    );
  }

  return (
    <div
      className={
        "group flex flex-col gap-3 h-40 rounded-md shadow-sm hover:shadow-md border border-brand-color/25 hover:border-brand-color p-[30px] items-center transition-all duration-300 " +
        className
      }
    >
      <div className="bg-slate-500/50 rounded h-[10px] w-full group-hover:bg-slate-500 transition-all duration-300"></div>
      {lines}
    </div>
  );
}
