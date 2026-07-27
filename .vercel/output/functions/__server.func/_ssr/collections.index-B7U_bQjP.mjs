import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as productsIn, t as collections } from "./catalogue-BgABOXNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections.index-B7U_bQjP.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "The house",
			title: "Collections",
			intro: "Each chapter is closed when its warp runs out. What is listed is what exists."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 space-y-20",
			children: collections.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: i % 2 ? "lg:order-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: c.hero })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i % 2 ? "lg:order-1 lg:pr-12" : "lg:pl-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-micro text-gold",
							children: c.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl sm:text-5xl",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: c.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "label-micro mt-6 text-muted-foreground",
							children: [productsIn(c.slug).length, " pieces available"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections/$slug",
							params: { slug: c.slug },
							className: "label-micro mt-8 inline-block border border-foreground px-7 py-4 transition-colors hover:bg-foreground hover:text-background",
							children: ["Enter ", c.name]
						})
					]
				})]
			}, c.slug))
		})]
	});
}
//#endregion
export { CollectionsIndex as component };
