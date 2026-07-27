import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { t as crafts } from "./house-BoqUxYMF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/craft-SuODvjdA.js
var import_jsx_runtime = require_jsx_runtime();
function CraftPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Craft",
			title: "Counted in hours, not metres",
			intro: "We name the craft, the region and the time on every piece. It is the only honest way to explain a price."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-20 space-y-24",
			children: crafts.map((craft, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: i % 2 ? "lg:order-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: craft.image })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i % 2 ? "lg:order-1 lg:pr-14" : "lg:pl-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-micro text-gold",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl sm:text-5xl",
							children: craft.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-micro mt-4 text-muted-foreground",
							children: craft.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: craft.body
						})
					]
				})]
			}, craft.name))
		})]
	});
}
//#endregion
export { CraftPage as component };
