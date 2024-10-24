import React, { useEffect, useState } from 'react';
import Input from "../components/parts/input.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function InputExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Message');
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
        html = html.replace(/Component/g, '<span class="function">Component</span>');
        html = html.replace(/false/g, '<span class="value">false</span>');
        html = html.replace(/true/g, '<span class="value">true</span>');
        html = html.replace(/(?<=\s)=|=(?=\s)/g, '<span class="operator">=</span>');
        html = html.replace(/(?<=\s)!|!(?=\s)/g, '<span class="operator">!</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/super/g, '<span class="keyword">super</span>');
        html = html.replace(/handleInput/g, '<span class="function">handleInput</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');

        html = html.replace(/this/g, '<span class="keyword">this</span>');

        html = html.replace(/"MOPkit\/Input"/g, '<span class="string">"MOPkit/Input"</span>');
        html = html.replace(/InputExample;/g, '<span class="string">InputExample;</span>');
        html = html.replace(/InputExample/g, '<span class="function">InputExample</span>');

        //Specific
        html = html.replace(/"off"/g, '<span class="string">"off"</span>');
        html = html.replace(/"datalist1"/g, '<span class="string">"datalist1"</span>');
        html = html.replace(/"Something 1"/g, '<span class="string">"Something 1"</span>');
        html = html.replace(/"Something 2"/g, '<span class="string">"Something 2"</span>');
        html = html.replace(/"Something 3"/g, '<span class="string">"Something 3"</span>');
        html = html.replace(/"something1"/g, '<span class="string">"something1"</span>');
        html = html.replace(/"Enter a value"/g, '<span class="string">"Enter a value"</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"This is an input field"/g, '<span class="string">"This is an input field"</span>');
        html = html.replace(/"text"/g, '<span class="string">"text"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleInput = (e) => {
        setTheValue(e.target.value);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Input</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Message <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Input fields should always expand to take up as much space as possible. Putting button beside is an option, however there should be not be any small input fields with gaps on either side.</p>
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
import Input from "MOPkit/Input";

class InputExample extends Component {
   
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
            <Input
              autocomplete="off"
              disabled={false}
              helper=""
              id="something1"
              label="Enter a value"
              name=""
              onInput={handleInput} // Update to reference function directly
              onChange={false}
              onKeyDown={false}
              onlyNumbers={false}
              onPaste={false}
              placeholder="This is an input field"
              type="text"
              wrapperClass=""
            />
        );
    }
}

export default InputExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Input
                            autocomplete="off"
                            disabled={false}
                            helper=""
                            id="something1"
                            label="Enter a value"
                            name=""
                            onInput={handleInput} // Update to reference function directly
                            onChange={false}
                            onKeyDown={false}
                            onlyNumbers={false}
                            onPaste={false}
                            placeholder="This is an input field"
                            type="text"
                            wrapperClass=""
                        />
                        <Input
                            autocomplete="off"
                            disabled={true}
                            helper=""
                            id="something2"
                            label="Enter a value"
                            name=""
                            onInput={handleInput} // Update to reference function directly
                            onChange={false}
                            onKeyDown={false}
                            onlyNumbers={false}
                            onPaste={false}
                            placeholder="This field is disabled"
                            type="text"
                            wrapperClass=""
                        />
                        <Input
                            autocomplete="off"
                            disabled={false}
                            helper=""
                            id="something3"
                            label="Enter a value"
                            name=""
                            onInput={handleInput} // Update to reference function directly
                            onChange={false}
                            onKeyDown={false}
                            onlyNumbers={false}
                            onPaste={false}
                            placeholder="This field has helper text"
                            type="text"
                            wrapperClass="">
                            <div className="caption">You can enter something here</div>
                        </Input>
                        <Input
                            autocomplete="off"
                            disabled={false}
                            helper=""
                            id="something4"
                            name=""
                            onInput={handleInput} // Update to reference function directly
                            onChange={false}
                            onKeyDown={false}
                            onlyNumbers={false}
                            onPaste={false}
                            placeholder="This field has a datalist"
                            type="text"
                            wrapperClass=""
                        />
                        <Input
                            autocomplete="off"
                            datalist={
                                <datalist id="datalist1">
                                    <option value="Something 1">Something 1</option>
                                    <option value="Something 2">Something 2</option>
                                    <option value="Something 3">Something 3</option>
                                </datalist>
                            }
                            disabled={false}
                            helper=""
                            id="something5"
                            label="Enter or select a value"
                            list="datalist1"
                            name=""
                            onInput={handleInput} // Update to reference function directly
                            onChange={false}
                            onKeyDown={false}
                            onlyNumbers={false}
                            onPaste={false}
                            placeholder="This is an input field"
                            type="text"
                            wrapperClass=""
                        />
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>autocomplete <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The autocomplete attribute for the input element.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>datalist <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The datalist for the input. Must contain an idea and must be accompanied by the list prop (see below).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the input should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>focus <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>If set to true it focuses the input on creation.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>helper <span>(string)</span></h6></div>
                        <div className="text">
                            <p>To provide more information to a user, helper text can be placed below the input field.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the input tag. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"input-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>It is best practice to always include a label with the input field, however this is optional. Labels will always be placed above the input field.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>list <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id of the datalist.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the input tag.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the change event is triggered. This should be set in your parent component and passed down to the Input component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onInput <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the input event is triggered. This should be set in your parent component and passed down to the Input component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onKeyDown <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the keyDown event is triggered. This should be set in your parent component and passed down to the Input component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onlyNumbers <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Only allow numbers to be entered into the input.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onPaste <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the paste event is triggered. This should be set in your parent component and passed down to the Input component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>placeholder <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The placeholder text for the input. This should always be included.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"Please enter a value"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>type <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The type of the input field. This can be any of the valid input field types (except for radio and checkbox).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"text"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>value <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The value attribute that will be given to the input tag. This should be tracked with state/props.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>wrapperClass <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the input wrapper. Can be multiple classes separated by a space.</p>
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

export default InputExample;