# 04 — Business Model

> The revenue, the unit economics, and the price tiers — at the right level
> of detail to align on before the subscription MVP ships.

> **For the team.** All numbers marked **TBD** must be resolved before
> Phase 1 pricing is locked. See `14_OPEN_QUESTIONS.md`.

---

## 1. Revenue lines

AgriShala has three pillars and four *revenue lines*. Pillars 2 and 3 both
generate more than one.

| # | Revenue line                      | Pillar | Cadence         | Where it runs                         |
| - | --------------------------------- | ------ | --------------- | ------------------------------------- |
| 1 | **Weekly subscription baskets**   | 1      | Weekly          | Lokkanahalli + future seed sites      |
| 2 | **Stay + food + events**          | 2      | Per booking     | On-farm lodging, dining, function venue |
| 3 | **Workshops & retreats**          | 2      | Per cohort      | Same as line 2, framed as a programme |
| 4 | **Vertical-integration retail**   | 3      | One-off & recurring | D2C website + select stockists   |

A fifth, optional: **farm-visits-as-tourism** (short day visits, school
trips, agro-tourism packages), which we treat as a flavour of line 2.

---

## 2. Subscription tiers (line 1)

The 1-acre is divided into zones. Each tier maps to a **portion of a zone's
weekly harvest** for a given household size. Pricing is **TBD** — these are
the *shapes*, not the numbers.

| Tier            | What you get                                                 | You feed (approx.) | Cadence   |
| --------------- | ------------------------------------------------------------ | ------------------ | --------- |
| **Half-plot**   | Greens + 1 millet/grain + 1 seasonal in 1 delivery           | 1–2 people         | Weekly    |
| **Plot**        | Above + 1 pulse + 1 tuber + occasional fruit; larger portions | 2–4 people         | Weekly    |
| **Family-plot** | Above + cheese/ghee if dairy is enabled + fruit allowance     | 4–6 people         | Weekly    |
| **Feast-plot**  | Above + value-added bonus (honey, pickle, soap)               | 6+ or events       | Weekly    |

Add-ons (priced separately):

- **Same-week photo journal** — a 4–6 image digest of your plot, sent before the
  delivery so you see what you are about to eat. *(Default for all tiers; opt-out
  for the cheapest.)* **Q-2**
- **Delivery-day window** — choose a delivery day (e.g. Saturday morning) and a
  window. Default = Saturday, 6–9 AM in the Bengaluru range.
- **Stay credit** — discounted or bundled stay nights at the Lokkanahalli site.
  Tied to Pillar 2.

### Pricing principles (not numbers)

- **Cost-plus floor.** Subscription revenue covers the agronomy labour,
  land lease / amortised capital, packaging, and delivery, with a thin
  margin in years 1–2.
- **Anchor to the local market, not the global organic market.** We are
  not competing with iOrganic on `per kg`; we are pricing a relationship.
- **Annual prepay discount.** Encourage lock-in (this also improves cash
  flow during the long monsoons).
- **Pause policy.** One paused month per year, per subscriber, no fee.
  Anything beyond is a downgrade path.

---

## 3. Experience pricing (lines 2 & 3)

The stay + events layer has more conventional pricing — per room-night,
per head for events, per seat for workshops — and uses the existing
Bamboo Cafe as the in-house kitchen.

| Package                        | Includes                                     | Pricing guidance (TBD)            |
| ------------------------------ | -------------------------------------------- | --------------------------------- |
| Weekender (1 night)            | Room, breakfast + dinner, farm walk          | Soft anchor; undercuts comparable boutique stays in BRT-area |
| Long-weekend (2 nights)        | Above + one workshop + one excursion         | Margin lift                       |
| Private hire (full day/night)  | The farm, the kitchen, the staff             | Wedding / retreat / corporate offsite bracket |
| Cohort workshop                | Existing 2-day workshop programme            | Current pricing kept; framing refreshed |

Cross-sell hooks:

- Subscribers get a **stay-credit** once a quarter. See add-ons in §2.
- Workshop attendees get a **first-month 50% discount** on any
  subscription tier — funnel from Pillar 2 into Pillar 1.

---

## 4. Vertical-integration retail (line 4)

The seed farm's **value-addition kitchen** (see `10_FARM_OPERATIONS.md` and
`11_FARM_ZONING.md`) produces a small retail catalogue. We start narrow.

| Product family      | Hero SKU                       | Pricing model                  |
| ------------------- | ------------------------------ | ------------------------------ |
| Cow-based           | A2 cow ghee                    | Per 500 g jar; annual sub allowed |
| Apiculture          | Wild-forest honey              | Per 250 g / 500 g              |
| Millets & flours    | Ragi, jowar, foxtail flour     | Per 1 kg pouch                 |
| Pulses              | Horsegram, toor                | Per 500 g                      |
| Pickles & preserves | Mango, lime, gongura           | Per 300 g glass                |
| Skincare            | Goat-milk soap, turmeric soap  | Per 100 g bar                  |
| Snacks              | Millet murukku, millet laddu   | Per 200 g                       |

Pricing guidance: **positioned at the honest-organics band**, not at the
luxury-organic band. The consumer promise is "this came from a specific
zone of a specific farm", and pricing has to be consistent with that.

Distribution:

- **Phase 1** — D2C from the existing web app (new `/shop` route, see
  `06_INFORMATION_ARCHITECTURE.md`). Manual fulfilment from Bamboo Cafe.
- **Phase 2** — Curated stockists in Bengaluru (one bookshop-cafe,
  one wellness clinic, one farmer's market stall). No marketplace.
- **Phase 3** — Subscription bundles (e.g. "monthly essentials box").

---

## 5. Unit economics (very rough)

> These are **straw-man numbers** to anchor the conversation. They do not
> survive contact with reality until we have one full season of data.
> **TBD — see `14_OPEN_QUESTIONS.md` Q-3..Q-7.**

```
Per-acre, per season (Kharif or Rabi)

  Subscription revenue  TBD / yr
  Stay + events         TBD / yr
  Retail (D2C)          TBD / yr
  -----------------------
  Gross revenue         TBD / yr

  Inputs (seeds, packing, fuel, last-mile)   TBD
  Agronomy labour (paid)                     TBD
  Hospitality labour (paid)                  TBD
  Cattle & feed (Pillar 3)                  TBD
  Rent / land amortisation                   TBD
  -----------------------
  Operating cost           TBD

  Gross margin              TBD  %
```

The point of this section is **not** the numbers; it is the **shape**:

- Subscription carries the most recurring weight.
- Stay + events carry the second-highest *margin per customer-day*.
- Retail carries the lowest margin but the highest *brand reach*.

---

## 6. Pricing experiments & guardrails

We will run small pricing experiments in Phase 1. Guardrails:

- Never price below the cost-plus floor (§2).
- Never advertise a tier we cannot deliver for two consecutive seasons.
- Never promise an item in the basket that isn't from the seed farm or
  a named partner. (Traceability is the entire brand. See
  `08_CONTENT_STRATEGY.md`.)
- Never bundle pest-control or herbicide use as a feature.

---

## 7. Open numbers to lock

- **Q-3**  Subscription tier prices.
- **Q-4**  Stay + workshop pricing.
- **Q-5**  Per-SKU retail pricing.
- **Q-6**  Delivery pricing (included vs. surcharge beyond X km).
- **Q-7**  Pause / cancellation / refund policy.