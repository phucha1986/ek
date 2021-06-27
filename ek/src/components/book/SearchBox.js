import EKDropdown from "../commons/EKDropdown";
import EKDatePicker from "../commons/EKDatePicker";

function SearchBox() {
    return (
        <div id="82871" data-organism="g-c-0013-advance-booking-widget">            
            <div className="e-container e-container--separator">
                <div data-auto="advance-booking-widget" className="advance-booking-widget__widget-container widget-container">
                    <div className="widget-container__widget-wrapper">
                        <div className="widget-container__bottom-content">
                            <div className="booking-widget">
                                <div className="booking-widget__action-container">
                                    <div className="checkbox-field booking-widget__action-container__classic-reward">
                                        <input type="checkbox" className="checkbox-field__input" id="classic-reward" name="classic-reward" />
                                        <label className="checkbox-field__label icon" for="classic-reward">Classic rewards</label>
                                    </div>
                                    <a className="link link--with-hover-bg booking-widget__login-link" href="#"><span className="booking-widget__login-link__regular-text">Advanced search: multi-city, promo codes, partner airlines</span><span className="booking-widget__login-link__small-text">Advanced search and Classic Rewards</span>&nbsp;<span dir="auto" className="link__chevron pictogram-wrapper pictogram-wrapper__chevron" aria-hidden="true"><i className="icon icon-chevron-right link__chevron-icon"></i></span></a>
                                </div>

                                <div className="booking-widget__list-field">
                                    <div className="booking-widget__first-row">
                                        <div className="booking-widget__second-row__column">
                                            <div>
                                                <EKDropdown Title="Departure Airport" DefaultItem="Saigon (SGN)"/>
                                               
                                            </div>
                                        </div>
                                        <div className="booking-widget__second-row__column">
                                            <div>                                                
                                                <EKDropdown Title="Arrival Airport" DefaultItem="Dubai (DXB)"/>
                                            </div>
                                        </div>
                                        <div className="booking-widget__second-row__column">
                                            <EKDatePicker FirstText="Departing" SecondText="Returning"/>                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="booking-widget__second-row">
                                    <div className="booking-widget__second-row__column">
                                        <div>                                                
                                            <EKDropdown Title="Passengers" DefaultItem="1 Aldult"/>
                                        </div>
                                    </div>
                                    <div className="booking-widget__second-row__column booking-widget__cabin-class-wrapper">
                                        <div>                                                
                                            <EKDropdown Title="Class" DefaultItem="Economy"/>
                                        </div>
                                    </div>
                                    <div className="booking-widget__second-row__column">
                                        <button type="button" className="primary__button submit_button search_flight_cta call-to-action call-to-action__primary call-to-action--multiline call-to-action--large"><div className="call-to-action__multiline-wrapper">Search flights</div></button>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default SearchBox;
  
  