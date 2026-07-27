import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GarmentViewer } from "@/components/three/Viewers";
import { ImageFrame } from "@/components/site/ImageFrame";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, inr, products } from "@/data/catalogue";
import type { Product } from "@/data/types";
import { getFabric } from "@/data/house";
import { oklchToHex } from "@/lib/oklch";
import { useHouse } from "@/lib/house-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece unavailable — Rajgharana" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Rajgharana`;
    const description = `${product.fabricLabel} with ${product.craftLabel.toLowerCase()} from ${product.region}. ${product.shortCopy}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const fabric = getFabric(product.fabric);
  const { addToBag, toggleSaved, saved } = useHouse();

  const [colourIndex, setColourIndex] = useState(0);
  const [detail, setDetail] = useState(false);
  const [added, setAdded] = useState(false);

  const colourway = product.colourways[colourIndex];
  const hex = oklchToHex(colourway.oklch[0], colourway.oklch[1], colourway.oklch[2]);
  const isSaved = saved.includes(product.slug);
  const related = products.filter((p) => p.slug !== product.slug && p.collection === product.collection).slice(0, 3);

  return (
    <div>
      <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-[1.15fr_1fr]">
        {/* Viewer + gallery */}
        <div className="border-b border-border lg:border-b-0 lg:border-r">
          <GarmentViewer
            fabric={fabric}
            colour={hex}
            category={product.category}
            detail={detail}
            className="h-[62vh] min-h-[420px] border-0 border-b border-border"
          />
          <div className="flex flex-wrap items-center gap-4 border-b border-border px-5 py-4 sm:px-8">
            <span className="label-micro text-muted-foreground">3D view</span>
            <button
              type="button"
              onClick={() => setDetail((v) => !v)}
              className={cn(
                "label-micro border px-3 py-2 transition-colors",
                detail ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground",
              )}
            >
              {detail ? "Full garment" : "Embroidery detail"}
            </button>
            <span className="text-xs text-muted-foreground">
              Rendered from the {fabric.name.toLowerCase()} material profile
            </span>
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-8">
            {product.images.map((slot) => (
              <ImageFrame key={slot.note} slot={slot} />
            ))}
          </div>
        </div>

        {/* Detail column */}
        <div className="px-5 py-12 sm:px-10 lg:sticky lg:top-16 lg:self-start lg:py-16">
          <p className="label-micro text-gold">
            {product.category} · {product.region}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-4 font-display text-xl italic text-muted-foreground">{product.shortCopy}</p>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-2xl tabular-nums">{inr(product.price)}</span>
            {product.mrp ? (
              <>
                <span className="text-sm tabular-nums text-muted-foreground line-through">{inr(product.mrp)}</span>
                <span className="label-micro bg-gold px-2 py-1 text-gold-foreground">
                  −{Math.round((1 - product.price / product.mrp) * 100)}%
                </span>
              </>
            ) : null}
          </div>

          <div className="mt-10">
            <p className="label-micro text-muted-foreground">Colourway — {colourway.name}</p>
            <div className="mt-4 flex gap-3">
              {product.colourways.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  aria-label={c.name}
                  onClick={() => setColourIndex(i)}
                  className={cn(
                    "size-9 border transition-all",
                    i === colourIndex ? "border-foreground ring-1 ring-foreground ring-offset-2" : "border-border",
                  )}
                  style={{ backgroundColor: oklchToHex(c.oklch[0], c.oklch[1], c.oklch[2]) }}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => {
                addToBag(product.slug, colourway.name);
                setAdded(true);
                window.setTimeout(() => setAdded(false), 2200);
              }}
              className="label-micro flex-1 border border-foreground bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85"
            >
              {added ? "Added to bag" : "Add to bag"}
            </button>
            <button
              type="button"
              onClick={() => toggleSaved(product.slug)}
              className="label-micro border border-border px-6 py-4 transition-colors hover:border-foreground"
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
            <Row label="Fabric" value={product.fabricLabel} />
            <Row label="Craft" value={product.craftLabel} />
            <Row label="Atelier" value={product.region} />
            <Row label="Occasion" value={product.occasion.join(", ")} />
          </dl>

          <ul className="mt-8 space-y-2 text-xs text-muted-foreground">
            {product.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 block size-1 shrink-0 bg-gold" />
                {d}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="label-micro link-quiet mt-10 inline-block">
            Book a fitting for this piece
          </Link>
        </div>
      </div>

      {related.length ? (
        <section className="mx-auto max-w-[1400px] border-t border-border px-5 py-20 sm:px-8">
          <h2 className="text-3xl">From the same chapter</h2>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 py-3">
      <dt className="label-micro text-muted-foreground">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}
