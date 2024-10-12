export type FeatureBox = {
	title: string;
	description: string;
	size: "small" | "large";
	imageSrc: string;
};

const firstLine: FeatureBox[] = [
	{
		title: "Feature 1",
		description: "Description 1",
		size: "small",
		imageSrc: "/images/feature-1.svg",
	},
	{
		title: "Feature 2",
		description: "Description 2",
		size: "large",
		imageSrc: "/images/feature-2.svg",
	},
];

const secondLine: FeatureBox[] = [
	{
		title: "Feature 3",
		description: "Description 3",
		size: "large",
		imageSrc: "/images/feature-3.svg",
	},
	{
		title: "Feature 4",
		description: "Description 4",
		size: "small",
		imageSrc: "/images/feature-4.svg",
	},
];

export const features = [firstLine, secondLine];
