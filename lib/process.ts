/**
 * Processing content: the seven farm-to-freezer steps from the corporate
 * profile, and the five detailed production stages shown on the technology
 * page. Icon names map to lucide-react exports.
 */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

/** The seven-step overview used on the homepage and about page. */
export const farmToFreezer: ProcessStep[] = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "We source quality fruits and vegetables from suitable agricultural regions and trusted suppliers.",
    icon: "Sprout",
  },
  {
    number: "02",
    title: "Selection & Sorting",
    description:
      "Raw materials are inspected, sorted and prepared according to product specifications.",
    icon: "ListFilter",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "The produce undergoes appropriate washing, cutting, grading and pre-processing operations.",
    icon: "Droplets",
  },
  {
    number: "04",
    title: "IQF Freezing",
    description:
      "The processed produce is individually quick frozen using modern freezing technology.",
    icon: "Snowflake",
  },
  {
    number: "05",
    title: "Quality Control",
    description:
      "Products are checked against defined quality and product specifications before packing.",
    icon: "ShieldCheck",
  },
  {
    number: "06",
    title: "Packaging",
    description:
      "Products are packed in formats suitable for institutional, HoReCa, retail and bulk requirements.",
    icon: "Package",
  },
  {
    number: "07",
    title: "Cold Chain",
    description:
      "Frozen products are maintained under controlled-temperature conditions until dispatch and delivery.",
    icon: "Truck",
  },
];

export interface ProductionStage {
  number: string;
  title: string;
  icon: string;
  points: string[];
  /** Short flow shown as a chip row under each stage. */
  flow: string[];
}

/** The five detailed production stages shown on the technology page. */
export const productionStages: ProductionStage[] = [
  {
    number: "1",
    title: "Raw Material Sourcing",
    icon: "Tractor",
    points: [
      "Sourced from trusted farmers and approved growers",
      "Seasonal produce optimisation",
      "Quality grading and inspection at entry",
      "Safe, traceable and sustainable supply chain",
    ],
    flow: ["Farm", "Collection", "Quality Check", "Factory"],
  },
  {
    number: "2",
    title: "Cleaning & Preparation",
    icon: "Droplets",
    points: [
      "Washing with chlorinated / ozonated water",
      "Sorting and grading",
      "Peeling, trimming and cutting",
      "Metal detection and final inspection",
    ],
    flow: ["Washing", "Sorting", "Cutting", "Inspection"],
  },
  {
    number: "3",
    title: "Blanching & IQF Freezing",
    icon: "Snowflake",
    points: [
      "Blanching deactivates enzymes and retains colour, texture and nutrients",
      "Rapid cooling to retain freshness",
      "IQF freezing at −35°C to −40°C",
      "Individually quick frozen to prevent clumping",
    ],
    flow: ["Blanch", "Cool", "IQF Tunnel", "Separated Pieces"],
  },
  {
    number: "4",
    title: "Packaging & Storage",
    icon: "Package",
    points: [
      "Hygienic and moisture-proof packaging",
      "Nitrogen flushing on premium packs",
      "Sealed for freshness and safety",
      "Cold storage at −18°C or lower",
    ],
    flow: ["Weigh", "Seal", "Code", "Cold Store"],
  },
  {
    number: "5",
    title: "Cold Chain Distribution",
    icon: "Truck",
    points: [
      "Refrigerated transport in reefer vehicles",
      "Temperature maintained throughout the journey",
      "Zero temperature break policy",
      "Delivery to retail, food service and export",
    ],
    flow: ["Factory", "Reefer Transport", "Retail / Food Service", "Export"],
  },
];

/**
 * The temperature journey chart on the technology page.
 * `temp` values are °C; `label` is the axis caption.
 */
export const temperatureJourney = [
  { label: "Raw Material", sub: "Ambient", temp: 30 },
  { label: "Blanching", sub: "90°C", temp: 90 },
  { label: "Cooling", sub: "10°C", temp: 10 },
  { label: "IQF Freezing", sub: "−35 to −40°C", temp: -38 },
  { label: "Cold Storage", sub: "−18°C or lower", temp: -18 },
];

/** Conventional bulk freezing vs IQF, used as a comparison table. */
export const iqfComparison = [
  {
    attribute: "Freezing speed",
    conventional: "Slow — hours in a bulk blast room",
    iqf: "Rapid — minutes in a continuous tunnel",
  },
  {
    attribute: "Ice crystal size",
    conventional: "Large crystals that rupture cell walls",
    iqf: "Fine crystals that protect cell structure",
  },
  {
    attribute: "Piece separation",
    conventional: "Frozen into a solid block",
    iqf: "Every piece frozen individually, free-flowing",
  },
  {
    attribute: "Portioning",
    conventional: "Thaw the whole block to use any of it",
    iqf: "Pour out only what you need",
  },
  {
    attribute: "Texture after cooking",
    conventional: "Softer, more drip loss",
    iqf: "Firm, close to fresh",
  },
  {
    attribute: "Colour and nutrition",
    conventional: "Greater degradation over time",
    iqf: "Natural colour and nutrients well retained",
  },
];
