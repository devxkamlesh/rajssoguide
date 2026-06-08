import Link from "next/link";
import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const other: Locale = locale === "en" ? "hi" : "en";

  const links = [
    { href: `${base}/sso-id-login`, label: t.nav.login },
    { href: `${base}/sso-id-registration`, label: t.nav.registration },
    { href: `${base}/forgot-sso-id`, label: t.nav.forgot },
    { href: `${base}/tools`, label: t.nav.tools },
  ];

  return (
    <header className="border-b border-zinc-200">
      {/* Gov-style utility bar */}
      <div className="bg-zinc-900 text-zinc-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <span>
            {locale === "hi"
              ? "एक स्वतंत्र मार्गदर्शिका — सरकार से संबद्ध नहीं"
              : "An independent guide — not affiliated with the government"}
          </span>
          <a
            href={site.officialPortal}
            target="_blank"
            rel="nofollow noopener"
            className="hidden underline hover:text-amber-300 sm:inline"
          >
            {site.officialPortal.replace("https://", "")} ↗
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href={base} className="flex items-center" aria-label={site.name}>
          <Image
            src={site.assets.logoHorizontal}
            alt={site.name}
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-4 text-sm sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-600 hover:text-amber-700"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href={`/${other}`}
          className="rounded-md border border-zinc-300 px-2 py-1 text-sm dark:border-zinc-700"
          hrefLang={other}
        >
          {t.common.switchLanguage}
        </Link>
      </nav>
    </header>
  );
}
