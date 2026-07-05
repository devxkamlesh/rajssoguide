---
title: 13 · Changelog
aliases: [Changelog, History, Release Notes]
tags: [changelog]
updated: 2026-06-27
---

# 13 · Changelog

> [!abstract] Notable changes, newest first. Keep this in sync with deploys and the [[README]] status table.

## 2026-06-27 — Exam-season cluster link + new FAQs + Twitter handle

> [!success] Deployed
> - **New bilingual "Why searches for SSO ID spike around exam season" section** on the home page with a **contextual in-body link to `/exam-calendar`** — connects the homepage hub to the calendar spoke for topical clustering (`homeMeta.examSeason`).
> - **6 new FAQ entries** appended to `home.ts` `faqs` (en + fresh hi): out-of-state SSO ID, Bhamashah legacy accounts, name-vs-Aadhaar mismatch, phone-vs-computer, SSO ID vs Jan Aadhaar, moving city. They flow into the **existing single `FAQPage`** node — no duplicate schema.
> - **Twitter handle** unified to `@devxkamlesh` (`site.social.twitter`) → affects `twitter:site`, Organization `sameAs`, and ShareBar `via`.

## 2026-06-27 — Hindi GEO localization + OG images + docs rebuild

> [!success] Deployed
> - **Localized machine-readable SEO for `/hi`:** `article:section` → `सरकारी सेवाएं`, localized `article:tag`, Hindi `keywords`, Hindi OG/Twitter image `alt`, and a locale-aware `GovernmentService` schema (`ssoGovernmentService(locale)`).
> - **New OG images wired in:** `site.assets.ogImage` now points at `/RajSSO/sso-id-rajasthan-2026-og-image-en.webp` and `-hi.webp` (used by both OpenGraph and Twitter cards, per locale).
> - Bumped home "last updated" to **27 June 2026** across `homeMeta.ts` (badge, `article:modified_time`, WebPage `dateModified`, OG `modifiedTime`).
> - **Documentation vault fully rebuilt** (this `docs/` folder) and corrected against the live source.

## 2026-06-26 — Rich Results fix + full home upgrade

> [!success] Deployed
> - **Fixed Google "Multiple ListItem elements defined on page":** removed the **four** `ItemList` nodes from the home `@graph`. `ItemList` now lives only on the dedicated hubs (`/exams`, `/scholarships`, `/services`, `/cities`).
> - **Home page content upgrade:** quick-action table, SMS recovery callout (`RJ SSO` → 9223166166), direct-answer box (`#what-is-sso`), "About This Guide" E-E-A-T block with **9 cited `.gov.in` sources**, author byline + last-updated badge, top & bottom share bars.
> - **Schema additions:** `webPageSchema` (dates, author, `reviewedBy`, `speakable`), `ssoGovernmentService` as the WebPage `about`; consolidated `personSchema` to the **real author** (Kamlesh Choudhary) with `sameAs`; added LinkedIn/GitHub to Organization `sameAs`.
> - **Metadata:** OpenGraph `type: article` + `publishedTime`/`modifiedTime` + `secureUrl`, `twitter:creator`, `keywords`, geo tags (`geo.*` + `ICBM` from `site.geo`), `revisit-after`, enhanced `bingbot`, `alternateLocale`.
> - **Fixed the Hinglish English meta description** and removed the misleading "official guide" claim → "independent informational guide."
> - New components/data: `ShareBar.tsx`, `data/homeMeta.ts`.

> [!bug] Deploy gotcha encountered & documented
> A leftover `workerd` process locked `.open-next` on Windows (`EPERM`). Resolved by stopping the process before rebuild — now documented in [[08 - Cloudflare Deployment#🐞 Troubleshooting]].

## Baseline (pre-June 2026)

- Next.js 16 App Router site on Cloudflare Workers via OpenNext.
- Bilingual `/en` + `/hi`, ~108 static pages, hub-and-spoke structure.
- Per-page metadata, hreflang, sitemap, robots (AI-scraper block), security headers + CSP.
- Data-driven content; interactive tools run client-side.

---

## 🔗 Related

[[06 - SEO and Structured Data]] · [[08 - Cloudflare Deployment]] · [[12 - Roadmap and Improvements]] · [[README]]
