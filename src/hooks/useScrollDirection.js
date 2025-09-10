// useScrollDirection.js
import { useEffect, useState } from "react";

const useScrollDirection = () => {
	const [scrollDir, setScrollDir] = useState("down");

	useEffect(() => {
		let lastY = window.scrollY;

		const updateScrollDir = () => {
			const currentY = window.scrollY;
			if (Math.abs(currentY - lastY) > 5) {
				setScrollDir(currentY > lastY ? "up" : "down");
				lastY = currentY;
			}
		};

		window.addEventListener("scroll", updateScrollDir);
		return () => window.removeEventListener("scroll", updateScrollDir);
	}, []);

	return scrollDir;
};

export default useScrollDirection;
