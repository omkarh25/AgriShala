# 03 — Seed Farm

> Why **Lokkanahalli / BRT** is the prototype, not just the venue.

## What "seed farm" means here

A **seed farm** is the first site where the three-pillar model is fully
realised and documented well enough to be **copied**. It is not a
headquarters; it is a working example. Other AgriShala sites (a second
acre, a sister farm) reuse its zoning plan, its operational playbook, its
subscription flows, and its brand voice.

This document maps every asset that already exists at Lokkanahalli to the
role it will play in the platform.

---

## The site, today

| Asset (already on the ground)                                    | Role in the platform (going forward)                          |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| **Lokkanahalli village**, BRT Tiger Reserve edge, Karnataka      | Seed farm location. Mailing address, narrative setting.       |
| **Bamboo Cafe** (Jayapal's organic cafe)                         | On-site dining + the test kitchen for vertical-integration products. |
| **The two-day workshop** (the current web app's story)           | The flagship Experience offering + the onboarding ritual for new subscribers. |
| **Jayapal**, founder of Bamboo Cafe, ex-HDFC banker             | Steward of the seed farm. Voice of the brand.                 |
| **Soliga community** (long-time forest dwellers of the BRT)     | Cultural & agronomic elder-council; excursion partners; seeding-knowledge holders. |
| **BRT Tiger Reserve** (1,300 km² mosaic, Western + Eastern Ghats)| Excursion + worldview. We do not farm the reserve; we farm next to it. |
| **Jenumutti temple** (hill shrine in the valley)                 | Excursion anchor + the still, quiet ritual point of the property. |
| **Tibetan settlement** nearby                                    | Excursion anchor; proof of plural culture on the doorstep.   |
| **Existing fields** (ragi, millets, groundnut, mango, jackfruit, greens) | The first zoned 1-acre; the canonical zone plan lives here. |
| **Bengaluru ↔ Lokkanahalli road, ~3.5 hours**                    | Logistics ceiling. The farm is reachable for a weekend but not for daily dabbawala-style drops. **Q-1** *(see `14_OPEN_QUESTIONS.md`). |

---

## Why this is the right seed farm

1. **It already exists.** A working farm, a working cafe, a working
   workshop. No greenfield risk.
2. **It already has a story.** The current website reads like a slow
   letter — `app/page.tsx` opens on the question _"Where does your food
   come from?"_ The brand voice is half-built; we extend it, we do not
   replace it.
3. **It is at the right scale.** 1 acre (≈ 4,047 m²) is the unit both the
   legal/regulatory framework and the agronomy playbook can handle. A
   "1-acre" framing is also legible to a city dweller: small enough to
   picture, large enough to feed a few dozen households.
4. **It is at the right altitude and ecology.** The BRT belt is dry
   deciduous — at the meeting of the Western and Eastern Ghats — which
   means we can grow a meaningful mix of millets, greens, pulses, mango,
   jackfruit, and tuber crops without irrigation pressure. It also means
   the **Sustenance** pillar (Gau Shala, Agnihotra, native seed,
   rain-fed cropping) is not aspirational; it is forced.
5. **It is close enough, not too close.** 3.5 hours from Bengaluru is
   far enough to feel like you have crossed a threshold, close enough for
   weekend stays and weekly delivery. See `04_BUSINESS_MODEL.md` for how
   this affects the distribution radius.

---

## How the seed farm *evolves*

The site does not change posture — it adds layers. Reading top-to-bottom:

```
Phase 0   Brand refresh        ← current workshop site becomes the
                                  public face of a *platform*, not
                                  just a weekend event.
                                  See `CHANGELOG_DRAFT.md`.

Phase 1   Subscription MVP     ← existing fields become the first
                                  zoned 1-acre. Subscribers get
                                  photo updates + weekly delivery.
                                  Bamboo Cafe packs the baskets.

Phase 2   Experience           ← add stay units (existing bamboo
                                  structures), kitchen upgrade,
                                  event calendar, excursion
                                  partners (Soliga elder, jeep
                                  drivers, Tibetan hosts).

Phase 3   Sustenance           ← bring in cattle for Gau Shala,
                                  set up Agnihotra corner, build
                                  compost yard, seed-saving room,
                                  value-addition kitchen (ghee,
                                  honey, soap, pickles, millet
                                  flours).

Phase 4   Replication          ← publish the playbook; on-board
                                  the first sister site.
```

Full roadmap in `12_ROADMAP.md`.

---

## What the seed farm is *not*

- Not a franchise template in the legal sense. Each site is sovereign.
- Not a single-crop, single-recipe farm. The zoning plan in `11_FARM_ZONING.md`
  is intentionally polycultural.
- Not a tourism resort. Beds and meals exist only insofar as they deepen
  the relationship with the food.

---

## Hand-off checklist for the ops team

When the dev team is ready to integrate Lokkanahalli into the platform,
ops should provide:

1. A high-resolution site survey (GIS or hand-drawn boundary map) of the
   seed-farm parcel — with proposed zone overlays from `11_FARM_ZONING.md`.
2. Soil test results (pH, N-P-K, organic carbon) per existing subplot.
3. Water source map (bore wells, open wells, seasonal streams) and the
   existing rainwater-harvesting capacity.
4. List of existing trees with species and age (especially mango and
   tamarind — we treat them as long-cycle anchors).
5. Photos of every existing building (cafe, kitchen, any rooms used for
   stays) with dimensions.
6. Names and roles of the current labour pool (full-time, seasonal,
   contract).