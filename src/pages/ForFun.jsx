import Header from "../components/Header";
import FadeSection from "../components/FadeSection";

import useScrollDirection from "../hooks/useScrollDirection";

const ForFun = () => {
    const scrollDir = useScrollDirection();

    return (
        <div id="forfun-page">
            <Header />
            <main className="min-h-[100dvh] pt-33 pb-10 px-[5%] flex flex-col justify-center">
                <FadeSection scrollDir={scrollDir}>
                    <section className="w-full max-w-screen-lg mx-auto ">
                        <img
                            className="w-full mb-5"
                            src="doodles/BHEJacket.png"
                        />
                    </section>
                </FadeSection>
                <FadeSection scrollDir={scrollDir}>
                    <section className="pb-[50px] w-full max-w-screen-lg mx-auto ">
                        <div className="list columns-1 sm:columns-2 md:columns-[300px]">
                            <img
                                className="w-full mb-5"
                                src="doodles/daughtersOfIzdihar.JPG"
                            />

                            <img
                                className="w-full mb-5"
                                src="doodles/LAFFCover.png"
                            />

                            <img
                                className="w-full mb-5"
                                src="doodles/maliyaDark.JPG"
                            />
                            <img
                                className="w-full mb-5"
                                src="doodles/damesFantasyWarriors.PNG"
                            />
                            <img
                                className="w-full mb-5"
                                src="doodles/classics3.png"
                            />

                            <img
                                className="w-full mb-5"
                                src="doodles/hereToSlay.jpeg"
                            />
                            <img
                                className="w-full mb-5"
                                src="doodles/ayaCropped.JPG"
                            />

                            <img
                                className="w-full mb-5"
                                src="doodles/tatreez.JPG"
                            />
                        </div>
                    </section>
                </FadeSection>
            </main>
        </div>
    );
};

export default ForFun;
