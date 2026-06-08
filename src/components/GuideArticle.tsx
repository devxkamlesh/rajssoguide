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
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">
        {guide.title[locale]}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        {guide.intro[locale]}
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        {t.common.lastVerified}: {guide.lastVerified} ·{" "}
        <a href={site.officialPortal} rel="nofollow noopener" className="underline">
          {t.common.officialPortalNote}
        </a>
      </p>

      <HowToSection title={t.common.steps} steps={guide.steps[locale]} />
      <FaqSection title={t.common.faqTitle} faqs={guide.faqs[locale]} />
    </article>
  );
}
