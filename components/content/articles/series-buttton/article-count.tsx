import React from "react";

type Props = {
  count: number;
};

export default function ArticleCount({ count }: Props) {
  return (
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        {count} article{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
}