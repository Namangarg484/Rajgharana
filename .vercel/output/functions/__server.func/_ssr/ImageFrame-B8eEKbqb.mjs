import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImageFrame-B8eEKbqb.js
var import_jsx_runtime = require_jsx_runtime();
var ratioClass = {
	"16/9": "aspect-[16/9]",
	"3/4": "aspect-[3/4]",
	"1/1": "aspect-square",
	"4/5": "aspect-[4/5]",
	"2/3": "aspect-[2/3]"
};
/**
* Renders an uploaded image when `slot.src` is set, otherwise a neutral
* framed placeholder at the intended crop with the shot note.
*/
function ImageFrame({ slot, className, tone = "paper", priority }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden border", ratioClass[slot.ratio], tone === "ink" ? "border-ink-muted/25 bg-ink" : "border-border bg-muted", className),
		children: slot.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: slot.src,
			alt: slot.alt,
			loading: priority ? "eager" : "lazy",
			className: "h-full w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("label-micro", tone === "ink" ? "text-ink-muted" : "text-muted-foreground"),
				children: "Image"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("max-w-[24ch] text-xs leading-relaxed", tone === "ink" ? "text-ink-muted/80" : "text-muted-foreground"),
				children: slot.note
			})]
		})
	});
}
//#endregion
export { ImageFrame as t };
