import ScreenShot from "@/../public/DSC09114-resized.jpg";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="mx-auto container flex flex-row items-center gap-32 relative">
			<div className="space-y-6 w-2/5 z-10">
				<h1>
					Seconde, le logiciel en ligne des{" "}
					<b
						className="font-semibold tracking-tight"
						style={{
							fontFamily: "canada-type-gibson",
							fontWeight: 550,
							fontStyle: "italic",
						}}
					>
						dépôts-ventes
					</b>
				</h1>
				<h2 className="text-secondary-darker">
					Un outil simple, pratique et moderne pour la gestion
					complète de votre dépôt-vente
				</h2>
			</div>
			<Image
				src={ScreenShot}
				alt="screenshot webapp"
				className="w-3/5 rounded-md border-primary"
			/>
		</section>
	);
}
