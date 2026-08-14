/**
 * Mock data for the VELOS demo site.
 * All values are fictional but realistic for an international trading house.
 * No database connection — these objects are imported directly by components.
 */

export type PartnerType = "Buyer" | "Supplier" | "Agent" | "Buyer & Supplier";
export type PartnerStatus = "active" | "inactive";

export type Partner = {
  id: string;
  name: string;
  type: PartnerType;
  country: string;
  countryCode: string;
  city: string;
  currency: string;
  contact: string;
  email: string;
  phone: string;
  deals: number;
  balance: number; // in partner's currency
  status: PartnerStatus;
  since: string;
};

export type ProductCategory =
  | "Fertilizers"
  | "Metals"
  | "Grains"
  | "Coffee"
  | "Spices"
  | "Chemicals";

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  unit: string;
  price: number;
  currency: string;
  stock: number;
  origin: string;
};

export type OfferStatus = "draft" | "sent" | "accepted" | "rejected";

export type Offer = {
  id: string;
  number: string;
  partnerId: string;
  partnerName: string;
  date: string;
  currency: string;
  amount: number;
  status: OfferStatus;
  items: number;
};

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

export type Invoice = {
  id: string;
  number: string;
  partnerId: string;
  partnerName: string;
  issued: string;
  due: string;
  currency: string;
  amount: number;
  status: InvoiceStatus;
};

export type TradeCalculation = {
  id: string;
  name: string;
  product: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  priceCurrency: string;
  settlementCurrency: string;
  exchangeRate: number;
  freight: number;
  insurance: number;
  dutyPercent: number;
  bankCharges: number;
  total: number;
  perUnit: number;
};

export type TradeVolume = {
  currency: string;
  volume: number;
  share: number; // percentage 0-100
};

export type KpiTrend = {
  label: string;
  value: number;
  deltaPct: number;
};

/* ------------------------------ Partners ------------------------------ */

export const partners: Partner[] = [
  {
    id: "p1",
    name: "AgroFert Türkiye A.Ş.",
    type: "Buyer & Supplier",
    country: "Turkey",
    countryCode: "TR",
    city: "Istanbul",
    currency: "USD",
    contact: "Mehmet Yıldız",
    email: "mehmet@agrofert-tr.com",
    phone: "+90 212 555 0101",
    deals: 24,
    balance: 184_500,
    status: "active",
    since: "2021-03-12",
  },
  {
    id: "p2",
    name: "Volga Commodities LLC",
    type: "Supplier",
    country: "Russia",
    countryCode: "RU",
    city: "Rostov-on-Don",
    currency: "EUR",
    contact: "Ivan Petrov",
    email: "i.petrov@volga-commodities.ru",
    phone: "+7 863 200 4455",
    deals: 17,
    balance: 92_300,
    status: "active",
    since: "2020-09-04",
  },
  {
    id: "p3",
    name: "Balkan Grains DOO",
    type: "Buyer",
    country: "Serbia",
    countryCode: "RS",
    city: "Novi Sad",
    currency: "EUR",
    contact: "Marko Jovanović",
    email: "marko@balkan-grains.rs",
    phone: "+381 21 555 332",
    deals: 31,
    balance: 0,
    status: "active",
    since: "2019-11-22",
  },
  {
    id: "p4",
    name: "Gulf Fertilizers FZE",
    type: "Buyer",
    country: "United Arab Emirates",
    countryCode: "AE",
    city: "Dubai",
    currency: "AED",
    contact: "Ahmed Al-Mansouri",
    email: "ahmed@gulffert.ae",
    phone: "+971 4 555 7788",
    deals: 12,
    balance: 312_000,
    status: "active",
    since: "2022-06-18",
  },
  {
    id: "p5",
    name: "Sao Paulo Coffee Trading",
    type: "Supplier",
    country: "Brazil",
    countryCode: "BR",
    city: "Santos",
    currency: "USD",
    contact: "Carla Mendes",
    email: "carla@spcoffeetrade.com.br",
    phone: "+55 13 5555 9090",
    deals: 9,
    balance: 47_800,
    status: "active",
    since: "2023-01-10",
  },
  {
    id: "p6",
    name: "Hanseatic Metals GmbH",
    type: "Buyer & Supplier",
    country: "Germany",
    countryCode: "DE",
    city: "Hamburg",
    currency: "EUR",
    contact: "Lukas Bauer",
    email: "l.bauer@hanseatic-metals.de",
    phone: "+49 40 5550 1234",
    deals: 28,
    balance: 14_500,
    status: "active",
    since: "2018-05-30",
  },
  {
    id: "p7",
    name: "Kerala Spice Exports",
    type: "Supplier",
    country: "India",
    countryCode: "IN",
    city: "Kochi",
    currency: "USD",
    contact: "Priya Nair",
    email: "priya@kerala-spices.in",
    phone: "+91 484 555 6600",
    deals: 15,
    balance: 8_200,
    status: "active",
    since: "2021-08-14",
  },
  {
    id: "p8",
    name: "Adriatic Chemicals d.o.o.",
    type: "Buyer",
    country: "Croatia",
    countryCode: "HR",
    city: "Rijeka",
    currency: "EUR",
    contact: "Ana Horvat",
    email: "ana@adriatic-chem.hr",
    phone: "+385 51 555 220",
    deals: 0,
    balance: 0,
    status: "inactive",
    since: "2024-02-01",
  },
];

/* ------------------------------ Products ------------------------------ */

export const products: Product[] = [
  { id: "pr1", sku: "FER-URE-46", name: "Urea 46% Prilled", category: "Fertilizers", unit: "MT", price: 385, currency: "USD", stock: 1250, origin: "Russia" },
  { id: "pr2", sku: "FER-DAP-18-46", name: "DAP 18-46-0", category: "Fertilizers", unit: "MT", price: 612, currency: "USD", stock: 860, origin: "Morocco" },
  { id: "pr3", sku: "FER-AMM-SUL", name: "Ammonium Sulphate 21%", category: "Fertilizers", unit: "MT", price: 298, currency: "USD", stock: 540, origin: "Turkey" },
  { id: "pr4", sku: "FER-NPK-15-15-15", name: "NPK 15-15-15 Compound", category: "Fertilizers", unit: "MT", price: 445, currency: "USD", stock: 0, origin: "Belgium" },
  { id: "pr5", sku: "MET-CU-CATH", name: "Copper Cathodes Grade A", category: "Metals", unit: "MT", price: 8420, currency: "USD", stock: 75, origin: "Chile" },
  { id: "pr6", sku: "MET-AL-INGOT", name: "Aluminium Ingots A7", category: "Metals", unit: "MT", price: 2185, currency: "USD", stock: 220, origin: "Russia" },
  { id: "pr7", sku: "MET-HMS-1-2", name: "HMS 1&2 Scrap Steel", category: "Metals", unit: "MT", price: 412, currency: "USD", stock: 1500, origin: "Germany" },
  { id: "pr8", sku: "GRN-WHEAT-12", name: "Milling Wheat 12.5%", category: "Grains", unit: "MT", price: 248, currency: "EUR", stock: 4200, origin: "Serbia" },
  { id: "pr9", sku: "GRN-CORN-YEL", name: "Yellow Corn #2", category: "Grains", unit: "MT", price: 215, currency: "USD", stock: 6800, origin: "Brazil" },
  { id: "pr10", sku: "GRN-BARLEY-FEED", name: "Feed Barley", category: "Grains", unit: "MT", price: 198, currency: "EUR", stock: 1100, origin: "Ukraine" },
  { id: "pr11", sku: "COF-ARAB-SS-17", name: "Arabica SS 17/18", category: "Coffee", unit: "Bag 60kg", price: 348, currency: "USD", stock: 920, origin: "Brazil" },
  { id: "pr12", sku: "COF-ROB-UG2", name: "Robusta UG2", category: "Coffee", unit: "Bag 60kg", price: 198, currency: "USD", stock: 540, origin: "Vietnam" },
  { id: "pr13", sku: "SPC-BLK-PEP-550", name: "Black Pepper MG1 550 GL", category: "Spices", unit: "MT", price: 6450, currency: "USD", stock: 38, origin: "India" },
  { id: "pr14", sku: "SPC-CDM-DRY", name: "Cardamom Dry Bold", category: "Spices", unit: "MT", price: 9800, currency: "USD", stock: 12, origin: "Guatemala" },
  { id: "pr15", sku: "CHM-CAU-STN", name: "Caustic Soda Flakes 99%", category: "Chemicals", unit: "MT", price: 540, currency: "USD", stock: 320, origin: "China" },
];

/* ------------------------------ Offers ------------------------------ */

export const offers: Offer[] = [
  { id: "o1", number: "OFR-2025-0142", partnerId: "p4", partnerName: "Gulf Fertilizers FZE", date: "2025-07-28", currency: "USD", amount: 481_250, status: "accepted", items: 3 },
  { id: "o2", number: "OFR-2025-0141", partnerId: "p1", partnerName: "AgroFert Türkiye A.Ş.", date: "2025-07-26", currency: "USD", amount: 192_500, status: "sent", items: 2 },
  { id: "o3", number: "OFR-2025-0140", partnerId: "p3", partnerName: "Balkan Grains DOO", date: "2025-07-22", currency: "EUR", amount: 104_160, status: "accepted", items: 1 },
  { id: "o4", number: "OFR-2025-0139", partnerId: "p6", partnerName: "Hanseatic Metals GmbH", date: "2025-07-19", currency: "EUR", amount: 631_500, status: "sent", items: 4 },
  { id: "o5", number: "OFR-2025-0138", partnerId: "p8", partnerName: "Adriatic Chemicals d.o.o.", date: "2025-07-15", currency: "EUR", amount: 86_400, status: "rejected", items: 1 },
  { id: "o6", number: "OFR-2025-0137", partnerId: "p5", partnerName: "Sao Paulo Coffee Trading", date: "2025-07-12", currency: "USD", amount: 320_160, status: "draft", items: 2 },
];

/* ------------------------------ Invoices ------------------------------ */

export const invoices: Invoice[] = [
  { id: "i1", number: "INV-2025-0089", partnerId: "p3", partnerName: "Balkan Grains DOO", issued: "2025-07-05", due: "2025-08-04", currency: "EUR", amount: 78_300, status: "paid" },
  { id: "i2", number: "INV-2025-0088", partnerId: "p1", partnerName: "AgroFert Türkiye A.Ş.", issued: "2025-06-28", due: "2025-07-28", currency: "USD", amount: 145_000, status: "overdue" },
  { id: "i3", number: "INV-2025-0087", partnerId: "p6", partnerName: "Hanseatic Metals GmbH", issued: "2025-07-18", due: "2025-08-17", currency: "EUR", amount: 312_750, status: "sent" },
  { id: "i4", number: "INV-2025-0086", partnerId: "p4", partnerName: "Gulf Fertilizers FZE", issued: "2025-07-29", due: "2025-08-28", currency: "USD", amount: 481_250, status: "draft" },
];

/* ------------------------- Trade Calculations ------------------------- */

export const tradeCalculations: TradeCalculation[] = [
  {
    id: "tc1",
    name: "Urea → Dubai (DAP)",
    product: "Urea 46% Prilled",
    quantity: 1250,
    unit: "MT",
    unitPrice: 385,
    priceCurrency: "USD",
    settlementCurrency: "USD",
    exchangeRate: 1,
    freight: 28_500,
    insurance: 4_200,
    dutyPercent: 5,
    bankCharges: 1_150,
    total: 514_100,
    perUnit: 411.28,
  },
  {
    id: "tc2",
    name: "Copper → Hamburg",
    product: "Copper Cathodes Grade A",
    quantity: 75,
    unit: "MT",
    unitPrice: 8420,
    priceCurrency: "USD",
    settlementCurrency: "EUR",
    exchangeRate: 0.92,
    freight: 14_800,
    insurance: 9_400,
    dutyPercent: 2.5,
    bankCharges: 2_300,
    total: 646_700,
    perUnit: 8622.67,
  },
  {
    id: "tc3",
    name: "Wheat → Novi Sad",
    product: "Milling Wheat 12.5%",
    quantity: 4200,
    unit: "MT",
    unitPrice: 248,
    priceCurrency: "EUR",
    settlementCurrency: "EUR",
    exchangeRate: 1,
    freight: 18_600,
    insurance: 2_800,
    dutyPercent: 0,
    bankCharges: 650,
    total: 1_063_050,
    perUnit: 253.11,
  },
];

/* ------------------------- Dashboard aggregates ------------------------- */

export const monthlyRevenue: KpiTrend[] = [
  { label: "Feb", value: 845_000, deltaPct: 0 },
  { label: "Mar", value: 912_000, deltaPct: 7.9 },
  { label: "Apr", value: 878_500, deltaPct: -3.7 },
  { label: "May", value: 1_045_000, deltaPct: 18.9 },
  { label: "Jun", value: 1_212_500, deltaPct: 16.0 },
  { label: "Jul", value: 1_283_000, deltaPct: 5.8 },
];

export const tradeVolumeByCurrency: TradeVolume[] = [
  { currency: "USD", volume: 2_140_000, share: 58 },
  { currency: "EUR", volume: 1_180_000, share: 32 },
  { currency: "AED", volume: 312_000, share: 8 },
  { currency: "RUB", volume: 56_000, share: 2 },
];

export const upcomingPayments: Invoice[] = [
  { id: "i3", number: "INV-2025-0087", partnerId: "p6", partnerName: "Hanseatic Metals GmbH", issued: "2025-07-18", due: "2025-08-17", currency: "EUR", amount: 312_750, status: "sent" },
  { id: "i4", number: "INV-2025-0086", partnerId: "p4", partnerName: "Gulf Fertilizers FZE", issued: "2025-07-29", due: "2025-08-28", currency: "USD", amount: 481_250, status: "draft" },
  { id: "i2", number: "INV-2025-0088", partnerId: "p1", partnerName: "AgroFert Türkiye A.Ş.", issued: "2025-06-28", due: "2025-07-28", currency: "USD", amount: 145_000, status: "overdue" },
];

/* ------------------------- Pricing plans ------------------------- */

export type PricingPlan = {
  id: "starter" | "business" | "enterprise" | "custom";
  name: string;
  priceMonthly: number | null; // null = "Contact us"
  currency: string;
  highlight?: boolean;
  tagline: string;
  ctaKey: "trial" | "trial" | "trial" | "contact";
  features: {
    users: string;
    partners: string;
    offersPerMonth: string;
    currencies: string;
    tradeCalc: boolean;
    portal: boolean;
    erp: boolean;
    api: boolean;
    support: string;
  };
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 49,
    currency: "USD",
    tagline: "For solo traders getting started.",
    ctaKey: "trial",
    features: {
      users: "1",
      partners: "Up to 50",
      offersPerMonth: "25",
      currencies: "5",
      tradeCalc: true,
      portal: false,
      erp: false,
      api: false,
      support: "Email",
    },
  },
  {
    id: "business",
    name: "Business",
    priceMonthly: 149,
    currency: "USD",
    highlight: true,
    tagline: "For growing trade desks with a small team.",
    ctaKey: "trial",
    features: {
      users: "5",
      partners: "Up to 500",
      offersPerMonth: "250",
      currencies: "20",
      tradeCalc: true,
      portal: true,
      erp: false,
      api: true,
      support: "Email + Chat",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 399,
    currency: "USD",
    tagline: "For full trade houses with back-office needs.",
    ctaKey: "trial",
    features: {
      users: "25",
      partners: "Unlimited",
      offersPerMonth: "Unlimited",
      currencies: "50+",
      tradeCalc: true,
      portal: true,
      erp: true,
      api: true,
      support: "Priority 24/7",
    },
  },
  {
    id: "custom",
    name: "Custom",
    priceMonthly: null,
    currency: "USD",
    tagline: "For multi-entity groups and custom workflows.",
    ctaKey: "contact",
    features: {
      users: "Unlimited",
      partners: "Unlimited",
      offersPerMonth: "Unlimited",
      currencies: "50+",
      tradeCalc: true,
      portal: true,
      erp: true,
      api: true,
      support: "Dedicated CSM",
    },
  },
];

/** Quick aggregate used by dashboard KPI cards. */
export const dashboardKpis = {
  revenue: 1_283_000,
  revenueCurrency: "USD",
  revenueDelta: 5.8,
  openOffers: 18,
  openOffersDelta: 12.5,
  unpaidInvoices: 939_000,
  unpaidInvoicesCurrency: "USD",
  unpaidInvoicesDelta: -3.2,
  activePartners: 7,
  activePartnersDelta: 0,
};

/** Country list used by the trial form. */
export const countries = [
  "Serbia",
  "Turkey",
  "Germany",
  "Russia",
  "United Arab Emirates",
  "Brazil",
  "India",
  "Croatia",
  "United Kingdom",
  "United States",
  "Netherlands",
  "Singapore",
  "Other",
];
