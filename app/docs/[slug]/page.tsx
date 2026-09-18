import Link from "next/link";
import { notFound } from "next/navigation";
import {
  listDocs,
  findDocBySlug,
  readDoc,
  parseMarkdown,
} from "@/lib/docs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Markdown from "@/components/Markdown";
import { VineDivider } from "@/components/illustrations";

export function generateStaticParams() {
  return listDocs().map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = findDocBySlug(params.slug);
  if (!doc) return { title: "Doc — AgriShala" };
  return {
    title: `${doc.title} — AgriShala`,
    description: doc.summary,
  };
}

/**
 * /docs/[slug] — render a single steering document.
 *
 * Stripping the leading H1 from the rendered output avoids duplication
 * (we render the title ourselves, larger). Everything else from the
 * markdown body passes through Markdown untouched.
 */
export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = findDocBySlug(params.slug);
  if (!doc) notFound();

  const raw = readDoc(doc.filename);
  // Drop the leading H1 line; we render it above.
  const stripped = raw.replace(/^#\s+.+\n+/, "");
  const blocks = parseMarkdown(stripped);

  const all = listDocs();
  const idx = all.findIndex((d) => d.slug === doc.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <main className="relative bg-cream">
      <Navigation />

      {/* Title block */}
      <article className="relative pt-40 md:pt-48 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-earth-700 hover:text-forest-700 transition-colors mb-10"
          >
            <span aria-hidden>←</span> All documents
          </Link>

          <p className="text-sm uppercase tracking-[0.4em] text-earth-700 mb-5">
            {doc.audience} · {doc.readingMinutes} min
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.02] text-forest-900">
            {doc.title}
          </h1>

          <p className="mt-8 font-serif italic text-xl md:text-2xl text-forest-800/85 leading-snug">
            {doc.summary}
          </p>

          <div className="mt-10">
            <VineDivider className="max-w-[160px]" />
          </div>
        </div>
      </article>

      {/* Body */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <Markdown blocks={blocks} />
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="relative border-t border-earth-200/70 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0 grid grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/docs/${prev.slug}`}
              className="group flex flex-col"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-earth-700/70 mb-2">
                Previous
              </span>
              <span className="font-display text-xl text-forest-900 group-hover:text-earth-700 transition-colors">
                ← {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/docs/${next.slug}`}
              className="group flex flex-col text-right"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-earth-700/70 mb-2">
                Next
              </span>
              <span className="font-display text-xl text-forest-900 group-hover:text-earth-700 transition-colors">
                {next.title} →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
