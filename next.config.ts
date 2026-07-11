import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  // Deployed on Cloudflare Workers via OpenNext adapter.
  // Images are pre-optimized to avoid runtime processing.
  images: {
    unoptimized: true,
  },

  // Locale routing: send non-localized paths to the default locale.
  // Replaces the old proxy/middleware (Next.js 16 proxy is Node-only and
  // not supported on Cloudflare Workers).
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      {
        source: "/:path((?!en|hi|_next|api|.*\\.).*)",
        destination: "/en/:path",
        permanent: true,
      },
    ];
  },

  // Security headers to protect against XSS, clickjacking, and other attacks
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Built-By',
            value: 'Kamlesh Choudhary (devxkamlesh.com)',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com https://analytics.ahrefs.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://analytics.ahrefs.com https://cloudflareinsights.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
