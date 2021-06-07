function Login() {
  return (
    <div aria-live="polite">
      <div>
        <div class="login-container login-central">
          <div class="split login-central__split">
            <div class="split__left login-central__split-left">
              <section class="login-form__container">
                <h2 class="login-form__heading">Đăng nhập</h2>
                <form>
                  <div class="login-form__form-field">
                    <span class="input-field">
                      <input name="username" type="hidden" value=""/>
                      <span class="input-field__field">
                        <input aria-labelledby="sso-email_label" class="input-field__input ellipsis" for="email" pattern="^\s*((EK|ek|Ek|eK)\s*(\d\s*){9}|00\s*(\d\s*){9}|(\d\s*){9}|.+@.+\..+)$" required="" aria-required="true" id="sso-email" type="text" autocomplete="off" value=""/>
                      </span>
                      <label for="sso-email" id="sso-email_label" class="input-field__placeholder">Email hoặc mã Emirates Skywards</label>
                    </span>
                  </div>
                  <p class="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot your email or account number?" title="Quên email hoặc số tài khoản?" href="/account/vn/vietnamese/login/forgot_membership_number.aspx?section=MYA&amp;th=4209188f5a9c44dc0289b4298720134a7ccdbd09&amp;refurl=%2Fvn%2Fvietnamese" class="link link--with-hover-bg link--underline login-form__link">Quên email hoặc số tài khoản?</a>
                  </p>
                  <div class="login-form__form-field">
                    <span class="input-field">
                      <input name="password" type="hidden" value=""/>
                      <span class="input-field__field">
                        <input aria-labelledby="sso-password_label" class="input-field__input ellipsis" id="sso-password" type="password" required="" aria-required="true" autocomplete="off" value=""/>
                      </span>
                      <label for="sso-password" id="sso-password_label" class="input-field__placeholder">Mật khẩu</label>
                    </span>
                  </div>
                  <p class="login-form__p">
                    <a data-id="pagebody_link" data-link="Forgot/Create password" title="Quên/Tạo mật khẩu" href="/account/vn/vietnamese/login/forgot_membership_password.aspx?section=MYA&amp;th=5e2bd2de30719dede1e505285ab12c72c9e11cb2&amp;refurl=%2Fvn%2Fvietnamese" class="link link--with-hover-bg link--underline login-form__link">Quên/Tạo mật khẩu</a>
                  </p>
                  <div class="login-form__remember">
                    <div class="checkbox-field">
                      <input class="checkbox-field__input" id="checkbox-field__0" type="checkbox" name="rememberMe"/>
                      <label class="checkbox-field__label icon icon-check" for="checkbox-field__0">Lưu thông tin của tôi trên thiết bị này
                      </label>
                    </div>
                  </div>
                  <div class="login-form__action-btn">
                    <button id="login-button" aria-disabled="false" type="submit" class="call-to-action call-to-action__primary call-to-action--middle">Đăng nhập</button>
                  </div>
                </form></section></div><div class="split__or-line login-central__or-line"><img title="" alt="" class="split__or login-central__or" aria-hidden="false" src="https://c.ekstatic.net/account/uiassets/or.svg"/></div><div class="split__right login-central__split-right"><div><div class="skywards-form"><section class="skywards-form__second-part-container"><h2 class="skywards-form__title">Chưa phải là hội viên Emirates Skywards?</h2><div><div class="skywards-form__text"><p>Đăng ký ngay để tận dụng tối ưu từng dặm với <a data-id="pagebody_link" data-link="Emirates Skywards" title="Emirates Skywards" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d" class="link link--with-hover-bg link--default link--underline skywards-form__link"><span class="link__text link__text--underline">Emirates Skywards</span></a></p></div></div><a data-id="pagebody_cta" data-link="Register now" title="Tham gia ngay" href="/account/vn/vietnamese/light-registration/?section=MYA&amp;th=8dc2ce9d13387344e461cf5bbacb6861f7c4731d&amp;refurl=%2Fvn%2Fvietnamese" class="link link--default skywards-form__register-now call-to-action call-to-action__secondary call-to-action--middle"><span class="link__text">Tham gia ngay</span></a></section></div></div></div></div></div></div></div>

    
  );
}

export default Login;
