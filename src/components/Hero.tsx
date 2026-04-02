"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Data Scientist",
  "ML Engineer",
  "Software Developer",
  "iOS Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Radial glow behind name */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Greeting line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-indigo-400 font-mono mb-6"
        >
          Hey, I&apos;m
        </motion.p>

        {/* Name */}
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-4">
          <span className="gradient-text">Ty Rimedio</span>
        </h1>

        {/* Rotating title */}
        <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl text-zinc-400 font-light"
            >
              {titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Brief tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-lg mx-auto text-zinc-500 leading-relaxed"
        >
          CS senior at Indiana University. I build ML pipelines, prediction
          systems, and mobile apps.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-indigo-600 text-white font-medium text-sm overflow-hidden cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 text-zinc-300 font-medium text-sm cursor-pointer hover:border-indigo-500/50 hover:text-white transition-all"
          >
            Get in Touch
          </a>
          <a
            href="/Ty_Rimedio_Resume.docx"
            download
            className="px-8 py-3 rounded-full border border-white/10 text-zinc-300 font-medium text-sm cursor-pointer hover:border-indigo-500/50 hover:text-white transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
