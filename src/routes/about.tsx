import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/site/ImageFrame";
import { SectionHeading } from "@/components/site/Typography";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the House — Six Ateliers, One Standard" },
      {
        name: "description",
        content:
          "Rajgharana works directly with weaving and embroidery ateliers across Varanasi, Kanchipuram, Lucknow, Jaipur and Bengal. No middlemen, no restocks.",
      },
      { property: "og:title", content: "About the House — Rajgharana" },
      {
        property: "og:description",
        content: "Direct-to-atelier Indian couture from six regional craft clusters.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  ["Named makers", "Every garment carries the atelier and the lead karigar on its label. If we cannot name who made it, we do not sell it."],
  ["No restocks", "A warp is finite. When a chapter closes we photograph the last piece and move the loom on."],
  ["Whole payment upfront", "Artisans are paid in full when the piece is commissioned, not when it sells."],
  ["Repair for life", "Any piece can come back for re-embroidery, re-fall or re-lining, for as long as the house exists."],
];



function AboutPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            kicker="The house"
            title="A small house, deliberately"
            intro="We began in 2016 with one pit loom in Varanasi and a stubborn idea: that a garment should be able to tell you who made it, where, and for how long. Ten years on we work with six ateliers and release fewer than four hundred pieces a year."
          />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Nothing here is produced to a season. A jamdani saree takes as long as it takes; a bridal skirt
            can hold a frame for nine months. We would rather be late than thin.
          </p>
        </div>
        <ImageFrame slot={{ alt: "The Varanasi atelier", note: "Wide shot of the pit loom floor, morning light", ratio: "4/5" }} />
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {principles.map(([title, body], i) => (
            <div key={title}>
              <p className="label-micro text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <SectionHeading kicker="Ateliers" title="Where the work happens" />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {[
            ["Varanasi, Uttar Pradesh", "Brocade and zari weaving — 14 pit looms"],
            ["Kanchipuram, Tamil Nadu", "Kanjivaram silk with interlocked borders — 9 looms"],
            ["Lucknow, Uttar Pradesh", "Chikankari and zardozi frames — 31 karigars"],
            ["Jaipur, Rajasthan", "Gota patti, sheesha and hand block — 18 karigars"],
            ["Shantiniketan, West Bengal", "Kantha, one artisan per saree — 22 makers"],
            ["Bengaluru, Karnataka", "Finishing, fittings and the flagship fitting room"],
          ].map(([place, work]) => (
            <li key={place} className="flex flex-wrap items-baseline justify-between gap-4 py-5">
              <span className="font-display text-2xl">{place}</span>
              <span className="text-xs text-muted-foreground">{work}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="label-micro link-quiet mt-12 inline-block">
          Visit an atelier →
        </Link>
      </section>
    </div>
  );
}
