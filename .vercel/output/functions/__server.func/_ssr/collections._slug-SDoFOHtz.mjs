import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as productsIn } from "./catalogue-BgABOXNy.mjs";
import { t as Route } from "./collections._slug-BxtY6tA6.mjs";
import { t as ProductCard } from "./ProductCard-DH_i9xPJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-SDoFOHtz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const { collection } = Route.useLoaderData();
	const all = (0, import_react.useMemo)(() => productsIn(collection.slug), [collection.slug]);
	const [fabric, setFabric] = (0, import_react.useState)(null);
	const [craft, setCraft] = (0, import_react.useState)(null);
	const [occasion, setOccasion] = (0, import_react.useState)(null);
	const [sort, setSort] = (0, import_react.useState)("featured");
	const options = (0, import_react.useMemo)(() => ({
		fabric: Array.from(new Set(all.map((p) => p.fabricLabel))),
		craft: Array.from(new Set(all.map((p) => p.craftLabel))),
		occasion: Array.from(new Set(all.flatMap((p) => p.occasion)))
	}), [all]);
	const setter = {
		fabric: setFabric,
		craft: setCraft,
		occasion: setOccasion
	};
	const current = {
		fabric,
		craft,
		occasion
	};
	const list = (0, import_react.useMemo)(() => {
		let out = all.filter((p) => (!fabric || p.fabricLabel === fabric) && (!craft || p.craftLabel === craft) && (!occasion || p.occasion.includes(occasion)));
		if (sort === "low") out = [...out].sort((a, b) => a.price - b.price);
		if (sort === "high") out = [...out].sort((a, b) => b.price - a.price);
		return out;
	}, [
		all,
		fabric,
		craft,
		occasion,
		sort
	]);
	const clear = () => {
		setFabric(null);
		setCraft(null);
		setOccasion(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
			slot: collection.hero,
			className: "max-h-[60vh]",
			priority: true
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-micro text-gold",
				children: collection.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-5xl sm:text-6xl",
				children: collection.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground",
				children: collection.intro
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 space-y-5 border-y border-border py-7",
				children: [Object.keys(options).map((facet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline gap-x-4 gap-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-micro w-20 text-muted-foreground",
						children: facet
					}), options[facet].map((value) => {
						const active = current[facet] === value;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setter[facet](active ? null : value),
							className: cn("border px-3 py-1.5 text-xs transition-colors", active ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"),
							children: value
						}, value);
					})]
				}, facet)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: clear,
						className: "label-micro link-quiet text-muted-foreground",
						children: "Clear filters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-micro text-muted-foreground",
							children: "Sort"
						}), [
							["featured", "Featured"],
							["low", "Price ↑"],
							["high", "Price ↓"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSort(key),
							className: cn("text-xs transition-colors", sort === key ? "text-foreground underline underline-offset-4" : "text-muted-foreground"),
							children: label
						}, key))]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "label-micro mt-8 text-muted-foreground",
				children: [list.length, " pieces"]
			}),
			list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border border-border py-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Nothing matches that combination"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: clear,
					className: "label-micro link-quiet mt-4",
					children: "Clear filters"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/collections",
				className: "label-micro link-quiet mt-20 inline-block",
				children: "← All collections"
			})
		]
	})] });
}
//#endregion
export { CollectionPage as component };
