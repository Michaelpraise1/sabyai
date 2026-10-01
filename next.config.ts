import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/documentation",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
