import React, { useEffect } from 'react';
import Table from "../components/parts/table.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";
import UserImg from "../assets/images/person1.jpg";

function TableExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Tabs');
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

        html = html.replace(/"MOPkit\/Table"/g, '<span class="string">"MOPkit/Table"</span>');

        html = html.replace(/TableExample;/g, '<span class="string">TableExample;</span>');
        html = html.replace(/TableExample/g, '<span class="function">TableExample</span>');

        //Specific
        html = html.replace(/""/g, '<span class="string">""</span>');
        html = html.replace(/'#'/g, '<span class="string">\'#\'</span>');
        html = html.replace(/"number"/g, '<span class="string">"number"</span>');
        html = html.replace(/'Name'/g, '<span class="string">\'Name\'</span>');
        // html = html.replace(/"string"/g, '<span class="string">"string"</span>');
        html = html.replace(/'Shortname'/g, '<span class="string">\'Shortname\'</span>');
        html = html.replace(/"Shortname"/g, '<span class="string">"Shortname"</span>');
        html = html.replace(/'Tnumber'/g, '<span class="string">\'Tnumber\'</span>');
        html = html.replace(/"Tnumber"/g, '<span class="string">"Tnumber"</span>');
        html = html.replace(/"column right-aligned"/g, '<span class="string">"column right-aligned"</span>');
        html = html.replace(/'View'/g, '<span class="string">\'View\'</span>');
        html = html.replace(/"View"/g, '<span class="string">"View"</span>');
        html = html.replace(/CW9861/g, '<span class="value">CW9861</span>');
        html = html.replace(/"demo-table"/g, '<span class="string">"demo-table"</span>');
        html = html.replace(/"Vendor Code"/g, '<span class="string">"Vendor Code"</span>');
        html = html.replace(/"row"/g, '<span class="string">"row"</span>');
        html = html.replace(/"column"/g, '<span class="string">"column"</span>');
        html = html.replace(/"fal fa-arrow-circle-down"/g, '<span class="string">"fal fa-arrow-circle-down"</span>');

        html = html.replace(/@media screen and/g, '<span class="function">@media screen and</span>');
        html = html.replace(/680px/g, '<span class="function">680px</span>');
        html = html.replace(/#demo-table/g, '<span class="keyword">#demo-table</span>');
        html = html.replace(/.row/g, '<span class="keyword">.row</span>');
        html = html.replace(/.head/g, '<span class="keyword">.head</span>');
        html = html.replace(/ .column/g, '<span class="keyword"> .column</span>');
        html = html.replace(/::before/g, '<span class="keyword">::before</span>');
        html = html.replace(/:nth-child(1n + 4)/g, '<span class="keyword">:nth-child(1n + 4)</span>');
        html = html.replace(/nth-child/g, '<span class="keyword">nth-child</span>');
        html = html.replace(/:nth-child(2)/g, '<span class="keyword">:nth-child(2)</span>');
        html = html.replace(/:nth-child(3)/g, '<span class="keyword">:nth-child(3)</span>');
        html = html.replace(/:nth-child(4)/g, '<span class="keyword">:nth-child(4)</span>');
        html = html.replace(/:nth-child(5)/g, '<span class="keyword">:nth-child(5)</span>');

        html = html.replace(/flex-container/g, '<span class="function">flex-container</span>');
        html = html.replace(/align-items/g, '<span class="function">align-items</span>');
        html = html.replace(/@greyBorder/g, '<span class="function">@greyBorder</span>');
        html = html.replace(/attr/g, '<span class="function">attr</span>');
        html = html.replace(/@greyMed/g, '<span class="function">@greyMed</span>');
        // html = html.replace(/flex/g, '<span class="function">flex</span>');
        html = html.replace(/flex-order/g, '<span class="function">flex-order</span>');
        html = html.replace(/@blueMed/g, '<span class="function">@blueMed</span>');

        html = html.replace(/none/g, '<span class="css-value">none</span>');
        html = html.replace(/row, wrap/g, '<span class="css-value">row, wrap</span>');
        html = html.replace(/flex-start/g, '<span class="css-value">flex-start</span>');
        html = html.replace(/solid 1px/g, '<span class="css-value">solid 1px</span>');
        html = html.replace(/4px/g, '<span class="css-value">4px</span>');
        html = html.replace(/none/g, '<span class="css-value">none</span>');
        html = html.replace(/mobileTitle/g, '<span class="css-value">mobileTitle</span>');
        html = html.replace(/block/g, '<span class="css-value">block</span>');
        html = html.replace(/5px/g, '<span class="css-value">5px</span>');
        html = html.replace(/10px/g, '<span class="css-value">10px</span>');
        html = html.replace(/0 1 auto/g, '<span class="css-value">0 1 auto</span>');
        html = html.replace(/50%/g, '<span class="css-value">50%</span>');
        html = html.replace(/100%/g, '<span class="css-value">100%</span>');
        html = html.replace(/left/g, '<span class="css-value">left</span>');
        html = html.replace(/0/g, '<span class="css-value">0</span>');
        html = html.replace(/18px/g, '<span class="css-value">18px</span>');
        html = html.replace(/pointer/g, '<span class="css-value">pointer</span>');

        codeBlock.innerHTML = html;
    }, []);

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Table</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Tabs <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Most of our applications will have information displayed in a table. To help with usability, the default table element is not used, but rather divs with custom classes. The data depicts when the layout should change for smaller screens, so you will need to do this manually (see below).</p>
                    <p>When changing the layout for smaller screens, the header should become hidden and instead each column gets it's own label. This is set by a custom attribute in the row (e.g. <span className="highlight">mobileTitle</span>) and the use of CSS pseudo elements.
                        When there is no longer room for the data, use a media query and stack the columns accordingly (33%, 50% or 100%). Try shrinking the browser to see the how the below example table responds.</p>
                    <p>Note: The children props is where rows should be held and are placed inside of the <span className="highlight">table-body</span> container.</p>
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
    `HTML
import React from 'react';
import Table from "MOPkit/Table";

const TableExample = (props) => {

    return (
        <Table
            className=""
            foot={false}
            head={[
                {
                    className: "",
                    text: '#', 
                    sort: {
                        type:"number", 
                    }
                },
                {
                    className: "",
                    text: 'Name', 
                    sort: {
                        sortInit: true, 
                        type:"string", 
                    }
                },
                {
                    className: "",
                    text: 'Shortname', 
                    sort: {
                        type:"string", 
                    }
                },
                {
                    className: "",
                    text: 'Tnumber'
                },
                {
                    className: "right-aligned",
                    text: 'View'
                }
            ]}
            id="demo-table">
                <div className="row">
                    <div className="column" mobileTitle="#">1</div>
                    <div className="column" mobileTitle="Vendor Code">Joshua Sanger</div>
                    <div className="column" mobileTitle="Shortname">sanger.j</div>
                    <div className="column" mobileTitle="Tnumber">CW9861</div>
                    <div className="column right-aligned" mobileTitle="View"><i className="fal fa-arrow-circle-down"></i></div>
                </div>
        </Table>
    );
}

export default TableExample;

`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container table-example-container">
                        <Table
                            className=""
                            foot={false}
                            head={[
                                { className: "", text: 'Site Name', sort: { type: "number" } },
                                { className: "", text: 'Category', sort: { sortInit: true, type: "string" } },
                                { className: "lg", text: 'Regional Leader' },
                                { className: "right-aligned", text: 'Risk Level' },
                            ]}
                            id="demo-table"
                            >
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">Bukit Batok</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Lelon Frazier</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level high">
                                        <i className="fal fa-exclamation-circle"></i> High Risk
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">Chandigarh</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Lelon Frazier</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level high">
                                        <i className="fal fa-exclamation-circle"></i> High Risk
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">Chandigarh</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Lelon Frazier</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level medium">
                                        <i className="fas fa-exclamation-triangle"></i> Med Risk
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">Guangzhou</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Lelon Frazier</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level high">
                                        <i className="fal fa-exclamation-circle"></i> High Risk
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">Huizhou</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Lelon Frazier</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level low">
                                        <i className="far fa-shield-check"></i> Low Risk
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column name" mobileTitle="Site Name">São Paulo</div>
                                <div className="column" mobileTitle="Category">Grooming</div>
                                <div className="column name lg" mobileTitle="Regional Leader">
                                    <div className="user-pic">
                                        <img src={UserImg} alt="User"/>
                                        <span>Roberto Roa Torres</span>
                                    </div>
                                </div>
                                <div className="column right-aligned" mobileTitle="Risk Level">
                                    <div className="risk-level high">
                                        <i className="fal fa-exclamation-circle"></i> High Risk
                                    </div>
                                </div>
                            </div>
                        </Table>
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
                            <p>The class(es) to be given to the table. Can be multiple classes separated by a space.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>columnCount <span>(string)</span></h6></div>
                        <div className="text">
                            <p>If you want the table to show the columns at an equal width then passing in the number of columns will do that out of the box.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>curPage <span>(int)</span></h6></div>
                        <div className="text">
                            <p>If you want to start the table on a page that is not the first page (index 0) pass in the index of the page you would like to see (ie second page would be index 1 and so on). Requires allowPagination to be true.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>data <span>(Object)</span></h6></div>
                        <div className="text">
                            <p>This is the data that will be passed to the backend when using backend paging. to be used in conjuction with the endPoint prop.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">{'{ }'}</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>endPoint <span>(string)</span></h6></div>
                        <div className="text">
                            <p>When set this enables backend paging and uses the Request component to query the backend for new pages and sorting if sorting is enabled.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>foot <span>(jsx)</span></h6></div>
                        <div className="text">
                            <p>If included, a row will be inserted in the table, but after the <span className="highlight">table-body</span>.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>head <span>(array)</span></h6></div>
                        <div className="text">
                            <p>An array of objects used to create the columns in the table head. The table head is not required, but it recommended to be included. Each column has 3 properties:</p>
                            <ul>
                                <li><strong>className</strong> (string) The class(es) to be given to the column. Can be multiple classes separated by a space.</li>
                                <li><strong>text</strong> (string) The text that the user will see.</li>
                                <li><strong>sort</strong> (Object) Optional instructions on how to sort this column which includes 3 properties
                                    <ul>
                                        <li><strong>sortInit</strong> (boolean) Optional but if set to true it tells the table that it should be sorted on this column initially</li>
                                        <li><strong>type</strong> (string) this property defaults to string but can be set to any of "date", "number" or "string"</li>
                                        <li><strong>column</strong> (string) this defines the column name to sort on when sorting in the backend or if we change how we do the front end sort by passing in the sortHandler prop</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">false</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>id <span>(string)</span></h6></div>
                        <div className="text">
                            <p>The id to be given to the table.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">""</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                    <div className="prop">
                        <div className="subheading"><h6>rowsPerPage <span>(int)</span></h6></div>
                        <div className="text">
                            <p>Allows you to set the number of rows shown per page. 0 means All (ie no paging). Requires allowPagination to be true.</p>
                            <div className="row">
                                <div className="col">Default:</div>
                                <div className="col value">0</div>
                            </div>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default TableExample;