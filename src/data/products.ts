export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  ecoScore: number;
  carbonFootprint: number;
  image: string;
  description: string;
  sustainability: {
    materials: number;
    manufacturing: number;
    transport: number;
    packaging: number;
    endOfLife: number;
  };
  certifications: string[];
  alternatives?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    brand: "EarthWear",
    category: "Clothing",
    price: 45,
    ecoScore: 92,
    carbonFootprint: 2.1,
    image: "/products/organic-cotton-tshirt.webp",
    description:
      "Made from 100% GOTS-certified organic cotton, this classic t-shirt combines comfort with sustainability. Low-impact dyes and ethical manufacturing.",
    sustainability: {
      materials: 95,
      manufacturing: 90,
      transport: 85,
      packaging: 95,
      endOfLife: 90,
    },
    certifications: ["GOTS Certified", "Fair Trade", "Carbon Neutral"],
  },
  {
    id: "2",
    name: "Bamboo Water Bottle",
    brand: "HydroGreen",
    category: "Home & Living",
    price: 35,
    ecoScore: 88,
    carbonFootprint: 1.5,
    image: "/products/bamboo-water-bottle.webp",
    description:
      "Sustainable bamboo exterior with stainless steel interior. Keeps drinks cold for 24 hours or hot for 12 hours.",
    sustainability: {
      materials: 90,
      manufacturing: 85,
      transport: 80,
      packaging: 95,
      endOfLife: 88,
    },
    certifications: ["FSC Certified", "BPA Free"],
  },
  {
    id: "3",
    name: "Solar-Powered Charger",
    brand: "SunTech",
    category: "Electronics",
    price: 89,
    ecoScore: 85,
    carbonFootprint: 4.2,
    image: "/products/solar-powered-charger.webp",
    description:
      "Portable solar panel charger with USB-C output. Perfect for outdoor adventures and reducing grid dependency.",
    sustainability: {
      materials: 80,
      manufacturing: 82,
      transport: 75,
      packaging: 90,
      endOfLife: 85,
    },
    certifications: ["Energy Star", "RoHS Compliant"],
  },
  {
    id: "4",
    name: "Recycled Ocean Plastic Sneakers",
    brand: "SeaStep",
    category: "Footwear",
    price: 120,
    ecoScore: 90,
    carbonFootprint: 3.8,
    image: "/products/recycled-ocean-plastic-sneakers.webp",
    description:
      "Each pair removes 11 plastic bottles from the ocean. Breathable, comfortable, and stylish.",
    sustainability: {
      materials: 95,
      manufacturing: 88,
      transport: 82,
      packaging: 92,
      endOfLife: 85,
    },
    certifications: ["Ocean Bound Plastic", "Vegan"],
  },
  {
    id: "5",
    name: "Biodegradable Phone Case",
    brand: "GreenShield",
    category: "Accessories",
    price: 29,
    ecoScore: 94,
    carbonFootprint: 0.8,
    image: "/products/biodegradable-phone-case.webp",
    description:
      "Made from plant-based materials that fully biodegrade within 2 years. Shock-absorbent and sleek design.",
    sustainability: {
      materials: 98,
      manufacturing: 92,
      transport: 88,
      packaging: 96,
      endOfLife: 100,
    },
    certifications: ["Compostable", "Plastic Free"],
  },
  {
    id: "6",
    name: "Hemp Canvas Backpack",
    brand: "TrailBlazer",
    category: "Bags",
    price: 85,
    ecoScore: 87,
    carbonFootprint: 2.9,
    image: "/products/hemp-canvas-backpack.webp",
    description:
      "Durable hemp canvas with organic cotton lining. Water-resistant coating from natural waxes.",
    sustainability: {
      materials: 92,
      manufacturing: 85,
      transport: 78,
      packaging: 88,
      endOfLife: 90,
    },
    certifications: ["Hemp Certified", "Fair Trade"],
  },
  {
    id: "7",
    name: "Natural Deodorant Stick",
    brand: "PureEarth",
    category: "Personal Care",
    price: 14,
    ecoScore: 96,
    carbonFootprint: 0.4,
    image: "/products/natural-deodorant-stick.webp",
    description:
      "Aluminum-free formula in a zero-waste cardboard tube. 24-hour protection with natural ingredients.",
    sustainability: {
      materials: 98,
      manufacturing: 95,
      transport: 92,
      packaging: 100,
      endOfLife: 98,
    },
    certifications: ["Cruelty Free", "Vegan", "Zero Waste"],
  },
  {
    id: "8",
    name: "Recycled Wool Blanket",
    brand: "WarmEarth",
    category: "Home & Living",
    price: 150,
    ecoScore: 89,
    carbonFootprint: 3.2,
    image: "/products/recycled-wool-blanket.webp",
    description:
      "Made from 70% recycled wool and 30% recycled polyester. Warm, soft, and built to last generations.",
    sustainability: {
      materials: 92,
      manufacturing: 88,
      transport: 80,
      packaging: 90,
      endOfLife: 95,
    },
    certifications: ["GRS Certified", "Oeko-Tex"],
  },
  {
    id: "9",
    name: "Beeswax Food Wraps",
    brand: "NaturalWrap",
    category: "Kitchen",
    price: 22,
    ecoScore: 97,
    carbonFootprint: 0.3,
    image: "/products/beeswax-food-wraps.webp",
    description:
      "Reusable alternative to plastic wrap. Set of 3 wraps in different sizes. Lasts up to a year with proper care.",
    sustainability: {
      materials: 100,
      manufacturing: 95,
      transport: 90,
      packaging: 100,
      endOfLife: 100,
    },
    certifications: ["Organic", "Plastic Free", "Compostable"],
  },
  {
    id: "10",
    name: "Bamboo Toothbrush Set",
    brand: "SmileSustain",
    category: "Personal Care",
    price: 12,
    ecoScore: 95,
    carbonFootprint: 0.2,
    image: "/products/bamboo-toothbrush-set.webp",
    description:
      "Pack of 4 biodegradable bamboo toothbrushes with soft charcoal-infused bristles.",
    sustainability: {
      materials: 98,
      manufacturing: 94,
      transport: 88,
      packaging: 98,
      endOfLife: 96,
    },
    certifications: ["FSC Certified", "Vegan", "Plastic Free"],
  },
  {
    id: "11",
    name: "Recycled Aluminum Laptop Stand",
    brand: "TechGreen",
    category: "Electronics",
    price: 75,
    ecoScore: 82,
    carbonFootprint: 5.1,
    image: "/products/recycled-aluminum-laptop-stand.webp",
    description:
      "Ergonomic laptop stand made from 100% recycled aluminum. Improves posture and laptop cooling.",
    sustainability: {
      materials: 88,
      manufacturing: 80,
      transport: 72,
      packaging: 85,
      endOfLife: 90,
    },
    certifications: ["Recycled Content", "Carbon Offset"],
  },
  {
    id: "12",
    name: "Organic Linen Bedding Set",
    brand: "SleepPure",
    category: "Home & Living",
    price: 220,
    ecoScore: 91,
    carbonFootprint: 4.5,
    image: "/products/organic-linen-bedding-set.webp",
    description:
      "Queen-size duvet cover and pillowcases. European flax linen, stone-washed for softness.",
    sustainability: {
      materials: 95,
      manufacturing: 90,
      transport: 82,
      packaging: 92,
      endOfLife: 95,
    },
    certifications: ["OEKO-TEX", "European Flax", "GOTS"],
  },
];

export const categories = [
  "All",
  "Clothing",
  "Footwear",
  "Home & Living",
  "Electronics",
  "Personal Care",
  "Kitchen",
  "Bags",
  "Accessories",
];

export const getEcoScoreColor = (score: number): string => {
  if (score >= 90) return "eco-excellent";
  if (score >= 75) return "eco-good";
  if (score >= 60) return "eco-moderate";
  if (score >= 40) return "eco-poor";
  return "eco-critical";
};

export const getEcoScoreLabel = (score: number): string => {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Moderate";
  if (score >= 40) return "Poor";
  return "Critical";
};
