import React from "react";

const ChatBubble = ({
    direction = "in",
    backgroundColor = "#F3F4F6",
    textColor = "black",
    children,
}) => {
    const isLeft = direction === "in";

    const arrowSvg = isLeft ? (
        <svg
            className="absolute -left-[6px] bottom-0"
            width="16"
            height="18"
            viewBox="32.484 17.5 15.515 17.5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                fill={backgroundColor}
            />
        </svg>
    ) : (
        <svg
            className="absolute -right-[6px] bottom-0"
            width="16"
            height="18"
            viewBox="32.485 17.5 15.515 17.5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                fill={backgroundColor}
            />
        </svg>
    );

    return (
        <div
            className={`relative my-2 flex ${
                isLeft ? "justify-start" : "justify-end"
            }`}
        >
            <div
                className="relative max-w-md px-4 py-3 rounded-2xl"
                style={{
                    backgroundColor,
                    color: textColor,
                }}
            >
                {/* {typeof children === "string" ? <p>{children}</p> : children} */}
                <div className="flex flex-col gap-3">{children}</div>

                {arrowSvg}
            </div>
        </div>
    );
};

export default ChatBubble;
