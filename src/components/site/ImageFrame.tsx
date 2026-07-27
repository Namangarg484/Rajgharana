import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/data/types";

const ratioClass: Record<ImageSlot["ratio"], string> = {
  "16/9": "aspect-[16/9]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "2/3": "aspect-[2/3]",
};

interface Props {
  slot: ImageSlot;
  className?: string;
  tone?: "paper" | "ink";
  priority?: boolean;
}

/**
 * Renders an uploaded image when `slot.src` is set, otherwise a neutral
 * framed placeholder at the intended crop with the shot note.
 */
export function ImageFrame({ slot, className, tone = "paper", priority }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        ratioClass[slot.ratio],
        tone === "ink" ? "border-ink-muted/25 bg-ink" : "border-border bg-muted",
        className,
      )}
    >
      {slot.src ? (
        <img
          src={slot.src}
          alt={slot.alt}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span
            className={cn(
              "label-micro",
              tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            Image
          </span>
          <span
            className={cn(
              "max-w-[24ch] text-xs leading-relaxed",
              tone === "ink" ? "text-ink-muted/80" : "text-muted-foreground",
            )}
          >
            {slot.note}
          </span>
        </div>
      )}
    </div>
  );
}
