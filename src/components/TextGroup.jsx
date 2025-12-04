import { small } from "motion/react-client";

const TextGroup = ({
    heading,
    smallHeading = null,
    subheading = null,
    children,
    numbered = null,
    className,
}) => {
    return (
        <section className={`textgroup-wrapper min-w-full ${className}`}>
            <div
                className={` textgroup-component max-w-screen-lg mx-auto flex flex-col ${
                    subheading || children ? "gap-3" : ""
                } `}
            >
                <div className={`${numbered ? "flex gap-5" : ""}`}>
                    {numbered && (
                        <h2 className="font-display text-5xl">{numbered}</h2>
                    )}
                    {smallHeading && (
                        <h6 className="text-gray-400 uppercase mb-2 font-light">
                            {smallHeading}
                        </h6>
                    )}
                    {heading && (
                        <h2 className={`font-display mb-6`}>{heading}</h2>
                    )}
                    <div className={`flex flex-col gap-2`}>
                        {subheading && (
                            <h3 className="text-xl font-bold">{subheading}</h3>
                        )}
                        <div className="flex flex-col gap-4">{children}</div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </section>
    );
};

export default TextGroup;
