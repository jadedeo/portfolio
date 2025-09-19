import { motion } from "motion/react";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";
import TextGroup from "../components/TextGroup";
import Chip from "../components/Chip";

import useScrollDirection from "../hooks/useScrollDirection";

const About = () => {
    const scrollDir = useScrollDirection();

    return (
        <div id="about-page">
            <Header />
            <main className="min-h-[100dvh] py-10 px-[5%] flex flex-col justify-center">
                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] ">
                    <motion.section
                        className="pt-18 w-full max-w-screen-lg mx-auto flex flex-col gap-2"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <TextImage
                            heading="hello!"
                            image="general/aboutPhoto.png"
                            mat={false}
                            addImageShadow={false}
                        >
                            <p>
                                I'm Jade — a NYC-based designer, developer &
                                illustrator.{" "}
                            </p>
                            <p>
                                After graduating in 2022 from St. John's
                                University with a degree in Computer Science, I
                                was immensely fortunate to find myself at
                                Penguin Random House in what can only be
                                described as a dream come true for a lifelong
                                reader. It was during my time at PRH that I
                                learned what it was like to work on a complete
                                product team and gained exposure to the realm of
                                UX and product design.
                            </p>
                            <p>
                                For an arts-oriented student whose interests
                                were consistently underrepresented in computer
                                science, the fall into HCI has been a natural
                                one.
                            </p>
                            <p>
                                Freshly out of Carnegie Mellon's MHCI program,
                                I'm eager to see where my journey takes me next.
                            </p>
                            <div className="flex gap-1">
                                <Chip
                                    label="jadedeo@gmail.com"
                                    type="outlined"
                                    link="mailto:jadedeo@gmail.com"
                                />
                                <Chip
                                    label="linkedin"
                                    type="outlined"
                                    link="https://www.linkedin.com/in/jadedeo/"
                                />
                            </div>
                        </TextImage>
                    </motion.section>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 items-center">
                                <StickyNote>
                                    It takes forever for me to fill a
                                    sketchbook, but I love treating them like
                                    little time capsules — each contains a
                                    different version of Jade ehehe
                                </StickyNote>
                                <img src="general/sketchbook.png" />

                                <img src="general/tablet.png" />
                                <StickyNote>
                                    Apparently I'm crazy for preferring a
                                    screenless tablet over an iPad/Procreate in
                                    the big 25, but it's me and my 2015 Wacom
                                    Intuos against the world 🫶🏽
                                </StickyNote>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <TextGroup subheading="Design Ethos">
                                    <p>
                                        I firmly believe designers, engineers,
                                        and other technologists have a
                                        responsibility to represent truly
                                        human-first ideals in their work.
                                    </p>
                                    <p>
                                        To claim human-centeredness without
                                        advocating for the responsible
                                        application of tech in our highly
                                        digital society would be insincere.
                                    </p>
                                </TextGroup>
                                <TextGroup subheading="Guiding Principles">
                                    <div className="flex gap-1 flex-wrap mt-1">
                                        <Chip
                                            label="🌿 Championing sustainability"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🫶🏽 Non-exploitativeness, always"
                                            type="outlined"
                                        />

                                        <Chip
                                            label="⚖️ Accepting accountability"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="👂🏽 Centering the impacted"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="✨ balancing function + beauty"
                                            type="outlined"
                                        />
                                    </div>
                                </TextGroup>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 items-center">
                                <img src="general/hibiscus.png" />
                                <StickyNote>
                                    I identify as Indo-Caribbean American — my
                                    family is from the West Indies (Guyana 🇬🇾
                                    and Trinidad and Tobago 🇹🇹)
                                </StickyNote>

                                <img src="general/snail.png" />
                                <StickyNote>
                                    I'll happily do my civic duty of hunting
                                    spotted lantern flies, but snails, slugs,
                                    caterpillars and similarly squishy things
                                    are a hard pass
                                </StickyNote>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className=" w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <TextGroup subheading="When I'm not working...">
                                    <p>
                                        I fear reading and drawing are both
                                        painfully predicatable, as is loving a
                                        good yap sesh with friends.
                                    </p>
                                    <p>
                                        Otherwise, I need to be better about
                                        finding time for the various DIYs I've
                                        been collecting — an insanely ambitious
                                        embroidery project, a jewelry box
                                        painted in the style of Mughal
                                        miniatures, a Rajasthani-esque
                                        mirrorwork bag, etc.
                                    </p>
                                    <p>
                                        I would also like to practice
                                        henna/mehndi!
                                    </p>
                                </TextGroup>
                                <TextGroup subheading="Some Faves">
                                    <div className="flex gap-1 flex-wrap mt-1">
                                        <Chip
                                            label="🎬 Sinbad (2003)"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🎬 The Prince of Egypt (1998)"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="📚 The Locked Tomb series"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🥨 salty/savory snacks"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🍬 sour candy"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🎶 Soca + Chutney Soca"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🎶 Dancehall"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🎶 Indie Folk + Rock"
                                            type="outlined"
                                        />
                                        <Chip
                                            label="🔎 Research rabbit holes"
                                            type="outlined"
                                        />
                                    </div>
                                </TextGroup>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 items-center">
                                <img src="general/jewelry.png" />
                                <StickyNote>
                                    I have a weakness for shiny things,
                                    ~especially~ South Asian jewelry ✨
                                </StickyNote>

                                <StickyNote>
                                    "Coraline" scarred me in 2009 (literally
                                    could not sleep for weeks) but I've since
                                    recovered 💪🏽 and come to appreciate the film
                                    for the artistry it is — still not a horror
                                    girly, though
                                </StickyNote>
                                <img src="general/buttons.png" />
                            </div>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </div>
    );
};

export default About;
