import { useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

const EmailHelper = () => {
    const projectData = projectList.find(
        (project) => project.title === "Division Platform + Splash"
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
                        project={projectData}
                        image="emailhelper/emailHelperLight.png"
                    />
                </section>

                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextImage
                                heading="impact"
                                image="emailhelper/timeChart.png"
                                addImageShadow={false}
                                mat={false}
                                imagePlacement="right"
                            >
                                <p>
                                    Use of Email Helper resulted in a{" "}
                                    <strong className="highlight">
                                        66.6% decrease in time on task.
                                    </strong>{" "}
                                    Staff saved a significant amount of time by
                                    avoiding a lengthy Google doc of templates
                                    and having to format on the fly.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
                            <TextImage
                                heading="division platform"
                                // subheading="How can we handle both formatting and email draft creation?"
                                imageAlt="TODO: add alt"
                                image="prhProjects/divisionPlatformOverview.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                                // mat={false}
                            >
                                <p>
                                    Staff frequently used additional styling in
                                    their emails to emphasize and distinguish
                                    important information, so{" "}
                                    <strong className="highlight">
                                        we knew from the start that
                                        incorporating a rich text editor would
                                        be necessary.
                                    </strong>
                                </p>
                                <p>
                                    <strong className="highlight">
                                        We also knew that we’d be unable to send
                                        emails directly from the Email Helper
                                        extension
                                    </strong>{" "}
                                    — this is not permitted by TCP/IP
                                    restrictions. A mailto link used to create
                                    an email draft would allow us to get as
                                    close to this functionality as possible …
                                    but it wouldn’t support intricate
                                    formatting.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" pt-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                heading="splash"
                                imageAlt="TODO: add alt"
                                image="prhProjects/gwpPublic.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Version 1
                                    </strong>{" "}
                                    of the email generation process required
                                    users to search through the combined
                                    templates to manually edit placeholder
                                    values.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="prhProjects/gwpAdmin.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Version 2
                                    </strong>{" "}
                                    explored collecting user input as its own
                                    distinct step. These values were used to
                                    complete the email previewed in a new
                                    window, but this split view contained too
                                    much repetition.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default EmailHelper;
