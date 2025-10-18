import { motion } from "motion/react";

import TextGroup from "./TextGroup";

const TextImage = ({
    heading,
    subheading,
    image,
    imageAlt,
    imagePlacement = "right",
    imageSize = "full",
    children,
    className,
    addImageShadow = true,
    mat = true,
    numbered = null,
}) => {
    return (
        <section className="textimage-wrapper flex justify-center">
            <div
                className={`textimage-component  content-between ${imagePlacement}-variant max-w-screen-lg grid w-full ${
                    imagePlacement === "bottom" || imagePlacement === "top"
                        ? "md:grid-cols-1"
                        : "md:grid-cols-2"
                }  grid-cols-1 items-center   ${className}`}
            >
                <motion.div
                    className={`${
                        imageSize === "small" ? "max-h-[300px]" : ""
                    } w-full h-full  overflow-hidden ${
                        mat ? "p-9 bg-gray-100" : "p-0"
                    }  place-content-center ${
                        imagePlacement === "right" ||
                        imagePlacement === "bottom"
                            ? "order-1"
                            : "order-[-1]"
                    }`}
                >
                    {image && (
                        <img
                            src={image}
                            alt={imageAlt}
                            className={`mx-auto max-h-full object-contain ${
                                addImageShadow ? "shadow-lg" : ""
                            }`}
                        />
                    )}
                </motion.div>
                <div
                    className={`w-full mx-auto ${
                        imagePlacement === "bottom"
                            ? "pb-5"
                            : imagePlacement === "top"
                            ? "pt-10"
                            : imagePlacement === "left"
                            ? "md:pl-10 md:pb-0 pb-5"
                            : "md:pr-10 md:pb-0 pb-5"
                    } ${
                        imagePlacement === "right" ||
                        imagePlacement === "bottom"
                            ? "order-[-1]"
                            : "order-1"
                    }`}
                >
                    <TextGroup
                        heading={heading}
                        subheading={subheading}
                        numbered={numbered}
                        className="!px-0"
                    >
                        {children}
                    </TextGroup>
                </div>
            </div>
        </section>
    );
};

// TextImage.propTypes = {
// 	heading: PropTypes.string,
// 	subheading: PropTypes.string,
// 	image: PropTypes.string,
// 	imageAlt: PropTypes.string,
// 	imagePlacement: PropTypes.oneOf(["right", "left", "top", "bottom"]),
// };

export default TextImage;
