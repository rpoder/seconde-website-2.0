import LegalTable from "@/components/tables/legal.table";
import data from "./data";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function Page() {
	return (
		<div className="container mx-auto md:px-48 flex flex-col gap-12 text-justify">
			<div className="w-full space-y-2">
				<h1 className="text-3xl font-bold text-left">{data.title}</h1>
				<p>
					Mis à jour le{" "}
					{format(data.updatedAt, "dd LLLL yyyy", {
						locale: fr,
					})}
				</p>
			</div>
			<div className="w-full flex flex-col gap-16">
				{data.preamble && (
					<div className="w-full flex flex-col gap-4">
						{data.preamble.content.map(
							(preambleItem, preambleIndex) => (
								<div
									key={preambleIndex}
									className="flex flex-col gap-6"
								>
									{preambleItem.texts.map(
										(texts, textsIndex) => (
											<div key={textsIndex}>
												{texts.map(
													(text, textIndex) => (
														<p key={textIndex}>
															{text}
														</p>
													)
												)}
											</div>
										)
									)}
									{preambleItem.table && (
										<LegalTable
											table={preambleItem.table}
										/>
									)}
								</div>
							)
						)}
					</div>
				)}
				{data.sections.map((section, index) => (
					<div key={index} className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold text-left">
							{index + 1}. {section.title}
						</h2>
						{section.content?.map((contentItem, contentIndex) => (
							<div
								key={contentIndex}
								className="flex flex-col gap-6"
							>
								{contentItem.texts.map((texts, textsIndex) => (
									<div key={textsIndex}>
										{texts.map((text, textIndex) => (
											<p key={textIndex}>{text}</p>
										))}
									</div>
								))}
								{contentItem.table && (
									<LegalTable table={contentItem.table} />
								)}
							</div>
						))}
						{section.subSections &&
							section.subSections.map(
								(subSection, subSectionIndex) => (
									<div
										key={subSectionIndex}
										className="flex flex-col gap-4 md:ml-16"
									>
										<h3 className="text-xl font-semibold text-left">
											{index + 1}.{subSectionIndex + 1}.{" "}
											{subSection.title}
										</h3>
										{subSection.content.map(
											(
												subContentItem,
												subContentIndex
											) => (
												<div
													key={subContentIndex}
													className="flex flex-col gap-6"
												>
													{subContentItem.texts.map(
														(texts, textsIndex) => (
															<div
																key={textsIndex}
															>
																{texts.map(
																	(
																		text,
																		textIndex
																	) => (
																		<p
																			key={
																				textIndex
																			}
																		>
																			{
																				text
																			}
																		</p>
																	)
																)}
															</div>
														)
													)}
													{subContentItem.table && (
														<LegalTable
															table={
																subContentItem.table
															}
														/>
													)}
												</div>
											)
										)}
									</div>
								)
							)}
					</div>
				))}
			</div>
		</div>
	);
}
