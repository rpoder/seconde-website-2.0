import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Roadmap",
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
