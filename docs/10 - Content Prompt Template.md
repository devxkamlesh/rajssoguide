---
title: Content Prompt Template
tags: [content, prompt, workflow, ai]
---

# Content Prompt Template

A reusable prompt you can paste to request a new page. Fill in the bracketed parts. The prompt tells the assistant to research the topic, follow this site's data structure, write bilingual SEO content, and place it correctly so it builds without changes.

Keep one rule in mind: provide any hard facts you already have (dates, fees, eligibility). The assistant will research and draft, but you remain responsible for verifying numbers against official sources before publishing.

## Master prompt (works for any page type)

```
Generate SEO-optimized content for a new [PAGE TYPE: exam | service | scholarship | city | guide | error] page
about [TOPIC NAME] for the RajSSO Guide website.

Content requirements:
- Write in both English and Hindi (bilingual)
- Use natural, fluent Hindi - not machine translation
- Target length: 1200 to 1600 words per language
- The site is an independent guide, not the government portal (sso.rajasthan.gov.in)
- Never instruct users to enter passwords or OTP anywhere except the official portal

What to research and include:
1. Research [TOPIC NAME] thoroughly and gather accurate, current information:
   - Eligibility criteria
   - Fees and charges
   - Important dates and deadlines
   - Step-by-step process/procedure
   - Official requirements
2. Note anything you cannot verify from reliable sources

Content structure:
1. Write a compelling introduction that explains what this is and why it matters
2. Create detailed body sections covering all important aspects
3. Include clear, step-by-step instructions where applicable
4. Add 4 to 5 frequently asked questions with detailed answers
5. Use headings, bullet points, and formatting for readability

SEO optimization:
- Create a unique, keyword-rich title (55-60 characters)
- Write compelling meta description (150-160 characters)
- Include primary keyword in: title, first paragraph, at least one heading
- Suggest 8-10 realistic search keywords/phrases people would use
- Naturally incorporate keywords throughout the content
- Recommend internal links to related pages and parent hub

Known facts to use (verify the rest):
[PASTE ANY CONFIRMED DATES, FEES, ELIGIBILITY HERE, OR WRITE "none"]

After providing the content, list anything you could not verify so I can confirm it against official sources.
```

## Data shapes the assistant must follow

*This section has been removed. The prompt now focuses only on generating SEO-optimized content, not code implementation or data structures.*

## Filled example (exam page)

```
Generate SEO-optimized content for a new exam page about REET 2026
(Rajasthan Eligibility Examination for Teachers) for the RajSSO Guide website.

Content requirements:
- Write in both English and Hindi (bilingual)
- Use natural, fluent Hindi - not machine translation
- Target length: 1200 to 1600 words per language
- Independent guide, not the government portal. Never ask for passwords or OTP.

What to research and include:
1. Research REET 2026 thoroughly:
   - Conducting body (BSER)
   - Eligibility criteria (educational qualifications, age limits)
   - Exam levels (Level 1, Level 2)
   - Exam pattern (subjects, marks, duration)
   - Application fees (general and SC/ST category)
   - Important dates (application start/end, exam date, admit card)
   - Selection process
2. Note anything you cannot verify

Content structure:
1. Compelling introduction explaining what REET is and why it matters
2. Detailed sections on: Overview, Eligibility, Exam Pattern, Fees, Important Dates
3. Clear step-by-step guide on "How to Apply via SSO Portal"
4. 4 to 5 FAQs with detailed answers (e.g., "Can I apply for both levels?")
5. Use headings, bullet points, tables where helpful

SEO optimization:
- Title: "REET 2026: Eligibility, Exam Date, Application Process via SSO"
- Meta description highlighting key benefits and dates
- Primary keyword "REET 2026" in title, intro, main heading
- Keywords: REET 2026, Rajasthan teacher eligibility test, BSER REET, REET application, REET SSO login, REET exam pattern, teacher eligibility Rajasthan
- Internal links: Link to RPSC page, Exams hub, SSO Login guide

Known facts to use (verify the rest):
none

After providing the content, list what you could not verify.
```

## Quick prompt (when you are in a hurry)

```
Generate SEO-optimized bilingual content (English and Hindi) for a [PAGE TYPE] page about [TOPIC] 
on RajSSO Guide. Research the topic thoroughly, write compelling introduction, detailed sections, 
step-by-step guide, 4-5 FAQs, suggest keywords and meta tags, recommend internal links. 
Natural Hindi only. Target length: [WORD COUNT]. Known facts: [PASTE OR "none"]. 
List anything unverified.
```

## Notes

- For multiple pages at once, list the topics and say "generate content for all of them following the same rules"
- Always review the unverified items list before using the content
- Verify all facts, dates, fees against official sources before publishing
- Update the last-verified date once you confirm the information

## Related

[[09 - Content Template and Checklist]] · [[06 - Maintenance Guide]] · [[README]]
