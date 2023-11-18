/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "RSD"
  },
  i18n: {
    locales: ["en", "sr", "cp"],
    defaultLocale: "sr",
    localeDetection: false,
  },
  images: {
    remotePatterns: [{protocol: "https", hostname: "**"}]},
};

module.exports = nextConfig;
