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
