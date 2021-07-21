import React, { useState, useEffect, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

const EKDropdownItemHightLight = (params) => {
  const { Item, Index, SetSelectedItem, SearchText, ShowingDropdownPopup, IsSearching } = params;
  const regEx = new RegExp(SearchText, "gi");

  const cityIndex = Item.City.search(regEx);
  const cityHighlight = Item.City.substring(cityIndex, cityIndex + SearchText.length);
  const city = Item.City.replace(regEx , `<span class='to-highlight'>${cityHighlight}</span>`);

  const countryIndex = Item.Country.search(regEx);
  const countryHighlight = Item.Country.substring(countryIndex, countryIndex + SearchText.length);
  const country = Item.Country.replace(regEx , `<span class='to-highlight'>${countryHighlight}</span>`);

  const airportIndex = Item.Airport.search(regEx);
  const airportHighlight = Item.Airport.substring(airportIndex, airportIndex + SearchText.length);
  const airport = Item.Airport.replace(regEx , `<span class='to-highlight'>${airportHighlight}</span>`);

  const highlightAirportCode = Item.AirportCode.search(new RegExp(SearchText, "i")) != -1;  

  return (    
    <li tabindex="-1" className="location__item js-dropdown-select-item js-location-list pointer" key={Index} onClick={() => { SetSelectedItem({...Item});}}>
      <div tabindex="-1" className="dropdown__link js-select-body js-location-link">
        <div className="location__airport" aria-hidden="true">
          <p className="location__airport__city" data-location-value="Abidjan">
            <span>{ReactHtmlParser(city)},</span> {ReactHtmlParser(country)}
          </p>
          <p className="location__airport__name">{ReactHtmlParser(airport)}</p>
        </div>
        <i className="icon icon-tailfin-ek" aria-hidden="true"></i>
        <p className={`location__airport__acronym ${highlightAirportCode ? 'to-highlight' : ''}`} aria-hidden="true">{Item.AirportCode}</p>
      </div>
    </li> 
  );
}

export default EKDropdownItemHightLight;


