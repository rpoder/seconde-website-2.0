import { cn } from "@/lib/utils";
import { featureGroups } from "./data";
import Image from "next/image";

export default function page() {
	return (
		<div className="container mx-auto flex flex-col gap-20">
			<div className="w-full">
				<h1>Que pouvez-vous faire avec Seconde ?</h1>
			</div>
			<div className="w-full h-96 bg-[url('/thrift-shop.jpeg')] bg-cover bg-[center_top_-100px] flex flex-col justify-center items-center" />
			<div className="w-full flex flex-col">
				{featureGroups.map((group, index) => (
					<div
						key={index}
						className={cn(
							"w-full flex flex-row gap-16 py-16",
							index % 2 === 0 && "flex-row-reverse items-center"
						)}
						id={group.id}
					>
						<div className="w-2/5">
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
						<div className="w-3/5 rounded-md border border-secondary shadow-lg overflow-hidden">
							<div className="bg-slate-200 h-2 w-full" />
							{group.image && (
								<Image
									src={group.image.src}
									alt={group.image.alt}
									className=""
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
