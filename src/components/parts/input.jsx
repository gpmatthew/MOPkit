import React, {useState} from 'react';

const Input = ({ value, onInput, id, label, placeholder, list, children, disabled = false, wrapperClass = "" }) => {
    return (
        <div className={`input-wrapper ${wrapperClass}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type="text"
                id={id}
                value={value}
                onInput={onInput}
                placeholder={placeholder}
                list={list}
                disabled={disabled}
                autoComplete="off"
            />
            <datalist id={list}>
                <option value="Something 1" />
                <option value="Something 2" />
                <option value="Something 3" />
            </datalist>
            {children}
        </div>
    );
};


export default Input;