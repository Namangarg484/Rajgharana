import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { ImageFrame } from "@/components/site/ImageFrame";
import { getCollection, productsIn } from "@/data/catalogue";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection unavailable — Rajgharana" }, { name: "robots", content: "noindex" }] };
    }
    const { collection } = loaderData;
    const title = `${collection.name} — Rajgharana`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.intro.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.intro.slice(0, 155) },
      ],
    };
  },
  component: CollectionPage,
});

type Facet = "fabric" | "craft" | "occasion";

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const all = useMemo(() => productsIn(collection.slug), [collection.slug]);

  const [fabric, setFabric] = useState<string | null>(null);
  const [craft, setCraft] = useState<string | null>(null);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");

  const options = useMemo(
    () => ({
      fabric: Array.from(new Set(all.map((p) => p.fabricLabel))),
      craft: Array.from(new Set(all.map((p) => p.craftLabel))),
      occasion: Array.from(new Set(all.flatMap((p) => p.occasion))),
    }),
    [all],
  );

  const setter: Record<Facet, (v: string | null) => void> = {
    fabric: setFabric,
    craft: setCraft,
    occasion: setOccasion,
  };
  const current: Record<Facet, string | null> = { fabric, craft, occasion };

  const list = useMemo(() => {
    let out = all.filter(
      (p) =>
        (!fabric || p.fabricLabel === fabric) &&
        (!craft || p.craftLabel === craft) &&
        (!occasion || p.occasion.includes(occasion)),
    );
    if (sort === "low") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "high") out = [...out].sort((a, b) => b.price - a.price);
    return out;
  }, [all, fabric, craft, occasion, sort]);

  const clear = () => {
    setFabric(null);
    setCraft(null);
    setOccasion(null);
  };

  return (
    <div>
      <section className="relative border-b border-border">
        <ImageFrame slot={collection.hero} className="max-h-[60vh]" priority />
      </section>

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <p className="label-micro text-gold">{collection.kicker}</p>
        <h1 className="mt-3 text-5xl sm:text-6xl">{collection.name}</h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{collection.intro}</p>

        {/* Filters */}
        <div className="mt-14 space-y-5 border-y border-border py-7">
          {(Object.keys(options) as Facet[]).map((facet) => (
            <div key={facet} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="label-micro w-20 text-muted-foreground">{facet}</span>
              {options[facet].map((value) => {
                const active = current[facet] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setter[facet](active ? null : value)}
                    className={cn(
                      "border px-3 py-1.5 text-xs transition-colors",
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                    )}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button type="button" onClick={clear} className="label-micro link-quiet text-muted-foreground">
              Clear filters
            </button>
            <div className="flex items-center gap-4">
              <span className="label-micro text-muted-foreground">Sort</span>
              {(
                [
                  ["featured", "Featured"],
                  ["low", "Price ↑"],
                  ["high", "Price ↓"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSort(key)}
                  className={cn(
                    "text-xs transition-colors",
                    sort === key ? "text-foreground underline underline-offset-4" : "text-muted-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="label-micro mt-8 text-muted-foreground">{list.length} pieces</p>

        {list.length ? (
          <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-border py-20 text-center">
            <p className="font-display text-2xl">Nothing matches that combination</p>
            <button type="button" onClick={clear} className="label-micro link-quiet mt-4">
              Clear filters
            </button>
          </div>
        )}

        <Link to="/collections" className="label-micro link-quiet mt-20 inline-block">
          ← All collections
        </Link>
      </div>
    </div>
  );
}
