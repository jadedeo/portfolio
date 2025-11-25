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

const BBBD = () => {
    const projectData = projectList.find(
        (project) => project.title === "Blk + Brwn Book Designers"
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
                        image="bbbd/bbbdLight.PNG"
                    />
                </section>

                <div className="flex flex-col">
                    {/* overview */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px] ">
                            <TextImage
                                heading="overview"
                                // image="intouch/poster.png"
                                addImageShadow={false}
                                // mat={false}
                                imagePlacement="right"
                            >
                                <p>
                                    <strong className="highlight">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </strong>{" "}
                                    Integer ac vehicula massa. Duis ullamcorper
                                    porttitor massa dictum pellentesque. Mauris
                                    mollis orci urna, eu efficitur augue
                                    molestie ut. Quisque orci nisi, placerat non
                                    commodo pellentesque, efficitur id augue.
                                    Sed quis est sit amet odio pharetra
                                    imperdiet.
                                </p>
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        Quisque orci nisi, placerat non commodo
                                        pellentesque, efficitur id augue. Sed
                                        quis est sit amet odio pharetra
                                        imperdiet.
                                    </p>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* opposing the status quo */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextImage
                                heading="opposing the status quo"
                                imageAlt="TODO: add alt"
                                // image="intouch/competitorAnalysis.png"
                                // mat={false}
                                imagePlacement="right"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer ac vehicula
                                        massa.
                                    </strong>{" "}
                                    Duis ullamcorper porttitor massa dictum
                                    pellentesque. Mauris mollis orci urna, eu
                                    efficitur augue molestie ut.
                                </p>

                                <ul>
                                    <li>
                                        {" "}
                                        Duis ullamcorper porttitor massa dictum
                                        pellentesque.
                                    </li>
                                    <li>
                                        {" "}
                                        Duis ullamcorper porttitor massa dictum
                                        pellentesque.
                                    </li>
                                    <li>
                                        {" "}
                                        Duis ullamcorper porttitor massa dictum
                                        pellentesque.
                                    </li>
                                </ul>
                            </TextImage>

                            <section className="mx-auto max-w-screen-lg columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>...</strong>
                                    </p>
                                    <p>...</p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>...</strong>
                                    </p>
                                    <p>...</p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>...</strong>
                                    </p>
                                    <p>...</p>
                                </StickyNote>
                            </section>
                        </section>
                    </FadeSection>

                    {/* guiding principles */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="defining our guiding principles">
                                <div className="mx-auto max-w-screen-lg flex flex-col gap-10 mt-3">
                                    {/* TODO: make into component */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/students.png"
                                            className="max-w-[200px] sm:w-auto bg-gray-100"
                                        />
                                        <TextGroup subheading="Representation">
                                            <ul>
                                                <li>
                                                    From the start, represent as
                                                    many “Black” and “Brown”
                                                    identities as possible.
                                                </li>
                                                <li>
                                                    Allow room for this list to
                                                    grow with increased
                                                    participation from the
                                                    community.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>

                                    <hr className="" />

                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/busyProfessionals.png"
                                            className="max-w-[200px] sm:w-auto bg-gray-100"
                                        />
                                        <TextGroup subheading="Specificity">
                                            <ul>
                                                <li>
                                                    Specificity would allow for
                                                    users to locate
                                                    professionals with an
                                                    identity that suits their
                                                    specific project.
                                                </li>
                                                <li>
                                                    Specificity is respect. It
                                                    is an acknowledgment that
                                                    those who identify as
                                                    “Black” and/or “Brown'' are
                                                    not a monolith, and that
                                                    there are many nuances &
                                                    distinctions within racial,
                                                    regional, and ethnic groups,
                                                    even though many of us are
                                                    united by shared culture,
                                                    religious/spiritual
                                                    practices, geography, etc.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>

                                    <hr className="" />

                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/timezones.png"
                                            className="max-w-[200px] sm:w-auto bg-gray-100"
                                        />
                                        <TextGroup subheading="Manageability">
                                            <ul>
                                                <li>
                                                    While we want to be as
                                                    inclusive of as many
                                                    different “Black” and
                                                    “Brown” communities as
                                                    possible, we should also be
                                                    mindful of user experience &
                                                    practicality in
                                                    building/maintaining the
                                                    site.
                                                </li>
                                                <li>
                                                    We want to ensure clarity &
                                                    ease of use.
                                                </li>
                                                <li>
                                                    There are thousands of
                                                    ethnicities in the world. It
                                                    would likely be best to find
                                                    a system of grouping them
                                                    that makes sense for the
                                                    communities we’re referring
                                                    to (ex. countries v. regions
                                                    v. states v. individual
                                                    ethnicities/tribes).
                                                </li>
                                                <li>
                                                    We’re not expecting a very
                                                    short list, but also don’t
                                                    want one that’s overly long.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* opposing the status quo */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px] flex flex-col gap-10">
                            <TextImage
                                heading="version 1: the imperfect"
                                imageAlt="TODO: add alt"
                                // image="intouch/competitorAnalysis.png"
                                // mat={false}
                                imagePlacement="right"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer ac vehicula
                                        massa.
                                    </strong>{" "}
                                    Duis ullamcorper porttitor massa dictum
                                    pellentesque. Mauris mollis orci urna, eu
                                    efficitur augue molestie ut.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* findings */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextGroup>
                                <p>
                                    <strong className="highlight">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer ac vehicula
                                        massa.
                                    </strong>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer ac vehicula massa.
                                    Duis ullamcorper porttitor massa dictum
                                    pellentesque. Mauris mollis orci urna, eu
                                    efficitur augue molestie ut.
                                </p>
                            </TextGroup>
                            <section className="mx-auto max-w-screen-lg grid grid-cols-3 mt-10 gap-10">
                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            <strong>
                                                Mauris mollis orci urna,
                                            </strong>{" "}
                                            eu efficitur augue molestie ut.
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-sm text-right">
                                        Test Participant 3/9
                                    </p>
                                </ChatBubble>

                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            Integer ac vehicula massa. Duis
                                            ullamcorper porttitor massa dictum
                                            pellentesque.{" "}
                                            <strong>
                                                Mauris mollis orci urna, eu
                                                efficitur augue molestie ut.
                                            </strong>
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-sm text-right">
                                        Test Participant 3/9
                                    </p>
                                </ChatBubble>

                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            Although they did{" "}
                                            <strong>
                                                feel stiff and more like social
                                                media posts to be observed
                                            </strong>
                                            , the updates were nice because{" "}
                                            <strong>
                                                I know you're alive and seem
                                                happy and okay!
                                            </strong>
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-sm text-right">
                                        Test Participant 2/9
                                    </p>
                                </ChatBubble>
                            </section>
                        </section>
                    </FadeSection>

                    {/* testing mvp */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="version 2: the promising"
                                imageAlt="TODO: add alt"
                                // image="intouch/mvp.png"
                                // mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.{" "}
                                    </strong>
                                    Integer ac vehicula massa. Duis ullamcorper
                                    porttitor massa dictum pellentesque. Mauris
                                    mollis orci urna, eu efficitur augue
                                    molestie ut.
                                </p>
                                <p>
                                    Quisque orci nisi, placerat non commodo
                                    pellentesque, efficitur id augue. Sed quis
                                    est sit amet odio pharetra imperdiet.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* staff-side solution */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px]">
                            <TextGroup heading="the final concept">
                                <p>
                                    inTouch came together just in time for pitch
                                    day and wholly cleared the competition. It
                                    stood out for it's ability to address a
                                    niche but very real need, offering
                                    convenience without sacrificing the personal
                                    touches needed for relationships to remain
                                    strong.
                                </p>
                                <p>
                                    The service's final design successfully
                                    distinguished itself from existing platforms
                                    and{" "}
                                    <strong className="highlight">
                                        addressed key concerns uncovered during
                                        the research phase: 
                                    </strong>
                                </p>

                                <div className="mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                                    <TextImage
                                        subheading="Beyond the typical app"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="01"
                                    >
                                        <p>
                                            inTouch lives within the user's
                                            messaging service of choice,
                                            eliminating the need to monitor an
                                            entirely new app.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Customized prompting"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="02"
                                    >
                                        <p>
                                            Users set their privacy and
                                            prompting preferences, so
                                            notification frequency is always
                                            within their control.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Choice of updates"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="03"
                                    >
                                        <p>
                                            Users consent to what kind of
                                            activity inTouch should observe and
                                            suggest sharing updates for.
                                        </p>
                                    </TextImage>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* design assets */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="iOS interface mockups"
                                imageAlt="TODO: add alt"
                                // image="intouch/screensAnnotated.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                // mat={false}
                            />
                        </section>
                    </FadeSection>

                    {/* business model */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="proposed business model">
                                <p>
                                    <strong className="highlight">
                                        To test market demand and engagement
                                        before wider consumer monetization,
                                    </strong>{" "}
                                    we proposed a controlled and scalable
                                    rollout including organization-wide plans
                                    and invite incentives.
                                </p>
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        It is not required that both the sender
                                        and receiver of inTouch updates have
                                        access to the service. We envisioned it
                                        only be necessary for the sender to be a
                                        direct user.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                                    {/* TODO: swap divs out for small image variant of TextImage */}
                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="intouch/institutions.png"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            Institutional Onboarding
                                        </h3>
                                        <p>
                                            Universities, enterprises, and
                                            counselors purchase and distribute
                                            access at an institutional rate.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="intouch/invite.png"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            Free Built-in Invitations
                                        </h3>
                                        <p>
                                            Users receive five complimentary
                                            invites under their organization's
                                            plan.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="intouch/gift.png"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            Paid Expansion & Referrals
                                        </h3>
                                        <p>
                                            Additional invites are made
                                            available for purchase or gifting.
                                        </p>
                                    </div>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default BBBD;
