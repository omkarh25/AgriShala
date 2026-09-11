import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const FarmHands = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Hands holding rich soil with a sprouting seed</title>
    <defs>
      <linearGradient id="soilGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#8b5a2b" />
        <stop offset="100%" stopColor="#3f2814" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="#f7f2e7" />
    {/* radial sun */}
    <g
      stroke="#c19a6b"
      strokeWidth="1"
      opacity="0.4"
      transform="translate(400 300)"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          x2="280"
          transform={`rotate(${(i * 360) / 24})`}
        />
      ))}
    </g>
    <circle cx="400" cy="300" r="250" fill="#f1e8d9" />
    {/* hand 1 */}
    <path
      d="M200 480 Q 180 360 240 280 Q 260 240 300 250 Q 330 200 370 230 Q 410 220 420 270 Q 440 360 410 440 Q 380 510 280 510 Z"
      fill="#c19a6b"
      stroke="#5c3a1e"
      strokeWidth="2"
    />
    {/* hand 2 */}
    <path
      d="M600 480 Q 620 360 560 280 Q 540 240 500 250 Q 470 200 430 230 Q 390 220 380 270 Q 360 360 390 440 Q 420 510 520 510 Z"
      fill="#c19a6b"
      stroke="#5c3a1e"
      strokeWidth="2"
    />
    {/* soil pile */}
    <ellipse cx="400" cy="380" rx="160" ry="40" fill="url(#soilGrad)" />
    {/* soil clumps */}
    <circle cx="340" cy="370" r="14" fill="#5c3a1e" />
    <circle cx="380" cy="385" r="10" fill="#3f2814" />
    <circle cx="430" cy="368" r="12" fill="#8b5a2b" />
    <circle cx="470" cy="380" r="8" fill="#5c3a1e" />
    {/* sapling */}
    <g transform="translate(400 360)">
      <path
        d="M0 0 q -2 -40 0 -90"
        stroke="#365520"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0 -50 q -25 -10 -40 -30 q 25 -5 40 10 Z"
        fill="#5d8a36"
      />
      <path
        d="M0 -70 q 25 -10 40 -30 q -25 -5 -40 10 Z"
        fill="#7fa650"
      />
      <path
        d="M0 -85 q -15 -8 -25 -22 q 18 -2 25 8 Z"
        fill="#456d28"
      />
    </g>
  </svg>
);

export default FarmHands;
