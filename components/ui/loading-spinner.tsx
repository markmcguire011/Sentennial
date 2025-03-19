"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-brand-color/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-color"></div>
      </motion.div>
      <motion.p
        className="mt-4 text-brand-dark/60 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading content...
      </motion.p>
    </div>
  );
}
