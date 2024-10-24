import React, { useEffect, useState } from 'react';
import Button from "../components/parts/button.jsx";
import Message from "../components/parts/message.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function MessageExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Modal');
    };

    const [isOpen, setIsOpen] = useState(false);

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

        html = html.replace(/"MOPkit\/Button"/g, '<span class="string">"MOPkit/Button"</span>');
        html = html.replace(/"MOPkit\/Message"/g, '<span class="string">"MOPkit/Message"</span>');

        html = html.replace(/MessageExample;/g, '<span class="string">MessageExample;</span>');
        html = html.replace(/MessageExample/g, '<span class="function">MessageExample</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');

        //Specific
        html = html.replace(/handleOpen/g, '<span class="function">handleOpen</span>');
        html = html.replace(/handleClose/g, '<span class="function">handleClose</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/6000/g, '<span class="value">6000</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Message</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Modal <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Messages (often referred to as snackbars) should be used to communicate something to the user when either there is no further action required, or when there is no space in the UI to insert an error / success message.</p>
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
import Button from "MOPkit/Button";
import Message from "MOPkit/Message";

class MessageExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
   
    render() {
        return (
            <div class="message-container">
                <Button onClick={handleOpen}>
                   <i className="far fa-external-link-square"></i>
                   <span>Open Message</span>
                </Button>
                <Message
                    className=""
                    duration={6000}
                    id=""
                    isOpen={isOpen}
                    requestClose={handleClose}>
                    <p>This is a standard message with a 6 second dismiss timer.</p>
                </Message>
            </div>
        );
    }
}

export default MessageExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <div className="message-container">
                            <Button onClick={handleOpen}>
                                <i className="far fa-external-link-square"></i>
                                <span>Open Message</span>
                            </Button>
                            <Message
                                className=""
                                duration={6000}
                                id=""
                                isOpen={isOpen}
                                requestClose={handleClose}>
                                <p>This is a standard message with a 6 second dismiss timer.</p>
                            </Message>
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
                            <p>The class(es) to be given to the message. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>duration <span>(integer)</span></h6></div>
                        <div className="text">
                            <p>The duration that the message should stay on the screen for (in milliseconds). This should be no less than 4000 otherwise users will not be able to read the message.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">6000</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the message.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>isOpen <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true when the message should be made visible. Use state/props and localized methods to manage this (see above).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>requestClose <span>(function)</span></h6></div>
                        <div className="text">
                            <p>The callback function needed to close the message. This callback will be executed after the duration time has passed. If this is not included, a warning will be displayed in the console.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default MessageExample;