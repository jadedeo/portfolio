import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ children }) => {
    const [activeItem, setActiveItem] = useState(0);

    const toggleItem = (index) => {
        console.log("toggle");
        setActiveItem((prev) => (prev === index ? null : index));
    };

    const items = Array.isArray(children) ? children : [children];
    console.log(items);

    return (
        <section className="accordion-component mx-auto max-w-screen-lg">
            {items.map((child, index) => (
                <AccordionItem
                    key={index}
                    onClick={() => toggleItem(index)}
                    isOpen={activeItem === index}
                    itemNumber={index + 1}
                >
                    {child}
                </AccordionItem>
            ))}
        </section>
    );
};

export default Accordion;
