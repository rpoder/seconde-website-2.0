import { Badge } from "@/components/ui/badge";
import { features } from "./features.data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Plus, PlusCircle, Telescope } from "lucide-react";

export default function Features() {
	return (
		<section className="mx-auto container px-4 space-y-12 flex flex-col items-center">
			<Badge variant="outline">Fonctionalités</Badge>
			<div className="space-y-4">
				<h2 className="text-center">Vos fonctionalités préférés</h2>
				<h3 className="text-center">
					Développé main dans la main avec des boutiques qui vous
					ressemblent
				</h3>
			</div>
			<div className="flex flex-row flex-wrap gap-10 justify-center max-w-[1200px]">
				{features.map((feature, index) => (
					<div
						key={index}
						className="relative w-52 h-24 bg-purple-200 rounded p-6 text-center flex justify-center items-center"
					>
						{feature.tag && (
							<Badge className="absolute -top-4 -left-4">
								{feature.tag}
							</Badge>
						)}
						<div>{feature.title}</div>
					</div>
				))}
			</div>
			<div className="flex flex-row gap-32 items-center">
				<div className="w-full space-y-8">
					<div className="space-y-2">
						<h2>
							Tout ce dont vous avez besoin, en un seul logiciel
						</h2>
						<h4>
							Retrouvez vos chiffres de la journée, vos dépôts,
							vos ventes et bien plus. Prévenez en même temps vos
							déposant dès que son article est vendu
						</h4>
					</div>
					<Button asChild type="button" size="lg">
						<Link href="/software">
							<Telescope className="mr-2" size={20} />
							Explorer le logiciel
						</Link>
					</Button>
				</div>
				<div className="bg-slate-100 w-full h-96"></div>
			</div>
		</section>
	);
}
