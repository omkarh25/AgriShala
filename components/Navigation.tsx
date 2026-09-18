"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Minimal, sticky-on-scroll navigation that fades into the page.
 * Kept paper-light so it never competes with the illustrations.
 *
 * Links split into three groups:
 *   - Brand (logo, on the left)
 *   - Story anchors (The vision · The place · Two days · The platform · Founder)
 *   - Pillar pages + Docs (Subscribe · Stay · Docs)
 *   - Primary CTA on the right (Reserve a seat).
 */
export default function Navigation() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const storyLinks = [
    { href: "#paths", label: "Paths" },
    { href: "/pilot-farm", label: "Pilot farm" },
    { href: "#founder", label: "Founder" },
    { href: "#contact", label: "Contact" },
  ];

  const pageLinks = [
    { href: "/docs", label: "Docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/85 backdrop-blur-md border-b border-earth-200/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-2xl italic tracking-tight text-forest-900"
        >
          Agri<span className="text-earth-700">Shala</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {storyLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-forest-800 hover:text-earth-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex lg:hidden items-center gap-5">
          {/* Compact story set on medium screens */}
          {storyLinks.slice(0, 3).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-forest-800 hover:text-earth-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <ul className="hidden md:flex items-center gap-5">
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm tracking-wide text-forest-800/80 hover:text-earth-700 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#invitation"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-forest-800 text-cream text-sm tracking-wide hover:bg-forest-700 transition-colors"
          >
            Reserve a seat
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
