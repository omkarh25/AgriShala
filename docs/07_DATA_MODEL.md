# 07 — Data Model

> The domain entities, their relationships, and where they live (DB /
> CMS / static / cloud-storage). The language is intentionally close to
> the TypeScript already in `components/sections/timelineData.tsx` so the
> dev team can drop these straight into code.

> **Notation.** Fields marked `(Phase 2)` etc. are only required in that
> phase. Everything else is needed by Phase 1.

---

## High-level shape

```
Subscriber ──< Subscription ──── Zone ──< Plot
                │                                  │
                │                                  │
                ├──< Delivery                      ├──< PhotoUpdate
                │                                  │
                └──< Pause / Cancellation          └──< CropPlan (rotation)
                                                            │
                                                            └─< YieldRecord (Phase 3)

Stay ──< Booking ──< StayStayPackage
Event ──< Booking (Phase 2)
Product ──< OrderLine ──< Order (Phase 3)
GauShalaCattle ──< HomaRecord (Phase 3)   // Agnihotra log
```

---

## Core entities

### `Subscriber`

The person who has, or has ever had, an active subscription. One
human-to-one-record in the system.

```ts
type Subscriber = {
  id: string                        // ULID
  name: string
  email: string                     // unique; used as sign-in handle
  phone?: string                    // E.164
  deliveryAddress?: DeliveryAddress // required only when active
  createdAt: Date
  updatedAt: Date
  status: 'active' | 'paused' | 'cancelled'
  role: 'subscriber' | 'admin' | 'staff'
}
```

Notes:

- One `Subscriber` per human, even if they later add a partner / family.
  Family members are tracked as `SubscriptionMember` (Phase 2).
- `role` doubles as the auth claim for `/admin/*`. **Q-13**

### `Subscription`

The active contract: tier, plan, billing cycle, current `Zone`.

```ts
type Subscription = {
  id: string
  subscriberId: string
  tier: 'half-plot' | 'plot' | 'family-plot' | 'feast-plot'
  zoneId: string                    // current zone assignment
  status: 'pending' | 'active' | 'paused' | 'cancelled'
  startedAt: Date
  pausedUntil?: Date                // when status = 'paused', one-month max
  cancelledAt?: Date
  billing: {
    interval: 'monthly' | 'annual'
    priceINR: number                // TBD — see Q-3
    nextChargeAt: Date
    paymentMethodId: string         // provider's identifier (NFR-5)
  }
  delivery: {
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Sunday
    windowStart: string             // '06:00'
    windowEnd: string               // '09:00'
  }
  preferences: {
    photoDigest: 'email' | 'webpush' | 'both' | 'off'
    spiceLevel?: 'mild' | 'medium' | 'hot' // Phase 2, hint for kit
  }
}
```

### `Zone`

A named part of the 1-acre. The canonical zone list lives in
`11_FARM_ZONING.md`. **The dev team should not invent new zones**;
onboarding a new zone is a product decision.

```ts
type Zone = {
  id: string                        // e.g. 'Z3-millets-pulses'
  name: string                      // 'Millets & Pulses'
  areaSqM: number                   // ~ 405 m² for 1/10 acre
  description: string               // 1–2 sentence field-journal copy
  capacity: number                  // max subscribers served
  capacityUsed: number              // live count of active subs here
  isPublic: boolean                 // shown on /zones map?
  currentCropPlanId: string         // FK -> CropPlan
  geojson?: GeoJSON.Polygon         // optional map polygon
  galleryTop: string[]              // photo ids for the zone card
  createdAt: Date
  version: number                   // bumps on every edit
}
```

### `Plot`

A `Subscriber` does not own a `Zone`; they share one. Internally we still
track a **plot** as the conceptual allocation (e.g. a quarter of
`Zone Z3`).

```ts
type Plot = {
  id: string
  subscriptionId: string
  zoneId: string
  plotFraction: number              // 0.0 – 1.0; what share of this zone's
                                    // harvest this subscriber gets
  assignedAt: Date
  releasedAt?: Date
}
```

A `Zone` with capacity `12` and a default `plotFraction = 1/12` will
serve 12 subscribers. Higher tiers (`family-plot`, `feast-plot`) use a
bigger fraction.

### `CropPlan` and `YieldRecord`

The agronomy backbone.

```ts
type CropPlan = {
  id: string
  zoneId: string
  season: 'kharif' | 'rabi' | 'zaid' | 'perennial'
  year: number
  crops: Array<{
    cropKey: string                 // 'ragi', 'horsegram', 'turmeric', ...
    sowWindow: { startDate: Date; endDate: Date }
    harvestWindow: { startDate: Date; endDate: Date }
    expectedYieldKg: number
    notes?: string
  }>
  rotationNote?: string             // why this follows the previous plan
  approvedBy: string                // admin user id
}
```

```ts
type YieldRecord = {                // Phase 3
  id: string
  zoneId: string
  cropKey: string
  harvestedAt: Date
  actualYieldKg: number
  lossesKg?: number
  notes?: string
}
```

Phase 1 ships without `YieldRecord`; we back-fill it in Phase 3 once we
want to publish real yield-to-delivery ratios.

---

## Delivery & photo updates

### `Delivery`

One row per *attempted* delivery.

```ts
type Delivery = {
  id: string
  subscriptionId: string
  weekOf: Date                      // Monday of the week
  status: 'planned' | 'packed' | 'out-for-delivery' | 'delivered' | 'skipped'
  basketContents: Array<{
    cropKey: string
    quantityKg: number
    overrideNote?: string           // admin override at pack time
  }>
  notes?: string
  packedAt?: Date
  deliveredAt?: Date
  skippedReason?: 'pause' | 'inventory' | 'subscriber-skip'
}
```

### `PhotoUpdate`

A single batch of photos from the farm, tagged to a zone and a phase.

```ts
type PhotoUpdate = {
  id: string
  zoneId: string
  postedAt: Date
  phase: 'sow' | 'grow' | 'harvest' | 'pack'
  caption: string                   // ≤ 240 chars; field-journal voice
  photoIds: string[]                // -> ObjectRef
  publishedAt?: Date                // null until the digest is sent
}
```

Photos themselves are objects in cloud storage, not DB rows.

```ts
type ObjectRef = {
  id: string                        // ULID
  bucket: string                    // e.g. 'agrishala-photos'
  key: string                       // path inside the bucket
  contentType: string               // 'image/webp' etc.
  bytes: number
  width: number
  height: number
  altText?: string                  // required for any public surface
  uploadedBy: string                // admin user id
  uploadedAt: Date
}
```

---

## Stay & events

### `Stay` and `Booking`

Phase 2; the schema is sketched now so `FR-4.*` admin screens know what
to display.

```ts
type Stay = {
  id: string
  name: string                      // e.g. 'Bamboo Room'
  capacity: number                  // guests
  basePriceINR: number
  notes?: string
}

type Booking = {
  id: string
  kind: 'stay' | 'event' | 'excursion'
  refId: string                     // Stay.id | Event.id | Excursion.id
  subscriberId?: string             // null for visitor bookings
  visitorName: string
  visitorEmail: string
  visitorPhone?: string
  startDate: Date
  endDate?: Date                    // null for single-day events
  pax: number
  totalINR: number
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  paymentMethodId?: string
  stayCreditRedeemedINR?: number    // for FR-2.4
  notes?: string
}
```

### `Event` and `Excursion`

```ts
type Event = {                      // workshop / retreat / gathering
  id: string
  title: string
  host: string
  summary: string                   // field-journal copy
  startAt: Date
  endAt: Date
  capacity: number
  priceINR: number
  includesMeals: boolean
  status: 'draft' | 'open' | 'sold-out' | 'archived'
}

type Excursion = {                  // BRT safari / Jenumutti / Tibetan
  id: string
  title: string
  operatorName: string
  durationHours: number
  priceINR: number
  notes: string
}
```

---

## Shop (Phase 3)

```ts
type Product = {
  id: string
  slug: string                      // 'a2-cow-ghee'
  family: 'cow' | 'honey' | 'millet' | 'pulse' | 'pickle' | 'skincare' | 'snack'
  name: string
  originZoneId?: string             // when single-origin
  description: string
  ingredients?: string              // for skincare / pickles
  shelfLifeDays?: number
  variants: Array<{
    sku: string                     // 'a2-cow-ghee-500g'
    priceINR: number
    weightG?: number
    inStock: boolean
  }>
  status: 'draft' | 'active' | 'archived'
}

type Order = {
  id: string
  subscriberId?: string             // null for guest checkout
  customerEmail: string
  shippingAddress: Address
  lines: Array<{ sku: string; qty: number; unitPriceINR: number }>
  totalINR: number
  shippingINR: number
  status: 'pending' | 'paid' | 'packing' | 'shipped' | 'delivered' | 'refunded'
  paymentMethodId?: string
  placedAt: Date
}
```

---

## Sustenance (Phase 3)

```ts
type GauShalaCattle = {             // one animal
  id: string                        // ear-tag id, mirrored in DB
  name?: string
  breed: string                     // local, often Malnad Gidda / Hallikar
  birthYear: number
  acquiredAt: Date
  status: 'active' | 'resting' | 'retired' | 'departed'
}

type HomaRecord = {                 // one Agnihotra session
  id: string
  performedAt: Date                 // local IST
  performedBy: string               // admin / staff user id
  copperPyramidSize: 'small' | 'large'
  offeringsUsed: string[]           // cow-dung cakes + ghee + rice + samidhas
  intention?: string                // free text, optional
  weather: 'clear' | 'cloudy' | 'rain' | 'wind'
}
```

---

## How data lives in the system

| Surface                            | Where the data lives                        |
| ---------------------------------- | ------------------------------------------- |
| Hero / scroll-narrative / founder | Static in `app/page.tsx`, `components/sections/` — CMS optional, not in Phase 1. |
| Zones, plots, crop plans          | DB (canonical) + a hand-curated overlay map. |
| Photo updates                     | Cloud storage + DB metadata (`PhotoUpdate`).|
| Subscribers, subscriptions        | DB. Auth provider has its own user store; we mirror minimum. |
| Stay rooms, rates                 | CMS or DB (Phase 2). |
| Events, excursions                | DB (Phase 2). |
| Products, orders                  | DB (Phase 3).|
| Homa records                      | DB (Phase 3) — *but* deliberately low-fi. The point is the practice, not the data. |

> **Rule of thumb.** Anything a farmer can edit during a walk should be
> a DB row. Anything a marketer edits on a Tuesday morning should be a
> CMS row. Anything a designer writes once should live in code.