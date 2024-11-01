import RequestDemoCarousel from "@/components/carousel/request-demo.carousel";

export default function page() {
	return (
		<div className="container mx-auto flex flex-row w-full">
			<div className="w-full">
				<h1>Demande de démo</h1>
			</div>
			<div className="w-full">
				<RequestDemoCarousel />
			</div>
		</div>
	);
}
