import { useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

const PrhProjects = () => {
    const projectData = projectList.find(
        (project) => project.title === "Division Platform & Splash"
    );

    const scrollDir = useScrollDirection();
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { threshold: 0.02 });

    return (
        <>
            <Header useLightLogo={isHeroInView} />
            <main className="mb-[50px] min-h-dvh ">
                <section ref={heroRef} className="h-dvh">
                    <Hero
                        className="prh-hero"
                        project={projectData}
                        image="prhProjects/prhProjectsLight.png"
                    />
                </section>

                <div className="flex flex-col">
                    {/* impact */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                smallHeading="overview"
                                heading="what are these tools for?"
                                image="prhProjects/footprints.png"
                                addImageShadow={false}
                                mat={false}
                                imagePlacement="right"
                            >
                                <p>
                                    Division Platform and Splash are both tools
                                    developed and maintained in-house by
                                    Consumer Applications.{" "}
                                    <strong className="highlight">
                                        Exactly what contributions do they make
                                        to the broader PRH ecosystem?
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        Increased cohesion across web properties
                                    </li>
                                    <li>
                                        Reduced need for outside
                                        developers/provision of in-house support
                                    </li>
                                    <li>Cleaned up company web footprint</li>
                                    <li>
                                        Increased purchase clicks, ad traffic,
                                        and page views
                                    </li>
                                </ul>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* division platform */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="division platform"
                                imageAlt="TODO: add alt"
                                image="prhProjects/divisionPlatformOverview.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Division Platform is a custom Wordpress
                                        theme
                                    </strong>{" "}
                                    tailored to the needs of PRH's diverse
                                    divisons and imprints. It supports a variety
                                    of Gutenberg and/or ACF-powered components,
                                    page types, and styling capabilities that
                                    highlight a group’s uniqueness and brand
                                    identity.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* dp usage */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextGroup>
                                <p>
                                    Among others, the theme is currently in use
                                    by the following:
                                </p>

                                <section className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-items-center items-center mt-3">
                                    <a
                                        href="https://crownpublishing.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/crownLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://borrowreadrepeat.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/brrLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://kokilabooks.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/kokilaLogo.avif"
                                        />
                                    </a>
                                    <a
                                        href="https://penguinrandomhouseaudio.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/audioLogo2.avif"
                                        />
                                    </a>
                                    <a
                                        href="https://knopfdoubleday.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/kddLogo.jpg"
                                        />
                                    </a>
                                </section>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* splash public */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="splash"
                                imageAlt="TODO: add alt"
                                image="prhProjects/gwpPublic.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Splash is a proprietary content
                                        management system
                                    </strong>{" "}
                                    — like Division Platform, it is intended for
                                    use by non-developers, making it easy for
                                    marketers across the company to build and
                                    launch websites, sweepstakes, and other
                                    landing pages for their projects.
                                </p>

                                <p>
                                    In 2024, the Gift with Purchase module was
                                    introduced as means of running limited-time
                                    purchase incentive offers from evergreen
                                    sites. The module is aimed at helping PRH
                                    teams drive consumer engagement and boost
                                    book sales, especially during preorder
                                    campaigns.
                                </p>

                                <p className="italic">
                                    Below: two examples of the GWP module
                                    published and in use
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* splash admin */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="prhProjects/gwpAdmin.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        At the time of creation, the Gift with
                                        Purchase module was Splash's most
                                        complex to date
                                    </strong>{" "}
                                    — it both utilized existing patterns (such
                                    as those defined by the Newsletter module)
                                    and created new ones (introducing the idea
                                    of module expiration to the system).
                                </p>

                                <p className="italic">
                                    Below, left to right: an empty GWP module in
                                    the Splash editor, topmost section of the
                                    module's settings panel, module management
                                    after publication, offer expiration email
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* splash sites */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextGroup>
                                <p>
                                    Splash has been used to host 1,000+
                                    sites/pages since it's launch in 2022. These
                                    include:
                                </p>

                                <section className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-items-center items-center mt-3">
                                    <a
                                        href="https://loreolympusbooks.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/loreOlympusLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://sites.prh.com/grumpy-monkey"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/grumpyMonkeyLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://sites.prh.com/uni-the-unicorn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/uniUnicornLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://sites.prh.com/percy-jackson-audiobooks"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/pjoLogo.png"
                                        />
                                    </a>
                                    <a
                                        href="https://michelleobamabooks.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="max-h-[75px]"
                                            src="prhProjects/michelleObamaLogo.png"
                                        />
                                    </a>
                                </section>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default PrhProjects;
