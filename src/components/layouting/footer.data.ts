import { LinkCategory, LinkItem } from "./footer";
import { links as planDuSite } from "./header.data";

const legal: LinkItem[] = [
	{
		name: "Mentions légales",
		href: "/legal/mentions",
	},
	{
		name: "Confidentialité",
		href: "/privacy/policy",
	},
	{
		name: "CGU",
		href: "/legal/cgu",
	},
	{
		name: "CGV",
		href: "/legal/cgv",
	},
	{
		name: "Conformité fiscale",
		href: "/legal/tax-compliance",
	},
];

const logiciel: LinkItem[] = [
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
	{
		name: "FAQ",
		href: "/faq",
	},
	{
		name: "Aide",
		href: "/help",
	},
];

const social: LinkItem[] = [
	{
		name: "Instagram",
		href: "https://www.instagram.com/seconde.app",
		target: "_blank",
	},
];

export const linkCategories: LinkCategory[] = [
	{
		name: "Plan du site",
		links: planDuSite,
	},
	{
		name: "Légal",
		links: legal,
	},
	{
		name: "Logiciel",
		links: logiciel,
	},
	{
		name: "Nous suivre",
		links: social,
	},
];
