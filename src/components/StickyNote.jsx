import { motion } from "motion/react";

const StickyNote = ({ children, className = "" }) => {
	// Random tilt between -3deg and 3deg
	const tilt = Math.floor(Math.random() * 7) - 3;

	return (
		<motion.div
			className={`break-inside-avoid flex flex-col gap-5 bg-yellow-200 shadow-lg p-5 min-w-[200px] max-w-[300px] min-h-[200px] h-fit font-handwritten text-xl ${className}`}
			initial={{ rotate: tilt, scale: 1 }}
			animate={{ rotate: tilt, scale: 1 }}
			whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
			transition={{ type: "spring", stiffness: 200, damping: 15 }}
			style={{
				boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
			}}
		>
			{children}
		</motion.div>
	);
};

export default StickyNote;
