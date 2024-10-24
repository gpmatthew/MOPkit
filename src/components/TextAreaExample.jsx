import React, { useEffect, useState } from 'react';
import Textarea from "../components/parts/textarea.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function TextAreaExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Time Picker');
    };

    const [theValue, setTheValue] = useState('');

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

        html = html.replace(/"MOPkit\/Textarea"/g, '<span class="string">"MOPkit/Textarea"</span>');

        html = html.replace(/TextareaExample;/g, '<span class="string">TextareaExample;</span>');
        html = html.replace(/TextareaExample/g, '<span class="function">TextareaExample</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/handleInput/g, '<span class="function">handleInput</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/"something1"/g, '<span class="string">"something1"</span>');
        html = html.replace(/"Enter a value"/g, '<span class="string">"Enter a value"</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"This textarea has a label"/g, '<span class="string">"This textarea has a label"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleInput = (e) => {
        setTheValue(e.target.value);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Textarea</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Time Picker <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Textareas are often used when the user is expected to fill out more than a couple of words, or more than one of something (i.e. invoices). Textareas should take up the full width of their parent wrapper and should never be allowed to be resized horizontally</p>
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
import Textarea from "MOPkit/Textarea";

class TextareaExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            theValue: ''
        };
    }
    
    const handleInput = (e) => {
        setTheValue(e.target.value);
    };
   
    render() {
        return (
            <Textarea
                disabled={false}
                id="something1"
                label="Enter a value"
                name=""
                onInput={handleInput}
                placeholder="This textarea has a label"
                wrapperClass=""/>
        );
    }
}

export default TextareaExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Textarea
                            disabled={false}
                            id="something1"
                            label="Enter a value"
                            name=""
                            onInput={handleInput}
                            placeholder="This textarea has a label"
                            wrapperClass=""/>
                        <Textarea
                            disabled={true}
                            id="something2"
                            label="Enter a value"
                            name=""
                            onInput={handleInput}
                            placeholder="This textarea is disabled"
                            wrapperClass=""/>
                        <Textarea
                            disabled={false}
                            id="something3"
                            name=""
                            onInput={handleInput}
                            placeholder="This textarea has no label"
                            wrapperClass=""/>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the textarea should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the textarea tag. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"textarea-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>It is best practice to always include a label with the textarea, however this is optional. Labels will always be placed above the textarea.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the textarea.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onInput <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the input event is triggered. This should be set in your parent component and passed down to the Textarea component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>placeholder <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The placeholder text for the textarea. This should always be included.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"Please enter a value"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>value <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The value attribute that will be given to the textarea tag. This should be tracked with state/props.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>wrapperClass <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the textarea wrapper. Can be multiple classes separated by a space.</p>
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

export default TextAreaExample;