import React, { useState, useEffect, useRef } from 'react';
import EKDropdownItemHightLight from './EKDropdownItemHightLight';

const EKDropdownPopup = (params) => {
  const { setSelectedItem, currentLocation, searchText, isSearching, ShowingDropdownPopup: showingDropdownPopup, setFirstItemToBeSelected, setIsDropDownItemFocus, setShowingDropdownPopup} = params;
  const wrapperRef = useRef();

  const remainingItems = params.Items.filter(item => (
    item.AirportCode != (currentLocation ? currentLocation.AirportCode : ''))
  );
  
  const searchItems = params.Items.filter(item => (isSearching && searchText.length &&
    (item.City.search(new RegExp(searchText, "i")) != -1 ||
    item.AirportCode.search(new RegExp(searchText, "i")) != -1 ||
    item.Country.search(new RegExp(searchText, "i")) != -1 ||
    item.Airport.search(new RegExp(searchText, "i")) != -1))
  );

  const [refinedItems, setRefinedItems] = useState(isSearching && searchText.length ? searchItems : remainingItems);

  const onClick = item =>
    {
      setSelectedItem(item);
      setIsDropDownItemFocus(false);
      setShowingDropdownPopup(false);
    }

  const displayItems = refinedItems.map((item, i) => {
    
    return (
      <EKDropdownItemHightLight Item={item} Index={i} key={i} SearchText={searchText} ShowingDropdownPopup={showingDropdownPopup} IsSearching={isSearching} onClick={() => { onClick(item);}}/>
    );
  });  

  const emptySearch = () => { 
    return <>
      <h3 className="location__global__heading--no-results">No results found</h3>
      <p className="location__global__description--no-results">Please recheck the airport or city you've entered, or select one from the list.</p>
    </>;
  };

  useEffect(() => {
    setRefinedItems(isSearching && searchText.length ? searchItems : remainingItems);
  }, [searchText, isSearching]);

  useEffect(() => {
    if(refinedItems && refinedItems.length)
    {
      setFirstItemToBeSelected(refinedItems[0]);
    }
  }, [refinedItems]);

  useEffect(() => {      
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsDropDownItemFocus(false);
          setShowingDropdownPopup(false);
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (    
    <div className="dropdown" ref={wrapperRef}>
      {currentLocation && (!isSearching || !searchText.length)  && <section className="location global">
        <h3 className="location__global__heading">
          <i className="icon icon-location location__icon location__icon--location"></i>Current location
        </h3>
        <ol className="location__list">
          <li tabindex="-1" className="location__item js-dropdown-select-item js-location-list pointer" onClick={() => { onClick(currentLocation);}}>
            <div tabindex="-1" className="dropdown__link js-select-body js-location-link">
              <div className="location__airport" aria-hidden="true">
                <p className="location__airport__city" data-location-value="Ho Chi Minh City">
                  <span>{currentLocation.City},</span> {currentLocation.Country}
                </p>
                <p className="location__airport__name">{currentLocation.Airport}</p>
              </div>
              <i className="icon icon-tailfin-ek" aria-hidden="true"></i>
              <p className="location__airport__acronym " aria-hidden="true">{currentLocation.AirportCode}</p>
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


