import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DIAGCCDO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-[1400px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Appointments",
			title: "Book a fitting",
			intro: "Bridal appointments run two hours and include a fabric handling session with a member of the atelier team. Festive fittings run forty-five minutes."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-12 space-y-7",
			onSubmit: (e) => {
				e.preventDefault();
				setSent(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					name: "name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					name: "email",
					type: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					name: "phone",
					type: "tel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "city",
					className: "label-micro text-muted-foreground",
					children: "Fitting room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "city",
					name: "city",
					className: "mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bengaluru — Lavelle Road" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mumbai — Kala Ghoda" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "New Delhi — Mehrauli" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Video consultation" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "note",
					className: "label-micro text-muted-foreground",
					children: "What are you looking for?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "note",
					name: "note",
					rows: 4,
					className: "mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground",
					placeholder: "Occasion, date, pieces you have saved…"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "label-micro border border-foreground bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85",
					children: sent ? "Request received" : "Request an appointment"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Thank you — the atelier team replies within one working day."
				}) : null
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-10 lg:border-l lg:border-border lg:pl-14",
			children: [[
				[
					"Bengaluru",
					"12 Lavelle Road, 560001",
					"Mon–Sat, 11:00–19:00"
				],
				[
					"Mumbai",
					"3 Rampart Row, Kala Ghoda, 400001",
					"Tue–Sun, 11:00–20:00"
				],
				[
					"New Delhi",
					"7 Kalka Das Marg, Mehrauli, 110030",
					"Mon–Sat, 11:00–19:00"
				]
			].map(([city, address, hours]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: city
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: address
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-micro mt-2 text-muted-foreground",
					children: hours
				})
			] }, city)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-micro text-muted-foreground",
						children: "Direct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "atelier@rajgharana.in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "+91 80 4000 1216"
					})
				]
			})]
		})]
	});
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "label-micro text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required: true,
		className: "mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground"
	})] });
}
//#endregion
export { ContactPage as component };
