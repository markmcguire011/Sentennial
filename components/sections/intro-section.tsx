"use client";

import Image from "next/image";
import cursor from "@/public/cursor.svg";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const colorList = {
  psychology: "#bccce6",
  "computer-science": "#dfd1e6",
  history: "#e6d1d6",
  architecture: "#e6d7d1",
  philosophy: "#d1e3e6",
};

export default function IntroSection() {
  return (
    <div className="flex flex-col md:w-1/2 w-screen gap-[20px] p-[60px]">
      <div className="w-1/2 h-[1px] bg-gradient-to-r from-[#a8a8a8] rounded"></div>
      <div className="relative">
        <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">
          A Development
        </h1>
        <Image
          className="ml-[160px] mt-8 absolute inset-0 flex justify-center"
          src={cursor}
          alt="cursor"
        />
      </div>
      <div className="w-2/3 h-[1px] bg-gradient-to-l from-[#a8a8a8] rounded"></div>
      <div className="w-prose">
        <p className="text-xl color-[#1E1E1E">
          Hey I&apos;m Mark! This is a personal project/blog where I record
          thoughts and stories about various topics.
          <br />
          <br />
          Here&apos;s some of the things that I write about:
        </p>
      </div>
      <div className="flex items-center gap-5 pl-[30px]">
        <div className="flex flex-col gap-[1px] text-xl">
          <Link
            href="/articles?category=history"
            className="underline decoration-brand-dark/40 hover:decoration-brand-color"
          >
            History
          </Link>
          <Link
            href="/articles?category=computer-science"
            className="underline decoration-brand-dark/40 hover:decoration-brand-color"
          >
            Computer Science
          </Link>
          <Link
            href="/articles?category=philosophy"
            className="underline decoration-brand-dark/40 hover:decoration-brand-color"
          >
            Philosophy
          </Link>
          <Link
            href="/articles?category=architecture"
            className="underline decoration-brand-dark/40 hover:decoration-brand-color"
          >
            Architecture
          </Link>
          <Link
            href="/articles?category=psychology"
            className="underline decoration-brand-dark/40 hover:decoration-brand-color"
          >
            Psychology
          </Link>
        </div>
      </div>
    </div>
  );
}
