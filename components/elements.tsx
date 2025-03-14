import React from "react";

function DiscoverButton({}) {}

function MockArticle({ numLines }: { numLines: number }) {
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
    <div className="group flex flex-col gap-3 h-40 rounded-md shadow-sm hover:shadow-md border border-brand-color/25 hover:border-brand-color p-[30px] items-center transition-all duration-300">
      <div className="bg-slate-500/50 rounded h-[10px] w-full group-hover:bg-slate-500 transition-all duration-300"></div>
      {lines}
    </div>
  );
}

export default MockArticle;
