/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/green',
        destination: '/green',
      },
    ]
  },
}

module.exports = nextConfig