import { motion } from "motion/react";

const Hero = ({ project, image }) => {
    return (
        <div
            className={`hero-component h-full w-full  bg-black justify-center flex bg-cover bg-no-repeat bg-center  bg-blend-overlay px-[5%]`}
        >
            <motion.section
                className=" w-full max-w-screen-lg m-auto "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex gap-20 items-center">
                    <div className="text-white flex flex-col gap-20 justify-end">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-display min-w-lg">
                                {project.title}
                            </h1>
                            <div className="flex flex-col gap-3">
                                {project.description}
                            </div>
                        </div>
                        <div className="flex gap-10 text-nowrap">
                            <div className="flex flex-col gap-2">
                                <h6 className="uppercase font-bold">Client</h6>
                                <div>
                                    {project.client.map((client, index) => {
                                        return <p key={index}>{client}</p>;
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="uppercase font-bold">
                                    {project.roles.length > 1
                                        ? "Roles"
                                        : "Role"}
                                </h6>
                                <div>
                                    {project.roles.map((role, index) => {
                                        return <p key={index}>{role}</p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {image && (
                        <div>
                            <img src={image} />
                        </div>
                    )}
                </div>
            </motion.section>
        </div>
    );
};

// Hero.propTypes = {
// 	pageTitle: PropTypes.string,
// 	pageSubtitle: PropTypes.string,
// };

export default Hero;
