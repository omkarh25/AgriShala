# 05 — Product Requirements (PRD)

> The functional spec for the AgriShala platform. Read alongside
> `06_INFORMATION_ARCHITECTURE.md`, `07_DATA_MODEL.md`, and
> `09_DESIGN_SYSTEM_NOTES.md`.

## How this document is organised

Each requirement is shaped like this:

```
FR-XXX   <short title>
Pillar:  <1 / 2 / 3>
Phase:   <0 / 1 / 2 / 3 / 4>            (see `12_ROADMAP.md`)
Persona: <subscriber / visitor / admin / anon>
User story:
  As a <persona>, I want <goal>, so that <reason>.
Acceptance criteria:
  - Given <context>, when <action>, then <outcome>.
Out of scope:
  - <explicit non-goals>
Open questions:
  - Q-NN
```

Requirements are numbered in `FR-<pillar><phase>-<n>` form below.

---

## 0. Conventions & global non-functional requirements

| ID      | Requirement                                                                       |
| ------- | ---------------------------------------------------------------------------------- |
| NFR-1   | Site must remain a **single Next.js 14 App Router app** in Phase 0–3. Extraction allowed only at Phase 4 (Replication). |
| NFR-2   | The current scroll-narrative (`app/page.tsx`, `components/sections/`) is **preserved** as the public homepage. No section may be deleted. |
| NFR-3   | All subscription / account / order / delivery surfaces live behind a `(account)` route group with auth. |
| NFR-4   | Photo updates are stored as **objects in cloud storage** with metadata in the DB — never as raw blobs in the DB. See `07_DATA_MODEL.md`. |
| NFR-5   | All payment integrations must use a **single provider** for the lifetime of Phase 1–2. Adding a second is Phase 3. **Q-8** |
| NFR-6   | All dates in the UI render in **Asia/Kolkata (IST)**; the seed farm is in Karnataka. |
| NFR-7   | Accessibility target: WCAG 2.1 AA on every product surface. |
| NFR-8   | The brand voice in copy is the same voice that already lives in `components/sections/`. No "marketing copy" voice is allowed. See `08_CONTENT_STRATEGY.md`. |

---

## 1. Pillar 1 — Subscription

### FR-1.0 Subscription landing page

**Pillar:** 1 · **Phase:** 1 · **Persona:** anon

**User story.** As a city dweller, I want a single page that explains
how the subscription works, why it's different from an organic box, and
what zone / plot I am signing up for, so that I can decide whether to
join.

**Acceptance criteria.**
- Lands at `/subscribe` (route group `(marketing)`; see `06_INFORMATION_ARCHITECTURE.md`).
- Shows: the four tiers, the current season's expected basket, the
  delivery radius (default: Bengaluru urban), and a "talk to us" CTA.
- Carries the same scroll-narrative motion language as the home page.

**Out of scope.** Account creation, payment collection. Done on `/sign-up`.

**Open questions.** **Q-9**

### FR-1.1 Plot / zone explorer

**Pillar:** 1 · **Phase:** 1 · **Persona:** anon, subscriber

**User story.** As a prospective subscriber, I want to see the actual
1-acre laid out — each zone visible, what it grows this week, who else
shares a zone with me, so that I know what I'm buying.

**Acceptance criteria.**
- Lands at `/zones`.
- Renders a hand-illustrated (or hand-surveyed) map of the 1-acre with
  zone overlays from `11_FARM_ZONING.md`.
- Each zone has a card: name, area, current crop, expected harvest
  week, number of subscribers served.
- Cards link to a deep page per zone: `/zones/[zoneId]`.

**Out of scope.** Live soil-sensor data, drone footage (Phase 3+).

**Open questions.** **Q-10** (how anonymous is the explorer?).

### FR-1.2 Subscribe / checkout

**Pillar:** 1 · **Phase:** 1 · **Persona:** anon → subscriber

**User story.** As a visitor, I want to pick a tier, pick a delivery
slot, give an address, and pay, so that I become a subscriber.

**Acceptance criteria.**
- At `/subscribe/checkout`.
- Three steps: **Tier → Delivery → Identity & payment**.
- Identity is email + name + phone (+ optional address notes).
- Payment collects the **first month** only; recurring billing is
  scheduled. **Q-8**
- On success, the user is auto-logged-in and lands at `/my-plot`.

**Out of scope.** Gift subscriptions (Phase 3), corporate billing (Phase 2).

**Open questions.** **Q-3, Q-7, Q-8**

### FR-1.3 My plot

**Pillar:** 1 · **Phase:** 1 · **Persona:** subscriber

**User story.** As a subscriber, I want a single page that shows my
zone, the photo updates from this week, the upcoming delivery date,
and a way to pause or change my plan.

**Acceptance criteria.**
- Lands at `/my-plot` (authed).
- Header: zone name, crop(s) in season, expected next harvest.
- Body: **photo-update timeline** for this zone (most recent first).
- Sidebar: next delivery date, plan tier, change/pause actions.
- Inline contact form to the farm (email + photo, queues into the
  admin inbox).

**Out of scope.** In-app chat (Phase 2), per-plot live video (never).

### FR-1.4 Delivery schedule

**Pillar:** 1 · **Phase:** 1 · **Persona:** subscriber

**User story.** As a subscriber, I want to see and change my delivery
day and window, and I want to know what is in this week's basket, by
when.

**Acceptance criteria.**
- Lands at `/my-plot/delivery` (authed).
- Shows the **rolling 4-week schedule** for my zone (planned sowing →
  planned harvest → planned pack → planned delivery).
- A change-day action lets me request a delivery-day move; the request
  goes to the admin queue, not an auto-commit.
- This-week's basket contents are visible from the **morning of pack
  day**, after packing.

**Out of scope.** Self-serve rescheduling without human approval.

### FR-1.5 Photo update stream

**Pillar:** 1 · **Phase:** 1 · **Persona:** subscriber (recipient); admin (publisher)

**User story (subscriber).** As a subscriber, I want photos of my zone
through the season, posted in roughly real time, so that I have a
relationship with the plot.

**User story (admin).** As the farm manager, I want to upload a batch
of photos of a zone, tag them with phase and crop, and have the system
send a digest to subscribers before the delivery.

**Acceptance criteria.**
- Admin uploads via `/admin/zones/[zoneId]/updates/new` (auth + role
  required).
- Each update has: zone, photo(s), short caption, crop phase tag
  (`sow` / `grow` / `harvest` / `pack`).
- Subscribers receive the digest: by **email** (always), by **web push**
  (opt-in).
- On `app/page.tsx`, the public homepage remains untouched — photo
  updates are not exposed publicly in Phase 1.

**Out of scope.** Instagram auto-posting (Phase 2), subscriber comments
on updates (Phase 2).

**Open questions.** **Q-2** (toggle for the digest in the cheapest tier).

### FR-1.6 Pause / change / cancel

**Pillar:** 1 · **Phase:** 1 · **Persona:** subscriber

**User story.** As a subscriber, I want to pause my subscription for a
month without losing my plot allocation, or to cancel cleanly, without
having to send an email.

**Acceptance criteria.**
- Actions live at `/my-plot/manage`.
- Pause: one month per year, no fee; subscriber keeps their plot.
- Tier change: takes effect at the next billing cycle.
- Cancel: ends the recurring charge at the end of the current cycle;
  the plot becomes **available** for re-assignment immediately.

**Out of scope.** Refund handling inside the app. **Q-7**

---

## 2. Pillar 2 — Experience

### FR-2.0 Stay landing page

**Pillar:** 2 · **Phase:** 2 · **Persona:** visitor

**User story.** As a prospective visitor, I want to see what staying at
the farm looks like — rooms, food, pace, silence — so that I know whether
the weekend is for me.

**Acceptance criteria.**
- Lands at `/stay`.
- Carries the same scroll-narrative voice as the home page.
- Photos (or illustrations, replacing the current SVG style), room
  inventory, sample day, what's included, what's not.

**Out of scope.** Real-time room availability (Phase 2 late), gift
vouchers (Phase 3).

### FR-2.1 Stay booking

**Pillar:** 2 · **Phase:** 2 · **Persona:** visitor

**User story.** As a visitor, I want to pick a date range, a room, and
the meal plan (included / opt-in), and reserve, so that I can come.

**Acceptance criteria.**
- At `/stay/book`.
- Steps: **Dates → Room + meals → Identity → Payment → Confirmation**.
- On confirmation, two emails: the visitor and the farm.
- A small ICS attachment is provided in confirmation email.

**Out of scope.** Channel-manager integration (Phase 3), corporate rates
(Phase 2 mid).

**Open questions.** **Q-4, Q-11**

### FR-2.2 Events & workshops calendar

**Pillar:** 2 · **Phase:** 2 · **Persona:** visitor, subscriber

**User story.** As a visitor, I want to see upcoming events and
workshops at the farm — yoga retreats, foraging walks, ghee-making
sessions — so that I can pick one to attend.

**Acceptance criteria.**
- Lands at `/journal` (the "what's happening" surface — see
  `06_INFORMATION_ARCHITECTURE.md`).
- Calendar + list view.
- Each event: title, host, length, capacity, price, what's included,
  link to register.

**Out of scope.** Self-host events (Phase 3), ticketing via third party.

### FR-2.3 Excursions

**Pillar:** 2 · **Phase:** 2 · **Persona:** visitor

**User story.** As a visitor, I want to book an excursion to the BRT
safari, the Jenumutti temple, or the Tibetan settlement, separately
from staying at the farm.

**Acceptance criteria.**
- Lands at `/stay/excursions`.
- Three flagship offerings, each with operator (named), duration, what
  to expect, price.
- Booking funnels into `/stay/book`.

**Out of scope.** Independent operator dashboards. Operators stay on
email + WhatsApp until Phase 3.

### FR-2.4 Subscriber visit credits

**Pillar:** 2 · **Phase:** 2 · **Persona:** subscriber

**User story.** As a subscriber, I want to use my quarterly stay credit
when I want, without re-entering my payment details.

**Acceptance criteria.**
- Credit balance visible at `/my-plot`.
- Redeemable against any `/stay/book` flow, as a line-item discount.
- Expiry: rolling 12 months from issuance.

**Out of scope.** Gifting credits (Phase 3).

---

## 3. Pillar 3 — Sustenance & Shop

### FR-3.0 Shop landing

**Pillar:** 3 · **Phase:** 3 · **Persona:** visitor, subscriber, anon

**User story.** As a visitor, I want to see what the farm makes and
sells — ghee, honey, soap, pickles, millets — so that I can buy or
subscribe.

**Acceptance criteria.**
- Lands at `/shop`.
- Hero copy is in the field-journal voice.
- Products grouped by family. Each product deep-links to `/shop/[slug]`.
- Wholesale / stockist enquiry visible but only as an email, not a form.

**Out of scope.** Marketplace functions (multi-vendor), reviews system.

### FR-3.1 Product detail & buy

**Pillar:** 3 · **Phase:** 3 · **Persona:** visitor, subscriber, anon

**User story.** As a buyer, I want to know exactly what this product is,
where on the farm it came from, when it was made, and how to get it.

**Acceptance criteria.**
- At `/shop/[slug]`.
- Each PDP shows: origin (zone name + map snippet), batch id, best-before,
  ingredients, use notes.
- Buy button (or subscribe for cows-dairy) → simple cart.
- Subscribers get one-click reorder of their previous cart.

**Out of scope.** Subscription bundling (Phase 3 late), gifting.

**Open questions.** **Q-5, Q-12**

### FR-3.2 Checkout & shipping

**Pillar:** 3 · **Phase:** 3 · **Persona:** visitor, subscriber, anon

**User story.** As a buyer, I want to enter a shipping address, pay, and
see a delivery estimate.

**Acceptance criteria.**
- Same payment provider as Pillar 1 (NFR-5).
- Shipping rates: flat band inside Bengaluru urban, special-case for
  perishables (ghee). **Q-12**

**Out of scope.** International shipping (ever, in this concept).

### FR-3.3 Order tracking & reorder

**Pillar:** 3 · **Phase:** 3 · **Persona:** subscriber, customer

**User story.** As a customer, I want to see my order history and
re-order what I liked.

**Acceptance criteria.**
- Lands at `/account/orders`.
- For each past order: products, total, status, reorder button.
- Reorder = same address, same payment method, one click.

**Out of scope.** Subscription management of food SKU bundles
(Phase 3 late).

---

## 4. Admin & operations

### FR-4.0 Admin authentication

**Pillar:** cross · **Phase:** 1 · **Persona:** admin

**User story.** As the farm's operations lead, I want a simple sign-in
to the admin, so that the farm can run the platform.

**Acceptance criteria.**
- All `/admin/*` routes require a `role: admin` claim.
- Single sign-on (email + magic link) for the seed-farm team. **Q-13**
- Audit log of every admin action.

**Out of scope.** Multi-tenant admin (Phase 4 only).

### FR-4.1 Zone & crop planner

**Pillar:** cross · **Phase:** 1 · **Persona:** admin

**User story.** As the agronomist, I want to define zones of the 1-acre,
the crops in each, the rotation, and the expected harvest weeks, so that
subscribers see an accurate picture of their plot.

**Acceptance criteria.**
- `/admin/zones` — list + create/edit zone.
- `/admin/zones/[id]` — name, area, current crop(s), rotation plan,
  capacity (subscribers served), notes.
- All edits are versioned.

**Out of scope.** Per-row planting logs (Phase 3+).

### FR-4.2 Photo update publisher

**Pillar:** 1 · **Phase:** 1 · **Persona:** admin

**User story.** As the farm, I want to upload a batch of photos of a
zone, tag them with phase and crop, and have the system send a digest
to subscribers.

**Acceptance criteria.**
- See `FR-1.5` for the subscriber-facing side.
- Admin: `/admin/zones/[zoneId]/updates/new` — multi-photo upload,
  short caption, crop phase selector (`sow` / `grow` / `harvest` /
  `pack`), scheduled-send time.

**Out of scope.** Auto-caption / AI tools (Phase 3 late).

### FR-4.3 Delivery & basket composer

**Pillar:** 1 · **Phase:** 1 · **Persona:** admin

**User story.** As the packer, I want to see this week's planned
deliveries by zone, compose the basket contents per tier, and print
pack sheets.

**Acceptance criteria.**
- `/admin/deliveries` — week view.
- Per zone, per tier: basket contents list (from `11_FARM_ZONING.md`
  + admin override), item quantities, packing notes.
- Print-friendly pack sheet per delivery route.

**Out of scope.** Driver app (Phase 3). Use a routing spreadsheet in
Phase 1.

### FR-4.4 Subscribers & accounts

**Pillar:** 1 · **Phase:** 1 · **Persona:** admin

**User story.** As operations, I want to look up a subscriber, see their
plan, pause/cancel on their behalf, and view their delivery & payment
history.

**Acceptance criteria.**
- `/admin/subscribers` — search by name/email/phone.
- `/admin/subscribers/[id]` — full record.
- Actions are logged in the audit log.

**Out of scope.** Bulk import (never — Phase 1 sells in tens, not
thousands).

---

## 5. Phase 0 — Brand refresh (no new product surface)

Phase 0 is the cheapest possible pivot: the existing pages are reframed so
that the workshop site reads as the *front door* of the platform, while we
build the real product surfaces behind it.

### FR-5.0 Homepage reframing

**Phase:** 0 · **Persona:** anon

**Acceptance criteria.**
- Hero (`components/sections/Hero.tsx`) keeps its scroll-narrative shape.
  The line `Where does your food come from?` stays.
  The CTAs become a small two-button group:
  **"Subscribe to a plot"** → `/subscribe`
  **"Come for a weekend"** → `/stay`
- `Invitation` section becomes a **dual CTA**: subscribe (with link to
  `/subscribe`) *and* reserve a workshop seat (current behaviour kept).
- Navigation (`components/Navigation.tsx`) gains:
  `Subscribe` → `#subscribe`
  `Stay` → `#stay`
  Existing links `Vision`, `Place`, `Founder`, `Join` are preserved.

### FR-5.1 New "Three pillars" interlude section

**Phase:** 0 · **Persona:** anon

**Acceptance criteria.**
- A new section `Three pillars` is added to `app/page.tsx`, placed after
  `Founder` and before `Seasons`.
- Section is a typographic list of the three pillars
  (`Subscription` / `Experience` / `Sustenance`) — voice matches the
  field-journal style already in `components/sections/Chapters.tsx`.
- Each pillar links to the future deep page (`/subscribe`, `/stay`, `/shop`),
  but the anchors work even while those pages are stubbed.

### FR-5.2 No data work

**Phase:** 0 · **Persona:** all

**Acceptance criteria.**
- No database integration in Phase 0. The dual CTA and the interlude
  section are static.
- The existing `Invitation` form (`components/sections/Invitation.tsx`)
  is unchanged in behaviour; only its CTA text is updated.

---

## 6. FRD index

A quick lookup, ordered by Phase.

| ID          | Title                                | Phase | Owner           |
| ----------- | ------------------------------------ | ----- | --------------- |
| FR-5.0      | Homepage reframing                   | 0     | Design + Dev    |
| FR-5.1      | Three pillars interlude              | 0     | Design + Dev    |
| FR-5.2      | No data work (scope cap)             | 0     | Dev             |
| FR-1.0      | Subscription landing                 | 1     | Dev + Content   |
| FR-1.1      | Plot / zone explorer                 | 1     | Dev + Ops       |
| FR-1.2      | Subscribe / checkout                 | 1     | Dev             |
| FR-1.3      | My plot                              | 1     | Dev + Design    |
| FR-1.4      | Delivery schedule                    | 1     | Dev             |
| FR-1.5      | Photo update stream                  | 1     | Dev + Ops       |
| FR-1.6      | Pause / change / cancel              | 1     | Dev             |
| FR-4.0      | Admin authentication                 | 1     | Dev             |
| FR-4.1      | Zone & crop planner                  | 1     | Dev + Agronomy  |
| FR-4.2      | Photo update publisher               | 1     | Dev + Ops       |
| FR-4.3      | Delivery & basket composer           | 1     | Dev + Ops       |
| FR-4.4      | Subscribers & accounts               | 1     | Dev             |
| FR-2.0      | Stay landing                         | 2     | Design + Dev    |
| FR-2.1      | Stay booking                         | 2     | Dev             |
| FR-2.2      | Events & workshops calendar          | 2     | Dev             |
| FR-2.3      | Excursions                           | 2     | Dev + Ops       |
| FR-2.4      | Subscriber visit credits             | 2     | Dev             |
| FR-3.0      | Shop landing                         | 3     | Design + Dev    |
| FR-3.1      | Product detail & buy                 | 3     | Dev + Content   |
| FR-3.2      | Checkout & shipping                  | 3     | Dev             |
| FR-3.3      | Order tracking & reorder             | 3     | Dev             |