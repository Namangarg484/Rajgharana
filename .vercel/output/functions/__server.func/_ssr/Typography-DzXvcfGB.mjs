import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Typography-DzXvcfGB.js
var import_jsx_runtime = require_jsx_runtime();
function Kicker({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("label-micro text-gold", className),
		children
	});
}
function SectionHeading({ kicker, title, intro, align = "left", tone = "paper", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center", className),
		children: [
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				className: "mb-4",
				children: kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("text-3xl sm:text-4xl md:text-5xl", tone === "ink" ? "text-ink-foreground" : "text-foreground"),
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 text-sm leading-relaxed", tone === "ink" ? "text-ink-muted" : "text-muted-foreground"),
				children: intro
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as n, Kicker as t };
