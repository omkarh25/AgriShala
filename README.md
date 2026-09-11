# AgriShala

An immersive, story-driven single-page experience for **AgriShala** — a
two-day agricultural workshop near the Biligiri Rangaswamy Temple (BRT)
Tiger Reserve, Karnataka.

> _A city dweller doesn't know where his food comes from, and has no idea
> about the people who work hard to make food available to every person._

The site is built as a **scroll narrative**, not a brochure. Each section
is a chapter. The user feels like they're turning the pages of a field
journal rather than scrolling cards.

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
```

## Story arc

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
