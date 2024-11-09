import { Badge } from "@/components/ui/badge";
import { Feature, features } from "./features.data";
import { cn } from "@/lib/utils";

function FeatureBox({ title, tag }: Feature) {
	return (
		<div
			className={cn(
				"relative w-52 h-24 bg-secondary p-6 text-center flex justify-center items-center border"
			)}
		>
			{tag && <Badge className="absolute -top-4 -left-4">{tag}</Badge>}
			<h2 className="text-base">{title}</h2>
		</div>
	);
}

export default function Features() {
	return (
		<section className="mx-auto container px-4 space-y-20 flex flex-col items-center">
			<div className="space-y-4">
				<h3 className="text-center text-2xl">
					Développé{" "}
					<b
						className="font-Gibson italic font-semibold"
						style={{
							fontFamily: "canada-type-gibson",
							fontWeight: 550,
							fontStyle: "italic",
						}}
					>
						main dans la main
					</b>{" "}
					avec des <br />
					boutiques qui vous ressemblent
				</h3>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-row flex-wrap gap-10 justify-center max-w-[1200px]">
					{features.slice(0, 4).map((feature, index) => (
						<FeatureBox key={index} {...feature} />
					))}
				</div>
				<div className="flex flex-row flex-wrap gap-10 justify-center max-w-[1200px]">
					{features
						.slice(4, features.length)
						.map((feature, index) => (
							<FeatureBox key={index} {...feature} />
						))}
				</div>
			</div>
		</section>
	);
}
