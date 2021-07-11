import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const EKDropdownItems = (params) => {
  var selectedItem = params.Items.find(item => item.Selected);
  const [popUpStyle, setPopupStyle] = useState();
  useEffect(() => {
      let element = $("#" + params.ParentID);      
      setPopupStyle({
        top: element.offset().top + element.height() + 10,
        left: element.offset().left,
        width: '400px',
        position: 'absolute'
      });
  }, []);

  return (    
    <div className={params.Visible ? '' : 'hidden'}>
      <div className="popover" tabindex="-1" data-auto="AutoSuggestFieldPopover" style={popUpStyle}>
        <div className="popover__arrow"></div>
        <div className="scroll scroll--visible">
          <div className="scroll__box scroll__box--use-scroll">
            <div><div className="auto-suggest" tabindex="-1" id="" role="listbox">
              <div className="auto-suggest__list" role="group" aria-labelledby="group__0">
                <span id="group__0" className="auto-suggest__list-item">
                  <strong className="auto-suggest-group-legend">
                    <span dir="auto" className="pictogram-wrapper" aria-hidden="true">
                      <i className="icon icon-location"></i>
                    </span>Current location
                  </strong>
                </span>
                <button type="button" role="option" aria-selected="false" data-prevent-esc="true" className="auto-suggest__item">
                  <div className="station-suggest-item__info">
                    <strong className="station-suggest-item__short-name">{selectedItem.City}, </strong>
                    <span className="station-suggest-item__country">{selectedItem.Country}</span>
                    <span className="station-suggest-item__long-name">{selectedItem.Airport}</span>
                  </div>
                  <div className="station-suggest-item__icons">
                    <span className="station-suggest-item__station">
                      <img alt="Operated by Emirates" className="station-suggest-item__emirates" title="Operated by Emirates" src={selectedItem.AirlineLogo} />
                    </span>
                    <span className="auto-suggest__code">{selectedItem.AirportCode}</span>
                  </div>
                </button>
              </div>
              <div className="auto-suggest__list" role="group" aria-labelledby="group__1">
                <span id="group__1" className="auto-suggest__list-item">
                  <strong className="auto-suggest-group-legend">
                    <span dir="auto" className="pictogram-wrapper" aria-hidden="true">
                      <i className="icon icon-clock-fare"></i>
                    </span>Recent Searches
                  </strong>
                </span>
              </div>
              <div className="auto-suggest__list" role="group" aria-labelledby="group__2">
                <span id="group__2" className="auto-suggest__list-item">
                  <strong className="auto-suggest-group-legend">
                    <span dir="auto" className="pictogram-wrapper" aria-hidden="true">
                      <i className="icon icon-map"></i>
                    </span>
                    All locations
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default EKDropdownItems;


