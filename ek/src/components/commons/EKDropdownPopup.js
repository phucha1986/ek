import React, { useState, useEffect } from 'react';
import EKDropdownItemHightLight from './EKDropdownItemHightLight';

const EKDropdownPopup = (params) => {
  const { SelectedItem, SetSelectedItem, CurrentLocation, SearchText, IsSearching, Visible} = params;
  const selectedItem= params.Items.find(item => item.Selected);

  const remainingItems = params.Items.filter(item => (
    (!item.Selected || 
    item != selectedItem || 
    (CurrentLocation && item.AirportCode != CurrentLocation.AirportCode)) && 
    item != selectedItem)
  );
  
  const searchItems = params.Items.filter(item => (IsSearching && SearchText != '' &&
    (item.City.search(new RegExp(SearchText, "i")) != -1 ||
    item.AirportCode.search(new RegExp(SearchText, "i")) != -1 ||
    item.Country.search(new RegExp(SearchText, "i")) != -1 ||
    item.Airport.search(new RegExp(SearchText, "i")) != -1))
  );

  const displayItems = (IsSearching && SearchText.length ? searchItems : remainingItems).map((item, i) => {    
    return (
      <EKDropdownItemHightLight Item={item} Index={i} SelectedItem={SelectedItem} SetSelectedItem={SetSelectedItem} key={i} SearchText={SearchText} Visible={Visible} IsSearching={IsSearching}/>
    );
  });

  const emptySearch = () => { 
    return <>
      <h3 className="location__global__heading--no-results">No results found</h3>
      <p className="location__global__description--no-results">Please recheck the airport or city you've entered, or select one from the list.</p>
    </>;
  }

  return (    
    <div className="dropdown">
      {CurrentLocation && (!IsSearching || !SearchText.length)  && <section className="location global">
        <h3 className="location__global__heading">
          <i className="icon icon-location location__icon location__icon--location"></i>Current location
        </h3>
        <ol className="location__list">
          <li tabindex="-1" className="location__item js-dropdown-select-item js-location-list pointer" onClick={() => {SetSelectedItem(CurrentLocation)}}>
            <div tabindex="-1" className="dropdown__link js-select-body js-location-link">
              <div className="location__airport" aria-hidden="true">
                <p className="location__airport__city" data-location-value="Ho Chi Minh City">
                  <span>{CurrentLocation.City},</span> {CurrentLocation.Country}
                </p>
                <p className="location__airport__name">{CurrentLocation.Airport}</p>
              </div>
              <i className="icon icon-tailfin-ek" aria-hidden="true"></i>
              <p className="location__airport__acronym " aria-hidden="true">{CurrentLocation.AirportCode}</p>
            </div>
          </li>
        </ol>
      </section>}
      <section className="location global">
        <h3 className="location__global__heading">
          <i className="icon icon-map location__icon location__icon--map"></i>All locations
        </h3>        
        {!displayItems.length && emptySearch()}
        <ol className="location__list">          
          {displayItems}
        </ol>
      </section>
    </div>  
  );
}

export default EKDropdownPopup;


