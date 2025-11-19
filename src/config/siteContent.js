const siteContent = {
  brand: {
    name: "The Elk Grove Standard",
    logoText: "EG",
    tagline: "Local-standard garments from Elk Grove, California.",
  },

  social: {
    instagram: "https://instagram.com/your_elk_grove_standard",
    tiktok: "https://www.tiktok.com/@your_elk_grove_standard",
    twitter: "https://x.com/your_elk_grove_standard",
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "Popular", href: "#popular" },
    { label: "Collection", href: "#products" },
    { label: "Story", href: "#story" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    id: "hero",
    eyebrow: "Elk Grove • California",
    title: "The standard for local streetwear.",
    subtitle:
      "Heavyweight, clean pieces inspired by Elk Grove: ponds, docks, geese, and late-night drives on familiar streets. Built to feel like home and wear like armor.",
    primaryCta: {
      label: "Shop popular",
      href: "#popular",
    },
    secondaryCta: {
      label: "View full collection",
      href: "#products",
    },
  },

  features: {
    id: "features",
    title: "Why this line actually means something",
    subtitle:
      "Not random graphics slapped on blanks. Every piece is tied to Elk Grove and designed to outlast trends.",
    items: [
      {
        title: "Rooted in Elk Grove",
        description:
          "Dock, pond, geese, and streets – each design carries a piece of the city, kept subtle and wearable.",
      },
      {
        title: "Premium feel, daily wear",
        description:
          "Heavyweight fabrics, thoughtful fits, and finishes that don’t fall apart after two washes.",
      },
      {
        title: "Small batch drops",
        description:
          "Limited runs keep the line focused, intentional, and away from over-saturated hype.",
      },
    ],
  },

  products: {
    id: "products",
    title: "Full collection",
    subtitle:
      "Every piece is designed around the Elk Grove standard: calm, grounded, and built to be worn hard.",
    items: [
      {
        name: "Elk Grove Standard Hoodie",
        price: "$45",
        description:
          "Heavyweight fleece hoodie in deep forest green with a small ‘The Elk Grove Standard’ chest mark.",
        tag: "Core",
        popular: true,
        category: "Hoodie",
      },
      {
        name: "Pond & Dock Hoodie",
        price: "$48",
        description:
          "Graphic back print of the Elk Grove pond and dock, with a minimal front logo ready for late-night walks.",
        tag: "Feature piece",
        popular: true,
        category: "Hoodie",
      },
      {
        name: "Geese Route Sweats",
        price: "$42",
        description:
          "Relaxed-fit sweats with a small route graphic inspired by geese paths and Elk Grove streets.",
        tag: "Popular",
        popular: true,
        category: "Sweats",
      },
      {
        name: "Geese Route Tee",
        price: "$28",
        description:
          "Soft tee with a clean front graphic referencing geese flight paths and familiar roads.",
        tag: "Essential",
        popular: false,
        category: "Tee",
      },
      {
        name: "916 Standard Cap",
        price: "$24",
        description:
          "Low-profile cap with a small ‘Standard’ lockup and subtle 916 nod for those who know.",
        tag: "Accessory",
        popular: false,
        category: "Cap",
      },
    ],
  },

  standard: {
    id: "standard",
    title: "Set your standard.",
    subtitle:
      "The Elk Grove Standard started as a promise: if it carries the name, it has to meet the bar.",
    paragraphs: [
      "Clothes say a lot before you ever speak. The Elk Grove Standard exists so what you wear actually lines up with who you are: grounded, consistent, and intentional.",
      "Every piece in this line is built around one question: would you still be proud to wear it a year from now? If the answer is no, it doesn’t make the cut.",
      "When you put on an Elk Grove Standard hoodie, tee, or pair of sweats, you’re choosing more than a logo. You’re choosing to raise your own baseline – your standard – a little higher.",
    ],
    cta: {
      label: "Shop the standard",
      href: "#popular",
    },
  },

  story: {
    id: "story",
    title: "Built from Elk Grove, for Elk Grove.",
    subtitle:
      "This isn’t about chasing trends. It’s about making garments that feel like the city you grew up in.",
    paragraphs: [
      "Every city has its own rhythm. For Elk Grove, it’s the sound of traffic smoothing out on familiar roads, the quiet around the pond, and the geese that absolutely refuse to move out of the way.",
      "The Elk Grove Standard is about capturing that feeling in garments: calm, grounded, and clean. No corny tourist graphics. No loud nonsense. Just pieces you can wear daily.",
      "As the brand grows, each drop stays rooted in Elk Grove: small runs, thoughtful designs, and a focus on quality over noise.",
    ],
  },

  contact: {
    id: "contact",
    title: "Wholesale, collabs, or questions?",
    subtitle:
      "Boutiques, local businesses, or anyone wanting to work with The Elk Grove Standard – reach out here.",
    email: "youremail@example.com", // change to your real email
  },
};

export default siteContent;
