/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://stupendousweb.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  priority: false,
  exclude: ["/articles"],
  changefreq: "monthly",
};
