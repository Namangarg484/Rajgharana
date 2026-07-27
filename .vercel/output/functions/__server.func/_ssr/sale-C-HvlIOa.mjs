import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { i as inr, s as saleProducts } from "./catalogue-BgABOXNy.mjs";
import { t as ProductCard } from "./ProductCard-DH_i9xPJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sale-C-HvlIOa.js
var import_jsx_runtime = require_jsx_runtime();
function SalePage() {
	const deepest = saleProducts.reduce((best, p) => Math.max(best, p.mrp ? 1 - p.price / p.mrp : 0), 0);
	const saved = saleProducts.reduce((sum, p) => sum + ((p.mrp ?? p.price) - p.price), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-ink px-5 py-20 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-micro text-gold",
					children: "The archive sale"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 max-w-3xl text-5xl leading-[1.05] text-ink-foreground sm:text-7xl",
					children: [
						"Reduced once.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Never restocked."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-lg text-sm leading-relaxed text-ink-muted",
					children: "Pieces released from the archive when a chapter closes — samples, photographed garments and the last of a warp. Each is a single size, a single colourway, and will not return."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Pieces",
							value: String(saleProducts.length)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Up to",
							value: `−${Math.round(deepest * 100)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Total reduction",
							value: inr(saved)
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "Available now",
				title: "The sale edit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: saleProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-24 grid gap-10 border-t border-border pt-12 md:grid-cols-3",
				children: [
					["Final sale", "Archive pieces are not exchanged or returned. We will send additional images and measurements before you commit."],
					["Alterations", "One complimentary alteration at any atelier, or a tailoring credit if you are outside our cities."],
					["Shipping", "Insured worldwide dispatch within five working days, in the full presentation trunk."]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-muted-foreground",
					children: body
				})] }, title))
			})
		]
	})] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "label-micro text-ink-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 font-display text-3xl text-ink-foreground",
		children: value
	})] });
}
//#endregion
export { SalePage as component };
