import { createFileRoute, Link } from "@tanstack/react-router";
import { FabricViewer } from "@/components/three/Viewers";
import { ImageFrame } from "@/components/site/ImageFrame";
import { ProductCard } from "@/components/site/ProductCard";
import { Kicker, SectionHeading } from "@/components/site/Typography";
import { collections, products } from "@/data/catalogue";
import { crafts, fabrics, journal } from "@/data/house";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Gharana Saree — Handmade Sarees & Lehengas" },
      {
        name: "description",
        content:
          "Traditional Indian couture made slowly: Banarasi brocade, Kanjivaram silk, hand zardozi and gota patti. Explore garments in 3D before you visit the atelier.",
      },
      { property: "og:title", content: "Raj Gharana Saree — Handmade Sarees & Lehengas" },
      {
        property: "og:description",
        content: "Handwoven sarees and hand-embroidered lehengas, viewable in 3D. Ateliers across India.",
      },
      { property: "og:image", content: "https://www.rajgharana.online/logo.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Raj Gharana Saree — Handmade Sarees & Lehengas" },
      { name: "twitter:image", content: "https://www.rajgharana.online/logo.jpeg" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-0 px-0 lg:grid-cols-2">
          <div className="fade-up order-2 px-6 py-16 sm:px-12 lg:order-1 lg:py-28">
            <Kicker>Chapter IV — The Winter Weaves</Kicker>
            <h1 className="mt-6 text-5xl leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl">
              Cloth that
              <br />
              remembers
              <br />
              the hand.
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-muted">
              Sarees and lehengas woven in Varanasi and Kanchipuram, embroidered in Lucknow and Jaipur, and
              finished one at a time. No restocks, no reprints — the loom moves on.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                to="/collections"
                className="label-micro border border-gold px-7 py-4 text-ink-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                View the collections
              </Link>
              <Link to="/atelier" className="label-micro link-quiet text-ink-muted hover:text-ink-foreground">
                Enter the atelier
              </Link>
            </div>
          </div>

          <div className="order-1 h-[46vh] min-h-[340px] lg:order-2 lg:h-[78vh]">
            <FabricViewer fabric={fabrics[0]} className="h-full border-0 border-l border-border" />
          </div>
        </div>
      </section>

      {/* Featured edit */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="The edit" title="Six pieces we would wear ourselves" />
          <Link to="/collections" className="label-micro link-quiet">
            All collections
          </Link>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Collections strip */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <SectionHeading kicker="Chapters" title="Four ways into the house" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="group block">
                <ImageFrame slot={{ ...c.hero, ratio: "3/4" }} />
                <p className="label-micro mt-4 text-gold">{c.kicker}</p>
                <h3 className="mt-2 font-display text-2xl transition-opacity group-hover:opacity-70">
                  {c.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{c.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Craft teaser */}
      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
        <ImageFrame slot={crafts[0].image} />
        <div>
          <SectionHeading
            kicker="Craft"
            title="Six hundred hours, one skirt"
            intro="Zardozi is counted in hours, not metres. The karigar works from beneath a stretched frame, drawing metal-wrapped thread through the ground with an ari hook, in a chain that cannot be paused mid-motif."
          />
          <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8">
            {crafts.slice(0, 4).map((c) => (
              <div key={c.name}>
                <dt className="font-display text-xl">{c.name}</dt>
                <dd className="text-xs text-muted-foreground">{c.hours}</dd>
              </div>
            ))}
          </dl>
          <Link to="/craft" className="label-micro link-quiet mt-10 inline-block">
            Read the craft notes
          </Link>
        </div>
      </section>

      {/* Journal */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <SectionHeading kicker="Journal" title="From the ateliers" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {journal.map((entry) => (
              <Link key={entry.slug} to="/journal/$slug" params={{ slug: entry.slug }} className="group block">
                <ImageFrame slot={{ ...entry.hero, ratio: "4/5" }} />
                <p className="label-micro mt-4 text-muted-foreground">
                  {entry.kicker} · {entry.readingTime}
                </p>
                <h3 className="mt-2 font-display text-2xl transition-opacity group-hover:opacity-70">
                  {entry.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{entry.standfirst}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
