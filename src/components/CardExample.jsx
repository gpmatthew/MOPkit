import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function CardExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Checkbox');
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

        html = html.replace(/"MOPkit\/Card"/g, '<span class="string">"MOPkit/Card"</span>');

        html = html.replace(/CardExample;/g, '<span class="string">CardExample;</span>');
        html = html.replace(/CardExample/g, '<span class="function">CardExample</span>');

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
                    <h2>Card</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Checkbox <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Cards are used to group related content together and to bring the content from the background to the foreground. Cards will always take up 100% of their parent container and are meant to be used as the primary content wrapper. Add the class <span className="highlight">padding-20</span> to add padding to the card.</p>
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
    `import React, from 'react';
import Button from "MOPkit/Card";

const CardExample = (props) => {
    return (
        <Card
            className="the-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi eum, 
                    fugiat natus possimus suscipit vitae! A accusantium debitis dolore dolores est id. 
                </p>
        </Card>
    );
}

export default CardExample;
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
                            <p>The class(es) to be given to the card. Can be multiple classes separated by a space.</p>
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

export default CardExample;