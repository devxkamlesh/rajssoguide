import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Link from "next/link";
import { DevBadge } from "./DevBadge";

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
          <Link href={`/${locale}/privacy-policy`} className="hover:text-amber-700">
            {locale === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}
          </Link>
          <Link href={`/${locale}/terms-of-service`} className="hover:text-amber-700">
            {locale === "hi" ? "सेवा की शर्तें" : "Terms of Service"}
          </Link>
          <Link href={`/${locale}/tools`} className="hover:text-amber-700">
            {t.nav.tools}
          </Link>
          <a href="/sitemap.xml" className="hover:text-amber-700">
            {locale === "hi" ? "साइटमैप" : "Sitemap"}
          </a>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="mt-3">
          <DevBadge />
        </div>
      </div>
    </footer>
  );
}
