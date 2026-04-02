const currentFocus = [
  "Running an NBA prediction pipeline on a Raspberry Pi",
  "Building leak-aware backtesting and feature workflows",
  "Looking for 2026 data science, ML, and data engineering roles",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="wash-hero relative px-5 pb-14 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36"
    >
      <div className="editorial-container">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.02fr)_360px] lg:items-start lg:gap-12">
          <div>
            <div className="max-w-4xl">
              <p className="kicker max-w-md">
                Data science, machine learning, and predictive systems
              </p>

              <h1 className="display-title mt-5 max-w-4xl text-[var(--ink)]">
                Ty Rimedio
              </h1>

              <p className="mt-7 max-w-3xl text-[clamp(1.4rem,2.9vw,2.15rem)] leading-[1.08] tracking-[-0.04em] text-[var(--ink)]">
                I build machine learning pipelines, backtesting systems, and
                analytics products that still hold up after the prototype phase.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I&apos;m a computer science senior at Indiana University focused
                on turning messy, real-world data into models and systems people
                can actually trust, use, and ship.
              </p>

              <div className="mt-8 grid gap-6 border-t pt-6 soft-rule md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
                <div className="grid gap-3 text-sm font-medium text-[var(--ink)] sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4 sm:text-base">
                  <a href="#projects" className="cta-primary">
                    Selected work
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="#contact" className="rule-link">
                    Reach out
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href="/Ty_Rimedio_Resume.docx"
                    download
                    className="cta-secondary"
                  >
                    Download resume
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

                <div className="space-y-4 border-t pt-5 soft-rule md:border-l md:border-t-0 md:pt-0 md:pl-5">
                  <div>
                    <p className="kicker">Discipline</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--ink)]">
                      Machine learning, data science, and applied systems work.
                    </p>
                  </div>
                  <div>
                    <p className="kicker">Goal</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--ink)]">
                      Be memorable enough that someone reaches out or forwards my
                      name.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="paper-panel tone-sky h-fit rounded-[1.5rem] p-6 sm:p-7 lg:mt-4">
              <p className="kicker">Current focus</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
                {currentFocus.map((item) => (
                  <li
                    key={item}
                    className="border-b pb-4 last:border-b-0 last:pb-0 soft-rule"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <dl className="mt-7 grid grid-cols-2 gap-4 border-t pt-5 soft-rule">
                <div>
                  <dt className="kicker">Location</dt>
                  <dd className="mt-2 text-sm text-[var(--ink)]">
                    Bloomington, IN
                  </dd>
                </div>
                <div>
                  <dt className="kicker">Graduation</dt>
                  <dd className="mt-2 text-sm text-[var(--ink)]">May 2026</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
