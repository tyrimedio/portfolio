"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    id: "01",
    title: "Modeling + evaluation",
    summary: "Backtests, baselines, feature pipelines, and enough skepticism to trust the result.",
    tools: ["scikit-learn", "LightGBM", "pandas", "NumPy", "SHAP"],
    depth: "Advanced",
  },
  {
    id: "02",
    title: "Application engineering",
    summary: "Shipping interfaces and product flows instead of leaving good ideas inside notebooks.",
    tools: ["SwiftUI", "Firebase", "Java", "SQL"],
    depth: "Strong",
  },
  {
    id: "03",
    title: "Automation + data workflows",
    summary: "Scheduling, repeatability, and pipelines that run when nobody is watching them.",
    tools: ["Python", "Git", "Workflow automation", "ML pipelines"],
    depth: "Strong",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="px-4 py-8 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-frame overflow-hidden"
        >
          <div className="grid gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="rule-grid border-b border-[var(--line)] px-6 py-6 lg:border-b-0 lg:border-r">
              <p className="eyebrow">Capabilities</p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                The toolkit, minus the buzzword cloud
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                I cut the generic pill tags and replaced them with the kinds of problems I can own end to end.
              </p>
            </div>

            <div>
              {capabilities.map((capability, index) => (
                <article
                  key={capability.id}
                  className={`grid gap-4 px-6 py-6 sm:px-8 lg:grid-cols-[84px_minmax(0,1fr)_120px] ${
                    index !== capabilities.length - 1 ? "border-b border-[var(--line)]" : ""
                  }`}
                >
                  <div className="font-mono text-sm text-[var(--accent)]">{capability.id}</div>

                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                      {capability.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                      {capability.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {capability.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-[var(--line)] bg-[rgba(255,251,246,0.78)] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="self-start border border-[var(--line)] bg-[rgba(255,251,246,0.78)] px-4 py-3 text-sm text-[var(--foreground)]">
                    {capability.depth}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
