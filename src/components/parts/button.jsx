import React, {useState} from 'react';

const Button = ({className, color, icononly, id, onClick, outline, tooltip, type, children}) => {
    const buttonClass = `btn ${color} ${outline ? 'outline' : ''}${icononly ? 'icon-only' : ''} ${className}`;

    return (
        <button
            id={id}
            className={buttonClass}
            onClick={onClick}
            type={type}
            disabled={onClick === false} // If onClick is false, disable the button
            title={tooltip} // Tooltip for the button
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;