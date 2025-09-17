import Header from "../components/Header";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";

import useScrollDirection from "../hooks/useScrollDirection";

const About = () => {
    const scrollDir = useScrollDirection();

    return (
        <div id="about-page">
            <Header />
            <main className="min-h-[100dvh] py-10 px-[5%] flex flex-col justify-center">
                {/* <section className="my-5">
                    <h1 className="font-display">under construction.</h1>
                    <p>please check back soon!</p>
                </section> */}

                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
                    {/* <FadeSection scrollDir={scrollDir}> */}
                    <section className="pt-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                        {/* TODO: get image without background */}
                        <TextImage
                            heading="hey!"
                            image="general/jadePhoto.JPEG"
                            mat={false}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In nibh tortor, lobortis vitae
                                commodo a, tincidunt vel ipsum. Aliquam erat
                                volutpat. Donec vitae blandit mauris.{" "}
                            </p>
                            <p>
                                Aenean tellus ex, malesuada quis eros sodales,
                                vehicula laoreet felis. Donec egestas magna
                                magna, nec tempor felis vulputate eu. Sed
                                tincidunt nisl quis ligula mollis, mollis
                                hendrerit lectus volutpat. Donec elementum
                                placerat mauris in sollicitudin. Proin luctus,
                                metus facilisis eleifend facilisis, sem dui
                                fringilla lorem, sed iaculis eros enim vel nibh.
                            </p>
                            <p>
                                Proin luctus, metus facilisis eleifend
                                facilisis, sem dui fringilla lorem, sed iaculis
                                eros enim vel nibh.
                            </p>
                        </TextImage>
                    </section>
                    {/* </FadeSection> */}

                    <FadeSection scrollDir={scrollDir}>
                        <section className="pb-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
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

                                {/* <img src="general/libby.png" /> */}
                            </div>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </div>
    );
};

export default About;
