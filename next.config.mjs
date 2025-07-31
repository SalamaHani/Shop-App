/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // or '10mb' if needed
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "shop.motorscloud.net",
      },
      {
        protocol: "https",
        hostname: "shop.motorscloud.net",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "rspiprgzucibdkbxveoc.supabase.co",
      },
      {
        protocol: "https",
        hostname: "kynmpyobbtzsazbkczpe.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
