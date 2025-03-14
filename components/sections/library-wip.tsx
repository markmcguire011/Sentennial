"use client";

import { motion } from "framer-motion";

export default function LibraryWIP() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative px-[calc(8vw)] py-12 min-h-[400px]"
    >

      <div className="relative bg-white/90 backdrop-blur-sm border rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-sm font-mono opacity-75">alpha.0.1</span>
        </div>

        <h2 className="text-2xl font-semibold mb-4 opacity-75">
          📚 Building the Library
        </h2>
        <p className="text-lg opacity-60 mb-6">
          The library is currently under active development. I'm
          curating and annotating books, tracing the connections between ideas,
          and building an interactive knowledge space.
        </p>

        <div className="space-y-3 text-sm opacity-75">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Basic structure and design</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Book categorization system</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">○</span>
            <span>Adding detailed book annotations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">○</span>
            <span>Implementing idea connections</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-300">○</span>
            <span>Interactive knowledge mapping</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
