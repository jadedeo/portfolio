import { NavLink } from "react-router";
import Chip from "../components/Chip";

// import PropTypes from "prop-types";

const ProjectCard = ({ id, project }) => {
    return (
        <NavLink
            to={project.link}
            className={`projectcard-component grid grid-rows-subgrid row-span-4 gap-2  bg-white transition-[filter] duration-500 ease-in-out ${
                project.status === "published"
                    ? "published-project cursor-pointer"
                    : "comingsoon-project cursor-not-allowed"
            }`}
        >
            <div className="w-full h-[350px] bg-gray-100 relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover  left-0 top-0"
                />
                {project.status === "comingsoon" && (
                    <div className="w-full h-full absolute left-0 top-0 bg-slate-900/75 bg-opacity-25  flex justify-center items-center">
                        <div className="text-white px-4 py-2 rounded-full">
                            <p className="uppercase text-xs">Coming soon</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-5 px-5 mt-5">
                <h2 className="font-display">
                    {id.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                    })}
                </h2>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl leading-none">
                        {project.title}
                    </h3>
                    <p>{project.hook}</p>
                </div>
            </div>

            <div className="flex gap-1 flex-wrap px-5 mb-3 mt-3 h-fit">
                {project.tags?.map((tag, index) => (
                    <Chip key={index} label={tag.text} type={tag.type} />
                ))}
            </div>
        </NavLink>
    );
};

// ProjectCard.propTypes = {
// 	id: PropTypes.number,
// 	project: PropTypes.object,
// 	orientation: PropTypes.string,
// };

export default ProjectCard;
