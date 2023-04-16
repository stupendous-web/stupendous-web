/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["kinwebdesign.files.wordpress.com", "2.gravatar.com"],
  },
};

module.exports = nextConfig;
