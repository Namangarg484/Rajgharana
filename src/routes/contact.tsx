import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/Typography";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Fitting — Rajgharana" },
      {
        name: "description",
        content:
          "Book a bridal or festive fitting at our Bengaluru, Mumbai or Delhi fitting rooms, or arrange a video consultation with the atelier.",
      },
      { property: "og:title", content: "Book a Fitting — Rajgharana" },
      { property: "og:description", content: "Fitting rooms in Bengaluru, Mumbai and Delhi, or by video." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <SectionHeading
          kicker="Appointments"
          title="Book a fitting"
          intro="Bridal appointments run two hours and include a fabric handling session with a member of the atelier team. Festive fittings run forty-five minutes."
        />

        <form
          className="mt-12 space-y-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label htmlFor="city" className="label-micro text-muted-foreground">
              Fitting room
            </label>
            <select
              id="city"
              name="city"
              className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground"
            >
              <option>Bengaluru — Lavelle Road</option>
              <option>Mumbai — Kala Ghoda</option>
              <option>New Delhi — Mehrauli</option>
              <option>Video consultation</option>
            </select>
          </div>
          <div>
            <label htmlFor="note" className="label-micro text-muted-foreground">
              What are you looking for?
            </label>
            <textarea
              id="note"
              name="note"
              rows={4}
              className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground"
              placeholder="Occasion, date, pieces you have saved…"
            />
          </div>
          <button
            type="submit"
            className="label-micro border border-foreground bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85"
          >
            {sent ? "Request received" : "Request an appointment"}
          </button>
          {sent ? (
            <p className="text-xs text-muted-foreground">
              Thank you — the atelier team replies within one working day.
            </p>
          ) : null}
        </form>
      </div>

      <aside className="space-y-10 lg:border-l lg:border-border lg:pl-14">
        {[
          ["Bengaluru", "12 Lavelle Road, 560001", "Mon–Sat, 11:00–19:00"],
          ["Mumbai", "3 Rampart Row, Kala Ghoda, 400001", "Tue–Sun, 11:00–20:00"],
          ["New Delhi", "7 Kalka Das Marg, Mehrauli, 110030", "Mon–Sat, 11:00–19:00"],
        ].map(([city, address, hours]) => (
          <div key={city}>
            <h2 className="font-display text-2xl">{city}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{address}</p>
            <p className="label-micro mt-2 text-muted-foreground">{hours}</p>
          </div>
        ))}
        <div className="border-t border-border pt-8">
          <p className="label-micro text-muted-foreground">Direct</p>
          <p className="mt-2 text-sm">atelier@rajgharana.in</p>
          <p className="text-sm">+91 80 4000 1216</p>
        </div>
      </aside>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label-micro text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}
