---
title: SEO, Security, and Performance
tags: [seo, security, performance]
---

# SEO, Security, and Performance

## SEO system

### Metadata

`app/[locale]/layout.tsx` sets the base metadata: the title template (`%s | RajSSO Guide`), description, author and publisher fields, icons, manifest, Open Graph image per locale, Twitter card, Google verification token, and attribution tags.

Each page adds its own `title`, `description`, `keywords`, and an `alternates` block with a canonical URL and hreflang language entries.

### Structured data (JSON-LD)

Built by `lib/schema.ts` and injected with the `JsonLd` component.

- Global (every page): WebSite, Organization, Person.
- Home: two HowTo blocks (login and registration) and an FAQPage.
- Core guides: HowTo, FAQ, Breadcrumb.
- Exam, service, city, scholarship: Breadcrumb.
- Error pages: HowTo and Breadcrumb.
- Hub pages: ItemList and Breadcrumb.

The Organization schema includes description, founding date, contact email, area served (Rajasthan), and a social link.

### Sitemap and robots

- `sitemap.ts` (static) lists the home page, all hubs, guides, tools, exams, services, scholarships, cities, error pages, and legal pages, one entry per locale, each with a priority and change frequency. It deliberately omits the `alternates` field for Google Search Console compatibility.
- `robots.ts` (static) allows the main search crawlers, blocks known AI scrapers, and declares the sitemap and host.

### Internal linking

Hub-and-spoke structure, visible breadcrumbs, "Related" blocks, and "Important Links" boxes all reinforce internal linking. The search page and a `searchIndex` cover findability within the site.

### Hreflang and canonicals

`lib/schema.ts` provides `alternates()` (en-IN, hi-IN, x-default) and `canonicalFor()`. The `<html lang>` attribute is set per locale.

## Security

Defined in `next.config.ts` as headers applied to all routes:

- X-Frame-Options: SAMEORIGIN (clickjacking protection).
- X-Content-Type-Options: nosniff.
- Referrer-Policy: strict-origin-when-cross-origin.
- Permissions-Policy: camera, microphone, and geolocation disabled.
- Content-Security-Policy: allows self plus Google Analytics, Google Tag Manager, and Vercel scripts.

Additional points:

- No secrets are stored in code. The Google Analytics ID is read from an environment variable.
- Links to the official portal use `rel="nofollow noopener"`.
- The interactive tools never transmit user data; all computation is local.

## Performance

- Every page is statically generated, so there is no server render time on request.
- Client JavaScript is limited to the header menu, search, the live countdown, and the tools.
- Images use `images.unoptimized` because assets are pre-optimized, which avoids the Vercel image quota.
- Fonts are loaded through `next/font` (Geist).
- Vercel Analytics and Speed Insights are included to monitor real-world performance.

## Accessibility notes

- A skip-to-content link and a labeled main landmark.
- Visible focus styles for keyboard users (`:focus-visible`).
- Reduced-motion support through a media query.
- Semantic HTML and aria labels on navigation and interactive controls.

Full WCAG conformance still requires a manual screen-reader pass, which is recommended before relying on any compliance claim.

## Related

[[02 - Architecture]] · [[07 - Launch Review]] · [[README]]
