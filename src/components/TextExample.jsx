import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function TextExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Text Area');
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

        html = html.replace(/"MOPkit\/Accordion"/g, '<span class="string">"MOPkit/Accordion"</span>');

        html = html.replace(/TextExample;/g, '<span class="string">TextExample;</span>');
        html = html.replace(/TextExample/g, '<span class="function">TextExample</span>');

        //Specific
        html = html.replace(/ 1/g, '<span class="keyword"> 1</span>');
        html = html.replace(/ 2/g, '<span class="keyword"> 2</span>');
        html = html.replace(/ 3/g, '<span class="keyword"> 3</span>');
        html = html.replace(/ 4/g, '<span class="keyword"> 4</span>');
        html = html.replace(/"#"/g, '<span class="string">"#"</span>');
        html = html.replace(/"faux-link"/g, '<span class="string">"faux-link"</span>');
        html = html.replace(/"This has a tooltip"/g, '<span class="string">"This has a tooltip"</span>');
        html = html.replace(/"has-padding"/g, '<span class="string">"has-padding"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Text</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Text Area <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>With the newly established styling, the font we are now using is Montserrat. Paired with a larger font size, this will create a more readable UI. While the below examples are not components, but rather default HTML tags, it is important to showcase the new styling.</p>
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

const TextExample = (props) => {
   
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos dolores, 
                et ex illum ipsum libero magni nam nemo nesciunt, nobis odit omnis perferendis 
                perspiciatis praesentium provident quam quia ratione.
            </p>
            <p><a href="#">Standard link</a> or <span className="faux-link" tooltip="This has a tooltip">faux link</span></p>
            <ul className="has-padding">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
            </ul>
            <ol className="has-padding">
                <li>Ordered list item</li>
                <li>Ordered list item</li>
                <li>Ordered list item</li>
                <li>Ordered list item</li>
            </ol>
        </div>
    );
}

export default TextExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <div class="content-text">
                            <h1>Heading 1</h1>
                            <h2>Heading 2</h2>
                            <h3>Heading 3</h3>
                            <h4>Heading 4</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos dolores,
                                et ex illum ipsum libero magni nam nemo nesciunt, nobis odit omnis perferendis
                                perspiciatis praesentium provident quam quia ratione.
                            </p>
                            <p><a href="#">Standard link</a> or <span className="faux-link" tooltip="This has a tooltip">faux link</span></p>
                            <ul className="has-padding">
                                <li>List item 1</li>
                                <li>List item 2</li>
                                <li>List item 3</li>
                                <li>List item 4</li>
                            </ul>
                            <ol className="has-padding">
                                <li>Ordered list item</li>
                                <li>Ordered list item</li>
                                <li>Ordered list item</li>
                                <li>Ordered list item</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TextExample;