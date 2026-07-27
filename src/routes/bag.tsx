import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/Typography";
import { getProduct, inr } from "@/data/catalogue";
import { useHouse } from "@/lib/house-store";

export const Route = createFileRoute("/bag")({
  head: () => ({
    meta: [
      { title: "Your Bag — Rajgharana" },
      { name: "description", content: "Review the pieces you have reserved from Rajgharana." },
      { property: "og:title", content: "Your Bag — Rajgharana" },
      { property: "og:description", content: "Review the pieces you have reserved." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BagPage,
});

function BagPage() {
  const { bag, removeFromBag, saved, toggleSaved } = useHouse();

  const lines = bag
    .map((item) => ({ item, product: getProduct(item.slug) }))
    .filter((l): l is { item: (typeof bag)[number]; product: NonNullable<ReturnType<typeof getProduct>> } =>
      Boolean(l.product),
    );
  const total = lines.reduce((sum, l) => sum + l.product.price * l.item.qty, 0);
  const savedProducts = saved.map(getProduct).filter(Boolean);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
      <SectionHeading kicker="Your selection" title="The bag" />

      {lines.length ? (
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <ul className="divide-y divide-border border-y border-border">
            {lines.map(({ item, product }) => (
              <li key={`${item.slug}-${item.colourway}`} className="flex flex-wrap items-baseline gap-4 py-6">
                <div className="min-w-[220px] flex-1">
                  <Link to="/product/$slug" params={{ slug: product.slug }} className="font-display text-2xl link-quiet">
                    {product.name}
                  </Link>
                  <p className="label-micro mt-2 text-muted-foreground">
                    {item.colourway} · {product.fabricLabel} · Qty {item.qty}
                  </p>
                </div>
                <span className="tabular-nums">{inr(product.price * item.qty)}</span>
                <button
                  type="button"
                  onClick={() => removeFromBag(item.slug, item.colourway)}
                  className="label-micro link-quiet text-muted-foreground"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-border p-8">
            <h2 className="font-display text-2xl">Summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="tabular-nums">{inr(total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Insured shipping</dt>
                <dd>Complimentary</dd>
              </div>
            </dl>
            <div className="mt-6 flex justify-between border-t border-border pt-4 text-lg">
              <span>Total</span>
              <span className="tabular-nums">{inr(total)}</span>
            </div>
            <Link
              to="/contact"
              className="label-micro mt-8 block border border-foreground bg-foreground px-8 py-4 text-center text-background transition-opacity hover:opacity-85"
            >
              Reserve with the atelier
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Pieces are held for 48 hours while the atelier confirms measurements and delivery dates.
            </p>
          </aside>
        </div>
      ) : (
        <div className="mt-14 border border-border py-24 text-center">
          <p className="font-display text-3xl">Nothing reserved yet</p>
          <Link to="/collections" className="label-micro link-quiet mt-5 inline-block">
            Browse the collections
          </Link>
        </div>
      )}

      {savedProducts.length ? (
        <section className="mt-24">
          <h2 className="text-3xl">Saved pieces</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {savedProducts.map((p) => (
              <li key={p!.slug} className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                <Link to="/product/$slug" params={{ slug: p!.slug }} className="font-display text-2xl link-quiet">
                  {p!.name}
                </Link>
                <span className="tabular-nums text-sm">{inr(p!.price)}</span>
                <button
                  type="button"
                  onClick={() => toggleSaved(p!.slug)}
                  className="label-micro link-quiet text-muted-foreground"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
