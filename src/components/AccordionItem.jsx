const AccordionItem = ({ isOpen = false, children, onClick, itemNumber }) => {
    const heading = children.props?.children?.[0];
    const subheading = children.props?.children?.[1];
    const content = children.props?.children?.slice(2);

    return (
        <section className="accordionitem-component my-3 pt-3 border-t-1 border-black">
            <div
                className="flex justify-between items-center"
                onClick={onClick}
            >
                <div>
                    {heading}
                    {/* {!isOpen && subheading} */}
                </div>

                <h3>
                    {isOpen ? (
                        <img
                            src="/icons/eyeClosed.png"
                            className="max-h-[30px]"
                        />
                    ) : (
                        <img
                            src="/icons/eyeOpen.png"
                            className="max-h-[30px]"
                        />
                    )}
                </h3>
            </div>

            {isOpen && <div className="mt-2">{content}</div>}
        </section>
    );
};

export default AccordionItem;
