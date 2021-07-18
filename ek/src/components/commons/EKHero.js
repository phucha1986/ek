import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

function EKHero() {

  return (
    <div className="js-hero">
      <div data-tcm-id="" analytic-text="" style={{position: 'relative',width: '100%'}} className="hero">
        <div style={{position: 'absolute',width: '100%'}} className="hero__backdrop">
          <picture class="hero__image--background"><source media="(min-width: 1024px)" srcset="https://c.ekstatic.net/ecl/people/outdoors/flora-park-sightseeing-lavander-flower-at-kuyucak-w1920x480.jpg?h=W-HI5sr3dIF7f3pUW207jQ"/>
            <source media="(max-width: 1023px) and (min-width: 480px)" srcset="https://c.ekstatic.net/ecl/people/outdoors/flora-park-sightseeing-lavander-flower-at-kuyucak-t1024x480.jpg?h=mnN3cK70Z32oxlZ2nKsUew"/>
            <source media="(max-width: 479px)" srcset="https://c.ekstatic.net/ecl/people/outdoors/flora-park-sightseeing-lavander-flower-at-kuyucak-m480x480.jpg?h=1MJbSTQJuMh6QkFJ65K8cw"/>
            <img src="https://c.ekstatic.net/ecl/people/outdoors/flora-park-sightseeing-lavander-flower-at-kuyucak-w1920x480.jpg?h=W-HI5sr3dIF7f3pUW207jQ" alt="Flora park sightseeing lavender flower at Kuyucak"/>
          </picture>
        </div>
        <div className="hero__content">
          <div className="hero__title">
            <h1>
              <span className="hero__subheading" role="presentation">
                Get multi-risk
              </span>
              <span className="hero__heading__wrapper">
                <span className="hero__heading" role="presentation">TRAVEL INSURANCE</span>
                <span className="hero__description" role="presentation"> coverage with every flight </span>
                </span>
            </h1>
            <a href="/vn/english/before-you-fly/multi-risk-travel-insurance/" data-id="pagebody_cta" data-link="Hero Panel:Learn more" className="cta cta--small cta--primary hero__cta ">
              <span className="js-label cta__text">Learn more</span>
            </a>
          </div>
          <div className="hero__fly-better-top-right">
            <a href="/vn/english/experience/fly-better/" data-id="pagebody_logo" data-link="Fly Better">
              <img src="https://c.ekstatic.net/ecl/logos/emirates/emirates-fly-better-white.svg?h=ASXr1bEvRLq6igZoljExYw" className="fly-better-logo" alt="Fly better"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default EKHero;
