import { cn } from "@/lib/utils";
import { features } from "./features-bis.data";
import Image from "next/image";

export default function FeaturesBis() {
	return (
		<section className="container mx-auto space-y-8">
			<h2 className="text-center text-2xl mb-16">
				Seconde vous accompagne dans la gestion complète
				<br /> de votre dépôt-vente.
			</h2>
			<div className="flex flex-col gap-6">
				{features.map((line, i) => (
					<div
						key={i}
						className="w-full flex flex-col md:flex-row gap-6"
					>
						{line.map((feature, j) => (
							<div
								key={j}
								className={cn(
									"bg-white border text-center w-full flex flex-col justify-between"
								)}
							>
								<div
									className={cn(
										"flex flex-col gap-2 items-center p-8 md:p-14"
									)}
								>
									<h3 className="text-xl font-semibold text-rose-400">
										{feature.title}
									</h3>
									<p className="text-secondary-foreground text-sm">
										{feature.description}
									</p>
								</div>

								<div className="flex flex-col p-4 md:p-12 pt-0 h-full">
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
										<div
											className={cn(
												"overflow-hidden rounded md:rounded-lg",
												feature.hasBorder &&
													"md:border-2 border-gray-200"
											)}
										>
											<video
												src={feature.videoSrc}
												autoPlay
												muted
												loop
												playsInline
												className={cn(
													"w-full scale-[100.4%]",
													feature.noShadow &&
														"shadow-none"
												)}
											/>
										</div>
									)}

									{feature.component && (
										<div className="flex items-center justify-center h-full bg-stone-50 rounded-lg">
											{feature.component}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
