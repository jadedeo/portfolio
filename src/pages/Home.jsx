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
            <main className="min-h-[100dvh] md:max-h-[100dvh] pt-28 pb-10 px-[5%] flex justify-center relative">
                <div className="max-w-screen-lg mx-auto justify-center grid md:grid-cols-2 items-center max-h-[100dvh] gap-0 ">
                    <div className="flex flex-col gap-5">
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
                            I strive to design for simplicity while preserving
                            personality — which is why these intro blurb things
                            make me cringe. Thank you for taking a look at my
                            work! I hope you'll also find that I'm an authentic
                            storyteller who creates accessible, data-driven
                            experiences.
                        </p>

                        <StickyNote className="md:absolute md:bottom-[10%] md:right-[10%] lg:right-[18%] mt-5 md:mt-0">
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

                    <div className="hidden h-full max-h-[100dvh] md:flex items-center justify-center overflow-hidden">
                        <img
                            className="max-h-full w-auto object-contain"
                            src={homeImage}
                            alt="TODO: add alt"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
