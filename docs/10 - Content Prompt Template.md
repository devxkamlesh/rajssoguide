---
title: Content Prompt Template
tags: [content, prompt, workflow, ai]
---

# Content Prompt Template

A reusable prompt you can paste to request a new page. Fill in the bracketed parts. The prompt tells the assistant to research the topic, follow this site's data structure, write bilingual SEO content, and place it correctly so it builds without changes.

Keep one rule in mind: provide any hard facts you already have (dates, fees, eligibility). The assistant will research and draft, but you remain responsible for verifying numbers against official sources before publishing.

## Master prompt (works for any page type)

```
Add a new [PAGE TYPE: exam | service | scholarship | city | guide | error] page
to the RajSSO Guide website for the topic: [TOPIC NAME].

Context about the site:
- Next.js 16 App Router, bilingual (English and Hindi), fully static.
- Content is data-driven. Each page type has a data file and a fixed shape.
- Every text field must be provided in both English (en) and Hindi (hi).
- The site is an independent guide, not the government portal
  (sso.rajasthan.gov.in). Never tell users to enter passwords or OTP anywhere
  except the official portal.

What I want you to do:
1. Research [TOPIC NAME] and gather accurate, current details
   (eligibility, fees, dates, process). Note anything you could not verify.
2. Create the data entry in the correct file using the exact shape for this
   page type (see the structure note below).
3. Write detailed, SEO-friendly body content in both English and Hindi that
   follows our page template for this type.
4. Add 4 to 5 FAQs in both languages.
5. Use natural Hindi, not raw machine translation.
6. Make sure it builds: run lint and build, and confirm both /en and /hi work.

SEO requirements:
- Unique, keyword-rich title and meta description.
- Primary keyword in the title, first paragraph, and one heading.
- Fill the keywords field with realistic search phrases.
- Link to the parent hub and related pages.

Known facts to use (verify the rest):
[PASTE ANY CONFIRMED DATES, FEES, ELIGIBILITY HERE, OR WRITE "none"]

Target length: [USE THE WORD-COUNT TARGET FROM doc 09]

After it builds cleanly, tell me what you could not verify so I can confirm it.
```

## Data shapes the assistant must follow

Give these to the assistant if it needs a reminder of the exact fields.

Exam (`src/data/exams.json`):
```
{ slug, name {en,hi}, fullName {en,hi},
  otrFee { general, sc_st }, lastDate, examDate?,
  services [..], keywords [..] }
```
Plus optional detailed paragraphs in `src/lib/examContent.ts`.

Service (`src/data/services.json`):
```
{ slug, name {en,hi}, purpose {en,hi}, keywords [..] }
```

Scholarship (`src/data/scholarships.json`):
```
{ slug, name {en,hi}, eligibility {en,hi}, keywords [..] }
```

City (`src/data/cities.json`):
```
{ slug, name {en,hi}, keywords [..] }
```

Guide (`src/data/guides.ts`):
```
{ slug, title {en,hi}, intro {en,hi}, body {en[],hi[]},
  steps {en[],hi[]}, faqs {en[],hi[]}, lastVerified }
```

Error (`src/data/errors.json`):
```
{ slug, title {en,hi}, problem {en,hi}, fixes {en[],hi[]}, keywords [..] }
```

## Filled example (exam page)

```
Add a new exam page to the RajSSO Guide website for the topic: REET 2026
(Rajasthan Eligibility Examination for Teachers).

Context about the site:
- Next.js 16 App Router, bilingual (English and Hindi), fully static.
- Content is data-driven; follow the exam data shape exactly.
- Every text field in both English and Hindi.
- Independent guide, not the government portal. Never ask for passwords or OTP.

What I want you to do:
1. Research REET 2026: conducting body, eligibility, levels, exam pattern,
   fees, and key dates. Note anything unverified.
2. Add the entry to src/data/exams.json with slug "reet" using the exam shape.
3. Add detailed bilingual content in src/lib/examContent.ts following the
   exam page template (overview, eligibility, pattern, how to apply via SSO).
4. Add 4 to 5 FAQs in both languages.
5. Natural Hindi, not raw translation.
6. Make it build: lint and build clean, both /en and /hi work.

SEO requirements:
- Unique title and meta description, primary keyword "REET 2026".
- Keywords field with realistic phrases.
- Link to the Exams hub and related exams.

Known facts to use (verify the rest):
none

Target length: 600 to 1000 words per language.

After it builds, tell me what you could not verify.
```

## Quick prompt (when you are in a hurry)

```
Create a new [PAGE TYPE] page for [TOPIC] on RajSSO Guide. Follow our data
structure and page template (see docs 06 and 09), bilingual English and Hindi,
SEO-friendly, 4 to 5 FAQs, link to the hub and related pages. Research the
topic, add the data entry in the right file, build it clean, and tell me
what needs verifying. Known facts: [PASTE OR "none"].
```

## Notes

- For multiple pages at once, list the topics and say "create all of them following the same rules".
- Always read back the unverified items before you publish.
- Update the last-verified date once you confirm the facts.

## Related

[[09 - Content Template and Checklist]] · [[06 - Maintenance Guide]] · [[README]]
