import ContactCarousel from "@/components/carousel/contact.carousel";

export default function page() {
	return (
		<div className="container mx-auto flex flex-row w-full">
			<div className="w-full">
				<h1>Contact</h1>
			</div>
			<div className="w-full">
				<ContactCarousel />
			</div>
		</div>
	);
}
