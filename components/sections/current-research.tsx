"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type ResearchTopic = {
  title: string;
  description: string;
  progress: number;
  status: "active" | "planning" | "research" | "writing";
  link?: string;
  estimatedCompletion?: string;
};

const topics: ResearchTopic[] = [
  {
    title: "Consciousness and AI",
    description:
      "Exploring the parallels between human consciousness and artificial intelligence systems.",
    progress: 48,
    status: "research",
    estimatedCompletion: "Late May 2025",
  },
  {
    title: "Historical Urban Planning",
    description:
      "Analysis of ancient city designs and their modern implications. Current focus: Paris.",
    progress: 83,
    status: "active",
    link: "/series/urban-planning",
    estimatedCompletion: "Early April 2025",
  },
  {
    title: "Memory Systems",
    description:
      "Understanding human memory through the lens of computer science.",
    progress: 5,
    status: "planning",
  },
];

export default function CurrentResearch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="py-20 mb-20">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1200px] mx-auto px-4 md:px-8"
      >
        <h2 className="text-4xl font-bold opacity-75 color-[#1E1E1E] mb-12 text-center">
          On the Horizon...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <ResearchCard
              key={topic.title}
              topic={topic}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ResearchCard({
  topic,
  index,
  progress,
}: {
  topic: ResearchTopic;
  index: number;
  progress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const y = useTransform(progress, [0, 1], [50 * (index + 1), 0]);

  const opacity = useTransform(progress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm p-6"
    >
      {topic.link ? (
        <Link href={topic.link} className="block absolute inset-0 z-10 group-hover:shadow-md transition-shadow rounded-lg" />
      ) : null}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{topic.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            topic.status === "active"
              ? "bg-green-100 text-green-800"
              : topic.status === "planning"
              ? "bg-yellow-100 text-yellow-800"
              : topic.status === "research"
              ? "bg-blue-100 text-blue-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {topic.status}
        </span>
      </div>
      <p className="text-sm opacity-75 mb-4">{topic.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-xs opacity-75">
          <span>Progress</span>
          <span>{topic.progress}%</span>
        </div>
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${topic.progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-brand-color rounded-full"
          />
        </div>
        <div className="flex justify-between items-center pt-2">
          {topic.estimatedCompletion && (
            <div className="text-xs opacity-50 pt-2">
              Est. completion: {topic.estimatedCompletion}
            </div>
          )}
          {topic.link && (
            <div className="flex items-center gap-1 text-xs text-brand-color pt-2">
              <Link className="opacity-50 font-underline group-hover:opacity-100" href={topic.link}>View series</Link>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[3px] transition-all"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
