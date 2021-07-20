import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EKHeaderItem from './EKHeaderItem';
import { useHistory } from 'react-router';
import store from '../../store.js';
import { loggedOut } from '../../action_creators/logOutCreator';

function EKHeader(params) {
  const isAuthenticated = params.isAuthenticated || localStorage.getItem('loggedIn') === "true";
  const cssTop = params.isHeaderOnScreen ? "55px" : "0px";
  const [user, setUser] = useState('');
  const wrapperRef = useRef(null);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const history = useHistory();

  const onProfileClick = () =>
  {
    if(isAuthenticated)
    {
      setIsProfileClicked(true);
    }else
    {
      history.push('/Login');
    }
    return false;
  }

  useEffect(() => {      
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsProfileClicked(false);
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    console.log("isauthenticated " + isAuthenticated);
    let userObject = localStorage.getItem('user');
    if (userObject.length) {
      setUser(JSON.parse(userObject));
    }else{
      setUser('');
    }
  }, [isAuthenticated]);

  const logOut = () =>
  {    
    store.dispatch(loggedOut());
    history.push('/');
    setIsProfileClicked(false);
  }

  let parentMenu = params.headerNavigationList.map((item, i) => {
    return <EKHeaderItem ItemIndex={i} ItemText={item.ItemText} Level2={item.Level2} key={i}/>
  });

  return (
    <nav className="js-ek-global-navigation ek-global-navigation" style={{ width: '100%', position: 'relative', height: '55px', background: '#333', minWidth: '320px' }}>
      <div className="ek-global-navigation__inner">
        <div className="ek-global-navigation__inner-container">
          <div className="ek-global-navigation__logo"><Link to="/" data-id="header_logo_link" data-link="Emirates">
            <img alt="Emirates logo" src="https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-badge.svg?h=d-52wmsnqryhi7L83BAKpg" /></Link>
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
                <a id="close-country-popup" aria-expanded="false" className="js-country-selector-list-item-link country-selector-list-item-link" href="javascripts:void(0)"  data-id="header_nav_icon" data-link="Select your country and language">
                  <span className="country-flag-img new-flags flag flag--ww2"></span>
                  <span className="country-code">VN</span>
                </a>
              </li>
              <li className="js-website-search">
                <a aria-expanded="false" href="javascripts:void(0)"  id="js-close-search-popup" className="js-search-selector-list-item-link search-selector-list-item-link " data-id="header_nav_icon" data-link="Search our site">
                  <span className="icon icon-navigation-search"></span>
                  <span className="sr-only">Search</span>
                </a>
              </li>
              <li className={`js-account-selector ${isAuthenticated ? '' : 'not-logged-in'}`}>
                <a id="login-nav-link" onClick={onProfileClick} href="javascripts:void(0)" className={`js-account-popup-link account-popup-link js-login-link SKYWARDS ${isProfileClicked ? 'active' : ''}`}>
                  <span className="login-icon icon icon-profile-account "></span>
                  <span className="account-username">{isAuthenticated ? user.userName : 'LOG IN'}</span>
                </a>
                <div tabindex="0" className={`js-ek-account-popup ek-account-popup ${isProfileClicked ? 'db' : ''}`} ref={wrapperRef}>
                  <section>
                    <div className="js-ek-account-popup-inner ek-account-popup-inner">
                      <div className="ek-account-popup-body ">
                        <div className="ek-account-popup-body--inner">
                          <div className="ek-account-afterlogin">
                            <h2>Welcome to Emirates Skywards</h2>
                            <span data-mask="true" className="account-user">Mr Phuc Ha</span>
                            <div className="ek-account-mobile-tabs" aria-hidden="true">
                              <div id="skywards-tab" className="js-account-mobile-tab-panel account-mobile-tabpanel active">
                                <div className="js-account-tab-title account-tab-title skywards-tab">
                                  <span>Emirates Skywards</span>
                                  <span data-mask="true"> 619 931 045 </span>
                                </div>
                              </div>
                            </div>
                            <div className="ek-account-details js-ek-account-details  no-btm-border ">
                              <div id="skywards-section" className="js-ek-account-column ek-account-column active-tab">
                                <div className="ek-account-user-mobile ">
                                  <span data-mask="true" className="">Mr Phuc Ha</span>
                                  <span className="ek-account-tier skywards">Blue</span>
                                </div>
                              <span className="account-details-column account-name account-name-tab mobile-hidden-column no-wrap">   Emirates Skywards</span>
                              <div className="account-details-column mobile-hidden-column no-wrap">
                                <span>Membership number</span>
                                <span data-mask="true" className="memebership-id">619 931 045</span>
                              </div>
                              <div className="account-details-column mobile-hidden-column no-wrap">
                                <span>Membership tier</span>
                                <span>Blue</span>
                              </div>
                              <div className="account-details-column mobile-hidden-column no-wrap">
                                <span>Miles</span>
                                <span data-mask="true">0</span>
                              </div>
                              <div className="account-details-column desktop-hidden-column mobile-points-column ">
                                <span>Miles</span>
                                <span data-mask="true">0</span>
                                <span data-mask="true"></span>
                              </div>
                              <div className="account-details-column account-details-cta-column">
                                <Link to="/Account" className="account-red-button view-skywards-button">My Account</Link>
                                <a onClick={logOut} className="js-account-logout js-skywards-logout account-white-button logout-button ">Logout</a>
                              </div>
                            </div>
                            <div className="spinner js-family-spinner hidden">
                              <i className="icon icon-loading"></i>
                            </div>                            
                          </div>
                        </div>
                      </div>                      
                      <div className="account-popup-close">
                        <a onClick={() => {setIsProfileClicked(false)}} className="js-account-popup-close-btn account-popup-link icon icon-delete-light" aria-label="Close">
                          <span className="close-sr">close popup</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
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
