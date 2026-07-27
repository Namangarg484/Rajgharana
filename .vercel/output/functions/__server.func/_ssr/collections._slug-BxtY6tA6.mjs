import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCollection } from "./catalogue-BgABOXNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-BxtY6tA6.js
var $$splitComponentImporter = () => import("./collections._slug-SDoFOHtz.mjs");
var Route = createFileRoute("/collections/$slug")({
	loader: ({ params }) => {
		const collection = getCollection(params.slug);
		if (!collection) throw notFound();
		return { collection };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Collection unavailable — Rajgharana" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { collection } = loaderData;
		const title = `${collection.name} — Rajgharana`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: collection.intro.slice(0, 155)
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: collection.intro.slice(0, 155)
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
