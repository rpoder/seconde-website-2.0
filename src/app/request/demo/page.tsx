import RequestDemoCarousel from "@/components/carousel/request-demo.carousel";

export default function page() {
	return (
		<div className="container mx-auto flex flex-col w-full gap-4">
			<h1>Demande de démo</h1>
			<RequestDemoCarousel />
		</div>
	);
}
