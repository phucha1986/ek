import React, { useState } from 'react';

const EKCheckbox = ({id, title}) => {

  const[isChecked, setIsChecked] = useState(false);
  function onToggle()
  {
    setIsChecked(!isChecked);
  }
  return (
    <div className="checkbox-field">
      <input className="checkbox__input" id={id} type="checkbox" name={id} onChange={onToggle} checked={isChecked}/>
      <label for={id} className={`checkbox__text ${isChecked ? 'icon-check' : ''}`}>{title}
      </label>
    </div> 
  );
}

export default EKCheckbox;
