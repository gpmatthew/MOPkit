import React, { useEffect, useState } from 'react';
import Radio from "../components/parts/radio.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function RadioExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Request');
    };

    const [checked, setChecked] = useState(false);

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
        html = html.replace(/super/g, '<span class="keyword">super</span>');

        html = html.replace(/"MOPkit\/Radio"/g, '<span class="string">"MOPkit/Radio"</span>');

        html = html.replace(/RadioExample;/g, '<span class="string">RadioExample;</span>');
        html = html.replace(/RadioExample/g, '<span class="function">RadioExample</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');

        //Specific
        html = html.replace(/handleClick/g, '<span class="function">handleClick</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"radio"/g, '<span class="string">"radio"</span>');
        html = html.replace(/"radio1"/g, '<span class="string">"radio1"</span>');
        html = html.replace(/"radio3"/g, '<span class="string">"radio3"</span>');
        html = html.replace(/"This checkbox has a label and is inline"/g, '<span class="string">"This checkbox has a label and is inline"</span>');
        html = html.replace(/"This checkbox is checked and disabled"/g, '<span class="string">"This checkbox is checked and disabled"</span>');
        html = html.replace(/"This checkbox is disabled"/g, '<span class="string">"This checkbox is disabled"</span>');
        html = html.replace(/"Option A"/g, '<span class="string">"Option A"</span>');
        html = html.replace(/"radios"/g, '<span class="string">"radios"</span>');
        html = html.replace(/"radio2"/g, '<span class="string">"radio2"</span>');
        html = html.replace(/"Option B"/g, '<span class="string">"Option B"</span>');
        html = html.replace(/"1"/g, '<span class="value">"1"</span>');
        html = html.replace(/"2"/g, '<span class="value">"2"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleClick = (e) => {
        setChecked(e.target.value);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Radio</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Request <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Radio buttons can be used in a variety of ways. Typically for the best user experience, text should be placed beside the radio button, unless it is in a table column.</p>
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
import Radio from "MOPkit/Radio";

class RadioExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            checked: false
        };
    }
    
    // callback ran when the radio button is clicked
    const handleClick = (e) => {
        setChecked(e.target.value);
    };
   
    render() {
        return (
            <div>
                 <Radio
                    checked={(checked == 1)}
                    className=""
                    disabled={false}
                    id="radio1"
                    inline={false}
                    label="This checkbox has a label and is inline"
                    name="radio"
                    onChange={handleClick}
                    onClick={handleClick}
                    value={1} />
                <Radio
                    checked="checked"
                    className=""
                    id="radio2"
                    disabled={false}
                    label="This checkbox is checked and disabled"
                    name="radios"
                    onChange={handleClick}
                    onClick={handleClick}
                    />
                <Radio
                    className=""
                    disabled={true}
                    id="radio3"
                    label="This checkbox is disabled"
                    name="radio"
                    onChange={handleClick}
                    onClick={handleClick}
                    />
                <Radio
                    className=""
                    disabled={false}
                    id="radio3"
                    label=""
                    name="radio"
                    onChange={handleClick}
                    onClick={handleClick}
                />
            </div>
            
        );
    }
}

export default RadioExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Radio
                            checked={(checked == 1)}
                            className=""
                            disabled={false}
                            id="radio1"
                            inline={false}
                            label="This checkbox has a label and is inline"
                            name="radio"
                            onChange={handleClick}
                            onClick={handleClick}
                            value={1} />
                        <Radio
                            checked="checked"
                            className=""
                            id="radio2"
                            disabled={false}
                            label="This checkbox is checked and disabled"
                            name="radios"
                            onChange={handleClick}
                            onClick={handleClick}
                            />
                        <Radio
                            className=""
                            disabled={true}
                            id="radio3"
                            label="This checkbox is disabled"
                            name="radio"
                            onChange={handleClick}
                            onClick={handleClick}
                            />
                        <Radio
                            className=""
                            disabled={false}
                            id="radio3"
                            label=""
                            name="radio"
                            onChange={handleClick}
                            onClick={handleClick}
                        />
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
                            <p>Use state/props and localized methods to manage the checked state of an input (see above).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the radio input tag. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the radio button should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the radio input tag. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"radio-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>inline <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the radio wrapper should not take up the full width of the parent wrapper.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The text/markup that will appear beside the radio button.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the radio input tag.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the radio button changes its checked state. This should be set in your parent component and passed down to the radio button. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onClick <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the radio button is clicked. This should be set in your parent component and passed down to the radio button. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>value <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The value attribute that will be given to the checkbox input tag.</p>
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

export default RadioExample;