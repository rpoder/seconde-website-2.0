import { CarouselItem } from "@/components/ui/carousel";
import { CircleCheck } from "lucide-react";

export default function ThanksItem({ isSuccess }: { isSuccess: boolean }) {
	return (
		<CarouselItem>
			{isSuccess ? (
				<div className="p-8 flex flex-col items-center justify-center gap-4 h-full">
					<CircleCheck size={32} strokeWidth={1.25} />
					<div className="flex flex-col items-center justify-center">
						<p>Super ! Nous avons bien reçu votre demande !</p>
						<p>Nous revenons vers vous d'ici 24h.</p>
					</div>

					<div className="flex flex-col items-center justify-center text-sm">
						<p>A bientôt,</p>
						<p>Margot et Ronan</p>
					</div>
				</div>
			) : (
				<p>
					Une erreur est survenue lors de l'envoi de votre demande.
					Merci de réessayer
				</p>
			)}
		</CarouselItem>
	);
}
