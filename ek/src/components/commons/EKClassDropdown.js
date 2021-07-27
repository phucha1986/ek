import React, { useEffect, useState } from 'react';
import EKClassDropdownPopup from "./EKClassDropdownPopup";

const EKClassDropdown = (params) => {  
  const { title, flightClasses } = params;
  const [showingDropdownPopup, setShowingDropdownPopup] = useState(false);  
  const [selectedClass, setSelectedClass] = useState(flightClasses && flightClasses.length ? flightClasses.find(item => item.Selected) : null);
  const getFlightClass = item => item ? `${item.Type} Class` : '';
  const [flightClass, setFlightClass] = useState(getFlightClass(selectedClass));

  const onDropdownFocus = () =>
  {        
    setShowingDropdownPopup(true);    
  }

  const onDelete = () =>
  {    
    //setSelectedItem(null);
  };
  
  useEffect(() => {
    if(selectedClass)
    {
      setFlightClass(getFlightClass(selectedClass));
    }
  }, [selectedClass]);

  return (
    <div className={`js-dropdown dropdown-container dropdown-container--has-help ${showingDropdownPopup ? 'show' : ''}`}>
      <div className="js-passenger">
        <div className="dropdown__input-container js-dropdown-open">
          <div className="field js-fields field--active">
            <label className="field__text" tabindex="-1">{title}</label>
            <input className="js-field-input field__input js-dropdown-open field__input--active" type="component" name="Departure airport"  autocomplete="off"  id="48c3d056-13f6-455b-adbe-ef94e244b421" aria-autocomplete="inline" aria-live="off" aria-expanded="true" value={flightClass} onFocus={onDropdownFocus} />
            
            <a href="javascript:void(0)" className="clear-x-mobile js-drop-open dropdown__clear dropdown__clear--toggle" name="toggle Passengers" aria-expanded="false" aria-hidden="true" tabindex="-1" onClick={onDelete}>
              <span className="js-toggle-text icon icon-chevron-down" aria-hidden="true"></span>
            </a>
          </div>          
        </div>
        <EKClassDropdownPopup setShowingDropdownPopup={setShowingDropdownPopup} selectedClass={selectedClass} setSelectedClass={setSelectedClass} flightClasses={flightClasses}/>
      </div>
    </div>    
  );
}

export default EKClassDropdown;
