/** @type {import('next').NextConfig} */

const axios = require("axios");

const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://stupendousweb.com",
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const result = [];
    await axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts")
      .then((response) => {
        response.data?.posts?.map((post) => {
          result.push({
            loc: "/articles/" + post.slug,
            changefreq: "daily",
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        });
      });
    return result;
  },
  images: {
    domains: ["kinwebdesign.files.wordpress.com"],
  },
};

module.exports = nextConfig;
