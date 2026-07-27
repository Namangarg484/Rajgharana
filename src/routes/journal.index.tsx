import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/site/ImageFrame";
import { SectionHeading } from "@/components/site/Typography";
import { journal } from "@/data/house";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Dispatches from the Ateliers" },
      {
        name: "description",
        content:
          "Notes from the looms of Varanasi and Kanchipuram and the embroidery frames of Lucknow — the Rajgharana journal.",
      },
      { property: "og:title", content: "Journal — Rajgharana" },
      { property: "og:description", content: "Dispatches from the looms and embroidery frames of India." },
    ],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
      <SectionHeading kicker="Journal" title="From the ateliers" />
      <div className="mt-16 grid gap-14 md:grid-cols-3">
        {journal.map((entry) => (
          <Link key={entry.slug} to="/journal/$slug" params={{ slug: entry.slug }} className="group block">
            <ImageFrame slot={{ ...entry.hero, ratio: "4/5" }} />
            <p className="label-micro mt-5 text-muted-foreground">
              {entry.kicker} · {entry.date} · {entry.readingTime}
            </p>
            <h2 className="mt-3 text-3xl transition-opacity group-hover:opacity-70">{entry.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.standfirst}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
