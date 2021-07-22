import React, { useEffect, useState, useRef, useContext } from "react";
import { MONTHS } from "../../data/calendar";
import EKCalendar from "./EKCalendar";
import { EKDatePickerContext } from "./EKDatePickerContext";

const EKCalendars = () => {
  const { showingCalendar, 
    selectingDepartureDate,
    selectingArrivalDate,
    departureDateState,
    arrivalDateState,
    onDepartChange, onDepartFocus, onDepartBlur, onArrivalFocus, onArrivalBlur
    } = useContext(EKDatePickerContext);
  const [isDepartFocus, setIsDepartFocus] = showingCalendar;
  const [departureDate, setDepartureDate] = departureDateState;
  const [arrivalDate, setArrivalDate] = arrivalDateState;
  const [isSelectingDepartureDate, setIsSelectingDepartureDate] = selectingDepartureDate;
  const [isSelectingArrivalDate, setIsSelectingArrivalDate] = selectingArrivalDate;  
  
  let today = new Date();    
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  let todayPlus1Month = new Date(today.setMonth(currentMonth + 1));
  const [nextMonth, setNextMonth] = useState(todayPlus1Month.getMonth());
  const [nextMonthYear, setNextMonthYear] = useState(todayPlus1Month.getFullYear());
  
  const wrapperRef = useRef(null);  

  const next = () => {
    setCurrentYear((currentMonth === 11) ? currentYear + 1 : currentYear);
    setCurrentMonth((currentMonth + 1) % 12);    

    setNextMonthYear((nextMonth === 11) ? nextMonthYear + 1 : nextMonthYear);
    setNextMonth((nextMonth + 1) % 12);
  }

  const previous = () => {
    setCurrentYear((currentMonth === 0) ? currentYear - 1 : currentYear);
    setCurrentMonth((currentMonth === 0) ? 11 : currentMonth - 1);  

    setNextMonthYear((nextMonth === 0) ? nextMonthYear - 1 : nextMonthYear);
    setNextMonth((nextMonth === 0) ? 11 : nextMonth - 1);
  }

  const onOneWayClick = () =>
  {
    
  };

  const onChangeMonthClick = (month) => {
    if(month == 1)
    {
      next();
    }else{
      previous();
    }
  };
  
  useEffect(() => {      
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsDepartFocus(false);
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
    <eol-calendar class={`eol-calendar-oneway ${isDepartFocus ? 'eol-calendar--visible eol-calendar--top' : ''}`} ref={wrapperRef}>
      <div className="ek-datepicker__holder">
        <div className="ek-datepicker ek-unselectable">
          <div className="ek-datepicker__header">
            <h2 className="ek-datepicker__header-text">
              <span className="icon icon-outbound-flight picker-container__icon"></span>Please choose your {isSelectingDepartureDate ? 'depart' : 'arrival'} date
              <a className="ek-datepicker__popup-close">
                <i className="icon icon-close"></i>
              </a>
            </h2>
            <div className="ek-datepicker__radio">
              <label className="checkbox flexible-date">
                <input type="checkbox" className="checkbox__input js-flexible-dates"/>
                <div className="checkbox__checkmark"></div>My dates are flexible (-/+ 3 days)
              </label>
              <label className="checkbox one-way">
                <input type="checkbox" className="checkbox__input js-one-way control__one-way" onClick={onOneWayClick}/>
                <div className="checkbox__checkmark"></div>One way
              </label>
            </div>
          </div>
          <div className="ek-datepicker__column">
            <div className="ek-datepicker__column-title" aria-live="assetive">
              <div className="ek-datepicker__column-label label-month">{MONTHS[currentMonth]}</div>
              <div className="ek-datepicker__column-label label-year">{currentYear}</div>
              <a href="javascript:void(0);" onClick={() => {onChangeMonthClick(-1);}} tabindex="-1" className="ek-datepicker__button ek-datepicker__button--prev icon icon-arrow-left">Previous Month</a>
            </div>
            <EKCalendar Month={currentMonth} Year={currentYear} SetDepartureDate={setDepartureDate} SetArrivalDate={setArrivalDate} IsSelectingDepartureDate={isSelectingDepartureDate} IsSelectingArrivalDate={isSelectingArrivalDate} SetIsSelectingArrivalDate={setIsSelectingArrivalDate} SetIsSelectingDepartureDate={setIsSelectingDepartureDate} DepartureDate={departureDate} ArrivalDate={arrivalDate}/>
          </div>
          <div className="ek-datepicker__column">
            <div className="ek-datepicker__column-title" aria-live="assetive">
              <div className="ek-datepicker__column-label label-month">{MONTHS[nextMonth]}</div>
              <div className="ek-datepicker__column-label label-year">{nextMonthYear}</div>
              <a href="javascript:void(0);" onClick={() => {onChangeMonthClick(1);}} tabindex="-1" className="ek-datepicker__button ek-datepicker__button--next icon-arrow-right">Next Month</a>
            </div>
            <EKCalendar Month={nextMonth} Year={nextMonthYear}/>
          </div>
        </div>
      </div>
    </eol-calendar>
  );
}

export default EKCalendars;
