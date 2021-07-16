import store from './../../store.js';
import React, { useState } from 'react';
import HeaderNavigation from './HeaderNavigation.js';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

function AuthenticatedHeader() {
  const history = useHistory();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const headerNavigationList = ['BOOK', 'MANAGE', 'EXPIRIENCE', 'WHERE TO FLY', 'LOYALITY', 'HELP'];
  const [isHeaderOnScreen, setIsHeaderOnScreen] = useState(true);
  const userObject = localStorage.getItem('user') || new Object();
  const [user, setUser] = useState(JSON.parse(userObject));

  function showProfile()
  {
    setShowProfileMenu(!showProfileMenu);
  }

  function logOut()
  {
    store.dispatch(
      {
        type: 'loggedOut'
      }
    ); 
    localStorage.setItem ('loggedIn', false);
    localStorage.setItem ('user', '');
    showProfile();
    history.push('/');
  }

  function isVisible($el) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let elTop = $el.offset().top;
    let elBottom = elTop + $el.height();
    return((elBottom <= docViewBottom) && (elTop >= docViewTop));
  }

  $(function() {  
    window.onscroll = () =>  {
      setIsHeaderOnScreen(isVisible($(".main-navigation")));      
    };
  });
  
  return (
    <header data-auto="header" role="presentation">
      <div className="main-navigation">
        <div className="e-container e-container--relative">
          <a href="/" data-id="header_logo_link" data-link="Home" className={`brand-logo ${!isHeaderOnScreen ? 'brand-logo-sticky' : ''}`}>
            <img title="Emirates logo" alt="Emirates logo" className={`brand-logo__image loading ${!isHeaderOnScreen ? 'brand-logo__image-sticky' : ''}`} aria-hidden="false" aria-label="Emirates logo" src="https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-badge.svg?h=d-52wmsnqryhi7L83BAKpg" data-was-processed="true"/>
            <img title="Emirates logo" alt="Emirates logo" className={`brand-logo__image-small ${!isHeaderOnScreen ? 'brand-logo__image-small-sticky' : ''}`} aria-hidden="false" aria-label="Emirates logo" src="https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-horizontal.svg?h=nMiqF1sXP0LwuM-vCquofw"/>
          </a>          
        </div>
        <div className="e-container main-navigation__container">
          <div className="main-navigation__content">
            <div className="abper-112-toggle" role="button" tabindex="0" id="bx-mobile_web_feedback_button">
              <div className="abper-112-toggle-container bx-mobile_web_feedback_button"><div className="icon icon-feedback"></div><span className="abper-112-text abper-112-hidden-desktop">Leave website feedback</span><span className="abper-112-text abper-112-hidden-mobile">Feedback</span></div>
            </div>
            <nav className="main-navigation__nav">
              <div>                              
                <HeaderNavigation headerNavigationList={headerNavigationList} isHeaderOnScreen={isHeaderOnScreen}/>                                  
              </div>
            </nav>

            <ul className="header-buttons"><li className="header-buttons__item"><div><button aria-expanded="false" aria-label="Select language. Currently selected: english, VN" role="link" type="button" className="header-buttons__flag-container--desktop header-popup__btn header-popup__btn--uppercase call-to-action call-to-action--multiline"><div className="call-to-action__multiline-wrapper header-popup__btn-content"><span className="header-popup__btn-content-wrapper"><span className="header-buttons__flag-container"><span className="header-buttons__flag"></span><span className="header-buttons__flag-text">VN</span></span></span><span aria-hidden="true" className="header-popup__arrow"></span></div></button></div></li><li className="header-buttons__item header-buttons__item--search"><button aria-expanded="false" role="link" type="button" className="header-popup__btn header-popup__btn--uppercase call-to-action call-to-action--multiline"><div className="call-to-action__multiline-wrapper header-popup__btn-content"><span className="header-popup__btn-content-wrapper"><span dir="auto" className="pictogram-wrapper" aria-hidden="true"><i className="icon icon-search"></i></span><span className="hidden-control">Search</span></span><span aria-hidden="true" className="header-popup__arrow"></span></div></button></li>
            <li className="header-buttons__item">
              <button onClick={showProfile} aria-expanded="false" role="link" type="button" className="header-buttons__account header-popup__btn header-popup__btn--SKYWARDS header-popup__btn--uppercase call-to-action call-to-action--multiline"><div className="call-to-action__multiline-wrapper header-popup__btn-content"><span className="header-popup__btn-content-wrapper"><span dir="auto" className="header-buttons__item-login-icon pictogram-wrapper" aria-hidden="true"><i className="icon icon-profile-account"></i></span><span className="header-buttons__item-login-name">PH</span><span className="header-buttons__item-login-name header-buttons__item-login-name--desktop">{user.userName}</span></span><span aria-hidden="true" className="header-popup__arrow"></span></div></button>

              <div className={`header-popup__wrapper header-popup__wrapper--active ${showProfileMenu ? '' : 'hidden'}`}><div><div className="header-popup__content"><div className="main-navigation__login-wrapper"><div className="login" data-auto="login"><div className="split login__split login__split--wide"><div className="split__left login__split-left login__split-left--wide"><h2 className="reset-h login__heading">Welcome to Emirates Skywards</h2><div><div><p className="login__text reset-p" data-mask="true">Mr {user.userName}</p></div><div className="account-tabs"><div><div className="account-tabs__content-wrapper"><div className="account-tab account-tab__one-tab"><h3 data-mask="true" className="account-tab__heading">Emirates Skywards</h3><table className="account-tab__group-container"><tbody><tr className="account-tab__row"><td className="account-tab__label">Membership number</td><td data-mask="true" className="account-tab__label account-tab__align-label" dir="ltr">00 619 931 045</td></tr><tr className="account-tab__row"><td className="account-tab__label">Membership tier</td><td className="account-tab__label"><span>Blue</span></td></tr><tr className="account-tab__row"><td className="account-tab__label">Miles</td><td data-mask="true" className="account-tab__label">0 </td></tr></tbody></table><div className="account-tab__buttons"><a data-id="header_nav_cta" data-link="Skywards:View Skywards" href="/transfer.aspx?pageurl=/account/vn/english/manage-account/manage-account.aspx&amp;section=MYA&amp;th=6101c89d8d8c74cab895cd77da72dbd3ce6aa31c" className="link account-tab__cta call-to-action call-to-action__primary call-to-action--middle">My Account</a><div className="account-tabs__cta cf"><button onClick={logOut} role="link" type="button" className="account-tabs__logout account-tabs__logout--second-cta call-to-action call-to-action__secondary call-to-action--middle">Logout</button></div></div></div></div></div></div></div></div></div></div></div><button onClick={showProfile} role="link" className="header-popup__close"><span dir="auto" className="close-icon--big pictogram-wrapper" aria-hidden="true"><i className="icon icon-close"></i></span><span className="hidden-control">Close</span></button></div></div></div>
            </li>
            
            <li className="header-buttons__item"><button type="button" className="main-navigation__burger">MENU</button></li></ul>
          </div>
        </div>
      </div>      
    </header>
  );
}

export default AuthenticatedHeader;
