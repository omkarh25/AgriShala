import Link from "next/link";
import { listDocs, DocAudience } from "@/lib/docs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { VineDivider } from "@/components/illustrations";

export const metadata = {
  title: "Docs — AgriShala",
  description:
    "The steering layer. The north star, the concept, the seed farm, the business model, the PRD, the IA, and the roadmap — all in one place.",
};

const AUDIENCE_ORDER: DocAudience[] = [
  "Strategy",
  "Engineering",
  "Design",
  "Operations",
  "Reference",
];

const AUDIENCE_BLURB: Record<DocAudience, string> = {
  Strategy: "For the founder, partners, and investors. The why and the what.",
  Engineering:
    "For the dev team. Requirements, IA, and the data model behind it.",
  Design: "For the design team. Voice, tone, and the tokens that hold it.",
  Operations: "For the agronomy and ops team. What happens on the ground.",
  Reference: "Start here, or come back when a term is unfamiliar.",
};

/**
 * /docs — the documentation index.
 *
 * A printed-colophon style index of every steering document in
 * `/docs`. Grouped by audience so a new reader can find what they
 * need without skimming seventeen filenames.
 */
export default function DocsIndexPage() {
  const docs = listDocs();
  const grouped: Record<DocAudience, typeof docs> = {
    Strategy: [],
    Engineering: [],
    Design: [],
    Operations: [],
    Reference: [],
  };
  for (const d of docs) grouped[d.audience].push(d);

  return (
    <main className="relative bg-cream">
      <Navigation />

      {/* Hero — minimal, no illustration. */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-earth-700 mb-6">
            The steering layer
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-forest-900 max-w-4xl">
            <span className="block">The documents</span>
            <span className="block italic text-earth-700">that hold</span>
            <span className="block">the platform together.</span>
          </h1>
          <div className="mt-10 max-w-2xl font-serif text-lg md:text-xl leading-relaxed text-forest-800/90">
            <p>
              Sixteen short documents. The north star, the concept, the seed
              farm, the business model, the PRD, the IA, the data model, the
              design system notes, the roadmap, the glossary — everything a
              founder, investor, designer, developer, or agronomist needs to
              stay aligned on what AgriShala is and what it is not.
            </p>
          </div>
          <div className="mt-12">
            <VineDivider className="max-w-[200px]" />
          </div>
        </div>
      </section>

      {/* Index — grouped by audience */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-24">
          {AUDIENCE_ORDER.map((audience) => {
            const items = grouped[audience];
            if (items.length === 0) return null;
            return (
              <section key={audience} aria-labelledby={`aud-${audience}`}>
                <div className="grid md:grid-cols-12 gap-10">
                  <header className="md:col-span-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-earth-700 mb-3">
                      {audience}
                    </p>
                    <h2
                      id={`aud-${audience}`}
                      className="font-display text-3xl md:text-4xl font-light leading-tight text-forest-900"
                    >
                      {AUDIENCE_BLURB[audience]}
                    </h2>
                  </header>

                  <ul className="md:col-span-8 divide-y divide-earth-200/60 border-t border-earth-200/60">
                    {items.map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          href={`/docs/${doc.slug}`}
                          className="group flex items-baseline gap-6 py-6 transition-colors hover:bg-earth-50/50 -mx-2 px-2 rounded-sm"
                        >
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-earth-700/60 w-10 shrink-0 pt-1">
                            {doc.filename.replace(".md", "").slice(0, 2)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-2xl md:text-3xl font-light leading-tight text-forest-900 group-hover:text-earth-700 transition-colors">
                              {doc.title}
                            </h3>
                            <p className="mt-1 font-serif text-base md:text-lg text-forest-800/80 leading-snug">
                              {doc.summary}
                            </p>
                          </div>
                          <span className="hidden md:inline text-xs uppercase tracking-[0.3em] text-earth-700/60 whitespace-nowrap pt-1">
                            {doc.readingMinutes} min
                          </span>
                          <span
                            aria-hidden
                            className="text-forest-700/60 group-hover:translate-x-1 transition-transform"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

