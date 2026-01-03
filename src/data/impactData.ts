export interface TrackedProduct {
  productId: string;
  addedAt: string;
  quantity: number;
}

export interface MonthlyImpact {
  month: string;
  carbonSaved: number;
  ecoScore: number;
  productsTracked: number;
}

export const trackedProducts: TrackedProduct[] = [
  { productId: "1", addedAt: "2024-01-15", quantity: 2 },
  { productId: "5", addedAt: "2024-01-20", quantity: 1 },
  { productId: "7", addedAt: "2024-02-05", quantity: 3 },
  { productId: "9", addedAt: "2024-02-18", quantity: 1 },
  { productId: "10", addedAt: "2024-03-01", quantity: 2 },
];

export const monthlyImpactData: MonthlyImpact[] = [
  { month: "Jan", carbonSaved: 12.5, ecoScore: 85, productsTracked: 3 },
  { month: "Feb", carbonSaved: 18.2, ecoScore: 88, productsTracked: 5 },
  { month: "Mar", carbonSaved: 24.8, ecoScore: 90, productsTracked: 7 },
  { month: "Apr", carbonSaved: 31.1, ecoScore: 89, productsTracked: 9 },
  { month: "May", carbonSaved: 38.5, ecoScore: 91, productsTracked: 11 },
  { month: "Jun", carbonSaved: 45.2, ecoScore: 92, productsTracked: 14 },
];

export const impactStats = {
  totalCarbonSaved: 45.2,
  averageEcoScore: 91,
  productsTracked: 14,
  treesEquivalent: 2.3,
  plasticAvoided: 8.5,
  waterSaved: 1250,
};

export const scenarioData = [
  {
    id: "switch-clothing",
    title: "Switch to Organic Clothing",
    description: "Replace conventional cotton with organic alternatives",
    currentImpact: 15.2,
    potentialImpact: 6.8,
    savings: "55%",
    difficulty: "Easy",
  },
  {
    id: "zero-waste-bathroom",
    title: "Zero-Waste Bathroom",
    description: "Switch to plastic-free personal care products",
    currentImpact: 8.4,
    potentialImpact: 1.2,
    savings: "86%",
    difficulty: "Medium",
  },
  {
    id: "sustainable-tech",
    title: "Sustainable Electronics",
    description: "Choose refurbished or eco-certified devices",
    currentImpact: 45.0,
    potentialImpact: 22.5,
    savings: "50%",
    difficulty: "Hard",
  },
];
