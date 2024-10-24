import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function HeaderExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Hint');
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

        html = html.replace(/"MOPkit\/Header"/g, '<span class="string">"MOPkit/Header"</span>');

        html = html.replace(/HeaderExample;/g, '<span class="string">HeaderExample;</span>');
        html = html.replace(/HeaderExample/g, '<span class="function">HeaderExample</span>');

        //Specific
        html = html.replace(/setOpen/g, '<span class="function">setOpen</span>');
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"React Components"/g, '<span class="string">"React Components"</span>');
        html = html.replace(/"header-username"/g, '<span class="string">"header-username"</span>');
        html = html.replace(/"fal fa-user"/g, '<span class="string">"fal fa-user"</span>');
        html = html.replace(/"employee-image"/g, '<span class="string">"employee-image"</span>');
        html = html.replace(/"users-first-name"/g, '<span class="string">"users-first-name"</span>');
        html = html.replace(/"support"/g, '<span class="string">"support"</span>');
        html = html.replace(/"pg-modal-open-modal"/g, '<span class="string">"pg-modal-open-modal"</span>');
        html = html.replace(/"support-modal"/g, '<span class="string">"support-modal"</span>');
        html = html.replace(/"fal fa-question-circle"/g, '<span class="string">"fal fa-question-circle"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Header</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Hint <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>The header markup for all our apps is essentially the same. The main difference is usually the right menu items. These can be set by including an un-ordered list as the Header component's <span className="highlight">children</span>.</p>
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
import Header from "MOPkit/Header";

const HeaderExample = (props) => {
   
    return (
        <Header
            className=""
            homeUrl="/"
            left={false}
            logo=""
            qa={false}
            title="React Components">
                <ul>
                    <li className="header-username">
                        <span>
                            <i className="fal fa-user"></i>
                            <div className="employee-image"></div>
                            <em id="users-first-name">User</em>
                        </span>
                    </li>
                    <li className="support">
                        <span className="pg-modal-open-modal" data-modal="support-modal">
                            <i className="fal fa-question-circle"></i>
                            <em>Support</em>
                        </span>
                    </li>
                </ul>
            </Header>
    );
}

export default HeaderExample;
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
                <div className="props-grid">

                    <div className="prop">
                        <div className="subheading"><h6>bgImage <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The path to the image to be used as background on the header. will use a paralax effect.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>className <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The class(es) to be given to the header. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>extended <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Makes the header higher to allow a different way of visualizing the page like overlapping content over the header. Defaults to true if bgImage is passed in></p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>fixed <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Adds the 'fixed' class so the header remains at the top of the page as we scroll.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>homeUrl <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The url that the user should be redirected to when they click the app title / logo.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"/"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>left <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>You have the option to replace the default markup with markup that is your own (such as a {'<Link>'} component. Is is important that the app still looks the same however, so please make sure to use the same internal markup. If the left prop is passed, the following props will be ignored: logo|title|homeUrl</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>logo <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The image source/path for the app logo. By default, a home icon will be displayed if nothing is set.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"{'<i className="fal fa-home"></i>'}"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>logo <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>The image source/path for the app logo. By default, a home icon will be displayed if nothing is set.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"{'<i className="fal fa-home"></i>'}"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>paralaxAt <span>(int)</span></h6></div>
                        <div className="text">
                            <p>The point where the header background turns blue after scrolling, only available when bgImage has been passed in.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">150</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>qa <span>(string)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the app is in QA. The test system message will appear above the header.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>title <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The title of the application. This will be placed beside the logo.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"P&G"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default HeaderExample;