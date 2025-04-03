"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="w-full py-16">

      <div className="max-w-xl mx-auto text-center pt-16">
        <h2 className="text-2xl font-semibold mb-4 opacity-75">Stay Updated</h2>
        <p className="text-lg mb-8 opacity-60">
          Subscribe to receive updates about new articles, musings, and research
          topics.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex md:flex-row flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-color/20 focus:border-brand-color transition-all"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="bg-brand-color text-white px-6 py-2 rounded-lg hover:bg-brand-color/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                "Subscribe"
              )}
            </button>
          </div>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute mt-2 text-green-600 text-sm"
            >
              Thanks for subscribing! 🎉
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute mt-2 text-red-600 text-sm"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </div>
    </div>
  );
}
