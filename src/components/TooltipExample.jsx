import React, { useEffect } from 'react';
import Tooltip from "../components/parts/tooltip.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function TooltipExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('User Image');
    };

    useEffect(() => {
        const codeBlock = document.getElementById('code-block');
        let html = codeBlock.innerHTML;

        // Add span tags around specific keywords
        html = html.replace(/import/g, '<span class="keyword">import</span>');
        html = html.replace(/from/g, '<span class="keyword">from</span>');
        html = html.replace(/'react'/g, '<span class="string">"react"</span>');
        html = html.replace(/useState/g, '<span class="function">useState</span>');
        html = html.replace(/false/g, '<span class="value">false</span>');
        html = html.replace(/true/g, '<span class="value">true</span>');
        html = html.replace(/(?<=\s)=|=(?=\s)/g, '<span class="operator">=</span>');
        html = html.replace(/(?<=\s)!|!(?=\s)/g, '<span class="operator">!</span>');
        html = html.replace(/const/g, '<span class="keyword">const</span>');
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/this/g, '<span class="keyword">this</span>');

        html = html.replace(/"MOPkit\/Tooltip"/g, '<span class="string">"MOPkit/Tooltip"</span>');

        html = html.replace(/TooltipExample;/g, '<span class="string">TooltipExample;</span>');
        html = html.replace(/TooltipExample/g, '<span class="function">TooltipExample</span>');

        //Specific
        html = html.replace(/setOpen/g, '<span class="function">setOpen</span>');
        html = html.replace(/"faux-link"/g, '<span class="string">"faux-link"</span>');
        html = html.replace(/"faux-link right-aligned"/g, '<span class="string">"faux-link right-aligned"</span>');
        html = html.replace(/"faux-link inline"/g, '<span class="string">"faux-link inline"</span>');
        html = html.replace(/"I am left aligned"/g, '<span class="string">"I am left aligned"</span>');
        html = html.replace(/"I am right aligned"/g, '<span class="string">"I am right aligned"</span>');
        html = html.replace(/"I will make the parent inline"/g, '<span class="string">"I will make the parent inline"</span>');
        html = html.replace(/"I am below"/g, '<span class="string">"I am below"</span>');
        html = html.replace(/"left"/g, '<span class="string">"left"</span>');
        html = html.replace(/"right"/g, '<span class="string">"right"</span>');
        html = html.replace(/"inline"/g, '<span class="string">"inline"</span>');
        html = html.replace(/"below"/g, '<span class="string">"below"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Tooltip</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">User Image <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Tooltips are an extremely useful UI element. They can help de-clutter a screen, and also provide further direction to a user (e.g. why a button is disabled).</p>
                </div>
            </div>
            <div className="example-section">
                <div className="col">
                    <div className="heading"><h5>Component</h5></div>
                    <div className="visual-section">
                        <div className="visual">
<pre>
<code id="code-block">
{
    `import React from 'react';

const TooltipExample = (props) =>{
     
    return (
        <div>
            <Tooltip position="left" tooltip="I am left aligned"><span className="faux-link" >Default tooltip</span></Tooltip>
            <Tooltip position="right" tooltip="I am right aligned"><span className="faux-link">Right</span></Tooltip>
            <Tooltip position="inline" tooltip="I will make the parent inline"><span className="faux-link inline">Inline</span></Tooltip>
            <Tooltip position="below" tooltip="I am below"><span className="faux-link">Below</span></Tooltip>
        </div>
    );
}

export default TooltipExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <div>
                            <Tooltip position="left" tooltip="I am left aligned"><span className="faux-link" >Default tooltip</span></Tooltip>
                            <Tooltip position="right" tooltip="I am right aligned"><span className="faux-link">Right</span></Tooltip>
                            <Tooltip position="inline" tooltip="I will make the parent inline"><span className="faux-link inline">Inline</span></Tooltip>
                            <Tooltip position="below" tooltip="I am below"><span className="faux-link">Below</span></Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TooltipExample;