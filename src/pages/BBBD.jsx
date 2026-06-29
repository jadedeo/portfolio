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
        (project) => project.title === "Freelance Directory Redesign",
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
                                    As a non-profit, Blk + Brwn Book Designers
                                    strives to provide underrepresented
                                    publishing professionals & hopefuls with
                                    community & opportunities for career
                                    development. This includes featuring those
                                    open to creative work in their Freelance
                                    Directory.
                                </p>
                                <p>
                                    <strong className="highlight">
                                        Though extensive, this directory was
                                        deemed lacking in terms of usability &
                                        aesthetic appeal.
                                    </strong>{" "}
                                    This project sought to remedy that, while
                                    simultaneously ecouraging conversations
                                    around representation & inclusive
                                    classification systems.
                                </p>
                                <div className="p-4 border-1 rounded-md bg-white">
                                    <p>
                                        Note that these designs have not yet
                                        been implemented.
                                    </p>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] ">
                            <TextImage
                                smallHeading="initial state"
                                heading="the site's original design neglected best practices & was noticably unrefined"
                                image="bbbd/originalDirectory.png"
                                addImageShadow={false}
                                // mat={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Both the Freelance Directory & the Job Board
                                    pages of BBBD's original website{" "}
                                    <strong className="highlight">
                                        failed to clearly group related
                                        information or provide an effective
                                        means of filtering content.
                                    </strong>{" "}
                                    On larger screens, the content was nearly
                                    full-bleed, making it additionally
                                    exhausting to take in rows upon rows of
                                    inconsistently aligned material.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px] ">
                            <TextImage
                                smallHeading="the redesign"
                                heading="once restructured, the content became easier to parse & more visually pleasing"
                                image="bbbd/redesign1.png"
                                addImageShadow={false}
                                // mat={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Version 1
                                    </strong>{" "}
                                    contrasted sharp, clean lines with a
                                    semi-organic masonry gallery. While the
                                    content of the gallery is pared back enough
                                    for this to work, using more regular lines
                                    would making the material simpler to scan.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextImage
                                // heading="..."
                                image="bbbd/redesign2.png"
                                addImageShadow={false}
                                // mat={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Version 2
                                    </strong>{" "}
                                    came about following the board's decision to
                                    skew toward a lighter, more friendly
                                    application of the brand's colors. It favors
                                    softer corners & more straightforward
                                    alignment.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                smallHeading="other features"
                                heading="the redesign is reusable & reponsive"
                                image="bbbd/otherFeatures.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Though not recreated in the style of V2, the
                                    redesign{" "}
                                    <strong className="highlight">
                                        acommmodates mobile devices,
                                    </strong>{" "}
                                    as well as the ability to
                                    <strong className="highlight">
                                        favorite gallery items.
                                    </strong>{" "}
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextImage
                                image="bbbd/newJobBoard.png"
                                addImageShadow={false}
                                // mat={false}
                                imagePlacement="right"
                            >
                                <p>
                                    The design can be further{" "}
                                    <strong className="highlight">
                                        applied to the site's Job Board
                                    </strong>{" "}
                                    page.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px]">
                            <TextGroup
                                smallHeading="work in progress"
                                heading="more to come on the bbbd taxonomy"
                                image="bbbd/currentLists.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            ></TextGroup>
                        </section>
                    </FadeSection> */}

                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px]">
                            <TextGroup
                                smallHeading="the taxonomy"
                                heading="before the directory comes data collection — bbbd proposes an alternative to faulty racial/ethnic classification systems. "
                                image="bbbd/currentLists.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    This section is under construction — please
                                    check back soon for updates!
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/*
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                subheading="Most taxonomies..."
                                image="bbbd/currentLists.png"
                                addImageShadow={false}
                                imagePlacement="right"
                            ></TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup
                                heading="3 guiding principles drove the contruction of this new
                                    methodology."
                            >
                                <div className="mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                                    <TextImage
                                        subheading="Representation"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="01"
                                    >
                                        <p>
                                            From the start, represent as many
                                            “Black” and “Brown” identities as
                                            possible, but allow room for growth
                                            with increased participation from
                                            the community.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Specificity"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="02"
                                    >
                                        <p>
                                            Specificity would allow for users to
                                            locate professionals suited to their
                                            project & acknowledged that those
                                            who identify as “Black” and/or
                                            “Brown'' are not monoliths.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Manageability"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="03"
                                    >
                                        <p>
                                            We should be mindful of user
                                            experience & practicality in
                                            building/maintaining the site,
                                            ensuring clarity & ease of use.
                                        </p>
                                    </TextImage>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection> */}
                </div>
            </main>
        </>
    );
};

export default BBBD;
