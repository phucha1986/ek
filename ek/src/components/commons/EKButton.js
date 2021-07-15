const EKButton = (params) => {

  return (
    <div className="login-form__action-btn">
      <button id={params.id} aria-disabled="false" className="call-to-action call-to-action__primary call-to-action--middle" onClick={params.handleSubmit}>
        {params.IsLoading && 
          <div className="login-form__button-content">
            <div role="region" aria-label="The information is loading" className="ek-spinner ek-spinner__xsmall login-form__button-loader"></div>
            <p className="login-form__loading-label" aria-live="off">Loading</p>
          </div>
        }
        {!params.IsLoading && params.title}
      </button>

      
    </div>   
  );
}

export default EKButton;
