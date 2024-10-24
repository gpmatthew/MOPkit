import React, { useEffect, useState } from 'react';
import DatePicker from "../components/parts/datepicker.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function DatePickerExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Footer');
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

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
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/this/g, '<span class="keyword">this</span>');

        html = html.replace(/"MOPkit\/DatePicker"/g, '<span class="string">"MOPkit/DatePicker"</span>');

        html = html.replace(/DatePickerExample;/g, '<span class="string">DatePickerExample;</span>');
        html = html.replace(/DatePickerExample/g, '<span class="function">DatePickerExample</span>');

        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/handleInput/g, '<span class="function">handleInput</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/toDate/g, '<span class="function">toDate</span>');
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/"MM-DD-YYYY"/g, '<span class="string">"MM-DD-YYYY"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleInput = (newDate) => {
        setSelectedDate(newDate);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Date Picker</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Footer <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>DatePicker uses the Material UI DatePicker and allow users to quick and easily see and select a date</p>
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
import DatePicker from "MOPkit/DatePicker";

class DatePickerExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }
    
    const handleInput = (newDate) => {
        setSelectedDate(newDate);
    };
   
    render() {
        return (
            <DatePicker
              initialDate={selectedDate}
              format="MM-DD-YYYY"
              onDateChange={handleInput}
            />
        );
    }
}

export default DatePickerExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container calendar-container">
                        <DatePicker
                            initialDate={selectedDate}
                            format="MM-DD-YYYY"
                            onDateChange={handleInput}
                        />
                    </div>
                </div>
            </div>
            <div className="props-section">
                <div className="heading"><h5>Props</h5>
                </div>
                <div className="props-grid full">

                    <div className="prop">
                        <div className="text">
                            <p>DatePicker can accept any props that Material UI DatePicker can accept</p>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default DatePickerExample;