import { createFileRoute } from "@tanstack/react-router";
import { ImageFrame } from "@/components/site/ImageFrame";
import { SectionHeading } from "@/components/site/Typography";
import { crafts } from "@/data/house";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Craft Notes — Zardozi, Gota Patti, Kantha, Jamdani" },
      {
        name: "description",
        content:
          "How each garment is made: the hand crafts behind Rajgharana, counted in hours at the frame and weeks at the loom.",
      },
      { property: "og:title", content: "Craft Notes — Rajgharana" },
      {
        property: "og:description",
        content: "Zardozi, gota patti, kantha, sheesha, zari and jamdani — the crafts behind every piece.",
      },
    ],
  }),
  component: CraftPage,
});

function CraftPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
      <SectionHeading
        kicker="Craft"
        title="Counted in hours, not metres"
        intro="We name the craft, the region and the time on every piece. It is the only honest way to explain a price."
      />

      <div className="mt-20 space-y-24">
        {crafts.map((craft, i) => (
          <article key={craft.name} className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <ImageFrame slot={craft.image} />
            </div>
            <div className={i % 2 ? "lg:order-1 lg:pr-14" : "lg:pl-6"}>
              <p className="label-micro text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">{craft.name}</h2>
              <p className="label-micro mt-4 text-muted-foreground">{craft.hours}</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{craft.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
