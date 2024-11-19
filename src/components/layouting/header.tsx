import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoImage from "@/../public/assets/svg/logo_seconde_icon_orange.svg";
import { links } from "./header.data";

export default function Header(): JSX.Element {
	return (
		<header className="sticky top-0 z-10 bg-white border-b border-secondary">
			<nav className="container mx-auto flex flex-col md:flex-row justify-between py-8">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<Link href="/">
						<Image
							src={LogoImage}
							alt="logo seconde"
							className="w-14"
							priority={false}
						/>
					</Link>
					<ul className="flex flex-row">
						{links.map((link) => (
							<li key={link.href}>
								<Button variant="ghost" type="button" asChild>
									<Link
										href={link.href}
										className="font-semibold text-md"
									>
										{link.name}
									</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div className="space-x-2 hidden md:flex">
					<Button variant="secondary" type="button" asChild>
						<Link href="/request/demo">Demander une démo</Link>
					</Button>
					<Button type="button" asChild>
						<Link
							href="https://web.seconde.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Me connecter
						</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
