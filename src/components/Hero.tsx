"use client";

import { motion } from "framer-motion";

const currentBoard = [
  { label: "Backtested games", value: "1,059", detail: "Leakage-aware NBA pipeline" },
  { label: "Deploy target", value: "Raspberry Pi", detail: "Automated daily jobs + reporting" },
  { label: "In progress", value: "Momentum", detail: "SwiftUI fitness product" },
];

const focusAreas = [
  "Machine learning systems that survive contact with real data",
  "Mobile products with clear feedback loops and useful defaults",
  "Evaluation workflows that care about baselines, drift, and stakes",
];

export default function Hero() {
  return (
    <section id="home" className="px-4 pb-18 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,420px)] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-frame accent-wash relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[var(--muted)]">
            <span className="eyebrow">Bloomington, IN</span>
            <span className="h-1 w-1 rounded-full bg-[var(--foreground)]/30" />
            <span className="eyebrow">Graduating May 2026</span>
          </div>

          <p className="eyebrow mb-4">Personal portfolio / operating board</p>
          <h1 className="display-title text-[3.8rem] text-[var(--foreground)] sm:text-[5.4rem] lg:text-[7.2rem]">
            Ty
            <br />
            Rimedio
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div>
              <p className="max-w-2xl text-balance text-lg leading-8 text-[var(--foreground)] sm:text-xl">
                I build sports analytics tools, ML pipelines, and product-minded apps that feel rigorous without feeling academic.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
                The work I care about lives in the middle of modeling, engineering, and shipping. I want the portfolio to read like that too.
              </p>
            </div>

            <div className="border-l border-[var(--line)] pl-5">
              <p className="eyebrow mb-3">Right now</p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Running a prediction system on a Pi, building a Swift fitness app,
                and looking for ML, data, or software roles where clean execution matters.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="border border-[var(--line)] bg-[rgba(255,251,246,0.72)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
            >
              Reach out
            </a>
            <a
              href="/Ty_Rimedio_Resume.docx"
              download
              className="border border-transparent px-5 py-3 text-sm font-medium text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:underline"
            >
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="section-frame overflow-hidden"
        >
          <div className="rule-grid border-b border-[var(--line)] px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="eyebrow">Current board</p>
              <span className="border border-[var(--line)] px-2 py-1 font-mono text-[11px] text-[var(--muted)]">
                LIVE
              </span>
            </div>

            <div className="space-y-3">
              {currentBoard.map((item) => (
                <div key={item.label} className="border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <p className="font-display mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-5">
            <p className="eyebrow mb-4">What I optimize for</p>
            <ul className="space-y-3">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--foreground)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
