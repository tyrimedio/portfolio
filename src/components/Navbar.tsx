"use client";

import { useEffect, useId, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileDialogRef = useRef<HTMLDivElement | null>(null);
  const shouldRestoreFocusRef = useRef(true);
  const mobileNavId = useId();
  const mobileNavTitleId = useId();

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href) as HTMLElement | null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    shouldRestoreFocusRef.current = true;

    const dialog = mobileDialogRef.current;
    const main = document.querySelector("main");
    const header = document.querySelector("[data-site-header]");
    const menuButton = menuButtonRef.current;
    const previousBodyOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusableElements = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      ).filter((element) => !element.hasAttribute("disabled"));

    document.body.style.overflow = "hidden";
    header?.setAttribute("aria-hidden", "true");
    main?.setAttribute("aria-hidden", "true");
    main?.setAttribute("inert", "");

    const focusableElements = getFocusableElements();
    (focusableElements[0] ?? dialog)?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!dialog) return;

      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey) {
        if (
          document.activeElement === first ||
          document.activeElement === dialog
        ) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      header?.removeAttribute("aria-hidden");
      main?.removeAttribute("aria-hidden");
      main?.removeAttribute("inert");
      document.removeEventListener("keydown", handleKeyDown);

      if (shouldRestoreFocusRef.current) {
        menuButton?.focus();
      }

      shouldRestoreFocusRef.current = true;
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    shouldRestoreFocusRef.current = false;
    setMobileOpen(false);
  };

  return (
    <>
      <header
        data-site-header
        className="site-header-surface fixed inset-x-0 top-0 z-50 border-b soft-rule backdrop-blur-md"
      >
        <div className="editorial-container flex items-center justify-between gap-6 py-4 sm:py-5">
          <a href="#home" className="min-w-0">
            <p className="text-base font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Ty Rimedio
            </p>
            <p className="mt-1 hidden text-xs tracking-[0.18em] uppercase text-[var(--muted)] sm:block">
              Data Science, ML, and Systems Work
            </p>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-3 xl:gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative inline-flex min-h-11 items-center py-2 text-[0.72rem] tracking-[0.2em] uppercase after:absolute after:bottom-[0.45rem] after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-200 ${
                        isActive
                          ? "font-semibold text-[var(--ink)] after:scale-x-100"
                          : "text-[var(--muted)] after:scale-x-0 hover:text-[var(--ink)] hover:after:scale-x-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen((open) => !open)}
            className="min-h-11 min-w-11 rounded-full border px-4 text-xs tracking-[0.2em] uppercase text-[var(--ink)] soft-rule md:min-h-12 md:min-w-12 md:px-5 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            aria-haspopup="dialog"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          ref={mobileDialogRef}
          className="site-overlay-surface fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={mobileNavTitleId}
          tabIndex={-1}
        >
          <div className="editorial-container flex h-full flex-col pt-6 pb-8">
            <div className="flex items-center justify-between gap-4 border-b pb-5 soft-rule">
              <p id={mobileNavTitleId} className="kicker">
                Site navigation
              </p>
              <button
                onClick={() => setMobileOpen(false)}
                className="min-h-11 min-w-11 rounded-full border px-4 text-xs tracking-[0.2em] uppercase text-[var(--ink)] soft-rule"
              >
                Close
              </button>
            </div>

            <nav
              id={mobileNavId}
              aria-label="Primary"
              className="flex flex-1 items-center pt-8"
            >
              <ul className="w-full border-t soft-rule">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);

                  return (
                    <li key={item.label} className="border-b soft-rule">
                      <a
                        href={item.href}
                        onClick={handleNavClick}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex min-h-16 items-center justify-between gap-4 py-6 text-[2rem] font-medium tracking-[-0.03em] ${
                          isActive
                            ? "font-semibold text-[var(--ink)] underline decoration-[1.5px] underline-offset-[0.22em]"
                            : "text-[var(--ink)]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <span className="text-xs tracking-[0.18em] uppercase text-[var(--ink)]">
                              Current
                            </span>
                          )}
                          <span className="text-sm tracking-[0.2em] uppercase text-[var(--muted)]">
                            0{i + 1}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
