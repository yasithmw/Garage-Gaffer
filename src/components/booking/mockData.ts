import type { SelectedItem } from "./useBookingSession";

// ── Popular Repairs ────────────────────────────────────────────
export const POPULAR_REPAIRS: SelectedItem[] = [
  { id: "r-brake-pads", name: "Brake Pads Replacement (Front)", price: 89, labourTime: "1.5 hrs", partsIncluded: true },
  { id: "r-battery", name: "Car Battery Replacement", price: 109, labourTime: "0.5 hrs", partsIncluded: true },
  { id: "r-alternator", name: "Alternator Replacement", price: 249, labourTime: "2 hrs", partsIncluded: true },
  { id: "r-timing-belt", name: "Timing Belt & Water Pump Kit", price: 329, labourTime: "4 hrs", partsIncluded: true },
  { id: "r-clutch", name: "Clutch Replacement", price: 449, labourTime: "5 hrs", partsIncluded: true },
  { id: "r-radiator", name: "Radiator Replacement", price: 219, labourTime: "2.5 hrs", partsIncluded: true },
  { id: "r-starter-motor", name: "Starter Motor Replacement", price: 199, labourTime: "1.5 hrs", partsIncluded: true },
  { id: "r-spark-plugs", name: "Spark Plug Replacement", price: 79, labourTime: "1 hr", partsIncluded: true },
];

// ── Repair Categories ──────────────────────────────────────────
export type RepairSubItem = {
  id: string;
  name: string;
  price: number;
  labourTime?: string;
  partsIncluded?: boolean;
};

export type RepairSubCategory = {
  name: string;
  items: RepairSubItem[];
};

export type RepairCategory = {
  id: string;
  name: string;
  subCategories: RepairSubCategory[];
};

export const REPAIR_CATEGORIES: RepairCategory[] = [
  {
    id: "cat-brakes",
    name: "Brakes",
    subCategories: [
      {
        name: "Brake Pads",
        items: [
          { id: "r-bp-front", name: "Brake Pads — Front", price: 89, labourTime: "1.5 hrs", partsIncluded: true },
          { id: "r-bp-rear", name: "Brake Pads — Rear", price: 89, labourTime: "1.5 hrs", partsIncluded: true },
          { id: "r-bp-all", name: "Brake Pads — All Four", price: 159, labourTime: "2.5 hrs", partsIncluded: true },
        ],
      },
      {
        name: "Brake Discs",
        items: [
          { id: "r-bd-front", name: "Brake Discs — Front", price: 129, labourTime: "2 hrs", partsIncluded: true },
          { id: "r-bd-rear", name: "Brake Discs — Rear", price: 129, labourTime: "2 hrs", partsIncluded: true },
        ],
      },
    ],
  },
  {
    id: "cat-engine",
    name: "Engine",
    subCategories: [
      {
        name: "Engine Management",
        items: [
          { id: "r-e-spark", name: "Spark Plugs", price: 79, labourTime: "1 hr", partsIncluded: true },
          { id: "r-e-coil", name: "Ignition Coil Pack", price: 149, labourTime: "1.5 hrs", partsIncluded: true },
          { id: "r-e-filter", name: "Air Filter Replacement", price: 49, labourTime: "0.5 hrs", partsIncluded: true },
        ],
      },
      {
        name: "Timing",
        items: [
          { id: "r-e-timing", name: "Timing Belt & Water Pump", price: 329, labourTime: "4 hrs", partsIncluded: true },
          { id: "r-e-chain", name: "Timing Chain Replacement", price: 549, labourTime: "6 hrs", partsIncluded: true },
        ],
      },
    ],
  },
  {
    id: "cat-electrical",
    name: "Electrical",
    subCategories: [
      {
        name: "Battery & Charging",
        items: [
          { id: "r-el-battery", name: "Car Battery Replacement", price: 109, labourTime: "0.5 hrs", partsIncluded: true },
          { id: "r-el-alt", name: "Alternator Replacement", price: 249, labourTime: "2 hrs", partsIncluded: true },
          { id: "r-el-starter", name: "Starter Motor Replacement", price: 199, labourTime: "1.5 hrs", partsIncluded: true },
        ],
      },
    ],
  },
  {
    id: "cat-cooling",
    name: "Cooling System",
    subCategories: [
      {
        name: "Radiator & Thermostat",
        items: [
          { id: "r-c-rad", name: "Radiator Replacement", price: 219, labourTime: "2.5 hrs", partsIncluded: true },
          { id: "r-c-therm", name: "Thermostat Replacement", price: 129, labourTime: "1 hr", partsIncluded: true },
          { id: "r-c-pump", name: "Water Pump Replacement", price: 179, labourTime: "2 hrs", partsIncluded: true },
        ],
      },
    ],
  },
];

// ── Diagnostic Options ─────────────────────────────────────────
export type DiagnosticOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
};

export const DIAGNOSTIC_OPTIONS: DiagnosticOption[] = [
  {
    id: "d-full",
    name: "Diagnostic Inspection",
    description: "A thorough in-person inspection using professional equipment to identify any fault codes and provide a full written report.",
    price: 59,
    rating: 4.9,
    reviewCount: 1247,
  },
  {
    id: "d-start",
    name: "Car Won't Start Inspection",
    description: "Specialist inspection for vehicles that won't start or crank. Covers battery, starter motor, fuel system, and ignition.",
    price: 69,
    rating: 4.8,
    reviewCount: 834,
  },
  {
    id: "d-plugin",
    name: "Plug-in Diagnostic Inspection",
    description: "Quick OBD-II plug-in scan to read all live fault codes and clear warning lights, with a written summary of findings.",
    price: 39,
    rating: 4.7,
    reviewCount: 2103,
  },
];

// ── Servicing Options ──────────────────────────────────────────
export type ServicingOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  dealerPrice: number;
  rating: number;
  reviewCount: number;
  badge?: string;
};

export const SERVICING_OPTIONS: ServicingOption[] = [
  {
    id: "s-mot",
    name: "MOT with Collection & Delivery",
    description: "We collect your car, take it through an MOT test at an approved centre, and return it to you — all in one day.",
    price: 49,
    dealerPrice: 89,
    rating: 4.9,
    reviewCount: 3211,
    badge: "MOST POPULAR",
  },
  {
    id: "s-major",
    name: "Major Service",
    description: "Full service including oil, filter, spark plugs, air filter, fuel filter, and a comprehensive 60-point check.",
    price: 189,
    dealerPrice: 349,
    rating: 4.9,
    reviewCount: 1876,
  },
  {
    id: "s-full",
    name: "Full Service",
    description: "Comprehensive service including oil, oil filter, air filter, and a 50-point safety check.",
    price: 149,
    dealerPrice: 279,
    rating: 4.8,
    reviewCount: 2544,
  },
  {
    id: "s-interim",
    name: "Interim Service",
    description: "Essential maintenance covering oil change, oil filter replacement, and a 30-point safety check.",
    price: 89,
    dealerPrice: 169,
    rating: 4.8,
    reviewCount: 3107,
    badge: "ONLY £19 WHEN BOOKED WITH A SERVICE",
  },
  {
    id: "s-health",
    name: "Vehicle Health Check",
    description: "A comprehensive 30-point visual inspection of your vehicle's key safety and maintenance areas, with a written report.",
    price: 0,
    dealerPrice: 49,
    rating: 4.7,
    reviewCount: 987,
    badge: "FREE",
  },
];

// ── Upsell Items ───────────────────────────────────────────────
export type UpsellItem = {
  id: string;
  name: string;
  price: number;
  dealerPrice?: number;
  rating: number;
  reviewCount: number;
  savingsBadge?: string;
};

export const UPSELL_ITEMS: UpsellItem[] = [
  {
    id: "u-cabin-filter",
    name: "Cabin Air Filter Replacement",
    price: 39,
    dealerPrice: 79,
    rating: 4.8,
    reviewCount: 641,
    savingsBadge: "Save £40",
  },
  {
    id: "u-wiper-blades",
    name: "Wiper Blade Replacement",
    price: 29,
    dealerPrice: 59,
    rating: 4.7,
    reviewCount: 1203,
    savingsBadge: "Save £30",
  },
  {
    id: "u-brake-fluid",
    name: "Brake Fluid Replacement",
    price: 49,
    dealerPrice: 99,
    rating: 4.9,
    reviewCount: 512,
    savingsBadge: "Save £50",
  },
];

// ── Service Comparison (Interim / Full / Major) ────────────────
export type ComparisonRow = {
  name: string;
  footnote?: string;
  interim: boolean;
  full: boolean;
  major: boolean;
};

export type ComparisonCategory = {
  name: string;
  rows: ComparisonRow[];
};

export const SERVICE_COMPARISON: ComparisonCategory[] = [
  {
    name: "Pre-Engine Checks",
    rows: [
      { name: "Engine oil level check", interim: true, full: true, major: true },
      { name: "Coolant level check", interim: true, full: true, major: true },
      { name: "Brake fluid level check", interim: true, full: true, major: true },
      { name: "Power steering fluid check", interim: true, full: true, major: true },
    ],
  },
  {
    name: "Parts Included",
    rows: [
      { name: "Engine oil replacement", interim: true, full: true, major: true },
      { name: "Oil filter replacement", interim: true, full: true, major: true },
      { name: "Air filter replacement", interim: false, full: true, major: true },
      { name: "Pollen/cabin filter replacement", interim: false, full: false, major: true },
      { name: "Spark plugs replacement", footnote: "* Petrol only", interim: false, full: false, major: true },
      { name: "Fuel filter replacement", footnote: "** Diesel only", interim: false, full: false, major: true },
    ],
  },
  {
    name: "Top-ups",
    rows: [
      { name: "Coolant top-up", interim: true, full: true, major: true },
      { name: "Screen wash top-up", interim: true, full: true, major: true },
      { name: "Brake fluid top-up", footnote: "* If fitted", interim: false, full: true, major: true },
    ],
  },
  {
    name: "Safety Checks",
    rows: [
      { name: "Tyre condition & pressure", interim: true, full: true, major: true },
      { name: "Brake inspection (visual)", interim: true, full: true, major: true },
      { name: "Battery test", interim: false, full: true, major: true },
      { name: "Steering & suspension check", interim: false, full: true, major: true },
      { name: "Full 60-point inspection", interim: false, full: false, major: true },
    ],
  },
];
