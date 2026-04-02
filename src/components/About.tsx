"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { label: "Focus", value: "Data Science & ML" },
  { label: "University", value: "Indiana University" },
  { label: "Graduation", value: "May 2026" },
  { label: "Location", value: "Bloomington, IN" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 font-mono mb-3">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            A bit about <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5 text-zinc-400 leading-relaxed"
          >
            <p>
              I&apos;m a Computer Science senior at Indiana University, mostly
              focused on data science and machine learning. I like building
              things that work with real data and actually do something useful.
            </p>
            <p>
              Right now I&apos;m running an NBA prediction pipeline off a
              Raspberry Pi and building a fitness app in Swift. I care a lot
              about clean data pipelines, reproducible results, and getting
              things into people&apos;s hands.
            </p>
            <p>
              Outside of coding I&apos;m usually watching basketball, in the
              gym, or messing around with a new side project. I&apos;m looking
              for roles in ML, data engineering, or software development after
              graduation.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <p className="text-xs tracking-wider uppercase text-zinc-600 mb-1">
                  {item.label}
                </p>
                <p className="text-white font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
