import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useHouse } from "@/lib/house-store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/collections", label: "Collections" },
  { to: "/atelier", label: "Atelier" },
  { to: "/craft", label: "Craft" },
  { to: "/sale", label: "Sale" },
  { to: "/journal", label: "Journal" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="font-display text-xl tracking-tight">
          Rajgharana
          <span className="ml-2 align-middle text-[0.5rem] tracking-[0.3em] text-gold">COUTURE</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "label-micro link-quiet text-foreground/70 transition-colors hover:text-foreground",
              )}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link to="/contact" className="label-micro hidden text-foreground/70 hover:text-foreground sm:block">
            Appointments
          </Link>
          <BagLink />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-2">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="label-micro border-b border-border py-4 last:border-0">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="label-micro py-4">
              Appointments
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function BagLink() {
  const { bagCount, ready } = useHouse();
  return (
    <Link to="/bag" className="label-micro text-foreground/70 hover:text-foreground">
      Bag<span className="tabular-nums"> ({ready ? bagCount : 0})</span>
    </Link>
  );
}
