"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [quote, setQuote] = useState("");

  const quotes = [
    "This page has gone to find itself.",
    "Congratulations! You've found the secret 404 page.",
    "I'd tell you a joke about this missing page, but I'm still searching for the punchline.",
    "You've reached the digital equivalent of opening an empty fridge.",
    "This URL is experiencing an existential crisis.",
    "The page you're looking for is attending a seminar on 'How to Be Found'.",
    "404: Page not found. It's probably just hiding.",
    "This link has retired to pursue its dream of not existing.",
    "The requested page was last seen heading west with a backpack and a determined expression.",
  ];

  useEffect(() => {
    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 -mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md text-center"
      >
        <h1 className="text-7xl font-bold text-brand-color mb-8">404</h1>

        <p className="text-md text-brand-dark/75 mb-8 font-mono">{quote}</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-white border border-brand-color/30 text-brand-color font-medium rounded-md shadow-sm hover:bg-brand-color/5 hover:border-brand-color/50 hover:shadow-md transition-all duration-200"
          >
            Return to Civilization
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
