/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://seconde.app",
	generateRobotsTxt: true,
	changefreq: "daily",
};