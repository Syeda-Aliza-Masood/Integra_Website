// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // No distDir - let Next.js use default .next folder
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone', // For Vercel deployment
}

module.exports = nextConfig