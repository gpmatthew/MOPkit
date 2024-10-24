import React, { useEffect, useState } from 'react';
import Toggle from "../components/parts/toggle.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function ToggleExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Tooltip');
    };

    const [checked, setChecked, isActive] = useState(false);

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
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/this/g, '<span class="keyword">this</span>');

        html = html.replace(/"MOPkit\/Toggle"/g, '<span class="string">"MOPkit/Toggle"</span>');

        html = html.replace(/ToggleExample;/g, '<span class="string">ToggleExample;</span>');
        html = html.replace(/ToggleExample/g, '<span class="function">ToggleExample</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/super/g, '<span class="keyword">super</span>');
        html = html.replace(/handleClick/g, '<span class="function">handleClick</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"This toggle has a label"/g, '<span class="string">"This toggle has a label"</span>');
        html = html.replace(/"myToggle1"/g, '<span class="string">"myToggle1"</span>');
        html = html.replace(/"1"/g, '<span class="string">"1"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleClick = (value) => {
        setChecked(value);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Toggle</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Tooltip <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Toggles are an important UI element for users because it invokes the of "on" or "off" (e.g. showing only items that require attention). A toggle is essentially a checkbox, but displayed differently to the user.</p>
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
    `import React, {Component} from 'react';
import Toggle from "MOPkit/Toggle";

class ToggleExample extends Component {
   
    constructor(props) {
        
        super(props);
    
        // Keep track of the checkbox's checked state
        this.state = {
            checked: false
        };
    }
    
    // Change the state when the checkbox is clicked
    const handleClick = (value) => {
        setChecked(value);
    };
   
    render() {
        return (
            <Toggle
                checked={false}
                className=""
                disabled={false}
                id="myToggle1"
                inline={false}
                label="This toggle has a label"
                name="myToggle1"
                onChange={handleClick}
                value="1"
                wrapperClass=""/>
        );
    }
}

export default ToggleExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Toggle
                            checked={false}
                            className=""
                            disabled={false}
                            id="myToggle1"
                            inline={false}
                            label="This toggle has a label"
                            name="myToggle1"
                            onChange={handleClick}
                            value="1"
                            wrapperClass=""/>
                        <Toggle
                            checked="active"
                            className=""
                            disabled={true}
                            id="myToggle2"
                            inline={false}
                            label="This toggle is checked and disabled"
                            name="myToggle2"
                            onChange={handleClick}
                            value="2"
                            wrapperClass=""/>
                        <Toggle
                            checked={false}
                            className=""
                            disabled={true}
                            id="myToggle3"
                            inline={false}
                            label="This toggle is disabled"
                            name="myToggle3"
                            onChange={handleClick}
                            value="3"
                            wrapperClass=""/>
                        <Toggle
                            checked="active"
                            className=""
                            disabled={false}
                            id="myToggle4"
                            inline={false}
                            name="myToggle4"
                            onChange={handleClick}
                            value="4"
                            wrapperClass=""/>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>checked <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Use state/props and localized methods to manage the checked state of a toggle (see above).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the toggle (checkbox) input tag. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the toggle should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the toggle (checkbox) input tag. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"toggle-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>inline <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the toggle wrapper should not take up the full width of the parent wrapper.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The text/markup that will appear beside the toggle.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the toggle (checkbox) input tag.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the toggle changes its checked state. This should be set in your parent component and passed down to the toggle. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>value <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The value attribute that will be given to the toggle (checkbox) input tag.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>wrapperClass <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the toggle wrapper. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default ToggleExample;