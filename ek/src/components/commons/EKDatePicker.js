const EKDatePicker = (params) => {

  return (    
    <div className="DateInput_wrapper date-input-range-picker">      
        <div className="DateInput_inner-wrapper">
          <label for="startDate" className="DateInput_label DateInput_label__multi DateInput_label__focused">{params.FirstText}</label>
          <label for="endDate" className="DateInput_label DateInput_label__multi DateInput_label__focused">{params.SecondText}</label>
        </div>
        <div className="DateRangePicker DateRangePicker_1"><div><div className="DateRangePickerInput DateRangePickerInput_1"><div className="DateInput DateInput_1" role="application"><input className="DateInput_input DateInput_input_1 DateInput_input__readOnly DateInput_input__readOnly_2" aria-label="" type="text" id="startDate" name="startDate" placeholder="" autocomplete="off" readonly="" aria-describedby="DateInput__screen-reader-message-startDate" tabindex="0" value="08 Jul 21" /><p className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-startDate">Please choose your departure date Use the page up key to select the next month and the page down key to select the previous month. Use arrow keys to select the dates. After selecting the dates, use tab key to select one way or flexible dates options.</p></div><div className="DateRangePickerInput_arrow DateRangePickerInput_arrow_1" aria-hidden="true" role="presentation">-</div><div className="DateInput DateInput_1" role="application"><input className="DateInput_input DateInput_input_1 DateInput_input__readOnly DateInput_input__readOnly_2" aria-label="" type="text" id="endDate" name="endDate" placeholder="" autocomplete="off" readonly="" aria-describedby="DateInput__screen-reader-message-endDate" tabindex="-1" value="13 Aug 21" /><p className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-endDate">Please choose your departure date Use the page up key to select the next month and the page down key to select the previous month. Use arrow keys to select the dates. After selecting the dates, use tab key to select one way or flexible dates options.</p></div></div></div></div>      
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      
    </div>
    
  );
}

export default EKDatePicker;
