import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Link from "next/link";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="mt-16 border-t border-zinc-200 py-8 text-sm text-zinc-500">
      <div className="mx-auto max-w-5xl px-4">
        <p>{t.footer.disclaimer}</p>
        <p className="mt-2">
          {t.common.officialPortalNote}{" "}
          <a
            href={site.officialPortal}
            className="text-amber-700 underline"
            rel="nofollow noopener"
            target="_blank"
          >
            {site.officialPortal.replace("https://", "")}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href={`/${locale}/about`} className="hover:text-amber-700">
            {locale === "hi" ? "हमारे बारे में" : "About"}
          </Link>
          <Link href={`/${locale}/tools`} className="hover:text-amber-700">
            {t.nav.tools}
          </Link>
          <Link href={`/${locale}/sitemap-page`} className="hover:text-amber-700">
            {locale === "hi" ? "साइटमैप" : "Sitemap"}
          </Link>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
