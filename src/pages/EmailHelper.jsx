import { useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";
import Accordion from "../components/Accordion";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

const EmailHelper = () => {
    const projectData = projectList.find(
        (project) => project.title === "Email Helper"
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

                <div className="flex flex-col">
                    {/* overview */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextGroup heading="overview">
                                <p>
                                    The San Francisco Recreation & Parks
                                    Department services a city's worth of park
                                    goers via their Reservations & Permits
                                    Divison. Through processing 70,000+
                                    reservations for 230 parks & 100 recreation
                                    centers,{" "}
                                    <strong className="highlight">
                                        the team's support staff must satisfy
                                        thousands of inquiries annually.
                                    </strong>
                                </p>
                            </TextGroup>
                            <TextImage
                                imageAlt="TODO: add alt text"
                                image="emailhelper/overview.gif"
                                addImageShadow={false}
                                imagePlacement="right"
                                mat={false}
                            >
                                <p>
                                    To make their job easier,{" "}
                                    <strong className="highlight">
                                        we designed a suite of solutions
                                        tailored to a tightly constrained
                                        government environment.
                                    </strong>
                                </p>
                                <p>
                                    <strong className="highlight">
                                        One component of this is Email Helper
                                    </strong>{" "}
                                    — a browser extension created to make the
                                    task of replying to repetitive quicker &
                                    easier for support staff.
                                </p>
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        When tested against current workflows,
                                        Email Helper produced a 67% faster
                                        response time.
                                    </p>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* problem */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextGroup heading="the problem">
                                <p>
                                    <strong className="highlight">
                                        SFRPD logged 13,000 phone calls and
                                        5,000 emails in the last year alone,
                                    </strong>{" "}
                                    a majority of which come from city residents
                                    experiencing frustration with the current
                                    reservation & permitting system. From
                                    website to permit reception, residents pass
                                    through 4+ platforms, creating a disjointed
                                    & often circular user journey.
                                </p>
                            </TextGroup>
                            <TextImage
                                // heading="the problem"
                                imageAlt="TODO: add alt text"
                                image="emailhelper/peter.PNG"
                                addImageShadow={false}
                                imagePlacement="left"
                                mat={false}
                            >
                                <p>
                                    Though there are intentions to replace the
                                    main platform (ActiveNet) soon,{" "}
                                    <strong className="highlight">
                                        staff are stuck with performing
                                        excessive follow-ups & carrying out
                                        corrective measures
                                    </strong>{" "}
                                    for the faulty system in the interim. We
                                    asked ourselves:
                                </p>
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        How might we reduce service delivery
                                        costs for staff, while improving the
                                        reservation process for residents?
                                    </p>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* research + findings */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="research + findings"
                                // subheading="Methods & Analysis"
                                // imageAlt="TODO: add alt text"
                                // image="emailhelper/clustering.png"
                                // addImageShadow={false}
                                imagePlacement="bottom"
                                mat={false}
                            >
                                <p>
                                    To ensure we had a complete an understanding
                                    of the problem space & it's main
                                    stakeholders, we set out to execute a
                                    thorough research effort. This included
                                    analysis of various large datasets, as well
                                    as performing field research.
                                </p>

                                <section className="sm:grid grid-cols-3">
                                    <h6 className="hidden sm:block font-bold">
                                        Method
                                    </h6>
                                    <h6 className="hidden sm:block font-bold">
                                        Volume
                                    </h6>
                                    <h6 className="hidden sm:block font-bold">
                                        Purpose
                                    </h6>

                                    <hr className="hidden sm:block col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Email analysis
                                    </p>
                                    <p>4,900+ messages</p>
                                    <p className="mt-3 sm:mt-0">
                                        Identify repetitive workload patterns
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Call log review
                                    </p>
                                    <p>800+ calls</p>
                                    <p className="mt-3 sm:mt-0">
                                        Categorize recurring questions
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Staff interviews
                                    </p>
                                    <p>5 participants, 8 sessions</p>
                                    <p className="mt-3 sm:mt-0">
                                        Understand daily workflows & pain points
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Co-design workshop
                                    </p>
                                    <p>12 participants</p>
                                    <p className="mt-3 sm:mt-0">
                                        Identify breakdowns & opportunities
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Resident surveys
                                    </p>
                                    <p>50+ responses</p>
                                    <p className="mt-3 sm:mt-0">
                                        Gauge satisfaction and usability
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Park intercept interviews
                                    </p>
                                    <p>60+ participants</p>
                                    <p className="mt-3 sm:mt-0">
                                        Observe & gather real-time feedback from
                                        San Francisco park-goers
                                    </p>
                                </section>
                            </TextImage>
                        </section>
                    </FadeSection>
                    {/* key takeaways */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <div className="mx-auto max-w-screen-lg grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                                {/* TODO: swap divs out for small image variant of TextImage */}
                                <div className="flex flex-col gap-2">
                                    <div className="max-h-[300px]">
                                        <img
                                            className="h-full mx-auto"
                                            src="emailhelper/inbox.png"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Staff are forced to fill the gaps in an
                                        incomplete service experience.
                                    </h3>
                                    <p>
                                        Disorganized web content & a
                                        difficult-to-navigate reservation system
                                        push the public to call & email.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="max-h-[300px]">
                                        <img
                                            className="h-full mx-auto"
                                            src="emailhelper/repeat.png"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        70%+ of communications are informational
                                        or repetitively procedural.
                                    </h3>
                                    <p>
                                        The same questions about permit
                                        requirements, facility rules, and
                                        availability resurface constantly.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="max-h-[300px]">
                                        <img
                                            className="h-full mx-auto"
                                            src="emailhelper/noChanges.png"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Big tooling changes are a no-go.
                                    </h3>
                                    <p>
                                        SFRPD is beholden to contracted
                                        agreements with vendors & can't afford
                                        labor-intensive updates. Major usability
                                        issues, however, need to be addressed by
                                        swapping in a more holistic system.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </FadeSection>

                    {/* adjusting our pov */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="adjusting our perspective"
                                imageAlt="TODO: add alt text"
                                image="emailhelper/solutionDiagram.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                                mat={false}
                            >
                                <p>
                                    With some serious limits on what could
                                    realistically be accomplished by the
                                    division, we sought to make our proposed
                                    solution as simultaneously effective &
                                    low-lift as possible. There were several
                                    artifacts we could provide the RPD team with
                                    to tackle usability concerns, but nothing
                                    yet to handle inefficiencies from the
                                    business's side.
                                </p>
                                <p>
                                    <strong className="highlight">
                                        This suggested a clear opportunity for
                                        an impactful design intervention.
                                    </strong>
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* constraints */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="designing within technical constraints">
                                <p>
                                    Though a goalpost was in sight, we needed to
                                    be aware of any & all guardrails when
                                    brainstorming.{" "}
                                    <strong className="highlight">
                                        Any piece of software or technical
                                        tooling that we conceived of needed to
                                        respect the following in order to be
                                        feasibly adopted by the team.
                                    </strong>
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                                    {/* TODO: swap divs out for small image variant of TextImage */}
                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="emailhelper/noDevs.png"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            SFRPD employs no in-house
                                            developers.
                                        </h3>
                                        <p>
                                            There is no one on staff to maintain
                                            or customize a complex system, so
                                            any solution requiring extensive
                                            technical upkeep would not be
                                            sustainable for the team.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="emailhelper/noIntegrations.png"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            There could be no direct integration
                                            with third-parties.
                                        </h3>
                                        <p>
                                            SFRPD currently utilizes reservation
                                            systems that we cannot integrate
                                            with or modify. The helper needed to
                                            be its own standalone solution.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="max-h-[300px]">
                                            <img
                                                className="h-full mx-auto"
                                                src="emailhelper/noStorage.PNG"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            The cost of hosting and data storage
                                            had to be essentially zero.
                                        </h3>
                                        <p>
                                            With limited budget, the solution
                                            can’t rely on external servers or
                                            paid cloud storage. It needs to work
                                            entirely within staff’s existing
                                            tools to avoid introducing new
                                            expenses.
                                        </p>
                                    </div>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* staff-side solution */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextGroup heading="the staff-side solution">
                                <p>
                                    <strong className="highlight">
                                        Email Helper is a browser extension that
                                        facilitates the creation and use of
                                        reusable templates,
                                    </strong>{" "}
                                    while seamlessly complementing existing
                                    staff workflows. It’s simple to adopt,
                                    cost-effective to run, and tailored to
                                    SFRPD’s specific environment.
                                </p>

                                <p>
                                    By helping staff respond to inquiries
                                    requests more quickly, they’d have more time
                                    to support residents who have complex,
                                    urgent, or unique needs that truly require
                                    human expertise & judgement.
                                </p>
                                <p>
                                    As of September 2025,{" "}
                                    <a
                                        className="underline"
                                        href="https://chromewebstore.google.com/detail/pkfpioiafnabijjljillhhapccnphken?utm_source=item-share-cb"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Email Helper has been published to
                                        Chrome web store.
                                    </a>
                                </p>
                            </TextGroup>

                            <TextImage
                                subheading="Template creation & management"
                                image="emailhelper/templatesScreens.png"
                                imageAlt="TODO: add image alt"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
                            />

                            <TextImage
                                subheading="Template selection & email creation"
                                image="emailhelper/selectionScreens.png"
                                imageAlt="TODO: add image alt"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
                            />

                            <TextImage
                                subheading="Empty states"
                                image="emailhelper/emptyScreens.png"
                                imageAlt="TODO: add image alt"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
                            />
                        </section>
                    </FadeSection>

                    {/* how it works */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="how it works"></TextGroup>

                            <div className="mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
                                <TextImage
                                    subheading="Create your templates from scratch"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/typingShort.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="01"
                                >
                                    <p>
                                        Use the custom input node to insert
                                        template placeholderst to be completed
                                        later
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="Apply basic styling"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/basicStyling.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="02"
                                >
                                    <p>
                                        Use a rich text editor to format your
                                        templates and then categorize them into
                                        sections as preferred
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="... or import templates from file"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/import.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="03"
                                >
                                    <p>
                                        Uploads will be validated for correct
                                        file format and structure
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="Select which templates to use"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/search.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="04"
                                >
                                    <p>
                                        Choose the templates needed to compose
                                        your email
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="Complete the required inputs"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/completeInputsShort.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="05"
                                >
                                    <p>
                                        Fill the custom inputs defined during
                                        template creation
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="Copy your email"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/copyPasteShort.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="06"
                                >
                                    <p>
                                        Preserve formatting by copying the
                                        completed email
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="... or create a draft"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/createDraftShort.gif"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="07"
                                >
                                    <p>
                                        Create a plaintext draft within your
                                        desktop email client
                                    </p>
                                </TextImage>
                            </div>
                        </section>
                    </FadeSection>

                    {/* measured impact */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px]">
                            <TextGroup heading="measured impact">
                                <p>
                                    Email Helper had a proven positive impact on
                                    staff workflows - it more than delivers on
                                    promises of greater speed and convenience
                                    than current workarounds.
                                </p>

                                <section className="sm:grid grid-cols-2">
                                    <h6 className="hidden sm:block font-bold">
                                        Measurement
                                    </h6>
                                    <h6 className="hidden sm:block font-bold">
                                        Outcome
                                    </h6>

                                    <hr className="hidden sm:block col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Time on task per email
                                    </p>

                                    <p className="mt-3 sm:mt-0">
                                        67% faster; average decrease of 115.9s
                                        to 38.7s
                                    </p>

                                    <hr className="hidden sm:block col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Time saved per week
                                    </p>

                                    <p className="mt-3 sm:mt-0">~11 hours</p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Staff satisfaction
                                    </p>

                                    <p className="mt-3 sm:mt-0">
                                        "The next best thing short of replacing
                                        the entire system"
                                    </p>

                                    <hr className="col-span-3 my-3" />

                                    <p className="font-bold sm:font-normal">
                                        Big-picture value
                                    </p>

                                    <p className="mt-3 sm:mt-0">
                                        Effective serves as an intermediary step
                                        while the department procures a new
                                        reservation system
                                    </p>
                                </section>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* key decisions + iteration */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup heading="key decisions + iteration" />
                            <Accordion>
                                {/* ITEM 1 */}
                                <div>
                                    <h3 className="text-xl font-bold">
                                        How can we handle both formatting and
                                        email draft creation?
                                    </h3>
                                    <p className="mt-3">
                                        Balancing technical limitations with
                                        user needs
                                    </p>
                                    <section className="pb-3">
                                        <TextImage
                                            imageAlt="TODO: add alt"
                                            image="emailhelper/formatting.png"
                                            addImageShadow={false}
                                            imagePlacement="bottom"
                                        >
                                            <p>
                                                Staff frequently used additional
                                                styling in their emails to
                                                emphasize and distinguish
                                                important information, so{" "}
                                                <strong className="highlight">
                                                    we knew from the start that
                                                    incorporating a rich text
                                                    editor would be necessary.
                                                </strong>
                                            </p>
                                        </TextImage>
                                    </section>
                                </div>

                                {/* ITEM 2 */}
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Shifting from window-based design to a
                                        single-page application (SPA)
                                    </h3>
                                    <p className="mt-3">subheading 3 test</p>
                                    <section className="pb-3">
                                        <TextImage
                                            imageAlt="TODO: add alt"
                                            image="emailhelper/windowsToSpa.png"
                                            addImageShadow={false}
                                            imagePlacement="bottom"
                                        >
                                            <p>
                                                During development, we
                                                discovered that using
                                                independent windows for template
                                                creation and email generator
                                                proved to be counter intuitive.
                                                Closing either of these resulted
                                                in dismissing the root pop-up as
                                                well — a drawback of the
                                                impermanent nature of browser
                                                extensions.{" "}
                                                <strong className="highlight">
                                                    Having to repeatedly
                                                    relaunch the extension not
                                                    only created an aggravating
                                                    user experience, but it
                                                    significantly increased time
                                                    on task.
                                                </strong>
                                            </p>
                                            <p>
                                                The revised design consolidates
                                                all functionality to the limited
                                                dimensions of the extension
                                                pop-up.
                                            </p>
                                        </TextImage>
                                    </section>
                                </div>

                                {/* ITEM 3 */}
                                <div>
                                    <h3 className="text-xl font-bold">
                                        What method of previewing an email &
                                        completing its inputs is most intuitive?
                                    </h3>
                                    <p className="mt-3">
                                        Minimizing repetition and maximizing
                                        efficiency
                                    </p>
                                    <section className="pb-10">
                                        <TextImage
                                            imageAlt="TODO: add alt"
                                            image="emailhelper/layoutV1.png"
                                            addImageShadow={false}
                                            imagePlacement="bottom"
                                        >
                                            <p>
                                                <strong className="highlight">
                                                    Version 1
                                                </strong>{" "}
                                                of the email generation process
                                                required users to search through
                                                the combined templates to
                                                manually edit placeholder
                                                values.
                                            </p>
                                        </TextImage>
                                    </section>
                                    <section className="py-10">
                                        <TextImage
                                            imageAlt="TODO: add alt"
                                            image="emailhelper/layoutV2.png"
                                            addImageShadow={false}
                                            imagePlacement="bottom"
                                        >
                                            <p>
                                                <strong className="highlight">
                                                    Version 2
                                                </strong>{" "}
                                                explored collecting user input
                                                as its own distinct step. These
                                                values were used to complete the
                                                email previewed in a new window,
                                                but this split view contained
                                                too much repetition.
                                            </p>
                                        </TextImage>
                                    </section>
                                    <section className="pt-10 pb-3">
                                        <TextImage
                                            imageAlt="TODO: add alt"
                                            image="emailhelper/layoutV3.png"
                                            addImageShadow={false}
                                            imagePlacement="bottom"
                                        >
                                            <p>
                                                <strong className="highlight">
                                                    Version 3 (Final)
                                                </strong>{" "}
                                                placed both user input
                                                collection and previewing within
                                                the same frame. Users can see
                                                the effects of their inputs in
                                                real time, without having to
                                                search through the template to
                                                complete fields.
                                            </p>
                                        </TextImage>
                                    </section>
                                </div>
                            </Accordion>
                        </section>
                    </FadeSection>

                    {/* next steps */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="next steps"
                                subheading="Updating UI & implementing additional functionality"
                                imageAlt="TODO: add alt"
                                image="emailhelper/nextSteps.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            />
                        </section>
                    </FadeSection>

                    {/* centralized alt */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextGroup subheading="Exploring a centralized alternative">
                                <p>
                                    We are interested in designing what a
                                    centralized template management system might
                                    look like and expect to revisit the project
                                    in the near future.
                                </p>{" "}
                                <p>
                                    While Email Helper as it stands was tailored
                                    to SFRPD’s current restrictions, it serves
                                    as a highly-usable proof of concept and
                                    mechanism by which the team can determine
                                    whether the costs of a more complex system
                                    can be justified.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default EmailHelper;
