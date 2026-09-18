import Link from "next/link";
import { listDocs } from "@/lib/docs";

/**
 * The footer — small, restrained, like the inside cover of a book.
 * Now includes a "status" band so an investor can read the phase,
 * location, and the next step at a glance, plus a tiny docs index.
 */
export default function Footer() {
  const docs = listDocs().slice(0, 6);

  return (
    <footer className="relative bg-forest-950 text-cream/85 py-20 md:py-28 overflow-hidden">
      {/* Status band — visible at a glance */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 mb-12 border-b border-cream/10">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40 mb-2">
              Phase
            </p>
            <p className="font-display text-2xl text-cream">Phase 0 · Brand refresh</p>
            <p className="text-sm text-cream/55 mt-1">In progress</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40 mb-2">
              Seed farm
            </p>
            <p className="font-display text-2xl text-cream">Lokkanahalli, Karnataka</p>
            <p className="text-sm text-cream/55 mt-1">BRT Tiger Reserve · 3.5 hrs from Bengaluru</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40 mb-2">
              Next milestone
            </p>
            <p className="font-display text-2xl text-cream">Phase 1 · Subscription MVP</p>
            <p className="text-sm text-cream/55 mt-1">First 30 weekly baskets</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-display italic text-3xl md:text-4xl text-cream leading-tight">
              AgriShala —
              <br />
              a workshop on what we eat,
              <br />
              for the people who forgot to ask.
            </p>
            <p className="mt-6 font-serif italic text-cream/55 text-base max-w-md">
              One farm. Three layers — Subscription, Experience,
              Sustenance — on the same piece of land.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              Find us
            </p>
            <address className="font-serif not-italic leading-relaxed">
              Lokkanahalli
              <br />
              Biligiri Rangaswamy Temple
              <br />
              Tiger Reserve, Karnataka
              <br />
              India
            </address>
            <p className="font-serif text-sm text-cream/55 mt-4">
              hello@agrishala.in
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              The platform
            </p>
            <ul className="space-y-2 font-serif">
              <li>
                <Link href="/docs/01-vision" className="hover:text-forest-300 transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/docs/04-business-model" className="hover:text-forest-300 transition-colors">
                  Business model
                </Link>
              </li>
              <li>
                <Link href="/docs/12-roadmap" className="hover:text-forest-300 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-forest-300 transition-colors">
                  All docs →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              Read first
            </p>
            <ul className="space-y-2 font-serif text-sm">
              {docs.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/docs/${d.slug}`}
                    className="text-cream/70 hover:text-forest-300 transition-colors"
                  >
                    {d.filename.replace(/^\d+_|\.md$/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} AgriShala · Built with care in Bengaluru.</p>
          <p>
            Hand-coded with Next.js & GSAP. Investor-grade docs at{" "}
            <Link href="/docs" className="text-cream/70 hover:text-forest-300 transition-colors">
              /docs
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
