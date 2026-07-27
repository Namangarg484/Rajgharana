import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHouse, t as HouseProvider } from "./house-store-CdhUSRKl.mjs";
import { t as collections } from "./catalogue-BgABOXNy.mjs";
import { t as Route$10 } from "./collections._slug-BxtY6tA6.mjs";
import { t as Route$11 } from "./journal._slug-BWVFklH_.mjs";
import { t as Route$12 } from "./product._slug-FKPgSaxI.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Br0HrPJ3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-ClWo3UtJ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var nav = [
	{
		to: "/collections",
		label: "Collections"
	},
	{
		to: "/atelier",
		label: "Atelier"
	},
	{
		to: "/craft",
		label: "Craft"
	},
	{
		to: "/sale",
		label: "Sale"
	},
	{
		to: "/journal",
		label: "Journal"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-xl tracking-tight",
					children: ["Rajgharana", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 align-middle text-[0.5rem] tracking-[0.3em] text-gold",
						children: "COUTURE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("label-micro link-quiet text-foreground/70 transition-colors hover:text-foreground"),
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "label-micro hidden text-foreground/70 hover:text-foreground sm:block",
							children: "Appointments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BagLink, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							className: "md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[1400px] flex-col px-5 py-2",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "label-micro border-b border-border py-4 last:border-0",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "label-micro py-4",
					children: "Appointments"
				})]
			})
		}) : null]
	});
}
function BagLink() {
	const { bagCount, ready } = useHouse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/bag",
		className: "label-micro text-foreground/70 hover:text-foreground",
		children: ["Bag", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular-nums",
			children: [
				" (",
				ready ? bagCount : 0,
				")"
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Rajgharana"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground",
						children: "Traditional Indian couture, made slowly. Ateliers in Varanasi, Jaipur, Kolkata and Bengaluru."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Collections",
						children: collections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections/$slug",
							params: { slug: c.slug },
							className: "link-quiet",
							children: c.name
						}, c.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
						title: "The House",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "link-quiet",
								children: "Our story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/craft",
								className: "link-quiet",
								children: "Craft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/atelier",
								className: "link-quiet",
								children: "Atelier"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								className: "link-quiet",
								children: "Journal"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
						title: "Client care",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "link-quiet",
								children: "Book an appointment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bag",
								className: "link-quiet",
								children: "Your bag"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "care@rajgharana.in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "+91 80 4000 0000"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Rajgharana. All pieces handmade; variation is intended."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-micro",
					children: "Made slowly, in India"
				})]
			})]
		})
	});
}
function FooterCol({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "label-micro text-gold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 flex flex-col items-start gap-3 text-sm",
		children
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Rajgharana" },
			{
				name: "description",
				content: "Handmade Indian couture — sarees, lehengas and anarkalis, woven and embroidered slowly."
			},
			{
				name: "author",
				content: "Rajgharana"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Karla:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-Cg42ryEO.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Rajgharana — Handmade Sarees & Lehengas" },
		{
			name: "description",
			content: "Traditional Indian couture made slowly: Banarasi brocade, Kanjivaram silk, hand zardozi and gota patti. Explore garments in 3D before you visit the atelier."
		},
		{
			property: "og:title",
			content: "Rajgharana — Handmade Sarees & Lehengas"
		},
		{
			property: "og:description",
			content: "Handwoven sarees and hand-embroidered lehengas, viewable in 3D. Ateliers across India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-Dz-v2DPU.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About the House — Six Ateliers, One Standard" },
		{
			name: "description",
			content: "Rajgharana works directly with weaving and embroidery ateliers across Varanasi, Kanchipuram, Lucknow, Jaipur and Bengal. No middlemen, no restocks."
		},
		{
			property: "og:title",
			content: "About the House — Rajgharana"
		},
		{
			property: "og:description",
			content: "Direct-to-atelier Indian couture from six regional craft clusters."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./atelier-avEMbdXg.mjs");
var Route$6 = createFileRoute("/atelier")({
	head: () => ({ meta: [
		{ title: "The 3D Atelier — Feel the Fabric Before You Order" },
		{
			name: "description",
			content: "Turn, light and drape Banarasi brocade, Kanjivaram silk, velvet and organza in real time. An interactive 3D fabric library from Rajgharana."
		},
		{
			property: "og:title",
			content: "The 3D Atelier — Rajgharana"
		},
		{
			property: "og:description",
			content: "Interactive 3D fabric library: brocade, silk, velvet, organza and chikankari cotton."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./bag-_01M4Ohn.mjs");
var Route$5 = createFileRoute("/bag")({
	head: () => ({ meta: [
		{ title: "Your Bag — Rajgharana" },
		{
			name: "description",
			content: "Review the pieces you have reserved from Rajgharana."
		},
		{
			property: "og:title",
			content: "Your Bag — Rajgharana"
		},
		{
			property: "og:description",
			content: "Review the pieces you have reserved."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-DIAGCCDO.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Book a Fitting — Rajgharana" },
		{
			name: "description",
			content: "Book a bridal or festive fitting at our Bengaluru, Mumbai or Delhi fitting rooms, or arrange a video consultation with the atelier."
		},
		{
			property: "og:title",
			content: "Book a Fitting — Rajgharana"
		},
		{
			property: "og:description",
			content: "Fitting rooms in Bengaluru, Mumbai and Delhi, or by video."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./craft-SuODvjdA.mjs");
var Route$3 = createFileRoute("/craft")({
	head: () => ({ meta: [
		{ title: "Craft Notes — Zardozi, Gota Patti, Kantha, Jamdani" },
		{
			name: "description",
			content: "How each garment is made: the hand crafts behind Rajgharana, counted in hours at the frame and weeks at the loom."
		},
		{
			property: "og:title",
			content: "Craft Notes — Rajgharana"
		},
		{
			property: "og:description",
			content: "Zardozi, gota patti, kantha, sheesha, zari and jamdani — the crafts behind every piece."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sale-C-HvlIOa.mjs");
var Route$2 = createFileRoute("/sale")({
	head: () => ({ meta: [
		{ title: "The Archive Sale — Couture at Atelier Prices" },
		{
			name: "description",
			content: "Single-piece archive releases from Rajgharana: handwoven sarees and hand-embroidered lehengas reduced once, never restocked."
		},
		{
			property: "og:title",
			content: "The Archive Sale — Rajgharana"
		},
		{
			property: "og:description",
			content: "One-of-one archive pieces, reduced once and never restocked."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./collections.index-B7U_bQjP.mjs");
var Route$1 = createFileRoute("/collections/")({
	head: () => ({ meta: [
		{ title: "Collections — Rajgharana" },
		{
			name: "description",
			content: "Bridal, Festive, Heritage and the Sale Edit. Four chapters of handwoven Indian couture from Rajgharana."
		},
		{
			property: "og:title",
			content: "Collections — Rajgharana"
		},
		{
			property: "og:description",
			content: "Bridal, Festive, Heritage and archive releases — handwoven sarees and lehengas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./journal.index-CacBaPL9.mjs");
var Route = createFileRoute("/journal/")({
	head: () => ({ meta: [
		{ title: "Journal — Dispatches from the Ateliers" },
		{
			name: "description",
			content: "Notes from the looms of Varanasi and Kanchipuram and the embroidery frames of Lucknow — the Rajgharana journal."
		},
		{
			property: "og:title",
			content: "Journal — Rajgharana"
		},
		{
			property: "og:description",
			content: "Dispatches from the looms and embroidery frames of India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var AtelierRoute = Route$6.update({
	id: "/atelier",
	path: "/atelier",
	getParentRoute: () => Route$9
});
var BagRoute = Route$5.update({
	id: "/bag",
	path: "/bag",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var CraftRoute = Route$3.update({
	id: "/craft",
	path: "/craft",
	getParentRoute: () => Route$9
});
var SaleRoute = Route$2.update({
	id: "/sale",
	path: "/sale",
	getParentRoute: () => Route$9
});
var CollectionsIndexRoute = Route$1.update({
	id: "/collections/",
	path: "/collections/",
	getParentRoute: () => Route$9
});
var CollectionsSlugRoute = Route$10.update({
	id: "/collections/$slug",
	path: "/collections/$slug",
	getParentRoute: () => Route$9
});
var JournalIndexRoute = Route.update({
	id: "/journal/",
	path: "/journal/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AtelierRoute,
	BagRoute,
	ContactRoute,
	CraftRoute,
	SaleRoute,
	CollectionsSlugRoute,
	JournalSlugRoute: Route$11.update({
		id: "/journal/$slug",
		path: "/journal/$slug",
		getParentRoute: () => Route$9
	}),
	ProductSlugRoute: Route$12.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$9
	}),
	CollectionsIndexRoute,
	JournalIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
