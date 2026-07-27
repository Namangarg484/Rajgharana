import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/site/ImageFrame";
import { getJournalEntry } from "@/data/house";
import type { JournalEntry } from "@/data/types";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }): { entry: JournalEntry } => {
    const entry = getJournalEntry(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Entry unavailable — Rajgharana" }, { name: "robots", content: "noindex" }] };
    }
    const { entry } = loaderData;
    const title = `${entry.title} — Rajgharana Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.standfirst.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.standfirst.slice(0, 155) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: JournalEntryPage,
});

function JournalEntryPage() {
  const { entry } = Route.useLoaderData() as { entry: JournalEntry };

  return (
    <article className="mx-auto max-w-[900px] px-5 py-20 sm:px-8">
      <p className="label-micro text-gold">
        {entry.kicker} · {entry.date} · {entry.readingTime}
      </p>
      <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">{entry.title}</h1>
      <p className="mt-6 font-display text-2xl italic leading-snug text-muted-foreground">{entry.standfirst}</p>

      <div className="mt-12">
        <ImageFrame slot={{ ...entry.hero, ratio: "16/9" }} priority />
      </div>

      <div className="mt-12 space-y-7 text-base leading-[1.85] text-foreground/85">
        {entry.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
      </div>

      <Link to="/journal" className="label-micro link-quiet mt-16 inline-block">
        ← All journal entries
      </Link>
    </article>
  );
}
