import React, { useState } from "react";
import { motion } from "motion/react";
// import { AsyncImage } from "loadable-image";

const DoodleCard = ({ image }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="bg-slate-50 cursor-pointer"
                onClick={handleClickOpen}
            >
                {/* <AsyncImage
                    src={image.imagePath}
                    style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio:
                            image.aspectRatio.width / image.aspectRatio.height,
                    }}
                    loader={<div style={{ background: "#fff" }} />}
                    error={<div style={{ background: "#eee" }} />}
                /> */}
                {image.isPublished && (
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex flex-col items-start">
                            <h2 className="font-display text-lg font-bold">
                                {image.title}
                            </h2>
                            {image.subtitle && (
                                <p className="">{image.subtitle}</p>
                            )}
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default DoodleCard;
