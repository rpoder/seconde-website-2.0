"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
} from "@/components/ui/carousel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputCarouselItem, { InputCarouselItemField } from "./items/inputs.item";
import { useEffect, useState } from "react";
import ThanksItem from "./items/thanks.item";
import axios from "axios";

export const demoFormSchema = z.object({
	firstname: z.string().min(2),
	lastname: z.string().min(2),
	email: z.string().email(),
	organizationName: z.string().min(2),
	message: z.string().optional(),
});

const slides: InputCarouselItemField[][] = [
	[
		{
			name: "firstname",
			label: "Prénom",
			placeholder: "John",
		},
		{
			name: "lastname",
			label: "Nom",
			placeholder: "Doe",
		},
		{
			name: "email",
			label: "Email",
			placeholder: "john@gmail.com",
		},
	],
	[
		{
			name: "organizationName",
			label: "Nom de votre boutique",
			placeholder: "Julie dressing",
		},
	],
	[
		{
			name: "message",
			label: "Votre message",
			placeholder: "Insérez votre message ici",
			isTextArea: true,
		},
	],
];

export default function ContactCarousel() {
	const [success, setSuccess] = useState(false);
	const [, setError] = useState(false);
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const form = useForm<z.infer<typeof demoFormSchema>>({
		resolver: zodResolver(demoFormSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			organizationName: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof demoFormSchema>) {
		setError(false);
		setSuccess(false);
		axios
			.post(
				"https://prod.api.seconde.app/v1/contact-us?type=contact",
				{
					firstname: values.firstname,
					lastname: values.lastname,
					email: values.email,
					organizationName: values.organizationName,
					message: values.message,
				},
				{ withCredentials: true }
			)
			.then(function () {
				setSuccess(true);
				api?.scrollNext();
			})
			.catch(function () {
				setError(true);
				api?.scrollNext();
			});
	}

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2 bg-secondary py-8"
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
					}
				}}
			>
				<div className="flex flex-col justify-center items-center w-full gap-2">
					<h3 className="font-semibold">Écrivez nous</h3>
					<p className="text-sm">
						Étape {current}/{count}
					</p>
					<div className="flex flex-row w-full gap-2 justify-center ">
						{Array.from({ length: count }).map((_, key) => (
							<div
								key={key}
								className={`w-2 h-2 rounded-full ${
									key + 1 === current
										? "bg-secondary-foreground"
										: "bg-secondary-foreground/20"
								}`}
							/>
						))}
					</div>
				</div>
				<Carousel setApi={setApi} draggable={false}>
					<CarouselContent>
						{slides.map((fieldValues, key) => (
							<InputCarouselItem
								key={key}
								form={form}
								fields={fieldValues}
								onClick={() => api?.scrollNext()}
								isCurrent={key + 1 === current}
								isLast={key + 1 === count - 1}
								handleSubmit={onSubmit}
							/>
						))}
						<ThanksItem isSuccess={success} />
					</CarouselContent>
				</Carousel>
			</form>
		</Form>
	);
}
