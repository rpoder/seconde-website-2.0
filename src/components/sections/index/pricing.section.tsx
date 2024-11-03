import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
	"Gestion complète",
	"Notifications déposant",
	"Caisse conforme loi 2018 anti fraude",
	"Service client",
];

export default function Pricing() {
	return (
		<section className="w-full bg-secondary py-16 flex flex-col justify-center items-center gap-8">
			<div className="mx-auto container px-4 space-y-8 flex flex-col items-center">
				<div className="flex flex-col md:flex-row gap-8 p-16 border bg-white">
					<div className="flex flex-col justify-between">
						<div className="flex flex-row items-end gap-2">
							<h2 className="text-3xl">65 €</h2>
							<p className="text-sm">HT par mois</p>
						</div>

						<div>
							<h3>sans engagement</h3>
							<h3>sans frais d'inscription</h3>
						</div>
					</div>
					<div>
						<ul>
							{data.map((item, index) => (
								<li
									key={index}
									className="flex flex-row gap-2 items-center"
								>
									<Check
										size={16}
										className="text-accent-secondary"
									/>
									{item}
								</li>
							))}
							<li className="mt-4">
								<Button asChild>
									<Link href="/software">
										Voir toutes les fonctionalités
									</Link>
								</Button>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<p>
						Vous gérez une petite boutique et ce tarif représente un
						véritable obstacle pour vous ?
					</p>
					<p>Contactez-nous pour en discuter.</p>
				</div>
			</div>
			<Badge variant="outline" className="md:text-base">
				Seconde, fièrement engagé pour la seconde main
			</Badge>
		</section>
	);
}
