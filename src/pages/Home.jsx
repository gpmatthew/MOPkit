import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import ImageBg from "../assets/images/code-bg.jpg";
import Image1 from "../assets/images/code.jpg";
import Image2 from "../assets/images/development.jpg";
import Image3 from "../assets/images/computer.jpg";
import Image4 from "../assets/images/chart.jpg";
import InstallationIcon from "../assets/images/installation.svg";
import StartIcon from "../assets/images/start.svg";
import ToolsIcon from "../assets/images/tools.svg";
import WOW from 'wowjs';

function Home() {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <>
        <div className="main-container">

            <div className="hero-banner">
                <div className="background-image standard" style={{backgroundImage: `url(${ImageBg})`}}></div>
                <div className="hero-wrap med-wrapper">
                    <div className="hero-content">
                        <div className="heading"><h1>Find Your Design Balance with <strong>P&G</strong> & <strong>MOPkit.</strong></h1></div>
                        <div className="subheading"><h5>Transitioning from Bonzai to MOPkit for Harmonized P&G Design</h5></div>
                        <div className="search-container">
                            <input placeholder="Search Documentation" class="search-icon" type="text"/>
                        </div>
                        <div className="button-row">
                            <Link to="/component-list"><button className="blue-button"><img src={InstallationIcon} alt="Send"/> Installation</button></Link>
                            <Link to="/component-list"><button className="blue-button"><img src={StartIcon} alt="Send"/> Getting Started</button></Link>
                            <Link to="/component-list"><button className="blue-button"><img src={ToolsIcon} alt="Send"/> Design Standards</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="split-row">
                <div className="split-row-wrap med-wrapper">
                    <div className="image-container">
                        <div className="background-image standard" style={{backgroundImage: `url(${Image1})`}}></div>
                    </div>
                    <div className="content-container">
                        <div className="content">
                            <div className="heading"><h2>Trusted by Users</h2></div>
                            <div className="text">
                                <h5>Proven Excellence in 60 P&G Apps</h5>
                                <p>MOPkit, the new Bonzai, has garnered trust and admiration from users across 60 P&G applications. Its intuitive interface and seamless experience ensure user satisfaction and loyalty, making it a reliable choice for any project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="split-row right">
                <div className="split-row-wrap med-wrapper">
                    <div className="content-container">
                        <div className="content">
                            <div className="heading"><h2>Speed Up Development</h2></div>
                            <div className="text">
                                <h5>Reduce Design, Development, and Testing Time</h5>
                                <p>MOPkit slashes the time needed to design, develop, and test user interfaces by X%. Its streamlined processes and robust features accelerate project timelines, allowing teams to focus on innovation and delivering value faster.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="background-image standard" style={{backgroundImage: `url(${Image2})`}}></div>
                    </div>
                </div>
            </div>
            <div className="split-row">
                <div className="split-row-wrap med-wrapper">
                    <div className="image-container">
                        <div className="background-image standard" style={{backgroundImage: `url(${Image3})`}}></div>
                    </div>
                    <div className="content-container">
                        <div className="content">
                            <div className="heading"><h2>Boost Your Bottom Line</h2></div>
                            <div className="text">
                                <h5>Increase Productivity and Speed to Market</h5>
                                <p>With MOPkit, experience significant productivity gains and quicker deployment times. By enhancing efficiency, MOPkit drives cost savings and accelerates time-to-value, positively impacting your bottom line and overall business success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="split-row right">
                <div className="split-row-wrap med-wrapper">
                    <div className="content-container">
                        <div className="content">
                            <div className="heading"><h2>Accessibility Driven Design</h2></div>
                            <div className="text">
                                <h5>Creating Inclusive and User-Friendly Interfaces</h5>
                                <p>With these components developers can ensure that every user can enjoy a seamless experience with its 100% accessible design. By prioritizing accessibility, you can create interfaces that are not only elegant and animated but also inclusive for users with diverse needs. Start designing with accessibility at the forefront to enhance usability for everyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="background-image standard" style={{backgroundImage: `url(${Image4})`}}></div>
                    </div>
                </div>
            </div>
            <div className="cta-section">
                <div className="cta-wrap med-wrapper">
                    <div className="cta-content">
                        <div className="heading"><h3>Get Started with MOPkit</h3></div>
                        <div className="text">
                            <h5>Your Journey to a Unified UI/UX Begins Here</h5>
                            <p>Dive into our comprehensive documentation to explore all the features and tools that make MOPkit 100% accessible, more elegant, more animated, and more portable. Start creating stunning interfaces that your users will love.</p>
                        </div>
                        <Link to="/component-list"><button className="blue-button">View Documentation</button></Link>
                    </div>
                </div>
            </div>

        </div>
        </>
    );

}

export default Home;