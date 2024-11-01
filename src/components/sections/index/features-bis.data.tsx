import { StaticImageData } from "next/image";
import SaleImage from "@/../public/assets/images/sale.jpg";
import { cn } from "@/lib/utils";
import { text } from "stream/consumers";

export type FeatureBox = {
	title: string;
	description: string;
	buttonText: string;
	buttonHref: string;
	size: "small" | "large";
	textPosition: "top" | "bottom";
	image?: StaticImageData;
	component?: JSX.Element;
	videoSrc?: string;
	noShadow?: boolean;
};

const notifications = [
	{
		title: "Vous avez reçu votre contrat de dépôt",
		className: "translate-x-8",
	},
	{
		title: "+120€ : Votre article a été vendu !",
		className: "translate-x-56",
	},
	{
		title: "Il vous reste 7 jours pour récupérer vos invendus",
		className: "-translate-x-8",
	},
];

function NotificationBox({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex flex-row gap-4 items-center border border-secondary rounded-lg backdrop-blur-sm p-4 px-4 bg-blue-50/50 border-blue-200 ",
				className
			)}
		>
			<p className="text-sm text-blue-400">{title}</p>
		</div>
	);
}

function NotificationComponent() {
	return (
		<div className="flex flex-col gap-4 items-start pt-16">
			{notifications.map((notification, i) => (
				<NotificationBox
					key={i}
					title={notification.title}
					className={notification.className}
				/>
			))}
		</div>
	);
}

const firstLine: FeatureBox[] = [
	{
		title: "Créez un dépôt en quelques clics",
		description:
			"Deux parcours de dépôt au choix pour vous accompagner en toute fluidité selon vos habitudes.",
		size: "large",
		textPosition: "top",
		buttonText: "En savoir plus",
		buttonHref: "/",
		videoSrc: "/assets/videos/SEQ-deposit-flow.mp4",
	},
	{
		title: "Notifiez vos déposants automatiquement",
		description:
			"Vos deposants seront ravis de suivre leurs depots.. et n’oublieront plus de venir recuperer leurs invendus !",
		size: "small",
		textPosition: "bottom",
		buttonText: "En savoir plus",
		buttonHref: "/",
		component: NotificationComponent(),
	},
];

const secondLine: FeatureBox[] = [
	{
		title: "Gérez toutes vos boutiques en un seul outil",
		description:
			"Naviguez entre vos boutiques et reconnaissez vos clients tout en dissociant vos stocks.",
		size: "small",
		textPosition: "bottom",
		buttonText: "En savoir plus",
		buttonHref: "/",
		videoSrc: "/assets/videos/SEQ-select-org.mp4",
		noShadow: true,
	},
	{
		title: "Travaillez avec un logiciel adapté aux dépôts-ventes",
		description:
			"Bénéficiez d’une logique de caisse pensée spécifiquement pour les depots-ventes.",
		size: "large",
		textPosition: "top",
		buttonText: "En savoir plus",
		buttonHref: "/",
		image: SaleImage,
	},
];

export const features = [firstLine, secondLine];
