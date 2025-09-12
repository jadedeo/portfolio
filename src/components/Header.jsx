import NavbarDesktop from "./NavbarDesktop";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ useLightLogo }) => {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    return (
        <div className="w-full">
            <header
                id="site-header"
                className={`flex  w-full py-0 fixed  z-[100000] border-b-1 ${
                    useLightLogo ? " border-gray-200" : "border-gray-900"
                }`}
            >
                {/* TODO: replace image */}
                {!isHomepage && (
                    <div
                        className={`px-10 mt-0 flex items-center ${
                            useLightLogo ? "bg-black" : "bg-white"
                        }`}
                    >
                        <Link to="/">
                            <img
                                className="flex w-15 bg-white border-1 border-solid rounded-full aspect-square"
                                src="/portfolio/homeIcon.png"
                            />
                        </Link>
                    </div>
                )}

                <NavbarDesktop useLightText={useLightLogo} />
            </header>
        </div>
        // )
    );
};

export default Header;
