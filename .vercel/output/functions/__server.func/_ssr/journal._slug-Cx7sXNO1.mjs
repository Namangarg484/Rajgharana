import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./journal._slug-BWVFklH_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-Cx7sXNO1.js
var import_jsx_runtime = require_jsx_runtime();
function JournalEntryPage() {
	const { entry } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-[900px] px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "label-micro text-gold",
				children: [
					entry.kicker,
					" · ",
					entry.date,
					" · ",
					entry.readingTime
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 text-5xl leading-[1.05] sm:text-6xl",
				children: entry.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-2xl italic leading-snug text-muted-foreground",
				children: entry.standfirst
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
					slot: {
						...entry.hero,
						ratio: "16/9"
					},
					priority: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-7 text-base leading-[1.85] text-foreground/85",
				children: entry.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para.slice(0, 32)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				className: "label-micro link-quiet mt-16 inline-block",
				children: "← All journal entries"
			})
		]
	});
}
//#endregion
export { JournalEntryPage as component };
