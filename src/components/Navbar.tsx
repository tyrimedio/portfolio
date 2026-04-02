"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 180 && !mobileOpen);
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between border border-[var(--line)] bg-[rgba(250,246,239,0.84)] px-4 py-3 shadow-[0_12px_40px_rgba(63,38,17,0.06)] backdrop-blur md:px-6">
          <a href="#home" className="min-w-0">
            <p className="eyebrow">Ty Rimedio</p>
            <p className="truncate text-sm text-[var(--muted)]">
              ML systems, product engineering, sports data
            </p>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`border-b px-1 py-1 text-sm transition-colors ${
                    isActive
                      ? "border-[var(--accent)] text-[var(--foreground)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--foreground)] md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="relative h-4 w-4">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 3 }}
                className="absolute left-0 top-0 h-px w-4 bg-current"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[7px] h-px w-4 bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: 7 } : { rotate: 0, y: 11 }}
                className="absolute left-0 top-0 h-px w-4 bg-current"
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[rgba(244,239,230,0.94)] px-4 pt-24 md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col border border-[var(--line)] bg-[var(--panel-strong)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`border-b border-[var(--line)] px-5 py-4 text-lg last:border-b-0 ${
                      isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
