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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				{collumns.map((column, index) => (
					<div
						key={index}
						className="flex flex-col w-full md:gap-8 gap-2"
					>
						<div className="border px-4 py-4 flex gap-2 items-center">
							{column.icon && (
								<div className="p-2 bg-[#E8DCDF]/30">
									<column.icon
										size={20}
										className="text-[#CB3461]"
									/>
								</div>
							)}
							<h2>{column.title}</h2>
						</div>
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
										<AccordionContent className="flex flex-col gap-2">
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
