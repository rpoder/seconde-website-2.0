"use client";

import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";

export type InputCarouselItemField = {
	name: "firstname" | "lastname" | "email" | "organizationName";
	label: string;
	placeholder: string;
	description: string;
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
	const inputRefs = useRef<HTMLInputElement[]>([]);
	const canGoNext = () => {
		return fields.every((fieldValues) => {
			const value = form.watch(fieldValues.name);
			return value?.length >= 2;
		});
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
			event.preventDefault();
			if (!canGoNext()) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	useEffect(() => {
		if (isCurrent) {
			setTimeout(() => {
				console.log(inputRefs.current[0]);
				inputRefs.current[0]?.focus();
			}, 300);
		}
	}, [isCurrent]);

	return (
		<>
			<CarouselItem>
				{fields.map((fieldValues, key) => (
					<FormField
						key={key}
						control={form.control}
						name={fieldValues.name}
						render={({ field }) => (
							<FormItem className="py-2">
								<FormLabel>{fieldValues.label}</FormLabel>
								<FormControl>
									<Input
										placeholder={fieldValues.placeholder}
										{...field}
										ref={(el) =>
											(inputRefs.current[key] = el!)
										}
										onKeyDown={(event) =>
											handleKeyDown(event, key)
										}
									/>
								</FormControl>
								<FormDescription>
									{fieldValues.description}
								</FormDescription>
							</FormItem>
						)}
					/>
				))}
				<Button onClick={onClick} disabled={!canGoNext()} type="button">
					Suivant
				</Button>
			</CarouselItem>
		</>
	);
}
