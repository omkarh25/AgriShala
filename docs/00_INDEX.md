# AgriShala — Documentation

> *Let food be your medicine.*

This folder is the **steering layer** for the AgriShala platform. It turns
the seed idea (`TODO.md` at the repo root) into a set of documents that the
founder, the dev team, the design team, the agronomy team, and future
partners can all read from and stay aligned on.

The current web app — a Next.js scroll-narrative for a two-day workshop at
Lokkanahalli near the BRT Tiger Reserve — is the **lighthouse** and the
**first implementation** of this larger concept. Everything here assumes the
workshop site evolves into a three-pillar platform without losing its soul.

---

## How to read these docs

| If you are…                   | Start at…                                | Then read…                                 |
| ----------------------------- | ---------------------------------------- | ------------------------------------------ |
| **The founder**               | `01_VISION.md`, `02_CONCEPT_BRIEF.md`    | `04_BUSINESS_MODEL.md`, `12_ROADMAP.md`    |
| **A new investor / partner**  | `02_CONCEPT_BRIEF.md`                    | `03_SEED_FARM.md`, `04_BUSINESS_MODEL.md`  |
| **A developer joining the team** | `05_PRODUCT_REQUIREMENTS.md`         | `06_INFORMATION_ARCHITECTURE.md`, `07_DATA_MODEL.md`, `09_DESIGN_SYSTEM_NOTES.md` |
| **A designer**                | `08_CONTENT_STRATEGY.md`, `09_DESIGN_SYSTEM_NOTES.md` | `06_INFORMATION_ARCHITECTURE.md`     |
| **An agronomist or junior farmer** | `10_FARM_OPERATIONS.md`, `11_FARM_ZONING.md` | `13_GLOSSARY.md`                       |
| **Anyone confused by a term** | `13_GLOSSARY.md`                         | —                                          |

---

## Document map

```
00_INDEX.md                  ← you are here
01_VISION.md                 ← the north star and the three pillars
02_CONCEPT_BRIEF.md          ← the one-page elevator pitch
03_SEED_FARM.md              ← Lokkanahalli / BRT as the prototype site
04_BUSINESS_MODEL.md         ← revenue streams, tiers, unit economics
05_PRODUCT_REQUIREMENTS.md   ← (PRD) functional requirements per pillar
06_INFORMATION_ARCHITECTURE.md ← sitemap, navigation, user journeys
07_DATA_MODEL.md             ← domain entities and relationships
08_CONTENT_STRATEGY.md       ← voice, tone, narrative arc, editorial cadence
09_DESIGN_SYSTEM_NOTES.md    ← how the existing tokens extend to the product
10_FARM_OPERATIONS.md        ← Sustenance pillar: Gau Shala, Agnihotra, etc.
11_FARM_ZONING.md            ← the 1-acre zoning plan, worked example
12_ROADMAP.md                ← phased plan from workshop site → platform
13_GLOSSARY.md               ← terms, place names, practices
14_OPEN_QUESTIONS.md         ← things I had to assume; please confirm
CHANGELOG_DRAFT.md           ← what changes in the current site vs. what stays
```

---

## Conventions used across these docs

- **TBD** marks any number, pricing tier, date, or decision that I had to
  assume. Resolve these before the relevant phase ships.
- **TODO** marks a known gap or unresolved design choice.
- **Q-n** references an item in `14_OPEN_QUESTIONS.md`.
- Sections starting with `**For the team**` are prescriptive and operational.
  Sections starting with `**For the founder / investor**` are strategic and
  narrative. Both modes are kept in the same doc where useful.

---

## Source of truth

| Topic                        | Source of truth                          |
| ---------------------------- | ---------------------------------------- |
| North star, pillars, voice   | `01_VISION.md`, `08_CONTENT_STRATEGY.md` |
| What the site looks like     | Current `app/`, `components/` (Next.js)  |
| What the site *means*        | `TODO.md` at repo root + this folder      |
| What the farm does           | `10_FARM_OPERATIONS.md`, `11_FARM_ZONING.md` |
| What we *don't* know yet     | `14_OPEN_QUESTIONS.md`                   |

If something in code seems to contradict these docs, the docs win until we
update them. If something in `TODO.md` contradicts these docs, **raise it in
`14_OPEN_QUESTIONS.md`** before changing the docs.
