import React, { useContext, useState } from "react";
import EKCalendars from "./EKCalendars";
import { EKDatePickerContext, EKDatePickerProvider } from "./EKDatePickerContext";

const EKDatePickerbackup = (params) => {
  const { showingCalendar, 
    selectingDepartureDate,
    selectingArrivalDate,
    departureDate,
    arrivalDate,
    onDepartChange, onDepartFocus, onDepartBlur, onArrivalFocus, onArrivalBlur
    } = useContext(EKDatePickerContext);
  const [isDepartFocus, setIsDepartFocus] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSelectingDepartureDate, setIsSelectingDepartureDate] = useState(false);
  const [isSelectingArrivalDate, setIsSelectingArrivalDate] = useState(false);

  const onDepartChange = () =>
  {};
  const onDepartFocus = () =>
  {
    setIsDepartFocus(true);
    setIsSelectingDepartureDate(true);
    setIsSelectingArrivalDate(false);
  };
  const onDepartBlur = () =>
  {
    //setIsSelectingDepartureDate(false);
  };

  const onArrivalFocus = () =>
  {
    setIsDepartFocus(true);
    setIsSelectingArrivalDate(true);
    setIsSelectingDepartureDate(false);
  };
  const onArrivalBlur = () =>
  {
    //setIsSelectingArrivalDate(false);
  };

  return (
    // <EKDatePickerProvider>
      <div className={`textfield datefield textfield--defined ${isDepartFocus ? 'textfield--focused textfield__start--focused datefield--expanded' : ''}`}>
        <div className="textfield__controls">      
          <div className={`textfield__date textfield__date--first ${isDepartFocus || departureDate.length ? 'textfield__date--active' : ''}`}>
            <label for="search-flight-date-picker--depart" className="textfield__label">Departing</label>
            <input id="search-flight-date-picker--depart" type="text" aria-required="true" autocomplete="off" className="textfield__input textfield__input--start" readonly="readonly" data-heading="Please choose your departure date" data-icon="icon icon-outbound-flight" aria-describedby="search-flight-date-picker-depart--message" value={departureDate} onChange={onDepartChange} onFocus={onDepartFocus} onBlur={onDepartBlur}/>          
          </div>
          <span>-</span>
          <div className={`textfield__date textfield__date--second ${isDepartFocus || arrivalDate.length ? 'textfield__date--active' : ''}`}>
            <label for="search-flight-date-picker--return" className="textfield__label">
              <span className="label-text--default label-text--returning">Returning</span>
              <span className="label-text--action label-text--return eol-hidden">Add Return</span>
            </label>
            <input id="search-flight-date-picker--return" type="text" aria-required="true" autocomplete="off" className="textfield__input textfield__input--end" readonly="readonly" data-heading="Choose your return date " data-icon="icon icon-inbound-flight" aria-describedby="search-flight-date-picker-return--message" tabindex="-1" value={arrivalDate} onChange={onDepartChange} onFocus={onArrivalFocus} onBlur={onArrivalBlur}/>        
          </div>
        </div>
        <EKCalendars IsShowingCalendar={isDepartFocus} IsSelectingDepartureDate={isSelectingDepartureDate} IsSelectingArrivalDate={isSelectingArrivalDate} SetIsShowingCalendar={setIsDepartFocus} SetDepartureDate={setDepartureDate} SetArrivalDate={setArrivalDate}
        SetIsSelectingArrivalDate={setIsSelectingArrivalDate} SetIsSelectingDepartureDate={setIsSelectingDepartureDate} DepartureDate={departureDate} ArrivalDate={arrivalDate}/>
      </div>
    // </EKDatePickerProvider>
  );
}

export { EKDatePickerbackup };
