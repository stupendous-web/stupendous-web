/** @type {import('next').NextConfig} */

const axios = require("axios");

const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://stupendousweb.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = [];
    await axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts")
      .then((response) => {
        response.data.map((post) => {
          result.push({
            loc: "/article/" + post.slug,
            changefreq: "daily",
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        });
      });
    return result;
  },
  exclude: ["/services"],
};

module.exports = nextConfig;
