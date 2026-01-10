import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'img.clerk.com' } // our profile image is store in Clerk
    ]
  }
  //reactCompiler: true,
};

export default nextConfig;
