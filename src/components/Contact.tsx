"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    value: "trimedio03@gmail.com",
    href: "mailto:trimedio03@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/tyrimedio",
    href: "https://github.com/tyrimedio",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ty-rimedio-33576226b",
    href: "https://linkedin.com/in/ty-rimedio-33576226b/",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-frame grid overflow-hidden lg:grid-cols-[minmax(0,1fr)_360px]"
        >
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="eyebrow">Contact</p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Looking for a team that cares about rigor, speed, and shipping.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              I am targeting ML engineering, data engineering, and software roles after graduation in May 2026. If the work is real and the standards are high, I am interested.
            </p>
          </div>

          <div className="rule-grid border-t border-[var(--line)] px-6 py-8 sm:px-8 lg:border-l lg:border-t-0">
            <p className="eyebrow mb-4">Direct lines</p>
            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between border border-[var(--line)] bg-[rgba(255,251,246,0.8)] px-4 py-4 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {link.label}
                  </span>
                  <span>{link.value}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 border border-[var(--line)] bg-[rgba(255,251,246,0.8)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Availability
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                Open to internships, new grad roles, and conversations around ML systems, analytics, and product engineering.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="px-2 pt-4 text-center text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          Built by Ty Rimedio / {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
