import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { LatestUpdates } from "@/components/LatestUpdates";
import { ShareBar } from "@/components/ShareBar";
import { exams, services, cities, scholarships } from "@/lib/content";
import { homeContent } from "@/data/home";
import { homeMeta } from "@/data/homeMeta";
import { homeGuide as g } from "@/data/homeGuide";
import { homeExtra as x } from "@/data/homeExtra";
import { ATTRIBUTION } from "@/lib/attribution";
import {
  serviceGroups,
  serviceGroupsTitle,
  serviceGroupsIntro,
} from "@/data/serviceGroups";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  howToSchema,
  ssoGovernmentService,
  webPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ogImage = site.assets.ogImage[locale];
  const isHi = locale === "hi";
  return {
    title: homeContent.metaTitle[locale],
    description: homeContent.metaDescription[locale],
    keywords: isHi
      ? [
          "SSO ID",
          "SSO ID लॉगिन",
          "SSOID",
          "SSO पोर्टल राजस्थान",
          "राजस्थान सिंगल साइन ऑन",
          "sso.rajasthan.gov.in",
        ]
      : [
          "SSO ID",
          "SSO ID Login",
          "SSOID",
          "SSO Portal Rajasthan",
          "Rajasthan Single Sign On",
          "sso.rajasthan.gov.in",
        ],
    alternates: {
      canonical: canonicalFor(locale, "/"),
      ...alternates("/"),
    },
    openGraph: {
      title: homeContent.metaTitle[locale],
      description: homeContent.metaDescription[locale],
      url: canonicalFor(locale, "/"),
      type: "article",
      locale: isHi ? "hi_IN" : "en_IN",
      alternateLocale: isHi ? "en_IN" : "hi_IN",
      publishedTime: homeMeta.published,
      modifiedTime: homeMeta.modified,
      authors: [ATTRIBUTION.url],
      images: [
        {
          url: ogImage,
          secureUrl: `${site.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: isHi
            ? "SSO ID राजस्थान गाइड — लॉगिन और रजिस्ट्रेशन overview"
            : "SSO ID Rajasthan guide — login and registration overview",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      title: homeContent.metaTitle[locale],
      description: homeContent.metaDescription[locale],
      creator: ATTRIBUTION.handle,
    },
    other: {
      "article:author": ATTRIBUTION.linkedin,
      "article:published_time": homeMeta.published,
      "article:modified_time": homeMeta.modified,
      "article:section": isHi ? "सरकारी सेवाएं" : "Government Services",
      "article:tag": isHi
        ? ["SSO ID", "राजस्थान सरकार", "SSO लॉगिन"]
        : ["SSO ID", "Rajasthan Government", "SSO Login"],
      "revisit-after": "7 days",
      bingbot: "index, follow, max-snippet:-1, max-image-preview:large",
      "geo.region": site.geo.region,
      "geo.placename": site.geo.placename,
      "geo.position": site.geo.position,
      ICBM: site.geo.icbm,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const c = homeContent;
  const base = `/${loc}`;

  const graph = buildGraph([
    webPageSchema({
      name: c.metaTitle[loc],
      description: c.metaDescription[loc],
      path: `/${loc}`,
      locale: loc,
      datePublished: homeMeta.published,
      dateModified: homeMeta.modified,
      speakableSelectors: ["#what-is-sso", "h1"],
      about: ssoGovernmentService(loc),
    }),
    howToSchema(
      c.loginTitle[loc],
      c.loginSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    howToSchema(
      c.registerTitle[loc],
      c.registerSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    howToSchema(
      x.otrTitle[loc],
      x.otrSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    howToSchema(
      x.mergeTitle[loc],
      x.mergeSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    faqSchema(c.faqs[loc]),
    breadcrumbSchema([
      { name: loc === "hi" ? "होम" : "Home", path: `/${loc}` },
    ]),
  ]);

  return (
    <div className="space-y-12">
      <JsonLd data={graph} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-white px-6 py-12 text-center sm:px-10 sm:py-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          sso.rajasthan.gov.in
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {c.h1[loc]}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {c.heroLead[loc]}
        </p>

        {/* Author byline + last-updated badge — E-E-A-T / GEO trust signals */}
        <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm text-zinc-500">
          <span>
            {homeMeta.byPrefix[loc]}{" "}
            <a
              href={ATTRIBUTION.linkedin}
              target="_blank"
              rel="author noopener"
              className="font-semibold text-zinc-700 hover:text-amber-700"
            >
              {ATTRIBUTION.name}
            </a>
          </span>
          <span aria-hidden>·</span>
          <time dateTime={homeMeta.modified}>{homeMeta.updatedLabel[loc]}</time>
          <span aria-hidden>·</span>
          <span className="font-medium text-green-600">✓ {homeMeta.reviewedWeekly[loc]}</span>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={`${base}/sso-id-login`}
            className="rounded-full bg-amber-700 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
          >
            {t.nav.login}
          </Link>
          <Link
            href={`${base}/sso-id-registration`}
            className="rounded-full border border-zinc-300 bg-white px-7 py-3 font-semibold text-zinc-800 transition hover:border-amber-500"
          >
            {t.nav.registration}
          </Link>
        </div>

        <dl className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3">
          {c.stats[loc].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur"
            >
              <dt className="text-2xl font-bold text-amber-700">{s.value}</dt>
              <dd className="mt-1 text-xs text-zinc-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Independent guide disclaimer */}
      <aside className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/60 px-5 py-4">
        <span
          aria-hidden
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm text-amber-800"
        >
          i
        </span>
        <p className="text-sm leading-relaxed text-amber-900">{x.disclaimer[loc]}</p>
      </aside>

      {/* Share bar — top */}
      <ShareBar
        path={`/${loc}`}
        title={homeMeta.shareTitle[loc]}
        label={homeMeta.shareLabel[loc]}
        locale={loc}
      />

      {/* Quick action box — above-the-fold task router */}
      <section aria-labelledby="quick-action-heading" className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
        <h2 id="quick-action-heading" className="sr-only">
          {homeMeta.quickActionTitle[loc]}
        </h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-900 text-left text-white">
              <th className="px-4 py-3 font-semibold">{homeMeta.quickActionCols[loc][0]}</th>
              <th className="px-4 py-3 font-semibold">{homeMeta.quickActionCols[loc][1]}</th>
            </tr>
          </thead>
          <tbody>
            {homeMeta.quickActions.map((q, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                <td className="px-4 py-3 font-medium text-zinc-800">{q.need[loc]}</td>
                <td className="px-4 py-3">
                  {q.href ? (
                    <Link href={`${base}${q.href}`} className="text-amber-700 hover:underline">
                      {q.action[loc]}
                    </Link>
                  ) : (
                    <span className="text-zinc-700">{q.action[loc]}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* SMS recovery callout — high-intent direct answer */}
      <aside className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50/60 px-5 py-4">
        <span aria-hidden className="mt-0.5 text-lg">📱</span>
        <div>
          <h2 className="font-semibold text-green-900">{homeMeta.smsTitle[loc]}</h2>
          <p className="mt-1 text-sm leading-relaxed text-green-900">{homeMeta.smsBody[loc]}</p>
        </div>
      </aside>

      {/* Quick access */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/sso-id-login", label: t.nav.login },
          { href: "/sso-id-registration", label: t.nav.registration },
          { href: "/forgot-sso-id", label: t.nav.forgot },
          { href: "/merge-sso-id", label: loc === "hi" ? "आईडी मर्ज" : "Merge ID" },
        ].map((q) => (
          <Link
            key={q.href}
            href={`${base}${q.href}`}
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-medium text-zinc-800 transition hover:border-amber-500 hover:shadow-sm"
          >
            <span>{q.label}</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-700 transition group-hover:bg-amber-700 group-hover:text-white">
              →
            </span>
          </Link>
        ))}
      </section>

      {/* Latest Updates */}
      <LatestUpdates
        title={t.common.latestUpdates}
        locale={loc}
        limit={5}
        viewAllHref={`${base}/updates`}
        viewAllLabel={t.common.viewAll}
      />

      {/* Why searches spike — exam season (contextual link to Exam Calendar) */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "परीक्षा सीज़न" : "Exam season"}
          title={homeMeta.examSeason.title[loc]}
          intro={homeMeta.examSeason.body[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
        <p className="mt-4 leading-relaxed text-zinc-700">
          {homeMeta.examSeason.linkPre[loc]}{" "}
          <Link
            href={`${base}/exam-calendar`}
            className="font-medium text-amber-700 hover:underline"
          >
            {homeMeta.examSeason.linkText[loc]}
          </Link>{" "}
          {homeMeta.examSeason.linkPost[loc]}
        </p>
      </section>

      {/* What is SSO ID */}
      <section id="what-is-sso">
        {/* Direct answer box — AEO featured-snippet + GEO target */}
        <div className="mb-6 rounded-r-xl border-l-4 border-amber-500 bg-amber-50/60 px-5 py-4">
          <p className="text-base leading-relaxed text-zinc-800">
            {homeMeta.directAnswer[loc]}
          </p>
        </div>
        <SectionHeading
          eyebrow={loc === "hi" ? "परिचय" : "Overview"}
          title={c.whatTitle[loc]}
          intro={c.whatBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
      </section>

      {/* Why is SSO ID Important */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50/30 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-amber-900">
          {c.whyImportantTitle[loc]}
        </h2>
        <div className="mt-4 space-y-3 leading-relaxed text-zinc-700">
          {c.whyImportantBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {c.whyImportantPoints[loc].map((point, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* User Categories */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "उपयोगकर्ता" : "Who can use"}
          title={c.userCategoriesTitle[loc]}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {c.userCategories[loc].map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Major Services */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "सेवाएं" : "Services"}
          title={serviceGroupsTitle[loc]}
          intro={<p>{serviceGroupsIntro[loc]}</p>}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {serviceGroups[loc].map((group) => (
            <div
              key={group.audience}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 border-b border-zinc-100 bg-gradient-to-r from-amber-50 to-white px-5 py-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-amber-100"
                >
                  {group.icon}
                </span>
                <h3 className="font-semibold text-zinc-900">{group.audience}</h3>
              </div>
              <ul className="divide-y divide-zinc-100">
                {group.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex gap-3 px-5 py-3.5 transition hover:bg-amber-50/40"
                  >
                    <span
                      aria-hidden
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                    />
                    <div>
                      <p className="text-sm font-medium text-zinc-900">
                        {service.name}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                        {service.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Login steps */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeading
          eyebrow={loc === "hi" ? "लॉगिन" : "Login"}
          title={c.loginTitle[loc]}
        />
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {c.loginSteps[loc].map((step, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5 text-zinc-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Who needs SSO ID */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "पात्रता" : "Eligibility"}
          title={g.whoNeedsTitle[loc]}
        />
        <div className="mt-5 overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{g.whoNeedsCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{g.whoNeedsCols[loc][1]}</th>
              </tr>
            </thead>
            <tbody>
              {g.whoNeeds[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.a}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Documents needed */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeading
          eyebrow={loc === "hi" ? "तैयारी" : "Get ready"}
          title={g.documentsTitle[loc]}
        />
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {g.documents[loc].map((d, i) => (
            <li
              key={i}
              className="flex gap-2.5 rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3"
            >
              <span className="mt-0.5 text-amber-600">•</span>
              <span className="text-sm text-zinc-700">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Registration options */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "रजिस्ट्रेशन" : "Registration"}
          title={g.registrationTitle[loc]}
        />
        <div className="mt-6 space-y-5">
          {g.registrationOptions[loc].map((opt, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-zinc-900">{opt.title}</h3>
              <ol className="mt-3 space-y-2">
                {opt.steps.map((s, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                      {j + 1}
                    </span>
                    <span className="text-sm text-zinc-700">{s}</span>
                  </li>
                ))}
              </ol>
              {opt.note && (
                <p className="mt-3 rounded-lg bg-amber-50/60 px-3 py-2 text-xs text-amber-900">
                  {opt.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recovery scenarios */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "रिकवरी" : "Recovery"}
          title={g.recoveryTitle[loc]}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {g.recoveryScenarios[loc].map((sc, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-zinc-900">{sc.title}</h3>
              <ol className="mt-3 space-y-2">
                {sc.steps.map((s, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                      {j + 1}
                    </span>
                    <span className="text-sm text-zinc-700">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* OTR — One Time Registration */}
      <section className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-amber-50/30 p-6 sm:p-8">
        <SectionHeading
          eyebrow={loc === "hi" ? "भर्ती" : "Recruitment"}
          title={x.otrTitle[loc]}
          intro={x.otrIntro[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
        <ol className="mt-6 space-y-3">
          {x.otrSteps[loc].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5 text-zinc-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="mt-7 text-lg font-semibold text-zinc-900">
          {x.otrFeeTitle[loc]}
        </h3>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{x.otrFeeCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{x.otrFeeCols[loc][1]}</th>
              </tr>
            </thead>
            <tbody>
              {x.otrFees[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.a}</td>
                  <td className="px-4 py-3 font-semibold text-amber-700">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-xl bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-900">
          {x.otrNote[loc]}
        </p>
      </section>

      {/* Merge duplicate SSO IDs */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "खाता प्रबंधन" : "Account"}
          title={x.mergeTitle[loc]}
          intro={x.mergeIntro[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
        <div className="mt-6 rounded-2xl border border-zinc-200 p-6">
          <ol className="space-y-3">
            {x.mergeSteps[loc].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-zinc-700">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 flex gap-2.5 rounded-xl bg-red-50/60 px-4 py-3 text-sm leading-relaxed text-red-900">
            <span aria-hidden>⚠</span>
            <span>{x.mergeNote[loc]}</span>
          </p>
        </div>
      </section>

      {/* Jan Aadhaar update */}
      <section className="rounded-3xl border border-amber-100 bg-amber-50/30 p-6 sm:p-8">
        <SectionHeading
          eyebrow={loc === "hi" ? "जन आधार" : "Jan Aadhaar"}
          title={x.janTitle[loc]}
          tone="amber"
          intro={<p>{x.janIntro[loc]}</p>}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {x.janPhases[loc].map((phase, i) => (
            <div
              key={i}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-zinc-900">{phase.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {phase.steps.map((s, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-zinc-700">
                    <span className="mt-1 text-amber-600">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-7 text-lg font-semibold text-zinc-900">
          {x.janDocTitle[loc]}
        </h3>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-amber-100 bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{x.janDocCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{x.janDocCols[loc][1]}</th>
              </tr>
            </thead>
            <tbody>
              {x.janDocs[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/40"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.a}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-xl bg-white/70 px-4 py-3 text-sm leading-relaxed text-zinc-700">
          {x.janNote[loc]}
        </p>
      </section>

      {/* Internal links: exams, scholarships, cities */}
      <section className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h2 className="font-semibold text-zinc-900">{t.nav.exams}</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {exams.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`${base}/exam/${e.slug}`}
                  className="text-amber-700 hover:underline"
                >
                  {e.name[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h2 className="font-semibold text-zinc-900">
            {loc === "hi" ? "छात्रवृत्ति" : "Scholarships"}
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {scholarships.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`${base}/scholarship/${s.slug}`}
                  className="text-amber-700 hover:underline"
                >
                  {s.name[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h2 className="font-semibold text-zinc-900">{t.nav.services}</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`${base}/service/${s.slug}`}
                  className="text-amber-700 hover:underline"
                >
                  {s.name[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cities */}
      <section>
        <h2 className="font-semibold">
          {loc === "hi" ? "शहर अनुसार मदद" : "Help by city"}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`${base}/city/${city.slug}`}
              className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm hover:border-amber-500"
            >
              {city.name[loc]}
            </Link>
          ))}
        </div>
      </section>

      {/* Common errors */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "समस्या समाधान" : "Troubleshooting"}
          title={g.errorsTitle[loc]}
        />
        <div className="mt-5 overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{g.errorsCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{g.errorsCols[loc][1]}</th>
                <th className="px-4 py-3 font-semibold">{g.errorsCols[loc][2]}</th>
              </tr>
            </thead>
            <tbody>
              {g.errors[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.message}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.meaning}</td>
                  <td className="px-4 py-3 text-zinc-600">{r.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile app */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50/30 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-amber-900">{g.appTitle[loc]}</h2>
        <p className="mt-3 leading-relaxed text-zinc-700">{g.appBody[loc]}</p>
      </section>

      {/* Pre-register checklist */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeading
          eyebrow={loc === "hi" ? "चेकलिस्ट" : "Checklist"}
          title={g.checklistTitle[loc]}
        />
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {g.checklist[loc].map((item, i) => (
            <li
              key={i}
              className="flex gap-2.5 rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3"
            >
              <span className="mt-0.5 text-amber-600">✓</span>
              <span className="text-sm text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick reference */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "सारांश" : "At a glance"}
          title={g.quickRefTitle[loc]}
        />
        <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {g.quickRef[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <th scope="row" className="w-1/2 px-4 py-3 text-left font-medium text-zinc-700">
                    {r.a}
                  </th>
                  <td className="w-1/2 px-4 py-3 text-zinc-600">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Official helpline & contacts */}
      <section>
        <SectionHeading
          eyebrow={loc === "hi" ? "सहायता" : "Support"}
          title={x.helplineTitle[loc]}
        />
        <div className="mt-5 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">{x.helplineCols[loc][0]}</th>
                <th className="px-4 py-3 font-semibold">{x.helplineCols[loc][1]}</th>
              </tr>
            </thead>
            <tbody>
              {x.helplines[loc].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{r.a}</td>
                  <td className="px-4 py-3 font-semibold text-amber-700">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          {x.helplineNote[loc]}
        </p>
      </section>

      {/* About this guide — E-E-A-T: independence, authorship, cited sources */}
      <section
        id="about-this-guide"
        aria-labelledby="about-heading"
        className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6"
      >
        <h2 id="about-heading" className="font-semibold text-zinc-900">
          {homeMeta.aboutTitle[loc]}
        </h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
          {homeMeta.aboutBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <span aria-hidden>📋</span>
          {homeMeta.sourcesTitle[loc]}
        </h3>
        <p className="mt-1 text-xs text-zinc-500">{homeMeta.sourcesIntro[loc]}</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-zinc-700">
          {homeMeta.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-amber-800 underline underline-offset-2 hover:text-amber-900"
              >
                {s.url.replace("https://", "")}
              </a>{" "}
              — {s.label[loc]}
            </li>
          ))}
        </ol>

        <div className="mt-6 border-t border-zinc-200 pt-4 text-sm text-zinc-600">
          <p>
            {homeMeta.authorBioPrefix[loc]}{" "}
            <a
              href={ATTRIBUTION.linkedin}
              target="_blank"
              rel="author noopener"
              className="font-semibold text-zinc-800 hover:text-amber-700"
            >
              {ATTRIBUTION.name}
            </a>
            {" — "}
            {homeMeta.authorBio[loc].split("—")[1]?.trim() ?? homeMeta.authorBio[loc]}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            <a href={ATTRIBUTION.linkedin} target="_blank" rel="noopener" className="text-amber-700 hover:underline">
              LinkedIn
            </a>
            <span aria-hidden className="text-zinc-300">·</span>
            <a href={ATTRIBUTION.url} target="_blank" rel="noopener" className="text-amber-700 hover:underline">
              {loc === "hi" ? "पोर्टफोलियो" : "Portfolio"}
            </a>
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            {homeMeta.correctionNote[loc].split(homeMeta.contactCta[loc])[0]}
            <Link href={`${base}/contact`} className="text-amber-700 underline">
              {homeMeta.contactCta[loc]}
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title={t.common.faqTitle} faqs={c.faqs[loc]} />

      {/* Safety Tips */}
      <section className="rounded-2xl border border-red-100 bg-red-50/20 p-6">
        <h2 className="text-2xl font-bold tracking-tight text-red-900">
          {c.safetyTitle[loc]}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {c.safetyTips[loc].map((tip, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-0.5 text-red-600">🔒</span>
              <span className="text-sm leading-relaxed text-zinc-700">
                {tip}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-900 px-6 py-8 text-center text-white sm:px-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          {loc === "hi" ? "कोई प्रश्न या सुझाव?" : "Have a question or suggestion?"}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-300">
          {loc === "hi"
            ? "हमारी संपादकीय टीम से संपर्क करें या किसी गलत जानकारी की रिपोर्ट करें।"
            : "Reach our editorial team or report incorrect information on any page."}
        </p>
        <Link
          href={`${base}/contact`}
          className="mt-5 inline-block rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
        >
          {loc === "hi" ? "संपर्क करें" : "Contact Us"}
        </Link>
      </section>

      {/* Share bar — bottom */}
      <div className="flex justify-center">
        <ShareBar
          path={`/${loc}`}
          title={homeMeta.shareTitle[loc]}
          label={homeMeta.shareLabel[loc]}
          locale={loc}
        />
      </div>

      <p className="text-center text-sm text-zinc-500">
        {t.common.officialPortalNote}{" "}
        <a
          href={site.officialPortal}
          rel="nofollow noopener"
          className="text-amber-700 underline"
        >
          {site.officialPortal.replace("https://", "")}
        </a>
      </p>
    </div>
  );
}
