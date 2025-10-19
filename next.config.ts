import type { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.minhquanlighting.com.vn",
        pathname: "/uploads/**",
      },
    ],
  },
}

export default nextConfig
