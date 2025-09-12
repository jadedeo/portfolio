import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import routes from "../resources/routes.json";

const NavbarDesktop = ({ useLightText }) => {
    const NavTag = "nav";
    const LinkTag = motion.create(Link);

    const resumeLink =
        "https://drive.google.com/file/d/1ns0kZivpJ-iYPw6no1KE6jsNRlu28YLL/view?usp=sharing";

    return (
        <NavTag
            id="desktop-navbar"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            className={`w-full justify-end flex gap-10 px-10 mt-0  py-8 items-center ${
                useLightText ? "light-nav text-white " : "text-black "
            } `}
        >
            {routes
                .filter((route) =>
                    ["Work", "ForFun", "Resume", "About"].includes(
                        route.component
                    )
                )
                .map((route, index) => {
                    const isResume = route.component === "Resume";
                    return (
                        <div key={index}>
                            {isResume ? (
                                <a
                                    href={resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm uppercase flex gap-2 items-center"
                                >
                                    <div className="link-icon h-3 w-3 border-solid border-[1px] rounded-full"></div>
                                    {route.component}
                                </a>
                            ) : (
                                <LinkTag
                                    to={route.path}
                                    className="text-sm uppercase flex gap-2 items-center"
                                >
                                    <div className="link-icon h-3 w-3 border-solid border-[1px] rounded-full"></div>
                                    {route.component === "ForFun"
                                        ? "For Fun"
                                        : route.component}
                                </LinkTag>
                            )}
                        </div>
                    );
                })}
        </NavTag>
    );
};

export default NavbarDesktop;
