"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "Java", "Swift"],
  },
  {
    label: "ML / Data",
    skills: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "LightGBM",
      "TensorFlow",
      "SHAP",
    ],
  },
  {
    label: "Tools & Infra",
    skills: ["Git", "Firebase", "Workflow Automation", "ML Pipelines"],
  },
  {
    label: "Concepts",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Data Structures & Algorithms",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 font-mono mb-3">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
            >
              <h3 className="text-sm font-mono tracking-wider text-zinc-500 uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.15 + i * 0.05 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      borderColor: "rgba(99, 102, 241, 0.4)",
                    }}
                    className="px-4 py-2 text-sm rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-300 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
