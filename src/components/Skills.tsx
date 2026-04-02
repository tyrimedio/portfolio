const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "Java"],
  },
  {
    label: "ML / Data",
    skills: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "LightGBM",
      "SHAP",
      "Feature Engineering",
      "Backtesting",
    ],
  },
  {
    label: "Tools & Infra",
    skills: ["Git", "systemd", "Workflow Automation", "Raspberry Pi", "ML Pipelines"],
  },
  {
    label: "Concepts",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Data Analysis",
      "Model Validation",
      "Data Visualization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-band wash-skills px-5 sm:px-8 lg:px-12"
    >
      <div className="editorial-container grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,1.12fr)] lg:gap-14">
        <div className="editorial-pin">
          <p className="kicker">Capabilities</p>
          <h2
            className="section-title mt-4 max-w-[13ch] !leading-[1.02] !tracking-[-0.018em] text-[var(--ink)] sm:max-w-[14ch] lg:max-w-[12ch]"
          >
            A toolkit built for applied machine learning work.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            My strongest work sits at the intersection of modeling, validation,
            and the infrastructure required to keep technical ideas useful.
          </p>
        </div>

        <div className="space-y-7">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="grid gap-4 border-t pt-6 soft-rule md:grid-cols-[clamp(7rem,18vw,8.25rem)_minmax(0,1fr)]"
            >
              <p className="kicker md:pt-1">{cat.label}</p>
              <p className="text-base leading-8 text-[var(--ink)] sm:text-lg">
                {cat.skills.join(" / ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
