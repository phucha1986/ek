import React, { useState, useEffect, useRef } from 'react';

const EKClassDropdownPopup = ({ selectedClass, setSelectedClass, flightClasses, setShowingDropdownPopup }) => {    
  const wrapperRef = useRef(null);

  const onItemSelected = item =>
  {
    setSelectedClass(item);
    setShowingDropdownPopup(false);
  };

  var items = flightClasses && flightClasses.length ? flightClasses.map((item, i) => {
    return <a onClick={() => { onItemSelected(item); }} tabindex="-1" role="option" aria-selected="true" className={`class-dropdown__link js-dropdown-select-item ${selectedClass.Type == item.Type ? 'active' : ''}`}>
      <p>{item.Type}</p>
      <i className="class-dropdown__icon icon-check-thick"></i>
    </a>
  }) : null;

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
    <section className="location class-dropdown" data-default-className="Economy" role="listbox">
      <p className="class-dropdown__title">All Classes</p>
      {items}
      </section>
  </div>

 
  );
}

export default EKClassDropdownPopup;


