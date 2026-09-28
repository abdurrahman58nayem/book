# বইপোকা — Premium Bangladesh Book Store

বাংলাদেশের পাঠকদের জন্য তৈরি বাংলা-প্রথম, premium book-store experience built with Next.js App Router, TypeScript and a small, fast component architecture.

## Included

- Responsive home page with contextual literary, kids, Islamic and academic color grading
- Smart book/author/category search with suggestions
- Category pages with sorting, price filters and mobile filter drawer
- Book detail pages with metadata, structured product data, related books and clickable author/publisher links
- Local cart state with persistence, quantity controls and toast feedback
- Bangladesh-friendly checkout with Inside/Outside Dhaka delivery and Cash on Delivery
- Order confirmation state with order ID
- Author, publisher, contact and delivery pages
- SEO metadata, Open Graph/Twitter metadata, sitemap and robots routes
- Centralized WhatsApp/site configuration in `app/lib/config.ts`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The current catalog is kept in `app/lib/data.ts` so it can be replaced with an existing API/database without changing the storefront components. The storefront does not reset or mutate any production data.
