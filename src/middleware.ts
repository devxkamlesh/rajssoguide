import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Intercept legacy /en and /hi locale segments
  if (pathname.startsWith("/en") || pathname.startsWith("/hi")) {
    const stripped = pathname.replace(/^\/(en|hi)(\/|$)/, "/");

    // Specific legacy mapping
    if (stripped.includes("merge-sso-id")) {
      return context.redirect("/#merge-duplicate-sso", 301);
    }
    if (stripped.includes("sso-id-helpdesk")) {
      return context.redirect("/contact", 301);
    }
    if (stripped.includes("sso-id-password-change")) {
      return context.redirect("/forgot-sso-id", 301);
    }
    if (stripped.includes("emitra-sso-id")) {
      return context.redirect("/", 301);
    }
    if (stripped.includes("sso-id-portal")) {
      return context.redirect("/", 301);
    }

    // If matches valid pages
    const validPages = [
      "/sso-id-login",
      "/sso-id-registration",
      "/forgot-sso-id",
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms-of-service",
    ];

    const clean = stripped.replace(/\/$/, "");
    if (validPages.includes(clean)) {
      return context.redirect(clean, 301);
    }

    // Default fallback to homepage
    return context.redirect("/", 301);
  }

  return next();
});
