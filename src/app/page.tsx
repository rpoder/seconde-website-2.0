import Hero from "@/components/sections/index/hero.section";
import Features from "@/components/sections/index/features.section";
import Pricing from "@/components/sections/index/pricing.section";
import Testimonials from "@/components/sections/index/testimonials.section";
import Reinsurance from "@/components/sections/index/reinsurance.section";
import FeaturesBis from "@/components/sections/index/features-bis.section";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Pricing />
			<Reinsurance />
			<FeaturesBis />
		</>
	);
}
