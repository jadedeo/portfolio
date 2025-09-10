// for list animation
export const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: i * 0.1,
		},
	}),
};

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
