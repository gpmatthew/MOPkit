import React, {useState} from 'react';

const Tooltip = ({ children, tooltip, position }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <span
            className="tooltip-container"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
      {children}
            <div className={`tooltip ${position}`}>
                {tooltip}
            </div>
    </span>
    );
};


export default Tooltip;