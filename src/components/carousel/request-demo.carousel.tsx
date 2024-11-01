"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputCarouselItem, { InputCarouselItemField } from "./items/inputs.item";
import { useEffect, useState } from "react";

export const demoFormSchema = z.object({
	firstname: z.string().min(2),
	lastname: z.string().min(2),
	email: z.string().email(),
	organizationName: z.string().min(2),
	message: z.string().optional(),
});

const firstSlide: InputCarouselItemField[] = [
	{
		name: "firstname",
		label: "Prénom",
		placeholder: "John",
		description: "This is your firsname",
	},
	{
		name: "lastname",
		label: "Nom",
		placeholder: "Doe",
		description: "This is your lastname",
	},
	{
		name: "email",
		label: "Email",
		placeholder: "john@gmail.com",
		description: "This is your email",
	},
];

const secondSlide: InputCarouselItemField[] = [
	{
		name: "organizationName",
		label: "Organization Name",
		placeholder: "This is your organization name",
		description: "This is your organization name",
	},
];

const slides: InputCarouselItemField[][] = [firstSlide, secondSlide];

export default function RequestDemoCarousel() {
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
		console.log(values);
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
				className="space-y-8"
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
					}
				}}
			>
				<Carousel setApi={setApi}>
					<CarouselContent>
						{slides.map((fieldValues, key) => (
							<InputCarouselItem
								key={key}
								form={form}
								fields={fieldValues}
								onClick={() => api?.scrollNext()}
								isCurrent={key + 1 === current}
							/>
						))}
						<CarouselItem>tout bon</CarouselItem>
					</CarouselContent>
				</Carousel>
			</form>
		</Form>
	);
}
