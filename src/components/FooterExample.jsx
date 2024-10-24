import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function FooterExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Header');
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

        html = html.replace(/"MOPkit\/Footer"/g, '<span class="string">"MOPkit/Footer"</span>');

        html = html.replace(/FooterExample;/g, '<span class="string">FooterExample;</span>');
        html = html.replace(/FooterExample/g, '<span class="function">FooterExample</span>');

        //Specific
        html = html.replace(/setOpen/g, '<span class="function">setOpen</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Footer</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Header <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>This component is meant for internal facing applications only (which most of our applications are). A custom footer will need to be made for supplier facing, as there will be extra info / links added as needed.</p>
                </div>
            </div>
            <div className="example-section">
                <div className="col full">
                    <div className="heading"><h5>Component</h5></div>
                    <div className="visual-section">
                        <div className="visual">
<pre>
<code id="code-block">
{
    `import React from 'react';
import Footer from "MOPkit/Footer";

const FooterExample = (props) => {
    return (
        <Footer className="" />
    );
}

export default FooterExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid full">

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the footer. Can be multiple classes separated by a space.</p>
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

export default FooterExample;