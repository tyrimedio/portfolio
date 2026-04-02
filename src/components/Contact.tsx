const links = [
  {
    label: "Email",
    href: "mailto:trimedio03@gmail.com",
    display: "trimedio03@gmail.com",
    tone: "text-[var(--accent)]",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/tyrimedio",
    display: "github.com/tyrimedio",
    tone: "text-[var(--teal)]",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ty-rimedio-33576226b/",
    display: "linkedin.com/in/ty-rimedio",
    tone: "text-[var(--accent-soft)]",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-band wash-contact px-5 sm:px-8 lg:px-12"
    >
      <div className="editorial-container">
        <div className="paper-panel tone-apricot rounded-[1.7rem] p-6 sm:p-8 lg:p-9">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-14">
            <div className="editorial-pin">
              <p className="kicker">Contact</p>
              <h2 className="section-title mt-4 text-[var(--ink)]">
                If you&apos;re building serious data products, I&apos;d like to
                hear about it.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I&apos;m looking for opportunities in data science, machine
                learning, and data engineering. If my work looks relevant,
                reach out directly or pass my name along.
              </p>

              <p className="mt-8 max-w-lg border-l pl-5 text-base leading-8 text-[var(--muted)] soft-rule">
                The bar is simple: specific enough to earn a conversation, and
                credible enough to be worth forwarding.
              </p>
            </div>

            <div className="grid gap-5 self-end">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex min-h-12 items-center justify-between gap-4 border-b py-4 text-sm text-[var(--ink)] hover:text-[var(--accent)] soft-rule sm:text-base"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className={link.tone}>{link.icon}</span>
                    <span className="truncate">{link.display}</span>
                  </span>
                  <span className="kicker text-[var(--muted)] group-hover:text-[var(--accent)]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs tracking-[0.18em] uppercase text-[var(--muted)]">
          Ty Rimedio &middot; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
