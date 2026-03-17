import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-ignore - if your types aren't updated to the latest canary
    allowedDevOrigins: ['192.168.0.205', 'localhost:3000']
  }
};

export default nextConfig;