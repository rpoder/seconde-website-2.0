import Hero from "@/components/sections/index/hero.section";
import Features from "@/components/sections/index/features.section";
import Pricing from "@/components/sections/index/pricing.section";
import FeaturesBis from "@/components/sections/index/features-bis.section";
import Explore from "@/components/sections/index/explore.section";
import SoftwareFeatures from "@/components/sections/index/software-features.section";
import Reinsurance from "@/components/sections/index/reinsurance.section";

export default function Home() {
	return (
		<>
			<Hero />
			<Reinsurance />
			<Features />
			<Explore />
			<Pricing />
			<FeaturesBis />
			<SoftwareFeatures />
		</>
	);
}
