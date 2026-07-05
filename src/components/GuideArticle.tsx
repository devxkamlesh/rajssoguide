import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import type { Guide } from "@/data/guides";
import { FaqSection } from "./FaqSection";
import { HowToSection } from "./HowToSection";

export function GuideArticle({
  guide,
  locale,
}: {
  guide: Guide;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const portalHost = site.officialPortal.replace("https://", "");

  return (
    <article>
      {/* Official portal link at the top */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-amber-800">
            {locale === "hi" ? "आधिकारिक पोर्टल" : "Official Portal"}
          </p>
          <p className="text-sm font-semibold text-zinc-800">{portalHost}</p>
        </div>
        <a
          href={site.officialPortal}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          {locale === "hi" ? "पोर्टल खोलें →" : "Visit Portal →"}
        </a>
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">
        {guide.title[locale]}
      </h1>
      <p className="mt-3 text-lg text-zinc-600">{guide.intro[locale]}</p>
      <p className="mt-2 text-sm text-zinc-500">
        {t.common.lastVerified}: {guide.lastVerified}
      </p>

      <div className="mt-6 space-y-4 leading-relaxed text-zinc-700">
        {guide.body[locale].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Optional prose sections */}
      {guide.sections?.map((sec, i) => (
        <section key={i} className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {sec.title[locale]}
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
            {sec.body[locale].map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* Optional data tables */}
      {guide.tables?.map((tbl, i) => (
        <section key={i} className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {tbl.title[locale]}
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-zinc-900 text-left text-white">
                  {tbl.cols[locale].map((c, j) => (
                    <th key={j} className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tbl.rows[locale].map((row, r) => (
                  <tr key={r} className={r % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
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
      ))}

      <HowToSection title={t.common.steps} steps={guide.steps[locale]} />
      <FaqSection title={t.common.faqTitle} faqs={guide.faqs[locale]} />

      <p className="mt-10 text-sm text-zinc-500">
        {t.common.officialPortalNote}{" "}
        <a
          href={site.officialPortal}
          target="_blank"
          rel="nofollow noopener"
          className="text-amber-700 underline"
        >
          {portalHost}
        </a>
      </p>
    </article>
  );
}
