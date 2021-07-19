import EKDropdown from "../commons/EKDropdown";
import EKDatePicker from "../commons/EKDatePicker";
import EKCheckbox from "../commons/EKCheckbox";

function SearchBox() {
    var departureAirports = [{City: 'Saigon', Country: 'Vietnam', Airport: 'Tan San Nhat Airport', AirportCode: 'SGN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png', Selected: true}, 
        {City: 'Dubai', Country: 'UAE', Airport: 'Dubai Airport', AirportCode: 'DXB', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
        {City: 'Bologna', Country: 'Italy', Airport: 'Bologna Airport', AirportCode: 'BLN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'}];
    var selectedDepartureAirports = departureAirports.find(item => item.Selected);
    var departureAirportDescription = `${selectedDepartureAirports.City} (${selectedDepartureAirports.AirportCode})`;

    var arrivalAirports = [{City: 'Saigon', Country: 'Vietnam', Airport: 'Tan San Nhat Airport', AirportCode: 'SGN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'}, 
        {City: 'Dubai', Country: 'UAE', Airport: 'Dubai Airport', AirportCode: 'DXB',  AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png', Selected: true},
        {City: 'Amman', Country: 'Jordan', Airport: 'Queen Ali International Airport', AirportCode: 'AMM', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
        {City: 'Accra', Country: 'Ghana', Airport: 'Kotoka International Airport', AirportCode: 'ACC', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
        {City: 'Bahrain', Country: 'Bahrain', Airport: 'Bahrain International Airport', AirportCode: 'BAH', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
        {City: 'Baghda', Country: 'Irag', Airport: 'Baghda International Airport', AirportCode: 'BGW', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
        {City: 'Brisbane', Country: 'Austraulia', Airport: 'Brisbane Airport', AirportCode: 'BNE', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    ];
    var selectedArrivalAirports = arrivalAirports.find(item => item.Selected);
    var arrivalAirportDescription = `${selectedArrivalAirports.City} (${selectedArrivalAirports.AirportCode})`;

    var passengers = [{Type: "Adult", Selected: true}, {Type: "Children"}, {Type: "Infant"}];
    var selectedPassengerDescription = `1 ${passengers.find(item => item.Selected).Type}`;

    var classes = [{Type: "Economy", Selected: true}, {Type: "Business"}, {Type: "First"}];
    var selectedClassDescription = `${classes.find(item => item.Selected).Type} Class`;
    
    return (
        <>
        <div className="widget js-widget">
            <div className="widget__container wc1">
                <div className="widget__tab-wrapper widget--items4 wi4">
                    <ul className="widget__tab-list grid grid--full">
                        <li id="tab0" data-galabel="search-flight__widget-heading__text" className="automation-widget-tab-search-flight__widget-heading__text widget__tab js-widget-tab panel-active grid__item one-half medium--one-quarter js-tabItem" role="tab" tabindex="0" widget-type="search-flight">
                            <a href="#panel0" className="widget__tab__link js-widget-tab-link" tabindex="-1">
                                <div className="widget__tab__content">
                                    <i className="widget__tab__icon icon icon-a-380-outbound" aria-hidden="true"></i>
                                    <p className="widget__tab__label">Search flights</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="widget__panel js-widget-panel panel-active">
                        <div className="covid-service__alert theme-blue desktop-view">
                            <div className="covid-service__alert-inner theme-blue">
                                <span className="icon icon-map" aria-hidden="true"></span>
                                <p>Visit our COVID-19 hub for current destinations, travel advice and more.</p>
                                <a data-id="pagebody_link" data-link="Go to COVID-19 hub" href="/vn/english/help/covid-19/" className="covid-service__alert--cta cta cta--secondary cta--small">
                                    <span className="cta__text">Go to COVID-19 hub</span>
                                    <span class="icon icon-chevron-right" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                        <div className="widget__content-wrapper widget__content-wrapper--search-flight">
                            <div className="widget__content search-flight 0 search-flight--continue">
                                <div className="search-flight js-search-flight search-flight--continue">
                                    <section className="search-flight__section grid">
                                        <div className="grid__item actions-wrapper">
                                            <div className="search-flight__log-in-wrapper">
                                                <div>
                                                    <EKCheckbox id="chkClassicRewards" title="Classic rewards" />
                                                </div>
                                                <div>
                                                    <a href="/sessionhandler.aspx?pageurl=/IBE.aspx&amp;pub=/vn/english&amp;j=f&amp;section=IBE" target="" className="search-flight__inline-link search-flight__inline-link--advanced-search" data-id="pagebody_link" data-link="Widget:Search flights:Advanced search"> Advanced search: multi-city, promo codes, partner airlines
                                                        <span className="icon icon-chevron-right" aria-hidden="true"></span>
                                                    </a>
                                                </div>
                                            </div>    
                                        </div>
                                        <div className="grid__item">
                                            <div className="grid">
                                                <div className="grid__item medium--four-fifths origin-destination-dropdowns js-origin-destination-dropdowns">
                                                    <div className="grid">
                                                        <div className="grid__item medium--one-half">
                                                            <EKDropdown Title="Departure Airport" DropdownType="Airport" Descriptions={departureAirportDescription} Items={departureAirports} ID="cboDeparture"/>
                                                        </div>
                                                        <div className="grid__item medium--one-half">
                                                            <EKDropdown Title="Arrival Airport" DropdownType="Airport" Descriptions={arrivalAirportDescription} Items={arrivalAirports} ID="cboArrival"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=""></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="82871" data-organism="g-c-0013-advance-booking-widget" className="hidden">            
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

                                <div className="booking-widget__second-row">
                                    {/* <div className="booking-widget__first-row"> */}
                                        <div className="booking-widget__second-row__column">
                                            <div>
                                                <EKDropdown Title="Departure Airport" DropdownType="Airport" Descriptions={departureAirportDescription} Items={departureAirports} ID="cboDeparture"/>                                               
                                            </div>
                                        </div>
                                        <div className="booking-widget__second-row__column">
                                            <div>                                                
                                                <EKDropdown Title="Arrival Airport" DropdownType="Airport" Descriptions={arrivalAirportDescription} Items={arrivalAirports} ID="cboArrival"/>
                                            </div>
                                        </div>
                                        <div className="booking-widget__second-row__column">
                                            <EKDatePicker FirstText="Departing" SecondText="Returning"/>                                            
                                        </div>
                                        
                                    {/* </div> */}
                                    
                                </div>
                                <div className="booking-widget__second-row">
                                    <div className="booking-widget__second-row__column">
                                        <div>                                                
                                            <EKDropdown Title="Passengers" Descriptions={selectedPassengerDescription} Items={passengers} ID="cboPassengers"/>
                                        </div>
                                    </div>
                                    <div className="booking-widget__second-row__column booking-widget__cabin-class-wrapper">
                                        <div>                                                
                                            <EKDropdown Title="Class" Descriptions={selectedClassDescription} Items={classes} ID="cboClass"/>
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
        </>
    );
  }
  
  export default SearchBox;
  
  