import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const CityDisconnect = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>The city dweller disconnected from the source of food</title>
    <defs>
      <linearGradient id="splitCity" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3a6fb8" />
        <stop offset="100%" stopColor="#14291a" />
      </linearGradient>
      <linearGradient id="splitFarm" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#5d8a36" />
        <stop offset="100%" stopColor="#365520" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="#efe7d3" />
    {/* split screen */}
    <rect x="0" y="0" width="400" height="600" fill="url(#splitCity)" opacity="0.85" />
    <rect x="400" y="0" width="400" height="600" fill="url(#splitFarm)" opacity="0.85" />
    {/* divider tear */}
    <path
      d="M400 0 L 395 80 L 405 160 L 395 240 L 410 320 L 395 400 L 405 480 L 400 600"
      stroke="#5c3a1e"
      strokeWidth="3"
      fill="none"
    />
    {/* city side: skyscrapers */}
    <g fill="#0b180e">
      <rect x="40" y="320" width="60" height="200" />
      <rect x="110" y="260" width="50" height="260" />
      <rect x="170" y="350" width="40" height="170" />
      <rect x="220" y="280" width="70" height="240" />
      <rect x="300" y="340" width="50" height="180" />
    </g>
    {/* lit windows */}
    <g fill="#fde4a8" opacity="0.8">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 50 + ((i * 13) % 300);
        const y = 280 + ((i * 23) % 220);
        return <rect key={i} x={x} y={y} width="6" height="8" />;
      })}
    </g>
    {/* city dweller silhouette with phone */}
    <g transform="translate(180 460)">
      <circle cx="0" cy="-50" r="14" fill="#0b180e" />
      <path d="M-22 -38 Q 0 -45 22 -38 L 28 40 L -28 40 Z" fill="#0b180e" />
      <rect x="14" y="-20" width="14" height="22" fill="#fde4a8" />
    </g>
    {/* farm side: hills + crops */}
    <g fill="#365520">
      <path d="M400 380 Q 500 320 600 380 L 600 600 L 400 600 Z" />
      <path d="M600 360 Q 700 300 800 360 L 800 600 L 600 600 Z" />
    </g>
    <g fill="#7fa650">
      {Array.from({ length: 25 }).map((_, i) => {
        const x = 430 + ((i * 17) % 320);
        const y = 400 + ((i * 19) % 80);
        return <ellipse key={i} cx={x} cy={y} rx="6" ry="14" />;
      })}
    </g>
    {/* farmer silhouette */}
    <g transform="translate(620 470)">
      <circle cx="0" cy="-50" r="12" fill="#5c3a1e" />
      <path
        d="M-18 -38 L 18 -38 L 22 30 L -22 30 Z"
        fill="#a87a4b"
      />
      <rect x="-3" y="-65" width="6" height="15" fill="#5c3a1e" />
      {/* basket */}
      <ellipse cx="35" cy="0" rx="14" ry="10" fill="#5c3a1e" />
      <ellipse cx="35" cy="-2" rx="12" ry="8" fill="#a87a4b" />
    </g>
    {/* question marks drifting */}
    <g
      fill="#f7f2e7"
      opacity="0.7"
      fontFamily="serif"
      fontStyle="italic"
      fontSize="22"
    >
      <text x="60" y="80">?</text>
      <text x="140" y="140">?</text>
      <text x="240" y="100">?</text>
      <text x="320" y="180">?</text>
    </g>
  </svg>
);

export default CityDisconnect;
