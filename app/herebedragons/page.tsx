"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HereBeDragons() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#c4ac7c] text-white relative overflow-hidden">
      {/* Interactive background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #9e391a, rgba(0,0,255,0.2) 40%, transparent 70%)`,
        }}
      />

      {/* Dragon scales pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 30 L45 60 L30 30 L15 60 L0 30 L30 30 L30 0 L60 15 L30 30 L0 15 L30 0 L30 30' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex gap-10 items-center mb-8">
            <h1 className="text-6xl font-bold text-[#9e391a] font-serif tracking-tight">
              Here Be Dragons
            </h1>
            <Image
              src="/dragon-head.svg"
              alt="Dragon"
              width={100}
              height={100}
            />
          </div>

          <div className="prose prose-lg prose-invert mb-12 font-serif opacity-70">
            <p className="text-xl opacity-80 leading-relaxed">
              In ancient maps, cartographers would mark unexplored territories
              with the phrase &quot;HC SVNT DRACONES&quot; — Here be dragons.
              These uncharted regions represented both danger and possibility.
            </p>

            <p className="text-xl opacity-80 leading-relaxed mt-6">
              You&apos;ve found the hidden realm of this digital landscape. A secret
              corner that exists beyond the mapped navigation.
            </p>
          </div>

          {/* Decorative separator with extra spacing */}
          <div className="my-32 flex flex-col items-center">
            <div className="w-16 h-px bg-white/30 mb-8"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-white/50 text-sm font-serif italic"
            >
              Scroll to explore the cartographer&apos;s journey
            </motion.div>
            <div className="flex space-x-1 mt-4">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 rounded-full bg-white/30"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 rounded-full bg-white/30"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 rounded-full bg-white/30"
              ></motion.div>
            </div>
          </div>

          {/* Timeline of Cartography - Sleeker Version */}
          <div className="relative mb-16 space-y-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>

            {/* 150 CE - Ptolemy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <div className="absolute left-0 w-2 h-2 rounded-full bg-[#9e391a] -translate-x-1/2"></div>
              <span className="text-[#9e391a] font-mono text-sm">150 CE</span>
              <h3 className="text-xl font-semibold text-[#694f36] mt-1 mb-2">
                Ptolemy&apos;s Geographia
              </h3>
              <p className="text-white/70 text-sm">
                Claudius Ptolemy created one of the first world maps with a
                coordinate system, influencing cartography for over a
                millennium.
              </p>
            </motion.div>

            {/* 1154 - Al-Idrisi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <div className="absolute left-0 w-2 h-2 rounded-full bg-[#9e391a] -translate-x-1/2"></div>
              <span className="text-[#9e391a] font-mono text-sm">1154</span>
              <h3 className="text-xl font-semibold text-[#694f36] mt-1 mb-2">
                Tabula Rogeriana
              </h3>
              <p className="text-white/70 text-sm">
                Al-Idrisi&apos;s detailed world map combined Islamic and Greek
                knowledge, showing the world with south at the top.
              </p>
            </motion.div>

            {/* 1500s - Sea Monsters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <div className="absolute left-0 w-2 h-2 rounded-full bg-[#9e391a] -translate-x-1/2"></div>
              <span className="text-[#9e391a] font-mono text-sm">1500s</span>
              <h3 className="text-xl font-semibold text-[#694f36] mt-1 mb-2">
                Sea Monsters Era
              </h3>
              <p className="text-white/70 text-sm">
                Renaissance maps featured fantastical creatures, with &quot;HC
                SVNT DRACONES&quot; appearing on the Hunt-Lenox Globe (c. 1510).
              </p>
            </motion.div>

            {/* 1569 - Mercator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <div className="absolute left-0 w-2 h-2 rounded-full bg-[#9e391a] -translate-x-1/2"></div>
              <span className="text-[#9e391a] font-mono text-sm">1569</span>
              <h3 className="text-xl font-semibold text-[#694f36] mt-1 mb-2">
                Mercator Projection
              </h3>
              <p className="text-white/70 text-sm">
                Gerardus Mercator&apos;s revolutionary projection preserved angles
                and shapes, becoming the standard for nautical charts.
              </p>
            </motion.div>

            {/* 1990s - Digital Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <div className="absolute left-0 w-2 h-2 rounded-full bg-[#9e391a] -translate-x-1/2"></div>
              <span className="text-[#9e391a] font-mono text-sm">1990s</span>
              <h3 className="text-xl font-semibold text-[#694f36] mt-1 mb-2">
                Digital Revolution
              </h3>
              <p className="text-white/70 text-sm">
                GIS and GPS transformed cartography, creating interactive maps
                with unprecedented accuracy while opening new digital frontiers.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent"
            >
              <span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3B727C] to-[#D1BE9D]"
                style={{
                  transition: "transform 1.5s ease",
                  transform: "translateX(0)",
                }}
              ></span>
              <span
                className="absolute inset-0 w-full h-full bg-gradient-to-l from-[#3B727C] to-[#D1BE9D] opacity-0 group-hover:opacity-100"
                style={{
                  transition: "opacity 1.5s ease",
                }}
              ></span>
              <span className="relative text-white font-medium">
                Return to Charted Waters
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
