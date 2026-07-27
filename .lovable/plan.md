## Goal

A complete multi-page luxury Indian couture website — not a single landing page — in the Rare Rabbit quiet-luxury register (restrained, neutral, editorial) applied to traditional sarees and lehengas, with real 3D product viewing.

## Routes

```text
/                     Home — hero, featured edit, craft teaser, journal teaser
/collections          All collections index (Bridal, Festive, Heritage, Sale)
/collections/$slug    Collection grid with filters (fabric, craft, colour, price)
/product/$slug        Product detail with 3D viewer + gallery + craft notes
/atelier              3D fabric & craft explorer (drape, zardozi, gota, brocade)
/craft                Craftsmanship story — weaves, regions, artisans
/sale                 The sale edit (the merchandising from your brief)
/journal              Editorial index
/journal/$slug        Editorial article
/about                House story
/contact              Appointments & enquiry form (client-side, no backend)
```

Shared header/footer live in `src/routes/__root.tsx`. Each route gets its own `head()` metadata.

## 3D layer

Using React Three Fiber + drei (`@react-three/fiber`, `@react-three/drei`, `three`).

- **Product 3D viewer** (`/product/$slug`): orbit-controlled garment on a turntable, studio HDRI lighting, PBR materials — silk sheen (anisotropic highlight), velvet (fresnel rim), brocade/zardozi via normal + roughness maps, subtle gold metalness for zari. Controls: rotate, zoom, fabric/colourway swap, and a "detail" toggle that dollies into the embroidery.
- **Atelier explorer** (`/atelier`): a draped cloth panel with gentle simulated motion, plus swatch selection that swaps material — lets you compare Banarasi brocade, dupion silk, georgette, velvet.
- **Home hero**: a slow, restrained 3D drape behind the wordmark — motion measured, never showy.
- All 3D is client-only: lazy-loaded via `React.lazy` behind `<ClientOnly>` so SSR never evaluates three.js. Every viewer has a static image fallback and a reduced-motion path.

## Design system (`src/styles.css`)

- Base: paper off-white `oklch(0.975 0.006 90)`, ink `oklch(0.19 0.008 60)`, stone greys, hairline borders.
- One accent: antique gold `oklch(0.72 0.09 85)` — rules, micro-labels, price tags only.
- A deep-ink section variant for the 3D atelier and product viewer so garments read against dark.
- Type: Cormorant Garamond display + Karla body, loaded via `<link>` in `__root.tsx`, registered in `@theme`.
- Radius 2px, generous whitespace, wide-tracked uppercase micro-labels, no gradients, no shadows.

## Commerce behaviour (frontend only)

Cart, wishlist and filters run in client state (context + localStorage). Product/collection/journal content lives in typed data files under `src/data/`. No backend, no payments — if you later want real checkout, inventory, or accounts, that's a follow-up.

## Images

You're uploading your own. Until then each slot renders a neutral framed placeholder at the correct crop (16:9 hero, 3:4 product, 1:1 detail) with a caption naming the intended shot. All sources are centralized in `src/data/` so swapping in uploads is one line per item.

## Build order

1. Design tokens + fonts + root shell (header, footer, nav).
2. Data layer and shared components (product card, section header, image frame).
3. Home, collections, product detail (2D first).
4. 3D viewer + atelier.
5. Sale, craft, journal, about, contact.
6. Cart/wishlist state, metadata pass, responsive polish.
