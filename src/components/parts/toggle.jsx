import React, { useState } from 'react';

const Toggle = ({checked, onChange, label, id, name, disabled = false, inline = true, value, className = "", wrapperClass = ""}) => {

    const [isActive, setIsActive] = useState(checked); // Set initial state based on the checked prop

    const handleToggle = () => {
        if (!disabled) {
            setIsActive(prevState => !prevState); // Toggle the active state
            onChange(!isActive); // Call the onChange function with the new state
        }
    };

    return (
        <div className={`toggle-container ${wrapperClass}`} style={{ display: inline ? 'inline-flex' : 'block', alignItems: 'center' }}>
            <input
                type="checkbox"
                id={id}
                className={`toggle ${className}`}
                name={name}
                value={value}
                checked={isActive} // Use the isActive state for the checked property
                readOnly // Prevent manual changes
                disabled={disabled}
                style={{ display: 'none' }} // Hide the checkbox
            />
            <label htmlFor={id} className="toggle-label" onClick={handleToggle}> {/* Use onClick on the label */}
                <span className={`toggle-switch ${isActive ? 'active' : ''}`}></span>
                {label}
            </label>
        </div>
    );
};

export default Toggle;
