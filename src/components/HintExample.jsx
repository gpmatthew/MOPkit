import React, { useEffect } from 'react';
import Hint from "../components/parts/hint.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function HintExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Input');
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

        html = html.replace(/"MOPkit\/Hint"/g, '<span class="string">"MOPkit/Hint"</span>');

        html = html.replace(/HintExample;/g, '<span class="string">HintExample;</span>');
        html = html.replace(/HintExample/g, '<span class="function">HintExample</span>');

        //Specific
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"blue"/g, '<span class="string">"blue"</span>');
        html = html.replace(/"fal fa-circle-notch fa-spin"/g, '<span class="string">"fal fa-circle-notch fa-spin"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                        <h2>Hint</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Input <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>There are many different use cases for the Hint component: loading, success / error messages, information, or anything that requires a highlight to the user. By default, a Hint takes up the full width of its parent wrapper.</p>
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
import Hint from "MOPkit/Hint";

const HintExample = (props) => {
   
    return (
        <Hint
            className=""
            color="blue"
            icon={<i className="fal fa-circle-notch fa-spin"></i>}
            id="">
                <p>This is a standard loading message.</p>
        </Hint>
    );
}

export default HintExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Hint
                            className=""
                            color="yellow"
                            id="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Hint>
                        <Hint
                            className=""
                            color="red"
                            id="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Hint>
                        <Hint
                            className=""
                            color="blue"
                            id="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Hint>
                        <Hint
                            className=""
                            color="green"
                            id="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Hint>
                        <Hint
                            className=""
                            color="grey"
                            id="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Hint>
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
                            <p>The class(es) to be given to the hint. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>color <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The color that the hint should be. Possible values are: <span className="highlight">"blue|green|grey|red|yellow"</span>. Only one color can be applied.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"yellow"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>icon <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The icon for the hint. If not included, the icon will default to an information circle icon.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"{'<i className="fal fa-info-circle"></i>'}"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the hint.</p>
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

export default HintExample;