# 08 — Content Strategy

> Voice, tone, narrative arc, and editorial cadence. The point is to keep
> the *field-journal* feel that already lives in `components/sections/`
> alive everywhere a sentence gets written.

## Voice in one paragraph

Quiet, observant, slightly old-fashioned. Specific before general.
Willing to be wrong about itself. Never breathless, never performative,
never punny. Concrete imagery carries the feeling; the reader is trusted
to complete the thought. The closest reference points are *Masanobu Fukuoka's
_One Straw Revolution_*, *Wendell Berry's essays*, and the printed
agronomy notes pinned to a wooden noticeboard at a Soliga homestead.

## Tone rules

1. **Concrete before abstract.** "The ragi is shoulder-high"
   not "growth is impressive."
2. **Show labour.** Every product description names at least one person,
   one tool, or one practice.
3. **No marketing language.** Forbidden words:
   `curated`, `artisanal`, `premium`, `experience` (as a noun),
   `unforgettable`, `journey`, `bespoke`, `exclusive`, `hand-picked`
   (use *by hand*, *today*, with a date).
4. **One idea per paragraph.**
5. **No exclamation marks. Anywhere.**
6. **Time is specific.** Dates, seasons, weeks of the year.
7. **Restraint over completion.** If a sentence doesn't earn its place,
   delete it.

## Headline language

| Avoid                            | Prefer                                              |
| -------------------------------- | --------------------------------------------------- |
| "Subscribe to fresh, organic produce!" | "Subscribe to a plot."                              |
| "An unforgettable experience"     | "A weekend at the farm."                            |
| "Carefully curated by experts"    | "Made here, by name."                               |
| "Premium A2 cow ghee"             | "A2 cow ghee, from the herd at Z8."                 |
| "Where luxury meets nature"       | "Lokkanahalli, on the edge of BRT."                 |

## Tone by surface

| Surface                              | Voice                                                           |
| ------------------------------------ | --------------------------------------------------------------- |
| Homepage scroll-narrative            | Already-poetic; preserve exactly.                              |
| Subscription landing (`/subscribe`)  | Practical, quieter than the homepage. Concrete baskets, dates. |
| Zone deep pages (`/zones/[id]`)      | Field-journal entries. Name the farmer when you can.          |
| Photo-update captions                | One sentence, present tense, dated.                            |
| PDP (`/shop/[slug]`)                 | Origin story first, use notes second, never *features bullets*. |
| Order confirmation                   | A small receipt, no soft-sell.                                 |
| Admin screens                        | Plain instrument-panel English. No metaphor.                   |
| 404 / out-of-radius                  | Honest, charming, never embarrassed.                            |

## Photo-update cadence (the editorial engine)

This is the stream that turns a delivery service into a relationship.

A zone's photo update is the *one piece of marketing we publish every
week*. Cadence:

- **Weekly minimum.** One update per zone, two in peak season.
- **Phase tags.** `sow` → `grow` → `harvest` → `pack`. The caption must
  use the tag's verb tense.
- **Caption ≤ 240 chars.** One sentence. Always ends with a date or a
  measurement ("This morning, 18 of the 24 ragi heads had bent.",
  "12 baskets packed for Saturday's run.", "Week 14 of the kharif.").
- **Photo set ≥ 3, ≤ 8.** Always include at least one with a person in
  the frame and at least one close-up of soil/produce.
- **Send window.** Tuesday or Wednesday evening, so it lands in the
  inbox before Saturday's delivery.

### Caption examples (good)

- `Last week's rain held. The ragi is a handspan taller than on Monday.`
- `Saturday baskets: 14 of greens, 12 of millets, 6 of mango pickle.`
- `Three rows of horsegram went in this morning, on a mist that tasted
  like woodsmoke.`

### Caption examples (avoid)

- `🌱 Fresh harvest alert — get yours now!`  (marketing voice, banned emoji)
- `We've hand-selected the best of this week's harvest for you.`  (banned phrase)
- `An exciting new chapter in your wellness journey.`  (banned words ×3)

## Web-app copy inventory (Phase 0)

A reader of `app/page.tsx` would currently note these lines as
exceptional — they should remain anchors when we draft new copy in
later phases:

- Hero: _"Where does your food come from?"_ (untouchable)
- Vision: _"Two worlds. One plate of food."_
- Founder: _"The city will feed you for the rest of your life. Spend two
  days understanding who feeds the city."_  (Jayapal)
- Invitation: _"Come for two days. Return a little less of a stranger
  to your own plate."_

When Phase 0 adds a `Three pillars` interlude, copy one of these voices.
We are not chasing a different register; we are extending the same one.

## Pillars copy-block (drafted, replaceable)

> **Subscription — *know the field that feeds you.***
> A plot of the 1-acre, photo updates from it every week, and a basket
> at your door on Saturday morning. Cancel any time.
>
> **Experience — *live what you eat.***
> A weekend at the farm. Stay in bamboo. Eat what was harvested an hour
> ago. Walk with the people who grew it.
>
> **Sustenance — *make the farm stand.***
> Cows, composting, seed-saving, the daily Agnihotra. The practices that
> keep the soil alive and the produce honest — and the small jars,
> soaps, and flours they make possible.

## What we are not

- We are not a wellness brand.
- We are not a luxury-organic retailer.
- We are not a content site that sells merch on the side.

If a future page reads like any of those, the test of any decision
(§"The test of any decision" in `01_VISION.md`) failed.
