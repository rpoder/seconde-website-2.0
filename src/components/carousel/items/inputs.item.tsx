"use client";

import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { validate } from "email-validator";
import { Textarea } from "@/components/ui/textarea";

export type InputCarouselItemField = {
	name: "firstname" | "lastname" | "email" | "organizationName" | "message";
	isTextArea?: boolean;
	label: string;
	placeholder: string;
};

export default function InputsCarouselItem({
	form,
	fields,
	onClick,
	isCurrent,
}: {
	form: UseFormReturn<{
		firstname: string;
		lastname: string;
		email: string;
		organizationName: string;
		message?: string | undefined;
	}>;
	fields: InputCarouselItemField[];
	onClick: () => void;
	isCurrent: boolean;
}) {
	const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);
	const canGoNext = () => {
		const emptyFields = fields.every((fieldValues) => {
			const value = form.watch(fieldValues.name);
			return (value?.length || 0) >= 2;
		});
		const validEmail = validate(form.watch("email"));
		return emptyFields && validEmail;
	};

	const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
		if (event.key === "Enter") {
			if (canGoNext()) {
				onClick();
			} else {
				inputRefs.current[index + 1]?.focus();
			}
		}
		if (event.key === "Tab") {
			if (!canGoNext()) {
				event.preventDefault();
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	useEffect(() => {
		if (isCurrent) {
			setTimeout(() => {
				inputRefs.current[0]?.focus();
			}, 300);
		}
	}, [isCurrent]);

	return (
		<>
			<CarouselItem>
				<div className="px-8">
					{fields.map((fieldValues, key) => (
						<FormField
							key={key}
							control={form.control}
							name={fieldValues.name}
							render={({ field }) => (
								<FormItem className="py-2">
									<FormLabel>{fieldValues.label}</FormLabel>
									<FormControl>
										{fieldValues.isTextArea ? (
											<Textarea
												placeholder={
													fieldValues.placeholder
												}
												{...field}
												ref={(el) => {
													inputRefs.current[key] =
														el!;
												}}
												onKeyDown={(event) =>
													handleKeyDown(event, key)
												}
												className="border-primary"
											/>
										) : (
											<Input
												placeholder={
													fieldValues.placeholder
												}
												{...field}
												ref={(el) => {
													inputRefs.current[key] =
														el!;
												}}
												onKeyDown={(event) =>
													handleKeyDown(event, key)
												}
												className="border-primary"
											/>
										)}
									</FormControl>
								</FormItem>
							)}
						/>
					))}
					<Button
						onClick={onClick}
						disabled={!canGoNext()}
						type="button"
						className="mt-4 w-full"
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								onClick();
							}
						}}
					>
						Suivant
					</Button>
				</div>
			</CarouselItem>
		</>
	);
}
