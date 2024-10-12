export type RoadmapItem = {
	title: string;
	description: string[];
};

const done: RoadmapItem[] = [
	{
		title: "Nouveaux paramètres personnalisables",
		description: [
			"Personnalisez le temps de conservation de vos articles avant restitution, ajustez votre marge par dépôt ou par article, et ajoutez ou non la TVA dans le calcul du prix final.",
		],
	},
	{
		title: "Reprendre un dépôt non finalisé",
		description: [
			"Enregistrez un nouveau dépôt très rapidement, puis finalisez le quand vous le souhaitez.",
		],
	},
	{
		title: "Cagnotte déposants",
		description: [
			"Offrez la possibilité à vos déposants de payer leurs futurs achats dans votre boutique grâce à leur cagnotte.",
		],
	},
	{
		title: "Suivi de leurs dépôts par les déposants",
		description: [
			"Vos déposants sont automatiquement notifiés par mail pour les ventes de leurs articles, ils obtiennent ainsi un suivi de leur cagnotte. Ils sont aussi alertés en cas d’articles non-vendus, afin de respecter les délais de restitution.",
			"De plus, ils ont accès en temps réel à toutes ces infos dans leur espace depositor.seconde.app.",
		],
	},
	{
		title: "Gestion de plusieurs boutiques",
		description: [
			"Si vous gérez plusieurs boutiques, naviguez simplement de l’une à l’autre, sans frais supplémentaire.",
			"Retrouvez vos clients et leurs cagnottes dans toutes vos boutiques.",
		],
	},
	{
		title: "Dépôt classique ou achat-revente",
		description: [
			"Renseignez votre type de boutique dans les paramètres généraux, ou laissez vous le choix du type de dépôt au moment de son enregistrement.",
		],
	},
	{
		title: "Actualisez le prix d'un article",
		description: ["Modifiez la part boutique du prix d'un article."],
	},
	{
		title: "Achats fournisseurs",
		description: [
			"Ajoutez les articles chinés en brocante ou encore les dons, sans avoir à les rattacher à un déposant.",
		],
	},
	{
		title: "Achats avec un déposant anonyme",
		description: [
			"Enregistrez un dépôt de type achat-revente sans renseigner de déposant, mais tout en bénéficiant d’un suivi de dépôt et d’articles aussi pratique que d’habitude.",
		],
	},
];

const for_V1_0: RoadmapItem[] = [
	{
		title: "Réduction à la vente",
		description: [
			"Si vous le souhaitez, proposez à votre client une réduction sur ses achats, celle-ci est calculée automatiquement.",
		],
	},
	{
		title: "Nouvelle page d'articles",
		description: [
			"Découvrez la nouvelle page de vos articles, encore plus pratique ! Parcourez la grâce aux filtres (articles par catégorie, marque, taille ou encore date de fin de dépôt).",
		],
	},
	{
		title: "Impression des étiquettes",
		description: ["Personnalisez et imprimez vos étiquettes à code-barre."],
	},
	{
		title: "Gestion de caisse certifiée",
		description: [
			"Gérez vos fichiers comptables et factures simplement, tout en respectant les conditions d’inaltérabilité,  de sécurisation, de conservation et d’archivage des données prévues par la loi.",
			"Retrouvez aussi votre livre de police interne dans votre logiciel.",
		],
	},
	{
		title: "Migration de vos données",
		description: [
			"Retrouvez toutes vos anciennes données dans votre logiciel.",
		],
	},
	{
		title: "Nouvelle page client",
		description: [
			"Vos fichiers clients encore plus complets ! Retrouvez en un clic, sur une page pratique et ergonomique, toutes les infos et opérations concernant votre client.",
		],
	},
];

const next_6_months: RoadmapItem[] = [
	{
		title: "Nouveau dashboard",
		description: [
			"De nouvelles données concernant vos ventes et chiffres clés sont disponibles sur votre dashboard. Agencez les selon vos intérêts.",
		],
	},
	{
		title: "Paramétrage du nombre de jours de rétention",
		description: [
			"Personnalisez le nombre de jours de rétention des articles en dépôt. Il correspond à la durée pendant laquelle la boutique s’engage à garder un article à restituer avant de le donner à une association.",
		],
	},
	{
		title: "Prolongement de la date de restitution",
		description: [
			"Si vous le souhaitez, proposez à votre déposant de prolonger la période de vente de ses articles invendus.",
		],
	},
	{
		title: "Gérez les droits utilisateurs de votre logiciel",
		description: [
			"Limitez l'accès aux données et opérations de votre logiciel en fonction de l'utilisateur connecté.",
		],
	},
	{
		title: "Carte cadeau",
		description: [
			"Vos clients peuvent acheter une carte cadeau, celle-ci sera automatiquement créditée sur présentation lors d’un achat.",
		],
	},
	{
		title: "Programme de fidélité",
		description: [
			"Choisissez d’appliquer une réduction pour vos clients qui sont aussi déposants, ou à partir d'un certain nombre de paniers achetés, ou encore à partir d’un certain montant total d’achat.",
		],
	},
];

const for_2025: RoadmapItem[] = [
	{
		title: "Déploiement de l'application mobile",
		description: [
			"Vos déposants ont accès à leur compte depuis leur application mobile. Ils peuvent ainsi consulter leurs articles en dépôt, être notifiés lorsqu'un article est vendu, suivre l'évolution de leur cagnotte et être alertés pendant la période de restitution, en cas d'invendus.",
		],
	},
	{
		title: "Digitalisation des contrats de dépôt",
		description: [
			"Proposez à vos déposants de signer leur contrat de dépôt électroniquement. Il est envoyé automatiquement par mail et reste accessible depuis leur application. Côté boutique, retrouvez tous vos contrats dans votre logiciel.",
		],
	},
	{
		title: "Ajoutez des photos à vos articles",
		description: [
			"Si vous le souhaitez, prenez en photos vos articles pour une gestion de stock plus visuelle, ou simplement pour constater l'état d'un article.",
		],
	},
	{
		title: "Campagnes de soldes",
		description: [
			"Lancez des campagnes de soldes en proposant à votre déposant d'autoriser une réduction sur le prix de vente de ses articles.",
		],
	},
	{
		title: "Authentification via Google",
		description: [
			"Connectez-vous à votre logiciel grâce à votre compte Google.",
		],
	},
	{
		title: "Ajoutez une politique de prix dégressif",
		description: [
			"Programmez la baisse du prix de vente de vos articles, à intervalles réguliers. Par exemple, vous pouvez définir un prix de vente initial et un prix de vente après 30 jours, 60 jours, etc.",
		],
	},
	{
		title: "Vos rendez-vous déposants reliés à votre logiciel",
		description: [
			"Offrez à vos déposants une interface pratique de prise de rdv pour leurs dépôts. Côté boutique, votre gestion de rendez-vous s'intègre désormais dans votre logiciel. Vous pouvez donc, par exemple, consulter la fiche client de votre déposant avant le dépôt.",
		],
	},
];

export const lastUpdate = new Date("2024-09-10");

export type RoadmapColumn = {
	title: string;
	items: RoadmapItem[];
	tag?: string;
	isBeta?: boolean;
};

export const columns: RoadmapColumn[] = [
	{
		title: "Déjà disponible",
		tag: "version Bêta",
		items: done,
	},
	{
		title: "D'ici le 14 octobre",
		items: for_V1_0,
		isBeta: true,
		tag: "version 1.0",
	},
	{
		title: "Dans les 6 prochains mois",
		items: next_6_months,
	},
	{
		title: "Courant 2025",
		items: for_2025,
	},
];
