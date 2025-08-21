import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST_API_URL: process.env.HOST_API_URL || "http://localhost:3000/api", 
  },
};

export default nextConfig;
