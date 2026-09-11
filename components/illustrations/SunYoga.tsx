import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const SunYoga = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Sun rising over fields as a figure practices yoga</title>
    <defs>
      <radialGradient id="sunRise" cx="50%" cy="60%" r="55%">
        <stop offset="0%" stopColor="#fde4a8" />
        <stop offset="40%" stopColor="#f0bd6e" />
        <stop offset="100%" stopColor="#a87a4b" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#sunRise)" />
    <circle cx="400" cy="380" r="120" fill="#fff3d0" opacity="0.85" />
    <circle cx="400" cy="380" r="90" fill="#fbd58c" />
    {/* horizon hill */}
    <path d="M0 460 Q 400 380 800 470 L 800 600 L 0 600 Z" fill="#365520" />
    <path d="M0 500 Q 400 440 800 510 L 800 600 L 0 600 Z" fill="#1f3a1f" />
    {/* meditating figure */}
    <g transform="translate(400 460)">
      <ellipse cx="0" cy="55" rx="55" ry="8" fill="#000" opacity="0.15" />
      <circle cx="0" cy="-55" r="14" fill="#3f2814" />
      <path
        d="M-22 -25 Q 0 -42 22 -25 Q 28 5 18 25 Q 0 35 -18 25 Q -28 5 -22 -25 Z"
        fill="#5c3a1e"
      />
      {/* crossed legs */}
      <path
        d="M-50 25 Q -25 45 0 35 Q 25 45 50 25 Q 35 50 0 55 Q -35 50 -50 25 Z"
        fill="#3f2814"
      />
      {/* arms resting */}
      <path
        d="M-22 0 Q -38 18 -28 30 M 22 0 Q 38 18 28 30"
        stroke="#5c3a1e"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    {/* breath rings */}
    <g
      fill="none"
      stroke="#f7f2e7"
      strokeWidth="2"
      opacity="0.6"
      transform="translate(400 380)"
    >
      <circle r="160" />
      <circle r="200" />
      <circle r="240" />
    </g>
    {/* birds */}
    <g
      stroke="#3f2814"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      className="origin-center"
    >
      <path d="M150 130 q 10 -8 20 0 q 10 -8 20 0" />
      <path d="M220 100 q 8 -6 16 0 q 8 -6 16 0" />
      <path d="M610 140 q 10 -8 20 0 q 10 -8 20 0" />
    </g>
  </svg>
);

export default SunYoga;
