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

const Libby = () => {
    const projectData = projectList.find(
        (project) => project.title === "External TBR Integration for Libby",
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
                        image="libby/libbyProjectLight.png"
                    />
                </section>

                <div className="flex flex-col">
                    {/* overview */}
                    <FadeSection scrollDir={scrollDir} isFilled>
                        <section className="py-[50px] ">
                            <TextGroup
                                smallHeading="overview"
                                heading="there is no way of interfacing between book trackers & libby, the popular library app — this integration proposes a fix"
                            >
                                <p>
                                    The Libby app, developed by Overdrive,
                                    allows users to borrow ebooks, audiobooks
                                    and more from their local libraries.
                                </p>
                                <p>
                                    Many avid readers also frequent book
                                    trackers (such as Goodreads and Storygraph),
                                    where they maintain personal collections.
                                    The use of a TBR (to-be-read) list to record
                                    books one would like to read is very common.
                                </p>

                                <div className="p-4 border-1 rounded-md bg-white">
                                    <p>
                                        This project explores the addition of a
                                        bridge between Libby and trackers,
                                        making it easier for readers to search
                                        their libraries for available items on
                                        their TBR.
                                    </p>
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/*  problem */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup
                                smallHeading="problem"
                                heading="the current process of searching libby for one's tbr items is repetitive & tedious"
                            />
                            <TextImage
                                imageAlt="TODO: add alt"
                                image="libby/currentFlow.gif"
                                mat={false}
                                imagePlacement="right"
                                addImageShadow={false}
                            >
                                <div className="grid grid-cols-1 gap-y-5 mt-5">
                                    <TextImage
                                        subheading="Consult a tracker"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="01"
                                    >
                                        <p>
                                            Readers need to refer back to their
                                            book tracker to identify a title
                                            they'd like to search for
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Search on Libby"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="02"
                                    >
                                        <p>
                                            Readers search for the selected
                                            title on Libby; they may or may not
                                            find a match
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Manually update a custom TBR tag"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="03"
                                    >
                                        <p>
                                            If a match is found, readers must
                                            save the title to a Libby tag of
                                            their own making (in the demo, the
                                            name of this custom tag is "TBR 📚")
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Repeat for each TBR title"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="04"
                                    >
                                        <p>
                                            Each item must be individually
                                            queried, instead of the entire list
                                            being searched for at once
                                        </p>
                                    </TextImage>
                                </div>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* nav problem */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextGroup
                                heading="while integrating external trackers was
                                        the primary goal, 
                                        reorganization was required for effective placement"
                            >
                                <p>
                                    <strong className="highlight">
                                        The current organization of the app is
                                        non-intutitve and doesn't prioritize
                                        content that users need to access most
                                        frequently.
                                    </strong>{" "}
                                    Abiguity around not only what navigation
                                    items represent, but how content is
                                    separated betwen their pages is a point of
                                    frustration of Libby users:
                                </p>
                            </TextGroup>

                            <section className="mx-auto max-w-screen-lg grid grid-cols-3 mt-10 gap-10">
                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            <strong>
                                                It is extremely difficult to
                                                navigate — very non-intuitive.
                                            </strong>{" "}
                                            It looks very polished, but is just
                                            a mess from a usability standpoint.
                                        </p>
                                    </div>
                                    <a
                                        href="https://www.reddit.com/r/userexperience/comments/10wdh60/comment/j7obprl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-gray-400 text-sm text-right"
                                    >
                                        @cykopidgeon
                                    </a>
                                </ChatBubble>

                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            <strong>
                                                They have tried to implement
                                                their own design language
                                                instead of following anything
                                                straightforward.
                                            </strong>{" "}
                                        </p>
                                        <p>The icons make no sense ....</p>
                                    </div>
                                    <a
                                        href="https://www.reddit.com/r/userexperience/comments/10wdh60/comment/j7n3btd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-gray-400 text-sm text-right"
                                    >
                                        @chimbori
                                    </a>
                                </ChatBubble>

                                <ChatBubble>
                                    <div className="flex flex-col gap-3">
                                        <p>
                                            <strong>
                                                100% it's confusing.
                                            </strong>
                                        </p>
                                        <p>
                                            I love it but it's not very
                                            intuitive.
                                        </p>
                                    </div>
                                    <a
                                        href="https://www.reddit.com/r/userexperience/comments/10wdh60/comment/j7mqddl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-gray-400 text-sm text-right"
                                    >
                                        @tablecontrol
                                    </a>
                                </ChatBubble>
                            </section>
                        </section>
                    </FadeSection>

                    {/* nav changes */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                smallHeading="solution"
                                heading="organizational concerns could be alleviated by 2 key changes"
                                imageAlt="TODO: add alt"
                                image="libby/navigation.png"
                                mat={false}
                                imagePlacement="right"
                                addImageShadow={false}
                            >
                                <ol>
                                    <li>
                                        <strong className="highlight">
                                            Converting the central unnamed menu
                                            item into an account management
                                            page;
                                        </strong>{" "}
                                        this now becomes the last menu item
                                    </li>
                                    <li>
                                        <strong className="highlight">
                                            Combining search and browsing,
                                        </strong>{" "}
                                        whereas they were previously separated
                                        into 2 menu items (represented by the
                                        magnifying glass and library icons)
                                    </li>
                                </ol>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* settings */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="creating a designated account page eliminates navigation-related confusion & provides a place for our new feature"
                                imageAlt="TODO: add alt"
                                image="libby/settings.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        Instead of placing card/library
                                        management and settings on the original,
                                        unnamed central page, these are moved to
                                        the designated Account page.
                                    </strong>{" "}
                                    From this consolidated point,{" "}
                                    <strong className="highlight">
                                        readers can access the "Connect TBR"
                                        settings item,
                                    </strong>{" "}
                                    kicking off the external app integration
                                    flow.
                                </p>
                                <p>
                                    These frames also include minor UI updates
                                    for better consistency across the app.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* connecting tbr */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px">
                            <TextImage
                                heading="importing a user's tbr is a straightforward, 3-step process"
                                imageAlt="TODO: add alt"
                                image="libby/connection.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <div className="mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                                    <TextImage
                                        subheading="Enter user information"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="01"
                                    >
                                        <p>
                                            The user selects their preferred
                                            platform and enters their account
                                            name to begin the pairing process.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Receive confirmation"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="02"
                                    >
                                        <p>
                                            A successful pairing results in a
                                            confirmation message. See below for
                                            the error state used in case of
                                            failure.
                                        </p>
                                    </TextImage>

                                    <TextImage
                                        subheading="Edit shelf if necessary"
                                        mat={false}
                                        imagePlacement="bottom"
                                        numbered="03"
                                    >
                                        <p>
                                            Both Goodreads and Storygraph
                                            provide default shelves that
                                            function as TBRs. These are selected
                                            by default, but the user is free to
                                            choose another if desired.
                                        </p>
                                    </TextImage>
                                </div>
                            </TextImage>
                            <TextImage
                                // heading="connecting tbr"
                                imageAlt="TODO: add alt"
                                image="libby/emptyErrorStates.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            />
                        </section>
                    </FadeSection>

                    {/* searching & browsing (old) */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                heading="combining searching & browsing reinforces a clear distinction between pages & better supports exploration"
                                subheading="Current Organization"
                                imageAlt="TODO: add alt"
                                image="libby/oldSearchBrowse.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        In addition to needlessly separating
                                        search and browsing functionality across
                                        two deparate pages
                                    </strong>{" "}
                                    (marked by the magnifying glass and library
                                    icons),{" "}
                                    <strong className="highlight">
                                        the app also unnecessarily specifies a
                                        user's "current" library.
                                    </strong>{" "}
                                    The Library page is the only part of the app
                                    where this has any effect; changing their
                                    current library allows users to browse
                                    another library's collections.
                                </p>

                                <p>
                                    <strong className="highlight">
                                        This delineation furthermore does not
                                        place intentionally curated collections
                                        in a location that maximizes their
                                        discovery.
                                    </strong>{" "}
                                    Those that exclusively use search to find
                                    their next read are unlikely to visit a
                                    distinct "Library" page. Collections are
                                    also listed in an endless scroll, which is
                                    generally inadvisable.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* new search/browse */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px]">
                            <TextImage
                                subheading="Revised Organization"
                                imageAlt="TODO: add alt"
                                image="libby/newSearchBrowse.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        The new design combines searching and
                                        browsing functionality into one page
                                        (marked by the magnifying glass icon).
                                    </strong>
                                </p>
                                <p>
                                    Filtering by your designated TBR shelf is
                                    now available alongside other options on the
                                    search page and the idea of having a
                                    "current library" has also been eliminated.
                                    This reorganization also keeps
                                    library-specific collections within sight.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* results */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px]">
                            <TextImage
                                heading="results from a tbr search maintain existing patterns"
                                imageAlt="TODO: add alt"
                                image="libby/tbrResults.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    The results produced by a search for TBR
                                    items follows are showcased in a manner
                                    consistent with other queries. From here,
                                    readers may immediately check-out, place on
                                    hold, or further tag items.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    {/* shelf */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px]">
                            <TextImage
                                smallHeading="just for funzies"
                                heading="the shelf is further streamlined by limiting clutter"
                                imageAlt="TODO: add alt"
                                image="libby/shelf.png"
                                mat={false}
                                imagePlacement="bottom"
                                addImageShadow={false}
                            >
                                <p>
                                    <strong className="highlight">
                                        A large portion of the original Shelf
                                        page was occupied by options to view a
                                        user's loans, holds, timeline and
                                        notices.
                                    </strong>
                                </p>
                                <p>
                                    In the updated design, "Loans" is removed
                                    because of its redundancy. The page already
                                    provides a listing of books currently
                                    checked out by the user. "Noticies" is also
                                    removed. Notifications about held items that
                                    have become available can be included with
                                    "Holds", with a star used to singal recent
                                    changes.
                                </p>
                                <p>
                                    Items are displayed top to bottom, from most
                                    recently read to least. A book may also be
                                    pushed to the top of the list if its loan is
                                    expiring soon and requires action.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default Libby;
