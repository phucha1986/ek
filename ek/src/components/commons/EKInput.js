
import React, { useState } from 'react';

const EKInput = (params) => {

  const[inputToggle, setInputToggle] = useState(false);
  function onInputToggle()
  {
    setInputToggle(!inputToggle);    
  }
  return (
    <div className="login-form__form-field">
      <span className={`input-field ${inputToggle || params.inputValue !== '' ? 'input-field--active' : ''}`}>
        <input name={params.name} type="hidden" value={params.inputValue}/>
        <span className="input-field__field">
          <input className="input-field__input ellipsis" id={params.id} type={params.type} pattern={params.pattern} value={params.inputValue} onFocus={onInputToggle} onBlur={onInputToggle} onChange={(e) => params.setInputValue(e.target.value)}/>
        </span>
        <label for={params.id}  id={params.id + '_label'} className="input-field__placeholder">{params.title}</label>
      </span>
    </div>   
  );
}

export default EKInput;
