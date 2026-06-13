import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Vercel with native Next.js support (SSG now, ISR/SSR-ready).
  // Images are pre-optimized, so we skip the optimizer to avoid quota usage.
  images: {
    unoptimized: true,
  },

  // Security headers to protect against XSS, clickjacking, and other attacks
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
