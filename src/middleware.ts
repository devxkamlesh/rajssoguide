import { NextResponse, type NextRequest } from "next/server";
import { isLocale, defaultLocale } from "@/lib/i18n";

// The root layout needs the active locale to set <html lang> correctly, but it
// can't read the [locale] route param directly. We derive the locale from the
// first path segment here and forward it as a request header so the root
// layout can render the right lang attribute for SEO/accessibility.
export function middleware(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1] ?? "";
  const locale = isLocale(segment) ? segment : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Skip static assets and Next internals; run on actual pages.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
