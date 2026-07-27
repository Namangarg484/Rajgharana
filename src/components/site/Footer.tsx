import { Link } from "@tanstack/react-router";
import { collections } from "@/data/catalogue";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Rajgharana</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Traditional Indian couture, made slowly. Ateliers in Varanasi, Jaipur, Kolkata and Bengaluru.
            </p>
          </div>

          <FooterCol title="Collections">
            {collections.map((c) => (
              <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="link-quiet">
                {c.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="The House">
            <Link to="/about" className="link-quiet">
              Our story
            </Link>
            <Link to="/craft" className="link-quiet">
              Craft
            </Link>
            <Link to="/atelier" className="link-quiet">
              Atelier
            </Link>
            <Link to="/journal" className="link-quiet">
              Journal
            </Link>
          </FooterCol>

          <FooterCol title="Client care">
            <Link to="/contact" className="link-quiet">
              Book an appointment
            </Link>
            <Link to="/bag" className="link-quiet">
              Your bag
            </Link>
            <span className="text-muted-foreground">care@rajgharana.in</span>
            <span className="text-muted-foreground">+91 80 4000 0000</span>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rajgharana. All pieces handmade; variation is intended.</p>
          <p className="label-micro">Made slowly, in India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-micro text-gold">{title}</p>
      <div className="mt-5 flex flex-col items-start gap-3 text-sm">{children}</div>
    </div>
  );
}
