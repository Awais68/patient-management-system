/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "unsplash.com",
			},
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "plus.unsplash.com",
			},
			{
				hostname: "example.com",
			},
			{
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

export default nextConfig;
