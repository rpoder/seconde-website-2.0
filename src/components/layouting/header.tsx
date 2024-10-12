import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoImage from "@/../public/logo_seconde_indigo.svg";
import { links } from "./header.data";

export default function Nav(): JSX.Element {
	return (
		<header>
			<nav className="container mx-auto flex flex-row justify-between px-4 py-8">
				<div className="flex flex-row gap-8 items-center">
					<Link href="/">
						<Image
							src={LogoImage}
							alt="logo seconde"
							className="w-40 -translate-y-1"
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
				<div className="space-x-2">
					<Button variant="secondary" type="button" asChild>
						<Link href="request/demo">Demander une démo</Link>
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
