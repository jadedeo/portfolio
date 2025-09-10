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
                    <Hero project={projectData}></Hero>
                </section>

                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                heading="what we designed"
                                // subheading="a more straightforward shopping experience"
                                imageAlt="giant eagle glasses"
                                image="newGlassesAll.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Email Helper was created to{" "}
                                    <strong className="highlight">
                                        make the process of sending repetitive
                                        emails more efficient
                                    </strong>{" "}
                                    for customer support staff in the San
                                    Francisco Recreation and Parks Department’s
                                    Permits and Reservations Division.
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
                            <TextGroup heading="why we designed it">
                                <p>
                                    SFRPD fields thousands of calls and emails
                                    from residents looking for help with
                                    reservations. A significant portion of these
                                    inquiries are repetitive:{" "}
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
                                    This challenge is made harder by SFRPD’s
                                    lean staffing model. If we can help staff
                                    respond to these requests more quickly,
                                    they’ll have more time to support residents
                                    who have complex or urgent needs, or unique
                                    circumstances that truly require human
                                    expertise and judgement.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextGroup heading="impact & value">
                                <p>...</p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextGroup heading="constraints">
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-2">
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
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-bold">
                                            There could be no direct integration
                                            with third-party system(s).
                                        </h3>
                                        <p>
                                            SFRPD currently utilizes ActiveNet,
                                            a facility, registration and
                                            membership management software often
                                            used in the government space.
                                            ActiveNet is not an open system, so
                                            we can’t directly integrate or
                                            modify its backend without the
                                            provider’s involvement. The helper
                                            needed to be its own standalone
                                            solution.
                                        </p>
                                    </div>
                                    <StickyNote className="!max-w-full">
                                        <p>
                                            Using techniques like data scraping
                                            to implement more "automation"
                                            raised two major concerns:
                                        </p>
                                        <ol>
                                            <li>
                                                Doing so poses a potential
                                                security risk that could create
                                                vulnerabilities in a sensitive
                                                government environment
                                            </li>
                                            <li>
                                                These methods can violate
                                                platform policies and best
                                                practices, making it harder to
                                                get the extension approved by
                                                app and web stores and SFRPD’s
                                                own IT team
                                            </li>
                                        </ol>
                                    </StickyNote>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-10 ">
                            <TextGroup heading="workflow"></TextGroup>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
                                <TextImage
                                    subheading="Create your templates from scratch"
                                    imageAlt="TODO: add alt"
                                    image="emailhelper/typingShort.gif"
                                    addImageShadow={false}
                                    addComponentShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
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
                                subheading="Handling formatting and email draft creation"
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
                        <section className="pt-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Placing preview & inputs"
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV1.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Version 1 explored doing blah blah blah. But
                                    we found that blah di blah blah.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>
                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV2.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Version 2 explored doing blah blah blah. But
                                    we found that blah di blah blah.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="emailhelper/layoutV3.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Version 3 explored doing blah blah blah. But
                                    we found that blah di blah blah.
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
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
                            <TextGroup heading="next steps"></TextGroup>
                            <TextImage
                                subheading="Updating UI & implementing additional functionality"
                                imageAlt="TODO: add alt"
                                image="emailhelper/nextSteps.png"
                                addImageShadow={false}
                                addComponentShadow={false}
                                imagePlacement="bottom"
                            />
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
