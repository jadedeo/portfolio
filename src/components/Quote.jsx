// import PropTypes from "prop-types";

const Quote = ({ subheading, children, image }) => {
    return (
        <section
            className={`text-black shadow-lg max-w-screen-lg mx-auto px-10 flex my-5  ${
                image
                    ? "justify-items-center flex-wrap md:flex-nowrap py-5"
                    : "py-10"
            } gap-10 relative items-center`}
        >
            {!image && (
                <>
                    <i className=" absolute top-[-25px] left-[-10px] fa-solid fa-quote-left text-5xl" />
                    <i className=" absolute bottom-[-25px] right-[-10px] fa-solid fa-quote-right text-5xl" />
                </>
            )}

            {image && (
                <>
                    <i className=" absolute top-[-25px] right-[-10px] fa-solid fa-quote-right text-5xl" />
                    <div className="max-w-[175px] min-w-[130px]">
                        <img
                            src="userPlaceholder.png"
                            className="w-full min-h-full"
                        />
                    </div>
                </>
            )}

            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">{subheading}</h3>
                <div>{children}</div>
            </div>
        </section>
    );
};

// Quote.propTypes = {
//     subheading: PropTypes.string,
//     image: PropTypes.string,
// };

export default Quote;
