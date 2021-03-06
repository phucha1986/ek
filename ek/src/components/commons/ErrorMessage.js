
const ErrorMessage = (params) => {

  let hasError = params.messages.length > 0;
  let errorMessages = params.messages.map((item, i) => {
    return (
      <p className="nofocus" key={i}>
        {item}
      </p>
    );
  });
  return (
    <div aria-live="off" className={`login-error login-form__error ${hasError ? '' : 'hidden'}`}>
      {errorMessages}
    </div>    
  );
}

export default ErrorMessage;
