import React, { useState } from 'react';
import ErrorMessage from '../commons/ErrorMessage';

function Login() {
  const[userNameToggle, setUserNameToggle] = useState(false);
  const[passwordToggle, setPasswordToggle] = useState(false);
  const[rememberMeToggle, setRememberMeToggle] = useState(false);  
  const[errorMessages, setErrorMessages] = useState([]);
  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  function onUserNameToggle()
  {
    setUserNameToggle(!userNameToggle);    
  }
  
  function onPasswordToggle()
  {
    setPasswordToggle(!passwordToggle);
  }

  function onRememberMeToggle()
  {
    setRememberMeToggle(!rememberMeToggle);
  }
  function login()
  {
    setErrorMessages([]);

    if(!userName)
    {      
      setErrorMessages(state => [...state, "Email address or Emirates Skywards number: This is a mandatory field, please check and try again. "]);
    }
    if(!password)
    {      
      setErrorMessages(state => [...state, "Password: This is a mandatory field, please check and try again. "]);
    }
    return !errorMessages.length > 0;
  }
  function handleSubmit(e)
  {    
    if(!login())
    {
      e.preventDefault();
    }
  }
  return (
    <div aria-live="polite">
      <div>
        <div className="login-container login-central">
          <div className="split login-central__split">
            <div className="split__left login-central__split-left">
              <section className="login-form__container">
                <h2 className="login-form__heading">Login</h2>                
                <ErrorMessage messages={errorMessages} />
                <form onSubmit={handleSubmit}>
                  <div className="login-form__form-field">
                    <span className={`input-field ${userNameToggle || userName != '' ? 'input-field--active' : ''}`}>
                      <input name="username" type="hidden" value={userName}/>
                      <span className="input-field__field">
                        <input aria-labelledby="sso-email_label" className="input-field__input ellipsis" for="email"  id="sso-email" type="text" pattern="^\s*((EK|ek|Ek|eK)\s*(\d\s*){9}|00\s*(\d\s*){9}|(\d\s*){9}|.+@.+\..+)$" autocomplete="off" value={userName} onFocus={onUserNameToggle} onBlur={onUserNameToggle} onChange={(e) => setUserName(e.target.value)}/>
                      </span>
                      <label for="sso-email" id="sso-email_label" className="input-field__placeholder">Email or Emirates Skywards number</label>
                    </span>
                  </div>
                  <p className="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot your email or account number?" title="Forgot your email or account number?" href="/account/vn/vietnamese/login/forgot_membership_number.aspx?section=MYA&amp;th=4209188f5a9c44dc0289b4298720134a7ccdbd09&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot your email or account number?</a>
                  </p>
                  <div className="login-form__form-field">
                    <span className={`input-field ${passwordToggle || password != '' ? 'input-field--active' : ''}`}>
                      <input name="password" type="hidden" value={password}/>
                      <span className="input-field__field">
                        <input aria-labelledby="sso-password_label" className="input-field__input ellipsis" id="sso-password" type="password" required="" aria-required="true" autocomplete="off" value={password} onFocus={onPasswordToggle} onBlur={onPasswordToggle} onChange={(e) => setPassword(e.target.value)}/>
                      </span>
                      <label for="sso-password" id="sso-password_label" className="input-field__placeholder">Password</label>
                    </span>
                  </div>
                  <p className="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot/Create password" title="Quên/Tạo mật khẩu" href="/account/vn/vietnamese/login/forgot_membership_password.aspx?section=MYA&amp;th=5e2bd2de30719dede1e505285ab12c72c9e11cb2&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot/Create password</a>
                  </p>
                  <div className="login-form__remember">
                    <div className="checkbox-field">
                      <input className="checkbox-field__input" id="checkbox-field__0" type="checkbox" name="rememberMe" onChange={onRememberMeToggle} checked={rememberMeToggle}/>
                      <label className={`checkbox-field__label icon ${rememberMeToggle ? 'icon-check' : ''}`} for="checkbox-field__0">Keep me logged in on this device
                      </label>
                    </div>
                  </div>
                  <div className="login-form__action-btn">
                    <button id="login-button" aria-disabled="false" type="submit" className="call-to-action call-to-action__primary call-to-action--middle" onClick={login}>Login</button>
                  </div>
                </form></section></div><div className="split__or-line login-central__or-line"><img title="" alt="" className="split__or login-central__or" aria-hidden="false" src="https://c.ekstatic.net/account/uiassets/or.svg"/></div><div className="split__right login-central__split-right"><div><div className="skywards-form"><section className="skywards-form__second-part-container"><h2 className="skywards-form__title">Not an Emirates Skywards member yet?</h2><div><div className="skywards-form__text"><p>Register now to make the most of every mile with <a data-id="pagebody_link" data-link="Emirates Skywards" title="Emirates Skywards" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d" className="link link--with-hover-bg link--default link--underline skywards-form__link"><span className="link__text link__text--underline">Emirates Skywards</span></a></p></div></div><a data-id="pagebody_cta" data-link="Register now" title="Tham gia ngay" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d&amp;refurl=%2Fvn%2Fvietnamese" className="link link--default skywards-form__register-now call-to-action call-to-action__secondary call-to-action--middle"><span className="link__text">Join now</span></a></section></div></div></div></div></div></div></div>

    
  );
}

export default Login;
