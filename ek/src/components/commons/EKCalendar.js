import { useContext } from "react";
import EKCalendarCell from "./EKCalendarCell";
import { EKDatePickerContext } from "./EKDatePickerContext";

const EKCalendar = (params) => {

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

  const { Month, Year } = params;  
  let today = new Date();
  let date = 1;
  const firstDay = (new Date(Year, Month)).getDay();
  const daysInMonth = 32 - new Date(Year, Month, 32).getDate();  
  const sixRows = [0, 1, 2, 3, 4, 5];
  const sevenDays = [0, 1, 2, 3, 4, 5, 6];    

  const getTableRow = (firstDay, daysInMonth, rowIndex, dayIndex) => {    
      const emptyTD = <td key={rowIndex + '_' + dayIndex}></td>;
      if(rowIndex == 0 && dayIndex < firstDay)
      {
        return emptyTD;
      }else if (date > daysInMonth)
      {
        return emptyTD;
      }
      else{               
        let isToday = date == today.getDate() && Year == today.getFullYear() && Month == today.getMonth();            
        let key = `${date}_${Month}_${Year}`;        
        let result = <EKCalendarCell key={key} IsToday={isToday} CurrentDate={date} Month={Month} Year={Year} />
        date++;
        return result;
      }      
  };  
    
  const rows = sixRows.map((row, i) => {    
    
    const days = sevenDays.map((day, j) => {                
      return getTableRow(firstDay, daysInMonth, i, j);
    });
    return <tr key={i}>{days}</tr>;
  });  

  return (        
    <table className="ek-datepicker__table">
      <thead>
        <tr>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Sun</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Mon</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Tue</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Wed</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Thu</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Fri</div></th>
          <th className="ek-datepicker__table-header"><div role="presentation" className="ek-datepicker__header-text">Sat</div></th>                  
        </tr>                
      </thead>
      <tbody>
          {rows}
        </tbody>
    </table>          
  );
}

export default EKCalendar;
