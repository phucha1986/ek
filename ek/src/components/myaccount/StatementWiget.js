import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function StatementWiget(params) {
    const [user, setUser] = useState('');
    const isAuthenticated = params.isAuthenticated || localStorage.getItem('loggedIn') === "true";

    useEffect(() => {
        console.log("isauthenticated " + isAuthenticated);
        let userObject = localStorage.getItem('user');
        if (userObject && userObject.length) {
          setUser(JSON.parse(userObject));
        }else{
          setUser('');
        }
      }, [isAuthenticated]);
    return (
        <>
        {isAuthenticated && 
            <div className="skywards-dashboard js-h-o-c012-skywards-dashboard">
                <div className="skywards-dashboard__container">
                    <div className="skywards-dashboard__blocks">
                        <div className="skywards-dashboard__block-1">
                            <div>
                                <img alt="" loading="lazy" src="https://c.ekstatic.net/ecl/logos/skywards/membership-tier-skywards-blue-icon-w360x360.png?h=5xdR3D7ZQ5Uvr-9XWALiIA"/>
                            </div>
                            <div className="welcome-message"> Welcome, <br></br>
                                <span data-mask="true" className="heading">Mr {isAuthenticated ? user.userName : ''}</span>
                            </div>
                        </div>
                        <div className="skywards-dashboard__block-2">
                            <div className="row">
                                <div className="row__item">
                                    <i className="icon icon-fares icon--account-tier" aria-hidden="true"></i>
                                    <div className="heading">Blue Tier</div>
                                    <div data-mask="true">EK 619 931 045</div>
                                </div>
                                <div className="row__item">
                                    <i className="icon icon-id icon--skywards-miles" aria-hidden="true"></i>
                                    <div data-mask="true" className="heading">0</div>
                                    <div>Skywards Miles</div>
                                </div>
                            </div>
                            <div className="links">
                                <div>
                                    <a href="/transfer.aspx?pageurl=/account/vn/english/manage-account/manage-account.aspx&amp;section=MYA&amp;th=6101c89d8d8c74cab895cd77da72dbd3ce6aa31c" data-id="pagebody_link" data-link="Skywards Homepage:View My Account">View My Account</a>
                                </div>
                                <div>
                                    <a href="/transfer.aspx?pageurl=/account/vn/english/manage-account/my-statement&amp;section=MYA&amp;th=281b91f562ef6b4cbb3481076461432cf83716be" data-id="pagebody_link" data-link="Skywards Homepage:View Statement">View Statement</a>
                                </div>
                                <div>
                                    <a href="/transfer.aspx?pageurl=/account/vn/english/manage-account/my-profile&amp;section=MYA&amp;th=471e7ea715156be1e42ccd14c47895cdaa5e4820" data-id="pagebody_link" data-link="Skywards Homepage:Update Profile">Update Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skywards-dashboard__block-3">
                        <div className="promotional-content">Fly Emirates or flydubai to earn double Tier Miles on your flights and retain your status or move up to the next tier.</div>
                        <div className="cta-container">
                            <a href="/vn/english/special-offers/keep-or-upgrade-your-tier/" data-id="pagebody_cta" data-link="Skywards Homepage:Learn more" className="cta   cta--promotion ">
                                <span className="js-label cta__text">Learn more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
        {!isAuthenticated &&
            <div className="bx-skywards-login-wrapper">
                <div id="bx-e5b4fabd-3df3-4e74-8444-48102271218c">
                    <div className="bx-skywards-login-container ">                        
                        <img loading="lazy" alt="" className="bx-skywards-login-tier-logo " src="https://c.ekstatic.net/ecl/skywards/skywards-coin-blue.png" />
                        <div className="bx-skywards-login-body ">
                            <img className="bx-skywards-background bx-skywards-tier-background" src="https://c.ekstatic.net/ecl/skywards/background-test-tier.png" />
                            <div className="bx-skywards-login-body-container bx-skywards-signup-body-container">
                                <span id="bx-skywards-title" className="bx-skywards-login-title bx-skywards-signup-title">Welcome back</span>
                                <span id="bx-skywards-body" className="bx-skywards-body bx-skywards-signup-body">Log in again to enjoy exclusive offers and benefits as an Emirates Skywards member</span>
                            </div>
                            <a id="bx-login-prompt-cta" className="bx-skywards-login__cta" href="/transfer.aspx?pageurl=/account/vn/english/login/login.aspx&amp;section=MYA&amp;th=f9adeee8f864c69ddde93767dafd9dc9b59dc0fb">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
    );
}
  
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user
    }
}

export default connect(mapStateToProps)(StatementWiget);  
  