import ExploreAnimation from "@/components/animations/explore.animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Explore() {
	return (
		<section className="mx-auto container px-4 space-y-12 flex flex-col items-center">
			<div className="flex flex-col items-center w-full">
				<ExploreAnimation />
			</div>
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-center font-bold opacity-80">
					Tout ce dont votre dépôt-vente a besoin, en un seul logiciel
				</h2>
				<Button asChild type="button" size="lg" className="px-8 ">
					<Link href="#software">Explorer le logiciel</Link>
				</Button>
			</div>
		</section>
	);
}
