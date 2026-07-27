import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/site/ImageFrame";
import { SectionHeading } from "@/components/site/Typography";
import { collections, productsIn } from "@/data/catalogue";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Rajgharana" },
      {
        name: "description",
        content:
          "Bridal, Festive, Heritage and the Sale Edit. Four chapters of handwoven Indian couture from Rajgharana.",
      },
      { property: "og:title", content: "Collections — Rajgharana" },
      {
        property: "og:description",
        content: "Bridal, Festive, Heritage and archive releases — handwoven sarees and lehengas.",
      },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
      <SectionHeading
        kicker="The house"
        title="Collections"
        intro="Each chapter is closed when its warp runs out. What is listed is what exists."
      />

      <div className="mt-16 space-y-20">
        {collections.map((c, i) => (
          <article key={c.slug} className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <ImageFrame slot={c.hero} />
            </div>
            <div className={i % 2 ? "lg:order-1 lg:pr-12" : "lg:pl-4"}>
              <p className="label-micro text-gold">{c.kicker}</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">{c.name}</h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{c.intro}</p>
              <p className="label-micro mt-6 text-muted-foreground">
                {productsIn(c.slug).length} pieces available
              </p>
              <Link
                to="/collections/$slug"
                params={{ slug: c.slug }}
                className="label-micro mt-8 inline-block border border-foreground px-7 py-4 transition-colors hover:bg-foreground hover:text-background"
              >
                Enter {c.name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
