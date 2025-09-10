import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import routes from "../resources/routes.json";

const NavbarDesktop = ({ useLightText }) => {
	// const location = useLocation();
	// const isHomepage = location.pathname == "/" ? true : false;

	const NavTag = /*isHomepage ? motion.nav :*/ "nav";
	const LinkTag = /*isHomepage ? Link :*/ motion.create(Link);

	// console.log("isHomepage", isHomepage);

	return (
		<NavTag
			id="desktop-navbar"
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
			className={`w-full justify-end md:flex md:gap-10 md:px-10 mt-0 pt-10 pb-10 items-center ${
				useLightText ? "light-nav text-white  " : "text-black "
			} `}
		>
			{routes
				.filter(
					(route) =>
						route.component == "Home" ||
						route.component == "Work" ||
						route.component == "ForFun" ||
						route.component == "Resume" ||
						route.component == "About"
				)
				.map((route, index) => {
					return (
						<div key={index}>
							<LinkTag
								to={route.path}
								className="text-sm uppercase flex gap-2 items-center"
							>
								<div className="link-icon h-3 w-3 border-solid border-[1px] rounded-full"></div>
								{route.component == "ForFun" ? (
									"For Fun"
								) : (
									<>{route.component}</>
								)}
							</LinkTag>
						</div>
					);
				})}
		</NavTag>
	);
};

export default NavbarDesktop;
