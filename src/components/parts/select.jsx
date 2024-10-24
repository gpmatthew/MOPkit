import React, {useState} from 'react';

const Select = ({disabled, id, label, name, onChange, options, value, wrapperClass}) => {
    return (
        <div className={`select-wrapper ${wrapperClass}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="select-input"
            >
                {options.map((option, index) => (
                    !option.hidden && (
                        <option
                            key={index}
                            value={option.value}
                            selected={option.selected}
                        >
                            {option.label}
                        </option>
                    )
                ))}
            </select>
        </div>
    );
};


export default Select;