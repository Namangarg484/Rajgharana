import type { FabricKey, ImageSlot, JournalEntry } from "./types";

export interface FabricSpec {
  key: FabricKey;
  name: string;
  origin: string;
  note: string;
  /** three.js MeshPhysicalMaterial hints */
  roughness: number;
  metalness: number;
  sheen: number;
  sheenRoughness: number;
  clearcoat: number;
  /** base colour as hex for three.js */
  hex: string;
  /** vertex drape amplitude */
  drape: number;
}

export const fabrics: FabricSpec[] = [
  {
    key: "banarasi-brocade",
    name: "Banarasi Brocade",
    origin: "Varanasi, Uttar Pradesh",
    note: "Silk ground with a supplementary zari weft. Stiff, sculptural, holds a fold like paper.",
    roughness: 0.42,
    metalness: 0.35,
    sheen: 0.6,
    sheenRoughness: 0.4,
    clearcoat: 0.15,
    hex: "#7a2233",
    drape: 0.35,
  },
  {
    key: "kanjivaram",
    name: "Kanjivaram Silk",
    origin: "Kanchipuram, Tamil Nadu",
    note: "Three-ply mulberry silk. Dense, heavy, with a border woven separately and interlocked.",
    roughness: 0.3,
    metalness: 0.2,
    sheen: 0.8,
    sheenRoughness: 0.25,
    clearcoat: 0.2,
    hex: "#c9b489",
    drape: 0.45,
  },
  {
    key: "dupion-silk",
    name: "Dupion Silk",
    origin: "Bengal & Bhagalpur",
    note: "Slubbed, irregular, matte. Catches light in broken lines rather than a single sheet.",
    roughness: 0.62,
    metalness: 0.05,
    sheen: 0.45,
    sheenRoughness: 0.6,
    clearcoat: 0,
    hex: "#c98a2e",
    drape: 0.55,
  },
  {
    key: "georgette",
    name: "Silk Georgette",
    origin: "Lucknow & Surat",
    note: "Crinkled crepe twist. Almost no body, all movement — the fabric of the modern drape.",
    roughness: 0.75,
    metalness: 0,
    sheen: 0.3,
    sheenRoughness: 0.8,
    clearcoat: 0,
    hex: "#b9b2ae",
    drape: 0.95,
  },
  {
    key: "velvet",
    name: "Silk Velvet",
    origin: "Kolkata & Delhi",
    note: "Cut pile. Reads black at one angle and wine at the next; every fold is a value shift.",
    roughness: 0.95,
    metalness: 0,
    sheen: 1,
    sheenRoughness: 0.12,
    clearcoat: 0,
    hex: "#3a1220",
    drape: 0.4,
  },
  {
    key: "organza",
    name: "Silk Organza",
    origin: "Bengaluru",
    note: "Plain weave from tightly twisted filament. Transparent, crisp, and unforgiving of a bad seam.",
    roughness: 0.35,
    metalness: 0.02,
    sheen: 0.5,
    sheenRoughness: 0.3,
    clearcoat: 0.35,
    hex: "#9fc4b4",
    drape: 0.8,
  },
];

export const getFabric = (key: FabricKey) => fabrics.find((f) => f.key === key) ?? fabrics[0];

export interface CraftEntry {
  name: string;
  region: string;
  body: string;
  hours: string;
  image: ImageSlot;
}

export const crafts: CraftEntry[] = [
  {
    name: "Zardozi",
    region: "Lucknow, Delhi, Varanasi",
    hours: "400–900 hours per bridal skirt",
    body: "Metal-wrapped thread couched onto a stretched ground with an ari hook. The karigar works from beneath the frame, drawing the wire through in a continuous chain. Historically a Mughal court craft, and still counted in hours rather than metres.",
    image: { alt: "Zardozi embroidery on the frame", note: "Hands at the ari frame, raking light", ratio: "4/5" },
  },
  {
    name: "Gota Patti",
    region: "Jaipur, Rajasthan",
    hours: "60–180 hours per garment",
    body: "Flat gold-toned ribbon folded and appliquéd into leaves, petals and vines. Fast to read from a distance, light on the fabric, and unmistakably Rajasthani.",
    image: { alt: "Gota patti appliqué", note: "Ribbon being folded and stitched", ratio: "4/5" },
  },
  {
    name: "Kantha",
    region: "Bolpur & Nadia, West Bengal",
    hours: "6–9 months per saree",
    body: "A running stitch that quilts and decorates at once, traditionally worked on layered old cloth. Ours is single-layer on dupion, one artisan per piece, signed at the pallu.",
    image: { alt: "Kantha running stitch", note: "Stitch in progress on a lap frame", ratio: "4/5" },
  },
  {
    name: "Sheesha Mirror",
    region: "Kutch, Gujarat",
    hours: "120–300 hours per garment",
    body: "Hand-cut mirror discs held by a worked ring of thread rather than adhesive, so the piece survives a wash and a lifetime. Each ring is stitched blind, by feel.",
    image: { alt: "Sheesha mirror work", note: "Mirror discs and thread rings", ratio: "4/5" },
  },
  {
    name: "Zari Weave",
    region: "Varanasi & Kanchipuram",
    hours: "6–14 weeks on the loom",
    body: "Not embroidery at all — the metal is woven in as a supplementary weft while the ground is formed. Slower than any surface craft, and structurally part of the cloth.",
    image: { alt: "Zari weft on the pit loom", note: "Loom with zari weft and jacquard cards", ratio: "4/5" },
  },
  {
    name: "Jamdani",
    region: "Bengal",
    hours: "8–20 weeks on the loom",
    body: "Motifs inserted freehand as a discontinuous weft, without a jacquard or a drawn cartoon. Two weavers, one loom, no draft — the pattern lives in memory.",
    image: { alt: "Jamdani weaving in progress", note: "Two weavers at a jamdani loom", ratio: "4/5" },
  },
];

export const journal: JournalEntry[] = [
  {
    slug: "what-a-loom-remembers",
    title: "What a Loom Remembers",
    kicker: "Field notes",
    date: "12 June 2026",
    readingTime: "6 min",
    standfirst:
      "Eleven weeks in Kanchipuram with a family that has held the same pit loom for four generations, and what happens to a weave when nobody is in a hurry.",
    body: [
      "The loom sits below floor level, in a pit dug so the weaver's legs can work the treadles without a frame. It is the oldest piece of technology in the house and the only one nobody has considered replacing.",
      "A Kanjivaram border is not printed on and not embroidered. It is woven as a separate warp and then physically interlocked with the body of the saree, a join called korvai that takes two people working in rhythm and cannot be rushed without showing.",
      "We asked how long a piece takes. The answer was a shrug and a number of weeks that changed depending on the humidity. That is the honest answer, and it is why we do not publish delivery estimates in days.",
    ],
    hero: { alt: "Pit loom in Kanchipuram", note: "Wide shot of the pit loom and weaver", ratio: "16/9" },
  },
  {
    slug: "against-the-shine",
    title: "Against the Shine",
    kicker: "Position",
    date: "28 April 2026",
    readingTime: "4 min",
    standfirst:
      "Why we specify matte glass sequins over mirror-backed ones, and what that costs us in a photograph.",
    body: [
      "A mirror-backed sequin photographs beautifully and wears badly. Under a room's actual lighting it flares, flattens the embroidery beneath it, and turns a two-hundred-hour surface into a single bright plane.",
      "Matte glass gives up the flare and keeps the texture. It is more expensive, harder to source, and reads quieter in a thumbnail. We accept the trade because the garment is worn in a room, not in a grid.",
      "This is the whole argument of the house in one component choice: the piece should be better in person than it is on a screen.",
    ],
    hero: { alt: "Sequin surface under low light", note: "Macro of matte sequin field, low key", ratio: "16/9" },
  },
  {
    slug: "the-case-for-one",
    title: "The Case for One",
    kicker: "Position",
    date: "3 March 2026",
    readingTime: "5 min",
    standfirst: "On single-piece runs, archive releases, and refusing to re-cut a sold-out bridal.",
    body: [
      "When a bridal piece sells, we retire the pattern. The reason is not scarcity marketing — it is that the karigar who worked it has moved to the next commission, and a second attempt by another hand is a different garment wearing the same name.",
      "The archive releases you see in the Sale Edit are the remainder of those runs: samples, colour trials, and pieces whose warp was discontinued mid-season.",
      "There is no restock. There is a waitlist for the next chapter, which is a different thing and we will not pretend otherwise.",
    ],
    hero: { alt: "Archive garments on a rail", note: "Archive rail, neutral studio", ratio: "16/9" },
  },
];

export const getJournalEntry = (slug: string) => journal.find((j) => j.slug === slug);
