import { StaticImageData } from "next/image";
import SetEmailParametersForm from "@/components/forms/set-email-parameters-form";

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

// const notifications = [
// 	{
// 		title: "Vous avez reçu votre contrat de dépôt",
// 		className: "md:translate-x-8",
// 	},
// 	{
// 		title: "+120€ : Votre article a été vendu !",
// 		className: "md:translate-x-56",
// 	},
// 	{
// 		title: "Il vous reste 7 jours pour récupérer vos invendus",
// 		className: "md:-translate-x-16",
// 	},
// ];

// function NotificationBox({
// 	title,
// 	className,
// }: {
// 	title: string;
// 	className?: string;
// }) {
// 	return (
// 		<div
// 			className={cn(
// 				"flex flex-row gap-4 items-center border border-secondary rounded-lg backdrop-blur p-4 px-4 bg-blue-100/50 border-blue-200 ",
// 				className
// 			)}
// 		>
// 			<p className="text-sm text-blue-400 font-bold">{title}</p>
// 		</div>
// 	);
// }

function NotificationComponent() {
	return (
		<div className="flex flex-col gap-4 items-start justify-center h-full text-left p-4">
			<h4 className="font-semibold">Selectionnez vos préférences</h4>
			<div className="flex flex-row items-center justify-between rounded-lg gap-2">
				<SetEmailParametersForm />
			</div>
			{/* <div className="absolute top-0 left-0 flex flex-col gap-16">
				{notifications.map((notification, i) => (
					<NotificationBox
						key={i}
						title={notification.title}
						className={notification.className}
					/>
				))}
			</div> */}
		</div>
	);
}

export type Feature = {
	title: string;
	description: string;
	image?: StaticImageData;
	component?: JSX.Element;
	videoSrc?: string;
	noShadow?: boolean;
	hasBorder?: boolean;
};

export const features: Feature[][] = [
	[
		{
			title: "Créez un dépôt en quelques clics",
			description:
				"Deux parcours de dépôt au choix pour vous accompagner en toute fluidité selon vos habitudes.",
			videoSrc: "/assets/videos/SEQ-deposit-flow.mp4",
			hasBorder: true,
		},
	],
	[
		{
			title: "Gérez toutes vos boutiques en un seul outil",
			description:
				"Naviguez entre vos boutiques et reconnaissez vos clients tout en dissociant vos stocks.",
			videoSrc: "/assets/videos/SEQ-select-org.mp4",
			noShadow: true,
		},
		{
			title: "Notifiez vos déposants automatiquement",
			description:
				"Vos deposants seront ravis de suivre leurs depots.. et n’oublieront plus de venir recuperer leurs invendus !",
			component: NotificationComponent(),
		},
	],
];
