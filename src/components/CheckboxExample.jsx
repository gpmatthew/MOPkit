import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function CheckboxExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Date & Time Picker');
    };

    useEffect(() => {
        const codeBlock = document.getElementById('code-block');
        let html = codeBlock.innerHTML;

        // Add span tags around specific keywords
        html = html.replace(/import/g, '<span class="keyword">import</span>');
        html = html.replace(/from/g, '<span class="keyword">from</span>');
        html = html.replace(/const/g, '<span class="keyword">const</span>');
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/false/g, '<span class="value">false</span>');
        html = html.replace(/true/g, '<span class="value">true</span>');
        html = html.replace(/CheckboxExample/g, '<span class="function">CheckboxExample</span>');
        html = html.replace(/useState/g, '<span class="function">useState</span>');
        html = html.replace(/setChecked/g, '<span class="function">setChecked</span>');
        html = html.replace(/"react"/g, '<span class="string">"react"</span>');
        html = html.replace(/"MOPkit\/Checkbox"/g, '<span class="string">"MOPkit/Checkbox"</span>');
        html = html.replace(/CheckboxExample;/g, '<span class="string">CheckboxExample;</span>');
        html = html.replace(/"checkbox1"/g, '<span class="string">"checkbox1"</span>');
        html = html.replace(/"This checkbox has a label and is inline"/g, '<span class="string">"This checkbox has a label and is inline"</span>');
        html = html.replace(/"inlineCheckbox"/g, '<span class="string">"inlineCheckbox"</span>');
        html = html.replace(/"123"/g, '<span class="string">"123"</span>');
        html = html.replace(/(?<=\s)=|=(?=\s)/g, '<span class="operator">=</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Checkbox</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Date & Time Picker <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Checkboxes can be used in a variety of ways. Typically for the best user experience, text should be placed beside the checkbox, unless the checkboxes are in a table column. In this case it is advised to add a tooltip so the user has some direction, but this is optional.</p>
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
    `import React, {useState} from "react";
import Checkbox from "MOPkit/Checkbox";

const CheckboxExample = (props) => {
  
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      className=""
      disabled={false}
      id="checkbox1"
      inline={true}
      label="This checkbox has a label and is inline"
      name="inlineCheckbox"
      onChange={false}
      onClick={() => setChecked(!checked)}
      value="123"/>
  );
}
export default CheckboxExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col checkboxes-container">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="options">
                        <div className="field">
                            <input className="not-checked" type="checkbox" name="check1"/>
                            <label htmlFor="check1">This checkbox has a label and is inline</label>
                        </div>
                        <div className="field">
                            <input checked="checked" className="checked" type="checkbox" name="check2"/>
                            <label htmlFor="check2">This checkbox is checked</label>
                        </div>
                        <div className="field">
                            <input disabled checked="checked" className="checked-disabled" type="checkbox" name="check3"/>
                            <label htmlFor="check3">This checkbox is checked and disabled</label>
                        </div>
                        <div className="field">
                            <input disabled className="disabled" type="checkbox" name="check4"/>
                            <label htmlFor="check4">This checkbox is disabled</label>
                        </div>
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
                            <p>The class(es) to be given to the checkbox input tag. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the checkbox should be disabled. Use state / props to manage this dynamically</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the checkbox input tag. If no id is passed, a random id will be assigned.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"checkbox-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>inline <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the checkbox wrapper should not take up the full width of the parent wrapper.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>label <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The text/markup that will appear beside the checkbox.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The name attribute that will be given to the checkbox input tag.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the checkbox changes its checked state. This should be set in your parent component and passed down to the checkbox. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onClick <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the checkbox is clicked. This should be set in your parent component and passed down to the checkbox. The event will be passed to the callback function to be used if needed.</p>
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

export default CheckboxExample;