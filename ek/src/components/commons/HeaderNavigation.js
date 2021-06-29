import React, { useState } from 'react';
import { NavLink, Link} from 'react-router-dom';

function HeaderNavigation(params) {
  const [isMenuHover, setIsMenuHover] = useState(false);

  function onMenuHover(value)
  {
    setIsMenuHover(value);
  }

  let navigationMenu = params.headerNavigationList.map((item, i) => {
    return (
      <button aria-expanded="true" role="link" type="button" className={`nav__list-item-text nav__list-item-text--desktop  header-popup__btn--uppercase call-to-action call-to-action--multiline header-popup__btn ${i == 0 ? 'header-popup__btn--active' : ''}`}><div className="call-to-action__multiline-wrapper header-popup__btn-content"><span className="header-popup__btn-content-wrapper">{item}</span><span aria-hidden="true" className="header-popup__arrow"></span></div></button>
    );
  });

  return (
    <div className="nav__desktop-wrapper">
      {navigationMenu}            
      <div style={{top: '55px'}} className="header-popup__wrapper header-popup__wrapper--active header-popup__wrapper--with-tabs">
        <div>
          <div className="header-popup__content">
            <div className="second-level-menu second-level-menu--desktop tabs">
              <div>
                <ul className="second-level-menu__list tabs__list" style={isMenuHover ? {marginBottom: '342px'} : {marginBottom: '0px'}}>
                  <li className="second-level-menu__list-item tabs__active-tab" role="presentation" onFocus={() => onMenuHover(true)}>
                    <span aria-controls="tabList__3__0" tabindex="0" role="tab" aria-selected="false" className={`second-level-menu__list-item-text second-level-menu__list-item-text--desktop ${isMenuHover ? 'second-level-menu__list-item-text--active' : ''}`}>Book</span>
                    <div role="tabpanel" id="tabList__3__0" className="second-level-menu__wrapper tabs__wrapper"><div className={isMenuHover ? 'db' : 'hidden'}><div className="third-level-menu--desktop"><div className="third-level-menu__link-wrapper"><div className="third-level-menu__link-holder" role="heading" aria-level="2"><a data-id="header_nav_link" data-link="Book flights" href="/vn/english/book/" className="link link--with-hover-bg link--default third-level-menu__link">Book flights&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div></div><div className="third-level-menu__list"><div className="third-level-menu__list-item e-col-md-3"><div className="third-level-menu__list-item-link-holder" role="heading" aria-level="3"><Link data-id="header_nav_link" to="BookAFlight" data-link="Search for a flight" href="/vn/english/book/" className="link link--with-hover-bg link--default third-level-menu__list-item-link" onClick={() => onMenuHover(false)}>Search for a flight<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></Link></div><div className="third-level-menu__list-item-subgroup--wrapper" role="list"><div className="third-level-menu__list-item-subgroup" role="presentation"><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Flight schedules" href="/vn/english/book/flight-schedules/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Flight schedules</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Featured fares" href="/vn/english/book/featured-fares/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Featured fares</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Special offers" href="/vn/english/special-offers/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Special offers</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Best Fare Finder" href="/vn/english/book/best-fare-finder/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Best Fare Finder</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Emirates Vouchers" href="/vn/english/book/emirates-vouchers/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Emirates Vouchers</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div></div></div></div><div className="third-level-menu__list-item e-col-md-3"><div className="third-level-menu__list-item-link-holder" role="heading" aria-level="3"><a data-id="header_nav_link" data-link="Planning your trip" href="/vn/english/book/planning-your-trip/" className="link link--with-hover-bg link--default third-level-menu__list-item-link">Planning your trip&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup--wrapper" role="list"><div className="third-level-menu__list-item-subgroup" role="presentation"><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Book a hotel" href="/vn/english/book/planning-your-trip/hotels/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Book a hotel</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Tours and activities" href="/vn/english/book/planning-your-trip/tours-and-activities/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Tours and activities</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Dubai Parks and Resorts" href="/AncillaryDirective.aspx?section=DubaiParks&amp;pageurl=https://www.dubaiparksandresorts.com/en/emirates?EK=true&amp;utm_source=emirates&amp;utm_medium=nav&amp;utm_campaign=dpr-ek-partnership" target="_blank" aria-labelledby="hidden_text_88" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Dubai Parks and Resorts</span><span dir="auto" className="link__external pictogram-wrapper icon icon-external-link undefined" aria-hidden="true"></span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span><span id="hidden_text_88" className="hidden-control">Dubai Parks and Resorts Opens an external link in a new tab</span></a></div></div></div></div><div className="third-level-menu__list-item e-col-md-3"><div className="third-level-menu__list-item-link-holder" role="heading" aria-level="3"><a data-id="header_nav_link" data-link="Travel services" href="/vn/english/book/travel-services/" className="link link--with-hover-bg link--default third-level-menu__list-item-link">Travel services&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup--wrapper" role="list"><div className="third-level-menu__list-item-subgroup" role="presentation"><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Meet &amp; Greet" href="http://www.marhabaservices.com/" target="_blank" rel="noreferrer" aria-labelledby="hidden_text_90" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Meet &amp; Greet</span><span dir="auto" className="link__external pictogram-wrapper icon icon-external-link undefined" aria-hidden="true"></span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span><span id="hidden_text_90" className="hidden-control">Meet &amp; Greet Opens an external link in a new tab</span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Dubai Connect" href="/vn/english/before-you-fly/dubai-international-airport/dubai-connect/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Dubai Connect</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div></div></div></div><div className="third-level-menu__list-item e-col-md-3"><div className="third-level-menu__list-item-link-holder" role="heading" aria-level="3"><a data-id="header_nav_link" data-link="Transportation" href="/vn/english/book/transportation/" className="link link--with-hover-bg link--default third-level-menu__list-item-link">Transportation&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup--wrapper" role="list"><div className="third-level-menu__list-item-subgroup" role="presentation"><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Airport transfer" href="/vn/english/book/transportation/book-an-airport-transfer/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Airport transfer</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Book a car" href="/vn/english/book/transportation/car-rental/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Book a car</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div><div className="third-level-menu__list-item-subgroup-item third-level-menu__list-item-subgroup-item--current" role="listitem"><a data-id="header_nav_link" data-link="Airline partners" href="/vn/english/travel-partners/" className="link link--with-hover-bg link--default third-level-menu__list-item-sublink"><span className="link__text" id="">Airline partners</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron icon icon-chevron-right link__chevron-icon" aria-hidden="true"></span></a></div></div></div></div></div></div><button role="link" onClick={() => onMenuHover(false)} className="header-popup__close header-popup__close--tab"><span dir="auto" className="close-icon--big pictogram-wrapper" aria-hidden="true"><i className="icon icon-close"></i></span><span className="hidden-control">Close</span></button></div></div>
                  </li>
                  <li className="second-level-menu__list-item tabs__active-tab" role="presentation">
                    <span aria-controls="tabList__3__0" tabindex="0" role="tab" aria-selected="false" className="second-level-menu__list-item-text second-level-menu__list-item-text--desktop">About booking online</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link data-id="header_nav_cta" data-link="BOOK:Search Flights" to="/BookAFlight" className="link header-popup__search call-to-action call-to-action__primary call-to-action--small">Search flights</Link>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default HeaderNavigation;
