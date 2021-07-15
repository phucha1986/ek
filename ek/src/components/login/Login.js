import React, { useState, useEffect } from 'react';
import ErrorMessage from '../commons/ErrorMessage';
import EKInput from '../commons/EKInput';
import EKCheckbox from '../commons/EKCheckbox';
import EKButton from '../commons/EKButton';
import LoginTitle from '../login/LoginHeader';
import store from './../../store.js';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const[errorList, setErrorList] = useState([]);
  const[userNameValue, setUserNameValue] = useState('EK619931045');
  const[passwordValue, setPasswordValue] = useState('test');
  const[isLogging, setIsLogging] = useState(false);
  
  useEffect(() => {
    document.title = "Login to Emirates";
  }, []);


  const loggedInAction = () => ({ type: 'loggedIn', payload: { userName: 'Antonio', id: 'EK 619 931 045'}});

  const loggedInThunk = (userNameValue) => dispatch => setTimeout(function(){
    if(userNameValue === "EK619931045")
    {      
      dispatch(loggedInAction());      
      localStorage.setItem ('loggedIn', true);
      history.push('/MyStatement');
    }
  }, 1500);

  function login()
  {
    setErrorList([]);

    if(userNameValue === '')
    {      
      setErrorList(errorMessages => [...errorMessages, ["Email address or Emirates Skywards number: This is a mandatory field, please check and try again. "]]);
    }
    if(passwordValue === '')
    {      
      setErrorList(errorMessages => [...errorMessages, ["Password: This is a mandatory field, please check and try again. "]]);
    }            

    if(!errorMessages.length)
    {
      setIsLogging(true);
      store.dispatch(
        loggedInThunk(userNameValue)
      );
    }        
  }
  function handleSubmit(e)
  {    
    login();
    return false;
  }

  return (
    <div aria-live="polite">
      <LoginTitle />
      <div>
        <div className="login-container login-central">
          <div className="split login-central__split">
            <div className="split__left login-central__split-left">
              <section className="login-form__container">
                <h2 className="login-form__heading">Login</h2>                
                <ErrorMessage messages={errorList} />       
                <EKInput title="Email or Emirates Skywards number" id="sso-email" type="text" inputValue={userNameValue} setInputValue={setUserNameValue} />
                <p className="login-form__p">
                  <a data-id="pagebody_link" data-link="Forgot your email or account number?" title="Forgot your email or account number?" href="/account/vn/vietnamese/login/forgot_membership_number.aspx?section=MYA&amp;th=4209188f5a9c44dc0289b4298720134a7ccdbd09&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot your email or account number?</a>
                </p>
                <EKInput title="Password" id="sso-password" type="password" inputValue={passwordValue} setInputValue={setPasswordValue} />                
                <p className="login-form__p">
                  <a data-id="pagebody_link" data-link="Forgot/Create password" title="Quên/Tạo mật khẩu" href="/account/vn/vietnamese/login/forgot_membership_password.aspx?section=MYA&amp;th=5e2bd2de30719dede1e505285ab12c72c9e11cb2&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot/Create password</a>
                </p>
                <div className="login-form__remember">
                  <EKCheckbox id="chkRememberMe" title="Keep me logged in on this device" />
                </div>
                <EKButton id="btnLogin" title="Login" handleSubmit={handleSubmit} IsLoading={isLogging} />
                
              </section></div><div className="split__or-line login-central__or-line"><img title="" alt="" className="split__or login-central__or" aria-hidden="false" src="https://c.ekstatic.net/account/uiassets/or.svg"/></div><div className="split__right login-central__split-right"><div><div className="skywards-form"><section className="skywards-form__second-part-container"><h2 className="skywards-form__title">Not an Emirates Skywards member yet?</h2><div><div className="skywards-form__text"><p>Register now to make the most of every mile with <a data-id="pagebody_link" data-link="Emirates Skywards" title="Emirates Skywards" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d" className="link link--with-hover-bg link--default link--underline skywards-form__link"><span className="link__text link__text--underline">Emirates Skywards</span></a></p></div></div><a data-id="pagebody_cta" data-link="Register now" title="Tham gia ngay" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d&amp;refurl=%2Fvn%2Fvietnamese" className="link link--default skywards-form__register-now call-to-action call-to-action__secondary call-to-action--middle"><span className="link__text">Join now</span></a></section></div></div></div></div></div></div></div>

    
  );
}

export default Login;
