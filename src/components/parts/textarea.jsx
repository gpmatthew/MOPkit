import React, {useState} from 'react';

const Textarea = ({disabled, id, label, name, onInput, onKeyDown, onPaste, placeholder, value, wrapperClass,}) => {
    return (
        <div className={`textarea-wrapper ${wrapperClass}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea
                id={id}
                name={name}
                disabled={disabled}
                onInput={onInput}
                onKeyDown={onKeyDown}
                onPaste={onPaste}
                placeholder={placeholder}
                value={value}
                rows={4} // You can adjust the number of rows
                className="textarea"
            />
        </div>
    );
};

export default Textarea;