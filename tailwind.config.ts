import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: forest greens
        forest: {
          50: "#f3f7ee",
          100: "#e3ecd6",
          200: "#c8d9ae",
          300: "#a4c07e",
          400: "#7fa650",
          500: "#5d8a36",
          600: "#456d28",
          700: "#365520",
          800: "#1f3a1f",
          900: "#14291a",
          950: "#0b180e",
        },
        // Secondary: earth browns
        earth: {
          50: "#faf6f1",
          100: "#f1e8d9",
          200: "#e3cfae",
          300: "#d2b07e",
          400: "#c19a6b",
          500: "#a87a4b",
          600: "#8b5a2b",
          700: "#5c3a1e",
          800: "#3f2814",
          900: "#2a1a0d",
          950: "#170d06",
        },
        cream: "#f7f2e7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      animation: {
        "breathe-slow": "breathe 6s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
