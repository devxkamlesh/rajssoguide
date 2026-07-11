---
title: 16 · 30-Day SEO and Authority Roadmap
aliases: [Roadmap, SEO Plan, 30 Day Plan, Authority Plan, Link Building Plan]
tags: [seo, growth, roadmap, link-building, aeo]
updated: 2026-07-06
---

# 16 · 30-Day SEO and Authority Roadmap

> [!abstract] A day-by-day execution plan to take `rajssoidguide.in` from DR 0 to ~DR 10, earn long-tail rankings + featured snippets, and enter AI answers — in 30 days. Written for a beginner. Do the days in order. Don't skip the setup days.
>
> Related: [[06 - SEO and Structured Data]] · [[10 - Content Playbook]] · [[12 - Roadmap and Improvements]]

---

## 🎯 Honest expectations (read first)

There are **two goals** bundled here, with very different difficulty:

| Goal | Realistic in 30 days? | Notes |
|------|:---------------------:|-------|
| DR / authority **0 → ~10** | ✅ Yes | 15–40 quality referring domains gets you there. Legit link building only. |
| Rank **long-tail + questions** (forgot SSO ID, login errors, OTR fee…) | ✅ Yes | Page 1 + featured snippets achievable. This is where you win. |
| Enter **AI answers** (ChatGPT / Perplexity / AI Overviews) | ✅ Yes | *Only if the robots.txt AI-crawler block is removed — see Day 3.* |
| Rank **#1 for `sso id` / `sso id login`** | ❌ No | Head terms owned by the official `sso.rajasthan.gov.in` + aged aggregators. This is a **month 2–4** goal, not month 1. |

**The winning mindset:** You cannot out-login the government's own login page. You *can* own the **"SSO is broken, help me"** intent — forgot ID, locked account, captcha not loading, OTP not arriving, duplicate/merge, OTR confusion. Win those, and the big head terms climb on their own as authority compounds.

**Time budget:** ~1–2 hours/day. If you miss a day, push everything forward — don't skip.

---

## 🧰 Before Day 1 — accounts you'll need

Create these logins now so you're not blocked mid-task (just create them; don't use them yet):

- [x] Google account (for Search Console + Analytics)
- [x] Bing/Microsoft account (Bing Webmaster Tools)
- [x] Ahrefs Webmaster Tools (free — for backlink + rank data)
- [ ] Reddit account — **already have:** `u/Particular_Assist333` (3 years old ✅ but only 1 karma / 0 contributions ⚠️ — age helps, karma still needed; see [[#🟠 Reddit and Quora playbook]])
- [ ] Quora, Medium, Dev.to
- [ ] A Google Sheet for tracking (template in [[#📊 Tracking sheet]])

---
## 📅 Week 1 — Foundation (get found + fix the AI blocker)

> Goal of the week: Google and Bing can see and index the site, analytics + tracking are live, the AI-crawler block is removed, and you have your first 3–5 referring domains.

### Day 1 — Google Search Console (GSC)

- **Objective:** Register the site so Google reports impressions, clicks, indexing, and errors.
- **Time:** 30–45 min.
- **Steps:**
  1. Go to `search.google.com/search-console`.
  2. Add property → choose **Domain** (`rajssoidguide.in`) if you can edit DNS, else **URL prefix** (`https://rajssoidguide.in`).
  3. Verify. Easiest for this Next.js site: the **HTML meta tag** method — the layout already has a Google site-verification slot (see [[06 - SEO and Structured Data]] → Metadata). Paste the code, redeploy, click Verify.
- **Why:** Until GSC is verified, you have zero visibility into what Google sees. Everything else builds on this.
- **✅ Done when:** GSC dashboard shows "Ownership verified."

### Day 2 — Submit sitemap + set up Bing

- **Objective:** Tell Google + Bing about all your URLs at once.
- **Time:** 30 min.
- **Steps:**
  1. GSC → Sitemaps → enter `sitemap.xml` → Submit. (Your sitemap lists ~100 URLs across `en` + `hi` — see [[06 - SEO and Structured Data]].)
  2. Go to `bing.com/webmasters` → add site → **Import from GSC** (2 clicks, no re-verification).
  3. Confirm Bing pulled in the sitemap.
- **Why:** Bing powers Microsoft Copilot + some ChatGPT search. Free reach, most people ignore it.
- **✅ Done when:** GSC sitemap status = "Success"; Bing shows the site imported.

### Day 3 — 🔴 Remove the AI-crawler block (highest-leverage fix) — ✅ CODE DONE

- **Objective:** Let AI search engines read (and therefore cite) your guides.
- **Status:** ✅ **`src/app/robots.ts` already edited** (2026-07-06). Now allows `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`; keeps `CCBot` (training-only Common Crawl) blocked. **You just need to deploy + verify.**
- **Remaining steps:**
  1. Deploy the site (your Cloudflare deploy flow — see [[08 - Cloudflare Deployment]]).
  2. Open `https://rajssoidguide.in/robots.txt` and confirm the AI bots are no longer under `Disallow: /`.
- **Why:** A blocked bot literally cannot cite you. This unlocks the entire AEO/GEO channel.
- **✅ Done when:** live `robots.txt` shows the search-and-cite bots allowed.

### Day 4 — Analytics + rank-tracking sheet

- **Objective:** Be able to measure progress.
- **Time:** 45 min.
- **Steps:**
  1. **GA4 is already installed** (`G-3FW9ME1DP2`, the site's native data stream, lazy-loaded — see [[README]] status table). Just confirm it's firing: open the site, then check GA4 → Realtime for your visit. If you prefer privacy-friendly, Cloudflare Web Analytics is an option too.
  2. Build the tracking sheet ([[#📊 Tracking sheet]]). Enter all 15 target queries.
  3. Record **baseline** positions today: search each query in an incognito window (or use Ahrefs Webmaster Tools) and note where you rank (or "not in top 100").
- **✅ Done when:** GA4 Realtime shows your own visit; sheet has 15 baselines.

### Day 5 — Request indexing on your 10 money pages

- **Objective:** Jump the crawl queue for the pages that matter.
- **Time:** 30 min.
- **Steps:** In GSC → **URL Inspection** → paste each URL → **Request Indexing**. Do these 10:
  - `/en/sso-id-login`, `/en/sso-id-registration`, `/en/forgot-sso-id`, `/en/merge-sso-id`
  - `/hi/sso-id-login`, `/hi/sso-id-registration`, `/hi/forgot-sso-id`
  - `/en/tools/otr-fee-calculator`, `/en/exam-calendar`, `/en` (home)
- **Why:** New domains crawl slowly; manual requests can index within hours–days.
- **✅ Done when:** each shows "Indexing requested."

### Day 6 — First 3–5 directory links

- **Objective:** Get the first referring domains so DR leaves zero.
- **Time:** 45 min.
- **Steps:** Submit to instant/free sources (see [[#🔗 Directory + link source list]]):
  1. **Wayback Machine** (`web.archive.org` → "Save Page Now") — snapshot home + 4 money pages. Trusted, permanent.
  2. 2–3 general free web directories that accept informational sites.
- **✅ Done when:** 3–5 new referring domains submitted/live.

### Day 7 — Buffer + review

- **Objective:** Catch up and verify week 1 stuck.
- **Time:** 30 min.
- **Steps:**
  1. GSC → Pages (Indexing) report: are pages moving to "Indexed"? Fix any "Discovered – not indexed" by re-requesting.
  2. Re-verify the robots.txt change is live.
  3. Light day — rest is part of the plan.
- **✅ Done when:** at least the 10 money pages are indexed or "crawled."

---
## 📅 Week 2 — Profiles, social footprint, warming up Reddit

> Goal of the week: build a diverse, natural link + mention footprint (LinkedIn, GitHub, Quora, tool directories, Telegram) and **warm up the Reddit account without posting a single link.**

### Day 8 — Own-property profile links

- **Objective:** Fast, safe links you fully control + first referral traffic.
- **Time:** 45 min.
- **Steps:**
  1. Add `rajssoidguide.in` to **LinkedIn** (Featured section + About), **X/Twitter** bio, **GitHub** profile README + a pinned repo README.
  2. Publish 1 LinkedIn post: *"I built a free, independent SSO ID Rajasthan guide because the official portal confuses people during exam season. Feedback welcome."* + link.
- **Why:** Branded/profile links diversify your backlink profile and look natural to Google.
- **✅ Done when:** site linked from ≥3 profiles + 1 LinkedIn post live.

### Day 9 — Create content profiles + start Reddit (NO links)

- **Objective:** Set up Medium/Dev.to/Quora; begin Reddit karma.
- **Time:** 1 hr.
- **Steps:**
  1. Complete Medium, Dev.to, Quora profiles (add website link where allowed).
  2. **Reddit:** leave 3–5 genuinely helpful comments in r/india, r/Rajasthan, and Indian exam subs. **Zero links.** You're building account age + karma (see [[#🟠 Reddit and Quora playbook]]).
- **✅ Done when:** profiles complete; 3–5 Reddit comments posted; first karma earned.

### Day 10 — Quora answers (real links, real value)

- **Objective:** Links from a domain Google + AI trust, plus direct traffic.
- **Time:** 1 hr.
- **Steps:**
  1. Search Quora for 3 questions like *"How to recover forgotten SSO ID Rajasthan?"*, *"How to make SSO ID?"*
  2. Write a genuinely useful answer in your own words (use the template in [[#🟠 Reddit and Quora playbook]]).
  3. Link the **specific** page (e.g., `/en/forgot-sso-id`), never just the homepage. One link per answer.
- **✅ Done when:** 3 quality Quora answers published.

### Day 11 — Reddit karma building (still no links)

- **Objective:** Cross the karma/age threshold most subs require before you can post.
- **Time:** 30–45 min.
- **Steps:** 5–8 more genuine comments. Answer any SSO/exam question with real help. Upvote-worthy comments = karma.
- **✅ Done when:** account has meaningful comment karma trending up.

### Day 12 — List your free tools

- **Objective:** Links + referral users from tool directories (they rarely reject genuine free tools).
- **Time:** 1 hr.
- **Steps:** Submit these to "free online tools" + calculator directories (see [[#🔗 Directory + link source list]]):
  - OTR Fee Calculator, Photo Resizer, SSO ID Validator, Age Calculator, Pay Matrix Calculator, Scholarship Calculator.
- **✅ Done when:** ≥3 tool directory submissions done.

### Day 13 — Telegram / WhatsApp group seeding

- **Objective:** Real users (engagement signals move rankings more than links).
- **Time:** 45 min.
- **Steps:**
  1. Join 3–5 active Rajasthan exam-prep Telegram channels / WhatsApp groups (RPSC, RSMSSB, Patwari, LDC).
  2. Share the **exam-calendar** or a specific fix page **only where genuinely useful**. Don't spam.
- **✅ Done when:** joined ≥3 groups; shared where relevant.

### Day 14 — Review week 2

- **Objective:** Confirm impressions are starting.
- **Time:** 30 min.
- **Steps:** GSC → Performance. You should see impressions on long-tail queries now. Log positions in the sheet. Note which pages get impressions — those are your winners to double down on.
- **✅ Done when:** sheet updated; ≥1 query showing impressions.

---

## 📅 Week 3 — Content-driven links + light digital PR

> Goal of the week: publish a link-worthy asset, make your first genuine Reddit post, and pitch 8–10 sites for mentions/guest links.

### Day 15 — Publish a linkable asset

- **Objective:** Create the page others will *want* to link/reference.
- **Time:** 1.5–2 hr.
- **Steps:**
  1. Build/upgrade: **"Every SSO ID Login Error and How to Fix It (2026)"** — screenshots, exact error text, step fixes. (You already have troubleshooting content on the home page — expand it into a dedicated, definitive page.)
  2. Wire it into the existing schema + internal-link system (Article + HowTo + FAQPage + Breadcrumb — see [[06 - SEO and Structured Data]]).
  3. Request indexing in GSC.
- **Why:** Definitive, well-structured error guides are the #1 thing Reddit threads and small blogs link to.
- **✅ Done when:** page live, in sitemap, indexing requested.

### Day 16 — First real Reddit post (helpful text post, link in comment)

- **Objective:** Convert warmed-up account into a real post + traffic.
- **Time:** 45 min.
- **Precondition:** enough karma to clear the sub's automod (your 3-year age already clears the age gate; you mainly need karma from Days 9 + 11). If a sub still removes you, keep commenting and move this to Day 20.
- **Steps:**
  1. In r/Rajasthan or a Rajasthan exam sub, post a **text post** (not a link post): *"Common SSO ID login problems before exam deadlines — and the fixes."* Write the actual value in the post body.
  2. Put your link in a **top comment** or only if someone asks / the sub allows in-body links. Read the sub rules first.
- **✅ Done when:** 1 post live and not removed after 1 hour.

### Day 17 — Build outreach list (15 targets)

- **Objective:** Line up editorial/guest links.
- **Time:** 1 hr.
- **Steps:** List 15 targets with contact emails: Rajasthan-focused blogs, student/exam-prep sites, sarkari-result-style sites, small local news micro-sites. Put them in the sheet's "Outreach" tab.
- **✅ Done when:** 15 targets + emails collected.

### Day 18 — Send 8–10 outreach pitches

- **Objective:** Land 2–3 editorial links (big DR movers).
- **Time:** 1 hr.
- **Steps:** Use the outreach template ([[#✉️ Outreach email template]]). Offer a free, accurate SSO resource / guest contribution useful to *their* readers. Personalize the first line for each.
- **✅ Done when:** 8–10 emails sent, logged in sheet.

### Day 19 — More Quora + Reddit value

- **Time:** 45 min.
- **Steps:** 2 new Quora answers; 5 Reddit comments. Track which pages people engage with — that's your demand signal.
- **✅ Done when:** logged.

### Day 20 — Content refresh + reindex

- **Objective:** Freshness signal for ranking + AI citation.
- **Time:** 45 min.
- **Steps:** Make **real** improvements to 2–3 core pages (add a clarifying paragraph, an updated date, a new FAQ), update the "Updated" date, request reindexing.
- **✅ Done when:** 2–3 pages refreshed + reindex requested.

### Day 21 — Review week 3

- **Time:** 30 min.
- **Steps:** Log rankings. Expect some long-tail queries on page 2–3, possibly a featured snippet. Identify Google's favorite pages and plan more like them.
- **✅ Done when:** sheet updated with week-3 positions.

---
## 📅 Week 4 — Amplify + compound

> Goal of the week: follow up on links, publish more long-tail pages, confirm AI citations, and end with 15+ referring domains and a clear upward trend.

### Day 22 — Follow up on outreach

- **Time:** 45 min.
- **Steps:** Send a short, polite follow-up to non-repliers from Day 18. Follow-ups convert more than first emails. Log any wins.
- **✅ Done when:** follow-ups sent; new links logged.

### Day 23 — Roundup + tool directory push

- **Time:** 1 hr.
- **Steps:** Pitch your free tools to "best free calculators / tools" roundup posts and any India-specific tool lists. Ask to be added.
- **✅ Done when:** ≥3 more submissions/pitches done.

### Day 24 — Second Reddit post + AI citation check

- **Time:** 1 hr.
- **Steps:**
  1. Post another genuinely helpful thread in a *different* relevant sub.
  2. **AEO test:** ask ChatGPT (search on), Perplexity, and Google AI Overview: *"How do I recover my SSO ID Rajasthan?"* / *"SSO login not working, how to fix?"* Note whether you're cited. (Only works if Day 3 shipped.)
- **✅ Done when:** post live; AI results recorded in sheet.

### Day 25 — Internal linking sweep

- **Objective:** Funnel authority from ranking long-tail pages → head-term pages.
- **Time:** 1 hr.
- **Steps:** Ensure every long-tail page links to `/sso-id-login` and `/forgot-sso-id` with descriptive anchor text (e.g., "Rajasthan SSO login guide", not "click here"). Use the existing `related.ts` boxes (see [[06 - SEO and Structured Data]] → Internal linking).
- **✅ Done when:** all new pages link to the 2 head-term pages.

### Day 26 — Publish 1–2 more long-tail pages

- **Time:** 1.5 hr.
- **Steps:** Fill gaps: e.g. **"SSO ID captcha not loading — fix"**, **"SSO login not working"**. Wire into schema, add to internal links, request indexing.
- **✅ Done when:** pages live + indexing requested.

### Day 27 — Community engagement (timed to a deadline)

- **Time:** 45 min.
- **Steps:** Share relevant pages in Telegram/WhatsApp groups **timed to a live exam deadline** — traffic spikes hard then (your home page already explains this pattern). Real spikes = strong engagement signals.
- **✅ Done when:** shared to ≥3 groups around a live deadline.

### Day 28 — Backlink + rank audit

- **Time:** 45 min.
- **Steps:** In Ahrefs Webmaster Tools (free) or GSC → Links: count referring domains. Target 15+ → DR ~8–12. Log the number.
- **✅ Done when:** referring-domain count recorded.

### Day 29 — Fix + reindex

- **Time:** 1 hr.
- **Steps:** Address weak spots — thin pages, slow pages (run **PageSpeed Insights on mobile**, aim LCP < 2.5s), missing internal links, orphan pages. Reindex fixed pages.
- **✅ Done when:** issues fixed + reindex requested.

### Day 30 — Full review + month-2 plan

- **Time:** 1 hr.
- **Steps:** Compare every metric to the Day-4 baseline:
  - DR (expect ~8–12) · referring domains (expect 15+) · indexed pages · long-tail positions · featured snippets won · AI citations · GA4 sessions.
  - Write the month-2 plan: keep publishing long-tail (2–3/week), keep earning 3–5 links/week, and *now* start actively targeting `sso id login` with your strongest pages.
- **✅ Done when:** review logged; month-2 plan drafted.

---

## 🎯 Target queries (put these in the tracking sheet)

**Tier 1 — win in weeks (low competition, high intent):**
`forgot sso id` · `sso id kaise banaye` · `sso id merge` · `sso id captcha not loading` · `sso id account locked` · `sso login not working` · `otr fee rajasthan` · `sso id registration jan aadhaar` · `rj sso 9223166166`

**Tier 2 — featured-snippet plays (question format):**
Every "how do I…" / "what is…" query. Your FAQ + HowTo blocks already target these — keep the first sentence of each answer a self-contained 40–60 word answer.

**Tier 3 — head terms (month 2–4, not month 1):**
`sso id login` · `sso id` · `rajasthan sso login` · `sso id registration` · `paymanager salary slip` · `sso id forgot password`

---

## 🟠 Reddit and Quora playbook

### Your actual account status (verified 2026-07-06)

Account **"Kamlesh Choudhary"** — `u/Particular_Assist333`:

| Signal | Value | Meaning |
|--------|:-----:|---------|
| Reddit age | **3 years** | ✅ **Good** — clears the account-age gate that blocks fresh accounts |
| Karma | **1** | ⚠️ Too low — most subs need 50–100+ to post |
| Contributions | **0** | ⚠️ Dormant account; suddenly link-dropping is a spam flag |
| Followers | 0 | Neutral |

**Net:** the 3-year age is a real advantage — you are NOT starting from the worst case. But 1 karma + 0 history means you still can't post links yet. Fix the karma, and a dormant-but-aged account that starts contributing genuinely looks *more* trustworthy than a brand-new one.

### Why you still can't just drop your link today

1. **Automod removes it** — most India/exam subs require minimum **karma** (50–100+). Age you have; karma you don't.
2. **Dormant-reactivation flag** — a 3-year-old account with 0 contributions that suddenly posts the same URL repeatedly is a known spam pattern. Ramp up genuinely first.
3. **Domain ban** — a mod can ban the domain across the sub, poisoning it long-term.

**Because your age gate is already cleared, you can likely compress the warm-up:** ~1 week of genuine commenting to build karma (instead of the 2 weeks a brand-new account needs), then start posting. Reddit is one of your **best** channels (students genuinely ask SSO questions there, and Google + AI surface Reddit heavily) — so don't burn it by rushing the link.

### The rules

- **9:1 ratio** — nine genuinely helpful comments for every one that contains a link.
- **Warm up first** — comment for ~2 weeks before any post/link (Days 9, 11, 16).
- **Link the specific page**, never the homepage, and only when it truly answers the question.
- **Read each sub's rules** before posting. Target subs: r/Rajasthan, r/india, exam-prep subs.

### Quora answer template

```
[Direct answer in the first 1–2 sentences — the fastest fix.]

For example, to recover a forgotten SSO ID the quickest way is to SMS
'RJ SSO' to 9223166166 from your registered mobile — the ID comes back
by SMS in seconds.

[2–4 sentences of extra detail: the online method, a common mistake,
what to do if it fails.]

I wrote a fuller step-by-step (with the locked-account and OTP-not-arriving
cases) here: [link to the SPECIFIC page].
```

### Reddit text-post template (Day 16)

```
Title: Common SSO ID login problems before exam deadlines (and the fixes)

Every exam season the SSO portal gets hammered and people get locked out
right before a deadline. The 4 issues I see most:

1. Account locked after 3 wrong tries → wait 30 min, use Forgot Password.
2. OTP not arriving → confirm the mobile is Aadhaar-seeded; try email OTP.
3. Captcha won't load → use Chrome/Firefox, refresh the captcha.
4. Forgot the SSO ID itself → SMS 'RJ SSO' to 9223166166.

Happy to answer specific cases in the comments.
```
(Put the link in a comment if asked, or if the sub allows in-body links.)

---

## ✉️ Outreach email template

```
Subject: Free SSO ID guide resource for your [Rajasthan/exam] readers

Hi [Name],

I run rajssoidguide.in — a free, independent guide to the Rajasthan SSO
portal (login, registration, forgot-ID recovery, OTR). It's not affiliated
with the government; it just explains the confusing parts in plain language.

Your post on [specific page] mentions SSO login — if it's useful to your
readers, a link to [specific relevant page] would give them the exact
step-by-step. Happy to also write a short, original section for you at no
cost.

Either way, thanks for the useful content on [their site].

Kamlesh
[LinkedIn]
```

Keep it short, personalized in the first line, and offer value to *their* readers — not to you.

---

## 🔗 Directory + link source list

> Prioritize relevance + legitimacy over quantity. Avoid paid link farms / PBNs — for a government-adjacent (YMYL) site they can trigger a trust penalty.

**Instant / free (Week 1):**
- Wayback Machine (`web.archive.org` → Save Page Now) — snapshot all money pages
- General free web directories that accept informational sites

**Profile links (Week 2):**
- LinkedIn (Featured + About), X/Twitter bio, GitHub profile + repo README
- Medium, Dev.to, Quora profiles

**Tool directories (Week 2–4):** for your free calculators/tools
- "Free online tools" lists, calculator directories, India-specific tool roundups

**Community (real users + natural shares):**
- Reddit (r/Rajasthan, r/india, exam subs) — per the playbook above
- Rajasthan exam Telegram channels + WhatsApp groups (RPSC/RSMSSB/Patwari/LDC)
- Quora spaces on Rajasthan government exams

**Editorial / guest (Week 3–4):**
- Rajasthan-focused blogs, student/exam-prep sites, sarkari-result-style sites, local news micro-sites

---

## 📊 Tracking sheet

Create a Google Sheet with these tabs:

**Tab 1 — Rankings** (update weekly)

| Query | Baseline (Day 4) | Wk1 | Wk2 | Wk3 | Wk4 | Target URL |
|-------|:---:|:---:|:---:|:---:|:---:|-----------|
| forgot sso id | | | | | | /en/forgot-sso-id |
| sso id kaise banaye | | | | | | /hi/sso-id-registration |
| … (all 15) | | | | | | |

**Tab 2 — Links** (log every referring domain)

| Date | Source domain | Type (directory/profile/editorial/tool) | Page linked | Live? |
|------|--------------|------------------------------------------|-------------|:-----:|

**Tab 3 — Outreach**

| Date | Target site | Contact email | Sent? | Follow-up? | Result |
|------|-------------|---------------|:-----:|:----------:|--------|

**Tab 4 — AI citations** (test monthly)

| Query | ChatGPT | Perplexity | Google AI Overview | Cited you? |
|-------|:-------:|:----------:|:------------------:|:----------:|

**Tab 5 — Metrics** (Day 4 baseline vs Day 30)

| Metric | Day 4 | Day 30 | Source |
|--------|:-----:|:------:|--------|
| DR | 0 | | Ahrefs WT |
| Referring domains | 0 | | Ahrefs WT / GSC |
| Indexed pages | | | GSC |
| GA4 sessions/wk | | | GA4 |
| Featured snippets | 0 | | manual |

---

## ✅ Two rules that matter most (for a beginner)

1. **Help first, link rarely.** On Reddit/Quora, one spammy week can get your account *and* domain banned. Genuine answers build karma + trust — then links stick.
2. **Don't chase `sso id` #1 in month 1.** Own the "SSO is broken, help me" intent (forgot ID, locked, captcha, OTP, merge). Win those, and the head terms follow as authority compounds.

---

## 🔗 Related

[[06 - SEO and Structured Data]] · [[10 - Content Playbook]] · [[12 - Roadmap and Improvements]] · [[05 - Content Inventory]] · [[README]]
