"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { itemVariants } from "../resources/utils";

// import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

// import { items } from "@/components/website/constant";
import projectList from "../resources/projectList.json";

function Carousel() {
	const [activeItem, setActiveItem] = useState(projectList[0]);
	const [width, setWidth] = useState(0);
	const carousel = useRef(null);
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, [carousel]);
	return (
		<div className="w-full overflow-hidden">
			<motion.div
				ref={carousel}
				drag="x"
				whileDrag={{ scale: 0.95 }}
				dragElastic={0.2}
				dragConstraints={{ right: 0, left: -width }}
				dragTransition={{ bounceDamping: 30 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className="flex gap-4 will-change-transform cursor-grab active:cursor-grabbing"
			>
				{projectList.slice(0, 8)?.map((project, index) => {
					return (
						<motion.div
							key={index}
							variants={itemVariants}
							// whileHover={{ scale: 1.05 }}
							initial="hidden"
							animate="visible"
							custom={index}
							className="grid grid-rows-subgrid row-span-4 cursor-pointer gap-2 "
						>
							<ProjectCard
								key={index}
								id={index + 1}
								project={project}
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
export default Carousel;
