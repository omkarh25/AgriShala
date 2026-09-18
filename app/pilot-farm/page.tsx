import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BRTMap,
  SunYoga,
  FoodPlate,
  HandsSowSeed,
  TigerSafari,
  Temple,
  Tibetan,
  Firecamp,
  Sapling,
  VineDivider,
} from "@/components/illustrations";

export const metadata = {
  title: "The pilot farm — Lokkanahalli · AgriShala",
  description:
    "The pilot farm at Lokkanahalli, on the edge of the BRT Tiger Reserve. How the Subscribe, Experience, and Sustain paths come together on one piece of land.",
};

/**
 * /pilot-farm — the case study of the first AgriShala site.
 *
 * Structured as three lenses, mirroring the three paths on the
 * homepage, with photo / video placeholders that the founder can
 * later swap for real media.
 */
export default function PilotFarmPage() {
  return (
    <main className="relative bg-cream">
      <Navigation />

      {/* Header */}
      <header className="relative pt-40 md:pt-48 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-earth-700 mb-6">
            The pilot farm
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-forest-900 max-w-4xl">
            <span className="block">Lokkanahalli.</span>
            <span className="block italic text-earth-700">One acre.</span>
            <span className="block">Three paths.</span>
          </h1>
          <p className="mt-10 max-w-3xl font-serif text-lg md:text-xl leading-relaxed text-forest-800/90">
            AgriShala is an all-India idea. Its first home is a 1-acre seed
            farm at Lokkanahalli, on the edge of the Biligiri Rangaswamy
            Temple Tiger Reserve in Karnataka — about 3.5 hours from
            Bengaluru, in the foothills of the Western Ghats. This page is
            a brief walk through how the three paths come together on this
            one piece of land.
          </p>
        </div>
      </header>

      {/* At a glance */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-earth-200/60 border border-earth-200/60 rounded-sm overflow-hidden">
            {[
              { k: "1 acre", v: "First zoned seed farm" },
              { k: "10 zones", v: "Greens → millet → Gau Shala" },
              { k: "~1,300 km²", v: "Adjacent BRT Tiger Reserve" },
              { k: "3.5 hrs", v: "From Bengaluru" },
              { k: "12 baskets", v: "Weekly subscription target" },
              { k: "5 cattle", v: "Gau Shala, Phase 3" },
            ].map((s) => (
              <div key={s.k} className="bg-cream p-5 md:p-6">
                <p className="font-display text-2xl md:text-3xl text-forest-900">
                  {s.k}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-earth-700 leading-snug">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe at Lokkanahalli */}
      <Lens
        id="subscribe"
        number="01"
        name="Subscribe"
        tagline="What you see grow is what you cook at your home."
        body={[
          "The 1-acre is divided into ten zones — greens & salad beds, root & tuber beds, millets & pulses, the Gau Shala pasture, the pollinator strip, the apiary, the homestead, the cow shed + Homa corner, the compost yard, and a generous buffer for wildlife and paths. Each subscriber gets a defined portion of a zone and a photo journal of it.",
          "The weekly basket, packed at Bamboo Cafe, lands in Bengaluru on a chosen day. The first SKU list draws from the existing fields: ragi, jowar, foxtail millet, groundnut, ridge gourd, amaranth greens, mangoes in season, and jaggery from the local Soliga settlements.",
        ]}
        ctaLabel="See the zone plan"
        ctaHref="/docs/11-farm-zoning-the-1-acre-plan"
        placeholderCaption="Photo: an aerial of the 1-acre with zone overlays — will be a hand-drawn map until real photography is in place."
        illustration={<BRTMap className="w-full h-full" />}
      />

      {/* Experience at Lokkanahalli */}
      <Lens
        id="experience"
        number="02"
        name="Experience"
        tagline="Come stay with us and experience the farm life."
        body={[
          "The same farm hosts stays in Bamboo Cafe's existing bamboo structures, with a kitchen that pulls from the day's harvest. A typical weekend opens with sunrise yoga on the veranda, a walk through the fields with the people who work them, a jeep safari into the BRT, an evening at Jenumutti temple, a morning with the Tibetan settlement, and a firecamp under the stars.",
          "Two days is enough to feel the place change you.",
        ]}
        ctaLabel="Read the seven-chapter workshop"
        ctaHref="/docs/02-concept-brief"
        placeholderCaption="Photo strip: yoga · breakfast · safari · temple · Tibetan settlement · firecamp."
        illustration={
          <div className="grid grid-cols-6 grid-rows-2 gap-1 w-full h-full">
            <div className="col-span-3 row-span-2"><SunYoga className="w-full h-full" /></div>
            <div className="col-span-3"><FoodPlate className="w-full h-full" /></div>
            <div className="col-span-3"><TigerSafari className="w-full h-full" /></div>
            <div className="col-span-2"><Temple className="w-full h-full" /></div>
            <div className="col-span-2"><Tibetan className="w-full h-full" /></div>
            <div className="col-span-2"><Firecamp className="w-full h-full" /></div>
          </div>
        }
      />

      {/* Sustain at Lokkanahalli */}
      <Lens
        id="sustain"
        number="03"
        name="Sustain"
        tagline="A community-driven marketplace for the people who keep this land alive."
        body={[
          "We support Soliga-led producers, forest-gatherers, and local cottage industries with a small marketplace that we host but do not own. They set the prices; we keep the rails. At Lokkanahalli the first products to enter are Soliga forest honey, ragi and jowar from their own millet plots, and wild-tuber preserves.",
          "The platform fee funds the community's own audit and pricing work. We do not rebrand produce, take consignment risk, or place it in our own retail catalogue. We make the listing visible to subscribers and a wider Bengaluru audience, and we run the logistics of weekly delivery alongside the subscription baskets in Phase 1+.",
          "The operational arm of the marketplace is a Soliga-farmer liaison half-role that pairs a Soliga elder with the farm lead. The platform does not parachute in.",
        ]}
        ctaLabel="Read the business model"
        ctaHref="/docs/04-business-model"
        placeholderCaption="Photo: Soliga forager with a wild-tuber basket, a Soliga beekeeper with a smoker — both to be replaced with real, dated photographs."
        illustration={<HandsSowSeed className="w-full h-full" />}
      />

      {/* Closing CTA */}
      <section className="relative py-24 md:py-32 bg-forest-950 text-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.4em] text-forest-300 mb-5">
            Visit, subscribe, or help the marketplace
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl">
            <span className="block">Three doors</span>
            <span className="block italic text-forest-300">into the same farm.</span>
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-sm overflow-hidden">
            <Link
              href="/#contact"
              className="bg-forest-950 p-8 md:p-10 hover:bg-forest-900 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-forest-300 mb-3">
                Stay with us
              </p>
              <p className="font-display text-2xl text-cream leading-snug">
                Two days, twelve seats, seven chapters.
              </p>
              <p className="mt-3 text-sm tracking-wide text-forest-300">
                Reserve a seat →
              </p>
            </Link>
            <Link
              href="/#contact"
              className="bg-forest-950 p-8 md:p-10 hover:bg-forest-900 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-forest-300 mb-3">
                Subscribe to a plot
              </p>
              <p className="font-display text-2xl text-cream leading-snug">
                A seasonal weekly basket from your zone.
              </p>
              <p className="mt-3 text-sm tracking-wide text-forest-300">
                Express interest →
              </p>
            </Link>
            <Link
              href="/#contact"
              className="bg-forest-950 p-8 md:p-10 hover:bg-forest-900 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-forest-300 mb-3">
                Help the marketplace
              </p>
              <p className="font-display text-2xl text-cream leading-snug">
                Support a Soliga producer or a local cottage industry.
              </p>
              <p className="mt-3 text-sm tracking-wide text-forest-300">
                Get in touch →
              </p>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3 text-forest-300">
            <Sapling className="w-6 h-10" />
            <span className="text-xs uppercase tracking-[0.4em]">
              Lokkanahalli · BRT Tiger Reserve · Karnataka
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Single lens — one path at the pilot farm                             */
/* ------------------------------------------------------------------ */

function Lens({
  id,
  number,
  name,
  tagline,
  body,
  ctaLabel,
  ctaHref,
  placeholderCaption,
  illustration,
}: {
  id: string;
  number: string;
  name: string;
  tagline: string;
  body: string[];
  ctaLabel: string;
  ctaHref: string;
  placeholderCaption: string;
  illustration: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative py-20 md:py-28 border-t border-earth-200/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-earth-700 mb-3">
              Lens {number}
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] text-forest-900">
              {name}.
            </h2>
            <p className="mt-3 font-display italic text-2xl md:text-3xl text-earth-700">
              {tagline}
            </p>

            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-forest-800/90">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-forest-800 hover:text-earth-700 transition-colors"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-earth-200/70 bg-earth-50">
              {illustration}
            </div>
            <p className="mt-3 font-serif italic text-forest-800/70 text-sm">
              {placeholderCaption}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-earth-700/70">
              <div className="aspect-video rounded-sm border border-earth-200/70 bg-cream/60 flex items-center justify-center">
                Photo slot
              </div>
              <div className="aspect-video rounded-sm border border-earth-200/70 bg-cream/60 flex items-center justify-center">
                Photo slot
              </div>
              <div className="aspect-video rounded-sm border border-earth-200/70 bg-cream/60 flex items-center justify-center">
                Video slot
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <VineDivider className="max-w-[180px] mx-auto opacity-60" />
        </div>
      </div>
    </section>
  );
}