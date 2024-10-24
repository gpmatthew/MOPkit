import React, { useEffect, useState } from 'react';
import Select from "../components/parts/select.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function SelectExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Table');
    };

    const [selected, setSelected] = useState('-');

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

        html = html.replace(/"MOPkit\/Select"/g, '<span class="string">"MOPkit/Select"</span>');

        html = html.replace(/SelectExample;/g, '<span class="string">SelectExample;</span>');
        html = html.replace(/SelectExample/g, '<span class="function">SelectExample</span>');

        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/handleChange/g, '<span class="function">handleChange</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/'-'/g, '<span class="string">\'-\'</span>');
        html = html.replace(/"A label for a select"/g, '<span class="string">"A label for a select"</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/'Make a selection'/g, '<span class="string">\'Make a selection\'</span>');
        html = html.replace(/'First option is not always the best'/g, '<span class="string">\'First option is not always the best\'</span>');
        html = html.replace(/'1'/g, '<span class="string">\'1\'</span>');
        html = html.replace(/'Second is first to lose'/g, '<span class="string">\'Second is first to lose\'</span>');
        html = html.replace(/'2'/g, '<span class="string">\'2\'</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Select</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Table <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Like input fields, the select fields should expand to take up as much space as possible. The options are passed to the select component via the <span className="highlight">options</span> prop.</p>
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
import Select from "MOPkit/Select";

class SelectExample extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            selected: '-'
        }
    }
    
    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    
    render() {
        return (
            <Select
                disabled={false}
                id=""
                label="A label for a select"
                name=""
                onChange={handleChange}
                options={[
                    {
                        label: 'Make a selection',
                        selected: true,
                        value: '-'
                    },
                    {
                        label: 'First option is not always the best',
                        value: '1'
                    },
                    {
                        label: 'Second is first to lose',
                        value: '2'
                    }
                ]}
                wrapperClass="" />
        );
    }
}

export default SelectExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Select
                            disabled={false}
                            id=""
                            label="A label for a select"
                            name=""
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'Make a selection',
                                    selected: true,
                                    value: '-'
                                },
                                {
                                    label: 'First option is not always the best',
                                    value: '1'
                                },
                                {
                                    label: 'Second is first to lose',
                                    value: '2'
                                }
                            ]}
                            wrapperClass="" />
                        <Select
                            disabled={true}
                            id=""
                            label="A label for a select"
                            name=""
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'This field is disabled',
                                    selected: true,
                                    value: '-'
                                },
                                {
                                    label: 'First option is not always the best',
                                    value: '1'
                                },
                                {
                                    label: 'Second is first to lose',
                                    value: '2'
                                }
                            ]}
                            wrapperClass="" />
                        <Select
                            disabled={false}
                            id=""
                            name=""
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'This select has no label',
                                    selected: true,
                                    value: '-'
                                },
                                {
                                    label: 'First option is not always the best',
                                    value: '1'
                                },
                                {
                                    label: 'Second is first to lose',
                                    value: '2'
                                }
                            ]}
                            wrapperClass="" />
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
                            <p>Set to true if the select field should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the select field. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"select-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>It is best practice to always include a label with the select field, however this is optional. Labels will always be placed above the select field.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the select field.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the change event is triggered. This should be set in your parent component and passed down to the Select component. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>options <span>(array)</span></h6></div>
                        <div className="text">
                            <p>An array of objects that will be used to build out the options. Possible properties are:</p>
                            <ul>
                                <li><strong>hidden</strong> (boolean) Set to true if the option should be hidden from the user</li>
                                <li><strong>label</strong> (string) The text that the user will see</li>
                                <li><strong>selected</strong> (boolean) Set to true if the option should be selected by default</li>
                                <li><strong>value</strong> The value of the option</li>
                            </ul>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">{"[{value: '-', label: 'Make a selection'}]"}</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default SelectExample;