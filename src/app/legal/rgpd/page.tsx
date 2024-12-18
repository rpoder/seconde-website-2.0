import { privacyPolicyData } from "./data";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function PrivacyPolicyPage() {
	return (
		<div className="container mx-auto px-48 flex flex-col gap-20 text-justify">
			<div className="w-full">
				<h1 className="text-3xl font-bold">
					{privacyPolicyData.title}
				</h1>
			</div>
			<div className="w-full flex flex-col gap-16">
				{privacyPolicyData.sections.map((section, index) => (
					<div key={index} className="flex flex-col gap-8">
						<h2 className="text-2xl font-semibold">
							{index + 1}. {section.title}
						</h2>
						{section.content.map((contentItem, contentIndex) => (
							<div
								key={contentIndex}
								className="flex flex-col gap-4"
							>
								{contentItem.texts.map((texts, textsIndex) => (
									<div key={textsIndex}>
										{texts.map((text, textIndex) => (
											<p key={textIndex}>{text}</p>
										))}
									</div>
								))}
								{contentItem.table && (
									<Table>
										<TableHeader>
											<TableRow>
												{contentItem.table.headers.map(
													(header, headerIndex) => (
														<TableHead
															key={headerIndex}
														>
															{header}
														</TableHead>
													)
												)}
											</TableRow>
										</TableHeader>
										<TableBody>
											{contentItem.table.rows.map(
												(row, rowIndex) => (
													<TableRow key={rowIndex}>
														{row.map(
															(
																cell,
																cellIndex
															) => (
																<TableCell
																	key={
																		cellIndex
																	}
																>
																	{cell}
																</TableCell>
															)
														)}
													</TableRow>
												)
											)}
										</TableBody>
									</Table>
								)}
							</div>
						))}
						{section.subSections &&
							section.subSections.map(
								(subSection, subSectionIndex) => (
									<div
										key={subSectionIndex}
										className="flex flex-col gap-4 ml-16"
									>
										<h3 className="text-xl font-semibold">
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
													className="flex flex-col gap-4"
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
														<Table>
															<TableHeader>
																<TableRow>
																	{subContentItem.table.headers.map(
																		(
																			header,
																			headerIndex
																		) => (
																			<TableHead
																				key={
																					headerIndex
																				}
																			>
																				{
																					header
																				}
																			</TableHead>
																		)
																	)}
																</TableRow>
															</TableHeader>
															<TableBody>
																{subContentItem.table.rows.map(
																	(
																		row,
																		rowIndex
																	) => (
																		<TableRow
																			key={
																				rowIndex
																			}
																		>
																			{row.map(
																				(
																					cell,
																					cellIndex
																				) => (
																					<TableCell
																						key={
																							cellIndex
																						}
																					>
																						{
																							cell
																						}
																					</TableCell>
																				)
																			)}
																		</TableRow>
																	)
																)}
															</TableBody>
														</Table>
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
