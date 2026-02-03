import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import homeIcon from "/general/homeIcon.png";

const Header = ({ useLightLogo }) => {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    return (
        <div className="w-full">
            <header
                id="site-header"
                className={`flex items-center ${isHomepage ? "justify-end" : "justify-between"} w-full py-0 fixed z-[100000] border-b-1  ${
                    useLightLogo
                        ? " border-gray-200 bg-black"
                        : "border-gray-900 bg-white"
                }`}
            >
                {!isHomepage && (
                    <div
                        className={`px-10 mt-0 flex items-center min-h-20 
                        `}
                    >
                        <Link to="/">
                            <img
                                className={`flex w-15 bg-white ${
                                    useLightLogo
                                        ? "border-white"
                                        : "border-black"
                                } border-1 border-solid rounded-full aspect-square`}
                                src={homeIcon}
                            />
                        </Link>
                    </div>
                )}

                <NavbarDesktop useLightText={useLightLogo} />
                <NavbarMobile />
            </header>
        </div>
        // )
    );
};

export default Header;
