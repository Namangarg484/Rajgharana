import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-micro text-gold", className)}>{children}</p>;
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "paper",
  className,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? <Kicker className="mb-4">{kicker}</Kicker> : null}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-sm leading-relaxed",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-8 bg-gold", className)} />;
}
