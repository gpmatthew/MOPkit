import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import Logo from "../assets/images/Logo-mopkit.svg";
import SearchIcon from "../assets/images/search.svg";
import Question from "../assets/images/question.svg";
import UserImg from "../assets/images/person1.jpg";
import closeIcon from "../assets/images/xmark-solid.svg";

function Header() {

    const location = useLocation();

    const searchHeader = function() {
        let trigger = document.querySelector('.mobile-search');
        let header = document.querySelector('header .header-wrap');
        let search = document.querySelector('.search-container.drop');
        let close = document.querySelector('.search-container.drop .close-icon');

        if (trigger && header && search && close) {
            trigger.addEventListener('click', function() {
                header.classList.toggle('active');
                search.classList.toggle('active');
            });

            close.addEventListener('click', function() {
                header.classList.toggle('active');
                search.classList.toggle('active');
            });
        }

    }

    return (
      <header class={location.pathname === '/component-list' && "alt-header"}>
          {location.pathname === '/component-list' &&
          <div className="search-container drop">
              <input placeholder="Search Documentation" className="search-icon" type="text"/>
              <div className="close-icon"><img src={closeIcon} alt="Logo" /></div>
          </div>
          }
          <div className="header-wrap">
              <div className="left">
                  <div className="logo">
                      <Link to="/">
                          <img src={Logo} alt="Logo" />
                      </Link>
                  </div>
                  {location.pathname === '/component-list' &&
                  <div className="search-container">
                      <input placeholder="Search Documentation" className="search-icon" type="text"/>
                  </div>
                  }
              </div>
              <div className="right">
                  <div className="mobile-search" ref={searchHeader}>
                      <img src={SearchIcon} alt=""/>
                  </div>
                  <div className="help">
                      <img src={Question} alt=""/>
                  </div>
                  <div className="user-info">
                      <div className="user-pic">
                          <img src={UserImg} alt="User"/>
                      </div>
                      <div className="user-name-position">
                          <div className="name">Kalon Simpson</div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );

}

export default Header;