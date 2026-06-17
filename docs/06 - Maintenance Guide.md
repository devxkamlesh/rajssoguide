---
title: Maintenance Guide
tags: [maintenance, how-to]
---

# Maintenance Guide

How to add or update content. In most cases you only edit a data file; the page, hub listing, sitemap entry, and internal links are generated automatically.

## Add a new exam

1. Open `src/data/exams.json`.
2. Add an object with: `slug`, `name`, `fullName`, `otrFee` (general and sc_st), `lastDate`, optional `examDate`, `services`, and `keywords`. Bilingual fields take both `en` and `hi`.
3. Optionally add detailed prose for that exam in `src/lib/examContent.ts`.

The detail page, the entry on the Exams hub, the calendar marker, the search entry, and the sitemap link all appear automatically.

## Add a new service, city, or scholarship

1. Open the matching file: `src/data/services.json`, `cities.json`, or `scholarships.json`.
2. Add an object following the existing shape for that file.

The detail page and hub listing are generated automatically.

## Add a new core guide

1. Open `src/data/guides.ts`.
2. Add a `Guide` object with `title`, `intro`, `body`, `steps`, `faqs`, and `lastVerified`, each keyed by locale.

It joins the Guides hub, the header menu, and search.

## Add a news or update entry

1. Open `src/data/updates.ts`.
2. Add an object at the top of the array with `date` (ISO format), bilingual `title`, `href`, a `tag` (exam, scholarship, service, or general), and `external` if the link leaves the site.

Date sorting and the "New" marker are automatic. Keeping this list current is the main ongoing task, since freshness helps search ranking.

## Update interface labels

Edit `src/dictionaries/en.json` and `src/dictionaries/hi.json`. These hold navigation and shared labels only. Keep the two files in sync so both languages have the same keys.

## Update site-wide settings

Edit `src/lib/site.ts` for the site name, URL, contact email, WhatsApp number, social handle, and asset paths. This is the single source of truth used across metadata, schema, header, and footer.

## Update developer attribution

Edit `src/lib/attribution.ts`. Values are base64-encoded; decode and re-encode if changing them.

## Before committing

1. Run `npm run lint` and fix any reported issues.
2. Run `npm run build` and confirm it completes without errors (this branch uses `next build --webpack`).
3. Confirm both `/en` and `/hi` versions render as expected.

> [!tip] Preview the Cloudflare build locally
> After `npm run build`, run `npm run preview` (Wrangler) to test the Worker output before `npm run deploy`. See [[11 - Cloudflare Deployment]].

## Things to verify regularly

- Exam dates, last dates, and fees against official RPSC and RSSB notifications.
- Scholarship eligibility and income limits.
- The updates feed, refreshed with current notifications.

## Related

[[02 - Architecture]] · [[04 - Content Inventory]] · [[11 - Cloudflare Deployment]] · [[README]]
