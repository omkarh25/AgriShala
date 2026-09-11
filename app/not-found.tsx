import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-display italic text-6xl text-earth-700 mb-6">404</p>
        <h1 className="font-display text-3xl md:text-4xl text-forest-900 mb-4">
          This path leads to fallow ground.
        </h1>
        <p className="font-serif text-forest-800/80 mb-8">
          The page you were looking for has either been harvested or never
          planted. Let&apos;s get you back to the workshop.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-800 text-cream hover:bg-forest-700 transition-colors"
        >
          ← Back to AgriShala
        </Link>
      </div>
    </main>
  );
}
