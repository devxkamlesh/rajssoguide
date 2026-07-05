import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ImportantLinks } from "@/components/ImportantLinks";
import { FaqSection } from "@/components/FaqSection";
import { services, getService } from "@/lib/content";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { serviceBody } from "@/lib/pageContent";
import { getServiceContent } from "@/data/serviceContent";
import { relatedForService, importantLinksForService } from "@/lib/related";
import {
  alternates,
  breadcrumbSchema,
  buildGraph,
  canonicalFor,
  faqSchema,
  howToSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getService(slug);
  if (!s || !isLocale(locale)) return {};
  const rich = getServiceContent(slug, locale);
  return {
    title: rich?.metaTitle ?? `${s.name[locale]} — SSO Login Guide`,
    description: rich?.metaDescription ?? s.purpose[locale],
    keywords: s.keywords,
    alternates: {
      canonical: canonicalFor(locale, `/service/${slug}`),
      ...alternates(`/service/${slug}`),
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const s = getService(slug);
  if (!s) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const rich = getServiceContent(slug, loc);

  const breadcrumb = breadcrumbSchema([
    { name: t.common.home, path: `/${loc}` },
    { name: t.nav.services, path: `/${loc}/services` },
    { name: s.name[loc], path: `/${loc}/service/${slug}` },
  ]);

  // Build schema: include HowTo for each steps block and FAQ when rich content exists.
  const schemaItems = [breadcrumb];
  if (rich) {
    for (const block of rich.blocks) {
      if (block.type === "steps") {
        schemaItems.push(howToSchema(block.title, block.steps));
      }
    }
    if (rich.faqs.length) schemaItems.push(faqSchema(rich.faqs));
  }
  const graph = buildGraph(schemaItems);

  return (
    <article>
      <JsonLd data={graph} />
      <Breadcrumbs
        items={[
          { name: t.common.home, href: `/${loc}` },
          { name: t.nav.services, href: `/${loc}/services` },
          { name: s.name[loc] },
        ]}
      />

      {rich ? (
        <>
          {rich.portalNote && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-800">
                  {loc === "hi" ? "आधिकारिक पोर्टल" : "Official Portal"}
                </p>
                <p className="text-sm font-semibold text-zinc-800">
                  {rich.portalNote}
                </p>
              </div>
              <a
                href={`https://${rich.portalNote}`}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                {loc === "hi" ? "पोर्टल खोलें →" : "Visit Portal →"}
              </a>
            </div>
          )}

          <h1 className="mt-6 text-3xl font-bold tracking-tight">{rich.h1}</h1>
          <p className="mt-3 text-lg text-zinc-600">{rich.intro}</p>
          <p className="mt-2 text-sm text-zinc-500">
            {t.common.lastVerified}: {rich.lastVerified}
          </p>

          {rich.blocks.map((block, i) => {
            if (block.type === "section") {
              return (
                <section key={i} className="mt-8">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {block.title}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
                    {block.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              );
            }
            if (block.type === "steps") {
              return (
                <section key={i} className="mt-8">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {block.title}
                  </h2>
                  <ol className="mt-4 space-y-3">
                    {block.steps.map((step, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-white">
                          {j + 1}
                        </span>
                        <span className="pt-0.5 text-zinc-700">
                          <span className="font-medium text-zinc-900">
                            {step.name}.
                          </span>{" "}
                          {step.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            }
            // table
            return (
              <section key={i} className="mt-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {block.title}
                </h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-left text-white">
                        {block.cols.map((c, j) => (
                          <th key={j} className="px-4 py-3 font-semibold">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr
                          key={r}
                          className={r % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                        >
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={
                                c === 0
                                  ? "px-4 py-3 font-medium text-zinc-800"
                                  : "px-4 py-3 text-zinc-600"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          <FaqSection title={t.common.faqTitle} faqs={rich.faqs} />
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold tracking-tight">{s.name[loc]}</h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {s.purpose[loc]}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-zinc-700">
            {serviceBody(s, loc).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </>
      )}

      <ImportantLinks
        title={loc === "hi" ? "महत्वपूर्ण लिंक" : "Important Links"}
        rows={importantLinksForService(loc)}
      />

      <RelatedLinks title={t.common.related} links={relatedForService(slug, loc)} />
    </article>
  );
}
