import EKDropdownPopup from "./EKDropdownPopup";
import React, { useState } from 'react';
import EKPassengerDropdownPopup from "./EKPassengerDropdownPopup";

const EKPassengerDropdown = (params) => {  
  const { Title } = params;
  const [showingDropdownPopup, setShowingDropdownPopup] = useState(false);
  const [totalPax, setTotalPax] = useState(1);
  
  const onDropdownFocus = () =>
  {        
    setShowingDropdownPopup(true);    
  }

  const onDelete = () =>
  {    
    //setSelectedItem(null);
  };
  

  return (
    <div className={`js-dropdown dropdown-container dropdown-container--has-help ${showingDropdownPopup ? 'show' : ''}`}>
      <div className="js-passenger">
        <div className="dropdown__input-container js-dropdown-open">
          <div className="field js-fields field--active">
            <label className="field__text" tabindex="-1">{Title}</label>
            <input className="js-field-input field__input js-dropdown-open field__input--active" type="component" name="Departure airport"  autocomplete="off"  id="48c3d056-13f6-455b-adbe-ef94e244b421" aria-autocomplete="inline" aria-live="off" aria-expanded="true" value={`${totalPax} ${totalPax > 1 ? 'Passengers' : 'Passenger'}`} onFocus={onDropdownFocus} />
            
            <a href="javascript:void(0)" className="clear-x-mobile js-drop-open dropdown__clear dropdown__clear--toggle" name="toggle Passengers" aria-expanded="false" aria-hidden="true" tabindex="-1" onClick={onDelete}>
              <span className="js-toggle-text icon icon-chevron-down" aria-hidden="true"></span>
            </a>
          </div>          
        </div>
        <EKPassengerDropdownPopup setShowingDropdownPopup={setShowingDropdownPopup} totalPax={totalPax} setTotalPax={setTotalPax}/>
      </div>
    </div>    
  );
}

export default EKPassengerDropdown;
