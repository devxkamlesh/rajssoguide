---
title: Content Template and Checklist
tags: [content, template, checklist, workflow]
---

# Content Template and Checklist

A reusable template for creating and reviewing content for any page. Copy the relevant section, fill it in, then run the page through the checklists before publishing.

## Word-count targets

| Page type | Minimum | Target | Notes |
|-----------|:--:|:--:|-------|
| Core guide | 800 | 1200 to 1600 | Step-by-step plus FAQs |
| Exam | 800 | 1200 to 1600 | Eligibility, pattern, fees, dates |
| Service | 800 | 1200 to 1600 | Currently thin; expand first |
| Scholarship | 800 | 1200 to 1600 | Currently thin; expand first |
| City | 600 | 1000 to 1400 | District details, local e-Mitra |
| Error fix | 400 | 600 to 800 | Causes, solutions, related links |
| Hub | 200 | 300 to 500 | Intro plus listing |

Content depth status used in reviews:

- Strong: at or above target.
- Medium: between minimum and target.
- Thin: below minimum, expand before relying on it.

## Page templates

### Exam page

- Title and full name (English and Hindi).
- Quick facts: conducting body, eligibility, age limit, OTR fee (general and SC/ST), application last date, exam date.
- Overview paragraph: what the exam is and who conducts it.
- Eligibility: education, age, nationality, relaxations.
- Exam pattern: stages, marks, duration, negative marking.
- How to apply through SSO: OTR steps and what is auto-fetched.
- Linked SSO services.
- FAQs: four to five questions.
- Important Links box and Related links.

### Service page

- Service name (English and Hindi) and one-line purpose.
- Overview: what the service is and who uses it.
- Benefits.
- Eligibility or who can access it.
- How to access through SSO: login path and steps.
- Requirements or documents.
- Common problems and fixes.
- FAQs: four to five questions.
- Important Links box and Related links.

### Scholarship page

- Scholarship name and category.
- Eligibility.
- Income limits.
- Documents required.
- Application process through SSO.
- Renewal process.
- Disbursement and status tracking.
- FAQs: four to five questions.
- Important Links box and Related links.

### City page

- City and district introduction.
- e-Mitra services available locally.
- Local government services.
- Popular exams for that area.
- Where to get help (e-Mitra centres, contact updates).
- FAQs: three to four questions.
- Related links.

### Core guide page

- Title and intro.
- What the task is and why it matters.
- Numbered steps.
- Common problems and quick fixes.
- Safety reminder.
- FAQs.
- Important Links box and Related links.
- Last-verified date.

### Error-fix page

- Problem statement in plain words.
- Causes.
- Step-by-step solutions.
- When to contact the official helpdesk.
- FAQs.
- Related links.

## Pre-publish checklist

### Content

- [ ] Meets the minimum word count for the page type.
- [ ] Written in both English and Hindi, with matching meaning.
- [ ] Plain, clear language suited to the audience.
- [ ] No invented facts; every claim is verifiable.
- [ ] Includes FAQs where the template asks for them.

### Accuracy (highest priority)

- [ ] Dates verified against the official notification.
- [ ] Fees verified.
- [ ] Eligibility and income limits verified.
- [ ] Official links open and are correct.
- [ ] Last-verified date updated.

### SEO

- [ ] Unique title and meta description.
- [ ] Primary keyword used naturally in the title, first paragraph, and a heading.
- [ ] Keywords field set in the data entry.
- [ ] Internal links to related pages and the parent hub.
- [ ] Structured data renders (the page builds without errors).

### Trust and compliance

- [ ] States that the site is an independent guide, not the government.
- [ ] No request for passwords or OTPs.
- [ ] Official portal links use nofollow.

### Technical

- [ ] `npm run lint` is clean.
- [ ] `npm run build` passes.
- [ ] Both `/en` and `/hi` render correctly.

## AI versus human writing

### Short answer

Use a hybrid workflow: AI for the first draft and structure, a human for verification, local accuracy, and final voice. Never publish unverified AI text on a government-information site, because a single wrong date or fee damages trust and search ranking, and these are topics where accuracy matters to people's money and opportunities.

### What AI is good at here

- Producing a fast first draft from the templates above.
- Keeping a consistent structure across many similar pages.
- Drafting both English and Hindi versions.
- Generating FAQ candidates and rephrasing for readability.

### What still needs a human

- Verifying every date, fee, eligibility rule, and link against official sources.
- Adding genuine local knowledge (district details, real e-Mitra context).
- Checking the Hindi reads naturally, not like a machine translation.
- Final fact-check and the last-verified sign-off.

### Recommended workflow

1. Human picks the page and gathers official source facts (dates, fees, rules).
2. AI drafts the page from the matching template, using only the verified facts provided.
3. Human edits for accuracy, local detail, and natural Hindi.
4. Run the pre-publish checklist.
5. Commit, build, and deploy.

### Suggested AI tools

- General drafting and bilingual content: a strong general model such as Claude or GPT-class models works well for structured drafts and English-to-Hindi.
- Hindi quality: review Hindi output with a native reader or a model known for Indian-language fluency; do not trust raw machine translation for published copy.
- SEO assists: use any AI to suggest titles, meta descriptions, and FAQ ideas, then trim to the real search intent.

Treat AI as a drafting assistant, not the publisher. The human owns accuracy and the final word.

## Related

[[04 - Content Inventory]] · [[06 - Maintenance Guide]] · [[README]]
