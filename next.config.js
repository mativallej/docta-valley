const { SITE } = require('./src/config');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== "/" ? SITE.basePathname : "",

  swcMinify: true,
  poweredByHeader: false,

  transpilePackages: ['tailwindcss', 'postcss', 'autoprefixer'],

  env: {
    BASE_URL: process.env.BASE_URL,
    JWT_NAME: process.env.JWT_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: []
  },
};

module.exports = config; 