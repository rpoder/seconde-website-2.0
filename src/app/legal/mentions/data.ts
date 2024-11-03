type SectionContent = {
	texts: string[];
	table?: {
		headers: string[];
		rows: string[][];
	};
};

type SubSection = {
	title: string;
	content: SectionContent[];
};

export type Section = {
	title: string;
	content: SectionContent[];
	subSections?: SubSection[];
};

export type LegalData = {
	title: string;
	sectionsSumary: {
		title: string;
		subTitles: string[];
	}[];
	sections: Section[];
};

const privacyPolicyData: LegalData = {
	title: "Politique de Confidentialité",
	sectionsSumary: [],
	sections: [
		{
			title: "Objet et Définitions",
			content: [
				{
					texts: [
						"La présente Politique de confidentialité définit la façon dont Seconde collecte, utilise, divulgue, transfère, stocke, conserve ou traite vos données lorsque vous demandez à ouvrir un compte ou créez un compte Seconde et utilisez ses Services.",
						"Elle a pour objectif de vous informer sur les obligations à la charge de Seconde en matière de traitement de données personnelles, conformément au Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (Règlement général sur la Protection des Données dit RGPD).",
						"En commandant nos Services, vous acceptez cette Politique de Confidentialité sans réserve.",
						"Si vous êtes client ou déposant d’une boutique qui utilise Seconde, vous pouvez vous référez à la section 3 « Données que nous collectons sur vos clients ». Vous pouvez faire une demande d’accès, de suppression ou de rectification de vos données personnelles en nous contactant via contact@seconde.app, ou auprès de votre boutique.",
					],
				},
			],
		},
		{
			title: "Entrée en vigueur et durée",
			content: [
				{
					texts: [
						"La présente Politique de confidentialité prend effet le 2 Septembre, pour une durée indéterminée.",
					],
				},
			],
		},
		{
			title: "Données que nous collectons vous concernant",
			content: [
				{
					texts: [
						"Nous collectons des données vous concernant de deux façons :",
						"- lorsque vous nous les fournissez directement ;",
						"- lorsque nous recueillons des informations lors de votre utilisation des Services ;",
						"Nous détaillons ci-dessous les types de données concernés dans chaque cas, comment et pourquoi nous les traitons, ainsi que la base légale qui s’applique au traitement de ces données.",
					],
				},
			],
			subSections: [
				{
					title: "Données que vous fournissez (les « Données de compte »)",
					content: [
						{
							texts: [
								"Vous trouverez ci-dessous une description des types d’informations que vous nous envoyez directement, désignés par les « Données de compte » :",
							],
							table: {
								headers: ["Types d'informations", "Données"],
								rows: [
									[
										"Informations d'identification",
										"Nom, prénom, date de naissance, adresse e-mail, adresse postale, numéro de téléphone, mot de passe (encrypté, voir section 5 « Sécurité »)",
									],
								],
							},
						},
					],
				},
			],
		},
	],
};

export { privacyPolicyData };
