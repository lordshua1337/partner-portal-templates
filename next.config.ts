import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/partner-portal-templates",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
