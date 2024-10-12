"use client";

import { ArrowLeft } from "lucide-react";

import { RoadmapItem, columns, lastUpdate } from "./data";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

function RoadmapItemComponent({ title, description }: RoadmapItem) {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>{title}</AccordionTrigger>
				{description.length !== 0 && (
					<AccordionContent className="flex-col">
						{description.map((str, index) => (
							<p key={index}>{str}</p>
						))}
					</AccordionContent>
				)}
			</AccordionItem>
		</Accordion>
	);
}

function RoadmapColumnComponent({
	title,
	items,
	tag,
	isBeta,
}: {
	title: string;
	tag?: string;
	items: RoadmapItem[];
	isBeta?: boolean;
}) {
	return (
		<div className="w-full flex flex-col gap-4">
			<div className=" bg-slate-100 border bg-opacity-30 px-6 py-6 rounded flex flex-col gap-2 justify-center items-start">
				<p className="font-bold">{title}</p>
				{tag && (
					<Badge variant={isBeta ? "valid" : "warning"}>{tag}</Badge>
				)}
			</div>
			<div className="flex flex-col gap-4">
				{items.map((item, index) => (
					<RoadmapItemComponent {...item} key={index} />
				))}
			</div>
		</div>
	);
}

export default function Page() {
	const navigate = useRouter();

	return (
		<div className="md:p-16 p-8 flex flex-col gap-4 items-start">
			<Button
				type="button"
				variant="outline"
				onClick={() => navigate.back()}
			>
				<ArrowLeft className="mr-2 h-4 w-4" />
				Retour
			</Button>
			<div className="flex md:flex-col gap-8 flex-col w-full">
				<div className="flex flex-col gap-2 items-start w-full">
					<img src="/logo-seconde.png" alt="Logo" className="w-48" />
					<p>
						Cette feuille de route offre une vue d'ensemble des
						fonctionnalités actuelles, et des évolutions prévues.
						Elle est mise à jour régulièrement.
					</p>
					<div>
						<p>Dernière mise à jour:</p>
						<p>
							<b>
								{format(lastUpdate, "EEEE dd LLLL yyy", {
									locale: fr,
								})}
							</b>
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-24 md:gap-12 w-full justify-between">
					{columns.map((column, index) => (
						<RoadmapColumnComponent
							title={column.title}
							items={column.items}
							tag={column.tag}
							isBeta={column.isBeta}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
