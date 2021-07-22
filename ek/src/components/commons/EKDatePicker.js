import React, { useContext } from "react";
import EKCalendars from "./EKCalendars";
import { EKDatePickerContext } from "./EKDatePickerContext";

const EKDatePicker = () => {
  const { showingCalendar, 
    selectingDepartureDate,
    selectingArrivalDate,
    departureDateState,
    arrivalDateState,
    oneWayState,
    onDepartChange, onDepartFocus, onDepartBlur, onArrivalFocus, onArrivalBlur
    } = useContext(EKDatePickerContext);
  const [isDepartFocus, setIsDepartFocus] = showingCalendar;
  const [departureDate, setDepartureDate] = departureDateState;
  const [arrivalDate, setArrivalDate] = arrivalDateState;
  const [isSelectingDepartureDate, setIsSelectingDepartureDate] = selectingDepartureDate;
  const [isSelectingArrivalDate, setIsSelectingArrivalDate] = selectingArrivalDate;
  const [isOneWay, setIsOneWay] = oneWayState;
  

  return (    
    <div className={`textfield datefield textfield--defined ${isDepartFocus ? 'textfield--focused textfield__start--focused datefield--expanded' : ''}`}>
      <div className="textfield__controls">      
        <div className={`textfield__date textfield__date--first ${isDepartFocus || departureDate.length ? 'textfield__date--active' : ''}`}>
          <label for="search-flight-date-picker--depart" className="textfield__label">Departing</label>
          <input id="search-flight-date-picker--depart" type="text" aria-required="true" autocomplete="off" className="textfield__input textfield__input--start" readonly="readonly" data-heading="Please choose your departure date" data-icon="icon icon-outbound-flight" aria-describedby="search-flight-date-picker-depart--message" value={departureDate} onChange={onDepartChange} onFocus={onDepartFocus} onBlur={onDepartBlur}/>          
        </div>
        <span>-</span>
        <div className={`textfield__date textfield__date--second ${(isDepartFocus || arrivalDate.length) && !isOneWay ? 'textfield__date--active' : isOneWay ? 'select-return-highlight' : ''}`}>
          <label for="search-flight-date-picker--return" className="textfield__label">
            <span className={`label-text--default label-text--returning ${isOneWay ? 'eol-hidden' : ''}`}>Returning</span>
            <span className={`label-text--action label-text--return ${!isOneWay ? 'eol-hidden' : ''}`}>Add Return</span>
          </label>
          <input id="search-flight-date-picker--return" type="text" aria-required="true" autocomplete="off" className="textfield__input textfield__input--end" readonly="readonly" data-heading="Choose your return date " data-icon="icon icon-inbound-flight" aria-describedby="search-flight-date-picker-return--message" tabindex="-1" value={arrivalDate} onChange={onDepartChange} onFocus={onArrivalFocus} onBlur={onArrivalBlur}/>        
        </div>
      </div>
      <EKCalendars />        
    </div>    
  );
}

export { EKDatePicker };
