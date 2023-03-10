/** @type {import('next-sitemap').IConfig} */

const axios = require("axios");

module.exports = {
  siteUrl: "https://stupendousweb.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/creative-brief"],
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
            lastmod: new Date(post.date).toISOString(),
          });
        });
      });
    return result;
  },
};
