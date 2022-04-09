/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/meta-image',
        destination: '/api/meta-image',
      }
    ];
  },
}

module.exports = nextConfig
