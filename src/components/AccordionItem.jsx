const AccordionItem = ({ isOpen = false, heading, children }) => {
    return (
        <section>
            <div className="flex justify-between">
                <h3>{heading}</h3> <h3>{isOpen ? "-" : " +"}</h3>
                {/* <span>{isOpen}</span> */}
            </div>

            <span>{isOpen}</span>
            {isOpen && <div>{children}</div>}
        </section>
    );
};

export default AccordionItem;
