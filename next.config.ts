import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Vercel with native Next.js support (SSG now, ISR/SSR-ready).
  // Images are pre-optimized, so we skip the optimizer to avoid quota usage.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
