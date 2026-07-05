---
title: 10 · Content Playbook
aliases: [Content Playbook, Templates, Checklist, Content Prompt]
tags: [workflow, content, template, checklist, ai]
updated: 2026-06-27
---

# 10 · Content Playbook

> [!abstract] Reusable templates, pre-publish checklists, and the AI content prompt. Copy a section, fill it in, run the checklist, then publish.

## 🎯 Word-count targets

| Page type | Minimum | Target | Notes |
|-----------|:--:|:--:|-------|
| Core guide | 800 | 1200–1600 | Steps + FAQs |
| Exam | 800 | 1200–1600 | Eligibility, pattern, fees, dates |
| Service | 800 | 1200–1600 | rajkaj + jan-aadhaar still thin |
| Scholarship | 800 | 1200–1600 | Thin — expand first |
| City | 600 | 1000–1400 | District detail, local e-Mitra |
| Error fix | 400 | 600–800 | Causes, solutions, related links |
| Hub | 200 | 300–500 | Intro + listing |

Depth status used in reviews: **Strong** (≥ target) · **Medium** (between) · **Thin** (< minimum).

## 🧩 Page templates

> [!example]- Exam page
> - Title + full name (en + hi)
> - Quick facts: conducting body, eligibility, age limit, OTR fee (general + SC/ST), last date, exam date
> - Overview → Eligibility → Exam pattern → How to apply via SSO (OTR) → Linked services
> - 4–5 FAQs → Important Links + Related

> [!example]- Service page
> - Name (en + hi) + one-line purpose
> - Overview → Benefits → Who can access → How to access via SSO → Requirements → Common problems & fixes
> - 4–5 FAQs → Important Links + Related

> [!example]- Scholarship page
> - Name + category → Eligibility → Income limits → Documents → Apply via SSO → Renewal → Disbursement/tracking
> - 4–5 FAQs → Important Links + Related

> [!example]- City page
> - City + district intro → local e-Mitra services → local government services → popular exams → where to get help
> - 3–4 FAQs → Related

> [!example]- Core guide page
> - Title + intro → what/why → numbered steps → common problems & fixes → safety reminder
> - FAQs → Important Links + Related → `lastVerified` date

> [!example]- Error-fix page
> - Problem statement → causes → step-by-step solutions → when to contact helpdesk → FAQs → Related

## ✅ Pre-publish checklist

> [!todo] Content
> - [ ] Meets the minimum word count for the page type
> - [ ] Written in **both** English and Hindi with matching meaning
> - [ ] Plain, clear language for the audience
> - [ ] No invented facts; every claim verifiable
> - [ ] Includes FAQs where the template asks

> [!danger] Accuracy (highest priority)
> - [ ] Dates verified against the official notification
> - [ ] Fees verified
> - [ ] Eligibility / income limits verified
> - [ ] Official links open and are correct
> - [ ] `lastVerified` / last-updated date updated

> [!todo] SEO
> - [ ] Unique title + meta description
> - [ ] Primary keyword in title, first paragraph, and a heading
> - [ ] `keywords` field set in the data entry
> - [ ] Internal links to related pages + parent hub
> - [ ] Builds without errors (schema renders)

> [!todo] Trust & technical
> - [ ] States it is an independent guide, not the government
> - [ ] No request for passwords/OTPs; official links use `nofollow`
> - [ ] `npm run lint` clean · `npm run build` passes · both locales render

## 🤖 AI vs human writing

> [!quote] Short answer
> Hybrid workflow: **AI drafts, a human verifies.** Never publish unverified AI text on a government-information site — one wrong date or fee damages trust and ranking.

**AI is good at:** first drafts from templates, consistent structure across similar pages, bilingual drafts, FAQ candidates.
**Humans still own:** verifying every date/fee/rule/link, local knowledge, natural Hindi, the final `lastVerified` sign-off.

**Workflow:** gather official facts → AI drafts from the template using only those facts → human edits for accuracy + local detail + natural Hindi → run the checklist → commit, build, deploy.

## 📝 Master content prompt

> [!note]- Click to expand the full paste-ready prompt
> ````text
> You are an expert SEO Content Researcher, SEO Strategist, and Content Writer.
> Minimum content: 1000–1200 words. Never write the article before completing research.
>
> PHASE 1 — Keyword Research: target keyword, search intent, related/semantic/NLP/long-tail/question keywords, topical clusters.
> PHASE 2 — Web Research: analyse top ranking pages; extract headings, topics, user questions, entities, stats, recent updates, content gaps; review Featured Snippets, PAA, Related Searches.
> PHASE 3 — Gap Analysis: what competitors cover/miss; build a better structure + topical-authority outline.
> PHASE 4 — SEO Plan: SEO title, meta description, slug, primary/secondary/LSI/FAQ keywords, internal links, external authority sources.
> PHASE 5 — Content: match intent; more comprehensive than competitors; E-E-A-T; NLP entities; tables; FAQs; actionable steps; short paragraphs; schema-ready FAQ; no keyword stuffing; 100% human-readable.
> PHASE 6 — QA: facts accurate; no duplication; no AI fluff; no unsupported claims; high readability + SEO.
>
> OUTPUT: 1 Research Summary · 2 Competitor Analysis · 3 Keyword Analysis · 4 SEO Metadata · 5 Article · 6 FAQs · 7 Internal Links · 8 Improvement Opportunities.
>
> RULES: research first; use all available research/search/scraping tools; target Rajasthan users; simple Hindi + English terms; prioritise official Rajasthan .gov.in sources; cite sources; optimise for Google India; aim for Top-3 ranking.
> ````

---

## 🔗 Related

[[05 - Content Inventory]] · [[09 - Maintenance Guide]] · [[12 - Roadmap and Improvements]] · [[README]]
