import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function ExternalLinks() {

    return (
        <div class="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>External Links</h2>
                </div>
                <div className="content-block">
                    <h5>Help is near</h5>
                    <p>With the introduction of the Font Awesome Icon set, React, Redux, and any other related libraries, there will definitely be question about how to use the components, and what icons are available. Below is a list of helpful links and resources that will assist in new application development.</p>
                </div>
                <div className="content-block">
                    <h5>Learning React</h5>
                    <ul>
                        <li><a target="_blank" href="https://legacy.reactjs.org/docs/getting-started.html">React documentation</a></li>
                        <li><a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router documentation</a></li>
                        <li><a target="_blank" href="https://react-redux.js.org/">React Redux documentation</a></li>
                        <li><a target="_blank" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React online course</a></li>
                    </ul>
                </div>
                <div className="content-block">
                    <h5>Fonts / Icons</h5>
                    <ul>
                        <li><a target="_blank" href="https://fontawesome.com/icons?d=gallery">Font Awesome icons</a></li>
                        <li><a target="_blank" href="https://fonts.google.com/specimen/Open+Sans">Open Sans Google font</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default ExternalLinks;