const highlights = [
  { label: "Focus", value: "Data Science & ML", tone: "tone-apricot" },
  { label: "University", value: "Indiana University", tone: "tone-sky" },
  { label: "Graduation", value: "May 2026", tone: "tone-apricot" },
  { label: "Location", value: "Bloomington, IN", tone: "tone-sky" },
];

export default function About() {
  return (
    <section id="about" className="section-band wash-about px-5 sm:px-8 lg:px-12">
      <div className="editorial-container">
        <div className="max-w-4xl">
          <p className="kicker">About</p>
          <h2 className="section-title mt-4 text-[var(--ink)]">
            Built around technical depth, not portfolio theater.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-14">
          <div className="space-y-8">
            <p className="max-w-3xl text-[1.16rem] leading-8 text-[var(--ink)] sm:text-[1.28rem] sm:leading-9">
              The work I care about most sits in the uncomfortable middle
              ground between modeling, engineering, and decision-making.
            </p>

            <div className="grid gap-7 border-t pt-7 soft-rule md:grid-cols-2">
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                I&apos;m a computer science senior at Indiana University focused
                on data science and machine learning, especially when the work
                has to survive real constraints and real users.
              </p>
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                Right now I&apos;m running an NBA prediction pipeline on a
                Raspberry Pi, iterating on feature engineering, backtesting,
                and evaluation so the output is useful outside a notebook.
              </p>
            </div>
          </div>

          <div className="editorial-pin grid gap-7">
            <dl className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[1.15rem] border p-5 ${item.tone}`}
                >
                  <dt className="kicker">{item.label}</dt>
                  <dd className="mt-3 text-base leading-7 text-[var(--ink)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="max-w-xl border-l pl-5 text-base leading-8 text-[var(--muted)] soft-rule sm:text-lg">
              I&apos;m most interested in roles where clean pipelines,
              reproducible experiments, and measurable model performance matter
              as much as the model itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
