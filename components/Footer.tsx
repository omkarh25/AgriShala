"use client";

/**
 * The footer — small, restrained, like the inside cover of a book.
 */
export default function Footer() {
  return (
    <footer className="relative bg-forest-950 text-cream/80 py-16 md:py-20 overflow-hidden">
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
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              Write
            </p>
            <a
              href="mailto:hello@agrishala.in"
              className="font-serif text-cream hover:text-forest-300 transition-colors"
            >
              hello@agrishala.in
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              Follow
            </p>
            <ul className="space-y-1 font-serif">
              <li>
                <a className="hover:text-forest-300 transition-colors" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-forest-300 transition-colors" href="#">
                  YouTube
                </a>
              </li>
              <li>
                <a className="hover:text-forest-300 transition-colors" href="#">
                  Field notes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} AgriShala · Built with care in Bengaluru.</p>
          <p>
            Illustrations replaceable with photographs. Hand-coded with Next.js
            & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
