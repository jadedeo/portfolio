const Accordion = ({ activeItem = 1, children }) => {
    const toggleOpenItem = (selectedItem) => {
        activeItem = selectedItem;
    };
    console.log(children.length);
    return <section>{children}</section>;
};

export default Accordion;
