---
title: Overview
tags: [overview]
---

# Overview

## What this project is

RajSSO Guide is an independent, informational website that helps citizens of Rajasthan use the state's Single Sign-On (SSO) ID portal and the government services connected to it. It explains how to log in, register, recover an account, apply for exams and scholarships, and use linked services such as PayManager, RajKaj, and Jan Aadhaar.

The site is **not** the official government portal. The official portal is `sso.rajasthan.gov.in`. This is a third-party guide, and every page makes that distinction clear.

## Who it is for

- Citizens, students, and job seekers in Rajasthan.
- Government employees who use SSO-linked services.
- Users who search in either Hindi or English.

## Core principles

1. **Bilingual first.** Every page exists in English (`/en`) and Hindi (`/hi`).
2. **Data-driven content.** Page text lives in data files, not hard-coded in templates, so the site scales by adding data entries.
3. **Static and fast.** Every page is pre-rendered at build time, which keeps it quick on low-end mobile devices.
4. **Trustworthy.** Clear disclaimers, privacy and terms pages, a contact route, and a stated policy of never asking for passwords or OTPs.

## Technology

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.7 (App Router) |
| UI library | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |
| Rendering | Static Site Generation (SSG) |
| Hosting | Vercel |
| Analytics | Vercel Analytics and Speed Insights; optional Google Analytics |

## Key facts

- About 109 static pages, roughly 53 per language.
- No database and no server-side application code. All content is committed in the repository.
- The only runtime logic is a lightweight middleware that adds the language prefix to URLs.
- Interactive tools (calculators, validators, photo resizer) run entirely in the browser and send no data anywhere.

## Related

[[02 - Architecture]] · [[03 - Pages and Flow]] · [[README]]
