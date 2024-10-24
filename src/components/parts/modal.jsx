import React, {useState} from 'react';

const Modal = ({afterClose, afterOpen, beforeClose, beforeOpen, className, color, icon, id, isOpen, noBodyPadding, preventClose, requestClose, size, title, children}) => {
    const handleClose = (e) => {
        e.stopPropagation(); // Prevent click from propagating
        if (!preventClose) {
            requestClose();
            if (afterClose) afterClose();
        }
    };

    return (
        <div className={`modal-overlay ${className} ${isOpen ? 'active' : ''}`}>
            <div className="overlay" />
            <div className={`modal ${size} ${color}`} onClick={beforeClose}>
                <div className="modal-header" onClick={beforeOpen}>
                    <div className="heading-container">
                        <span><i className="fal fa-clock"></i></span><h2>{title}</h2>
                    </div>
                    <button className="close-button" onClick={handleClose}><i className="far fa-times"></i></button>
                </div>
                <div className={`modal-body ${noBodyPadding ? 'no-padding' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};


export default Modal;