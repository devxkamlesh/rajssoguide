import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Cloudflare Workers via the OpenNext adapter (also Vercel-compatible).
  // Images are pre-optimized, so we skip the optimizer to avoid quota usage.
  images: {
    unoptimized: true,
  },

  // Locale routing: send non-localized paths to the default locale.
  // Replaces the old proxy/middleware (Next.js 16 proxy is Node-only and
  // not supported on Cloudflare Workers).
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      {
        source: "/:path((?!en|hi|_next|api|.*\\.).*)",
        destination: "/en/:path",
        permanent: false,
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://cloudflareinsights.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
