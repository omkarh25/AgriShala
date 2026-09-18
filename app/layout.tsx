import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgriShala — One farm, three layers. Eat from it. Stay on it.",
  description:
    "A working farm at Lokkanahalli, on the edge of the BRT Tiger Reserve. Subscription, Experience, and Sustenance on the same piece of land — three and a half hours from Bengaluru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${display.variable} ${sans.variable}`}
    >
      <body className="font-serif antialiased paper">{children}</body>
    </html>
  );
}
