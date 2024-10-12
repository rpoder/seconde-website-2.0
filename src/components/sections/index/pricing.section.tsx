import { Badge } from "@/components/ui/badge";
import React from "react";

export default function Pricing() {
	return (
		<section className="mx-auto container px-4 space-y-8 flex flex-col items-center">
			<Badge variant="outline">Tarifs</Badge>
			<div>
				<h2 className="text-center">
					Un tarif équitable et transparent
				</h2>
				<p className="text-center">
					Seconde est fièrement engagé pour la seconde main et les
					dépôts-ventes. Notre ambition est de vous accompagner au
					tarif le plus juste possible.
				</p>
			</div>
			<div className="max-w-96 flex flex-col border p-8 bg-green-300 gap-4">
				<h1>
					<b>65€</b> et c'est tout.
				</h1>
				<h3 className="text-green-700">
					Profitez de Seconde pour 65 euros HT/mois, sans engagement,
					et sans frais d’inscription supplémentaire.
				</h3>
				<div>
					<p>sans engagement</p>
					<p>sans préavis</p>
				</div>
			</div>
		</section>
	);
}
