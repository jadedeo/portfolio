// import PropTypes from "prop-types";

const Chip = ({ label, size = "sm", type }) => {
    let scale = 1;
    let isOutlined = type === "outlined" ? true : false;

    if (size === "sm") scale = 0.75;
    if (size === "md") scale = 1.25;
    if (size === "lg") scale = 2;

    const calcPadding = {
        padding: `${scale * 0.5}rem ${scale * 1}rem ${scale * 0.3}rem ${
            scale * 1
        }rem`,
    };

    return (
        <>
            <div
                style={calcPadding}
                className={`chip-component text-xs rounded-full w-fit uppercase ${
                    isOutlined
                        ? "border-1 border-black bg-white text-black "
                        : "bg-black text-white"
                }`}
            >
                {label}
            </div>
        </>
    );
};

export default Chip;
