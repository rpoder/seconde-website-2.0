import { cn } from "@/lib/utils";
import { features } from "./features-bis.data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesBis() {
	return (
		<section className="container mx-auto space-y-8">
			<h2 className="text-center text-2xl mb-16">
				Seconde vous accompagne dans la gestion complète
				<br /> de votre dépôt-vente.
			</h2>
			<div className="flex flex-col gap-6">
				{features.map((line, i) => (
					<div key={i} className="w-full flex flex-row gap-6">
						{line.map((feature, j) => (
							<div
								key={j}
								className={cn(
									"bg-white border  rounded-lg text-center w-3/5 flex flex-col justify-between",
									feature.size === "small" && "w-2/5"
								)}
							>
								<div
									className={cn(
										"flex flex-col gap-2 items-center p-14",
										feature.textPosition === "bottom" &&
											"pt-0",
										feature.textPosition === "top" &&
											"pb-0",
										feature.textPosition === "top"
											? "order-1"
											: "order-2"
									)}
								>
									<h3 className="text-xl font-semibold text-rose-400">
										{feature.title}
									</h3>
									<p className="text-secondary-foreground text-sm">
										{feature.description}
									</p>
								</div>

								<div
									className={cn(
										!feature.component && "p-12",
										feature.textPosition === "top"
											? "order-2"
											: "order-1"
									)}
								>
									{feature.image && (
										<Image
											src={feature.image}
											alt={feature.title}
											className={cn(
												"w-full rounded-lg shadow-lg",
												feature.noShadow &&
													"shadow-none"
											)}
										/>
									)}
									{feature.videoSrc && (
										<video
											src={feature.videoSrc}
											autoPlay
											muted
											loop
											playsInline
											className={cn(
												"w-full rounded-lg shadow-lg",
												feature.noShadow &&
													"shadow-none"
											)}
										/>
									)}
									{feature.component && feature.component}
								</div>
								<Button
									asChild
									variant="secondary"
									className="rounded-none order-3 rounded-b-lg"
									size="lg"
								>
									<Link href={feature.buttonHref}>
										{feature.buttonText}
									</Link>
								</Button>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
