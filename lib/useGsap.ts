"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registers the ScrollTrigger plugin on the client exactly once.
 *
 * Returns the registered module-level gsap instance so callers can
 * chain animations safely. Components using this hook must opt-in
 * to "use client" themselves.
 */
let registered = false;

export function useGsap() {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    return () => {
      // Refresh triggers after layout settles; safe to call repeatedly.
      ScrollTrigger.refresh();
    };
  }, []);
}

export { gsap, ScrollTrigger };
