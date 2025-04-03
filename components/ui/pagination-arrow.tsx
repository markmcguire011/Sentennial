"use client";

import Link from "next/link";
import clsx from "clsx";
import React from "react";

type PaginationArrowProps = {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
};

export default function PaginationArrow({
  href,
  direction,
  isDisabled,
}: PaginationArrowProps) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      window.history.pushState({}, "", href);
    }
  };

  // Add aria-label for better accessibility and testing
  const ariaLabel = direction === "left" ? "Previous Page" : "Next Page";

  const icon =
    direction === "left" ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
      </svg>
    );

  return isDisabled ? (
    <div className={className} aria-label={ariaLabel}>
      {icon}
    </div>
  ) : (
    <Link
      className={className}
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
}
