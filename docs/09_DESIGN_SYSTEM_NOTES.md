# 09 — Design System Notes

> How the existing `tailwind.config.ts` tokens extend to the new product
> surface. Read alongside `08_CONTENT_STRATEGY.md` and
> `06_INFORMATION_ARCHITECTURE.md`.

## What stays as-is

From `README.md` and `tailwind.config.ts`:

| Role      | Token        | Hex       |
| --------- | ------------ | --------- |
| Primary   | `forest-900` | `#14291a` |
| Primary   | `forest-800` | `#1f3a1f` |
| Primary   | `forest-700` | `#365520` |
| Accent    | `forest-400` | `#7fa650` |
| Secondary | `earth-900`  | `#2a1a0d` |
| Secondary | `earth-700`  | `#5c3a1e` |
| Secondary | `earth-600`  | `#8b5a2b` |
| Secondary | `earth-400`  | `#c19a6b` |
| Surface   | `cream`      | `#f7f2e7` |

Typography:

- `Fraunces` for display (the `font-display` class).
- `Cormorant Garamond` for long-form serif (the `font-serif` class).
- `Inter` for UI sans (the `font-sans` class).

Motion language:

- `split-line` + `yPercent: 110 → 0` for headings.
- `gsap.context()` per section, with `ScrollTrigger` `scrub: true` for
  parallax.
- Custom paper texture (`body.paper` in `app/globals.css`).

These are the spine. We do not redecorate.

## What we add (Phase 0+)

### Product-surface tokens

A tiny set of new tokens for product UI, all derived from existing
palette:

| Token              | Tailwind equivalent        | Use                                  |
| ------------------ | -------------------------- | ------------------------------------ |
| Card surface       | `bg-earth-50`              | Subscriber cards, basket summary.    |
| Card surface hover | `border-forest-300`        | Hover-on-card border.                |
| Banner subtle      | `bg-forest-50`             | Confirmation banner.                 |
| Status `sow`       | `bg-earth-200` text `earth-900` | Photo-update phase tag.          |
| Status `grow`      | `bg-forest-100` text `forest-900` | Photo-update phase tag.         |
| Status `harvest`   | `bg-earth-400` text `cream` | Photo-update phase tag.            |
| Status `pack`      | `bg-forest-700` text `cream` | Photo-update phase tag.            |
| Pill (success)     | `bg-forest-100 text-forest-900` | "Delivered" / "Confirmed"        |
| Pill (warning)     | `bg-earth-200 text-earth-900`  | "Paused" / "Inventory low"      |
| Pill (neutral)     | `bg-earth-100 text-forest-900`  | "Pending"                        |

Add these as inline `className` compositions for now. A `lib/tokens.ts`
and Tailwind plugin can come in Phase 3 if the catalogue grows.

### New component patterns

| Component              | Used in                          | Notes                                   |
| ---------------------- | -------------------------------- | --------------------------------------- |
| `<StatusPill>`         | `/my-plot`, `/account/orders`    | Maps strings to the pill tokens above. |
| `<PhotoUpdateCard>`    | `/my-plot`, `/zones/[id]`        | 3–8 photos + caption + phase tag + date.|
| `<CropPhaseBadge>`     | photo updates                    | One of `sow` / `grow` / `harvest` / `pack`. |
| `<TierBadge>`          | `/subscribe`, `/account`         | One of `half-plot` / `plot` / etc.       |
| `<ZoneCard>`           | `/zones`                         | Mini-map snippet, current crop, capacity meter. |
| `<BasketSummary>`      | `/my-plot/delivery`, `/admin/deliveries` | Per-tier list with weights.       |
| `<EmptyState>`         | everywhere                       | Honest empty state with a sentence, not a tagline. |

Each component lives under `components/ui/` (new folder, Phase 1) and is
purely presentational. All copy strings are passed in as props to keep
them easy to audit against the voice rules in `08_CONTENT_STRATEGY.md`.

### Motion extension

The current motion language is **scroll-driven cinematic**. The product
surfaces need **utility motion** — fast, small, low-distraction.

- Use Tailwind `transition-colors duration-200` for nearly everything.
- For hover cards, increase shadow on the *background* div, not the
  border.
- Do not introduce GSAP into the account / admin surfaces. The current
  ScrollTrigger pattern is reserved for the homepage and the new pillar
  landing pages (`/subscribe`, `/stay`, `/shop`).

### Photography plan

The current site uses hand-coded SVGs (see `components/illustrations/`).
The brand book in `README.md` already lists a "swap illustration for
photo" recipe.

The product surface needs photographs, not illustrations:

- **Photo updates** must be *real*, *dated*, and *sometimes rough*. A
  phone shot is better than a stock-photo set piece.
- **PDP** hero images need a known, single zone in the background.
- **Homepage** keeps the existing illustrations in Phase 0; Phase 4 may
  swap specific illustrations for photographs.

## Accessibility notes

- All product inputs have a visible label *and* a `<label htmlFor>`.
- Color is never the only signal. Status pills carry an icon.
- Photo-update `<img>` tags must carry `altText` from
  `ObjectRef.altText` (required when `isPublic`). The alt text is
  written by the farmer in their own voice, not auto-generated.

## What's deliberately absent

- **No carousels** (annoying + a11y-hostile).
- **No modals** for primary actions — use a full page or a side panel.
- **No emojis in copy.** (The GSAP staggers use leaf clusters; the icons
  are SVGs.)
- **No "Learn more".** Always a verb: *See the map*, *Read this week's
  letter*, *Pick a date*.
