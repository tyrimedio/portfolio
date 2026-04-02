"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const notes = [
  {
    label: "Build style",
    value: "Practical systems over portfolio demos",
  },
  {
    label: "Interests",
    value: "ML engineering, data infra, product-minded app work",
  },
  {
    label: "Outside the editor",
    value: "Basketball, lifting, and side projects that accidentally get serious",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-frame h-fit px-5 py-5 lg:sticky lg:top-28"
        >
          <p className="eyebrow">About</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            How I work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="section-frame grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_280px]"
        >
          <div className="space-y-5 text-base leading-8 text-[var(--foreground)]">
            <p className="text-balance text-xl leading-8 text-[var(--foreground)]">
              I am a Computer Science senior at Indiana University with a bias toward things that run every day, not just things that look good in screenshots.
            </p>
            <p className="text-[var(--muted)]">
              That is why a lot of my work starts with messy data, automation, and evaluation discipline. I like projects where the hard part is not just training a model, but making the whole system reliable enough to trust.
            </p>
            <p className="text-[var(--muted)]">
              Lately that means an NBA prediction pipeline, a Swift fitness app, and a lot of thought about what makes software useful instead of merely interesting.
            </p>
          </div>

          <div className="border-t border-[var(--line)] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="eyebrow mb-4">Operating notes</p>
            <div className="space-y-4">
              {notes.map((item) => (
                <div key={item.label} className="border border-[var(--line)] bg-[rgba(255,251,246,0.72)] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
