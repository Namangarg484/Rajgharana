import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/Typography";
import { inr, saleProducts } from "@/data/catalogue";

export const Route = createFileRoute("/sale")({
  head: () => ({
    meta: [
      { title: "The Archive Sale — Couture at Atelier Prices" },
      {
        name: "description",
        content:
          "Single-piece archive releases from Rajgharana: handwoven sarees and hand-embroidered lehengas reduced once, never restocked.",
      },
      { property: "og:title", content: "The Archive Sale — Rajgharana" },
      {
        property: "og:description",
        content: "One-of-one archive pieces, reduced once and never restocked.",
      },
    ],
  }),
  component: SalePage,
});

function SalePage() {
  const deepest = saleProducts.reduce(
    (best, p) => Math.max(best, p.mrp ? 1 - p.price / p.mrp : 0),
    0,
  );
  const saved = saleProducts.reduce((sum, p) => sum + ((p.mrp ?? p.price) - p.price), 0);

  return (
    <div>
      <section className="border-b border-border bg-ink px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="label-micro text-gold">The archive sale</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-ink-foreground sm:text-7xl">
            Reduced once.
            <br />
            Never restocked.
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink-muted">
            Pieces released from the archive when a chapter closes — samples, photographed garments and the
            last of a warp. Each is a single size, a single colourway, and will not return.
          </p>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat label="Pieces" value={String(saleProducts.length)} />
            <Stat label="Up to" value={`−${Math.round(deepest * 100)}%`} />
            <Stat label="Total reduction" value={inr(saved)} />
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <SectionHeading kicker="Available now" title="The sale edit" />
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {saleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-24 grid gap-10 border-t border-border pt-12 md:grid-cols-3">
          {[
            ["Final sale", "Archive pieces are not exchanged or returned. We will send additional images and measurements before you commit."],
            ["Alterations", "One complimentary alteration at any atelier, or a tailoring credit if you are outside our cities."],
            ["Shipping", "Insured worldwide dispatch within five working days, in the full presentation trunk."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label-micro text-ink-muted">{label}</dt>
      <dd className="mt-2 font-display text-3xl text-ink-foreground">{value}</dd>
    </div>
  );
}
