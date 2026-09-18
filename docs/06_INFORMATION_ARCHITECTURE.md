# 06 — Information Architecture

> The new sitemap, the navigation model, and the user journeys that drive
> it. Read alongside `05_PRODUCT_REQUIREMENTS.md` and `07_DATA_MODEL.md`.

## Guiding principles

1. **The current scroll-narrative is the brand.** It stays as `/` (the
   homepage). Nothing is removed from `app/page.tsx`.
2. **Three top-level routes** map to the three pillars:
   `/subscribe`, `/stay`, `/shop`.
3. **Account** is a single namespace (`/account`, `/my-plot`) and is the
   only place auth is required.
4. **The admin** (`/admin`) is hidden behind `role: admin`. It is not
   linked from the public site. **Q-13**
5. The voice — poetic, hand-made, field-journal — extends from the
   homepage into every new page.

---

## New sitemap

```
/                              (unchanged — scroll narrative, public)
│
├── /subscribe                 (Pillar 1 marketing)
│   ├── /subscribe/checkout    (auth + payment)
│   ├── /zones                 (the 1-acre map)
│   │   └── /zones/[zoneId]    (deep zone page)
│   └── (thank-you page after checkout)
│
├── /stay                      (Pillar 2 marketing)
│   ├── /stay/book             (booking flow)
│   ├── /stay/excursions       (BRT, Jenumutti, Tibetan settlement)
│   └── /journal               (events & workshops calendar)
│
├── /shop                      (Pillar 3 marketing)
│   ├── /shop/[slug]           (PDP)
│   ├── /cart
│   └── /checkout
│
├── /account                   (any authed user)
│   ├── /account/orders        (retail history)
│   ├── /account/profile
│   └── /account/sign-in
│
├── /my-plot                   (subscriber-only)
│   ├── /my-plot/delivery      (4-week rolling schedule)
│   └── /my-plot/manage        (pause / change / cancel)
│
├── /journal                   (shared; same surface as above)
│
├── /about                     (founder + story, currently in homepage
│                               as 'Founder' section — extracted to its
│                               own page in Phase 2)
│
└── /admin                     (role: admin; not linked from public site)
    ├── /admin/zones           (FR-4.1)
    │   └── /admin/zones/[id]/updates/new     (FR-4.2)
    ├── /admin/deliveries      (FR-4.3)
    ├── /admin/subscribers     (FR-4.4)
    │   └── /admin/subscribers/[id]
    └── /admin/audit-log

Static / system:
├── /legal/privacy
├── /legal/terms
└── /not-found                 (already exists at app/not-found.tsx)
```

---

## Navigation model

### Public nav (`components/Navigation.tsx`, updated in Phase 0)

Visible above the homepage and on the new pillar pages.

```
Logo (·)
The vision · The place · Two days · Subscribe · Stay · Founder
                                                              [Reserve a seat →]
```

- `Subscribe` links to `/subscribe`.
- `Stay` links to `/stay`.
- The existing `Join` item becomes the **reserve-a-seat** primary CTA
  in the top right.

### Account nav (Phase 1+)

A second, smaller nav appears for authed users, in the same bar:

```
Hi, Asha        My plot · Orders · Profile · Sign out
```

### Admin nav (Phase 1+)

Hidden from public links. The admin uses the same shell but with a
left-rail:

```
Dashboard (Phase 3)
Zones · Deliveries · Subscribers · Audit log · Sign out
```

---

## User journeys

### Journey J-1: City dweller → subscriber

> Goals: *"I'm tired of not knowing where my food comes from. Show me a
> real plot I can subscribe to."*

1. Lands on `/` (homepage).
2. Scrolls through the seven-chapter narrative.
3. Sees the new `Three pillars` interlude — clicks **Subscribe to a plot**.
4. Reads `/subscribe`. Clicks **Explore the 1-acre**.
5. Lands on `/zones`, browses the map, sees zone `Z3 — Millets & Pulses`
   has 3 of 12 slots open this season.
6. Clicks the zone. Reads the zone's update history, expected harvests.
7. Clicks **Choose this zone**.
8. `/subscribe/checkout`: **Tier → Delivery → Identity & payment**.
9. Lands on `/my-plot`. Sees the roll-out schedule for the next 4 weeks.
10. Receives the first photo update before the first delivery.

### Journey J-2: Workshop alumnus → deeper commitment

> *"I came for the workshop in November. I want to come back."*

1. Already on the mailing list.
2. Opens a `/journal` link from the post-workshop email.
3. Sees upcoming *ghee-making weekend* + a *spring subscribers' farm
   visit*. Books the workshop.
4. After attending, sees the in-workshop pitch: "Become a subscriber and
   see this land every week."
5. Subscribes — **first month 50% off** (cross-sell in
   `04_BUSINESS_MODEL.md` §3).

### Journey J-3: Subscriber → visitor

> *"I've been getting the ragi basket for three months. Let me actually
> go see it."*

1. Logs in, lands on `/my-plot`.
2. Notices the quarterly **stay credit** balance (`FR-2.4`).
3. Clicks **Use credit** — lands on `/stay/book` with the discount
   pre-applied.
4. Books a weekender + adds a BRT safari excursion (`/stay/excursions`).

### Journey J-4: Anon shop visitor → buyer

> *"I tasted the ghee at a friend's house. Where can I get some?"*

1. Arrives via a friend's referral / Google.
2. Lands on `/`.
3. Scrolls past the founder section, sees the **Sustenance** pillar
   (reworded as *Or buy what we make*).
4. Clicks → `/shop`. Picks **A2 cow ghee**. PDP shows it came from
   zone `Z8 — Gau Shala`.
5. Adds to cart. `/checkout`. Confirmation.

### Journey J-5: Subscribers' first unsubscribe feedback

> (Internal/admin) Capture *why* people leave.

1. Subscriber cancels via `/my-plot/manage`.
2. A short, optional 2-question form is shown: "What changed?"
3. Response is stored in the audit log; shown aggregated at
   `/admin/subscribers/[id]`.

---

## Layout rules

| Route               | Width          | Background token | Section pattern                  |
| ------------------- | -------------- | ---------------- | -------------------------------- |
| `/`                 | full-bleed     | `bg-cream`       | scroll-narrative (existing)      |
| `/subscribe`        | max-w-7xl      | `bg-cream`       | alternating typeset + image      |
| `/zones`            | full-bleed map | `bg-earth-50`    | map-first; sticky text column    |
| `/stay`             | full-bleed     | `bg-forest-900` text `cream` | photo-led cards          |
| `/journal`          | max-w-7xl      | `bg-cream`       | list view                        |
| `/shop`             | max-w-7xl      | `bg-cream`       | product grid                     |
| `/account/*`        | max-w-5xl      | `bg-cream`       | two-column (nav + content)       |
| `/my-plot`          | max-w-5xl      | `bg-earth-50`    | photo-update timeline            |
| `/admin/*`          | full-bleed     | `bg-forest-50`   | left-rail + content              |

See `09_DESIGN_SYSTEM_NOTES.md` for the components behind these
patterns.

---

## Failure modes to design against

- **Empty weeks.** A zone with no items this week must still show a
  useful page ("nothing ripe; here's what's coming"). Empty weeks are
  a feature, not an error.
- **Subscriber moves.** Address-change flow needs to be low-friction but
  not self-serve against a payment window.
- **Out-of-radius.** `/subscribe` for a postcode outside Bengaluru must
  still be useful (lead capture for Phase 2 expansion), not a dead end.