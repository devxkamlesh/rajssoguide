import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";
import { ATTRIBUTION } from "@/lib/attribution";

// Redirect non-localized paths to the default locale, e.g. "/" -> "/en"
// and "/sso-id-login" -> "/en/sso-id-login". Runs natively on Vercel.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  
  if (hasLocale) {
    const response = NextResponse.next();
    // Add developer attribution header
    response.headers.set("X-Built-By", `${ATTRIBUTION.name} (${ATTRIBUTION.url})`);
    return response;
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  // Add developer attribution header
  response.headers.set("X-Built-By", `${ATTRIBUTION.name} (${ATTRIBUTION.url})`);
  return response;
}

export const config = {
  // Skip Next internals, static assets, and SEO files.
  matcher: ["/((?!_next|api|.*\\..*|sitemap.xml|robots.txt).*)"],
};
