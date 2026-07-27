import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface BagLine {
  slug: string;
  colourway: string;
  qty: number;
}

interface HouseState {
  bag: BagLine[];
  saved: string[];
  addToBag: (slug: string, colourway: string) => void;
  removeFromBag: (slug: string, colourway: string) => void;
  toggleSaved: (slug: string) => void;
  bagCount: number;
  ready: boolean;
}

const HouseContext = createContext<HouseState | null>(null);

const BAG_KEY = "hor.bag.v1";
const SAVED_KEY = "hor.saved.v1";

export function HouseProvider({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState<BagLine[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const b = localStorage.getItem(BAG_KEY);
      const s = localStorage.getItem(SAVED_KEY);
      if (b) setBag(JSON.parse(b) as BagLine[]);
      if (s) setSaved(JSON.parse(s) as string[]);
    } catch {
      /* ignore malformed storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  }, [bag, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, ready]);

  const value = useMemo<HouseState>(
    () => ({
      bag,
      saved,
      ready,
      bagCount: bag.reduce((n, l) => n + l.qty, 0),
      addToBag: (slug, colourway) =>
        setBag((prev) => {
          const found = prev.find((l) => l.slug === slug && l.colourway === colourway);
          if (found) {
            return prev.map((l) => (l === found ? { ...l, qty: l.qty + 1 } : l));
          }
          return [...prev, { slug, colourway, qty: 1 }];
        }),
      removeFromBag: (slug, colourway) =>
        setBag((prev) => prev.filter((l) => !(l.slug === slug && l.colourway === colourway))),
      toggleSaved: (slug) =>
        setSaved((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])),
    }),
    [bag, saved, ready],
  );

  return <HouseContext.Provider value={value}>{children}</HouseContext.Provider>;
}

export function useHouse() {
  const ctx = useContext(HouseContext);
  if (!ctx) throw new Error("useHouse must be used inside HouseProvider");
  return ctx;
}
