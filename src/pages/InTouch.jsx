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
                        image="intouch/inTouchLight.png"
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
                                mat={false}
                                imagePlacement="right"
                            >
                                <p>
                                    <strong className="highlight">
                                        inTouch is a service that prompts more
                                        frequent, personalized communication to
                                        strengthen existing relationships that
                                        may experience strain due to distance
                                        and/or busy schedules.
                                    </strong>
                                </p>
                                <p>
                                    Instead of becoming yet another app to
                                    install and manage, inTouch was imagined as
                                    an integration for traditional messaging
                                    services, made to be accessed from within
                                    those users already frequent.
                                </p>
                                <div className="p-4 border-1 rounded-md">
                                    <p>
                                        Of seven concepts presented on final
                                        pitch day, inTouch placed first -
                                        garnering nearly twice the amount of
                                        investor dollars as the businesses
                                        placing second and third.
                                    </p>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* the starting point */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="the starting point"
                                imageAlt="TODO: add alt"
                                image="intouch/originalSlides.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        inTouch began with the goal of helping
                                        users stay in contact with those they
                                        were unaccustomed to contacting
                                        virtually.
                                    </strong>{" "}
                                    There was also a particular emphasis on
                                    bridging generational gaps and their
                                    resulting differences in communication
                                    styles. The service included an AI-powered
                                    component, allowing users to access and
                                    share a summary of their recent activity.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* reframe 1 */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="refocusing the problem space"
                                // subheading="Abstraction Laddering"
                                imageAlt="TODO: add alt"
                                image="intouch/abstractionLaddering.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    This starting point was solid and presented
                                    an interesting problem space, but adjacent
                                    issues were still worth exploring.
                                    Performing an abstraction laddering exercise
                                    helped us confirm the core issue we sought
                                    to address with inTouch.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextImage
                                heading="scoping the competition"
                                imageAlt="TODO: add alt"
                                image="intouch/competitorAnalysis.png"
                                mat={false}
                                imagePlacement="right"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        To get a better sense of existing
                                        solutions in the space we were
                                        targeting,
                                    </strong>{" "}
                                    we performed a competitor analysis of 9
                                    digital tools.
                                </p>
                                <p>
                                    These generally fell into one of three
                                    categories:
                                </p>
                                <ul>
                                    <li>
                                        Long-Distance Communication (
                                        <a
                                            href="https://cupla.app/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Cupla
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://www.marcopolo.me/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Marco Polo
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://simirity.com/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Simirity
                                        </a>
                                        )
                                    </li>
                                    <li>
                                        Status Tracking (
                                        <a
                                            href="https://daylio.net/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Daylio
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://apps.apple.com/us/app/mood-tracker-journal-zenly/id6503452213"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Zenly
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://www.apple.com/health/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Apple Health
                                        </a>
                                        )
                                    </li>
                                    <li>
                                        Social Networking and Similar Platforms
                                        (
                                        <a
                                            href="https://www.whatsapp.com/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            WhatsApp Messenger
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://signal.org/"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Signal
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://apps.apple.com/us/app/facebook/id284882215"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Facebook
                                        </a>
                                        /
                                        <a
                                            href="https://apps.apple.com/us/app/messenger/id454638411"
                                            className="underline cursor-pointer"
                                            target="_blank"
                                        >
                                            Messenger
                                        </a>
                                        )
                                    </li>
                                </ul>
                            </TextImage>

                            <section className="mx-auto max-w-screen-lg columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Services overwhelmingly follow the
                                            same app-based pattern.
                                        </strong>
                                    </p>
                                    <p>
                                        Users have to manually update their
                                        profiles or seek sharing functions.
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Freemium is the standard — for
                                            better or worse.
                                        </strong>
                                    </p>
                                    <p>
                                        Services that aren't entirely free tend
                                        to include a free tier, with additional
                                        features/access hidden behind a paywall.
                                        Users wonder if premium subscriptions
                                        except them from data collection.
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Common features include:
                                        </strong>
                                    </p>
                                    <ul>
                                        <li>Mood tracking</li>
                                        <li className="!mt-0">
                                            Shared calendars
                                        </li>
                                        <li className="!mt-0">
                                            Media sharing (photos, videos,
                                            audio)
                                        </li>
                                        <li className="!mt-0">Note-taking</li>
                                    </ul>
                                </StickyNote>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] flex flex-col gap-10">
                            <TextGroup heading="interviewing long-distance folks">
                                <p>
                                    Before contemplating the features of our
                                    service, we set out to learn more about our
                                    prospective users' experience with
                                    long-distance communication and the tools
                                    currently bridging the gap.
                                </p>
                                <p>
                                    <strong className="highlight">
                                        We spoke to 17 individuals of varying
                                        demographics
                                    </strong>
                                    , including college students, parents, and
                                    busy professionals — some of which regularly
                                    communicated with loved ones across time
                                    zones. As we listened to the challenges they
                                    experience, we gained clarity on what
                                    inTouch would need to deliver:
                                </p>
                            </TextGroup>
                            <section className="mx-auto max-w-screen-lg columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Another communication app is largely
                                            unwanted.
                                        </strong>
                                    </p>
                                    <p>
                                        User already have so many downloaded and
                                        are hesitant about another — inTouch
                                        would need significantly distinguish
                                        itself.
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Prompting is helpful, but users
                                            don't want to be pestered with
                                            notifications.
                                        </strong>
                                    </p>
                                    <p>
                                        inTouch would need to toe the line
                                        between too few updates and too many.
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Convenience could not come at the
                                            expense of privacy .
                                        </strong>
                                    </p>
                                    <p>
                                        There was little to no interest in a
                                        summarizing AI feature — participants
                                        found the concept invasive and
                                        disingenuous.
                                    </p>
                                </StickyNote>
                            </section>

                            <TextGroup>
                                <p>
                                    As expected, we also received confirmation
                                    that{" "}
                                    <strong className="highlight">
                                        for many with long-distance loved ones,
                                        communication is not an issue.
                                    </strong>{" "}
                                    Though scheduling time to chat could be a
                                    challenge, they are satisfied with their
                                    current frequencies and methods of
                                    communication. These individuals will not be
                                    inTouch's target users.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* stakeholder map */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="further understanding + empathizing with our stakeholders"
                                imageAlt="TODO: add alt"
                                image="intouch/stakeholderMap.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    We wanted inTouch to integrate as seamlessly
                                    as possible with our users' packed schedules
                                    and existing activities,{" "}
                                    <strong className="highlight">
                                        so mapping our stakeholders and their
                                        experiences helped us imagine the
                                        context in which our service would fit.
                                    </strong>
                                </p>
                                <p>
                                    As our most accessible user group, we looked
                                    deepest into the day-to-day patterns of
                                    college students.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* experience diagram */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextImage
                                // heading="experience diagramming"
                                imageAlt="TODO: add alt"
                                image="intouch/experienceDiagram.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            />
                        </section>
                    </FadeSection>

                    {/* jtbd */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextGroup heading="defining jobs to be done + value flow">
                                <div className="mx-auto max-w-screen-lg flex flex-col gap-10 mt-3">
                                    {/* TODO: make into component */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/students.png"
                                            className="max-w-[200px] sm:w-auto "
                                        />
                                        <TextGroup subheading="College Student">
                                            <ul>
                                                <li>
                                                    As a college student, I want
                                                    to{" "}
                                                    <strong className="highlight">
                                                        be prompted to reach out
                                                        to people at home
                                                    </strong>
                                                    , so that I can remember to
                                                    update my parents on daily
                                                    life events.
                                                </li>
                                                <li>
                                                    As a college student, I want
                                                    to be able to{" "}
                                                    <strong className="highlight">
                                                        see updates on family
                                                        without having to reach
                                                        out first or ask
                                                        explicitly, so I can
                                                        stay updated when I am
                                                        busy
                                                    </strong>{" "}
                                                    with college life.
                                                </li>
                                                <li>
                                                    As a college student, I want
                                                    to be able to{" "}
                                                    <strong className="highlight">
                                                        send quick updates
                                                    </strong>{" "}
                                                    to my family, so that I
                                                    don’t have to carve out
                                                    hours to talk to them if it
                                                    has been a long time.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>

                                    <hr className="" />

                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/busyProfessionals.png"
                                            className="max-w-[200px] sm:w-auto "
                                        />
                                        <TextGroup subheading="Busy Professional">
                                            <ul>
                                                <li>
                                                    As a busy professional, I
                                                    want to be{" "}
                                                    <strong className="highlight">
                                                        prompted to share
                                                        small/meaningful moments
                                                        in my life with my
                                                        family,
                                                    </strong>{" "}
                                                    so that my family can feel
                                                    up-to-date even as I become
                                                    too busy to remember on my
                                                    own.
                                                </li>
                                                <li>
                                                    As a busy professional, I
                                                    want to send quick updates
                                                    without starting a full
                                                    conversation, so that I can{" "}
                                                    <strong className="highlight">
                                                        stay connected without
                                                        disrupting my schedule.
                                                    </strong>
                                                </li>
                                                <li>
                                                    As a busy professional, I
                                                    want to respond to messages
                                                    in my own time without
                                                    feeling guilty or awkward,
                                                    so that I{" "}
                                                    <strong className="highlight">
                                                        maintain emotional
                                                        connection without the
                                                        additional stress of
                                                        needing to respond fast.
                                                    </strong>
                                                </li>
                                                <li>
                                                    As a busy professional,I
                                                    want to{" "}
                                                    <strong className="highlight">
                                                        know the best windows of
                                                        time to connect across
                                                        time zones,
                                                    </strong>{" "}
                                                    so that I can make the most
                                                    of limited opportunities.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>

                                    <hr className="" />

                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-5 justify-items-center">
                                        <img
                                            src="intouch/timezones.png"
                                            className="max-w-[200px] sm:w-auto "
                                        />
                                        <TextGroup subheading="Family in Different Time Zones">
                                            <ul>
                                                <li>
                                                    As someone with family in a
                                                    different timezone, I want
                                                    to{" "}
                                                    <strong className="highlight">
                                                        schedule messages for
                                                        important moments
                                                    </strong>{" "}
                                                    (like birthdays or special
                                                    occasions), so that they
                                                    feel remembered and included
                                                    even when I can’t reach out
                                                    in real time.
                                                </li>
                                                <li>
                                                    As someone in a different
                                                    timezone from loved ones, I
                                                    <strong className="highlight">
                                                        want to know what they
                                                        are currently up to or
                                                        busy with,
                                                    </strong>{" "}
                                                    so that I can continue to
                                                    feel connected in their
                                                    lives.
                                                </li>
                                                <li>
                                                    As someone in a different
                                                    timezone, I{" "}
                                                    <strong className="highlight">
                                                        want updates to be as
                                                        personal/face to face as
                                                        possible,
                                                    </strong>{" "}
                                                    so that it feels like I am
                                                    interacting with the person.
                                                </li>
                                                <li>
                                                    As someone in a different
                                                    timezone, I want to be able
                                                    to{" "}
                                                    <strong className="highlight">
                                                        update my loved one as I
                                                        am busy with or what I
                                                        am up to, so that they
                                                        are not worried
                                                    </strong>{" "}
                                                    about why I am not able to
                                                    message them.
                                                </li>
                                            </ul>
                                        </TextGroup>
                                    </div>

                                    {/* <hr className="" /> */}
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="intouch/valueFlow.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
                            />
                        </section>
                    </FadeSection>

                    {/* testing mvp */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="testing desireability with an mvp"
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
                                        testing.
                                    </strong>
                                </p>
                                <p>
                                    Over the course of a few days, we would
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
                            <TextGroup>
                                <p>
                                    <strong className="highlight">
                                        Our testing produced both validating
                                        feedback and potential concerns.
                                    </strong>
                                </p>
                                <p>
                                    Overall, testers were pleased to receive the
                                    updates at all and appreciate the variety in
                                    content shared. They liked the use of
                                    updates to share “little things”, as well as
                                    their ability to serve as conversation
                                    starters. Testers expressed that they can
                                    forget to reach out to loved ones when they
                                    get busy, so receiving nudges had a clear
                                    benefit.
                                </p>
                                <p>
                                    There were concerns about the potential
                                    annoyance of constant prompting, as well as
                                    conflicting opinions on the amount of
                                    written content required to create a
                                    meaningful connection. Short-form content
                                    was quick & easy, but it ran the risk of
                                    being too superficial.
                                </p>
                            </TextGroup>
                            <section className="mx-auto max-w-screen-lg grid grid-cols-3 mt-10 gap-10">
                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            <strong>
                                                It was nice to see day-to-day
                                                things you were up to
                                            </strong>{" "}
                                            rather than just the big stuff!
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-sm text-right">
                                        Test Participant 3/9
                                    </p>
                                </ChatBubble>

                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            It’s sometimes hard to have a
                                            conversation starter so{" "}
                                            <strong>
                                                updates like this make it a
                                                little easier to reach out to
                                                people.
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

                    {/* user journey */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="clarifying the user journey"
                                imageAlt="TODO: add alt"
                                image="intouch/journeyMap.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
                            />
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
                                heading="iOS interface mockups"
                                imageAlt="TODO: add alt"
                                image="intouch/screensAnnotated.png"
                                imagePlacement="bottom"
                                addImageShadow={false}
                                mat={false}
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

export default InTouch;
