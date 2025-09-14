import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, label, outlinedIcon, filledIcon, isExternal }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const Wrapper = isExternal ? "a" : Link;
    const wrapperProps = isExternal
        ? { href: to, target: "_blank", rel: "noopener noreferrer" }
        : { to };

    return (
        <Wrapper
            {...wrapperProps}
            className="flex gap-1 items-center text-sm uppercase group"
        >
            <div className="relative w-6 h-6 shrink-0">
                {/* outlined */}
                <img
                    src={outlinedIcon}
                    alt={`${label} outlined`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300
                        ${
                            isActive
                                ? "opacity-0"
                                : "opacity-100 group-hover:opacity-0"
                        }
                    `}
                />
                {/* filled */}
                <img
                    src={filledIcon}
                    alt={`${label} filled`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300
                        ${
                            isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        }
                    `}
                />
            </div>

            {label}
        </Wrapper>
    );
};

export default NavItem;
