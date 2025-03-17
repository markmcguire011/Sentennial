"use client";

import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 -mt-16">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 40 40"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z"
            stroke="#4D88B8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z"
            stroke="#4D88B8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 bg-brand-color/5 blur-3xl rounded-full w-40 h-40 mx-auto" />
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.75 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:text-7xl text-5xl font-bold text-brand-dark opacity-75 relative z-10 text-center"
        >
          Sentennial.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:text-xl text-md text-center max-w-lg px-3"
        >
          Exploring the intersections of technology, history, and human nature
        </motion.p>
      </div>
    </div>
  );
}
