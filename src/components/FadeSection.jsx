import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeSection = ({ children, className = "", scrollDir = "down" }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.6, once: false });

	return (
		<motion.section
			ref={ref}
			className={`${className}`}
			initial={{ opacity: 0, y: scrollDir === "down" ? 50 : -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			{children}
		</motion.section>
	);
};

export default FadeSection;
