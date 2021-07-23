import React, { useState, useEffect, useRef } from 'react';
import EKDropdownItemHightLight from './EKDropdownItemHightLight';

const EKPassengerDropdownPopup = (params) => {  
  const { setShowingDropdownPopup, totalPax, setTotalPax } = params;
  const wrapperRef = useRef(null);
  const [adultPax, setAdultPax] = useState(1);
  const [childPax, setChildPax] = useState(0);
  const [infantPax, setInfantPax] = useState(0);

  const addPax = (pax, setPax, increase) => {
    if(!increase && pax == 1 && pax === adultPax)
    {
      return;
    }
    if(!increase && pax == 0 && pax !== adultPax)
    {
      return;
    }
    if(totalPax == 9 && increase)
    {
      return;
    }
    setPax(pax + (increase ? 1: -1));
    setTotalPax(totalPax + (increase ? 1: -1));
  };

  useEffect(() => {      
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShowingDropdownPopup(false);
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
  <div className="dropdown" tabindex="-1" ref={wrapperRef}>
    <div className="dropdown__heading"></div>
    <section className="location passenger-container">
        <h3 className="passenger-heading">Passengers</h3>
        <p className="passenger-inline-error hidden" role="alert">Error message</p>
        <div className={`increment-field js-increment-field ${adultPax == 1 ? 'increment-field--subtract-disabled' : ''} ${totalPax == 9 ? 'increment-field--max' : ''}`} data-channel="passenger" data-type="adults" data-min="1" data-max="9" data-initial="">
          <button onClick={() => {addPax(adultPax, setAdultPax, true);}} type="button" className="js-increment-increase increment-field__button increment-field__increase" aria-disabled="false"><span className="visually-hidden">Increase number of Adult passengers</span><span className="icon icon-plus"></span></button>
          <div className="increment-field__text-container"><label className="increment-field__label">  <span className="increment-field__value js-increment-value">{adultPax}</span><span className="js-increment-label" data-singular="Adult" data-plural="Adults">Adult</span>  </label><span className="increment-field__detail">Ages 12+</span></div>
          <button onClick={() => {addPax(adultPax, setAdultPax, false);}} type="button" className="js-increment-decrease increment-field__button increment-field__decrease"><span className="visually-hidden">Decrease number of Adult passengers</span><span className="icon icon-minus"></span></button><input className="increment-field__hiddenInput js-hidden-input" value={adultPax}/>          
        </div>
        <div className="passenger-OFW-container hidden">
          <div className={`increment-field js-increment-field`} data-channel="passenger" data-type="OFW" data-min="0" data-max="8" data-initial="">
              <button type="button" className="js-increment-increase increment-field__button increment-field__increase" aria-disabled="false"><span className="visually-hidden">Increase number of OFW passengers</span><span className="icon icon-plus"></span></button>
              <div className="increment-field__text-container"><label className="increment-field__label">  <span className="increment-field__value js-increment-value">0</span><span className="js-increment-label" data-singular="OFW" data-plural="OFWs">OFW</span>  </label><span className="increment-field__detail">Overseas Filipino Workers</span></div>
              <button type="button" className="js-increment-decrease increment-field__button increment-field__decrease" aria-disabled="true"><span className="visually-hidden">Decrease number of OFW passengers</span><span className="icon icon-minus"></span></button><input className="increment-field__hiddenInput js-hidden-input" value="0"/><span className="visually-hidden js-increment-accessibility" aria-live="polite">increment accessibility</span>
          </div>
        </div>
        <div className="passenger-teenager-container hidden">
          <div className="increment-field increment-field--subtract-disabled js-increment-field" data-channel="passenger" data-type="teenagers" data-min="0" data-max="8" data-initial="">
              <button type="button" className="js-increment-increase increment-field__button increment-field__increase" aria-disabled="false"><span className="visually-hidden">Increase number of Teenager passengers</span><span className="icon icon-plus"></span></button>
              <div className="increment-field__text-container"><label className="increment-field__label">  <span className="increment-field__value js-increment-value">0</span><span className="js-increment-label" data-singular="Teenager" data-plural="Teenagers">Teenager</span>  </label><span className="increment-field__detail">Ages 12-15</span></div>
              <button type="button" className="js-increment-decrease increment-field__button increment-field__decrease" aria-disabled="true"><span className="visually-hidden">Decrease number of Teenager passengers</span><span className="icon icon-minus"></span></button><input className="increment-field__hiddenInput js-hidden-input" value="0"/><span className="visually-hidden js-increment-accessibility" aria-live="polite">increment accessibility</span>
          </div>
        </div>
        <div className={`increment-field js-increment-field ${childPax == 0 ? 'increment-field--subtract-disabled' : ''} ${totalPax == 9 ? 'increment-field--max' : ''}`} data-channel="passenger" data-type="children" data-min="" data-max="8" data-initial="">
          <button onClick={() => {addPax(childPax, setChildPax, true);}} type="button" className="js-increment-increase increment-field__button increment-field__increase" aria-disabled="false"><span className="visually-hidden">Increase number of Child passengers</span><span className="icon icon-plus"></span></button>
          <div className="increment-field__text-container"><label className="increment-field__label">  <span className="increment-field__value js-increment-value">{childPax}</span><span className="js-increment-label" data-singular="Child" data-plural="Children">Child</span>  </label><span className="increment-field__detail">Ages 2-11</span></div>
          <button onClick={() => {addPax(childPax, setChildPax, false);}} type="button" className="js-increment-decrease increment-field__button increment-field__decrease" aria-disabled="true"><span className="visually-hidden">Decrease number of Child passengers</span><span className="icon icon-minus"></span></button><input className="increment-field__hiddenInput js-hidden-input" value="0"/><span className="visually-hidden js-increment-accessibility" aria-live="polite">increment accessibility</span>
        </div>
        <div className={`increment-field js-increment-field ${infantPax == 0 ? 'increment-field--subtract-disabled' : ''} ${totalPax == 9 ? 'increment-field--max' : ''}`} data-channel="passenger" data-type="infants" data-min="" data-max="1" data-initial="">
          <button onClick={() => {addPax(infantPax, setInfantPax, true);}} type="button" className="js-increment-increase increment-field__button increment-field__increase" aria-disabled="false"><span className="visually-hidden">Increase number of Infant passengers</span><span className="icon icon-plus"></span></button>
          <div className="increment-field__text-container"><label className="increment-field__label">  <span className="increment-field__value js-increment-value">{infantPax}</span><span className="js-increment-label" data-singular="Infant" data-plural="Infants">Infant</span>  </label><span className="increment-field__detail">Age under 2, on lap</span></div>
          <button onClick={() => {addPax(infantPax, setInfantPax, false);}} type="button" className="js-increment-decrease increment-field__button increment-field__decrease" aria-disabled="true"><span className="visually-hidden">Decrease number of Infant passengers</span><span className="icon icon-minus"></span></button><input className="increment-field__hiddenInput js-hidden-input" value="0"/><span className="visually-hidden js-increment-accessibility" aria-live="polite">increment accessibility</span>
        </div>
        <div className="passenger__information">
          <p className="passenger__information-text">Please note: You can book for a maximum of nine passengers.</p>
        </div>
    </section>
  </div>

 
  );
}

export default EKPassengerDropdownPopup;


