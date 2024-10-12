import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Seconde — Le logiciel des dépôts-ventes",
		template: "%s — Seconde",
	},
	description:
		"Logiciel de caisse et de gestion développé avec les dépôts-ventes : moderne, intuitif, pratique, et engagé pour la seconde main !",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	);
}
