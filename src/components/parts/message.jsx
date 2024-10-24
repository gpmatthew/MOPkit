import React, { useState, useEffect } from 'react';

const Message = ({ className, duration, isOpen, requestClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                requestClose();
            }, duration);
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [isOpen, duration, requestClose]);

    // Conditionally set classes for animation
    const messageClass = isOpen ? 'message message-enter-active' : 'message message-exit-active';

    return (
        <div className={`${messageClass} ${className}`}>
            <div className="message-content">
                {children}
            </div>
        </div>
    );
};

export default Message;
