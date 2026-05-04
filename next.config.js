// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Build ke time ESLint ignore karega
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig