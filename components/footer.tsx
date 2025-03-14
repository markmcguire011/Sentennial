"use client";

import NavItem from "@/components/navbar";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  const version = "v0.1.3"; // Increment this with significant updates

  return (
    <div className="border-t-2 bg-white">
      <div className="flex md:flex-row flex-col md:justify-between items-center py-8 md:py-12 px-4 md:px-8 gap-8 md:gap-12 max-w-[1200px] mx-auto text-black">
        {/* Left column - Logo and copyright */}
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <Link href={"/"} className="mb-2">
            <svg
              className="opacity-75 hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z"
                stroke="#1E1E1E"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z"
                stroke="#1E1E1E"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="flex flex-row justify-between w-full items-center">
            <span className="text-sm opacity-75 text-center md:text-left">
              © {currentYear} Mark McGuire. All rights reserved.
            </span>
            <span className="text-sm opacity-50 ml-2">{version}</span>
          </div>
        </div>

        {/* Right column - Navigation and Social links */}
        <div className="flex flex-col h-full justify-between gap-4 md:gap-[40px]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="flex justify-center items-center gap-4 md:gap-8">
                <Link
                  href={"/articles"}
                  className="opacity-75 hover:opacity-100"
                >
                  Articles
                </Link>
                <Link
                  href={"/musings"}
                  className="opacity-75 hover:opacity-100"
                >
                  Musings
                </Link>
                <Link href={"/about"} className="opacity-75 hover:opacity-100">
                  About
                </Link>
              </div>
            </div>
            <span className="hidden md:block text-sm opacity-50">|</span>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/markmcguire011"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mark-mcguire011/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-sm opacity-50 self-center md:self-end">
            Cogito, creo, celebro.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
