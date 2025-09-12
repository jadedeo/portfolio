// import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { itemVariants } from "../resources/utils";
import projectList from "../resources/projectList.json";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
    return (
        <div id="work-page">
            <Header />

            <main className="min-h-[100dvh] pb-10 pt-33 px-[5%] flex flex-col gap-8">
                {/* TODO: make less repetitive */}
                <section className="projects-list grid md:grid-cols-2 grid-cols-1 gap-y-6  w-full max-w-screen-lg mx-auto gap-8">
                    {projectList
                        .filter((project) =>
                            project.tags.some(
                                (tag) => tag.text === "Case Study"
                            )
                        )
                        .map((project, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    className="grid grid-rows-subgrid row-span-4 cursor-pointer hover:z-[1000]"
                                >
                                    <ProjectCard
                                        key={index}
                                        id={project.id}
                                        project={project}
                                    />
                                </motion.div>
                            );
                        })}
                </section>

                <section className="projects-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6  w-full max-w-screen-lg mx-auto gap-8">
                    {projectList
                        .filter((project) =>
                            project.tags.some((tag) => tag.text === "Mini")
                        )
                        .map((project, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    className="grid grid-rows-subgrid row-span-4 cursor-pointer hover:z-[1000]"
                                >
                                    <ProjectCard
                                        key={index}
                                        id={project.id}
                                        project={project}
                                    />
                                </motion.div>
                            );
                        })}
                </section>
            </main>
        </div>
    );
};
export default Work;
