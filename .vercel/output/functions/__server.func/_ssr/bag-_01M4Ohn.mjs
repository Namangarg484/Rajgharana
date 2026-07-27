import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse } from "./house-store-CdhUSRKl.mjs";
import { i as inr, r as getProduct } from "./catalogue-BgABOXNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bag-_01M4Ohn.js
var import_jsx_runtime = require_jsx_runtime();
function BagPage() {
	const { bag, removeFromBag, saved, toggleSaved } = useHouse();
	const lines = bag.map((item) => ({
		item,
		product: getProduct(item.slug)
	})).filter((l) => Boolean(l.product));
	const total = lines.reduce((sum, l) => sum + l.product.price * l.item.qty, 0);
	const savedProducts = saved.map(getProduct).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "Your selection",
				title: "The bag"
			}),
			lines.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border border-y border-border",
					children: lines.map(({ item, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-baseline gap-4 py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[220px] flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: product.slug },
									className: "font-display text-2xl link-quiet",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "label-micro mt-2 text-muted-foreground",
									children: [
										item.colourway,
										" · ",
										product.fabricLabel,
										" · Qty ",
										item.qty
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: inr(product.price * item.qty)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => removeFromBag(item.slug, item.colourway),
								className: "label-micro link-quiet text-muted-foreground",
								children: "Remove"
							})
						]
					}, `${item.slug}-${item.colourway}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit border border-border p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: inr(total)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Insured shipping"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Complimentary" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between border-t border-border pt-4 text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: inr(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "label-micro mt-8 block border border-foreground bg-foreground px-8 py-4 text-center text-background transition-opacity hover:opacity-85",
							children: "Reserve with the atelier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs leading-relaxed text-muted-foreground",
							children: "Pieces are held for 48 hours while the atelier confirms measurements and delivery dates."
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 border border-border py-24 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "Nothing reserved yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collections",
					className: "label-micro link-quiet mt-5 inline-block",
					children: "Browse the collections"
				})]
			}),
			savedProducts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Saved pieces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: savedProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-baseline justify-between gap-4 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "font-display text-2xl link-quiet",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-sm",
								children: inr(p.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleSaved(p.slug),
								className: "label-micro link-quiet text-muted-foreground",
								children: "Remove"
							})
						]
					}, p.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { BagPage as component };
