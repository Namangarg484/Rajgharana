import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getProduct } from "./catalogue-BgABOXNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-FKPgSaxI.js
var $$splitComponentImporter = () => import("./product._slug-JYmyZSdi.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Piece unavailable — Rajgharana" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		const title = `${product.name} — Rajgharana`;
		const description = `${product.fabricLabel} with ${product.craftLabel.toLowerCase()} from ${product.region}. ${product.shortCopy}`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
