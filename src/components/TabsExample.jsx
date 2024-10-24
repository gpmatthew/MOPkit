import React, { useEffect } from 'react';
import Tabs from "../components/parts/tabs.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function TabsExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Text');
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

        html = html.replace(/"MOPkit\/Tabs"/g, '<span class="string">"MOPkit/Tabs"</span>');

        html = html.replace(/TabsExample;/g, '<span class="string">TabsExample;</span>');
        html = html.replace(/TabsExample/g, '<span class="function">TabsExample</span>');

        //Specific
        html = html.replace(/log/g, '<span class="function">log</span>');
        html = html.replace(/'Active tab index is now'/g, '<span class="string">\'Active tab index is now\'</span>');
        html = html.replace(/'Current tab index is'/g, '<span class="string">\'Current tab index is\'</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/'Clicked'/g, '<span class="string">\'Clicked\'</span>');
        html = html.replace(/"padding-20"/g, '<span class="string">"padding-20"</span>');
        html = html.replace(/'First tab'/g, '<span class="string">\'First tab\'</span>');
        html = html.replace(/'Second tab'/g, '<span class="string">\'Second tab\'</span>');
        html = html.replace(/'Third tab'/g, '<span class="string">\'Third tab\'</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Tabs</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Text <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Tabs are a great group content into digestible chunks for the user. Whether it's search methods, different content, or page information, tabs can be used in any situation deemed fit. Using a media query, the tabs should stack vertically on smaller devices. This is up to the developer to decide when that is best.</p>
                    <p>The tab titles and content are set in the <span className="highlight">tabs</span> property. If this property is not included, an error will be thrown.</p>
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
import Tabs from "MOPkit/Tabs";

const TabsExample = (props) => {
   
    return (
        <Tabs
            afterChange={(prev, current) => console.log('Active tab index is now ' + current)}
            beforeChange={(current, next) => console.log('Current tab index is ' + current)}
            className=""
            id=""
            noTabBorder={false}
            onClick={console.log('Clicked')}
            preventClick={false}
            tabs={[
                {
                    content: (
                        <div className="padding-20">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Aliquam architecto dignissimos dolore, est ex in iusto necessitatibus nesciunt obcaecati, 
                                optio, pariatur qui quidem vero. Id, magni similique? Consequuntur, necessitatibus soluta?
                            </p>
                        </div>
                    ),
                    default: false,
                    tabTitle: 'First tab'
                },
                {
                    content: (
                        <div className="padding-20">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Aliquam architecto dignissimos dolore, est ex in iusto necessitatibus nesciunt obcaecati, 
                                optio, pariatur qui quidem vero. Id, magni similique? Consequuntur, necessitatibus soluta?
                            </p>
                        </div>
                    ),
                    default: true,
                    tabTitle: 'Second tab'
                },
                {
                    content: (
                        <div className="padding-20">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Aliquam architecto dignissimos dolore, est ex in iusto necessitatibus nesciunt obcaecati, 
                                optio, pariatur qui quidem vero. Id, magni similique? Consequuntur, necessitatibus soluta?
                            </p>
                        </div>
                    ),
                    default: false,
                    tabTitle: 'Third tab'
                },
            ]}/>
    );
}

export default TabsExample;

`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <Tabs
                            afterChange={(prev, current) => console.log('Active tab index is now ' + current)}
                            beforeChange={(current, next) => console.log('Current tab index is ' + current)}
                            className=""
                            id="demo-tabs"
                            noTabBorder={false}
                            preventClick={false}
                            tabs={[
                                {
                                    content: (
                                        <div className="padding-20">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dignissimos dolore, est ex in iusto necessitatibus nesciunt obcaecati, optio, pariatur qui quidem vero. Id, magni similique? Consequuntur, necessitatibus soluta?</p>
                                        </div>
                                    ),
                                    default: false,
                                    tabTitle: 'First tab'
                                },
                                {
                                    content: (
                                        <div className="padding-20">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                    ),
                                    default: true,
                                    tabTitle: 'Second tab'
                                },
                                {
                                    content: (
                                        <div className="padding-20">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    ),
                                    default: false,
                                    tabTitle: 'Third tab'
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>afterChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran after the content has been changed. The callback function will return 2 parameters: prev and current (see above example).</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>beforeChange <span>(function)</span></h6></div>
                        <div className="text">
                            <p>A callback function that is ran before the content is been changed. The callback function will return 2 parameters: current, next (see above example).</p>
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
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the <span className="highlight">tabbed-content</span> wrapper. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the <span className="highlight">tabbed-content</span> wrapper.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>noTabBorder <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the tabs-wrapper should not have a bottom border.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>preventClick <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true when the user should be prevented from clicking a tab / changing content. This can be useful when submitting forms or in situations where the user must enter something. Use state/props and localized methods to manage this.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>tabs <span>(array)</span></h6></div>
                        <div className="text">
                            <p>An array of objects that will be used to build out the tabs and the corresponding content. Possible properties are:</p>
                            <ul>
                                <li><strong>content</strong> (jsx) The content that will be shown/hidden</li>
                                <li><strong>default</strong> (boolean) The default tab that should be active. If no default it set, the first tab will become default.</li>
                                <li><strong>tabTitle</strong> (string) The title that will appear in the tab that the user clicks on</li>
                            </ul>
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

export default TabsExample;