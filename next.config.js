/** @type {import('next').NextConfig} */

// const fs = require("fs/promises");

// const locales = await fs.readdir("./public/locales");
// const defaultLocale = "en";

// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: [defaultLocale, ...locales],
//     defaultLocale,
//     localeDetection: false,
//   },
// };

// export default nextConfig;

// @ts-check
const { i18n } = require("./next-i18next.config.js");
const { loadCustomBuildParams } = require("./next-utils.config");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

const nextConfig = {
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  reactStrictMode: true,
  i18n,
  output: "standalone",
};

module.exports = nextConfig;
