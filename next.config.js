/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['linesia.net', 'raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/LinesiaMC/linesia-assets/**',
      },
    ],
  },
}

module.exports = nextConfig

