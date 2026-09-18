# 14 — Open Questions

> A single, authoritative list of every assumption I had to make while
> writing these docs. Each item has a `Q-NN` reference; every `Q-NN` in
> the docs points back here.

> **How to use this.** As decisions are made, mark the item as
> ✅ **resolved** with the date and the decision, rather than deleting
> it. The history is useful.

---

### Q-1 · Delivery radius in Phase 1
**Where it shows up.** `03_SEED_FARM.md`, `04_BUSINESS_MODEL.md` §2, `06_INFORMATION_ARCHITECTURE.md` "out-of-radius".
**Assumption.** Default delivery is the Bengaluru urban area (radius ≈ 40 km from the city core). Outside this radius, `/subscribe` is a lead-capture surface only.
**Resolved.** ☐ — pending founder + ops sign-off.

### Q-2 · Photo digest in the cheapest tier
**Where it shows up.** `04_BUSINESS_MODEL.md` §2, `05_PRODUCT_REQUIREMENTS.md` FR-1.5.
**Assumption.** The `Half-plot` tier receives no weekly digest; a digest is bundled for `Plot` and above.
**Resolved.** ☐ — pending founder decision.

### Q-3 · Subscription tier prices (INR)
**Where it shows up.** `04_BUSINESS_MODEL.md` §2, `05_PRODUCT_REQUIREMENTS.md` FR-1.2.
**Assumption.** Numbers deliberately **TBD**. The shape in §2 of the business model is the deliverable.
**Resolved.** ☐ — pending founder + finance.

### Q-4 · Stay + workshop pricing
**Where it shows up.** `04_BUSINESS_MODEL.md` §3, `05_PRODUCT_REQUIREMENTS.md` FR-2.1.
**Assumption.** Existing workshop pricing is preserved through Phase 0; tiered in Phase 2.
**Resolved.** ☐ — pending founder.

### Q-5 · Retail SKU pricing
**Where it shows up.** `04_BUSINESS_MODEL.md` §4, `05_PRODUCT_REQUIREMENTS.md` FR-3.1.
**Assumption.** "Honest-organics band", not luxury-organic. Numbers **TBD**.
**Resolved.** ☐ — pending founder + ops.

### Q-6 · Delivery surcharges beyond the core radius
**Where it shows up.** `04_BUSINESS_MODEL.md` §2, `05_PRODUCT_REQUIREMENTS.md` FR-3.2.
**Assumption.** Flat-rate within the core radius; first-tier surcharge beyond it; refuse beyond N km.
**Resolved.** ☐ — pending ops.

### Q-7 · Pause / cancellation / refund policy
**Where it shows up.** `04_BUSINESS_MODEL.md` §7, `05_PRODUCT_REQUIREMENTS.md` FR-1.6.
**Assumption.** One paused month/year per subscriber; clean cancel at cycle end; no in-app refunds (handled via email).
**Resolved.** ☐ — pending founder + legal.

### Q-8 · Payment provider
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` NFR-5, FR-1.2, FR-3.2.
**Assumption.** Razorpay (UPI + cards + subscriptions supported). One provider throughout Phase 1–2.
**Resolved.** ☐ — pending founder + finance.

### Q-9 · `/subscribe` landing messaging
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` FR-1.0, `08_CONTENT_STRATEGY.md` "Tone by surface".
**Assumption.** Voice stays in the field-journal register; concrete baskets, dates.
**Resolved.** ☐ — pending founder + writer.

### Q-10 · Anonymity on `/zones`
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` FR-1.1.
**Assumption.** Anonymous visitors see zone-level occupancy ("3 of 12 slots open"), not subscriber identities.
**Resolved.** ☐ — pending founder + dev.

### Q-11 · Stay booking payment provider
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` FR-2.1.
**Assumption.** Same provider as Q-8; deposits at booking, balance on arrival / before check-in.
**Resolved.** ☐ — pending founder + ops.

### Q-12 · Shop shipping rates (Bengaluru perishables)
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` FR-3.2.
**Assumption.** Flat-rate within Bengaluru; surcharge for perishables (ghee) outside.
**Resolved.** ☐ — pending founder + ops.

### Q-13 · Admin authentication
**Where it shows up.** `05_PRODUCT_REQUIREMENTS.md` FR-4.0, `06_INFORMATION_ARCHITECTURE.md`.
**Assumption.** Email + magic-link for the seed-farm team; one global role for the seed farm (no multi-tenant until Phase 4).
**Resolved.** ☐ — pending founder + dev.

### Q-14 · Herd breed choice
**Where it shows up.** `10_FARM_OPERATIONS.md` §1, `13_GLOSSARY.md` H, M.
**Assumption.** Likely Malnad Gidda + Hallikar mix — to be confirmed with the Soliga elders and a local vet.
**Resolved.** ☐ — pending founder + ops + community elders.

### Q-15 · Biogas plant in Phase 3
**Where it shows up.** `10_FARM_OPERATIONS.md` §1, §9.
**Assumption.** A small fixed-dome biogas plant for 5 animals is feasible; capex ~₹ 1.5–2.5 lakh. Whether to install at Phase 3 or later is undecided.
**Resolved.** ☐ — pending founder + ops + finance.

### Q-16 · Publish the *yearly soil report* on the website
**Where it shows up.** `10_FARM_OPERATIONS.md` §3, §9.
**Assumption.** It is on-brand. Sensitivity (e.g. trade secrets in our pest protocol) needs to be considered.
**Resolved.** ☐ — pending founder.

### Q-17 · Public live feed of Homa timing
**Where it shows up.** `10_FARM_OPERATIONS.md` §2, §9.
**Assumption.** Default is *no*; daily updates can live as low-key journal entries instead. Tested in Phase 3 mid.
**Resolved.** ☐ — pending founder + community.

### Q-18 · Aquaculture as a Phase-4 sideline
**Where it shows up.** `11_FARM_ZONING.md` §7.
**Assumption.** Not in Phase 1–3. A small fish / azolla tank could integrate cattle protein loops.
**Resolved.** ☐ — pending founder + agronomist.

### Q-19 · Mulberry / sericulture in Z4
**Where it shows up.** `11_FARM_ZONING.md` §7.
**Assumption.** Out of scope; not aligned with the "vertical integration for *food*" framing.
**Resolved.** ☐ — pending founder (leaning **no**).

### Q-20 · Soliga Heritage Zone (Z11)
**Where it shows up.** `11_FARM_ZONING.md` §7.
**Assumption.** Defensible as cultural part of the platform but requires a partnership conversation, not a zoning decision.
**Resolved.** ☐ — pending founder + Soliga elders.

### Q-21 · Community marketplace — first product list
**Where it shows up.** `01_VISION.md §3a`, `03_SEED_FARM.md §5`, `04_BUSINESS_MODEL.md §4a`.
**Question.** Which Soliga-led products enter the community marketplace in Phase 1? Provisional list: wild-forest honey, ragi & jowar flour, wild-tuber preserves, seasonal forest produce. **Lean:** ship with this list, expand only after month 6 audit.
**Resolved.** ☐ — pending founder + Soliga elders.

### Q-22 · Community marketplace — platform fee % and audit-fund governance
**Where it shows up.** `04_BUSINESS_MODEL.md §4a`.
**Question.** What is the platform fee per transaction, and how is the **community audit and pricing fund** governed? **Lean:** small flat percentage (TBD), fund governed by a Soliga-majority committee, public log of fees and remittances.
**Resolved.** ☐ — pending founder + Soliga elders.

---

## Suggested next-step schedule (for the founder)

1. **Within a week.** Q-1, Q-2, Q-7, Q-14, Q-20 — operational/ethical
   decisions that block almost everything else.
2. **Within a month.** Q-3, Q-4, Q-5, Q-8 — pricing and provider
   decisions, needed before Phase 1 build starts.
3. **Within the first Phase 1 season.** Q-6, Q-9, Q-10, Q-11 — detailed
   messaging and ops decisions.
4. **During Phase 2 planning.** Q-15, Q-16, Q-17.
5. **Phase 4 decision-making.** Q-12, Q-18, Q-19.