import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
	return (
		<section className="mx-auto container px-4 space-y-8">
			<div className="space-y-6">
				<h1 className="text-center">
					Le logiciel de gestion tout en un pour votre dépôt-vente
				</h1>
				<h2 className="text-center text-muted-foreground">
					Un outil simple, pratique et moderne pour la gestion
					complète de votre dépôt-vente
				</h2>
			</div>
			<AspectRatio ratio={16 / 9} className="bg-slate-100 rounded-lg" />
		</section>
	);
}
