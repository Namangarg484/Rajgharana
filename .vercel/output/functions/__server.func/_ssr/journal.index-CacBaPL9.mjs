import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { n as SectionHeading } from "./Typography-DzXvcfGB.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as journal } from "./house-BoqUxYMF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal.index-CacBaPL9.js
var import_jsx_runtime = require_jsx_runtime();
function JournalIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Journal",
			title: "From the ateliers"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-14 md:grid-cols-3",
			children: journal.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/journal/$slug",
				params: { slug: entry.slug },
				className: "group block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: {
						...entry.hero,
						ratio: "4/5"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label-micro mt-5 text-muted-foreground",
						children: [
							entry.kicker,
							" · ",
							entry.date,
							" · ",
							entry.readingTime
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl transition-opacity group-hover:opacity-70",
						children: entry.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: entry.standfirst
					})
				]
			}, entry.slug))
		})]
	});
}
//#endregion
export { JournalIndex as component };
