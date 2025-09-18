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
    const resumeLink =
        "https://drive.google.com/file/d/1_6s7bxmdunCV2haa4LtgQL4eHXhasllk/view?usp=sharing";

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
            className={`w-full justify-end flex gap-10 px-10 mt-0 py-8 items-center ${
                useLightText ? "light-nav text-white" : "text-black"
            }`}
        >
            {routes
                .filter((r) =>
                    ["Work", "ForFun", "Resume", "About"].includes(r.component)
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
                                ? "About + Contact"
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
