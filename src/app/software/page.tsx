import { cn } from "@/lib/utils";
import { featureGroups } from "./data";
import Image from "next/image";

export default function page() {
	return (
		<div className="container mx-auto flex flex-col gap-20">
			<div className="w-full space-y-4">
				<h1>Que pouvez-vous faire avec Seconde ?</h1>
				<div className="w-full h-96 bg-[url('/assets/images/shop-two-ladies.jpg')] bg-center bg-cover flex flex-col justify-center items-center" />
			</div>
			<div className="w-full flex flex-col">
				{featureGroups.map((group, index) => (
					<div
						key={index}
						className={cn(
							"w-full flex flex-col md:flex-row gap-16 py-36 items-center",
							index % 2 === 0 && "md:flex-row-reverse "
						)}
						id={group.id}
					>
						<div className="w-full md:w-2/5">
							<h2 className="text-3xl">{group.title}</h2>
							{group.descriptions.map((description, index) => (
								<p key={index}>{description}</p>
							))}
							<ul className="mt-4">
								{group.features.map((feature, index) => (
									<li key={index} className="list-disc ml-4">
										{feature.title}
										{feature.subFeatures && (
											<ul>
												{feature.subFeatures.map(
													(subFeature, index) => (
														<li
															key={index}
															className="list-disc ml-10"
														>
															{subFeature}
														</li>
													)
												)}
											</ul>
										)}
									</li>
								))}
							</ul>
						</div>
						{group.image && (
							<div className="w-full md:w-3/5 rounded-md border border-secondary shadow-lg overflow-hidden">
								<div className="bg-slate-200 h-2 w-full" />

								<Image
									src={group.image.src}
									alt={group.image.alt}
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
