import React from "react";

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 800 600",
  preserveAspectRatio: "xMidYMid slice",
} as const;

export const Tibetan = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} {...p}>
    <title>Tibetan settlement with prayer flags</title>
    <rect width="800" height="600" fill="#e3cfae" />
    {/* sky */}
    <rect width="800" height="350" fill="#c8d9ae" />
    {/* mountains */}
    <path
      d="M0 320 L 120 220 L 220 280 L 340 180 L 460 270 L 580 200 L 700 280 L 800 230 L 800 350 L 0 350 Z"
      fill="#7fa650"
    />
    <path
      d="M0 360 L 140 290 L 260 330 L 400 270 L 520 320 L 660 280 L 800 320 L 800 400 L 0 400 Z"
      fill="#5d8a36"
    />
    {/* settlement ground */}
    <rect y="400" width="800" height="200" fill="#8b5a2b" />
    {/* houses (whitewashed with dark window trim) */}
    <g transform="translate(160 380)">
      <rect width="120" height="80" fill="#f7f2e7" />
      <polygon points="0,0 60,-40 120,0" fill="#5c3a1e" />
      <rect x="20" y="30" width="20" height="30" fill="#3f2814" />
      <rect x="60" y="30" width="20" height="30" fill="#3f2814" />
      <rect x="50" y="60" width="20" height="20" fill="#3f2814" />
    </g>
    <g transform="translate(320 390)">
      <rect width="100" height="70" fill="#f7f2e7" />
      <polygon points="0,0 50,-30 100,0" fill="#5c3a1e" />
      <rect x="15" y="25" width="20" height="25" fill="#3f2814" />
      <rect x="55" y="25" width="20" height="25" fill="#3f2814" />
    </g>
    <g transform="translate(480 385)">
      <rect width="110" height="75" fill="#f7f2e7" />
      <polygon points="0,0 55,-35 110,0" fill="#5c3a1e" />
      <rect x="15" y="25" width="20" height="25" fill="#3f2814" />
      <rect x="55" y="25" width="20" height="25" fill="#3f2814" />
      <rect x="45" y="55" width="20" height="20" fill="#3f2814" />
    </g>
    {/* prayer flags */}
    <g>
      {[0, 1, 2, 3].map((row) => (
        <g key={row} transform={`translate(0 ${100 + row * 25})`}>
          <line
            x1="20"
            x2="780"
            y1="0"
            y2="0"
            stroke="#3f2814"
            strokeWidth="1.5"
          />
          {["#d62718", "#f0bd6e", "#365520", "#3a6fb8", "#7a3e9d"].map(
            (c, i) => (
              <g key={i}>
                {Array.from({ length: 24 }).map((_, j) => (
                  <rect
                    key={j}
                    x={30 + j * 32}
                    y={-12}
                    width="22"
                    height="22"
                    fill={c}
                    transform={`rotate(${(((j * 7) % 5) - 2) * 1.2} ${
                      30 + j * 32 + 11
                    } -1)`}
                    opacity="0.95"
                  />
                ))}
              </g>
            )
          )}
        </g>
      ))}
    </g>
    {/* monk silhouette */}
    <g transform="translate(640 460)">
      <circle cx="0" cy="-50" r="10" fill="#3f2814" />
      <path d="M-15 -40 Q 0 -48 15 -40 L 18 30 L -18 30 Z" fill="#a87a4b" />
      <rect x="-18" y="30" width="36" height="6" fill="#3f2814" />
    </g>
  </svg>
);

export default Tibetan;
