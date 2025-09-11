import { NavLink } from "react-router";
import Chip from "../components/Chip";

// import PropTypes from "prop-types";

const ProjectCard = ({ id, project }) => {
    console.log(project.title, project.status);

    return (
        <NavLink
            to={project.link}
            className={`projectcard-component grid grid-rows-subgrid row-span-4 gap-2 hover:outline-1 hover:outline-gray-200 bg-white transition-[filter] duration-500 ease-in-out ${
                project.status === "published"
                    ? "published-project cursor-pointer"
                    : "comingsoon-project cursor-not-allowed"
            }`}
        >
            <div className="w-full h-[350px] bg-gray-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
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
