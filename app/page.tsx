import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import ThreePaths from "@/components/sections/ThreePaths";
import PilotFarm from "@/components/sections/PilotFarm";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";

/**
 * The single-page experience — the public face of the AgriShala
 * platform. The arc is short on purpose:
 *
 *   Hero (with dramatic "Let food be your medicine!" opener at top)
 *     → Marquee → Three Paths → Pilot Farm → Founder → Contact
 *
 * The old full-viewport IntroSplash was removed (it kept breaking on
 * some browsers). The opener now lives inside the Hero, so it can't
 * fail — the rest of the page slides down by one slot and inherits
 * its timing naturally.
 */
export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />

      <Hero />

      <Marquee
        items={[
          "Let food be your medicine",
          "One farm",
          "Three paths",
          "Ten zones",
          "Twelve seats",
          "Sixteen documents",
        ]}
      />

      <ThreePaths />

      <PilotFarm />

      <SectionDivider variant="line" />

      <Founder />

      <Contact />

      <Footer />
    </main>
  );
}
