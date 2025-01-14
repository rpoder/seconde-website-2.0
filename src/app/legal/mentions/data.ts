import type { LegalData } from "../type.ts";

const legalNoticeData: LegalData = {
	title: "Mentions légales",
	updatedAt: new Date("2024-11-07"),
	preamble: {
		title: "Informations sur le site",
		content: [
			{
				texts: [
					[
						"Nom du site : seconde.app",
						"Propriétaire : Ronan Poder",
						"Adresse e-mail : contact@seconde.app",
						"Directeur de la publication : Ronan Poder",
						"Hébergeur : Vercel",
						"Adresse de l'hébergeur: 340 S Lemon Ave #4133 Walnut, CA 91789",
					],
				],
			},
		],
	},
	sections: [
		{
			title: "Responsabilité",
			content: [
				{
					texts: [
						[
							"Le propriétaire du site Seconde SARL décline toute responsabilité quant à l'exactitude, la pertinence ou l'exhaustivité des informations fournies sur ce site. L'utilisation des informations contenues sur ce site se fait sous la seule responsabilité de l'utilisateur.",
						],
					],
				},
			],
		},
		{
			title: "Droits d'auteur",
			content: [
				{
					texts: [
						[
							"Tous les contenus présents sur le site seconde.app, incluant, de manière non limitative, les textes, les images, les photographies, les vidéos, les logos et les icônes, sont la propriété exclusive du propriétaire du site ou de ses partenaires et sont protégés par les lois relatives aux droits d'auteur. Toute reproduction, distribution, modification, ou diffusion des contenus de ce site sans l'autorisation préalable écrite du propriétaire du site est strictement interdite.",
						],
					],
				},
			],
		},
		{
			title: "Protection des données",
			content: [
				{
					texts: [
						[
							"Ce site ne collecte aucune donnée personnelle des utilisateurs sans leur consentement explicite. Pour plus d'informations sur la collecte et le traitement des données, veuillez consulter notre politique de confidentialité.",
						],
					],
				},
			],
		},
		{
			title: "Cookies",
			content: [
				{
					texts: [
						[
							"Ce site n'utilise pas de cookies pour le suivi des utilisateurs.",
						],
					],
				},
			],
		},
	],
};

export default legalNoticeData;
