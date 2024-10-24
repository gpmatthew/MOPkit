import React, {useEffect, useState} from 'react';
import Calendar from "../components/parts/calendar.jsx";
import CardExample from "../components/CardExample";
import AngleDownIcon from "../assets/images/angle-down.svg";

function CalendarExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Card');
    };

    useEffect(() => {
        const codeBlock = document.getElementById('code-block');
        let html = codeBlock.innerHTML;

        // Add span tags around specific keywords
        //Defaults
        html = html.replace(/import/g, '<span class="keyword">import</span>');
        html = html.replace(/from/g, '<span class="keyword">from</span>');
        html = html.replace(/'react'/g, '<span class="string">"react"</span>');
        html = html.replace(/useState/g, '<span class="function">setState</span>');
        html = html.replace(/useState/g, '<span class="function">toDate</span>');
        html = html.replace(/false/g, '<span class="value">false</span>');
        html = html.replace(/true/g, '<span class="value">true</span>');
        html = html.replace(/(?<=\s)=|=(?=\s)/g, '<span class="operator">=</span>');
        html = html.replace(/(?<=\s)!|!(?=\s)/g, '<span class="operator">!</span>');
        html = html.replace(/return/g, '<span class="keyword">return</span>');
        html = html.replace(/export default/g, '<span class="keyword">export default</span>');
        html = html.replace(/this/g, '<span class="keyword">this</span>');
        html = html.replace(/super/g, '<span class="keyword">super</span>');

        html = html.replace(/"MOPkit\/Calendar"/g, '<span class="string">"MOPkit/Calendar"</span>');

        html = html.replace(/CalendarExample;/g, '<span class="string">CalendarExample;</span>');
        html = html.replace(/CalendarExample/g, '<span class="function">CalendarExample</span>');
        html = html.replace(/CalendarExample/g, '<span class="function">CalendarExample</span>');

        //Specific
        html = html.replace(/Component/g, '<span class="function">Component</span>');
        html = html.replace(/constructor/g, '<span class="function">constructor</span>');
        html = html.replace(/handleDateChange/g, '<span class="function">handleDateChange</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/"green"/g, '<span class="string">"green"</span>');
        html = html.replace(/"I only appear for disabled buttons"/g, '<span class="string">"I only appear for disabled buttons"</span>');
        html = html.replace(/"button"/g, '<span class="string">"button"</span>');
        html = html.replace(/"fal fa-check"/g, '<span class="string">"fal fa-check"</span>');
        html = html.replace(/newDate/g, '<span class="default">newDate</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleDateChange = (newDate) => {
        console.log("Selected date:", newDate);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Calendar</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Card <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>Calendar uses the Material UI Calendar and allow users to quick and easily see and select a date</p>
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
import Calendar from "MOPkit/Calendar";

class CalendarExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }
    
    const handleDateChange = (newDate) => {
        console.log("Selected date:", newDate);
    };
   
    render() {
        return (
            <Calendar
              initialDate={new Date()}
              onDateChange={handleDateChange}
            />
        );
    }
}

export default CalendarExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container calendar-container">
                        <Calendar
                            initialDate={new Date()}
                            onDateChange={handleDateChange}
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
                            <p>Calendar can accept any props that Material UI Calendar can accept.</p>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default CalendarExample;