import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Marquee from "@/components/Marquee";
import Place from "@/components/sections/Place";
import Timeline from "@/components/sections/Timeline";
import Chapters from "@/components/sections/Chapters";
import Promise from "@/components/sections/Promise";
import Founder from "@/components/sections/Founder";
import Seasons from "@/components/sections/Seasons";
import Invitation from "@/components/sections/Invitation";
import Footer from "@/components/Footer";

/**
 * The single-page experience. Each section is a chapter of the
 * larger story — Vision, Place, Days, Chapters, Promise, Founder,
 * Seasons, Invitation — held together by typography and motion
 * rather than cards and grids.
 */
export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Vision />
      <Marquee
        items={[
          "Two days",
          "One valley",
          "Twelve seats",
          "Four seasons",
          "Seven chapters",
          "A lifetime of better meals",
        ]}
      />
      <Place />
      <Timeline />
      <Chapters />
      <Promise />
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
      <Founder />
      <Seasons />
      <Invitation />
      <Footer />
    </main>
  );
}
