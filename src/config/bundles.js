// src/config/bundles.js

import ForestGreenHoodie from "../assets/products/Forest Green Elk Grove Hoodie_1.jpg";
import CreamHoodie from "../assets/products/Cream Elk Grove Hoodie_1 (1).jpg";
import OakTee from "../assets/products/image (6).png";
import LakeTee from "../assets/products/image (13).png";

export const bundles = [
  {
    id: "green-hoodie-tee-bundle",
    name: "Forest Green Hoodie + Tee Bundle",
    price: 80,
    description:
      "Core Elk Grove stack: the forest green hoodie plus a matching tee. Built to be your main rotation, not backup pieces.",
    image: ForestGreenHoodie,
    includes: ["Forest Green Elk Grove Hoodie", "Oak Crest Tee"],
    tag: "Most popular",
  },
  {
    id: "cream-hoodie-lake-tee-bundle",
    name: "Cream Hoodie + Lake Tee Bundle",
    price: 80,
    description:
      "Cream Grove Standard hoodie paired with the lake & geese tee. Clean enough for any day, still rooted in Elk Grove.",
    image: CreamHoodie,
    includes: ["Cream Grove Standard Hoodie", "Lake & Geese Tee"],
    tag: "Cleanest combo",
  },
  {
    id: "two-hoodies-bundle",
    name: "Two Hoodie Standard Pack",
    price: 105,
    description:
      "Grab both the forest green and cream hoodies and never argue with your closet again.",
    image: LakeTee,
    includes: [
      "Forest Green Elk Grove Hoodie",
      "Cream Grove Standard Hoodie",
    ],
    tag: "Best value",
  },
];
