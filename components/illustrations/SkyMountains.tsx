import React from "react";

/**
 * Hand-drawn style SVG illustrations that serve as placeholders
 * for photographs. Each illustration has a clear <title> and uses
 * a consistent palette of forest greens and earth browns so the
 * site reads as one canvas before real photos replace them.
 */

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const SkyMountains = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Distant mountain range at golden hour</title>
    <defs>
      <linearGradient id="skyGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f1d6a4" />
        <stop offset="55%" stopColor="#e8b97a" />
        <stop offset="100%" stopColor="#a87a4b" />
      </linearGradient>
      <linearGradient id="m1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#365520" />
        <stop offset="100%" stopColor="#1f3a1f" />
      </linearGradient>
      <linearGradient id="m2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#456d28" />
        <stop offset="100%" stopColor="#2a4422" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#skyGrad)" />
    <circle cx="600" cy="220" r="70" fill="#fbe4b8" opacity="0.9" />
    <path
      d="M0 380 L120 280 L210 340 L310 250 L410 320 L520 240 L640 320 L760 270 L800 310 L800 600 L0 600 Z"
      fill="url(#m1)"
    />
    <path
      d="M0 460 L100 400 L200 440 L320 380 L440 430 L560 390 L680 440 L800 410 L800 600 L0 600 Z"
      fill="url(#m2)"
    />
    <g opacity="0.35" fill="#1f3a1f">
      {Array.from({ length: 60 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 53) % 800}
          cy={460 + ((i * 17) % 60)}
          r={3 + (i % 4)}
        />
      ))}
    </g>
  </svg>
);

export default SkyMountains;
