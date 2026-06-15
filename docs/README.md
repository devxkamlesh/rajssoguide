---
title: RajSSO Guide — Documentation
tags: [index]
---

# RajSSO Guide — Documentation

This folder is the complete documentation for **rajssoguide.in**, an independent bilingual (English/Hindi) informational guide for the Rajasthan SSO ID portal.

It is structured as an Obsidian-compatible vault. Notes use `[[wiki links]]`, so opening this folder in Obsidian gives you clickable navigation, backlinks, and a graph view. The files also read correctly as plain Markdown on GitHub or any editor.

## Contents

| Document | Purpose |
|----------|---------|
| [[01 - Overview]] | What the project is, the technology used, and key facts |
| [[02 - Architecture]] | Code structure, data flow, routing, and how pages are generated |
| [[03 - Pages and Flow]] | Full site map, every page type, navigation, and user journeys |
| [[04 - Content Inventory]] | Per-page content breakdown, word counts, and review scores |
| [[05 - SEO Security Performance]] | SEO system, structured data, security headers, performance |
| [[06 - Maintenance Guide]] | How to add or update content without breaking anything |
| [[07 - Launch Review]] | Pre-launch checklist and readiness scorecard |
| [[08 - Backend and Database]] | Analysis of adding a backend/database, with pros and cons |
| [[09 - Content Template and Checklist]] | Reusable template and checklists for creating new content |
| [[10 - Content Prompt Template]] | Ready-to-paste prompt for requesting a new page |
| [[11 - Cloudflare Deployment]] | Cloudflare Workers build/deploy settings and troubleshooting |

## Recommended reading order

1. [[01 - Overview]] — understand the project at a high level
2. [[03 - Pages and Flow]] — see how the site is organised
3. [[02 - Architecture]] — learn how it works in code
4. [[04 - Content Inventory]] — review the actual content
5. [[06 - Maintenance Guide]] — learn to extend it
6. [[07 - Launch Review]] — confirm it is ready to ship
7. [[08 - Backend and Database]] — plan future direction

## Status at a glance

- Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, deployed on Vercel.
- Rendering: fully static (SSG), no backend server.
- Pages: 109 static pages (about 53 per language).
- Build: passing. Lint: clean.
- Launch state: ready, pending verification of dates and fees in the data files.
