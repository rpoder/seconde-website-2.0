import collumns, { updatedAt } from "./data";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function page() {
	return (
		<div className="container mx-auto flex flex-col w-full gap-16">
			<div className="space-y-2">
				<h1>Roadmap</h1>
				<p>
					Actualisée le{" "}
					{format(updatedAt, "dd LLLL yyyy", { locale: fr })}
				</p>
			</div>
			<div className="flex flex-row gap-12">
				{collumns.map((column, index) => (
					<div key={index} className="flex flex-col w-full gap-8">
						<h2 className="border px-4 py-4">{column.title}</h2>
						<div className="flex flex-col">
							{column.items.map((item, index) => (
								<Accordion
									type="single"
									collapsible
									key={index}
								>
									<AccordionItem
										value="item-1"
										className="w-full"
									>
										<AccordionTrigger>
											{item.title}
										</AccordionTrigger>
										<AccordionContent>
											{item.description.map(
												(description, index) => (
													<p key={index}>
														{description}
													</p>
												)
											)}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
