const ChatBubble = ({ direction = "left", children }) => {
    const isLeft = direction === "left";

    return (
        <div
            className={`px-5 py-5 rounded-t-2xl ${
                isLeft ? "rounded-br-2xl" : "rounded-bl-2xl"
            } text-black border-1 border-black h-fit `}
        >
            <div className="h-full flex flex-col gap-5">{children}</div>
        </div>
    );
};

export default ChatBubble;
