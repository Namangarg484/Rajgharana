import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dz-v2DPU.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	["Named makers", "Every garment carries the atelier and the lead karigar on its label. If we cannot name who made it, we do not sell it."],
	["No restocks", "A warp is finite. When a chapter closes we photograph the last piece and move the loom on."],
	["Whole payment upfront", "Artisans are paid in full when the piece is commissioned, not when it sells."],
	["Repair for life", "Any piece can come back for re-embroidery, re-fall or re-lining, for as long as the house exists."]
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "The house",
				title: "A small house, deliberately",
				intro: "We began in 2016 with one pit loom in Varanasi and a stubborn idea: that a garment should be able to tell you who made it, where, and for how long. Ten years on we work with six ateliers and release fewer than four hundred pieces a year."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "Nothing here is produced to a season. A jamdani saree takes as long as it takes; a bridal skirt can hold a frame for nine months. We would rather be late than thin."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: {
				alt: "The Varanasi atelier",
				note: "Wide shot of the pit loom floor, morning light",
				ratio: "4/5"
			} })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4",
				children: principles.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-micro text-gold",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: body
					})
				] }, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Ateliers",
					title: "Where the work happens"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 divide-y divide-border border-y border-border",
					children: [
						["Varanasi, Uttar Pradesh", "Brocade and zari weaving — 14 pit looms"],
						["Kanchipuram, Tamil Nadu", "Kanjivaram silk with interlocked borders — 9 looms"],
						["Lucknow, Uttar Pradesh", "Chikankari and zardozi frames — 31 karigars"],
						["Jaipur, Rajasthan", "Gota patti, sheesha and hand block — 18 karigars"],
						["Shantiniketan, West Bengal", "Kantha, one artisan per saree — 22 makers"],
						["Bengaluru, Karnataka", "Finishing, fittings and the flagship fitting room"]
					].map(([place, work]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-baseline justify-between gap-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: place
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: work
						})]
					}, place))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "label-micro link-quiet mt-12 inline-block",
					children: "Visit an atelier →"
				})
			]
		})
	] });
}
//#endregion
export { AboutPage as component };
