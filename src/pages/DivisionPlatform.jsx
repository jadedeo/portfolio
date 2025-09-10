import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ProjectCard from "../components/ProjectCard";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";
// import devProjectList from "../resources/devProjectList.json";

const DivisionPlatform = () => {
    // const projectData = devProjectList.find(
    //     (project) => project.title == "Division Platform"
    // );
    // console.log("projectData", projectData);

    // const scrollDir = useScrollDirection();

    return (
        <>
            {/* <Header /> */}
            <main className="  mb-[50px] min-h-dvh ">
                <h1>division platform</h1>
                {/* <section className="h-dvh">
                    <Hero
                        title={projectData.title}
                        subtitle={projectData.subtitle}
                        image={projectData.image}
                    >
                        <p>
                            Division Platform is a flexible, WordPress-based web
                            framework developed to support Penguin Random
                            House's diverse publishing divisions and imprints.
                            The system provides a centralized yet highly
                            customizable way to create industry-facing websites,
                            automatically syncing book metadata from PRH's
                            internal systems while maintaining each imprint’s
                            distinct visual identity.
                        </p>
                    </Hero>
                </section>
                <div className="flex flex-col gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <div className="grid md:grid-cols-[1fr,1fr,2fr]  grid-cols-[1fr,1fr] sm:flex-nowrap gap-x-[5%] gap-y-14">
                                <div className="min-w-fit">
                                    <h3 className="text-xl font-bold mb-2">
                                        Role
                                    </h3>
                                    <p>Contract Web Developer</p>
                                </div>
                                <div className="min-w-fit">
                                    <h3 className="text-xl font-bold mb-2">
                                        Team
                                    </h3>
                                    <p>1-2 product owners</p>
                                    <p>2-4 developers</p>
                                    <p>1 product designer</p>
                                    <p>1 QA engineer</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Skills & Tools
                                    </h3>
                                    <div className="flex gap-x-1 gap-y-2 flex-wrap h-fit">
                                        {projectData.tags.map((tag, i) => (
                                            <Chip key={i} label={tag} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto my-10 flex flex-col gap-5">
                            <TextGroup heading="overall impact">
                                <p>
                                    By streamlining site creation and
                                    integrating directly with PRH’s title data,
                                    the platform{" "}
                                    <strong>
                                        cut launch timelines to just a few
                                        weeks, eliminated the need for external
                                        dev resources, and ensured ongoing
                                        compliance with legal, security, and
                                        accessibility standards
                                    </strong>
                                    . Its adoption enabled scalable content
                                    management, enhanced marketing capabilities,
                                    and a consistent user experience across
                                    dozens of imprint sites.
                                </p>

                                <p>
                                    Sites built with Division Platform include:
                                </p>
                            </TextGroup>

                            <section className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-items-center items-center mt-3">
                                <a
                                    href="https://crownpublishing.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="max-h-[75px] grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
                                        src="prhProjects/crownLogo.png"
                                    />
                                </a>
                                <a
                                    href="https://borrowreadrepeat.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="max-h-[75px] grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
                                        src="prhProjects/brrLogo.png"
                                    />
                                </a>
                                <a
                                    href="https://kokilabooks.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="max-h-[75px] grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
                                        src="prhProjects/kokilaLogo.avif"
                                    />
                                </a>
                                <a
                                    href="https://penguinrandomhouseaudio.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="max-h-[75px] grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
                                        src="prhProjects/audioLogo2.avif"
                                    />
                                </a>
                                <a
                                    href="https://knopfdoubleday.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="max-h-[75px] grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
                                        src="prhProjects/kddLogo.jpg"
                                    />
                                </a>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto my-10">
                            <TextGroup heading="Contributions"></TextGroup>

                            <section className="flex flex-col gap-10 mt-5 ">
                                <TextImage
                                    subheading="Audiobook Share Modal"
                                    image="prhProjects/audioModal1.png"
                                    imageAlt="audio modal 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        [REWRITE THIS] In addition to allowing
                                        authors to share social links pointing
                                        the the audio download, the audiobook
                                        share modal embed allows the WCA to
                                        showcase an embeddable audio player on a
                                        site.
                                    </p>
                                    <ul>
                                        <li>
                                            The embed section of the modal
                                            presents an option to choose between
                                            embeddable player layouts: Square or
                                            Rectangle.
                                        </li>
                                        <li>
                                            When a choice is made, the
                                            corresponding preview appears.
                                        </li>
                                        <li>
                                            The iframe code for the selected
                                            widget is provided, as well as a
                                            button for copying the HTML.
                                        </li>
                                        <li>
                                            When the button is clicked, the
                                            iframe code is copied to the
                                            device’s clipboard, and the toast
                                            notification ‘HTML Copied’ appears.
                                        </li>
                                    </ul>
                                </TextImage>

                                <TextImage
                                    subheading="Team List Module"
                                    image="prhProjects/teamList1.png"
                                    imageAlt="team list 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        The Team List Module allows the WCA to
                                        display a selection of Team Members
                                        (created via a custom WordPress post
                                        type) in a list format.
                                    </p>
                                    <ul>
                                        <li>
                                            Add a headshot, bio, job title, and
                                            optional carousel of featured titles
                                            for each team member
                                        </li>
                                        <li>
                                            Insert as a standalone module into
                                            any page or use as its own page
                                        </li>
                                        <li>
                                            Display them as a list or grid (bio
                                            drawer color is customizable)
                                        </li>
                                        <li>
                                            To create a page, add a Featured
                                            Content Module for a header
                                        </li>
                                    </ul>
                                </TextImage>

                                <TextImage
                                    subheading="Logo Banner Module"
                                    image="prhProjects/logoBanner1.png"
                                    imageAlt="logo banner 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        This custom Gutenberg block can be
                                        inserted into any page or post. Options
                                        for customization include:
                                    </p>
                                    <ul>
                                        <li>
                                            Add a headshot, bio, job title, and
                                            optional carousel of featured titles
                                            for each team member
                                        </li>
                                        <li>
                                            Insert as a standalone module into
                                            any page or use as its own page
                                        </li>
                                        <li>
                                            Display them as a list or grid (bio
                                            drawer color is customizable)
                                        </li>
                                        <li>
                                            To create a page, add a Featured
                                            Content Module for a header
                                        </li>
                                    </ul>
                                </TextImage>

                                <TextImage
                                    subheading="Footer"
                                    image="prhProjects/footer1.png"
                                    imageAlt="footer 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        The footer accepts the first 8 items
                                        added via WordPress admin & allows the
                                        WCA to display a division’s social
                                        platforms so that site visitors can
                                        easily connect. Options for
                                        customization include:
                                    </p>
                                    <ul>
                                        <li>Column or Small</li>
                                        <li>Colors</li>
                                        <li>Size</li>
                                        <li>Logo placement</li>
                                        <li>Social icons</li>
                                        <li>Number of links</li>
                                    </ul>
                                </TextImage>
                            </section>
                        </section>
                    </FadeSection>
                </div> */}
            </main>
        </>
    );
};

export default DivisionPlatform;
