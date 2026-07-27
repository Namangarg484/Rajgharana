import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getFabric } from "./house-BoqUxYMF.mjs";
import { n as GarmentViewer } from "./Viewers-DV0oZb6m.mjs";
import { n as useHouse } from "./house-store-CdhUSRKl.mjs";
import { a as products, i as inr } from "./catalogue-BgABOXNy.mjs";
import { t as ProductCard } from "./ProductCard-DH_i9xPJ.mjs";
import { t as Route } from "./product._slug-FKPgSaxI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-JYmyZSdi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Minimal oklch -> sRGB hex conversion for feeding design tokens into three.js. */
function oklchToHex(l, c, hDeg) {
	const h = hDeg * Math.PI / 180;
	const a = c * Math.cos(h);
	const b = c * Math.sin(h);
	const l_ = l + .3963377774 * a + .2158037573 * b;
	const m_ = l - .1055613458 * a - .0638541728 * b;
	const s_ = l - .0894841775 * a - 1.291485548 * b;
	const L = l_ * l_ * l_;
	const M = m_ * m_ * m_;
	const S = s_ * s_ * s_;
	const r = 4.0767416621 * L - 3.3077115913 * M + .2309699292 * S;
	const g = -1.2684380046 * L + 2.6097574011 * M - .3413193965 * S;
	const bl = -.0041960863 * L - .7034186147 * M + 1.707614701 * S;
	const enc = (v) => {
		const s = v <= .0031308 ? 12.92 * v : 1.055 * Math.pow(Math.max(v, 0), 1 / 2.4) - .055;
		return Math.round(Math.min(1, Math.max(0, s)) * 255);
	};
	return `#${[
		enc(r),
		enc(g),
		enc(bl)
	].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}
function ProductPage() {
	const { product } = Route.useLoaderData();
	const fabric = getFabric(product.fabric);
	const { addToBag, toggleSaved, saved } = useHouse();
	const [colourIndex, setColourIndex] = (0, import_react.useState)(0);
	const [detail, setDetail] = (0, import_react.useState)(false);
	const [added, setAdded] = (0, import_react.useState)(false);
	const colourway = product.colourways[colourIndex];
	const hex = oklchToHex(colourway.oklch[0], colourway.oklch[1], colourway.oklch[2]);
	const isSaved = saved.includes(product.slug);
	const related = products.filter((p) => p.slug !== product.slug && p.collection === product.collection).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-[1.15fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border lg:border-b-0 lg:border-r",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GarmentViewer, {
					fabric,
					colour: hex,
					category: product.category,
					detail,
					className: "h-[62vh] min-h-[420px] border-0 border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 border-b border-border px-5 py-4 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-micro text-muted-foreground",
							children: "3D view"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDetail((v) => !v),
							className: cn("label-micro border px-3 py-2 transition-colors", detail ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"),
							children: detail ? "Full garment" : "Embroidery detail"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"Rendered from the ",
								fabric.name.toLowerCase(),
								" material profile"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 p-5 sm:grid-cols-2 sm:p-8",
					children: product.images.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot }, slot.note))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-12 sm:px-10 lg:sticky lg:top-16 lg:self-start lg:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-micro text-gold",
					children: [
						product.category,
						" · ",
						product.region
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl sm:text-5xl",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-xl italic text-muted-foreground",
					children: product.shortCopy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl tabular-nums",
						children: inr(product.price)
					}), product.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm tabular-nums text-muted-foreground line-through",
						children: inr(product.mrp)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "label-micro bg-gold px-2 py-1 text-gold-foreground",
						children: [
							"−",
							Math.round((1 - product.price / product.mrp) * 100),
							"%"
						]
					})] }) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label-micro text-muted-foreground",
						children: ["Colourway — ", colourway.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-3",
						children: product.colourways.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": c.name,
							onClick: () => setColourIndex(i),
							className: cn("size-9 border transition-all", i === colourIndex ? "border-foreground ring-1 ring-foreground ring-offset-2" : "border-border"),
							style: { backgroundColor: oklchToHex(c.oklch[0], c.oklch[1], c.oklch[2]) }
						}, c.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							addToBag(product.slug, colourway.name);
							setAdded(true);
							window.setTimeout(() => setAdded(false), 2200);
						},
						className: "label-micro flex-1 border border-foreground bg-foreground px-8 py-4 text-background transition-opacity hover:opacity-85",
						children: added ? "Added to bag" : "Add to bag"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggleSaved(product.slug),
						className: "label-micro border border-border px-6 py-4 transition-colors hover:border-foreground",
						children: isSaved ? "Saved" : "Save"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm leading-relaxed text-muted-foreground",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 divide-y divide-border border-y border-border text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Fabric",
							value: product.fabricLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Craft",
							value: product.craftLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Atelier",
							value: product.region
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Occasion",
							value: product.occasion.join(", ")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-2 text-xs text-muted-foreground",
					children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block size-1 shrink-0 bg-gold" }), d]
					}, d))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "label-micro link-quiet mt-10 inline-block",
					children: "Book a fitting for this piece"
				})
			]
		})]
	}), related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] border-t border-border px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl",
			children: "From the same chapter"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
			children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
		})]
	}) : null] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-6 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "label-micro text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right",
			children: value
		})]
	});
}
//#endregion
export { ProductPage as component };
