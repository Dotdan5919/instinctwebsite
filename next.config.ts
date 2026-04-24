import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
