# 12 — Roadmap

> What gets built when, in what order, and what each phase is *allowed*
> to delay. Phases are not sprints; they are gates. Each phase must
> ship working, on the ground, before the next opens.

---

## Phase 0 — Brand refresh  (≈ 1–2 weeks)

> *Goal.* Reposition the existing scroll-narrative as the front door of
> the platform, without touching the React code beyond what is needed.

### In scope

- Hero (`components/sections/Hero.tsx`) gains a secondary CTA:
  `Subscribe to a plot` (→ `/subscribe`) + `Come for a weekend`
  (→ `/stay`). Existing `Reserve a seat` preserved.
- New `Three pillars` interlude section, placed between `Founder` and
  `Seasons` (see `FR-5.1`).
- Navigation (`components/Navigation.tsx`) adds `Subscribe`, `Stay`
  items.
- The `Invitation` section becomes a dual CTA; behaviour unchanged.
- Light copy edit on the footer to acknowledge the three pillars.

### Out of scope

- Any database or backend work.
- Any change to the seven chapters or any illustrations.
- Removing any existing section.

### Done when

- A first-time visitor can reach `/subscribe` and `/stay` from the
  homepage in two clicks.
- The seven-chapter narrative reads untouched to anyone who knew
  the old site.

---

## Phase 1 — Subscription MVP  (≈ 2–3 months)

> *Goal.* Run a working weekly-subscription product on a single 1-acre
> at Lokkanahalli, with manual delivery and human-driven photo updates.

### In scope (FR-1.0 … FR-1.6 + FR-4.0 … FR-4.4)

- `/subscribe` marketing + `/zones` map + zone deep pages.
- `/subscribe/checkout` (auth + recurring payment, see NFR-5).
- Subscriber authed area: `/my-plot`, `/my-plot/delivery`,
  `/my-plot/manage`.
- Photo updates: admin uploads → email digest (web push optional).
- Admin: zones, deliveries, subscribers, photo updates.
- A single payment provider (Razorpay recommended, but **Q-8**).
- A basic delivery routing spreadsheet (manual, weekly ops ritual).

### Out of scope

- Stay booking, events, shop — pushed to Phases 2 / 3.
- Multi-tenant / multi-site.
- iOS / Android apps.
- Subscriber chat.

### Done when

- 30 active weekly Plot-tier subscribers receive a basket every
  Saturday.
- Each subscriber has received at least 4 photo digests from their
  zone.
- Pause / change / cancel all work end-to-end.
- One full kharif-to-rabi season has been completed.

---

## Phase 2 — Experience  (≈ 3–4 months, after Phase 1's first full season)

> *Goal.* Bring the workshop's two-day ritual into a permanent,
> bookable surface, and add excursions.

### In scope (FR-2.0 … FR-2.4)

- `/stay` marketing + `/stay/book` booking flow.
- Two cottage rooms retrofitted (Z7), kitchen upgrade.
- `/stay/excursions`: BRT safari, Jenumutti temple, Tibetan settlement.
- `/journal` for events + workshops.
- Subscriber stay credits (`FR-2.4`).
- `/about` extracted from the current `Founder` section.

### Out of scope

- The shop (Phase 3).
- The Homa / cattle surfaces on the website (Phase 3).
- International tourists / visa-letter flows.
- A mobile app.

### Done when

- A subscriber can book a weekender with a BRT safari excursion in
  one checkout.
- A non-subscriber can book, period — without needing to subscribe
  first.
- Quarterly stay credits are auto-issued to active subscribers and
  redeemable.

---

## Phase 3 — Sustenance  (≈ 4–6 months, overlapping with Phase 2)

> *Goal.* Complete the model. The farm begins to pay for its own
> inputs. The first value-added SKUs ship. The first Homa records land
> in the system.

### In scope (FR-3.0 … FR-3.3 + Gau Shala surfaces)

- Shop (`/shop`, PDPs, cart, checkout) with a *narrow* catalogue
  (ghee, honey, 3 millets, 2 pulses, 2 pickles, 1 soap).
- D2C fulfilment from Bamboo Cafe → curated Bengaluru stockists in
  Phase 3 mid.
- `GauShalaCattle` + `HomaRecord` admins (low-fi).
- A *yearly soil report* per zone, written, on the website
  (decision: **Q-16**).
- Cattle on site; first milk→ghee→soap loop closed.
- Biogas plant installation (decision: **Q-15**).

### Out of scope

- A wholesale portal.
- A multi-language site.
- A livestream of the Homa corner (decision: **Q-17**).

### Done when

- The first jar of ghee is sold through `/shop`.
- The first Homa year has zero undocumented gaps.
- The cattle and compost loops are visible on the platform (without
  romanticising them).

---

## Phase 4 — Replication  (≈ open-ended, after Phase 3 is steady)

> *Goal.* Make the seed farm exportable. The first sister site is
> onboarded.

### In scope

- Publish the playbook (`11_FARM_ZONING.md` + `10_FARM_OPERATIONS.md`)
  as a public document with redactions for trade secrets.
- Onboarding flow for a sister site: zone selection, partner
  agreement template, admin training.
- Multi-tenant admin (the seed farm + the first sister site at the
  same time).
- Optional: extract the admin into its own codebase; the marketing
  surface stays on Next.js.

### Out of scope

- A franchise system. Each sister site is sovereign.
- A SaaS pivot. We don't sell the platform as a product.

### Done when

- The first sister site has been seeded without anyone from the seed
  farm being on-site for the first month.

---

## Things we deliberately never ship

So future-us doesn't argue against them later:

- **No pesticides advertised as a feature.**
- **No imported "wellness" SKUs.**
- **No D2C meat / non-veg SKUs.**
- **No international shipping.**
- **No auto-captions on photo updates.**
- **No notifications that don't earn their place.** If a subscriber
  has notifications turned off at the OS level by week 3, our product
  isn't doing its job.
- **No chat with the farmer from outside the platform.** Email + the
  contact form on `/my-plot` is enough; chat would tax a small team.
- **No livestreams of the farm.** It is too easy to romanticise the
  life; the platform stays concrete.
