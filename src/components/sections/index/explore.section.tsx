import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Explore() {
	return (
		<section className="mx-auto container px-4 space-y-12 flex flex-col items-center">
			<div className="flex flex-col items-center w-full">
				<div className="w-full h-96 bg-[url('/thrift-shop.jpeg')] bg-cover bg-[center_top_-100px] flex flex-col justify-center items-center">
					<h2
						className="text-center font-bold text-8xl text-white shadow"
						style={{
							fontFamily: "canada-type-gibson",
							fontWeight: 550,
							fontStyle: "italic",
						}}
					>
						Intuitif
					</h2>
				</div>
			</div>
			<h2 className="text-center font-bold opacity-80">
				Tout ce dont votre dépôt-vente a besoin, en un seul logiciel
			</h2>
			<Button asChild type="button" size="lg" className="px-8 ">
				<Link href="/software">Explorer le logiciel</Link>
			</Button>
		</section>
	);
}
