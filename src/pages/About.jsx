import Header from "../components/Header";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";

const About = () => {
    const scrollDir = useScrollDirection();

    return (
        <div id="resume-page">
            <Header />
            <main className="min-h-[100dvh] py-10 px-[5%] flex flex-col justify-center">
                {/* <section className="my-5">
                    <h1 className="font-display">under construction.</h1>
                    <p>please check back soon!</p>
                </section> */}

                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            {/* TODO: get image without background */}
                            <TextImage
                                heading="hey!"
                                image="images/general/jadePhoto.JPEG"
                                mat={false}
                            >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In nibh tortor, lobortis
                                    vitae commodo a, tincidunt vel ipsum.
                                    Aliquam erat volutpat. Donec vitae blandit
                                    mauris.{" "}
                                </p>
                                <p>
                                    Aenean tellus ex, malesuada quis eros
                                    sodales, vehicula laoreet felis. Donec
                                    egestas magna magna, nec tempor felis
                                    vulputate eu. Sed tincidunt nisl quis ligula
                                    mollis, mollis hendrerit lectus volutpat.
                                    Donec elementum placerat mauris in
                                    sollicitudin. Proin luctus, metus facilisis
                                    eleifend facilisis, sem dui fringilla lorem,
                                    sed iaculis eros enim vel nibh.
                                </p>
                                <p>
                                    Proin luctus, metus facilisis eleifend
                                    facilisis, sem dui fringilla lorem, sed
                                    iaculis eros enim vel nibh.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <div className="grid grid-cols-4">
                                <img src="images/general/hibiscus.png" />
                                <img src="images/general/sketchbook.png" />
                                <img src="images/general/tablet.png" />
                                <img src="images/general/snail.png" />

                                <img src="images/general/jewelry.png" />
                                <img src="images/general/libby.png" />

                                <img src="images/general/buttons.png" />
                            </div>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </div>
    );
};

export default About;
