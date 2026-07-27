import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import type { FabricSpec } from "@/data/house";
import { cn } from "@/lib/utils";

const GarmentScene = lazy(() => import("./GarmentScene"));
const FabricScene = lazy(() => import("./FabricScene"));

function Loading({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink">
      <span className="label-micro text-ink-muted">{label}</span>
    </div>
  );
}

export function GarmentViewer({
  fabric,
  colour,
  category,
  detail,
  className,
}: {
  fabric: FabricSpec;
  colour: string;
  category: string;
  detail: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden border border-border bg-ink", className)}>
      <ClientOnly fallback={<Loading label="Preparing viewer" />}>
        <Suspense fallback={<Loading label="Loading garment" />}>
          <GarmentScene fabric={fabric} colour={colour} category={category} detail={detail} />
        </Suspense>
      </ClientOnly>
      <span className="label-micro pointer-events-none absolute bottom-3 left-4 text-ink-muted">
        Drag to rotate · Scroll to zoom
      </span>
    </div>
  );
}

export function FabricViewer({ fabric, className }: { fabric: FabricSpec; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden border border-border bg-ink", className)}>
      <ClientOnly fallback={<Loading label="Preparing atelier" />}>
        <Suspense fallback={<Loading label="Loading weave" />}>
          <FabricScene fabric={fabric} />
        </Suspense>
      </ClientOnly>
      <span className="label-micro pointer-events-none absolute bottom-3 left-4 text-ink-muted">
        Drag to turn the cloth
      </span>
    </div>
  );
}
