import { Link } from "@tanstack/react-router";
import { ImageFrame } from "./ImageFrame";
import { inr } from "@/data/catalogue";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const discount = product.mrp ? Math.round((1 - product.price / product.mrp) * 100) : 0;

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className={cn("group block", className)}
    >
      <div className="relative">
        <ImageFrame slot={product.images[0]} />
        {discount > 0 ? (
          <span className="label-micro absolute left-0 top-0 bg-gold px-2.5 py-1.5 text-gold-foreground">
            −{discount}%
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg leading-tight transition-opacity group-hover:opacity-70">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {product.fabricLabel} · {product.craftLabel}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm tabular-nums">{inr(product.price)}</p>
          {product.mrp ? (
            <p className="text-xs tabular-nums text-muted-foreground line-through">{inr(product.mrp)}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
