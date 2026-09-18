# CHANGELOG (Draft) — current site → steered version

> A diff between the current AgriShala site (Next.js scroll-narrative
> for the two-day workshop) and the platform it is being steered
> towards. **Code changes are not part of this docs pass**; they
> follow once the docs are signed off.

The format is markdown for legibility, not a real changelog.

---

## What we keep unchanged

These things are already true in the current site and are too right to
touch. They are listed so future-us can see them and agree.

| Element                              | Where it lives                              | Reason                                   |
| ------------------------------------ | ------------------------------------------- | ---------------------------------------- |
| Hero copy *"Where does your food come from?"* | `components/sections/Hero.tsx`     | The anchor line; never replaced.         |
| The seven-chapter story              | `components/sections/timelineData.tsx`      | Proven storytelling format.              |
| Vision / city-farm split             | `components/sections/Vision.tsx`            | The "why" hasn't changed.                |
| Place / BRT map                      | `components/sections/Place.tsx`             | The geographic anchor.                   |
| Founder story (Jayapal, Bamboo Cafe) | `components/sections/Founder.tsx`          | The single voice of the brand.           |
| Seasons / Tree-of-Seasons            | `components/sections/Seasons.tsx`           | The seasonal backbone of the workshop.   |
| Promise section                      | `components/sections/Promise.tsx`           | Sets expectations elegantly.             |
| Hand-coded SVG illustrations         | `components/illustrations/`                 | Reusable as placeholders; replaceable with photos per README. |
| Motion language (scroll narrative)   | `lib/useGsap.ts`, all `components/sections/*.tsx` | Defines the brand's web "feel".        |
| Color tokens (`forest-*`, `earth-*`, `cream`) | `tailwind.config.ts`, `app/globals.css` | The whole brand vocabulary.       |
| Typography (Fraunces, Cormorant, Inter) | `app/layout.tsx`                        | Carries the field-journal voice.         |
| Footer brand strapline               | `components/Footer.tsx`                     | Good; only needs a small refresh.        |

---

## What we reframe (Phase 0)

Reframing, not replacing. Mostly copy & link changes; no DB.

| Element                 | Current                                      | Reframed                                                                |
| ----------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| Hero CTAs               | `Reserve a seat` + `Begin the story`         | Add `Subscribe to a plot` and `Come for a weekend` alongside `Reserve a seat` and `Begin the story`. |
| Invitation section      | Single "Reserve a seat" form                 | Dual CTA: subscribe / reserve a seat. Form behaviour unchanged for the workshop-CTA side. |
| Navigation              | `Vision · Place · Two days · Founder · Join` | Add `Subscribe` and `Stay`. `Join` becomes the primary CTA `Reserve a seat`. |
| Between Founder + Seasons | *(current Founder and Seasons are adjacent)* | Insert a `Three pillars` interlude (subscription / experience / sustenance). |

The exact HTML/React edits required are listed in `05_PRODUCT_REQUIREMENTS.md`
sections **5.0, 5.1, 5.2** as `FR-5.0`, `FR-5.1`, `FR-5.2`.

---

## What we add (Phase 1+)

These are entirely new routes / surfaces. See `05_PRODUCT_REQUIREMENTS.md`
and `06_INFORMATION_ARCHITECTURE.md`.

| Phase | New surface                       | Notes                                                       |
| ----- | --------------------------------- | ----------------------------------------------------------- |
| 1     | `/subscribe` + `/zones` + `/my-plot` | Subscriber journeys J-1, J-2, J-3.                      |
| 1     | `/admin` (sign-in + 4 sub-routes) | Hidden behind `role: admin`.                                |
| 2     | `/stay` + `/stay/book` + `/stay/excursions` | Visitor journeys J-3, J-4.                        |
| 2     | `/journal`                        | Shared between visitor and subscriber.                      |
| 2     | `/about`                          | Extracted from the current `Founder` section.               |
| 3     | `/shop` + `/shop/[slug]` + `/cart` + `/checkout` | Journey J-4.                                  |
| 3     | `/account/orders`                 | Reorder + history.                                          |

---

## What we *don't* do this year

- We don't extract the admin into its own codebase. (Phase 4.)
- We don't add a mobile app. The web app is responsive enough.
- We don't add i18n. English-only for v1.
- We don't add a CMS in Phase 1. Marketing copy still lives in code.

---

## Open items in this changelog

- **CL-1.** Should the existing `Reserve a seat` CTA be **kept** on the
  Hero (alongside new CTAs) or **moved** to a smaller position in
  Phase 0? Lean: **kept**, smaller.
- **CL-2.** The `components/sections/Invitation.tsx` form is currently
  client-side only. After Phase 0, should it post to a queue (e.g.
  Email + spreadsheet) or to a real DB? Lean: **queue** in Phase 0,
  upgrade to DB in Phase 1 along with `FR-1.2`.
- **CL-3.** Footer (`components/Footer.tsx`) currently has placeholder
  links to `Instagram`, `YouTube`, `Field notes`. Phase 0 should turn
  these into `#` anchors or remove the children until we have real
  content; lean: **remove** in Phase 0, restore in Phase 2 when a
  `/journal` is live.
