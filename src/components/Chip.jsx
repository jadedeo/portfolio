// import PropTypes from "prop-types";

const Chip = ({ label, size = "sm", type }) => {
    let scale = 1;
    let isOutlined = type === "outlined" ? true : false;

    if (size === "sm") scale = 0.75;
    if (size === "md") scale = 1.25;
    if (size === "lg") scale = 2;

    const style = {
        padding: `${scale * 0.5}rem ${scale * 1}rem ${scale * 0.3}rem ${
            scale * 1
        }rem`,
        border: isOutlined ? "1px solid black" : "",
        backgroundColor: isOutlined ? "#ffffff" : "#000000",
        color: isOutlined ? "#000000" : "#ffffff",
    };

    return (
        <>
            <div
                style={style}
                className={`chip-component text-xs rounded-full w-fit uppercase`}
            >
                {label}
            </div>
        </>
    );
};

// Chip.propTypes = {
//     label: PropTypes.string,
//     size: PropTypes.oneOf(["sm", "md", "lg"]),
//     type: PropTypes.oneOf(["outlined", "filled"]),
// };

export default Chip;
