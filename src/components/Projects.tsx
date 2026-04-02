"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  role: string;
  date: string;
  description: string;
  detail: string;
  metrics: string[];
  tech: string[];
  link?: { url: string; label: string };
}

const featuredProject: Project = {
  title: "NBA Prediction System",
  role: "Lead Developer",
  date: "Mar 2026 - Present",
  description:
    "A full sports analytics system that ingests NBA and betting data, builds leakage-aware features, and generates daily game and prop predictions.",
  detail:
    "The interesting part is not the model in isolation. It is the evaluation discipline, the automation, and the fact that the whole thing runs on hardware sitting in a room instead of in a slide deck.",
  metrics: [
    "1,059 games benchmarked in walk-forward backtests",
    "Validated against Pinnacle closing lines",
    "Automated on Raspberry Pi with scheduled daily workflows",
  ],
  tech: ["Python", "LightGBM", "scikit-learn", "pandas", "NumPy"],
  link: { url: "https://nba.court-signal.com/", label: "Open live dashboard" },
};

const supportingProjects: Project[] = [
  {
    title: "Momentum Fitness",
    role: "Lead Developer",
    date: "May 2025 - Present",
    description:
      "An AI-assisted iOS fitness app focused on nutrition, training, and feedback loops that people can actually maintain.",
    detail:
      "Built with SwiftUI and Firebase, with tracking, charts, macro monitoring, and an AI coaching layer.",
    metrics: ["USDA API nutrition data", "Widget support", "Progress charts"],
    tech: ["Swift", "SwiftUI", "Firebase", "USDA API"],
  },
  {
    title: "Multi-Robot Pathfinding",
    role: "Developer",
    date: "Mar - May 2025",
    description:
      "A pathfinding simulation for multiple agents with A* search, collision avoidance, and replayable movement traces.",
    detail:
      "The project sharpened the part of my brain that likes constraints, edge cases, and visual debugging.",
    metrics: ["A* routing", "Dynamic replanning", "Collision hotspot replay"],
    tech: ["Python", "Pygame", "A*"],
    link: { url: "https://www.youtube.com/watch?v=K0ddjdQcQko", label: "Watch demo" },
  },
  {
    title: "Image Editor",
    role: "Lead Developer",
    date: "Nov - Dec 2024",
    description:
      "A Java desktop image editor with transformations, effects, file I/O, and a GUI built around clear object-oriented structure.",
    detail:
      "Less flashy than the other work, but a good example of shipping a complete interface with state and undo/redo behavior.",
    metrics: ["Transformations", "Undo / redo", "Desktop GUI"],
    tech: ["Java", "Swing"],
    link: { url: "https://www.youtube.com/watch?v=hie4dLH5cYw", label: "Watch demo" },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-4 py-8 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-frame px-6 py-6 sm:px-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Projects with receipts
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              I wanted this section to feel less like generic cards and more like a project ledger. The best work gets more space. Everything else earns its place with specifics.
            </p>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="section-frame grid overflow-hidden lg:grid-cols-[minmax(0,1.2fr)_340px]"
        >
          <div className="px-6 py-7 sm:px-8 sm:py-8">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span className="eyebrow">01 / Featured</span>
              <span className="h-1 w-1 rounded-full bg-[var(--foreground)]/25" />
              <span>{featuredProject.role}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--foreground)]/25" />
              <span>{featuredProject.date}</span>
            </div>

            <h3 className="font-display text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              {featuredProject.title}
            </h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--foreground)]">
              {featuredProject.description}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              {featuredProject.detail}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--line)] bg-[rgba(255,251,246,0.76)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            {featuredProject.link && (
              <a
                href={featuredProject.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex border border-[var(--foreground)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {featuredProject.link.label}
              </a>
            )}
          </div>

          <div className="rule-grid border-t border-[var(--line)] bg-[rgba(255,248,240,0.9)] px-6 py-7 lg:border-l lg:border-t-0">
            <p className="eyebrow mb-4">What matters</p>
            <div className="space-y-3">
              {featuredProject.metrics.map((metric) => (
                <div key={metric} className="border border-[var(--line)] bg-[rgba(255,251,246,0.85)] p-4 text-sm leading-6 text-[var(--foreground)]">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="section-frame overflow-hidden"
        >
          {supportingProjects.map((project, index) => (
            <article
              key={project.title}
              className={`grid gap-5 px-6 py-6 sm:px-8 lg:grid-cols-[110px_minmax(0,1fr)_220px] lg:items-start ${
                index !== supportingProjects.length - 1 ? "border-b border-[var(--line)]" : ""
              }`}
            >
              <div>
                <p className="eyebrow">0{index + 2}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{project.date}</p>
              </div>

              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{project.role}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {project.link.label}
                    </a>
                  )}
                </div>

                <p className="mt-4 text-base leading-7 text-[var(--foreground)]">
                  {project.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.detail}</p>
              </div>

              <div className="space-y-3">
                <div className="border border-[var(--line)] bg-[rgba(255,251,246,0.76)] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Highlights
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                    {project.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="border border-[var(--line)] px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
