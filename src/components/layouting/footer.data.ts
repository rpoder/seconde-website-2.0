import { LinkCategory } from "./footer";
import { links as planDuSite } from "./header.data";

export const linkCategories: LinkCategory[] = [
	{
		name: "Plan du site",
		links: planDuSite,
	},
	{
		name: "Légal",
		links: [
			// {
			// 	name: "Mentions légales",
			// 	href: "/legal/mentions",
			// },
			{
				name: "Confidentialité",
				href: "/legal/rgpd",
			},
			// {
			// 	name: "CGU",
			// 	href: "/legal/cgu",
			// },
			// {
			// 	name: "CGV",
			// 	href: "/legal/cgv",
			// },
			// {
			// 	name: "Conformité fiscale",
			// 	href: "/legal/tax-compliance",
			// },
		],
	},
	{
		name: "Logiciel",
		links: [
			{
				name: "Me connecter",
				href: "https://web.seconde.app",
				target: "_blank",
				rel: "noopener noreferrer",
			},
			{
				name: "Demander une démo",
				href: "/request/demo",
			},
			// {
			// 	name: "FAQ",
			// 	href: "/faq",
			// },
			// {
			// 	name: "Aide",
			// 	href: "/help",
			// },
		],
	},
	{
		name: "Nous suivre",
		links: [
			{
				name: "Instagram",
				href: "https://www.instagram.com/seconde.app",
				target: "_blank",
			},
		],
	},
];
