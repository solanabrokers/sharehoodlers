# The Hoodsters

Next.js App Router landing page based on the supplied Lovable preview, using the original character art, city scenes, and film. Built with TypeScript, Tailwind CSS 4, shadcn-style Radix components, and locally hosted DM Sans / Rajdhani fonts.

## Development

Requires Node.js 20.9+ and pnpm 11.1.2.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Validation and production

```sh
pnpm typecheck
pnpm lint
pnpm exec playwright install chromium
pnpm test
pnpm build
pnpm start
```

Playwright covers desktop/mobile layouts, collection filters, artwork previews, downloads, video, FAQs, and mobile navigation. It starts a development server when needed.

## Content and assets

- `lib/project.ts`: mint links, September 30 schedule, and FAQs from the reference. Mint and wallet actions link to OpenSea; this app does not execute blockchain transactions.
- `lib/collection.ts`: editable display names, descriptions, and style groups for the 16 supplied character previews. These are presentation labels, not onchain token IDs or metadata.
- `public/assets/`: WebP copies of all 23 supplied images and the original MP4. The source files in the repository root remain unchanged.
- `components/ui/`: editable Button, Dialog, and Accordion components; `components.json` configures shadcn.

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin for canonical and social preview URLs (see `.env.example`). The launch status is editorial content, not a live mint-status integration. Update it and the schedule when launch details change. The X link searches for The Hoodsters; replace it with the official profile when available.
