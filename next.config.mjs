/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-03d0831378df48bcbfee5305ab3fb0f5.r2.dev' }, // R2 public (migrated from Cloudinary)
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'keyswaglending.com',
          },
        ],
        destination: 'https://keyrealestatecapital.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
