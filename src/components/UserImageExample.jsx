import React, { useEffect } from 'react';
import UserImage from "../components/parts/userImage.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function UserImageExample() {

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

        html = html.replace(/"MOPkit\/UserImage"/g, '<span class="string">"MOPkit/UserImage"</span>');

        html = html.replace(/UserImageExample;/g, '<span class="string">UserImageExample;</span>');
        html = html.replace(/UserImageExample/g, '<span class="function">UserImageExample</span>');

        //Specific
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/"Ulf Westhoven"/g, '<span class="string">"Ulf Westhoven"</span>');
        html = html.replace(/"large"/g, '<span class="string">"large"</span>');
        html = html.replace(/"AX4715"/g, '<span class="string">"AX4715"</span>');
        html = html.replace(/"U"/g, '<span class="string">"U"</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>User Image</h2>
                </div>
                <div className="description">
                    <p>There are many different use cases for the UserImage component: the header, a contact modal, a user in a table row, etc. By default, a UserImage will be 80px X 80px (large size).</p>
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
    `import React 'react';
import UserImage from "MOPkit/UserImage";

const UserImageExample = (props) => {

    return (
        <UserImage
            className=""
            icon={false}
            symbol="U"
            id=""
            name="Large"
            noBackground={false}
            size="large"
            suppressWarning={false}
            tnumber="" />
    );
}

export default UserImageExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container user-image-container">
                        <UserImage
                            className=""
                            icon={false}
                            symbol="U"
                            id=""
                            name="Large"
                            noBackground={false}
                            size="large"
                            suppressWarning={false}
                            tnumber="" />
                        <UserImage
                            className=""
                            icon={false}
                            symbol="J"
                            id=""
                            name="Medium"
                            noBackground={false}
                            size="medium"
                            suppressWarning={false}
                            tnumber="" />
                        <UserImage
                            className=""
                            icon={false}
                            symbol="D"
                            id=""
                            name="No Image"
                            noBackground={false}
                            size="small"
                            suppressWarning={false}
                            tnumber="" />
                        <UserImage
                            className=""
                            icon={true}
                            id=""
                            name="Icon"
                            noBackground={false}
                            size="small"
                            suppressWarning={false}
                            tnumber="" />
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
                            <p>The class(es) to be given to the .user-image-wrapper. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>icon <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if the User Image should have an icon instead of the user's name's first initial.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the User Image.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>name <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The user's first name. Hover over the User Image and the name will show up.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>size <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The size of the User Image. Possible values are: <span className="highlight">"small|med|large"</span>. Only one size can be applied.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"med"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>suppressWarning <span>(boolean)</span></h6></div>
                        <div className="text">
                            <p>Set to true if there is no desire to see warnings in the console.</p>
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

export default UserImageExample;