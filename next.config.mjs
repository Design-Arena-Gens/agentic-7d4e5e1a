/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'finbridge.uz' },
      { protocol: 'http', hostname: 'finbridge.uz' }
    ]
  },
  i18n: {
    locales: ['en', 'ru', 'uz'],
    defaultLocale: 'en'
  }
};

export default nextConfig;
