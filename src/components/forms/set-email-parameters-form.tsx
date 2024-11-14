"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "../ui/form";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const updateEmailPreferencesSchema = z.object({
	onDeposit: z.boolean(),
	onBuy: z.boolean(),
	onProviderPayment: z.boolean(),
	onExpire: z.boolean(),
	onSoldArticle: z.boolean(),
	onWithdrawal: z.boolean(),
});

export default function SetEmailParametersForm({}: {}) {
	const form = useForm<z.infer<typeof updateEmailPreferencesSchema>>({
		resolver: zodResolver(updateEmailPreferencesSchema),
		defaultValues: {
			onDeposit: true,
			onBuy: true,
			onProviderPayment: true,
			onExpire: true,
			onSoldArticle: true,
			onWithdrawal: true,
		},
	});

	function onSubmit(data: z.infer<typeof updateEmailPreferencesSchema>) {
		console.log(data);
	}

	const emailPreferences = [
		{
			name: "onDeposit",
			label: "Vos récapitulatifs de dépôt",
			description:
				"Recevez un e-mail pour confirmer et récapituler votre dépôt.",
			isImportant: false,
		},
		{
			name: "onExpire",
			label: "Vos rappels de restitution",
			description:
				"En cas d’articles invendus, recevez un e-mail pour vous rappeler la période de restitution contractuelle.",
			isImportant: false,
		},
		{
			name: "onSoldArticle",
			label: "Vos notifications de vente",
			description:
				"Recevez un e-mail lorsqu’un de vos articles est vendu. Vous pourrez ainsi consulter le montant de votre cagnotte.",
			isImportant: true,
		},
		{
			name: "onWithdrawal",
			label: "Vos confirmations de restitution",
			description:
				"Recevez un e-mail lorsqu’un article vous est restitué.",
			isImportant: false,
		},
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				{emailPreferences.map((preference) => (
					<FormField
						key={preference.name}
						control={form.control}
						name={
							preference.name as keyof z.infer<
								typeof updateEmailPreferencesSchema
							>
						}
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border border-gray-200 p-4 gap-8">
								<div className="space-y-0.5">
									<FormLabel>{preference.label}</FormLabel>
									{/* <FormDescription className="text-sm">
										{preference.description}
									</FormDescription> */}
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				))}
				<Button
					type="submit"
					className="w-full"
					size="lg"
					variant="secondary"
				>
					Mettre à jour
				</Button>
			</form>
		</Form>
	);
}
