import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImage from "@/../public/logo_seconde_white.svg";
import { linkCategories } from "./footer.data";

export type LinkItem = {
	name: string;
	href: string;
	target?: string;
	rel?: string;
};

export type LinkCategory = {
	name: string;
	links: LinkItem[];
};

export default function Footer(): JSX.Element {
	return (
		<footer className="bg-primary text-white">
			<div className="container mx-auto flex flex-col justify-between gap-8 px-4 py-16">
				<div className="flex flex-row justify-between">
					<Link href="/">
						<Image
							src={LogoImage}
							alt="logo seconde"
							className="w-36 -translate-y-0.5"
						/>
					</Link>
					<div className="flex flex-row gap-4">
						{linkCategories.map((category) => (
							<div
								key={category.name}
								className="space-y-4 min-w-36"
							>
								<p className="font-bold">{category.name}</p>
								<ul className="flex flex-col gap-2">
									{category.links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												target={
													link.target
														? link.target
														: undefined
												}
												rel={
													link.rel
														? link.rel
														: undefined
												}
												className="underline text-secondary text-sm"
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="border-t-[1px] border-t-muted-foreground text-muted-foreground text-sm flex flex-row justify-between pt-6">
					<p>Copyright Seconde 2024 - Tous droits réservés</p>
					<p>Fait avec ❤️ pour les dépôts-ventes</p>
				</div>
			</div>
		</footer>
	);
}
