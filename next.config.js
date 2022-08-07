/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.kitsu.io', 'robohash.org'],
  },
}

module.exports = nextConfig
