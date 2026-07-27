import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Viewers-DV0oZb6m.js
var import_jsx_runtime = require_jsx_runtime();
function Loading({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 flex items-center justify-center bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-micro text-ink-muted",
			children: label
		})
	});
}
function GarmentViewer({ fabric, colour, category, detail, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden border border-border bg-ink", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Preparing viewer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-micro pointer-events-none absolute bottom-3 left-4 text-ink-muted",
			children: "Drag to rotate · Scroll to zoom"
		})]
	});
}
function FabricViewer({ fabric, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden border border-border bg-ink", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Preparing atelier" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-micro pointer-events-none absolute bottom-3 left-4 text-ink-muted",
			children: "Drag to turn the cloth"
		})]
	});
}
//#endregion
export { GarmentViewer as n, FabricViewer as t };
