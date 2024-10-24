import React, {useState} from 'react';

const Modal = ({ wrapperClassName, scrollTo, isOpen, contentId, header, children }) => {
    const [isAccordionOpen, setAccordionOpen] = useState(isOpen);

    const handleToggle = () => {
        setAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className={`accordion-item ${wrapperClassName}`}>
            <div
                onClick={handleToggle}
                aria-controls={contentId}
                aria-expanded={isAccordionOpen ? 'true' : 'false'}
                className="accordion-header"
            >
            {header}
            </div>
            <div aria-expanded={isAccordionOpen ? 'true' : 'false'} className="accordion-content" id={contentId}>
                {children}
            </div>
        </div>
    );
};


export default Modal;