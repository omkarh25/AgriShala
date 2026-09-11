import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const Temple = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Jenumutti temple silhouette in the hills</title>
    <defs>
      <linearGradient id="dusk" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3f2814" />
        <stop offset="50%" stopColor="#8b5a2b" />
        <stop offset="100%" stopColor="#e3cfae" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#dusk)" />
    {/* distant hills */}
    <path
      d="M0 380 Q 200 320 400 360 T 800 340 L 800 600 L 0 600 Z"
      fill="#5c3a1e"
      opacity="0.6"
    />
    <path
      d="M0 430 Q 200 380 400 410 T 800 400 L 800 600 L 0 600 Z"
      fill="#3f2814"
      opacity="0.85"
    />
    {/* temple */}
    <g transform="translate(400 360)">
      {/* base */}
      <rect x="-110" y="0" width="220" height="60" fill="#a87a4b" />
      <rect x="-110" y="0" width="220" height="60" fill="none" stroke="#5c3a1e" strokeWidth="2" />
      {/* pillars */}
      <rect x="-90" y="-100" width="14" height="100" fill="#8b5a2b" />
      <rect x="-30" y="-100" width="14" height="100" fill="#8b5a2b" />
      <rect x="30" y="-100" width="14" height="100" fill="#8b5a2b" />
      <rect x="80" y="-100" width="14" height="100" fill="#8b5a2b" />
      {/* roof pyramid */}
      <path d="M-110 -100 L 0 -180 L 110 -100 Z" fill="#5c3a1e" />
      <path d="M-110 -100 L 0 -180 L 110 -100 Z" fill="none" stroke="#3f2814" strokeWidth="2" />
      {/* finial */}
      <circle cx="0" cy="-190" r="8" fill="#a87a4b" />
      <rect x="-2" y="-220" width="4" height="32" fill="#a87a4b" />
      {/* lamp */}
      <ellipse cx="0" cy="-5" rx="6" ry="3" fill="#fbe4b8" />
      <path
        d="M0 -8 q -3 -6 0 -12 q 3 6 0 12"
        fill="#f0bd6e"
        opacity="0.9"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </g>
    {/* trees */}
    <g fill="#1f3a1f">
      <circle cx="120" cy="430" r="40" />
      <rect x="115" y="430" width="10" height="40" fill="#3f2814" />
      <circle cx="180" cy="450" r="30" />
      <rect x="176" y="450" width="8" height="30" fill="#3f2814" />
      <circle cx="650" cy="430" r="45" />
      <rect x="645" y="430" width="10" height="40" fill="#3f2814" />
      <circle cx="710" cy="450" r="30" />
      <rect x="706" y="450" width="8" height="30" fill="#3f2814" />
    </g>
  </svg>
);

export default Temple;
