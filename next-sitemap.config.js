/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ng-consulting.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/icon', '/opengraph-image'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/kontakt': 0.8,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
