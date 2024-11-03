import ScreenShot from "@/../public/assets/images/DSC09114-resized.jpg";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="mx-auto container flex flex-col-reverse md:flex-row items-center gap-8 md:gap-8">
			<div className="space-y-6 w-full md:w-2/5">
				<h1>
					Seconde, le logiciel en ligne des{" "}
					<b
						className="font-semibold tracking-tight whitespace-nowrap"
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
				className="w-full md:w-3/5 rounded-md border-primary"
			/>
		</section>
	);
}
