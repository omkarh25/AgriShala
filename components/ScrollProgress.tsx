"use client";

import { useEffect } from "react";

/**
 * A hair-thin scroll progress indicator fixed to the top of the
 * viewport. Implemented purely with a CSS variable so the painting
 * stays on the compositor (no layout, no reflow).
 *
 * Mounts once at the root layout level; visible across the homepage
 * and every docs page. Hidden on the docs index page is unnecessary
 * — it doesn't compete with the nav.
 */
export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? doc.scrollTop / max : 0;
      bar.style.setProperty("--scroll", `${(ratio * 100).toFixed(2)}%`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div id="scroll-progress-bar" className="scroll-progress" aria-hidden />;
}
