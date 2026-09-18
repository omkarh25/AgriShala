import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import ThreePillars from "@/components/sections/ThreePillars";
import Place from "@/components/sections/Place";
import Timeline from "@/components/sections/Timeline";
import Chapters from "@/components/sections/Chapters";
import Promise from "@/components/sections/Promise";
import Founder from "@/components/sections/Founder";
import Seasons from "@/components/sections/Seasons";
import Roadmap from "@/components/sections/Roadmap";
import Invitation from "@/components/sections/Invitation";

/**
 * The single-page experience — the public face of the AgriShala
 * platform. Each section is a chapter of the larger story:
 *
 *   Hero → Vision → Three Pillars → Place → Two Days →
 *   Promise → Founder → Seasons → Roadmap → Invitation
 *
 * Section transitions are managed by `<SectionDivider />` between
 * sections and by each section's own background colour. The dividers
 * breathe instead of cutting; the marquees break the rhythm without
 * demanding attention.
 */
export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />

      <Hero />

      <SectionDivider variant="line" />

      <Vision />

      <Marquee
        items={[
          "One farm",
          "Three pillars",
          "Twelve seats",
          "Four seasons",
          "Seven chapters",
          "Sixteen documents",
        ]}
      />

      <ThreePillars />

      <Place />

      <Marquee
        dark
        items={[
          "Lokkanahalli",
          "Bamboo Cafe",
          "BRT Tiger Reserve",
          "Jenumutti",
          "Tibetan settlement",
          "By the fire",
        ]}
      />

      <Timeline />

      <Chapters />

      <Promise />

      <Founder />

      <Seasons />

      <Roadmap />

      <Invitation />

      <Footer />
    </main>
  );
}
