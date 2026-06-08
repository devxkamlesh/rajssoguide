import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { guides } from "@/data/guides";
import { exams, services, cities, scholarships } from "@/lib/content";
import { site } from "@/lib/site";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const base = `/${loc}`;

  return (
    <div>
      <section className="overflow-hidden rounded-2xl bg-amber-50 dark:bg-zinc-900">
        <Image
          src={site.assets.hero}
          alt={t.home.heroTitle}
          width={1600}
          height={600}
          priority
          className="h-auto w-full object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            {t.home.heroSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${base}/sso-id-login`}
              className="rounded-full bg-amber-600 px-5 py-2.5 font-medium text-white"
            >
              {t.nav.login}
            </Link>
            <Link
              href={`${base}/sso-id-registration`}
              className="rounded-full border border-amber-600 px-5 py-2.5 font-medium text-amber-700 dark:text-amber-400"
            >
              {t.nav.registration}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`${base}/${g.slug}`}
            className="rounded-xl border border-zinc-200 p-5 hover:border-amber-500 dark:border-zinc-800"
          >
            <h2 className="font-semibold">{g.title[loc]}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {g.intro[loc]}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">{t.nav.exams}</h2>
          <ul className="mt-3 space-y-2">
            {exams.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`${base}/exam/${e.slug}`}
                  className="text-amber-700 hover:underline dark:text-amber-400"
                >
                  {e.name[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{t.nav.services}</h2>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`${base}/service/${s.slug}`}
                  className="text-amber-700 hover:underline dark:text-amber-400"
                >
                  {s.name[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">
          {loc === "hi" ? "छात्रवृत्ति" : "Scholarships"}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {scholarships.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/scholarship/${s.slug}`}
              className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm hover:border-amber-500"
            >
              {s.name[loc]}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">
          {loc === "hi" ? "शहर अनुसार मदद" : "Help by city"}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`${base}/city/${c.slug}`}
              className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm hover:border-amber-500"
            >
              {c.name[loc]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
