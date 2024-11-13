import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
  // Add other Next.js config options here as needed
};

export default nextConfig;
