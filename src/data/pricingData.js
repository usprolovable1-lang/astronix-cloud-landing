// Base plans configuration
const basePlans = [
  { cores: 1, ram: "4GB", basePrice: 100 },
  { cores: 2, ram: "8GB", basePrice: 200 },
  { cores: 4, ram: "8GB", basePrice: 250 },
  { cores: 4, ram: "16GB", basePrice: 350 },
  { cores: 4, ram: "32GB", basePrice: 450 },
  { cores: 4, ram: "64GB", basePrice: 550 },
  { cores: 8, ram: "16GB", basePrice: 650 },
  { cores: 8, ram: "32GB", basePrice: 750 },
  { cores: 8, ram: "64GB", basePrice: 850 },
  { cores: 16, ram: "32GB", basePrice: 1000 },
  { cores: 16, ram: "64GB", basePrice: 1500 },
  { cores: 32, ram: "64GB", basePrice: 2000 },
  { cores: 64, ram: "32GB", basePrice: 2500 },
  { cores: 64, ram: "512GB", basePrice: 3500 }
];

// Pricing calculation functions for each category
const calculateNormalVPS = (plan) => ({
  ...plan,
  price: plan.basePrice
});

const calculateAdminRDP = (plan) => ({
  ...plan,
  price: plan.basePrice + 20
});

const calculateGPUVPS = (plan) => {
  const increment = plan.cores <= 4 ? 50 : 200;
  return {
    ...plan,
    price: plan.basePrice + increment
  };
};

const calculateGPURDP = (plan) => ({
  ...plan,
  price: plan.basePrice + 200
});

// Export pricing data for all categories
export const pricingData = [
  {
    category: "Normal CPU VPS",
    plans: basePlans.map(calculateNormalVPS)
  },
  {
    category: "Admin RDP",
    plans: basePlans.map(calculateAdminRDP)
  },
  {
    category: "GPU VPS",
    plans: basePlans.map(calculateGPUVPS)
  },
  {
    category: "GPU RDP",
    plans: basePlans.map(calculateGPURDP)
  }
];
