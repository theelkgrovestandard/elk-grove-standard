// src/config/product.js
import DigitalMockup from "../assets/products/Digital Assets Mockup_1.jpg";
import ForestGreenHoodie from "../assets/products/Forest Green Elk Grove Hoodie_1.jpg";
import CreamHoodie from "../assets/products/Cream Elk Grove Hoodie_1 (1).jpg";
import LakeTeeFront from "../assets/products/image (13).png";
import LakeTeeBack from "../assets/products/image (14).png";
import OakTee from "../assets/products/image (6).png";
import StagTee from "../assets/products/image (7).png";
import GlowLogo1 from "../assets/products/image (17).png";
import GlowLogo2 from "../assets/products/image (18).png";
import HoodieBack from "../assets/products/back of sweater.jpg";
export const products = [
  {
    id: "digital-tee-pack",
    name: "Core Tee Mockup Pack",
    price: 28,
    description:
      "Clean tees featuring the Elk Grove antler marks and wordmark. Temporary mockups for the first drop.",
    image: DigitalMockup,
    gallery: [DigitalMockup],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
    category: "shirts",
  },

  {
    id: "forest-green-hoodie",
    name: "Forest Green Elk Grove Hoodie",
    price: 55,
    description:
      "Deep forest green hoodie with the Elk Grove map and stag graphic. Built to be the main rotation hoodie.",
    image: ForestGreenHoodie,
    gallery: [ForestGreenHoodie, HoodieBack],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
    category: "hoodies",
  },

  {
    id: "cream-hoodie",
    name: "Cream Grove Standard Hoodie",
    price: 55,
    description:
      "Cream fleece hoodie with the Grove Standard map graphic on the back and antlers on the front.",
    image: CreamHoodie,
    gallery: [CreamHoodie],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
    category: "hoodies",
  },

  {
    id: "grey-lake-tee",
    name: "Lake & Geese Tee",
    price: 32,
    description:
      "Light grey tee with the pond, dock, and geese illustration pulled from Elk Grove scenery.",
    image: LakeTeeFront,
    gallery: [LakeTeeFront, LakeTeeBack],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    category: "shirts",
  },

  {
    id: "white-oak-antler-tee",
    name: "Oak Crest Tee",
    price: 30,
    description:
      "White tee featuring the oak-and-antlers emblem – simple, clean, and everyday wearable.",
    image: OakTee,
    gallery: [OakTee],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    category: "shirts",
  },

  {
    id: "green-stag-tee",
    name: "Stag Silhouette Tee",
    price: 30,
    description:
      "Forest green tee with the bold stag silhouette graphic on the chest.",
    image: StagTee,
    gallery: [StagTee],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    category: "shirts",
  },

  {
    id: "glow-logo-art",
    name: "Glow Logo Artwork",
    price: 0,
    description:
      "Digital glow-logo artwork used as brand visuals and backgrounds. Not a physical product.",
    image: GlowLogo1,
    gallery: [GlowLogo1, GlowLogo2],
    sizes: [],
    featured: false,
    category: "art",
  },
];