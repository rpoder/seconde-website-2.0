/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
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
