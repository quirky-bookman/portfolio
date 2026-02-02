import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    qualities: [25, 50, 75, 80, 100]
  }
};

export default nextConfig;
