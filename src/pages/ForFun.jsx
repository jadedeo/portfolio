import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

// components
import Header from "../components/Header";
import DoodleCard from "../components/DoodleCard";
// import { Masonry } from "@mui/lab";

// other imports
import doodleList from "../resources/doodleList";
import { itemVariants } from "../resources/utils";

const ForFun = () => {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && window.innerWidth > 480) {
                setColumns(2);
            } else if (window.innerWidth <= 480) {
                setColumns(1);
            } else {
                setColumns(3);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="forfun-page">
            <Header />
            <main className="min-h-[100dvh] py-10 px-[5%]">
                <section className="my-5">
                    <h1 className="font-display">just for fun.</h1>
                </section>
                {/* <Masonry columns={columns} spacing={{ xs: 2, sm: 2, md: 3 }}>
          {doodleList.map((image, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <DoodleCard key={index} image={image} />
              </motion.div>
            );
          })}
        </Masonry> */}
            </main>
        </div>
    );
};

export default ForFun;
