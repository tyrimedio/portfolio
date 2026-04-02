"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  title: string;
  role: string;
  date: string;
  description: string;
  bullets: string[];
  tech: string[];
  color: string;
  icon: React.ReactNode;
  link?: { url: string; label: string };
}

const BasketballIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M4.93 4.93c4.08 2.38 6.2 5.88 7.07 10.07M19.07 4.93c-4.08 2.38-6.2 5.88-7.07 10.07M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const DumbbellIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11M3 10.5V6a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.5M21 10.5V6a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-4.5M1 12h3M20 12h3" />
  </svg>
);

const RobotIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M9 15h0M15 15h0M7 11V8a5 5 0 0 1 10 0v3" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const projects: Project[] = [
  {
    title: "NBA Prediction System",
    role: "Project Lead",
    date: "Mar 2026 - Present",
    description:
      "End-to-end sports analytics system that ingests NBA and odds data, engineers features, and generates daily game and player-prop predictions.",
    bullets: [
      "Walk-forward backtesting with leakage-aware feature pipelines, benchmarked on 1,059 games",
      "Validated against Pinnacle closing lines instead of naive train/test splits",
      "Automated daily workflows on Raspberry Pi with systemd scheduling",
    ],
    tech: ["Python", "scikit-learn", "LightGBM", "pandas", "NumPy"],
    color: "from-orange-500 to-red-500",
    icon: <BasketballIcon />,
    link: { url: "https://nba.court-signal.com/", label: "Live Dashboard" },
  },
  {
    title: "Momentum Fitness",
    role: "Project Lead",
    date: "May 2025 - Present",
    description:
      "Personalized fitness and nutrition tracking system built around recommendation logic, user data, and progress analytics on iOS.",
    bullets: [
      "Structured workout and nutrition logging with USDA API integration and macro trend tracking",
      "Personalized coaching workflow driven by user goals, habits, and logged activity",
      "Interactive progress charts, Firebase auth, and a home screen widget for daily feedback",
    ],
    tech: ["Swift", "SwiftUI", "Firebase", "USDA API"],
    color: "from-green-500 to-emerald-500",
    icon: <DumbbellIcon />,
  },
  {
    title: "Multi-Robot Pathfinding",
    role: "Contributor",
    date: "Mar - May 2025",
    description:
      "Algorithmic simulation project focused on multi-agent path optimization, real-time collision avoidance, and replayable systems analysis.",
    bullets: [
      "A* algorithm for optimal path generation across multiple agents",
      "Priority-based collision avoidance with dynamic replanning",
      "Replay system with movement visualization and congestion hotspot analysis",
    ],
    tech: ["Python", "Pygame", "A*"],
    color: "from-blue-500 to-cyan-500",
    icon: <RobotIcon />,
    link: { url: "https://www.youtube.com/watch?v=K0ddjdQcQko", label: "Watch Demo" },
  },
  {
    title: "Image Editor",
    role: "Project Lead",
    date: "Nov - Dec 2024",
    description:
      "Image processing project centered on pixel-level transformations, composable effects, and interactive experimentation.",
    bullets: [
      "Grayscale, color manipulation, rotation, mirroring, and pixelation effects",
      "Undo/redo system and file I/O with object-oriented design",
    ],
    tech: ["Java", "Swing"],
    color: "from-purple-500 to-pink-500",
    icon: <ImageIcon />,
    link: { url: "https://www.youtube.com/watch?v=hie4dLH5cYw", label: "Watch Demo" },
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="card-glow group cursor-pointer rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:translate-y-[-4px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">{project.icon}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>{project.role}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{project.date}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          className="text-zinc-600 text-xl mt-1"
        >
          +
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Expandable bullets */}
      <AnimatePresence initial={false}>
        {isExpanded && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 mb-4">
          {project.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isExpanded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`}
              />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
        )}
      </AnimatePresence>

      {/* Tech tags + link */}
      <div className="flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 group-hover:border-indigo-500/20 group-hover:text-zinc-300 transition-colors"
          >
            {t}
          </span>
        ))}
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`ml-auto flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white opacity-80 hover:opacity-100 transition-opacity`}
          >
            {project.link.label}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Bottom gradient line */}
      <div className="mt-6 h-[1px] w-full overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <div className={`h-full w-full bg-gradient-to-r ${project.color}`} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 font-mono mb-3">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg">
            Click on a project to expand details. Together they show how I
            approach prediction, optimization, automation, and data-informed
            product decisions across different domains.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
