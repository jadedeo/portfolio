import React from "react";
import { motion } from "motion/react";

// components
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import Header from "../components/Header";

const Home = () => {
	return (
		<div id="home-page">
			<Header />
			<main className="min-h-[100dvh] py-10 px-[5%] flex items-center gap-10">
				<img src="homePlaceholder.png" />
				<section className="my-5 flex flex-col gap-4">
					<h1 className="font-display">jade deo</h1>

					<div>
						<p>Designer + dev by day</p>
						<p>Doodler by night</p>
					</div>

					<p>Pixie-dust-powered creative, forever + always</p>
				</section>
			</main>
		</div>
		// <div id="home-page">
		// 	<NavbarDesktop />

		/* <main className="h-dvh flex flex-col items-center justify-center">
				<div className="hidden sm:flex w-full justify-center gap-5">
					<motion.h1
						initial={{ y: 25, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						className="font-display font-bold"
					>
						jade deo
					</motion.h1>
				</div>

				<div className="flex flex-col sm:hidden w-full justify-center items-center gap-5">
					<div className="w-10 h-10 bg-slate-500"></div>
					<h3 className="font-display font-bold">jade deo</h3>
				</div>
			</main> */

		// </div>
	);
};

export default Home;
