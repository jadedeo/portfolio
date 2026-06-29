import routes from "../resources/routes.json";
import NavItem from "./NavItem";

import moonOutlineDark from "/icons/moonOutlineDark.png";
import moonFilledDark from "/icons/moonFilledDark.png";
import moonOutlineLight from "/icons/moonOutlineLight.png";
import moonFilledLight from "/icons/moonFilledLight.png";

import starOutlineDark from "/icons/starOutlineDark.png";
import starFilledDark from "/icons/starFilledDark.png";
import starOutlineLight from "/icons/starOutlineLight.png";
import starFilledLight from "/icons/starFilledLight.png";

import sunOutlineDark from "/icons/sunOutlineDark.png";
import sunFilledDark from "/icons/sunFilledDark.png";
import sunOutlineLight from "/icons/sunOutlineLight.png";
import sunFilledLight from "/icons/sunFilledLight.png";

import cloudOutlineDark from "/icons/cloudOutlineDark.png";
import cloudFilledDark from "/icons/cloudFilledDark.png";
import cloudOutlineLight from "/icons/cloudOutlineLight.png";
import cloudFilledLight from "/icons/cloudFilledLight.png";

const NavbarDesktop = ({ useLightText }) => {
    // TODO: store resume link somewhere else
    const resumeLink =
        "https://drive.google.com/file/d/1Grom3kadEXfFJYg6qGl1KzGkegjBGf9i/view?usp=sharing";

    const iconMap = {
        ForFun: {
            outlined: useLightText ? moonOutlineLight : moonOutlineDark,
            filled: useLightText ? moonFilledLight : moonFilledDark,
        },
        About: {
            outlined: useLightText ? starOutlineLight : starOutlineDark,
            filled: useLightText ? starFilledLight : starFilledDark,
        },
        Work: {
            outlined: useLightText ? sunOutlineLight : sunOutlineDark,
            filled: useLightText ? sunFilledLight : sunFilledDark,
        },
        Resume: {
            outlined: useLightText ? cloudOutlineLight : cloudOutlineDark,
            filled: useLightText ? cloudFilledLight : cloudFilledDark,
        },
    };

    return (
        <nav
            id="desktop-navbar"
            className={`hidden justify-end md:flex gap-10 px-10 mt-0 py-8 items-center ${
                useLightText
                    ? "light-nav text-white bg-black"
                    : "text-black bg-white"
            }`}
        >
            {routes
                .filter((r) =>
                    ["Work", "ForFun", "Resume", "About"].includes(r.component),
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
        </nav>
    );
};

export default NavbarDesktop;
