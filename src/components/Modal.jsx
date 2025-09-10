import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, content, className = "" }) => {
    const { image, title, client, description, details, caption } =
        content || {};
    const imageOnly =
        !title && !client && !description && !details && caption ? true : false;

    const longContent = title && description ? true : false;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={`bg-white shadow-lg p-6 max-w-4xl max-h-[90vh] mx-[2%] w-full relative ${className} overflow-y-auto`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                    >
                        <button
                            className="absolute top-2 right-3 text-gray-500 bg-white h-7 w-7 items-center rounded-full hover:text-gray-800 text-xl"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        {content ? (
                            <div className="flex flex-col md:flex-row gap-6 h-full">
                                {image && (
                                    <div className="w-full h-full">
                                        <img
                                            src={image}
                                            alt={title || "Modal image"}
                                            className="max-h-[80vh] w-full object-contain"
                                        />
                                        {caption && !description && (
                                            <small className="text-center block text-gray-400 mt-3 text-sm">
                                                {caption}
                                            </small>
                                        )}
                                    </div>
                                )}
                                {!imageOnly && longContent && (
                                    <div className="w-full md:w-1/3 flex flex-col justify-between">
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                {title && (
                                                    <h2 className="text-xl font-bold">
                                                        {title}
                                                    </h2>
                                                )}
                                                {client && (
                                                    <p className=" text-gray-400">
                                                        {client}
                                                    </p>
                                                )}
                                            </div>
                                            {description && (
                                                <p className="text-gray-700 text-sm">
                                                    {description}
                                                </p>
                                            )}
                                        </div>
                                        {details?.length > 0 && (
                                            <div className="text-sm text-gray-400">
                                                <hr className="my-3" />
                                                <div className="flex md:block gap-2">
                                                    {details.map((item, i) => (
                                                        <small
                                                            className="block text-sm"
                                                            key={i}
                                                        >
                                                            {item}
                                                        </small>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>No content provided.</div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Modal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     content: PropTypes.shape({
//         image: PropTypes.string,
//         title: PropTypes.string,
//         client: PropTypes.string,
//         description: PropTypes.string,
//         details: PropTypes.arrayOf(PropTypes.string),
//         caption: PropTypes.string,
//     }),
//     className: PropTypes.string,
// };

export default Modal;
