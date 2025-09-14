import routes from "../resources/routes.json";
import NavItem from "./NavItem";

// Import your PNGs
import moonOutlineDark from "../../public/images/icons/moonOutlineDark.png";
import moonFilledDark from "../../public/images/icons/moonFilledDark.png";
import moonOutlineLight from "../../public/images/icons/moonOutlineLight.png";
import moonFilledLight from "../../public/images/icons/moonFilledLight.png";

import starOutlineDark from "../../public/images/icons/starOutlineDark.png";
import starFilledDark from "../../public/images/icons/starFilledDark.png";
import starOutlineLight from "../../public/images/icons/starOutlineLight.png";
import starFilledLight from "../../public/images/icons/starFilledLight.png";

import sunOutlineDark from "../../public/images/icons/sunOutlineDark.png";
import sunFilledDark from "../../public/images/icons/sunFilledDark.png";
import sunOutlineLight from "../../public/images/icons/sunOutlineLight.png";
import sunFilledLight from "../../public/images/icons/sunFilledLight.png";

import cloudOutlineDark from "../../public/images/icons/cloudOutlineDark.png";
import cloudFilledDark from "../../public/images/icons/cloudFilledDark.png";
import cloudOutlineLight from "../../public/images/icons/cloudOutlineLight.png";
import cloudFilledLight from "../../public/images/icons/cloudFilledLight.png";

const NavbarDesktop = ({ useLightText }) => {
    const resumeLink =
        "https://drive.google.com/file/d/1ns0kZivpJ-iYPw6no1KE6jsNRlu28YLL/view?usp=sharing";

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
