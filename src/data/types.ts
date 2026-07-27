export type FabricKey =
  | "banarasi-brocade"
  | "dupion-silk"
  | "georgette"
  | "velvet"
  | "organza"
  | "kanjivaram";

export type CraftKey = "zardozi" | "gota-patti" | "kantha" | "mirror" | "zari-weave" | "sequin";

export interface Colourway {
  name: string;
  /** oklch triple used by the 3D viewer */
  oklch: [number, number, number];
}

export interface ImageSlot {
  /** Drop your uploaded image URL here to replace the placeholder frame. */
  src?: string;
  alt: string;
  /** Guidance for the shot that belongs in this frame. */
  note: string;
  ratio: "16/9" | "3/4" | "1/1" | "4/5" | "2/3";
}

export interface Product {
  slug: string;
  name: string;
  collection: string;
  category: "Saree" | "Lehenga" | "Anarkali" | "Sharara";
  price: number;
  mrp?: number;
  fabric: FabricKey;
  fabricLabel: string;
  craft: CraftKey;
  craftLabel: string;
  region: string;
  occasion: string[];
  colour: string;
  colourways: Colourway[];
  shortCopy: string;
  description: string;
  details: string[];
  images: ImageSlot[];
}

export interface Collection {
  slug: string;
  name: string;
  kicker: string;
  intro: string;
  hero: ImageSlot;
}

export interface JournalEntry {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  readingTime: string;
  standfirst: string;
  body: string[];
  hero: ImageSlot;
}
