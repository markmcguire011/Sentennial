"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ResearchTopic = {
  title: string;
  description: string;
  progress: number;
  status: "active" | "planning" | "research" | "writing";
  estimatedCompletion?: string;
};

const topics: ResearchTopic[] = [];

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
      className="bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow"
    >
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
        {topic.estimatedCompletion && (
          <div className="text-xs opacity-50 pt-2">
            Est. completion: {topic.estimatedCompletion}
          </div>
        )}
      </div>
    </motion.div>
  );
}
