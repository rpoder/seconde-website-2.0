import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouting/header";
import Footer from "@/components/layouting/footer";

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
			<head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/cmh5ses.css"
				/>
			</head>
			<body className="flex flex-col gap-16 font-Stevie">
				<Header />
				<div className="flex flex-col gap-24">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
