import Header from "../components/Header";
import FadeSection from "../components/FadeSection";
import TextGroup from "../components/TextGroup";
import Chip from "../components/Chip";

import useScrollDirection from "../hooks/useScrollDirection";

const ForFun = () => {
    const scrollDir = useScrollDirection();

    return (
        <div id="forfun-page">
            <Header />
            <main className="min-h-[100dvh] pt-25 pb-10 flex flex-col justify-center">
                <div className="flex flex-col">
                    {/* illustration intro */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="">
                            <TextGroup heading="illustration">
                                <p>
                                    I have been fortunate to contribute to a
                                    number of media- and publishing-related
                                    commercial projects (covers, dustjackets,
                                    tip-in pages, endpapers) for which clients
                                    have included{" "}
                                    <a
                                        className="underline"
                                        href="https://www.penguin.co.uk/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Penguin Random House UK
                                    </a>
                                    ,{" "}
                                    <a
                                        className="underline"
                                        href="https://knightsof.media/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Knights Of Media
                                    </a>
                                    ,{" "}
                                    <a
                                        className="underline"
                                        href="https://www.bonnierbooks.co.uk/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Bonnier Books UK
                                    </a>
                                    ,{" "}
                                    <a
                                        className="underline"
                                        href="https://www.harpercollins.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        HarperCollins Publishers
                                    </a>
                                    ,{" "}
                                    <a
                                        className="underline"
                                        href="https://www.riotgames.com/en"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Riot Games
                                    </a>
                                    , and{" "}
                                    <a
                                        className="underline"
                                        href="https://illumicrate.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Illumicrate
                                    </a>
                                    .
                                </p>
                                <p>
                                    I often incorporate cultural details into my
                                    works, and enjoy performing the research to
                                    do so with authenticity and utmost respect.
                                    I gravitate towards fantastical themes,
                                    serene environments, and fancy ladies.
                                </p>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* doodles */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/zoyalai_table.JPG"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/tatreez.JPG"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/maliyaDark.JPG"
                                />

                                <img
                                    className="w-full mb-5 col-span-2 md:col-span-3"
                                    src="forFun/doodles/BHEJacket.png"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/daughtersOfIzdihar.JPG"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/LAFFCover.png"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/goya.jpg"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/damesFantasyWarriors.PNG"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/classics3.png"
                                />

                                <img
                                    className="w-full mb-5"
                                    src="forFun/doodles/hereToSlay.jpeg"
                                />
                            </div>
                        </section>
                    </FadeSection>

                    {/* muse */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pt-[50px] w-full max-w-screen-lg mx-auto">
                            <TextGroup
                                heading="miscellaneous visual design"
                                subheading="SJU Muse"
                            >
                                <p>
                                    Muse is St. John's University's student art
                                    and design organization, fostering a
                                    community for creatives and hosting variety
                                    of other multidisciplinary hands-on
                                    workshops. The club's Pop-Up Shop — first
                                    launched in 2022 — consistently draws dozens
                                    of vendors from throughout the student body
                                    and is among the most anticipated events on
                                    campus each year.
                                </p>
                                <p>
                                    Initial branding developed by{" "}
                                    <a
                                        className="underline"
                                        href="https://www.millenacecilia.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Millena Cecilia
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        className="underline"
                                        href="https://www.winniesworking.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Winnie Lam
                                    </a>
                                    .
                                </p>

                                <div className="grid grid-cols-4 gap-5">
                                    {/* new row */}
                                    <img
                                        className="w-full col-span-2"
                                        src="forFun/muse/tatreez.png"
                                    />
                                    <img
                                        className="w-full col-span-2"
                                        src="forFun/muse/bookmarks.png"
                                    />

                                    {/* new row */}
                                    <div className="bg-gray-100 place-content-center">
                                        <img
                                            className="w-full"
                                            src="forFun/muse/bookbinding.png"
                                        />
                                    </div>
                                    <div className="bg-gray-100 place-content-center">
                                        <img
                                            className="w-full"
                                            src="forFun/muse/activitiesFair.png"
                                        />
                                    </div>

                                    <img
                                        className="w-full col-span-2"
                                        src="forFun/muse/papercraft.png"
                                    />

                                    {/* new row */}
                                    {/* <img
                                        className="w-full col-span-4"
                                        src="forFun/muse/afa.png"
                                    /> */}

                                    {/* new row */}
                                    <img
                                        className="w-full col-span-3"
                                        src="forFun/muse/popUp.png"
                                    />
                                    {/* <div className="bg-gray-100 place-content-center">
                                        <img
                                            className="w-full"
                                            src="forFun/muse/activitiesFair.png"
                                        />
                                    </div> */}
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* acm */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto">
                            <TextGroup subheading="SJU ACM Student Chapter">
                                <p>
                                    As St. John's University's premier
                                    organization for Computer Science and Cyber
                                    Security, SJU ACM's focus is on providing
                                    students with hands-on experience, industry
                                    connections, and a supportive community of
                                    tech enthusiasts. The org aim to enhance the
                                    experience of STJ tech students by providing
                                    a platform to learn, share, and collaborate
                                    through labs and presentations.
                                </p>

                                <div className="grid grid-cols-4 gap-5">
                                    {/* new row */}
                                    <img
                                        className="w-full"
                                        src="forFun/acm/alumni.png"
                                    />
                                    <img
                                        className="w-full"
                                        src="forFun/acm/dos.png"
                                    />
                                    <img
                                        className="w-full"
                                        src="forFun/acm/rats.png"
                                    />
                                    <img
                                        className="w-full"
                                        src="forFun/acm/nfts.png"
                                    />

                                    {/* new row */}
                                    <img
                                        className="w-full"
                                        src="forFun/acm/analytics.png"
                                    />
                                    <img
                                        className="w-full"
                                        src="forFun/acm/gameDev.png"
                                    />
                                    <img
                                        className="w-full"
                                        src="forFun/acm/research.png"
                                    />
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>

                    {/* bbbd */}
                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto">
                            <TextGroup subheading="Blk + Brwn Book Designers">
                                <p>
                                    BBBD is a non-profit dedicated to providing
                                    underrepresented artists and designers in
                                    the book publishing industry with resources
                                    and professional development opportunities.
                                    In addition to educational materials, the
                                    organization hosts recreational events for
                                    creating and connecting, both independently
                                    and in collaboration with others.
                                </p>

                                <div className="grid grid-cols-4 gap-5">
                                    {/* new row */}
                                    <img
                                        className="w-full col-span-2"
                                        src="forFun/bbbd/nypl.png"
                                    />
                                    {/* <img
                                    className="w-full"
                                    src="forFun/bbbd/hike.png"
                                /> */}
                                    <img
                                        className="w-full col-span-2"
                                        src="forFun/bbbd/grolier.png"
                                    />
                                </div>
                            </TextGroup>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </div>
    );
};

export default ForFun;
