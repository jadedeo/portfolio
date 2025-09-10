// hooks/useInView.js
import { useEffect, useState } from "react";

const useInView = (ref, options = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsIntersecting(entry.isIntersecting),
			options
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, options]);

	return isIntersecting;
};

export default useInView;
