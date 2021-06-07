import React, { useState } from 'react';

function Login() {
  let userNameToggle = useState(false);
  return (
    <div aria-live="polite">
      <div>
        <div className="login-container login-central">
          <div className="split login-central__split">
            <div className="split__left login-central__split-left">
              <section className="login-form__container">
                <h2 className="login-form__heading">Login</h2>
                <form>
                  <div className="login-form__form-field">
                    <span className={`input-field  + ${userNameToggle ? 'input-field--active' : ''}`}>
                      <input name="username" type="hidden" value=""/>
                      <span className="input-field__field">
                        <input aria-labelledby="sso-email_label" className="input-field__input ellipsis" for="email" pattern="^\s*((EK|ek|Ek|eK)\s*(\d\s*){9}|00\s*(\d\s*){9}|(\d\s*){9}|.+@.+\..+)$" required="" aria-required="true" id="sso-email" type="text" autocomplete="off" value=""/>
                      </span>
                      <label for="sso-email" id="sso-email_label" className="input-field__placeholder">Email or Emirates Skywards number</label>
                    </span>
                  </div>
                  <p className="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot your email or account number?" title="Forgot your email or account number?" href="/account/vn/vietnamese/login/forgot_membership_number.aspx?section=MYA&amp;th=4209188f5a9c44dc0289b4298720134a7ccdbd09&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot your email or account number?</a>
                  </p>
                  <div className="login-form__form-field">
                    <span className="input-field">
                      <input name="password" type="hidden" value=""/>
                      <span className="input-field__field">
                        <input aria-labelledby="sso-password_label" className="input-field__input ellipsis" id="sso-password" type="password" required="" aria-required="true" autocomplete="off" value=""/>
                      </span>
                      <label for="sso-password" id="sso-password_label" className="input-field__placeholder">Password</label>
                    </span>
                  </div>
                  <p className="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot/Create password" title="Quên/Tạo mật khẩu" href="/account/vn/vietnamese/login/forgot_membership_password.aspx?section=MYA&amp;th=5e2bd2de30719dede1e505285ab12c72c9e11cb2&amp;refurl=%2Fvn%2Fvietnamese" className="link link--with-hover-bg link--underline login-form__link">Forgot/Create password</a>
                  </p>
                  <div className="login-form__remember">
                    <div className="checkbox-field">
                      <input className="checkbox-field__input" id="checkbox-field__0" type="checkbox" name="rememberMe"/>
                      <label className="checkbox-field__label icon icon-check" for="checkbox-field__0">Keep me logged in on this device
                      </label>
                    </div>
                  </div>
                  <div className="login-form__action-btn">
                    <button id="login-button" aria-disabled="false" type="submit" className="call-to-action call-to-action__primary call-to-action--middle">Đăng nhập</button>
                  </div>
                </form></section></div><div className="split__or-line login-central__or-line"><img title="" alt="" className="split__or login-central__or" aria-hidden="false" src="https://c.ekstatic.net/account/uiassets/or.svg"/></div><div className="split__right login-central__split-right"><div><div className="skywards-form"><section className="skywards-form__second-part-container"><h2 className="skywards-form__title">Chưa phải là hội viên Emirates Skywards?</h2><div><div className="skywards-form__text"><p>Đăng ký ngay để tận dụng tối ưu từng dặm với <a data-id="pagebody_link" data-link="Emirates Skywards" title="Emirates Skywards" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d" className="link link--with-hover-bg link--default link--underline skywards-form__link"><span className="link__text link__text--underline">Emirates Skywards</span></a></p></div></div><a data-id="pagebody_cta" data-link="Register now" title="Tham gia ngay" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d&amp;refurl=%2Fvn%2Fvietnamese" className="link link--default skywards-form__register-now call-to-action call-to-action__secondary call-to-action--middle"><span className="link__text">Tham gia ngay</span></a></section></div></div></div></div></div></div></div>

    
  );
}

export default Login;
