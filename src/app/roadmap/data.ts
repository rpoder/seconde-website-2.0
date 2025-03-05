import {
	CalendarCheck,
	CalendarDays,
	Hammer,
	Lightbulb,
	LucideIcon,
} from "lucide-react";

export type RoadmapItem = {
	title: string;
	description: string[];
};

export const updatedAt = new Date("2025-03-03");

export type RoadmapColumn = {
	title: string;
	icon?: LucideIcon;
	items: RoadmapItem[];
	tag?: string;
};

const columns: RoadmapColumn[] = [
	{
		title: "En développement",
		icon: Hammer,
		items: [
			{
				title: "Nouveaux filtres pour votre page Articles",
				description: [
					"Votre page Articles évolue ! Parcourez et triez vos articles en fonction d’une multitude de nouveaux filtres, encore plus pratiques.",
				],
			},
			{
				title: "Nouveaux filtres pour vos dépôts et vos ventes",
				description: [
					"Faites de nouvelles recherches dans vos historiques de dépôts, d’achats et de ventes.",
				],
			},
			{
				title: "Exports de vos fichiers déposants en un clic",
				description: [
					"Retrouvez tous vos clients et déposants dans un fichier excel facilement exploitable.",
				],
			},
			{
				title: "Bordereaux de paiement téléchargeables",
				description: [
					"Pour compléter vos exports comptables, vous pourrez télécharger un bordereau à faire signer à votre déposant au moment de son paiement.",
				],
			},
		],
	},
	{
		title: "Planifié pour le 24 avril",
		icon: CalendarCheck,
		items: [
			{
				title: "Nouvelles catégories d’articles en dépôt",
				description: [
					"Seconde prend en charge de nouvelles catégories d'articles et le flow de dépôt s’adapte à leurs propriétés propres (tailles enfants, marques spécifiques, dimensions des meubles, etc).",
				],
			},
			{
				title: "Mettez l’enregistrement de votre dépôt en attente",
				description: [
					"Vous pouvez ainsi le reprendre plus tard et le modifier autant de fois que vous le souhaitez avant de le valider et d’envoyer le mail de confirmation à votre déposant.",
				],
			},
			{
				title: "Modifiez ou annulez un contrat de dépôt",
				description: [
					"Seconde vous propose encore plus de flexibilité ! Ajoutez un nouvel article au dépôt ou changez la date de fin de contrat, un mail d'avenant au contrat est automatiquement envoyé à votre déposant.",
				],
			},
			{
				title: "Créez vos CGV sur Seconde",
				description: [
					"Grâce à des templates, vous pouvez générer vos CGV directement depuis votre logiciel. Ils sont automatiquement envoyés à votre déposant dans son mail de confirmation de dépôt.",
				],
			},
			{
				title: "Nouveaux modules de restitution et de paiement déposant",
				description: [
					"La gestion de vos fins de contrat devient encore plus facile ! De plus, des mails de confirmation sont envoyés pour vous protéger de tout litige.",
				],
			},
		],
	},
	{
		title: "Planifié pour les 6 prochains mois",
		icon: CalendarDays,
		items: [
			{
				title: "Destockez vos articles sans compliquer votre compta",
				description: [
					"Vous pouvez vendre vos articles à perte sans affecter la part déposant et le crédit automatique du wallet. Vos exports comptables s’adaptent.",
				],
			},
			{
				title: "Marges automatiques en fonction de critères de dépôt et d’article",
				description: [
					"Paramétrez une marge boutique spécifique au dépôt classique ou à l’achat-revente, ou bien en fonction de plages de prix par exemple.",
				],
			},
			{
				title: "Réintégrez automatiquement vos articles non restitués",
				description: [
					"Si votre déposant ne vient pas chercher ses invendus, vous pouvez réintégrer les articles sans avoir à recréer de dépôt.",
				],
			},
			{
				title: "Une multitude de statistiques",
				description: [
					"Retrouvez toutes les statistiques concernant vos dépôts, vos ventes et vos articles, jour après jour et année après année.",
				],
			},
		],
	},
	{
		title: "En étude",
		icon: Lightbulb,
		items: [
			{
				title: "Programme de fidélité",
				description: [
					"Choisissez d’appliquer une réduction pour vos clients qui sont aussi déposants, ou à partir d'un certain nombre de paniers achetés, ou encore à partir d’un certain montant d’achat.",
				],
			},
			{
				title: "Nouveau dashboard",
				description: [
					"De nouvelles données concernant vos ventes et chiffres clés sont disponibles sur votre dashboard. Agencez-les selon vos intérêts.",
				],
			},
			{
				title: "Ajoutez des photos à vos articles",
				description: [
					"Prenez en photos vos articles pour une gestion de stock plus visuelle, ou simplement pour constater leurs états.",
				],
			},
			{
				title: "Vos rendez-vous déposants reliés à votre logiciel",
				description: [
					"Offrez à vos déposants une interface pratique de prise de rendez-vous pour leurs dépôts. Côté boutique, votre gestion de rendez-vous s'intègre désormais dans votre logiciel. Vous pouvez donc, par exemple, consulter la fiche de votre déposant avant le dépôt.",
				],
			},
			{
				title: "Votre boutique en ligne reliée à votre stock",
				description: [
					"Automatisez la gestion de votre boutique en ligne : lors d’une vente sur votre site, vous êtes notifié et votre stock est automatiquement mis à jour.",
				],
			},
			{
				title: "Gérez les droits utilisateurs de votre logiciel",
				description: [
					"Limitez l'accès aux données et opérations de votre logiciel en fonction de l'utilisateur connecté.",
				],
			},
			{
				title: "Dépôts de créateurs et artisans",
				description: [
					"Enregistrez des dépôts de professionnels (assujettis ou non à la TVA) et offrez leur le système de suivi de ventes Seconde.",
				],
			},
			{
				title: "Seconde arrive en Suisse",
				description: [
					"Vous gérez un dépôt-vente en Suisse ? Utilisez Seconde en CHF et avec les taux de tva en vigueur en Suisse. Profitez d’exactement les mêmes fonctionnalités qu’en France.",
				],
			},
		],
	},
];

export default columns;
