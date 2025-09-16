import { useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

const EmailHelper = () => {
    const projectData = projectList.find(
        (project) => project.title === "Email Helper"
    );
    console.log("projectData", projectData);

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
                            <TextGroup heading="context">
                                <p>
                                    SFRPD fields thousands of calls and emails
                                    from residents looking for help with
                                    reservations.{" "}
                                    <strong className="highlight">
                                        13,000 phone calls and 5,000 emails were
                                        logged in the last year alone.
                                    </strong>{" "}
                                    A significant portion of these inquiries are
                                    repetitive:{" "}
                                    <strong className="highlight">
                                        the same questions about permit
                                        requirements, facility rules, and
                                        availability resurface constantly.
                                    </strong>{" "}
                                    Staff also frequently need to reach out to
                                    residents for clarification on standard
                                    items like alcohol policies or equipment
                                    restrictions for events.
                                </p>
                                <p>
                                    If we could help staff respond to these
                                    requests more quickly, they’d have more time
                                    to support residents who have complex or
                                    urgent needs, or unique circumstances that
                                    truly require human expertise and judgement.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                heading="what we designed"
                                imageAlt="giant eagle glasses"
                                image="emailhelper/overview.gif"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="right"
                                mat={false}
                            >
                                <p>
                                    Email Helper was created to{" "}
                                    <strong className="highlight">
                                        make the process of sending repetitive
                                        emails more efficient.
                                    </strong>
                                </p>
                                <p>
                                    <strong className="highlight">
                                        The browser extension facilitates the
                                        creation and use of reusable templates,
                                        while seamlessly complementing existing
                                        staff workflows.
                                    </strong>{" "}
                                    It’s simple to adopt, cost-effective to run,
                                    and tailored to SFRPD’s specific
                                    environment.
                                </p>
                                <p>
                                    As of _______, Email Helper has been
                                    submitted to the Chrome and Microsoft web
                                    stores for approval.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

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
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextGroup heading="constraints">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
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
                                                src="emailhelper/noCost.png"
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

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-10 ">
                            <TextGroup heading="how it works"></TextGroup>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
                                <TextImage
                                    subheading="Create your templates from scratch"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/typingShort.gif"
                                    addImageShadow={false}
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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
                                    addComponentShadow={false}
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

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
                            <TextGroup heading="key decisions & iteration"></TextGroup>

                            <TextImage
                                subheading="How can we handle both formatting and email draft creation?"
                                imageAlt="TODO: add alt"
                                image="emailhelper/formatting.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
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
                                <p>
                                    As a midway point between this requirement
                                    and technical limitation, we provide the
                                    user with the option to either copy a
                                    formatted email or create a plaintext draft
                                    within their desktop email client.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="What method of previewing an email & completing its inputs is most intuitive?"
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV1.png"
                                addImageShadow={false}
                                addComponentShadow={false}
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
                        <section className="w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV2.png"
                                addImageShadow={false}
                                addComponentShadow={false}
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
                    <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV3.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    <strong className="highlight">
                                        Version 3 (Final)
                                    </strong>{" "}
                                    placed both user input collection and
                                    previewing within the same frame. Users can
                                    see the effects of their inputs in real
                                    time, without having to search through the
                                    template to complete fields.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Shifting from window-based design to a single-page application (SPA)"
                                imageAlt="TODO: add alt"
                                image="emailhelper/windowsToSpa.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    During development, we discovered that using
                                    independent windows for template creation
                                    and email generator proved to be counter
                                    intuitive. Closing either of these resulted
                                    in dismissing the root pop-up as well — a
                                    drawback of the impermanent nature of
                                    browser extensions.{" "}
                                    <strong className="highlight">
                                        Having to repeatedly relaunch the
                                        extension not only created an
                                        aggravating user experience, but it
                                        significantly increased time on task.
                                    </strong>
                                </p>
                                <p>
                                    The revised design consolidates all
                                    functionality to the limited dimensions of
                                    the extension pop-up.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
                            <TextImage
                                heading="Limitations"
                                imageAlt="TODO: add alt"
                                image="emailhelper/localChangesOnly.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                            >
                                <p>
                                    As a means of accommodating client-side
                                    restrictions,{" "}
                                    <strong className="highlight">
                                        Email Helper is decentralized by design.
                                    </strong>{" "}
                                    Template management is not controlled at a
                                    single source, so despite allowing users to
                                    share templates via file upload, there is
                                    currently no way to further enforce
                                    consistency.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
                            <TextImage
                                heading="next steps"
                                subheading="Updating UI & implementing additional functionality"
                                imageAlt="TODO: add alt"
                                image="emailhelper/nextSteps.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            />
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
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
