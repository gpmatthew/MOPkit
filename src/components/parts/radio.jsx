import React, {useState} from 'react';

const Radio = ({checked, className, disabled, id, inline, label, name, onChange, onClick, value}) => {
    return (
        <label className={`radio-wrapper ${inline ? 'inline' : ''} ${className}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                onClick={onClick}
                className="radio-input"
            />
            <span class="radiobtn"></span>
            <span htmlFor={id} className="radio-label">
                {label}
            </span>
        </label>
    );
};


export default Radio;