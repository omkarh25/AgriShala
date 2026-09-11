import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const Pin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Map pin locator</title>
    <g transform="translate(400 300)">
      <path
        d="M0 0 C -28 -50 -50 -80 -50 -110 A 50 50 0 1 1 50 -110 C 50 -80 28 -50 0 0 Z"
        fill="#365520"
      />
      <circle cx="0" cy="-110" r="22" fill="#f7f2e7" />
      <circle cx="0" cy="-110" r="10" fill="#365520" />
    </g>
  </svg>
);

/**
 * A flowing, organic section divider — a hand-drawn vine.
 */
export const VineDivider = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 60"
    width="100%"
    height="60"
    preserveAspectRatio="none"
    {...p}
  >
    <title>Vine divider</title>
    <path
      d="M0 30 Q 150 0 300 30 T 600 30 T 900 30 T 1200 30"
      stroke="#5d8a36"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.5"
    />
    <g fill="#365520">
      <ellipse cx="150" cy="20" rx="4" ry="8" transform="rotate(-30 150 20)" />
      <ellipse cx="450" cy="40" rx="4" ry="8" transform="rotate(30 450 40)" />
      <ellipse cx="750" cy="20" rx="4" ry="8" transform="rotate(-30 750 20)" />
      <ellipse cx="1050" cy="40" rx="4" ry="8" transform="rotate(30 1050 40)" />
    </g>
  </svg>
);

/**
 * Decorative leaf cluster — used in headers.
 */
export const LeafCluster = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...p}
  >
    <title>Leaf cluster</title>
    <g transform="translate(100 100)">
      <g fill="#365520">
        <ellipse rx="60" ry="18" transform="rotate(-30)" />
        <ellipse rx="60" ry="18" transform="rotate(30)" />
        <ellipse rx="60" ry="18" transform="rotate(90)" />
      </g>
      <g fill="#5d8a36">
        <ellipse rx="48" ry="14" transform="rotate(-45)" />
        <ellipse rx="48" ry="14" transform="rotate(45)" />
      </g>
      <g fill="#7fa650">
        <ellipse rx="36" ry="10" transform="rotate(0)" />
      </g>
      <circle r="6" fill="#a87a4b" />
    </g>
  </svg>
);

/**
 * Sapling mark — used in dividers.
 */
export const Sapling = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 100"
    width="60"
    height="100"
    {...p}
  >
    <title>Sapling</title>
    <path
      d="M30 100 L 30 40"
      stroke="#5c3a1e"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M30 60 q -22 -8 -28 -24 q 20 0 28 12 Z" fill="#365520" />
    <path d="M30 45 q 22 -8 28 -24 q -20 0 -28 12 Z" fill="#5d8a36" />
    <path d="M30 30 q -15 -6 -20 -18 q 14 0 20 8 Z" fill="#7fa650" />
  </svg>
);

/**
 * Earth + sky horizon line — used as a section seam.
 */
export const Horizon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 200"
    width="100%"
    height="200"
    preserveAspectRatio="none"
    {...p}
  >
    <title>Horizon</title>
    <defs>
      <linearGradient id="horizonSky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#e8b97a" />
        <stop offset="100%" stopColor="#f1d6a4" />
      </linearGradient>
    </defs>
    <rect width="1200" height="200" fill="url(#horizonSky)" />
    <path
      d="M0 140 Q 300 100 600 130 T 1200 120 L 1200 200 L 0 200 Z"
      fill="#365520"
    />
    <path
      d="M0 160 Q 300 130 600 150 T 1200 145 L 1200 200 L 0 200 Z"
      fill="#1f3a1f"
    />
    <circle cx="900" cy="80" r="40" fill="#fbe4b8" opacity="0.9" />
  </svg>
);
