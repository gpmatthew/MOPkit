import React, {useState} from 'react';

const Tabs = ({ afterChange, beforeChange, className, id, noTabBorder, preventClick, tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs.findIndex(tab => tab.default) || 0);

    const handleTabClick = (index) => {
        if (preventClick) return;

        beforeChange(activeTab, index);
        setActiveTab(index);
        afterChange(activeTab, index);
    };

    return (
        <div className={`tabs ${className}`} id={id}>
            <div className={`tabs-header ${noTabBorder ? 'no-border' : ''}`}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.tabTitle}
                    </div>
                ))}
            </div>
            <div className="tabs-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};


export default Tabs;