import React from "react";
import LogoLaMome from "@/../public/assets/svg/logos_partners/logo_partner_la_môme.svg";
import LogoOccasionnel from "@/../public/assets/svg/logos_partners/logo_partner_occsionnel.svg";
import LogoUrbanExchange from "@/../public/assets/svg/logos_partners/logo_partner_urban_exchange.svg";
import LogoLesTresorsDeCaro from "@/../public/assets/svg/logos_partners/logo_partner_trésors_de_caro.svg";
import LogoAffairesASuivre from "@/../public/assets/svg/logos_partners/logo_partner_affaires_à_suivre.svg";
import LogoLaRitournelleReze from "@/../public/assets/svg/logos_partners/logo_partner_la_ritournelle.svg";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Reinsurance() {
	const partners: {
		name: string;
		logo: StaticImageData;
		url: string;
		className?: string;
	}[] = [
		{
			name: "La Môme",
			logo: LogoLaMome,
			url: "https://www.instagram.com/lamomemarseille/",
		},
		{
			name: "Urban Exchange",
			logo: LogoUrbanExchange,
			url: "https://www.instagram.com/urbanexchangeparis/",
			className: "w-20",
		},
		{
			name: "Occasionnel",
			logo: LogoOccasionnel,
			url: "https://www.instagram.com/occasionnel.luxe/",
			className: "w-36",
		},

		{
			name: "Les Trésors de Caro",
			logo: LogoLesTresorsDeCaro,
			url: "https://www.instagram.com/lestresorsdecaro_depotvente/",
		},
		{
			name: "Affaires à suivre",
			logo: LogoAffairesASuivre,
			url: "https://www.instagram.com/affairesasuivre_depotventelyon/",
			className: "w-48",
		},
		{
			name: "La Ritournelle Rezé",
			logo: LogoLaRitournelleReze,
			url: "https://www.instagram.com/laritournellereze/",
			className: "w-28",
		},
	];

	return (
		<div className="bg-secondary py-8">
			<div className="w-full flex md:flex-row flex-col gap-12 items-center justify-center opacity-70">
				{partners.map((partner, index) => (
					<div key={index} className="px-4 py-2 h-full ">
						<Link href={partner.url} target="_blank">
							<Image
								src={partner.logo}
								alt={partner.name}
								className={cn("w-28", partner.className)}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
