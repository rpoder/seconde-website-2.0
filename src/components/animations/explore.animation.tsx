"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = ["Intuitif", "Pratique", "Complet", "Engagé", "Joli"];

export default function ExploreAnimation() {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 2000); // Change word every 2 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<div className="w-full h-96 bg-[url('/assets/images/thrift-shop.jpeg')] bg-cover bg-[center_top_-100px] flex flex-col justify-center items-center">
			<div className="relative h-20 flex justify-center items-center">
				<AnimatePresence>
					{data.map(
						(word, index) =>
							index === currentWordIndex && (
								<motion.h2
									key={index}
									initial={{ y: "100%", opacity: 0 }}
									animate={{ y: "0%", opacity: 1 }}
									exit={{ y: "-100%", opacity: 0 }}
									transition={{ duration: 0.5 }}
									className="absolute text-center font-bold text-8xl text-white"
									style={{
										fontFamily: "canada-type-gibson",
										fontWeight: 550,
										fontStyle: "italic",
									}}
								>
									{word}
								</motion.h2>
							)
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
