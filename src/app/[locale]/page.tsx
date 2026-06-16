import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { LatestUpdates } from "@/components/LatestUpdates";
import { exams, services, cities, scholarships } from "@/lib/content";
import { homeContent } from "@/data/home";
import { homeGuide as g } from "@/data/homeGuide";
import { site } from "@/lib/site";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  howToSchema,
  itemListSchema,
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
  return {
    title: homeContent.metaTitle[locale],
    description: homeContent.metaDescription[locale],
    alternates: {
      canonical: canonicalFor(locale, "/"),
      ...alternates("/"),
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
    howToSchema(
      c.loginTitle[loc],
      c.loginSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    howToSchema(
      c.registerTitle[loc],
      c.registerSteps[loc].map((text, i) => ({ name: `Step ${i + 1}`, text })),
    ),
    faqSchema(c.faqs[loc]),
    breadcrumbSchema([
      { name: loc === "hi" ? "होम" : "Home", path: `/${loc}` },
    ]),
    itemListSchema(
      exams.map((e) => ({ name: e.name[loc], path: `${base}/exam/${e.slug}` })),
    ),
    itemListSchema(
      scholarships.map((s) => ({ name: s.name[loc], path: `${base}/scholarship/${s.slug}` })),
    ),
    itemListSchema(
      services.map((s) => ({ name: s.name[loc], path: `${base}/service/${s.slug}` })),
    ),
    itemListSchema(
      cities.map((c) => ({ name: c.name[loc], path: `${base}/city/${c.slug}` })),
    ),
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

      {/* What is SSO ID */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{c.whatTitle[loc]}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
          {c.whatBody[loc].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
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
        <h2 className="text-2xl font-bold tracking-tight">
          {c.userCategoriesTitle[loc]}
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {c.userCategories[loc].map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
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
        <h2 className="text-2xl font-bold tracking-tight">
          {c.majorServicesTitle[loc]}
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.majorServices[loc].map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-amber-50/20 p-5 shadow-sm"
            >
              <h3 className="font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">
          {c.benefitsTitle[loc]}
        </h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {c.benefitsPoints[loc].map((benefit, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Login + Registration steps */}
      <section className="grid gap-8 md:grid-cols-2">
        {[
          { title: c.loginTitle[loc], steps: c.loginSteps[loc] },
          { title: c.registerTitle[loc], steps: c.registerSteps[loc] },
        ].map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <h2 className="text-xl font-semibold">{block.title}</h2>
            <ol className="mt-4 space-y-3">
              {block.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                    {i + 1}
                  </span>
                  <span className="text-zinc-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      {/* Who needs SSO ID */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{g.whoNeedsTitle[loc]}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
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
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">{g.documentsTitle[loc]}</h2>
        <ul className="mt-5 space-y-2.5">
          {g.documents[loc].map((d, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">•</span>
              <span className="text-zinc-700">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Registration options */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{g.registrationTitle[loc]}</h2>
        <div className="mt-5 space-y-5">
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
        <h2 className="text-2xl font-bold tracking-tight">{g.recoveryTitle[loc]}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
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

      {/* Services */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">
          {c.servicesTitle[loc]}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {c.services[loc].map((s) => (
            <div
              key={s}
              className="rounded-lg border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700"
            >
              {s}
            </div>
          ))}
        </div>
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
        <h2 className="text-2xl font-bold tracking-tight">{g.errorsTitle[loc]}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
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
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">{g.checklistTitle[loc]}</h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {g.checklist[loc].map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1 text-amber-600">✓</span>
              <span className="text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick reference */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">{g.quickRefTitle[loc]}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
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
