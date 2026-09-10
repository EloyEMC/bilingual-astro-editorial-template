# Proyecto Sterling Web

Bilingual editorial landing experience for Proyecto Sterling and the Sterling book universe.

## Architecture

This is a static Astro site. Locale-aware pages live under `src/pages/[locale]`: `/en/` and `/es/` provide the bilingual homepages, while the localized book routes provide the editorial detail view. Shared page chrome belongs to `src/layouts`, reusable presentation to `src/components`, and book copy, media, and route metadata to `src/data/books.ts`. `Seo.astro` owns canonical, alternate-language, Open Graph, and Twitter metadata so each page is self-contained. Approved artwork is served from `public/media` using stable locale-specific filenames referenced by the book data.

The root route redirects visitors to the Spanish homepage at `/es/`. Astro generates the complete site at build time; no runtime API or CMS is required.

## Site URL

The public site URL is [`https://thetempuscode.com`](https://thetempuscode.com), used as the canonical origin for site metadata and generated URLs. Keep the `/es/` and `/en/` locale structure when linking to localized pages.
