import { param } from 'jquery';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import EKHeaderItem from './EKHeaderItem';

function EKHeader(params) {
  const isAuthenticated = params.isAuthenticated || localStorage.getItem ('loggedIn') === "true";  
  const cssTop = params.isHeaderOnScreen ? "55px" : "0px";  
  const [user, setUser] = useState('');  

  useEffect(() => {
    
    let userObject = localStorage.getItem('user');
    if(userObject.length)
    {
      setUser(JSON.parse(userObject));
    }      
  }, [isAuthenticated]);


  let parentMenu = params.headerNavigationList.map((item, i) => {    
    return <EKHeaderItem ItemIndex={i} ItemText={item}/>
  }); 

  return (
    <nav className="js-ek-global-navigation ek-global-navigation" style={{width: '100%', position: 'relative', height: '55px', background: '#333', minWidth: '320px'}}>
      <div className="ek-global-navigation__inner">
        <div className="ek-global-navigation__inner-container">
          <div className="ek-global-navigation__logo"><Link to="/" data-id="header_logo_link" data-link="Emirates">
            <img alt="Emirates logo" src="https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-badge.svg?h=d-52wmsnqryhi7L83BAKpg"/></Link>
          </div>
          <div className="js-mobile-menu-overlay mobile-menu-overlay" aria-hidden="true"></div>
          <div className="ekglobal-navigation-megamenu-holder">
            <div className="ek-global-navigation__megalinks">
              <div className="js-megalinks-mobile-close-btn megalinks-mobile-close-btn" aria-hidden="true"><a className="icon icon-delete-light" tabindex="-1" href="#"></a></div>
              <ul className="megalinks-list-parent">
                {parentMenu}
              </ul>
              <div className="abper-112-toggle" role="button" tabindex="0" id="bx-mobile_web_feedback_button"><div className="abper-112-toggle-container bx-mobile_web_feedback_button"><div className="icon icon-feedback"></div><span className="abper-112-text abper-112-hidden-desktop">Leave website feedback</span><span className="abper-112-text abper-112-hidden-mobile">Feedback</span></div></div>
            </div>
          </div>
          <div className="js-ek-global-navigation-secondarymenu ek-global-navigation__secondarymenu">
            <ul>
              <li className="js-website-selector">
                <a id="close-country-popup" aria-expanded="false" className="js-country-selector-list-item-link country-selector-list-item-link" href="#" data-id="header_nav_icon" data-link="Select your country and language">
                  <span className="country-flag-img new-flags flag flag--ww2"></span>
                  <span className="country-code">VN</span>
                </a>
              </li>
              <li className="js-website-search">
                <a aria-expanded="false" href="#" id="js-close-search-popup" className="js-search-selector-list-item-link search-selector-list-item-link " data-id="header_nav_icon" data-link="Search our site">
                  <span className="icon icon-navigation-search"></span>
                  <span className="sr-only">Search</span>
                </a>
              </li>
              <li className={`js-account-selector ${isAuthenticated ? '' : 'not-logged-in'}`}>
                <Link data-id="header_nav_cta" data-link="Login" to="/Login" id="login-nav-link" className="js-account-popup-link account-popup-link  js-login-link">
                  <span className="login-icon icon icon-profile-account "></span>
                  <span className="account-username">{isAuthenticated ? user.userName : 'LOG IN'}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated,
      user: state.user 
  }
}

export default connect(mapStateToProps)(EKHeader);
