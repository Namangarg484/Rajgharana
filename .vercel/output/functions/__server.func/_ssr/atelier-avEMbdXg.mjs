import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { n as fabrics } from "./house-BoqUxYMF.mjs";
import { t as FabricViewer } from "./Viewers-DV0oZb6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-avEMbdXg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Atelier() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const fabric = fabrics[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "The atelier",
			title: "Handle the cloth from where you are",
			intro: "Every fabric below is rendered from a measured material profile — weight, drape, sheen and metal content — so a screen can approximate what a hand would tell you."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-0 border border-border lg:grid-cols-[240px_1fr_300px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-b border-border lg:border-b-0 lg:border-r",
					children: fabrics.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIndex(i),
						className: cn("block w-full border-b border-border px-6 py-5 text-left transition-colors last:border-b-0", i === index ? "bg-foreground text-background" : "hover:bg-secondary"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-micro opacity-60",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-xl",
							children: f.name
						})]
					}, f.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FabricViewer, {
					fabric,
					className: "h-[52vh] min-h-[380px] border-0 lg:h-[64vh]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "border-t border-border p-7 lg:border-l lg:border-t-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-micro text-gold",
							children: fabric.origin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl",
							children: fabric.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: fabric.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 divide-y divide-border border-y border-border text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									label: "Drape",
									value: fabric.drape
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									label: "Sheen",
									value: fabric.sheen
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									label: "Metal content",
									value: fabric.metalness
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									label: "Surface",
									value: 1 - fabric.roughness
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs leading-relaxed text-muted-foreground",
							children: "Drag to rotate the panel. The weave animates at the drape coefficient measured on the loom."
						})
					]
				})
			]
		})]
	});
}
function Spec({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "label-micro text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block h-px w-24 bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-px bg-gold",
					style: { width: `${Math.min(1, Math.max(0, value)) * 100}%` }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				children: value.toFixed(2)
			})]
		})]
	});
}
//#endregion
export { Atelier as component };
