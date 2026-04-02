interface Project {
  title: string;
  role: string;
  date: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: { url: string; label: string };
}

const projects: Project[] = [
  {
    title: "NBA Prediction System",
    role: "Project Lead",
    date: "Mar 2026 - Present",
    description:
      "End-to-end sports analytics system that ingests NBA and odds data, engineers leak-aware features, and generates daily game predictions — evaluated on held-out data, not cherry-picked results.",
    bullets: [
      "67.1% logistic accuracy across 1,075 held-out games with documented log loss and Brier score",
      "Benchmarked against Pinnacle closing lines — approaches market-level accuracy, no claimed edge",
      "Runs autonomously on a Raspberry Pi with four daily slate refreshes and lock-based scheduling",
    ],
    tech: ["Python", "scikit-learn", "LightGBM", "pandas", "NumPy"],
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
    link: { url: "https://www.youtube.com/watch?v=hie4dLH5cYw", label: "Watch Demo" },
  },
];

/* Real calibration buckets from reports/backtest_logistic.csv */
const calibrationBuckets = [
  { predicted: 35, actual: 33.79, games: 364 },
  { predicted: 52.5, actual: 45.67, games: 127 },
  { predicted: 60, actual: 61.84, games: 283 },
  { predicted: 70, actual: 72.5, games: 160 },
  { predicted: 87.5, actual: 80.85, games: 141 },
];

/* Monthly held-out accuracy, Oct 2025 – Mar 2026 */
const monthlyAccuracy = [
  { month: "Oct", value: 68.8 },
  { month: "Nov", value: 71.2 },
  { month: "Dec", value: 56.3 },
  { month: "Jan", value: 60.5 },
  { month: "Feb", value: 60.2 },
  { month: "Mar", value: 77.6 },
];

/* Chart helpers — runs at build time (server component) */
const CX = { l: 42, t: 12, w: 168, h: 168 };
const px = (pct: number) => CX.l + (pct / 100) * CX.w;
const py = (pct: number) => CX.t + CX.h - (pct / 100) * CX.h;
const dotR = (games: number) => 3.6 + Math.sqrt(games / 364) * 4.4;

const sparkMin = 56.3;
const sparkMax = 77.6;
const sparkRange = sparkMax - sparkMin;
const sparkH = 28;
const sparkPad = 4;
const sparkPoints = monthlyAccuracy.map((m, i) => ({
  x: (i / (monthlyAccuracy.length - 1)) * 180,
  y: sparkPad + sparkH - ((m.value - sparkMin) / sparkRange) * sparkH,
}));
const sparkLine = sparkPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
const sparkArea = `${sparkLine} L ${sparkPoints.at(-1)!.x},${sparkH + sparkPad + 1} L 0,${sparkH + sparkPad + 1} Z`;

export default function Projects() {
  const [featuredProject, ...supportingProjects] = projects;

  return (
    <section
      id="projects"
      className="section-band wash-projects px-5 sm:px-8 lg:px-12"
    >
      <div className="editorial-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.62fr)] lg:items-end">
          <div>
            <p className="kicker">Projects</p>
            <h2 className="section-title mt-4 max-w-4xl text-[var(--ink)]">
              Work that holds up outside the prototype.
            </h2>
          </div>

          <p className="editorial-pin max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg lg:justify-self-end">
            The throughline is simple: build from real data, validate under
            real constraints, and make the result usable.
          </p>
        </div>

        <article className="mt-12 border-t pt-8 soft-rule">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.7fr)] lg:gap-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                <p className="kicker">Featured project</p>
                <p className="text-sm text-[var(--muted)]">
                  {featuredProject.role} / {featuredProject.date}
                </p>
              </div>
              <h3
                className="mt-3 max-w-3xl text-4xl leading-[0.95] tracking-[-0.045em] text-[var(--ink)] sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featuredProject.title}
              </h3>

              <p className="mt-6 max-w-3xl text-[1.08rem] leading-8 text-[var(--ink)] sm:text-[1.18rem] sm:leading-9">
                {featuredProject.description}
              </p>

              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-7 text-[var(--ink)] sm:text-[0.98rem]">
                {featuredProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-6 soft-rule">
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--muted)]">
                  {featuredProject.tech.join(" / ")}
                </p>
                {featuredProject.link && (
                  <a
                    href={featuredProject.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link text-sm font-medium text-[var(--ink)]"
                  >
                    {featuredProject.link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>

            <div className="editorial-pin border-t pt-6 soft-rule lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="paper-panel rounded-[1.5rem] p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="kicker">Calibration</p>
                  <p className="text-[0.68rem] text-[var(--muted)]">
                    1,075 held-out games
                  </p>
                </div>

                {/* ── Calibration chart ── */}
                <div className="mt-4">
                  <svg
                    viewBox="0 0 222 224"
                    className="w-full"
                    role="img"
                    aria-label="Calibration chart showing predicted probability vs actual win rate across 5 confidence buckets. Points near the diagonal indicate good calibration."
                  >
                    {/* Grid lines */}
                    {[25, 50, 75].map((pct) => (
                      <g key={pct} opacity={0.35}>
                        <line
                          x1={CX.l} y1={py(pct)} x2={CX.l + CX.w} y2={py(pct)}
                          stroke="var(--rule-strong)" strokeWidth={0.5}
                        />
                        <line
                          x1={px(pct)} y1={CX.t} x2={px(pct)} y2={CX.t + CX.h}
                          stroke="var(--rule-strong)" strokeWidth={0.5}
                        />
                      </g>
                    ))}

                    {/* Y-axis labels */}
                    {[25, 50, 75].map((pct) => (
                      <text
                        key={`y-${pct}`} x={CX.l - 5} y={py(pct) + 1}
                        textAnchor="end" dominantBaseline="middle"
                        fill="var(--muted)" fontSize={7.5} opacity={0.7}
                      >
                        {pct}%
                      </text>
                    ))}

                    {/* X-axis labels */}
                    {[25, 50, 75].map((pct) => (
                      <text
                        key={`x-${pct}`} x={px(pct)} y={CX.t + CX.h + 14}
                        textAnchor="middle"
                        fill="var(--muted)" fontSize={7.5} opacity={0.7}
                      >
                        {pct}%
                      </text>
                    ))}

                    {/* Axis titles */}
                    <text
                      x={CX.l + CX.w / 2} y={CX.t + CX.h + 26}
                      textAnchor="middle"
                      fill="var(--muted)" fontSize={7}
                      letterSpacing="0.12em"
                    >
                      PREDICTED
                    </text>
                    <text
                      x={0} y={0}
                      textAnchor="middle"
                      fill="var(--muted)" fontSize={7}
                      letterSpacing="0.12em"
                      transform={`translate(8, ${CX.t + CX.h / 2}) rotate(-90)`}
                    >
                      ACTUAL
                    </text>

                    {/* Perfect calibration diagonal */}
                    <line
                      x1={px(0)} y1={py(0)} x2={px(100)} y2={py(100)}
                      stroke="var(--rule-strong)" strokeWidth={1}
                      strokeDasharray="4 3" opacity={0.5}
                    />
                    <text
                      x={px(92)} y={py(95)}
                      fill="var(--muted)" fontSize={6.5} opacity={0.5}
                      textAnchor="end"
                    >
                      perfect
                    </text>

                    {/* Data points — radius encodes sample size */}
                    {calibrationBuckets.map((b) => (
                      <circle
                        key={b.predicted}
                        cx={px(b.predicted)}
                        cy={py(b.actual)}
                        r={dotR(b.games)}
                        fill="var(--ink)"
                        opacity={0.72}
                      />
                    ))}
                  </svg>
                </div>

                {/* ── Key metrics row ── */}
                <div className="mt-3 grid grid-cols-3 gap-3 border-t pt-4 soft-rule">
                  {[
                    { label: "Accuracy", value: "67.1%" },
                    { label: "Log loss", value: "0.6065" },
                    { label: "Brier", value: "0.2101" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <p
                        className="text-[1.25rem] leading-none tracking-[-0.03em] text-[var(--ink)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {m.value}
                      </p>
                      <p className="mt-1.5 text-[0.62rem] tracking-[0.16em] uppercase text-[var(--muted)]">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ── Season sparkline ── */}
                <div className="mt-4 border-t pt-4 soft-rule">
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[var(--muted)]">
                    Monthly accuracy, Oct – Mar
                  </p>
                  <div className="mt-3 px-1">
                    <svg
                      viewBox={`-4 0 188 ${sparkH + sparkPad * 2 + 1}`}
                      className="w-full"
                      role="img"
                      aria-label="Monthly accuracy sparkline showing performance from October 2025 to March 2026"
                    >
                      <path
                        d={sparkArea}
                        fill="var(--ink)" opacity={0.06}
                      />
                      <path
                        d={sparkLine}
                        fill="none" stroke="var(--ink)" strokeWidth={1.5}
                        strokeLinecap="round" strokeLinejoin="round"
                        opacity={0.55}
                      />
                      {sparkPoints.map((p, i) => (
                        <circle
                          key={monthlyAccuracy[i].month}
                          cx={p.x} cy={p.y} r={2.2}
                          fill="var(--ink)" opacity={0.65}
                        />
                      ))}
                    </svg>
                  </div>
                  <div className="mt-1 flex justify-between px-1">
                    {monthlyAccuracy.map((m) => (
                      <span
                        key={m.month}
                        className="text-[0.58rem] text-[var(--muted)]"
                      >
                        {m.month}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-14 border-t pt-8 soft-rule">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3
              className="text-[2.1rem] leading-[0.96] tracking-[-0.04em] text-[var(--ink)] sm:text-[2.55rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Additional work
            </h3>
            <p className="max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
              Product work, simulation work, and lower-level implementation
              detail.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
            {supportingProjects.map((project) => (
              <article key={project.title} className="border-t pt-6 soft-rule">
                <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
                  <div>
                    <p className="kicker">{project.role}</p>
                    <h4
                      className="mt-3 text-3xl leading-[0.98] tracking-[-0.035em] text-[var(--ink)] sm:text-[2.1rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--muted)]">{project.date}</p>
                </div>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--ink)]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs tracking-[0.16em] uppercase text-[var(--muted)]">
                  {project.tech.join(" / ")}
                </p>

                {project.link && (
                  <div className="mt-5">
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rule-link text-sm font-medium text-[var(--ink)]"
                    >
                      {project.link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
