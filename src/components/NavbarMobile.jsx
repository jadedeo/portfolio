import routes from "../resources/routes.json";
import NavItem from "./NavItem";

import moonOutlineDark from "/icons/moonOutlineDark.png";
import moonFilledDark from "/icons/moonFilledDark.png";

import starOutlineDark from "/icons/starOutlineDark.png";
import starFilledDark from "/icons/starFilledDark.png";

import sunOutlineDark from "/icons/sunOutlineDark.png";
import sunFilledDark from "/icons/sunFilledDark.png";

import cloudOutlineDark from "/icons/cloudOutlineDark.png";
import cloudFilledDark from "/icons/cloudFilledDark.png";

import NavButton from "./NavButton";
import StickyNote from "../components/StickyNote";

import { useState } from "react";

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // TODO: store resume link somewhere else
    const resumeLink =
        "https://drive.google.com/file/d/1Grom3kadEXfFJYg6qGl1KzGkegjBGf9i/view?usp=sharing";

    const iconMap = {
        ForFun: {
            outlined: moonOutlineDark,
            filled: moonFilledDark,
        },
        About: {
            outlined: starOutlineDark,
            filled: starFilledDark,
        },
        Work: {
            outlined: sunOutlineDark,
            filled: sunFilledDark,
        },
        Resume: {
            outlined: cloudOutlineDark,
            filled: cloudFilledDark,
        },
    };

    return (
        <nav id="mobile-navbar" className={` block md:hidden px-10 py-8`}>
            <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen && (
                <div className="MENU z-100 bg-white border-t-1 border-black absolute top-22 left-0 p-8 w-full min-h-[100dvh] flex flex-col gap-8 items-center">
                    {routes
                        .filter((r) =>
                            ["Work", "ForFun", "Resume", "About"].includes(
                                r.component,
                            ),
                        )
                        .map((route, i) => (
                            <NavItem
                                key={i}
                                to={
                                    route.component === "Resume"
                                        ? resumeLink
                                        : route.path
                                }
                                label={
                                    route.component === "ForFun"
                                        ? "For Fun"
                                        : route.component === "About"
                                          ? "About & Contact"
                                          : route.component
                                }
                                outlinedIcon={iconMap[route.component].outlined}
                                filledIcon={iconMap[route.component].filled}
                                isExternal={route.component === "Resume"}
                            />
                        ))}

                    {/* <StickyNote>
                        Please excuse the less-than-cute nav — she's a work in
                        progress!
                    </StickyNote> */}
                </div>
            )}
        </nav>
    );
};

export default NavbarMobile;
