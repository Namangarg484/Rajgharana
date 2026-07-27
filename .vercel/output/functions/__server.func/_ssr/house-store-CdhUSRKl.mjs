import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-store-CdhUSRKl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HouseContext = (0, import_react.createContext)(null);
var BAG_KEY = "hor.bag.v1";
var SAVED_KEY = "hor.saved.v1";
function HouseProvider({ children }) {
	const [bag, setBag] = (0, import_react.useState)([]);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const b = localStorage.getItem(BAG_KEY);
			const s = localStorage.getItem(SAVED_KEY);
			if (b) setBag(JSON.parse(b));
			if (s) setSaved(JSON.parse(s));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(BAG_KEY, JSON.stringify(bag));
	}, [bag, ready]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
	}, [saved, ready]);
	const value = (0, import_react.useMemo)(() => ({
		bag,
		saved,
		ready,
		bagCount: bag.reduce((n, l) => n + l.qty, 0),
		addToBag: (slug, colourway) => setBag((prev) => {
			const found = prev.find((l) => l.slug === slug && l.colourway === colourway);
			if (found) return prev.map((l) => l === found ? {
				...l,
				qty: l.qty + 1
			} : l);
			return [...prev, {
				slug,
				colourway,
				qty: 1
			}];
		}),
		removeFromBag: (slug, colourway) => setBag((prev) => prev.filter((l) => !(l.slug === slug && l.colourway === colourway))),
		toggleSaved: (slug) => setSaved((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])
	}), [
		bag,
		saved,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseContext.Provider, {
		value,
		children
	});
}
function useHouse() {
	const ctx = (0, import_react.useContext)(HouseContext);
	if (!ctx) throw new Error("useHouse must be used inside HouseProvider");
	return ctx;
}
//#endregion
export { useHouse as n, HouseProvider as t };
