import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Assets are pre-optimized and the site targets Cloudflare Pages, so we
  // skip Next's runtime image optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
