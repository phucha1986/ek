import { useEffect, useState, useContext } from "react";
import { MONTHS } from "../../data/calendar";
import { EKDatePickerContext } from "./EKDatePickerContext";

const EKCalendarCell = (params) => {

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
  const { Month, Year, IsToday, CurrentDate } = params;
  const [isOneWay, setIsOneWay] = oneWayState;

  const checkIsSelectedDate = () =>
  {
    let currentDateTime = new Date(Year, Month, CurrentDate).getTime();
    let departureDateTime = new Date(departureDate).getTime();
    var arrivalDateTime = new Date(arrivalDate).getTime();
    if(currentDateTime == departureDateTime)
    {
      return 1;
    }else if(currentDateTime == arrivalDateTime)
    {
      return 2;
    }
    return 0;
  };

  const checkPassedDate = () => {
    const currentDateTime = new Date(Year, Month, CurrentDate).getTime();
    const todayDateTime = new Date().getTime();
    return currentDateTime <= todayDateTime;
  };

  const [checkDate, setCheckDate] = useState(checkIsSelectedDate());
  const [isSelected, setIsSelected] = useState(checkDate == 1 || checkDate ==2);
  const [isDepartureDate, setIsDepartureDate] = useState(checkDate == 1);
  const [isArrivalDate, setIsArrivalDate] = useState(checkDate == 2);
  const [isInRange, setIsInRange] = useState(false);
  const [isPassed, setIsPassed] = useState(checkPassedDate());
  const [isBeforeDeparture, setIsBeforeDeparture] = useState(checkPassedDate());
  

  const onDateClick = event => {
    let date = event.target.getAttribute('data-value');
    let passed = event.target.getAttribute('data-passed');
    if(passed == "true")
    {
      return;
    }
    let selectedDate = `${date} ${MONTHS[Month]} ${Year}`;
    let selectedDateTime = new Date(Year, Month, date).getTime();
    
    if(isSelectingDepartureDate)
    {      
      if(arrivalDate && arrivalDate.length)
      {
        const arrivalDateTime = new Date(arrivalDate).getTime();
        if(selectedDateTime >= arrivalDateTime)
        {
          return;
        }
      }
      setIsDepartureDate(true);
      setDepartureDate(selectedDate);
      setIsSelectingDepartureDate(false);
      setIsSelectingArrivalDate(!isOneWay);
      if(isOneWay)
      {
        setIsDepartFocus(false);
      }
    }else if(isSelectingArrivalDate && !isOneWay)
    {
      if(departureDate && departureDate.length)
      {
        const departureDateTime = new Date(departureDate).getTime();
        if(selectedDateTime <= departureDateTime)
        {
          return;
        }
      }
      setIsArrivalDate(true);
      setArrivalDate(selectedDate);      
      setIsSelectingArrivalDate(false);
      setIsDepartFocus(false);
    }
    setIsSelected(true);
  };

  const checkIsInRange = () => {    
    if(departureDate && departureDate.length && arrivalDate && arrivalDate.length)
    {      
      let currentDateTime = new Date(Year, Month, CurrentDate).getTime();
      let departureDateTime = new Date(departureDate).getTime();
      var arrivalDateTime = new Date(arrivalDate).getTime();
      if(currentDateTime > departureDateTime && currentDateTime < arrivalDateTime)
      {
        return true;
      }
    }
    return false;
  };

  const checkIsBeforeDeparture = () => {    
    if(departureDate && departureDate.length)
    {      
      let currentDateTime = new Date(Year, Month, CurrentDate).getTime();
      let departureDateTime = new Date(departureDate).getTime();      

      return currentDateTime < departureDateTime && isSelectingArrivalDate; 
    }
    return false;
  };  

  useEffect(() => {
    setIsInRange(checkIsInRange());
    setIsBeforeDeparture(checkIsBeforeDeparture());
    
    // setCheckDate(checkIsSelectedDate());
    // setIsSelected(checkDate == 1 || checkDate == 2);
    // setIsDepartureDate(checkDate == 1);
    // setIsArrivalDate(checkDate == 2);
    if(isSelected)
    {
      console.log("selected" + new Date(Year, Month, CurrentDate));
    }
    if(isDepartureDate)
    {
      console.log("departure date" + new Date(Year, Month, CurrentDate));
    }
    if(isArrivalDate)
    {
      console.log("arrival date" + new Date(Year, Month, CurrentDate));
    }
  }, [departureDate, arrivalDate]);

  useEffect(()=>{
    //checkIsBeforeDeparture();
  });

  return (        
    <td className={`ek-datepicker__day ${isPassed || isBeforeDeparture ? 'ek-datepicker__day--inactive' : ''} 
      ${IsToday ? 'ek-datepicker__today' : ''} 
      ${isSelected && isDepartureDate ? 'ek-datepicker__day--start' : ''} 
      ${isSelected && isArrivalDate ? 'ek-datepicker__day--end' : ''} 
      ${isInRange ? 'ek-datepicker__day-range' : ''}`}>
      <a data-value={CurrentDate} data-passed={isPassed} onClick={onDateClick}>{CurrentDate}</a>
    </td>       
  );
}

export default EKCalendarCell;
