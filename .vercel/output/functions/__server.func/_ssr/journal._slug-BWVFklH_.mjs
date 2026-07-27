import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getJournalEntry } from "./house-BoqUxYMF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-BWVFklH_.js
var $$splitComponentImporter = () => import("./journal._slug-Cx7sXNO1.mjs");
var Route = createFileRoute("/journal/$slug")({
	loader: ({ params }) => {
		const entry = getJournalEntry(params.slug);
		if (!entry) throw notFound();
		return { entry };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Entry unavailable — Rajgharana" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { entry } = loaderData;
		const title = `${entry.title} — Rajgharana Journal`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: entry.standfirst.slice(0, 155)
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: entry.standfirst.slice(0, 155)
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
