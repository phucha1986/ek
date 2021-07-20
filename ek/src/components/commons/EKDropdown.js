import EKDropdownPopup from "./EKDropdownPopup";
import React, { useEffect, useState } from 'react';

const EKDropdown = (params) => {  
  const { CurrentLocation } = params;
  const [showingDropdownPopup, setIsShow] = useState(false);
  const [isDropDownItemFocus, setIsDropDownItemFocus] = useState(false);
  const [title, setTitle] = useState(params.Title);
  const [selectedItem, setSelectedItem] = useState(params.Items.find(item => item.Selected));
  const [isSearching, setIsSearching] = useState(false);
  const [currentLocationSelected, setCurrentLocationSelected] = useState(false);
  const getDescriptions = item => 
  {        
    return item != null ? `${item.City}, (${item.AirportCode})` : '';    
  }
  const [descriptions, setDescriptions] = useState(getDescriptions(selectedItem));  
  
  const onDropdownFocus = event =>
  {
    event.target.select();
    setIsShow(true);    
  }

  useEffect(() => {
    if(selectedItem != null)
    {
      setIsSearching(false);
      setDescriptions(getDescriptions(selectedItem));
      if(CurrentLocation && selectedItem.AirportCode == CurrentLocation.AirportCode)
      {
        setCurrentLocationSelected(true);
      }else{
        setCurrentLocationSelected(false);
      }
    }else{
      setDescriptions('');
      setCurrentLocationSelected(false);
    }
  }, [selectedItem]);

  useEffect(() => {
    if(!descriptions.length)
    {
      setSelectedItem(null);
    }
  }, [descriptions]);  

  const onChange = event =>
  {   
    setDescriptions(event.target.value);
  };

  const onDelete = () =>
  {    
    setSelectedItem(null);
  };

  const onKeyDown = event =>
  {    
    if (event.keyCode === 13) {      
    } else if (event.keyCode === 38) {
     
    }
    // User pressed the down arrow, increment the index
    else if (event.keyCode === 40) {     
    }
    else if (event.shiftKey && event.keyCode == 9 || event.keyCode == 9) {     
      //setIsSearching(false);
    }
    else{
      setIsSearching(true);
    }
  }

  function onDropdownBlur()
  {
    setTimeout(function(){
      if(showingDropdownPopup && !isDropDownItemFocus)
      {
        setIsSearching(false);
        setIsShow(false);        
      }
    }, 100);    
  }

  return (
    <div className={`js-dropdown-v2 dropdown-container selected ${currentLocationSelected ? 'location-icon-show' : ''} ${showingDropdownPopup ? 'show' : ''}`}>
      <div className="js-origin-dropdown">
        <div className="dropdown__input-container js-dropdown-open">
          <div className={`field js-fields ${!descriptions.length && !showingDropdownPopup? 'field--focus': 'field--active'}`}>
            <label className="field__text" for="48c3d056-13f6-455b-adbe-ef94e244b421" tabindex="-1">{title}</label>
            <input className="js-field-input field__input js-dropdown-open field__input--active" type="component" name="Departure airport"  autocomplete="off"  id="48c3d056-13f6-455b-adbe-ef94e244b421" aria-autocomplete="inline" aria-live="off" aria-expanded="true" value={descriptions} onFocus={onDropdownFocus} onBlur={onDropdownBlur} onChange={onChange} onKeyDown={onKeyDown}/>
            <button type="button" className="clear-x-mobile icon icon-delete-light  js-clear-selected  dropdown__clear" name="clear Departure airport" aria-hidden="true" tabindex="-1" onClick={onDelete}></button>
          </div>
          {currentLocationSelected && <i class="icon icon-location dropdown__location--icon"></i>}
        </div>
        <EKDropdownPopup Items={params.Items} isDropDownItemFocus={isDropDownItemFocus} setIsDropDownItemFocus={setIsDropDownItemFocus} ParentID={params.ID} Visible={showingDropdownPopup} SelectedItem={selectedItem} SetSelectedItem={setSelectedItem} CurrentLocation={CurrentLocation} SearchText={descriptions} IsSearching={isSearching} />
      </div>
    </div>    
  );
}

export default EKDropdown;
