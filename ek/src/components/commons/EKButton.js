const EKButton = (params) => {

  return (
    <div className="login-form__action-btn">
      <button id={params.id} aria-disabled="false" className="call-to-action call-to-action__primary call-to-action--middle" onClick={params.handleSubmit}>{params.title}</button>
    </div>   
  );
}

export default EKButton;
