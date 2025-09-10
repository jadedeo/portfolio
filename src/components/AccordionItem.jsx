import { useState } from "react";

const AccordionItem = ({ children, heading, isOpenDefault = false }) => {
	const [isOpen, setIsOpen] = useState(isOpenDefault);
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div
			className={`accordionItem-component bg-gray-100 px-10 pt-5 pb-7 ${
				isOpen ? "shadow-lg opacity-100" : "opacity-50"
			}`}
			onClick={toggleOpen}
		>
			<div className="flex justify-between items-center">
				<h4 className="text-xl font-bold">{heading}</h4>
				<h2 className="font-display h-11 w-5">{!isOpen ? "+" : "-"}</h2>
			</div>
			{isOpen && <div className="flex flex-col gap-3">{children}</div>}
		</div>
	);
};

export default AccordionItem;
