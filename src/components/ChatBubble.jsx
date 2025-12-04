const ChatBubble = ({ direction = "left", children }) => {
    const isLeft = direction === "left";

    return (
        // ${ isLeft ? "rounded-br-2xl" : "rounded-bl-2xl"}
        <div className={`pt-8 text-black h-full relative`}>
            <div className="border-l-1 border-black mt-2 pl-5 h-full">
                <h1 className="font-display ml-[-8px] absolute top-2 left-0">
                    "
                </h1>
                <div className="h-full flex flex-col gap-5 justify-between text-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;
