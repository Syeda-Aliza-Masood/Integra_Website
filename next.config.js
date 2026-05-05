// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',  // ← .next ki jagah 'build' folder use karega
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig