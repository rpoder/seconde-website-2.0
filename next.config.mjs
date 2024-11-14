/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	async redirects() {
		return [
			{
				source: "/software",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
