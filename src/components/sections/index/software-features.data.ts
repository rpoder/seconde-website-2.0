import { StaticImageData } from "next/image";
import ArticlesImage from "@/../public/assets/images/software-articles.png";
import CustomerImage from "@/../public/assets/images/software-customer.png";
import DepositTypeImage from "@/../public/assets/images/software-depositType.png";

export type Feature = {
	title: string;
	subFeatures?: string[];
};

export type FeatureGroup = {
	title: string;
	descriptions: string[];
	id?: string;
	image?: {
		src: StaticImageData;
		alt: string;
	};
	features: Feature[];
};

export const featureGroups: FeatureGroup[] = [
	{
		id: "deposit",
		title: "Gérez vos dépôts",
		descriptions: [
			"Enregistrez des dépôts classiques, des dépôts en achat comptant, des dons, des achats fournisseurs, ou un peu de tout !",
		],
		image: {
			src: DepositTypeImage,
			alt: "Interface de gestion des dépôts",
		},
		features: [
			{ title: "Dépôt-vente « classique »" },
			{ title: "Depot-vente « achat-revente »" },
			{ title: "Achat fournisseur" },
			{ title: "Deux processus de dépôt au choix" },
			{ title: "Étiquettes personnalisées avec ou sans code barre" },
			{ title: "Historique des dépôts" },
			{
				title: "Paramétrage flexible",
				subFeatures: [
					"Type de dépôt",
					"Taux de TVA",
					"Parts boutique/déposant",
					"Durée du contrat",
				],
			},
		],
	},
	{
		title: "Retrouvez votre stock",
		image: {
			src: ArticlesImage,
			alt: "Interface de gestion des articles",
		},
		descriptions: [
			"Travaillez avec une base de données pratique, complète et intuitive.",
		],
		features: [
			{ title: "Suivi des stocks" },
			{ title: "Historique des articles vendus, restitués et donnés" },
			{
				title: "Modification du prix des articles et réimpression des étiquettes",
			},
			{ title: "Recherche d’article par filtres multicritères" },
			{ title: "Signalement et historique des articles perdus ou volés" },
		],
	},
	{
		title: "Suivez vos clients et déposants",
		image: {
			src: CustomerImage,
			alt: "Interface de gestion des clients",
		},
		descriptions: [
			"Simplifiez vos échanges avec vos clients et déposants.",
		],
		features: [
			{ title: "Fichiers clients complets" },
			{ title: "Historique des dépôts et des achats par client" },
			{ title: "Historique des mouvements de cagnotte par client" },
			{ title: "Cagnottes mises à jour en temps réel" },
			{ title: "Restitution d’invendus depuis le fichier client" },
			{ title: "Paiement de cagnotte en un clic" },
			{ title: "Historique des paiements" },
			{ title: "Historique des restitutions" },
		],
	},
	{
		id: "accounting",
		title: "Vendez, encaissez, remboursez",
		descriptions: ["Le logiciel de caisse adapté à votre dépôt-vente !"],
		features: [
			{
				title: "Caisse paramétrable avec dispositifs de règlements et de paiements personnalisables",
			},
			{ title: "Multi-guichet" },
			{ title: "Règlement en multi-paiement" },
			{ title: "Paiement déposant en multi-paiement" },
			{ title: "Calcul de rendu de monnaie" },
			{ title: "Remises sur ventes" },
			{ title: "Génération de facture" },
			{ title: "Historique des ventes" },
		],
	},
	{
		id: "alerts",
		title: "Tenez vos déposants au courant",
		descriptions: [
			"Accompagner vos déposants et leur simplifier la vie, c’est aussi notre mission !",
		],
		features: [
			{
				title: "Notifications des déposants par mail",
				subFeatures: [
					"Récapitulatif de dépôt",
					"Suivi des ventes",
					"Suivi de cagnotte",
					"Alerte de période de restitution",
					"Confirmation de restitution et de paiement",
				],
			},
		],
	},
	{
		title: "Gérez votre boutique",
		descriptions: ["L’administration de votre dépôt-vente en mode facile."],
		features: [
			{
				title: "Statistiques des ventes, du chiffre d'affaire et des dépôts",
			},
			{ title: "Historique des transactions entrantes et sortantes" },
			{ title: "Journal de caisse" },
			{ title: "Clôtures quotidiennes, mensuelles et annuelles" },
			{ title: "Exports de caisse complets" },
			{ title: "Livre de police" },
		],
	},
	{
		title: "Travaillez à plusieurs",
		descriptions: [
			"Vous travaillez en équipe ou managez plusieurs boutiques ? C’est toujours aussi simple !",
		],
		features: [
			{ title: "Multi-utilisateurs" },
			{
				title: "Multi-boutiques",
				subFeatures: [
					"Interface pour accéder à vos différentes boutiques",
					"Fichiers clients partagés",
					"Cagnottes clients utilisables dans toutes vos boutiques",
				],
			},
		],
	},
];
