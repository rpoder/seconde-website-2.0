import ContactCarousel from "@/components/carousel/contact.carousel";

export default function page() {
	return (
		<div className="container mx-auto flex flex-col w-full gap-4">
			<h1>Contact</h1>
			<ContactCarousel />
		</div>
	);
}
