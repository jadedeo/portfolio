import React from "react";
import { motion } from "motion/react";

import starOutlineDark from "/icons/starOutlineDark.png";
import homeImage from "/general/homeImage.png";

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
                        <h1 className="font-display">jade deo</h1>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1">
                                <Chip
                                    label="Designer + dev by day"
                                    type="outlined"
                                />
                                <Chip label="Doodler by night" type="filled" />
                            </div>

                            <div className="flex gap-1 items-center uppercase text-xs">
                                <img className="h-5" src={starOutlineDark} />
                                <p>Pixie-dust-powered creative</p>
                                <img className="h-5" src={starOutlineDark} />
                                <p>forever + always</p>
                            </div>
                        </div>

                        <p>
                            With an engineer’s mind, designer’s eye, and
                            artist’s heart, I create for simplicity while
                            preserving personality. Thank you for stopping by!
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="hidden relative h-full max-h-[100dvh] md:flex items-center justify-center overflow-hidden"
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
                <div>
                    <StickyNote className="static md:flex md:absolute md:bottom-[5%] md:right-[5%] lg:right-[18%] mt-10 md:mt-0  ">
                        <p className="font-bold">Portfolio TODOs:</p>
                        <div>
                            <p>{"\u2610"} Make mobile responsive</p>
                            <p>{"\u2610"} Add a "real" resume page</p>
                            <p>{"\u2610"} Add mini projects</p>
                            <p>{"\u2610"} Add illustration work</p>
                        </div>
                        <p className="underline">
                            Make it exist first. Make it good later.
                        </p>
                    </StickyNote>
                </div>
            </main>
        </div>
    );
};

export default Home;
