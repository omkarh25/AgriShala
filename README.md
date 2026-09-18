# AgriShala

> *Let food be your medicine.*

AgriShala is a wholistic simplification of a consumer with his food,
built on three pillars:

1. **Subscription** — the 1-acre is zoned; consumers subscribe to a
   plot, get periodic photo updates, and a weekly door delivery on a
   specified day.
2. **Experience** — the farm hosts stays, local excursions, cooking,
   and events.
3. **Sustenance** — vertical integration (ghee, honey, soap, pickles,
   millets) + regenerative practices (Gau Shala, Agnihotra,
   composting, seed-saving) make the farm self-standing over time.

The current site is the **lighthouse** and the **first implementation**
of this concept — a scroll-narrative workshop site at **Lokkanahalli**,
on the edge of the **Biligiri Rangaswamy Temple (BRT) Tiger Reserve**,
Karnataka, founded by **Jayapal** (Bamboo Cafe).

## 📖 Read the docs first

All steering documents live in [`docs/`](./docs). Start at
[`docs/00_INDEX.md`](./docs/00_INDEX.md).

```
docs/
  00_INDEX.md                     start here
  01_VISION.md                    north star + three pillars
  02_CONCEPT_BRIEF.md             one-page pitch
  03_SEED_FARM.md                 Lokkanahalli / BRT as the prototype
  04_BUSINESS_MODEL.md            revenue, tiers, unit economics
  05_PRODUCT_REQUIREMENTS.md      PRD — functional requirements
  06_INFORMATION_ARCHITECTURE.md  sitemap, navigation, user journeys
  07_DATA_MODEL.md                domain entities
  08_CONTENT_STRATEGY.md          voice, tone, copy direction
  09_DESIGN_SYSTEM_NOTES.md       how tokens extend to the product
  10_FARM_OPERATIONS.md           Gau Shala, Agnihotra, compost, etc.
  11_FARM_ZONING.md               the 1-acre zoning plan
  12_ROADMAP.md                   phased plan workshop → platform
  13_GLOSSARY.md                  terms + place names
  14_OPEN_QUESTIONS.md            things I had to assume — please confirm
  CHANGELOG_DRAFT.md              what changes in this site, what stays
```

## The current site

The existing web app (this repo) is a **scroll narrative** for the
two-day workshop. Each section is a chapter. The user feels like
they're turning the pages of a field journal rather than scrolling
cards.

- Next.js 14 (App Router) + TypeScript
- GSAP + ScrollTrigger for cinematic motion
- Tailwind CSS for the design system
- Hand-coded SVG illustrations acting as photo placeholders
- Fonts: **Fraunces** (display), **Cormorant Garamond** (serif),
  **Inter** (sans)

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **GSAP** + **ScrollTrigger** for cinematic motion
- **Tailwind CSS** for the design system
- **Hand-coded SVG illustrations** that act as photo placeholders
- Fonts: **Fraunces** (display), **Cormorant Garamond** (serif),
  **Inter** (sans)

## Color system

| Role     | Token            | Hex       |
| -------- | ---------------- | --------- |
| Primary  | `forest-900`     | `#14291a` |
| Primary  | `forest-800`     | `#1f3a1f` |
| Primary  | `forest-700`     | `#365520` |
| Accent   | `forest-400`     | `#7fa650` |
| Secondary| `earth-900`      | `#2a1a0d` |
| Secondary| `earth-700`      | `#5c3a1e` |
| Secondary| `earth-600`      | `#8b5a2b` |
| Secondary| `earth-400`      | `#c19a6b` |
| Surface  | `cream`          | `#f7f2e7` |

## Running locally

```bash
cd /Users/omkar/Desktop/Community/AgriShala
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

The default dev port is `3000`. If you're already running something on it,
add `-p 4000` to the command.

## Replacing illustrations with photographs

Every illustration is a self-contained React component under
`components/illustrations/`. Each one accepts standard SVG props so it can
be sized like an `<Image>`.

**To swap an illustration for a photo**, edit the consuming section
component (e.g. `components/sections/Hero.tsx`) and replace:

```tsx
import { SkyMountains } from "@/components/illustrations";
<SkyMountains className="w-full h-full object-cover" />
```

with the Next.js Image component:

```tsx
import Image from "next/image";
<Image
  src="/photos/mountain-range.jpg"
  alt="Mountain range at golden hour"
  fill
  priority
  className="object-cover"
/>
```

A mapping of illustration → likely photo subject:

| Component        | Suggested photo subject                                  |
| ---------------- | -------------------------------------------------------- |
| `SkyMountains`   | Hero: BRT mountain range at dawn/dusk                    |
| `SunYoga`        | Sunrise yoga session on the veranda                      |
| `FoodPlate`      | Overhead shot of breakfast laid out                      |
| `HandsSowSeed`   | Hands in soil, sowing / planting close-up                |
| `TigerSafari`    | Tiger, leopard or elephant in the reserve canopy         |
| `Temple`         | Jenumutti temple at dusk                                 |
| `Tibetan`        | Tibetan settlement houses and prayer flags               |
| `Firecamp`       | Group around a campfire at night                          |
| `FounderJayapal` | Portrait of Jayapal                                       |
| `BRTMap`         | Aerial / illustrative photo of the reserve               |
| `TreeOfSeasons`  | A banyan or banyan-style tree across the four seasons    |
| `CityDisconnect` | Split image: city skyline + farm field                   |

Drop photo files into `public/photos/` and reference them by relative path.

## Project layout

```
app/
  layout.tsx          — root layout, font setup, metadata
  page.tsx            — orchestrates the page sections in order
  globals.css         — Tailwind + paper texture + hand-drawn underline
  not-found.tsx       — 404 page
components/
  Navigation.tsx      — sticky nav, fades to solid on scroll
  Footer.tsx          — small, restrained closing
  Marquee.tsx         — infinite-scroll text strip (CSS only)
  illustrations/      — 14 hand-coded SVG illustrations
    SkyMountains.tsx
    SunYoga.tsx
    FoodPlate.tsx
    FarmHands.tsx
    TigerSafari.tsx
    Temple.tsx
    Tibetan.tsx
    Firecamp.tsx
    FounderJayapal.tsx
    BRTMap.tsx
    TreeOfSeasons.tsx
    HandsSowSeed.tsx
    CityDisconnect.tsx
    Misc.tsx          — Pin, VineDivider, LeafCluster, Sapling, Horizon
    index.ts          — barrel export
  sections/           — full-bleed page sections
    Hero.tsx
    Vision.tsx
    Place.tsx
    Timeline.tsx      — the seven chapters
    timelineData.tsx  — chapter content (kept separate)
    Chapters.tsx      — typographic list view of the seven chapters
    Promise.tsx       — six things you'll carry home
    Founder.tsx
    Seasons.tsx
    Invitation.tsx    — booking form / closing
lib/
  useGsap.ts          — registers ScrollTrigger once + exports gsap
docs/                  — steering documents (see top of this README)
TODO.md               — your raw three-pillar idea — kept as-is
```

## Story arc (current site)

1. **Hero** — the question: _Where does your food come from?_
2. **Vision** — the city/farm split, the gap nobody notices
3. **Marquee** — rhythm break
4. **Place** — BRT Tiger Reserve, the geography
5. **Timeline** — the seven chapters, illustrated and reversed
6. **Chapters** — typographic list, scrubbed to viewport
7. **Promise** — six small things you'll carry home
8. **Marquee (dark)** — second rhythm break
9. **Founder** — Jayapal's story, pinned portrait
10. **Seasons** — the same tree, four seasons
11. **Invitation** — receive a booking / interest
12. **Footer**

> The site remains unchanged in Phase 0. Phase 0 only reframes Hero,
> Invitation, Navigation, and adds a `Three pillars` interlude between
> Founder and Seasons. See [`docs/CHANGELOG_DRAFT.md`](./docs/CHANGELOG_DRAFT.md).

## Motion language

- **Split-line reveals** — every heading uses `overflow-hidden` line
  wrappers with `yPercent: 110 → 0` triggered by ScrollTrigger.
- **Parallax illustrations** — each chapter illustration slow-scrolls
  vertically while the user scrolls past, giving a sense of depth.
- **Scale-on-scroll** — hero and founder portraits zoom slightly outward
  as the page scrolls past them.
- **Marquees** — pure CSS infinite horizontal scroll, no JS.
- **Subtle ambient motion** — leaf clusters float with `yoyo` repeats,
  the campfire has animated flames, the temple lamp flickers.
