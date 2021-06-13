function HeaderNavigation(params) {

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
                <ul className="second-level-menu__list tabs__list">
                  <li className="second-level-menu__list-item tabs__active-tab" role="presentation">
                    <span aria-controls="tabList__3__0" tabindex="0" role="tab" aria-selected="false" className="second-level-menu__list-item-text second-level-menu__list-item-text--desktop">Book</span>
                  </li>
                  <li className="second-level-menu__list-item tabs__active-tab" role="presentation">
                    <span aria-controls="tabList__3__0" tabindex="0" role="tab" aria-selected="false" className="second-level-menu__list-item-text second-level-menu__list-item-text--desktop">About booking online</span>
                  </li>
                </ul>
              </div>
            </div>
            <a data-id="header_nav_cta" data-link="BOOK:Search Flights" href="/sessionhandler.aspx?pageurl=/IBE.aspx&amp;pub=/vn/english&amp;j=f&amp;section=IBE" className="link header-popup__search call-to-action call-to-action__primary call-to-action--small">Search flights</a>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default HeaderNavigation;
