import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const FounderJayapal = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Portrait of Jayapal, founder of AgriShala</title>
    <defs>
      <linearGradient id="bgJay" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#365520" />
        <stop offset="100%" stopColor="#1f3a1f" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#bgJay)" />
    {/* bamboo */}
    <g stroke="#5c3a1e" strokeWidth="6" fill="none">
      <line x1="80" x2="80" y1="0" y2="600" />
      <line x1="730" x2="730" y1="0" y2="600" />
      <line x1="80" x2="80" y1="120" y2="160" />
      <line x1="80" x2="80" y1="300" y2="340" />
      <line x1="80" x2="80" y1="460" y2="500" />
      <line x1="730" x2="730" y1="100" y2="140" />
      <line x1="730" x2="730" y1="280" y2="320" />
      <line x1="730" x2="730" y1="450" y2="490" />
    </g>
    <g fill="#5d8a36">
      <ellipse cx="60" cy="120" rx="40" ry="10" />
      <ellipse cx="750" cy="100" rx="40" ry="10" />
      <ellipse cx="55" cy="300" rx="38" ry="9" />
      <ellipse cx="755" cy="280" rx="38" ry="9" />
    </g>
    {/* circular portrait frame */}
    <circle cx="400" cy="300" r="180" fill="#a87a4b" />
    <circle cx="400" cy="300" r="170" fill="#c19a6b" />
    <circle
      cx="400"
      cy="300"
      r="170"
      fill="none"
      stroke="#5c3a1e"
      strokeWidth="3"
    />
    {/* face */}
    <g transform="translate(400 280)">
      <ellipse cx="0" cy="0" rx="80" ry="100" fill="#d2b07e" />
      {/* hair */}
      <path
        d="M-80 -10 Q -90 -90 0 -100 Q 90 -90 80 -10 Q 60 -50 30 -55 Q 0 -60 -30 -55 Q -60 -50 -80 -10 Z"
        fill="#2a1a0d"
      />
      {/* eyes */}
      <ellipse cx="-25" cy="-10" rx="4" ry="3" fill="#14291a" />
      <ellipse cx="25" cy="-10" rx="4" ry="3" fill="#14291a" />
      {/* brows */}
      <path d="M-38 -22 q 13 -6 26 0" stroke="#2a1a0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M12 -22 q 13 -6 26 0" stroke="#2a1a0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* nose */}
      <path d="M0 0 q -4 20 -2 30 q 4 4 8 0" stroke="#8b5a2b" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* smile */}
      <path d="M-22 35 q 22 18 44 0" stroke="#5c3a1e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* mustache */}
      <path d="M-22 28 q 22 10 44 0" stroke="#3f2814" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
    {/* shirt collar */}
    <path d="M340 460 Q 400 430 460 460 L 460 540 L 340 540 Z" fill="#f7f2e7" />
    <path d="M340 460 Q 400 430 460 460 L 460 540 L 340 540 Z" fill="none" stroke="#5c3a1e" strokeWidth="2" />
    {/* shirt */}
    <path d="M310 480 L 490 480 L 530 600 L 270 600 Z" fill="#f7f2e7" stroke="#5c3a1e" strokeWidth="2" />
    {/* name tag */}
    <rect x="345" y="500" width="110" height="40" rx="4" fill="#365520" />
    <text
      x="400"
      y="525"
      textAnchor="middle"
      fill="#f7f2e7"
      fontFamily="serif"
      fontSize="14"
      letterSpacing="2"
    >
      JAYAPAL
    </text>
  </svg>
);

export default FounderJayapal;
