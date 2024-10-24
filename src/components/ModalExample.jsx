import React, { useEffect, useState } from 'react';
import Button from "../components/parts/button.jsx";
import Modal from "../components/parts/modal.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function ModalExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Radio');
    };

    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        const codeBlock = document.getElementById('code-block');
        let html = codeBlock.innerHTML;

        // Add span tags around specific keywords
        html = html.replace(/import/g, '<span class="keyword">import</span>');
        html = html.replace(/from/g, '<span class="keyword">from</span>');
        html = html.replace(/'react'/g, '<span class="string">"react"</span>');
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/false/g, '<span class="value">false</span>');
        html = html.replace(/true/g, '<span class="value">true</span>');
        html = html.replace(/(?<=\s)=|=(?=\s)/g, '<span class="operator">=</span>');
        html = html.replace(/(?<=\s)!|!(?=\s)/g, '<span class="operator">!</span>');
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/this/g, '<span class="keyword">this</span>');
        html = html.replace(/super/g, '<span class="keyword">super</span>');

        html = html.replace(/"MOPkit\/Modal"/g, '<span class="string">"MOPkit/Modal"</span>');
        html = html.replace(/"MOPkit\/Button"/g, '<span class="string">"MOPkit/Button"</span>');

        html = html.replace(/ModalExample;/g, '<span class="string">ModalExample;</span>');
        html = html.replace(/ModalExample/g, '<span class="function">ModalExample</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/handleOpen/g, '<span class="function">handleOpen</span>');
        html = html.replace(/handleClose/g, '<span class="function">handleClose</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"blue"/g, '<span class="string">"blue"</span>');
        html = html.replace(/"light-blue"/g, '<span class="string">"light-blue"</span>');
        html = html.replace(/"fal fa-exclamation-circle"/g, '<span class="string">"fal fa-exclamation-circle"</span>');
        html = html.replace(/"small"/g, '<span class="string">"small"</span>');
        html = html.replace(/"A newly styled modal"/g, '<span class="string">"A newly styled modal"</span>');
        html = html.replace(/"button-wrapper"/g, '<span class="string">"button-wrapper"</span>');
        html = html.replace(/"flex-wrapper center"/g, '<span class="string">"flex-wrapper center"</span>');
        html = html.replace(/"fal fa-plus-circle"/g, '<span class="string">"fal fa-plus-circle"</span>');
        html = html.replace(/"fal fa-check"/g, '<span class="string">"fal fa-check"</span>');

        codeBlock.innerHTML = html;
    }, []);


    const handleOpen = (modalId) => () => {
        setActiveModal(modalId);
    };

    const handleClose = () => {
        setActiveModal(null);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Modal</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Radio <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Modals are an essential component in our applications. They can be used for information, to submit, and more. The new styling allows for the modal to stand out amongst the other modals in the application by having a color and an icon. The Modal's <span className="highlight">children</span> will be placed inside of the <span className="highlight">modal-body</span> container.</p>
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
import Modal from "MOPkit/Modal";
import Button from "MOPkit/Button";

class ModalExample extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    
    const handleOpen = (modalId) => () => {
        setActiveModal(modalId);
    };

    const handleClose = () => {
        setActiveModal(null);
    };
   
    render() {
        return (
            <div>
                <Button onClick={handleOpen('small')}><i className="far fa-external-link-square"></i>Small Modal</Button>
                <Modal
                    afterClose={false}
                    afterOpen={false}
                    className={activeModal === 'small' ? 'active' : ''}
                    color="blue"
                    icon={<i className="fal fa-exclamation-circle"></i>}
                    id=""
                    isOpen={activeModal === 'small'}
                    noBodyPadding={false}
                    preventClose={false}
                    requestClose={handleClose}
                    size="small"
                    title="A newly styled modal">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti
                            dolorum officiis sit voluptatem!
                        </p>
                        <div className="button-wrapper">
                            <div className="flex-wrapper center">
                                <Button outline color="blue" onClick={handleClose}>
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                                <Button color="light-blue">
                                    <i className="fal fa-plus-circle"></i>
                                    <span>Button Title</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;
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
                            <Button onClick={handleOpen('small')}><i className="far fa-external-link-square"></i>Small Modal</Button>
                            <Modal
                                afterClose={false}
                                afterOpen={false}
                                className={activeModal === 'small' ? 'active' : ''}
                                color="blue"
                                icon={<i className="fal fa-exclamation-circle"></i>}
                                id=""
                                isOpen={activeModal === 'small'}
                                noBodyPadding={false}
                                preventClose={false}
                                requestClose={handleClose}
                                size="small"
                                title="A newly styled modal">
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti
                                        dolorum officiis sit voluptatem!
                                    </p>
                                    <div className="button-wrapper">
                                        <div className="flex-wrapper center">
                                            <Button outline color="blue" onClick={handleClose}>
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                            <Button color="light-blue">
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <br />
                            <Button color="light-blue" onClick={handleOpen('medium')}><i className="far fa-external-link-square"></i>Medium Modal</Button>
                            <Modal
                                afterClose={false}
                                afterOpen={false}
                                className={activeModal === 'medium' ? 'active' : ''}
                                color="light-blue"
                                icon={<i className="fal fa-exclamation-circle"></i>}
                                id=""
                                isOpen={activeModal === 'medium'}
                                noBodyPadding={false}
                                preventClose={false}
                                requestClose={handleClose}
                                size="medium"
                                title="A newly styled modal">
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti
                                        dolorum officiis sit voluptatem! At beatae deserunt, earum esse exercitationem
                                        impedit laboriosam, natus nemo quisquam reiciendis, repellendus sed voluptate voluptates!
                                    </p>
                                    <div className="button-wrapper">
                                        <div className="flex-wrapper center">
                                            <Button outline color="blue" onClick={handleClose}>
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                            <Button color="light-blue">
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <br />
                            <Button color="yellow" onClick={handleOpen('large')}><i className="far fa-external-link-square"></i>Large Modal</Button>
                            <Modal
                                afterClose={false}
                                afterOpen={false}
                                className={activeModal === 'large' ? 'active' : ''}
                                color="yellow"
                                icon={<i className="fal fa-exclamation-circle"></i>}
                                id=""
                                isOpen={activeModal === 'large'}
                                noBodyPadding={false}
                                preventClose={false}
                                requestClose={handleClose}
                                size="large"
                                title="A newly styled modal">
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti
                                        dolorum officiis sit voluptatem! At beatae deserunt, earum esse exercitationem
                                        impedit laboriosam, natus nemo quisquam reiciendis, repellendus sed voluptate voluptates!
                                    </p>
                                    <div className="button-wrapper">
                                        <div className="flex-wrapper center">
                                            <Button outline color="blue" onClick={handleClose}>
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                            <Button color="light-blue">
                                                <i className="fal fa-plus-circle"></i>
                                                <span>Button Title</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>afterClose <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran when the modal finishes closing.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>afterOpen <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran when the modal finishes opening.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>beforeClose <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran before the modal closes.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>beforeOpen <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran before the modal opens.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the modal. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>color <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The color theme that the modal should have. This will be the color of the icon and the circle around the icon. Possible values are: <span className="highlight">"blue|green|grey|red|yellow|dark-blue"</span>. Only one color can be applied.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"blue"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>icon <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The icon for the modal header. If not included, the icon will default to an exclamation circle icon.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"{'<i className="fal fa-exclamation-circle"></i>'}"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the modal.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>isOpen <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true when the modal should become visible. Use state/props and localized methods to manage this (see above).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>noBodyPadding <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the modal body should not have padding. This can be useful when there are tables in a modal, or you wish to control the padding yourself.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>preventClose <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true when the user should be prevented from closing the modal. This can be useful when submitting forms or in situations where the user must confirm something. Use state/props and localized methods to manage this.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>requestClose <span>(function)</span></h6></div>
                        <div className="text">
                            <p>The callback function needed to close the modal. If this is not included, a warning will be displayed in the console.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>size <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The size of the modal. Possible values are: <span className="highlight">"small|med|large"</span>. Only one size can be applied.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"med"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>title <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The modal title that is placed beside the icon.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"Modal needs a title property!"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default ModalExample;