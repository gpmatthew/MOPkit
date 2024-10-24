import React, {useEffect, useState} from 'react';
import Button from "../components/parts/button.jsx";
import CalendarExample from "../components/CalendarExample";
import AngleDownIcon from "../assets/images/angle-down.svg";

function ButtonExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Calendar');
    };

    useEffect(() => {
        const codeBlock = document.getElementById('code-block');
        let html = codeBlock.innerHTML;

        // Add span tags around specific keywords
        //Defaults
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

        html = html.replace(/"MOPkit\/Button"/g, '<span class="string">"MOPkit/Button"</span>');

        html = html.replace(/ButtonExample;/g, '<span class="string">ButtonExample;</span>');
        html = html.replace(/ButtonExample/g, '<span class="function">ButtonExample</span>');

        //Specific
        html = html.replace(/"blue"/g, '<span class="string">"blue"</span>');
        html = html.replace(/"large"/g, '<span class="string">"large"</span>');
        html = html.replace(/"I only appear for disabled buttons"/g, '<span class="string">"I only appear for disabled buttons"</span>');
        html = html.replace(/"button"/g, '<span class="string">"button"</span>');
        html = html.replace(/"fal fa-plus-circle"/g, '<span class="string">"fal fa-plus-circle"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Button</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Calendar <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Buttons are the most commonly used component in our applications. With the new styling, there are more colors and more variants than ever before. The color can now be used to convey the severity of the action. A button for disputing an invoice, for example, could be yellow instead of blue, indicating that this is an action that needs to be taken seriously.</p>
                    <p>Note: If you are placing an icon after or in front of text, you can use <span className="highlight">&lt;i className=&quot;fal fa-plus-circle&quot;&gt;&lt;/i&gt;</span>.</p>
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
import Button from "MOPkit/Button";

const ButtonExample = (props) => {

    return (
        <Button
           className="large"
           color="blue"
           icononly={false}
           id=""
           outline={false}
           type="button">
               <i className="fal fa-plus-circle"></i>
               <span>Button Title</span>
         </Button>
    );
}

export default ButtonExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <div className="btn-container">
                            <div className="btn-col">
                                <Button
                                    className="large"
                                    color="blue"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className="large"
                                    color="light-blue"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className="large"
                                    color="yellow"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className="large"
                                    color="light-yellow"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className="large"
                                    color="grey"
                                    icononly={false}
                                    id=""
                                    onClick={false}
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                            </div>
                            <div className="btn-col">
                                <Button
                                    className=""
                                    color="blue"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className=""
                                    color="light-blue"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className=""
                                    color="yellow"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className=""
                                    color="light-yellow"
                                    icononly={false}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button
                                    className=""
                                    color="grey"
                                    icononly={false}
                                    id=""
                                    onClick={false}
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                            </div>
                            <div className="btn-col">
                                <Button
                                    className=""
                                    color="blue"
                                    icononly={true}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                </Button>
                                <Button
                                    className=""
                                    color="light-blue"
                                    icononly={true}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                </Button>
                                <Button
                                    className=""
                                    color="yellow"
                                    icononly={true}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                </Button>
                                <Button
                                    className=""
                                    color="light-yellow"
                                    icononly={true}
                                    id=""
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                </Button>
                                <Button
                                    className=""
                                    color="grey"
                                    icononly={true}
                                    id=""
                                    onClick={false}
                                    outline={false}
                                    type="button">
                                    <i className="fal fa-plus-circle"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the button. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>color  <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The color that the button should be. Possible values are: <span className="highlight">"blue|green|purple|red|orange|dark-blue|yellow"</span></p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"blue"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>disabled <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the button should be disabled. Use state / props to manage this dynamically.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>icononly <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the button will only contain an icon. Padding will be removed and a set height and width will be applied</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the button.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"checkbox-[randNum]"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>onClick <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function to be called when the button is clicked. This should be set in your parent component and passed down to the button. The event will be passed to the callback function to be used if needed.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>outline <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the button will only have the outline / border. This can be combined with the <span className="highlight">icononly</span> prop.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>type <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The type of html tag that the button should be. Buttons are typically <span className="highlight">button</span> tags or <span className="highlight">a</span> tags.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"button"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default ButtonExample;