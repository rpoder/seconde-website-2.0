export type RoadmapItem = {
	title: string;
	description: string[];
};

export const updatedAt = new Date("2024-11-30");

export type RoadmapColumn = {
	title: string;
	items: RoadmapItem[];
	tag?: string;
};

const columns: RoadmapColumn[] = [
	{
		title: "Déjà disponible",
		tag: "version 1.0",
		items: [
			{
				title: "Dépôt classique ou achat-revente",
				description: [
					"Configurez votre type de dépôt par défaut, tout en gardant la flexibilité de gérer chaque situation particulière.",
				],
			},
			{
				title: "Réduction à la vente",
				description: [
					"Si vous le souhaitez, proposez à votre client une réduction sur ses achats, celle-ci est calculée automatiquement.",
				],
			},
			{
				title: "Cagnotte déposants",
				description: [
					"Offrez la possibilité à vos déposants de payer leurs futurs achats dans votre boutique grâce à leur cagnotte.",
				],
			},
			{
				title: "Impression des étiquettes",
				description: [
					"Personnalisez et imprimez vos étiquettes à code-barre.",
				],
			},
			{
				title: "Gestion de caisse certifiée",
				description: [
					"Gérez vos fichiers comptables et factures simplement, tout en respectant les conditions d’inaltérabilité, de sécurisation, de conservation et d’archivage des données prévues par la loi.",
					"Retrouvez aussi votre livre de police interne dans votre logiciel.",
				],
			},
			{
				title: "Gestion de plusieurs boutiques",
				description: [
					"Si vous gérez plusieurs boutiques, naviguez simplement de l’une à l’autre.",
					"Retrouvez vos clients et leurs cagnottes dans toutes vos boutiques, tout en séparant vos stocks et votre comptabilité.",
				],
			},
			{
				title: "Suivi de leurs dépôts par les déposants",
				description: [
					"Vos déposants reçoivent automatiquement le récap de leur dépôt par mail. Ils sont notifiés pour leurs ventes et peuvent ainsi suivre l'évolution de leur cagnotte. En cas d’invendus, ils reçoivent des rappels afin de respecter les délais de restitution.",
				],
			},
			{
				title: "Migration de vos données",
				description: [
					"Retrouvez toutes vos anciennes données dans votre logiciel.",
				],
			},
			{
				title: "Carte cadeau",
				description: [
					"Vos clients peuvent acheter une carte cadeau, celle-ci sera automatiquement créditée sur présentation lors d’un achat.",
				],
			},
		],
	},
	{
		title: "Dans les 3 prochains mois",
		items: [
			{
				title: "Paiement en plusieurs fois",
				description: [
					"Offrez à votre client la possibilité de payer en plusieurs fois, et retouvez facilement vos reglements en attente.",
				],
			},
			{
				title: "Nouvelle page d'articles",
				description: [
					"Découvrez la nouvelle page de vos articles, encore plus pratique ! Parcourez-la grâce aux filtres (articles par catégorie, marque, taille ou encore date de fin de dépôt).",
				],
			},
			{
				title: "Programme de fidélité",
				description: [
					"Choisissez d’appliquer une réduction pour vos clients qui sont aussi déposants, ou à partir d'un certain nombre de paniers achetés, ou encore à partir d’un certain montant total d’achat.",
				],
			},
			{
				title: "Nouveau dashboard",
				description: [
					"De nouvelles données concernant vos ventes et chiffres clés sont disponibles sur votre dashboard. Agencez-les selon vos intérêts.",
				],
			},
			{
				title: "Campagnes de soldes",
				description: [
					"Lancez des campagnes de soldes en appliquant une réduction sur tout ou partie de vos articles.",
				],
			},
			{
				title: "Ajoutez une politique de prix dégressifs",
				description: [
					"Programmez la baisse du prix de vente de vos articles, à intervalles réguliers. Par exemple, vous pouvez définir un prix de vente initial et un prix de vente après 30 jours, 60 jours, etc.",
				],
			},
		],
	},
	{
		title: "Courant 2025",
		items: [
			{
				title: "Déploiement de l'application mobile",
				description: [
					"Vos déposants ont accès à leur compte depuis leur application mobile. Ils peuvent ainsi consulter leurs articles en dépôt, être notifiés lorsqu'un article est vendu, suivre l'évolution de leur cagnotte et être alertés en cas d'invendus, afin de respecter la période de restitution.",
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
				title: "Vos rendez-vous déposants reliés à votre logiciel",
				description: [
					"Offrez à vos déposants une interface pratique de prise de rendez-vous pour leurs dépôts. Côté boutique, votre gestion de rendez-vous s'intègre désormais dans votre logiciel. Vous pouvez donc, par exemple, consulter la fiche client de votre déposant avant le dépôt.",
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
		],
	},
];

export default columns;
