import { useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import StickyNote from "../components/StickyNote";
import ChatBubble from "../components/ChatBubble";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

const InTouch = () => {
    const projectData = projectList.find(
        (project) => project.title === "inTouch"
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
                    {/* overview */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px] ">
                            <TextImage
                                heading="overview"
                                image="intouch/poster.png"
                                addImageShadow={false}
                                // mat={false}s
                                imagePlacement="right"
                            >
                                <p>
                                    In its final form, inTouch was designed as a
                                    service that prompts more frequent,
                                    personalized communication to strengthen
                                    existing relationships that may experience
                                    strain due to distance and/or busy
                                    schedules.
                                </p>
                                <p>
                                    Users receive prompts based on the activity
                                    monitored by their existing applications
                                </p>
                                <p>
                                    Instead of becoming yet another app to
                                    install and manage, inTouch was imagined as
                                    an integration for traditional messaging
                                    services, made to be accessed from within
                                    those users already frequent.
                                </p>
                                <p>
                                    Of 7 concepts presented on final pitch day,
                                    inTouch placed first - garnering nearly
                                    twice the amount of investor dollars as the
                                    businesses placing second and third.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* task */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="the task">
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        Pitch an innovative digital service to a
                                        panel of investors, clearly
                                        communicating value provided to
                                        stakeholders & showcasing a well-thought
                                        out business plan.
                                    </p>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* task */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="the starting point">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum malesuada
                                    fermentum nibh, non tristique risus
                                    vestibulum et. Maecenas arcu ex, malesuada
                                    ac mauris nec, elementum bibendum tellus.
                                    Proin ac commodo ligula. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                    Vestibulum malesuada fermentum nibh, non
                                    tristique risus vestibulum et. Maecenas arcu
                                    ex, malesuada ac mauris nec, elementum
                                    bibendum tellus. Proin ac commodo ligula.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* testing mvp */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="launching an mvp"
                                imageAlt="TODO: add alt"
                                image="intouch/mvp.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        To validate our product concept, the
                                        team executed some Wizard-of-Oz style
                                        testing:
                                    </strong>
                                    over the course of a few days, we would
                                    intentionally disperse a series of updates
                                    to a number of our contacts and determine
                                    how they were received. If possible, we
                                    would perform the test with individuals we
                                    were not already in constant contact with
                                    (eg. a friend we hadn’t talked to in a
                                    while).
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* findings */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextGroup subheading="Findings">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum malesuada
                                    fermentum nibh, non tristique risus
                                    vestibulum et. Maecenas arcu ex, malesuada
                                    ac mauris nec, elementum bibendum tellus.
                                    Proin ac commodo ligula.
                                </p>
                            </TextGroup>

                            <section className="mx-auto max-w-screen-lg mt-10 flex flex-col gap-10">
                                <div className="grid grid-cols-2 gap-5 items-center">
                                    <ChatBubble>
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                <strong>
                                                    It was nice to see
                                                    day-to-day things you were
                                                    up to
                                                </strong>{" "}
                                                rather than just the big stuff!
                                            </p>
                                        </div>
                                        <p className="hover:underline text-gray-400 text-sm text-right">
                                            Test Participant 3/9
                                        </p>
                                    </ChatBubble>

                                    <StickyNote>
                                        Testers enjoyed the small updates
                                    </StickyNote>
                                </div>

                                <div className="grid grid-cols-2 gap-5 items-center">
                                    <ChatBubble>
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                It’s sometimes hard to have a
                                                conversation starter so{" "}
                                                <strong>
                                                    updates like this make it a
                                                    little easier to reach out
                                                    to people
                                                </strong>
                                            </p>
                                        </div>
                                        <p className="hover:underline text-gray-400 text-sm text-right">
                                            Test Participant 3/9
                                        </p>
                                    </ChatBubble>

                                    <StickyNote>
                                        They saw benefit in being prompted to
                                        send updates to others. The trick would
                                        be ensuring prompts wouldn’t become
                                        annoying or violate user privacy.
                                    </StickyNote>
                                </div>
                            </section>
                        </section>
                    </FadeSection>

                    {/* user journey */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="mapping the user journey"
                                imageAlt="TODO: add alt"
                                image="intouch/journeyMap.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum malesuada
                                    fermentum nibh, non tristique risus
                                    vestibulum et. Maecenas arcu ex, malesuada
                                    ac mauris nec, elementum bibendum tellus.
                                    Proin ac commodo ligula.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* staff-side solution */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px]">
                            <TextGroup heading="the final concept">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent at egestas tellus.
                                    Sed ullamcorper tellus sit amet quam egestas
                                    iaculis. Morbi finibus, erat vel consectetur
                                    sagittis, metus lacus semper magna, vel
                                    maximus diam ipsum quis urna.{" "}
                                </p>

                                {/* youtube link, if needed: https://www.youtube.com/watch?v=jdjxqBqDNXg */}
                                <video controls>
                                    <source
                                        src="intouch/intouchVideo.mp4"
                                        type="video/mp4"
                                    ></source>
                                </video>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* design assets */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="ui mockups"
                                imageAlt="TODO: add alt"
                                image="intouch/screensAnnotated.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum malesuada
                                    fermentum nibh, non tristique risus
                                    vestibulum et. Maecenas arcu ex, malesuada
                                    ac mauris nec, elementum bibendum tellus.
                                    Proin ac commodo ligula.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="proposed business model">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum malesuada
                                    fermentum nibh, non tristique risus
                                    vestibulum et. Maecenas arcu ex, malesuada
                                    ac mauris nec, elementum bibendum tellus.
                                    Proin ac commodo ligula.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default InTouch;
