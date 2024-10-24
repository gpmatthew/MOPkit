import React, { useEffect } from 'react';
import Request from "../components/parts/request.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function RequestExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Select');
    };

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

        html = html.replace(/"MOPkit"/g, '<span class="string">"MOPkit"</span>');

        html = html.replace(/RequestExample;/g, '<span class="string">RequestExample;</span>');
        html = html.replace(/RequestExample/g, '<span class="function">RequestExample</span>');

        html = html.replace(/Component/g, '<span class="function">Component</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/sendRequest/g, '<span class="function">sendRequest</span>');
        html = html.replace(/var r/g, '<span class="keyword">var r</span>');
        html = html.replace(/new/g, '<span class="keyword">new</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');

        //Specific
        html = html.replace(/"POST"/g, '<span class="function">"POST"</span>');
        html = html.replace(/'ajax\/test\.php'/g, '<span class="string">\'ajax/test.php\'</span>');
        html = html.replace(/'Accept': 'application\/json',/g, '<span class="string">\'Accept\': \'application/json\'</span>,');
        html = html.replace(/'Content-Type': 'application\/json'/g, '<span class="string">\'Content-Type\': \'application/json\'</span>');
        html = html.replace(/1/g, '<span class="value">1</span>');
        html = html.replace(/2/g, '<span class="value">2</span>');
        html = html.replace(/3/g, '<span class="value">3</span>');
        html = html.replace(/send/g, '<span class="function">send</span>');
        html = html.replace(/error/g, '<span class="function">error</span>');
        html = html.replace(/then/g, '<span class="function">then</span>');
        html = html.replace(/"Error:"/g, '<span class="string">"Error:"</span>');
        html = html.replace(/'response'/g, '<span class="string">response</span>');
        html = html.replace(/log/g, '<span class="string">log</span>');
        html = html.replace(/JSON/g, '<span class="value">JSON</span>');
        html = html.replace(/stringify/g, '<span class="function">stringify</span>');
        html = html.replace(/componentDidMount/g, '<span class="function">componentDidMount</span>');
        html = html.replace(/sendRequest/g, '<span class="function">sendRequest</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Request</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Select <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Request Component is intended to be a wrapper that allows you to easily send an ajax request and support the response and any error that may occur. There is no visual for this as it is a wrapper for an ajax call.</p>
                    <p>The underlying library we use to send the ajax request is <a target="_blank" href="https://github.com/axios/axios">Axios</a>.</p>
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
    `import React, {Component} from 'react';
import {Request} from "MOPkit";

class RequestExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            output: ''
        };
    }
    
    sendRequest() {
        var r = new Request({
            method: "POST",
            endPoint: 'ajax/test.php',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                test: 1
                ,dataPoint: 2
                ,element: 3
            }
        });
        r.send()
            .error( (err) => console.error("Error:", err) )
            .then( (response) => {
                console.log('response', response);
                this.setState({
                    output: JSON.stringify(response.data, null, '\t')
                });
            } )
    }

    componentDidMount() {
        this.sendRequest();
    }
   
    render() {
        return (
            <pre>
                {this.state.output}
            </pre>
            
        );
    }
}

export default RequestExample;
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
                        <div className="subheading"><h6>baseUrl <span>(string)</span></h6></div>
                        <div className="text">
                            <p>This would be the base URL that the request will go to - since usually it goes to the same domain as the page we're on it defaults to "/".</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"/"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>method <span>(string)</span></h6></div>
                        <div className="text">
                            <p>What Ajax method do we want to use for the submission?</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"GET"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>endPoint <span>(string)</span></h6></div>
                        <div className="text">
                            <p>This requires allows us to set the endpoint to ajax to for this request. Combines with baseUrl to get a complete url.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>headers <span>(Object)</span></h6></div>
                        <div className="text">
                            <p>Header to be sent with the request.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">"{"{ 'Accept:' 'application/json' }"}"</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>data <span>(Object)</span></h6></div>
                        <div className="text">
                            <p>Data to be sent to the backend.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">{'{ }'}</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default RequestExample;