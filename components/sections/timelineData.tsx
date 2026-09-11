import React from "react";
import {
  SunYoga,
  FoodPlate,
  HandsSowSeed,
  TigerSafari,
  Temple,
  Tibetan,
  Firecamp,
} from "@/components/illustrations";

/**
 * Each chapter of the two-day workshop.
 * Kept in its own file so the Timeline component stays a presentational shell.
 */

export type Chapter = {
  number: string;
  day: string;
  title: string;
  italic?: string;
  body: string;
  Illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
};

export const chapters: Chapter[] = [
  {
    number: "01",
    day: "Day 1 · Sunrise",
    title: "Yoga, pranayama, meditation",
    italic: "before the sun clears the canopy",
    body:
      "We begin before dawn on the veranda. Slow breath, gentle asana, a quiet sit. The fields are still; the light is bronze. By the time we open our eyes, the birds have already claimed the morning.",
    Illustration: SunYoga,
    accent: "from-forest-700/30",
  },
  {
    number: "02",
    day: "Day 1 · Morning",
    title: "Breakfast, farm-fresh",
    italic: "sourced within walking distance of your plate",
    body:
      "Idli, dosa, sambar, chutney, honey from the apiary behind the kitchen, coffee from the coorg beans roasted in iron. Nothing has travelled more than a few hundred metres to reach you.",
    Illustration: FoodPlate,
    accent: "from-earth-200/60",
  },
  {
    number: "03",
    day: "Day 1 · Midday",
    title: "Hands in the soil",
    italic: "exploring seasonal crops with the farmers",
    body:
      "Walk the fields with the people who work them. Ragi, millets, groundnut, ridge gourd, the greens of the week. Sow a row, weed a row, ask every question. Learn what a living wage looks like, and how the city fails to provide one.",
    Illustration: HandsSowSeed,
    accent: "from-forest-100",
  },
  {
    number: "04",
    day: "Day 1 · Afternoon",
    title: "Into the forest",
    italic: "safari through the BRT canopy",
    body:
      "A jeep safari deep into the reserve. Keep your eyes open for the resident leopard on the hill, the elephant herd at the salt lick, and if we are lucky — the tiger whose territory we will respect from a distance.",
    Illustration: TigerSafari,
    accent: "from-forest-900/40",
  },
  {
    number: "05",
    day: "Day 1 · Dusk",
    title: "Jenumutti temple",
    italic: "the hill temple that watches the valley",
    body:
      "A short climb to the ancient shrine. No hurry. The lamp at the threshold has been kept burning for generations. We sit for a while, in silence, as the sun sets across the Ghats.",
    Illustration: Temple,
    accent: "from-earth-300/50",
  },
  {
    number: "06",
    day: "Day 2 · Morning",
    title: "A Tibetan settlement",
    italic: "thousands of kilometres from Lhasa, and yet —",
    body:
      "We visit the small Tibetan community that has made this part of Karnataka home. Prayer flags, momos, a cup of butter tea, and conversations about what it means to belong to a place that adopted you.",
    Illustration: Tibetan,
    accent: "from-earth-100",
  },
  {
    number: "07",
    day: "Day 2 · Night",
    title: "The firecamp",
    italic: "the last evening, under the stars",
    body:
      "Wood smoke, slow-cooked millet, stories from the elders, songs if you will sing. The same fire that has been lit on this soil for thousands of years, by hands that knew exactly what they were feeding.",
    Illustration: Firecamp,
    accent: "from-forest-950/60",
  },
];
