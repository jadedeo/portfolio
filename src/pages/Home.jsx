import React from "react";
import { motion } from "motion/react";

// components

import Header from "../components/Header";

const Home = () => {
    return (
        <div id="home-page">
            <Header />
            <main className="min-h-[100dvh] py-10 px-[5%] flex items-center gap-10">
                {/* TODO: update home image */}
                {/* <img src="homePlaceholder.png" /> */}
                <section className="my-5 flex flex-col gap-4">
                    <h1 className="font-display">jade deo</h1>

                    <div>
                        <p>Designer + dev by day</p>
                        <p>Doodler by night</p>
                    </div>

                    <p>Pixie-dust-powered creative, forever + always</p>
                </section>
            </main>
        </div>
    );
};

export default Home;
