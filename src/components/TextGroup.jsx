// import PropTypes from "prop-types";
const TextGroup = ({
    heading,
    subheading,
    children,
    subheadingFirst = false,
}) => {
    return (
        <section
            className={`textgroup-component max-w-screen-lg flex flex-col ${
                subheading || children ? "gap-3" : ""
            }`}
        >
            {subheadingFirst ? (
                <>
                    <div className="flex flex-col gap-2">
                        {subheading && (
                            <h3 className="text-xl font-bold">{subheading}</h3>
                        )}
                        {heading && (
                            <h2 className="font-display ">{heading}</h2>
                        )}
                    </div>
                    <div className="flex flex-col gap-5">{children}</div>
                </>
            ) : (
                <>
                    {heading && <h2 className="font-display ">{heading}</h2>}
                    <div>
                        {subheading && (
                            <h3 className="text-xl font-bold">{subheading}</h3>
                        )}
                        <div className="flex flex-col gap-5">{children}</div>
                    </div>
                </>
            )}
        </section>
    );
};

// TextGroup.propTypes = {
// 	heading: PropTypes.string,
// 	subheading: PropTypes.string,
// };

export default TextGroup;
