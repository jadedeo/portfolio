import React from "react";
// import PropTypes from "prop-types";
import Chip from "./Chip";

const Hero = ({ project, imagePath = "/" }) => {
    // console.log("image", image);
    // const imageUrl =
    // 	"/jade-portfolio/work/" + project.path + "/" + project.image;

    // console.log("imageUrl", imageUrl);

    return (
        <div
            className={`hero-component h-full w-full  bg-slate-900 justify-center flex bg-cover bg-no-repeat bg-center  bg-blend-overlay px-[5%]`}
            style={{ backgroundImage: `url(${imagePath})` }}
        >
            <section className=" w-full max-w-screen-lg m-auto ">
                <div className=" text-white flex flex-col gap-10 justify-end">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-display min-w-lg">
                            {project.title}
                        </h1>
                        <div className="flex flex-col gap-3">
                            {project.description}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="flex gap-20">
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
                                {project.roles.length > 1 ? "Roles" : "Role"}
                            </h6>
                            <div>
                                {project.roles.map((role, index) => {
                                    return <p key={index}>{role}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Hero.propTypes = {
// 	pageTitle: PropTypes.string,
// 	pageSubtitle: PropTypes.string,
// };

export default Hero;
