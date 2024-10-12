import { cn } from "@/lib/utils";
import { features } from "./features-bis.data";
import Image from "next/image";

export default function FeaturesBis() {
	return (
		<div className="container mx-auto px-36 flex flex-col gap-4">
			{features.map((line, i) => (
				<div key={i} className="w-full flex flex-row gap-4">
					{line.map((feature, j) => (
						<div
							key={j}
							className={cn(
								"bg-gradient-to-b from-orange-50/20 to-orange-50/40  border-orange-100 border w-full rounded-[18px] p-8 text-center min-h-96",
								feature.size === "small" && "w-1/3"
							)}
						>
							<h3>{feature.title}</h3>
							<p>{feature.description}</p>
							<img src={feature.imageSrc} alt={feature.title} />
						</div>
					))}
				</div>
			))}
		</div>
	);
}
