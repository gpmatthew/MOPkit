import React, { useState, useEffect } from 'react';
import Accordion from "../components/parts/accordion.jsx";
import ButtonExample from "../components/ButtonExample";
import AngleDownIcon from "../assets/images/angle-down.svg";

function AccordionExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Button');
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
        html = html.replace(/this/g, '<span class="keyword">this</span>');

        html = html.replace(/"MOPkit\/Accordion"/g, '<span class="string">"MOPkit/Accordion"</span>');

        html = html.replace(/AccordionExample;/g, '<span class="string">AccordionExample;</span>');
        html = html.replace(/AccordionExample/g, '<span class="function">AccordionExample</span>');

        //Specific
        html = html.replace(/setOpen/g, '<span class="function">setOpen</span>');
        html = html.replace(/"demo-accordion"/g, '<span class="string">"demo-accordion"</span>');
        html = html.replace(/"the-content"/g, '<span class="string">"the-content"</span>');
        html = html.replace(/"button"/g, '<span class="string">"button"</span>');
        html = html.replace(/"faux-link"/g, '<span class="string">"faux-link"</span>');
        html = html.replace(/"angle"/g, '<span class="string">"angle"</span>');
        html = html.replace(/"fal fa-angle-down"/g, '<span class="string">"fal fa-angle-down"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Accordion</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Button <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Accordions can be used for various user experiences throughout our applications. Whether it's sliding down a row's content when clicked, showing a loading message, or having a tree-type hierarchy, etc. It is recommended to use the header prop when the <span className="highlight">header</span> needs to be in a wrapper with the hidden body content.
                        By default, there is limited styling for the accordions. This will evolve over time, but due to the number of use-cases, styling will vary quite a bit.
                    </p>
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
    `import React, {useState} from 'react';
import Accordion from "MOPkit/Accordion";

const AccordionExample = (props) => {
    
    const [isOpen, setOpen] = useState(false);

    return (
         <Accordion
            wrapperClassName="demo-accordion"
            scrollTo={false}
            contentId="the-content"
            header={
                <div>
                    <p>This is a sample accordion.
                        <span role="button" className="faux-link"> Click to expand/collapse the hidden content</span>.
                    </p>
                    <span>
                        <i className="fal fa-angle-down"></i>
                    </span>
                </div>
                }>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolore eius enim et fuga iure libero
                  molestiae ratione voluptates voluptatum. Distinctio doloremque dolorum illum laborum sed vero vitae
                  voluptates voluptatibus!
                </p>
        </Accordion>
    );
}

export default AccordionExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Accordion
                            wrapperClassName="demo-accordion"
                            scrollTo={false}
                            contentId="the-content"
                            header={
                                <div>
                                    <p>This is a sample accordion.
                                        <span role="button" className="faux-link"> Click to expand/collapse the hidden content</span>.
                                    </p>
                                    <span>
                                        <i className="fal fa-angle-down"></i>
                                    </span>
                                </div>
                            }>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolore eius enim et fuga iure libero
                                molestiae ratione voluptates voluptatum. Distinctio doloremque dolorum illum laborum sed vero vitae
                                voluptates voluptatibus!
                            </p>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>contentId <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id for the accordion content. This can be used alongside the aria-controls accessibility attribute.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>isOpen <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true when the accordion content should be expanded / visible. Use state/props and localized methods to manage this (see above).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>header <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The header of the accordion. This section is always visible and is contained in the accordion wrapper. Inspect the example above for markup details.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>scrollTo <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the window should scroll to the accordion wrapper</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>wrapperClassName <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the accordion wrapper. Can be multiple classes separated by a space.</p>
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

export default AccordionExample;