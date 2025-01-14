/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
        port: '',
        pathname: '/mave/storage/podcasts/**',
    },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: 'false',
  },
  experimental: {
    taint: true,
  },
  async rewrites() {
    return [
        {
            source: "/ocappellaRSS",
            destination: "https://cloud.mave.digital/42223",
        },
        {
            source: "/aliensRSS",
            destination: "https://cloud.mave.digital/53379",
        },
    ]
},
}

export default config
