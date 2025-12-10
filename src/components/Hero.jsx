import { motion } from "motion/react";
import Chip from "./Chip";

const Hero = ({ project, image, className }) => {
    const showTools = project.tools?.length > 0 ? true : false;
    return (
        <div
            className={`${className} hero-component min-h-full w-full bg-black justify-center flex px-[5%] pt-[80px]`}
        >
            <motion.section
                className=" w-full max-w-screen-lg m-auto "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex gap-10 items-center">
                    <div className="text-white flex flex-col gap-8 lg:gap-20 justify-end">
                        <div className="grid sm:grid-cols-[1fr_1fr] items-center gap-8">
                            {/* <lg image */}
                            {image && (
                                <div className="lg:hidden block max-h-[300px] min-h-[200px] overflow-hidden">
                                    <img src={image} className="max-h-full " />
                                </div>
                            )}

                            {/* title & desc */}
                            <div className="flex flex-col gap-5">
                                <h1 className="font-display min-w-lg lowercase">
                                    {project.title}
                                </h1>
                                <div className="flex flex-col gap-3">
                                    {project.description}
                                </div>
                            </div>
                        </div>

                        {/* for, roles & tools */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-8 gap-5 lg:gap-10">
                            <div className="flex flex-col gap-2">
                                <h3 className="uppercase font-bold">For</h3>
                                <div>
                                    {project.client.map((client, index) => {
                                        return <p key={index}>{client}</p>;
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="uppercase font-bold">
                                    {project.roles.length > 1
                                        ? "Roles"
                                        : "Role"}
                                </h3>
                                <div>
                                    {project.roles.map((role, index) => {
                                        return <p key={index}>{role}</p>;
                                    })}
                                </div>
                            </div>
                            {showTools && (
                                <div className="col-span-2  md:col-span-1 lg:col-span-2 flex flex-col gap-2">
                                    <h3 className="uppercase font-bold">
                                        Tools
                                    </h3>
                                    <div className="flex flex-wrap gap-1 text-white bg-black">
                                        {project.tools.map((tool, index) => {
                                            return (
                                                <Chip
                                                    key={index}
                                                    label={tool}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* lg image */}
                    {image && (
                        <div className="hidden lg:block">
                            <img src={image} />
                        </div>
                    )}
                </div>
            </motion.section>
        </div>
    );
};

export default Hero;
