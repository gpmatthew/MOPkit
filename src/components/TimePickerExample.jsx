import React, { useEffect, useState } from 'react';
import TimePicker from "../components/parts/timepicker.jsx";
import AngleDownIcon from "../assets/images/angle-down.svg";

function TimePickerExample({ setCurrentComponent }) {

    const handleNextClick = () => {
        setCurrentComponent('Toggle');
    };

    const [selectedDate, setSelectedTime] = useState("12:00");

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

        html = html.replace(/"MOPkit\/TimePicker"/g, '<span class="string">"MOPkit/TimePicker"</span>');

        html = html.replace(/TimePickerExample;/g, '<span class="string">TimePickerExample;</span>');
        html = html.replace(/TimePickerExample/g, '<span class="function">TimePickerExample</span>');
        html = html.replace(/Component/g, '<span class="function">Component</span>');

        //Specific
        html = html.replace(/setState/g, '<span class="function">setState</span>');
        html = html.replace(/toDate/g, '<span class="function">toDate</span>');
        html = html.replace(/handleInput/g, '<span class="function">handleInput</span>');
        html = html.replace(/render/g, '<span class="function">render</span>');
        html = html.replace(/"hh:mm a"/g, '<span class="string">"hh:mm a"</span>');
        html = html.replace(/"hh:mm a"/g, '<span class="string">"hh:mm a"</span>');

        codeBlock.innerHTML = html;
    }, []);

    const handleInput = (newTime) => {
        console.log("Selected Time:", newTime);
        setSelectedTime(newTime);
    };

    return(
        <div className="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Time Picker</h2>
                    <div className="nav">Up Next: <a onClick={handleNextClick} className="nav-link">Toggle <div className="icon"><img src={AngleDownIcon} alt=""/></div></a></div>
                </div>
                <div className="description">
                    <p>TimePicker uses the Material UI TimePicker and allow users to quick and easily see and select a date.</p>
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
import TimePicker from "MOPkit/TimePicker";

class TimePickerExample extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }
    
    const handleInput = (newTime) => {
        console.log("Selected Time:", newTime);
        setSelectedTime(newTime);
    };
   
    render() {
        return (
            <TimePicker
                value={selectedDate}
                format="hh:mm a"
                changeHandler={handleInput}
            />
        );
    }
}

export default TimePickerExample;
`}
</code>
</pre>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="heading"><h5>Example</h5></div>
                    <div className="example-container">
                        <TimePicker
                            value={selectedDate}
                            format="hh:mm a"
                            changeHandler={handleInput}
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
                            <p>TimePicker can accept any props that Material UI TimePicker can accept</p>
                        </div>
                    </div> {/* Prop */}

                </div>
            </div>
        </div>
    )

}

export default TimePickerExample;