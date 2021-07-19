import React, { useState } from 'react';

const EKCheckbox = (params) => {

  const[rememberMeToggle, setRememberMeToggle] = useState(false);
  function onRememberMeToggle()
  {
    setRememberMeToggle(!rememberMeToggle);
  }
  return (
    <div className="checkbox-field">
      <input className="checkbox__input" id={params.id} type="checkbox" name="rememberMe" onChange={onRememberMeToggle} checked={rememberMeToggle}/>
      <label for={params.id} className={`checkbox__text ${rememberMeToggle ? 'icon-check' : ''}`}>{params.title}
      </label>
    </div> 
  );
}

export default EKCheckbox;
