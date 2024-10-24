import React, {useState, useEffect, useRef} from "react";
import BarsIcon from "../assets/images/bars-solid-white.svg";
import CloseIcon from "../assets/images/close-icon-white.svg";
import InstallationIcon from "../assets/images/installation-blue.svg";
import StartIcon from "../assets/images/start-blue.svg";
import ToolsIcon from "../assets/images/tools-blue.svg";
import AngleDownIcon from "../assets/images/angle-down.svg";
import ComponentsIcon from "../assets/images/components-icon.svg";
import BookIcon from "../assets/images/book-icon.svg";
import WOW from 'wowjs';

//Components
import AccordionExample from "../components/AccordionExample";
import ButtonExample from "../components/ButtonExample";
import CalendarExample from "../components/CalendarExample";
import CardExample from "../components/CardExample";
import CheckboxExample from "../components/CheckboxExample";
import DateAndTimePickerExample from "../components/DateAndTimePickerExample";
import DatePickerExample from "../components/DatePickerExample";
import FooterExample from "../components/FooterExample";
import HeaderExample from "../components/HeaderExample";
import HintExample from "../components/HintExample";
import InputExample from "../components/InputExample";
import MessageExample from "../components/MessageExample";
import ModalExample from "../components/ModalExample";
import RadioExample from "../components/RadioExample";
import RequestExample from "../components/RequestExample";
import SelectExample from "../components/SelectExample";
import TableExample from "../components/TableExample";
import TabsExample from "../components/TabsExample";
import TextAreaExample from "../components/TextAreaExample";
import TextExample from "../components/TextExample";
import TimePickerExample from "../components/TimePickerExample";
import ToggleExample from "../components/ToggleExample";
import TooltipExample from "../components/TooltipExample";
import UserImageExample from "../components/UserImageExample";
import Installation from "../components/Installation";
import ExternalLinks from "../components/ExternalLinks";



function ComponentList() {

    const [currentComponent, setCurrentComponent] = useState('Installation');

    const handleClick = (componentName) => {
        setCurrentComponent(componentName);
    };

    const components = [
        { name: 'Accordion' },
        { name: 'Button' },
        { name: 'Calendar' },
        { name: 'Card' },
        { name: 'Checkbox' },
        { name: 'Date & Time Picker' },
        { name: 'Date Picker' },
        { name: 'Footer' },
        { name: 'Header' },
        { name: 'Hint' },
        { name: 'Input' },
        { name: 'Message' },
        { name: 'Modal' },
        { name: 'Radio' },
        { name: 'Request' },
        { name: 'Select' },
        { name: 'Table' },
        { name: 'Tabs' },
        { name: 'Text' },
        { name: 'Text Area' },
        { name: 'Time Picker' },
        { name: 'Toggle' },
        { name: 'Tooltip' },
        { name: 'User Image' },
        { name: 'Installation' },
        { name: 'External Links' },
    ];

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    const [code, setCode] = useState('// Write your code here');

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    useEffect(() => {
        let clonedSidebar = null; // Initialize the cloned sidebar variable

        const handleTrigger = () => {
            const body = document.querySelector('body');
            const container = document.querySelector('.main-container');
            const originalSidebar = document.querySelector('.components-sidebar');

            body.classList.add('noscroll');

            // Remove any existing cloned sidebar
            if (clonedSidebar) {
                clonedSidebar.remove();
                clonedSidebar = null;
            }

            // Clone the sidebar element
            clonedSidebar = originalSidebar.cloneNode(true);
            clonedSidebar.classList.add('fixed');
            clonedSidebar.classList.remove('slide-out');

            // Append the cloned sidebar to the container
            container.prepend(clonedSidebar);

            window.scrollTo({
                top: 0,
            });
            initializeAccordion(clonedSidebar);

            console.log('sidebar hamburger');
        };

        const handleTriggerIcon = () => {
            const body = document.querySelector('body');
            const container = document.querySelector('.main-container');
            const originalSidebar = document.querySelector('.components-sidebar');

            body.classList.add('noscroll');

            // Remove any existing cloned sidebar
            if (clonedSidebar) {
                clonedSidebar.remove();
                clonedSidebar = null;
            }

            // Clone the sidebar element
            clonedSidebar = originalSidebar.cloneNode(true);
            clonedSidebar.classList.add('fixed');
            clonedSidebar.classList.remove('slide-out');

            // Append the cloned sidebar to the container
            container.prepend(clonedSidebar);

            window.scrollTo({
                top: 0,
            });
            initializeAccordion(clonedSidebar);

            console.log('sidebar icon');
        };

        // Event listeners setup
        const trigger = document.querySelector('.components-trigger');
        const triggerIcon = document.querySelector('.components-sidebar .mobile-icon');
        const close = document.querySelector('.components-sidebar .close');
        const overlay = document.querySelector('.components-sidebar .overlay');

        trigger.addEventListener('click', handleTrigger);
        triggerIcon.addEventListener('click', handleTriggerIcon);
        document.addEventListener('click', function(e) {
            const target = e.target.closest(".close");
            if(target) {
                console.log('close');

                const body = document.querySelector('body');
                body.classList.remove('noscroll');
                clonedSidebar.classList.add('slide-out');

            }
        });
        document.addEventListener('click', function(e) {
            const target = e.target.closest(".overlay");
            if(target) {
                console.log('close');

                const body = document.querySelector('body');
                body.classList.remove('noscroll');
                clonedSidebar.classList.add('slide-out');

            }
        });

        // Clean-up: Remove event listeners when component unmounts
        return () => {
            trigger.removeEventListener('click', handleTrigger);
            triggerIcon.removeEventListener('click', handleTriggerIcon);

            // Clean up cloned sidebar if it exists
            if (clonedSidebar) {
                clonedSidebar.remove();
                clonedSidebar = null;
            }
        };
    }, []);

    const accordion = function() {
        let triggerComponents = document.querySelector('.sidebar-list-section.components .heading');
        let itemsComponents = document.querySelectorAll('.sidebar-list-section .list-items .list-item');

        triggerComponents.addEventListener('click', function() {
            triggerComponents.parentNode.classList.toggle('active');
        });

        console.log(currentComponent);

        itemsComponents.forEach(itemComponent => {
            itemComponent.addEventListener('click', function() {
                itemsComponents.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                console.log('click');
            });
        });

    }

    const initializeAccordion = (sidebar) => {
        const triggerComponents = sidebar.querySelector('.sidebar-list-section.components .heading');
        const itemsComponents = sidebar.querySelectorAll('.sidebar-list-section .list-items .list-item');

        triggerComponents.addEventListener('click', function() {
            triggerComponents.parentNode.classList.toggle('active');
        });

        itemsComponents.forEach(itemComponent => {
            itemComponent.addEventListener('click', function() {
                itemsComponents.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                console.log('click');
            });
        });

        // Add click listeners for sidebar links
        const sidebarLinks = sidebar.querySelectorAll('.list-item');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                const componentName = this.innerText;
                setCurrentComponent(componentName);
            });
        });
    };

    return (
      <div className="main-container">

          <div className="components-layout">
              <div className="components-sidebar">
                  <div className="overlay" ></div>
                  <div className="sidebar-wrap">
                      <div className="close">
                          <img src={CloseIcon} />
                      </div>
                      <div className="components-trigger" >
                          <img src={BarsIcon} alt="Send"/>
                      </div>
                      <div className="sidebar-list-section">
                          <div className="heading"><h6>Introduction</h6></div>
                          <div className="list-items">
                              {/*<div className="list-item"><img src={InstallationIcon} alt="Send"/> <div className="text">Installation</div></div>*/}
                              <div className="list-item active" onClick={() => setCurrentComponent('Installation')}>
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14 9.5C15.0938 9.5 16 10.4062 16 11.5V14C16 15.125 15.0938 16 14 16H2C0.875 16 0 15.125 0 14V11.5C0 10.4062 0.875 9.5 2 9.5H3.65625L5.15625 11H2C1.71875 11 1.5 11.25 1.5 11.5V14C1.5 14.2812 1.71875 14.5 2 14.5H14C14.25 14.5 14.5 14.2812 14.5 14V11.5C14.5 11.25 14.25 11 14 11H10.8125L12.3125 9.5H14ZM13.5 12.75C13.5 13.1875 13.1562 13.5 12.75 13.5C12.3125 13.5 12 13.1875 12 12.75C12 12.3438 12.3125 12 12.75 12C13.1562 12 13.5 12.3438 13.5 12.75ZM7.46875 11.5312L3.1875 7.28125C2.875 7 2.875 6.53125 3.1875 6.21875C3.46875 5.9375 3.9375 5.9375 4.25 6.21875L7.25 9.21875V0.75C7.25 0.34375 7.5625 0 8 0C8.40625 0 8.75 0.34375 8.75 0.75V9.21875L11.7188 6.25C12 5.9375 12.4688 5.9375 12.75 6.25C13.0625 6.53125 13.0625 7 12.75 7.28125L8.5 11.5312C8.375 11.6875 8.1875 11.75 8 11.75C7.78125 11.75 7.59375 11.6875 7.46875 11.5312Z" fill="#003DAF"/>
                                  </svg>
                                  <div className="text">Installation</div>
                              </div>
                              <div className="list-item">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.75 8.25C8.75 8.6875 8.40625 9 8 9C7.5625 9 7.25 8.6875 7.25 8.25V0.75C7.25 0.34375 7.5625 0 8 0C8.40625 0 8.75 0.34375 8.75 0.75V8.25ZM1.75 8.1875C1.75 11.5 4.40625 14.1875 7.75 14.1875C11.0625 14.1875 13.75 11.5 13.75 8.1875C13.75 6.21875 12.7812 4.46875 11.2812 3.375C10.9688 3.125 10.875 2.65625 11.125 2.3125C11.375 2 11.8438 1.90625 12.1875 2.15625C14.0312 3.53125 15.25 5.71875 15.25 8.1875C15.25 12.3438 11.875 15.6875 7.75 15.6875C3.59375 15.6875 0.25 12.3438 0.25 8.1875C0.25 5.71875 1.4375 3.53125 3.28125 2.15625C3.625 1.90625 4.09375 2 4.34375 2.3125C4.59375 2.65625 4.5 3.125 4.1875 3.375C2.6875 4.46875 1.71875 6.21875 1.71875 8.1875H1.75Z" fill="#003DAF"/>
                                  </svg>
                                  <div className="text">Getting Started</div>
                              </div>
                              <div className="list-item">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.125 11.5938C16.9062 12.375 16.9062 13.6562 16.125 14.4375L14.4062 16.1562C13.625 16.9375 12.3438 16.9375 11.5625 16.1562L9.53125 14.125L10.5938 13.0625L12.625 15.0938C12.8125 15.2812 13.1562 15.2812 13.3438 15.0938L15.0625 13.375C15.25 13.1875 15.25 12.8438 15.0625 12.6562L14.5625 12.1562L13.8438 12.875C13.6562 13.0625 13.3125 13.0625 13.125 12.875C12.9375 12.6875 12.9375 12.3438 13.125 12.1562L13.8438 11.4375L13.0312 10.625L14.0938 9.5625L16.125 11.5938ZM3.875 8.46875L1.84375 6.4375C1.0625 5.65625 1.0625 4.375 1.84375 3.59375L3.5625 1.875C4.34375 1.09375 5.625 1.09375 6.40625 1.875L8.4375 3.90625L7.375 4.96875L6.5625 4.15625L5.84375 4.875C5.65625 5.0625 5.3125 5.0625 5.125 4.875C4.9375 4.6875 4.9375 4.34375 5.125 4.15625L5.84375 3.4375L5.34375 2.9375C5.15625 2.75 4.8125 2.75 4.625 2.9375L2.90625 4.65625C2.71875 4.84375 2.71875 5.1875 2.90625 5.375L4.9375 7.40625L3.875 8.46875ZM2.8125 11.125L12.3125 1.625C13.0938 0.84375 14.375 0.84375 15.1562 1.625L16.375 2.84375C16.4688 2.9375 16.5625 3.0625 16.625 3.15625C17.1562 3.9375 17.0625 5 16.375 5.6875L6.875 15.1875C6.84375 15.2188 6.78125 15.25 6.75 15.3125C6.4375 15.5625 6.09375 15.75 5.71875 15.875L1.9375 16.9688C1.6875 17.0625 1.40625 17 1.21875 16.7812C1 16.5938 0.9375 16.3125 1 16.0625L2.125 12.2812C2.25 11.8438 2.5 11.4375 2.8125 11.125ZM3.5625 12.7188L2.84375 15.1562L5.28125 14.4375C5.46875 14.375 5.65625 14.2812 5.8125 14.125L12.9688 6.96875L11 5.03125L3.875 12.1875C3.84375 12.1875 3.84375 12.2188 3.8125 12.25C3.6875 12.375 3.625 12.5312 3.5625 12.7188Z" fill="#003DAF"/>
                                  </svg>
                                  <div className="text">Design Standards</div>
                              </div>
                          </div>
                      </div>
                      <div className="sidebar-list-section components active" ref={accordion}>
                          <div className="heading"><h6>Components</h6><div className="icon"><img src={AngleDownIcon} alt=""/></div></div>
                          <div className="list-items mobile-hide">
                              <div className="list-item mobile-icon">
                                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.375 0.75C7.89583 0.776042 8.33854 0.958333 8.70312 1.29688C9.04167 1.66146 9.22396 2.10417 9.25 2.625V7C9.22396 7.52083 9.04167 7.96354 8.70312 8.32812C8.33854 8.66667 7.89583 8.84896 7.375 8.875H2.375C1.85417 8.84896 1.41146 8.66667 1.04688 8.32812C0.708333 7.96354 0.526042 7.52083 0.5 7V2.625C0.526042 2.10417 0.708333 1.66146 1.04688 1.29688C1.41146 0.958333 1.85417 0.776042 2.375 0.75H7.375ZM7.375 2.625H2.375V7H7.375V2.625ZM7.375 10.125C7.89583 10.151 8.33854 10.3333 8.70312 10.6719C9.04167 11.0365 9.22396 11.4792 9.25 12V16.375C9.22396 16.8958 9.04167 17.3385 8.70312 17.7031C8.33854 18.0417 7.89583 18.224 7.375 18.25H2.375C1.85417 18.224 1.41146 18.0417 1.04688 17.7031C0.708333 17.3385 0.526042 16.8958 0.5 16.375V12C0.526042 11.4792 0.708333 11.0365 1.04688 10.6719C1.41146 10.3333 1.85417 10.151 2.375 10.125H7.375ZM7.375 12H2.375V16.375H7.375V12ZM10.5 2.625C10.526 2.10417 10.7083 1.66146 11.0469 1.29688C11.4115 0.958333 11.8542 0.776042 12.375 0.75H18.625C19.1458 0.776042 19.5885 0.958333 19.9531 1.29688C20.2917 1.66146 20.474 2.10417 20.5 2.625V3.875C20.474 4.39583 20.2917 4.83854 19.9531 5.20312C19.5885 5.54167 19.1458 5.72396 18.625 5.75H12.375C11.8542 5.72396 11.4115 5.54167 11.0469 5.20312C10.7083 4.83854 10.526 4.39583 10.5 3.875V2.625ZM12.375 3.875H18.625V2.625H12.375V3.875ZM18.625 7C19.1458 7.02604 19.5885 7.20833 19.9531 7.54688C20.2917 7.91146 20.474 8.35417 20.5 8.875V10.125C20.474 10.6458 20.2917 11.0885 19.9531 11.4531C19.5885 11.7917 19.1458 11.974 18.625 12H12.375C11.8542 11.974 11.4115 11.7917 11.0469 11.4531C10.7083 11.0885 10.526 10.6458 10.5 10.125V8.875C10.526 8.35417 10.7083 7.91146 11.0469 7.54688C11.4115 7.20833 11.8542 7.02604 12.375 7H18.625ZM18.625 8.875H12.375V10.125H18.625V8.875ZM10.5 15.125C10.526 14.6042 10.7083 14.1615 11.0469 13.7969C11.4115 13.4583 11.8542 13.276 12.375 13.25H18.625C19.1458 13.276 19.5885 13.4583 19.9531 13.7969C20.2917 14.1615 20.474 14.6042 20.5 15.125V16.375C20.474 16.8958 20.2917 17.3385 19.9531 17.7031C19.5885 18.0417 19.1458 18.224 18.625 18.25H12.375C11.8542 18.224 11.4115 18.0417 11.0469 17.7031C10.7083 17.3385 10.526 16.8958 10.5 16.375V15.125ZM12.375 16.375H18.625V15.125H12.375V16.375Z" fill="#003DAF"/>
                                  </svg>
                              </div>
                              {components.slice(0, -2).map((component) => (
                                  <div
                                      key={component.name}
                                      className={`list-item ${currentComponent === component.name ? 'active' : ''}`}
                                      onClick={() => setCurrentComponent(component.name)}
                                  >
                                      {component.name}
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="sidebar-list-section">
                          <div className="heading"><h6>Resources</h6></div>
                          <div className="list-items">
                              <div className="list-item" onClick={() => setCurrentComponent('External Links')}>
                                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18 14.25C17.9479 15.1094 17.5312 15.6953 16.75 16.0078V18.625H17.0625C17.6354 18.6771 17.9479 18.9896 18 19.5625C17.9479 20.1354 17.6354 20.4479 17.0625 20.5H3.625C2.73958 20.474 1.9974 20.1745 1.39844 19.6016C0.825521 19.0026 0.526042 18.2604 0.5 17.375V3.625C0.526042 2.73958 0.825521 1.9974 1.39844 1.39844C1.9974 0.825521 2.73958 0.526042 3.625 0.5H16.125C16.6458 0.526042 17.0885 0.708333 17.4531 1.04688C17.7917 1.41146 17.974 1.85417 18 2.375V14.25ZM14.875 18.625V16.125H3.625C3.26042 16.125 2.96094 16.2422 2.72656 16.4766C2.49219 16.7109 2.375 17.0104 2.375 17.375C2.375 17.7396 2.49219 18.0391 2.72656 18.2734C2.96094 18.5078 3.26042 18.625 3.625 18.625H14.875ZM16.125 14.25V2.375H3.625C3.26042 2.375 2.96094 2.49219 2.72656 2.72656C2.49219 2.96094 2.375 3.26042 2.375 3.625V14.5234C2.76562 14.3411 3.18229 14.25 3.625 14.25H16.125ZM6.4375 6.75C5.86458 6.69792 5.55208 6.38542 5.5 5.8125C5.55208 5.23958 5.86458 4.92708 6.4375 4.875H13.3125C13.8854 4.92708 14.1979 5.23958 14.25 5.8125C14.1979 6.38542 13.8854 6.69792 13.3125 6.75H6.4375ZM6.4375 9.875C5.86458 9.82292 5.55208 9.51042 5.5 8.9375C5.55208 8.36458 5.86458 8.05208 6.4375 8H13.3125C13.8854 8.05208 14.1979 8.36458 14.25 8.9375C14.1979 9.51042 13.8854 9.82292 13.3125 9.875H6.4375Z" fill="#003DAF"/>
                                  </svg>
                                  <div className="text">External Links</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="components-info-section">
                  <div className="components-info-wrap">
                      {currentComponent === 'Accordion' && <AccordionExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Button' && <ButtonExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Calendar' && <CalendarExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Card' && <CardExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Checkbox' && <CheckboxExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Date & Time Picker' && <DateAndTimePickerExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Date Picker' && <DatePickerExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Footer' && <FooterExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Header' && <HeaderExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Hint' && <HintExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Input' && <InputExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Message' && <MessageExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Modal' && <ModalExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Radio' && <RadioExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Request' && <RequestExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Select' && <SelectExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Table' && <TableExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Tabs' && <TabsExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Text' && <TextExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Text Area' && <TextAreaExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Time Picker' && <TimePickerExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Toggle' && <ToggleExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Tooltip' && <TooltipExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'User Image' && <UserImageExample setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'Installation' && <Installation setCurrentComponent={setCurrentComponent} />}
                      {currentComponent === 'External Links' && <ExternalLinks setCurrentComponent={setCurrentComponent} />}
                  </div>
              </div>

          </div>

      </div>
    );

}

export default ComponentList;