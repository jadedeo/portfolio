import React from "react";
import { motion } from "motion/react";

import starOutlineDark from "/icons/starOutlineDark.png";
import homeImage from "/general/homeImage.png";
import homeImageAlt from "/general/justme.png";
import homeIcon from "/general/homeIcon.png";

import Header from "../components/Header";
import StickyNote from "../components/StickyNote";
import Chip from "../components/Chip";

const Home = () => {
    return (
        <div id="home-page">
            <Header />
            <main className="min-h-[100dvh] md:max-h-[100dvh] pt-28 pb-10 px-[5%] flex flex-col md:flex-row justify-center relative">
                <div className="max-w-screen-lg mx-auto justify-center grid md:grid-cols-2 items-center max-h-[100dvh] gap-0 ">
                    {/* Text */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className=" flex flex-col gap-5">
                            <img
                                className="md:hidden flex w-[25%] h-[25%] rounded-full bg-gray-200"
                                src={homeIcon}
                            />
                            <h1 className="font-display">jade deo</h1>{" "}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1">
                                <Chip
                                    label="Designer & dev by day"
                                    type="outlined"
                                />
                                <Chip label="Doodler by night" type="filled" />
                            </div>

                            <div className="flex gap-1 items-center uppercase text-xs">
                                <img className="h-5" src={starOutlineDark} />
                                <p>Pixie-dust-powered creative</p>
                                <img className="h-5" src={starOutlineDark} />
                                <p>forever & always</p>
                            </div>
                        </div>
                        <p>
                            With a developer’s mind, designer’s eye, and
                            artist’s heart, I create for simplicity while
                            preserving personality. Thanks for stopping by!
                        </p>
                        <StickyNote className="mt-8">
                            <p className="font-bold">Portfolio TODOs:</p>
                            <div>
                                <p>{"\u2610"} Make mobile responsive</p>
                                <p>{"\u2610"} Add "real" resume page</p>
                            </div>
                            <p>
                                <span className="underline">
                                    Make it exist first.
                                </span>
                                <br />
                                <span>Make it great later.</span>
                            </p>
                        </StickyNote>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="hidden 2xl:relative 2xl:h-full 2xl:max-h-[100dvh] 2xl:flex 2xl:items-center 2xl:justify-center 2xl:overflow-hidden"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.25,
                        }}
                    >
                        <img
                            className="max-h-full w-auto object-contain"
                            src={homeImage}
                            alt="TODO: add alt"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="hidden md:block md:absolute md:max-w-[60%] md:top-[0%] md:left-[43%] md:w-auto md:object-contain 2xl:hidden max-h-[100dvh] overflow-hidden pt-28"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.25,
                    }}
                >
                    <img className="" src={homeImageAlt} alt="TODO: add alt" />
                </motion.div>
            </main>
        </div>
    );
};

export default Home;
