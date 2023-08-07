/** @type {import('next-sitemap').IConfig} */

const axios = require("axios");

module.exports = {
  siteUrl: "https://stupendousweb.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  priority: false,
  exclude: ["/articles"],
  changefreq: "monthly",
  additionalPaths: async () => {
    const result = [];
    await axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts")
      .then((response) => {
        response.data?.posts?.map((post) => {
          result.push({
            loc: `/articles/${post.slug}`,
            // priority: 0.7,
            // lastmod: new Date(post.date).toISOString(),
          });
        });
      });
    await axios
      .get("https://public-api.wordpress.com/rest/v1.1/sites/67222684/tags")
      .then((response) => {
        response.data?.tags?.map((tag) => {
          result.push({
            loc: `/articles/tags/${tag.slug}`,
            // priority: 0.7,
            // lastmod: new Date().toISOString(),
          });
        });
      });
    return result;
  },
};
