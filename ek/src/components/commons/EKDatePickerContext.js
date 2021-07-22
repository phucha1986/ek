import React, { useState } from "react";

const EKDatePickerContext = React.createContext('');
const EKDatePickerProvider = (params) => {
  
  const [isDepartFocus, setIsDepartFocus] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSelectingDepartureDate, setIsSelectingDepartureDate] = useState(false);
  const [isSelectingArrivalDate, setIsSelectingArrivalDate] = useState(false);
  const [isOneWay, setIsOneWay] = useState(false);
  
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
    <EKDatePickerContext.Provider value={{showingCalendar: [isDepartFocus, setIsDepartFocus], 
      selectingDepartureDate: [isSelectingDepartureDate, setIsSelectingDepartureDate],
      selectingArrivalDate: [isSelectingArrivalDate, setIsSelectingArrivalDate],
      departureDateState: [departureDate, setDepartureDate],
      arrivalDateState: [arrivalDate, setArrivalDate],
      oneWayState: [isOneWay, setIsOneWay],
      onDepartChange, onDepartFocus, onDepartBlur, onArrivalFocus, onArrivalBlur
      }}>
      {params.children}
    </EKDatePickerContext.Provider>
  );
}

export { EKDatePickerProvider, EKDatePickerContext };
