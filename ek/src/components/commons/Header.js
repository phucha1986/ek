function Header() {
  return (
    <header className="main-login-navigation" data-auto="header">
      <div className="e-container e-container--relative">
        <div><a href="/vn/vietnamese/" className="login-brand-logo"><img title="Emirates logo" alt="Emirates logo"
              className="login-brand-logo__image" aria-hidden="false"
              src="https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-horizontal.svg?h=nMiqF1sXP0LwuM-vCquofw"/></a>
        </div>
      </div>
      <div className="e-container main-login-navigation__container">
        <div className="main-login-navigation__content">
          <ul className="header-buttons">
            <li className="header-buttons__item"><span className="main-login-navigation__login-link"><span
                  className="main-login-navigation__link-text"></span></span></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
