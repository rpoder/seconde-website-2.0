import { LogIn, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo-seconde.png";

export default function Home() {
	return (
		<div className="container flex flex-col md:flex-row w-full mx-auto px-8 md:px-24 gap-8">
			<div className="flex flex-col gap-8 w-full h-screen justify-center">
				<div className="flex flex-col gap-8">
					<div className="space-y-4">
						<Image
							alt="logo seconde"
							src={Logo}
							width={230}
							unoptimized
						/>
						<h1 className="text-slate-700">
							Découvrez le logiciel en ligne des dépôts-ventes
						</h1>
					</div>
				</div>
				<div className="flex flex-row gap-4 flex-wrap">
					<Button size="lg" asChild>
						<Link href="https://web.seconde.app">
							<LogIn className="mr-2 h-4 w-4" />
							Connectez-vous
						</Link>
					</Button>
					<Button variant="secondary" size="lg" asChild>
						<Link href="/roadmap">
							<Sparkle className="mr-2 h-4 w-4" />
							Découvrez notre roadmap
						</Link>
					</Button>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full gap-8 md:mb-0 mb-32">
				<h2>Intuitif. Pratique. Complet. Engagé. Et joli.</h2>
				<div>
					<h3>Qu’est-ce-que Seconde ?</h3>
					<p className="text-muted-foreground">
						Seconde est une suite d’outils informatiques dédiés aux
						dépôts-ventes et à leurs déposants. Notre objectif est
						d’accompagner les dépôts-ventes et de les soutenir dans
						tous leurs besoins métiers, tout en simplifiant les
						démarches des déposants.
					</p>
				</div>
				<div>
					<h3>
						Le logiciel de caisse et de gestion pour dépôts-ventes
					</h3>
					<p className="text-muted-foreground">
						Vous gérez un dépôt-vente ? Connectez-vous à votre
						logiciel en ligne de n’importe où, et bénéficiez d’un
						outil simple, pratique et moderne pour la gestion
						complète de votre boutique !
					</p>
				</div>
				<div>
					<h3>Le truc en plus pour vos déposants ?</h3>
					<p className="text-muted-foreground">
						Seconde tient au courant vos déposants ! Récapitulatif
						de dépôt, notification de vente ou encore rappel de
						restitution : vos déposants sont automatiquement
						informés par mail !
					</p>
				</div>
				<p>
					Seconde est disponible pour <code>65€ HT/mois</code>, sans
					engagement. Écrivez nous sur contact@seconde.app pour
					essayer Seconde gratuitement.
				</p>
			</div>
		</div>
	);
}
