import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FabricViewer } from "@/components/three/Viewers";
import { SectionHeading } from "@/components/site/Typography";
import { fabrics } from "@/data/house";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "The 3D Atelier — Feel the Fabric Before You Order" },
      {
        name: "description",
        content:
          "Turn, light and drape Banarasi brocade, Kanjivaram silk, velvet and organza in real time. An interactive 3D fabric library from Rajgharana.",
      },
      { property: "og:title", content: "The 3D Atelier — Rajgharana" },
      {
        property: "og:description",
        content: "Interactive 3D fabric library: brocade, silk, velvet, organza and chikankari cotton.",
      },
    ],
  }),
  component: Atelier,
});

function Atelier() {
  const [index, setIndex] = useState(0);
  const fabric = fabrics[index];

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
      <SectionHeading
        kicker="The atelier"
        title="Handle the cloth from where you are"
        intro="Every fabric below is rendered from a measured material profile — weight, drape, sheen and metal content — so a screen can approximate what a hand would tell you."
      />

      <div className="mt-14 grid gap-0 border border-border lg:grid-cols-[240px_1fr_300px]">
        <nav className="border-b border-border lg:border-b-0 lg:border-r">
          {fabrics.map((f, i) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "block w-full border-b border-border px-6 py-5 text-left transition-colors last:border-b-0",
                i === index ? "bg-foreground text-background" : "hover:bg-secondary",
              )}
            >
              <span className="label-micro opacity-60">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-1 block font-display text-xl">{f.name}</span>
            </button>
          ))}
        </nav>

        <FabricViewer fabric={fabric} className="h-[52vh] min-h-[380px] border-0 lg:h-[64vh]" />

        <aside className="border-t border-border p-7 lg:border-l lg:border-t-0">
          <p className="label-micro text-gold">{fabric.origin}</p>
          <h2 className="mt-3 font-display text-3xl">{fabric.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{fabric.note}</p>

          <dl className="mt-8 divide-y divide-border border-y border-border text-xs">
            <Spec label="Drape" value={fabric.drape} />
            <Spec label="Sheen" value={fabric.sheen} />
            <Spec label="Metal content" value={fabric.metalness} />
            <Spec label="Surface" value={1 - fabric.roughness} />
          </dl>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Drag to rotate the panel. The weave animates at the drape coefficient measured on the loom.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="label-micro text-muted-foreground">{label}</dt>
      <dd className="flex items-center gap-3">
        <span className="block h-px w-24 bg-border">
          <span className="block h-px bg-gold" style={{ width: `${Math.min(1, Math.max(0, value)) * 100}%` }} />
        </span>
        <span className="tabular-nums">{value.toFixed(2)}</span>
      </dd>
    </div>
  );
}
