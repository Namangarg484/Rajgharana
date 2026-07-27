import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as inr } from "./catalogue-BgABOXNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-DH_i9xPJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, className }) {
	const discount = product.mrp ? Math.round((1 - product.price / product.mrp) * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$slug",
		params: { slug: product.slug },
		className: cn("group block", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: product.images[0] }), discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "label-micro absolute left-0 top-0 bg-gold px-2.5 py-1.5 text-gold-foreground",
				children: [
					"−",
					discount,
					"%"
				]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg leading-tight transition-opacity group-hover:opacity-70",
				children: product.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					product.fabricLabel,
					" · ",
					product.craftLabel
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm tabular-nums",
					children: inr(product.price)
				}), product.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tabular-nums text-muted-foreground line-through",
					children: inr(product.mrp)
				}) : null]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
