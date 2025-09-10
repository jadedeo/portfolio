// import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
// import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import routes from "../resources/routes.json";
import { useLocation } from "react-router-dom";

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    const location = useLocation();
    const isHomepage = location.pathname == "/" ? true : false;

    // useClickAway(ref, () => setOpen(false));

    return (
        <nav ref={ref} className="md:hidden" id="mobile-navbar">
            {/* <Hamburger toggled={isOpen} size={20} toggle={setOpen} /> */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0 bg-slate-50 z-[999]"
                    >
                        <ul className="grid gap-2">
                            {routes
                                .filter(
                                    (route) =>
                                        // route.title == "doodles" ||
                                        route.component == "design" ||
                                        route.component == "development"
                                )
                                .map((route, index) => {
                                    return (
                                        <motion.li
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + index / 10,
                                            }}
                                            key={route.component}
                                            className="w-full p-[0.08rem] "
                                        >
                                            <motion.a
                                                whileHover={{
                                                    backgroundColor: "#e2e8f0",
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                                onClick={() =>
                                                    setOpen((prev) => !prev)
                                                }
                                                className={
                                                    "flex items-center justify-between w-full p-5 bg-slate-50"
                                                }
                                                href={route.path}
                                            >
                                                <span className="flex gap-1 text-lg">
                                                    {route.component}
                                                </span>
                                            </motion.a>
                                        </motion.li>
                                    );
                                })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavMobile;
