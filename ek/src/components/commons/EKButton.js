import React, { useState } from 'react';

const EKButton = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const onHandleSubmit = async () =>
  { 
    if(typeof params.clientSideValidation !== "function" || !params.clientSideValidation() || isLoading)
    {
      return;
    }  

    if(params.EnableLoading)
    {           
      setIsLoading(true);         
      let handleResult = await params.handleSubmit();
      if(handleResult == params.SuccessCode)
      {
        setIsLoading(false);
      }

    }else{
      params.handleSubmit();
    }
  };

  return (
    <div className="login-form__action-btn">
      <button id={params.id} aria-disabled="false" className="call-to-action call-to-action__primary call-to-action--middle" onClick={onHandleSubmit}>
        {isLoading && 
          <div className="login-form__button-content">
            <div role="region" aria-label="The information is loading" className="ek-spinner ek-spinner__xsmall login-form__button-loader"></div>
            <p className="login-form__loading-label" aria-live="off">{params.LoadingText}</p>
          </div>
        }
        {!isLoading && params.title}
      </button>

      
    </div>   
  );
}

export default EKButton;
