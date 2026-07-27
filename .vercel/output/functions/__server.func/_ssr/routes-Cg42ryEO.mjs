import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ImageFrame } from "./ImageFrame-B8eEKbqb.mjs";
import { n as SectionHeading, t as Kicker } from "./Typography-DzXvcfGB.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as journal, n as fabrics, t as crafts } from "./house-BoqUxYMF.mjs";
import { t as FabricViewer } from "./Viewers-DV0oZb6m.mjs";
import { a as products, t as collections } from "./catalogue-BgABOXNy.mjs";
import { t as ProductCard } from "./ProductCard-DH_i9xPJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cg42ryEO.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = products.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] items-center gap-0 px-0 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fade-up order-2 px-6 py-16 sm:px-12 lg:order-1 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter IV — The Winter Weaves" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-5xl leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl",
							children: [
								"Cloth that",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"remembers",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"the hand."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-md text-sm leading-relaxed text-ink-muted",
							children: "Sarees and lehengas woven in Varanasi and Kanchipuram, embroidered in Lucknow and Jaipur, and finished one at a time. No restocks, no reprints — the loom moves on."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collections",
								className: "label-micro border border-gold px-7 py-4 text-ink-foreground transition-colors hover:bg-gold hover:text-gold-foreground",
								children: "View the collections"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/atelier",
								className: "label-micro link-quiet text-ink-muted hover:text-ink-foreground",
								children: "Enter the atelier"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 h-[46vh] min-h-[340px] lg:order-2 lg:h-[78vh]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FabricViewer, {
						fabric: fabrics[0],
						className: "h-full border-0 border-l border-border"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "The edit",
					title: "Six pieces we would wear ourselves"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collections",
					className: "label-micro link-quiet",
					children: "All collections"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Chapters",
					title: "Four ways into the house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collections/$slug",
						params: { slug: c.slug },
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: {
								...c.hero,
								ratio: "3/4"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-micro mt-4 text-gold",
								children: c.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl transition-opacity group-hover:opacity-70",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground",
								children: c.intro
							})
						]
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, { slot: crafts[0].image }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Craft",
					title: "Six hundred hours, one skirt",
					intro: "Zardozi is counted in hours, not metres. The karigar works from beneath a stretched frame, drawing metal-wrapped thread through the ground with an ari hook, in a chain that cannot be paused mid-motif."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8",
					children: crafts.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-xl",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-xs text-muted-foreground",
						children: c.hours
					})] }, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/craft",
					className: "label-micro link-quiet mt-10 inline-block",
					children: "Read the craft notes"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Journal",
					title: "From the ateliers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-10 md:grid-cols-3",
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
								className: "label-micro mt-4 text-muted-foreground",
								children: [
									entry.kicker,
									" · ",
									entry.readingTime
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl transition-opacity group-hover:opacity-70",
								children: entry.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: entry.standfirst
							})
						]
					}, entry.slug))
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
