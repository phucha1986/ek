import React, { useState } from 'react';

const EKCheckbox = (params) => {

  const[rememberMeToggle, setRememberMeToggle] = useState(false);
  function onRememberMeToggle()
  {
    setRememberMeToggle(!rememberMeToggle);
  }
  return (
    <div className="checkbox-field">
      <input className="checkbox-field__input" id={params.id} type="checkbox" name="rememberMe" onChange={onRememberMeToggle} checked={rememberMeToggle}/>
      <label for={params.id} className={`checkbox-field__label icon ${rememberMeToggle ? 'icon-check' : ''}`}>{params.title}
      </label>
    </div> 
  );
}

export default EKCheckbox;
