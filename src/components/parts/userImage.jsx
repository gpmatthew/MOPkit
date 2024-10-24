import React, {useState} from 'react';

const UserImage = ({ className, icon, symbol, name, noBackground, size, suppressWarning, tnumber }) => {
    const renderIcon = () => {
        if (icon) {
            return <i className="fal fa-user"></i>; // Example icon
        } else {
            return symbol;
        }
    };

    return (
        <div className={`user-image ${className} ${size} ${noBackground ? 'no-background' : ''}`}>
            <div className="user-icon">{renderIcon()}</div>
            <div className="user-info">
                <span className="user-name">{name}</span>
                {tnumber && <span className="user-tnumber">{tnumber}</span>}
                {suppressWarning && <span className="warning">Warning suppressed</span>}
            </div>
        </div>
    );
};


export default UserImage;