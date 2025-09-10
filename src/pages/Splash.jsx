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

const Splash = () => {
    // const projectData = devProjectList.find(
    //     (project) => project.title == "Splash"
    // );
    // console.log("projectData", projectData);

    // const scrollDir = useScrollDirection();

    return (
        <>
            {/* <Header /> */}
            <main className=" mb-[50px] min-h-dvh ">
                <h1>splash</h1>
                {/* <section className="h-dvh">
                    <Hero
                        title={projectData.title}
                        subtitle={projectData.subtitle}
                        image={projectData.image}
                    >
                        <p>
                            Splash is a self-service tool to build landing pages
                            with the intention of driving awareness, sales, and
                            newsletter sign-ups for books and authors. Splash
                            also now supports basic sweepstakes that were
                            previously found in SWAT, as well as more complex
                            sweepstakes.
                        </p>
                    </Hero>
                </section>
                <div className="flex flex-col gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <div className="grid md:grid-cols-[1fr,1fr,2fr]  grid-cols-[1fr,1fr]  sm:flex-nowrap gap-x-[5%] gap-y-14">
                                <div className="min-w-fit">
                                    <h3 className="text-xl font-bold mb-2">
                                        Role
                                    </h3>
                                    <p>Associate Web Developer</p>
                                </div>
                                <div className="min-w-fit">
                                    <h3 className="text-xl font-bold mb-2">
                                        Team
                                    </h3>
                                    <p>2 product owners</p>
                                    <p>3-4 developers</p>
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
                        <section className=" w-full max-w-screen-lg mx-auto my-10">
                            <TextGroup heading="app overview"></TextGroup>
                            <section className="flex flex-col gap-10 mt-5">
                                <TextImage
                                    // heading="Team List Module"
                                    subheading="Splash Dashboard"
                                    image="prhProjects/splashDash.png"
                                    imageAlt="splash dashboard"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        Lorem ipsum blah blah
                                    </p>
                                    <ul>
                                        <li>
                                            Nullam dapibus cursus dui, eget
                                            egestas elit tempus a. Curabitur a
                                            feugiat ex, sit amet consectetur
                                            nibh.
                                        </li>
                                    </ul>
                                </TextImage> */}
                {/* <TextImage
                                    // heading="Team List Module"
                                    subheading="Splash Admin"
                                    image="prhProjects/splashAdmin.png"
                                    imageAlt="splash admin"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        Lorem ipsum blah blah
                                    </p>
                                    <ul>
                                        <li>
                                            Nullam dapibus cursus dui, eget
                                            egestas elit tempus a. Curabitur a
                                            feugiat ex, sit amet consectetur
                                            nibh.
                                        </li>
                                    </ul>
                                </TextImage>
                            </section>
                        </section>
                    </FadeSection> */}

                {/* <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto my-10 flex flex-col gap-5">
                            <TextGroup heading="overall impact">
                                <p>
                                    For the platform as a whole, in the first
                                    three quarters of 2023, the team saw page
                                    views increase more than 10% & purchase
                                    clicks more than 70% since 2022. As of April
                                    2024, Splash sites averaged 800,000 total
                                    monthly visits.
                                </p>
                                <p>
                                    Among live Splash sites are the following:
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
                            <TextGroup heading="Gift with Purchase">
                                <p>
                                    The Gift with Purchase module launched as
                                    one of Splash’s most impactful feature
                                    additions,{" "}
                                    <strong>
                                        aimed at helping PRH teams drive
                                        consumer engagement and boost book
                                        sales—especially during preorder
                                        campaigns
                                    </strong>
                                    .
                                </p>
                                <p>
                                    By enabling purchase incentive offers to run
                                    directly on existing Splash pages, the
                                    feature{" "}
                                    <strong>
                                        reduced reliance on third-party
                                        platforms, ensured legal and security
                                        compliance for data collection, and
                                        streamlined workflows for marketing
                                        teams
                                    </strong>
                                    . It was designed to support a wide range of
                                    promotional formats and empower teams to
                                    deliver a more cohesive, brand-aligned
                                    experience for readers.
                                </p>
                            </TextGroup> */}

                {/* <TextGroup subheading="how it works">
								<p className="mt-3">
									On the frontend, the module features a form
									that allows consumers to submit their proof
									of purchase information in order to receive
									either a digital gift (supplied immediately)
									or another type of gift (requiring manual
									work on your part to fulfill the offer).
								</p>
								<p>
									Once the pre-set module expiration date and
									time is reached, the module will
									automatically disappear from the page and
									consumers will no longer be able to see it
									and/or submit a form.
								</p>
							</TextGroup> */}

                {/* <section className="flex flex-col gap-10 mt-10">
                                <TextImage
                                    // heading="Team List Module"
                                    subheading="Module Settings"
                                    // image="prhProjects/audioModal1.png"
                                    // imageAlt="audio modal 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        Lorem ipsum blah blah
                                    </p>
                                    <ul>
                                        <li>
                                            Nullam dapibus cursus dui, eget
                                            egestas elit tempus a. Curabitur a
                                            feugiat ex, sit amet consectetur
                                            nibh.
                                        </li>
                                    </ul>
                                </TextImage>

                                <TextImage
                                    // heading="Team List Module"
                                    subheading="Report Generation"
                                    // image="prhProjects/audioModal1.png"
                                    // imageAlt="audio modal 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aenean commodo
                                        vulputate sollicitudin. Sed accumsan
                                        nisi purus, et aliquam orci sagittis eu.
                                        In eleifend faucibus sapien eu
                                        imperdiet.
                                    </p>
                                    <ul>
                                        <li>
                                            Nullam dapibus cursus dui, eget
                                            egestas elit tempus a. Curabitur a
                                            feugiat ex, sit amet consectetur
                                            nibh.
                                        </li>
                                    </ul>
                                </TextImage>

                                <TextImage
                                    // heading="Team List Module"
                                    subheading="Email Notification"
                                    image="prhProjects/gwpEmail.png"
                                    imageAlt="audio modal 1"
                                    imagePlacement="left"
                                >
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aenean commodo
                                        vulputate sollicitudin. Sed accumsan
                                        nisi purus, et aliquam orci sagittis eu.
                                        In eleifend faucibus sapien eu
                                        imperdiet.
                                    </p>
                                    <ul>
                                        <li>
                                            Nullam dapibus cursus dui, eget
                                            egestas elit tempus a. Curabitur a
                                            feugiat ex, sit amet consectetur
                                            nibh.
                                        </li>
                                    </ul>
                                </TextImage>
                            </section> */}
                {/* </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto my-10">
                            <TextGroup heading="Vue 3 migration">
                                <p>
                                    Beginning in Fall 2023, the Splash
                                    application underwent a extensive upgrade
                                    from Vue 2 to 3. This included ...
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div> */}
            </main>
        </>
    );
};

export default Splash;
