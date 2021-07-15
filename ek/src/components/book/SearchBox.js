import EKDropdown from "../commons/EKDropdown";
import EKDatePicker from "../commons/EKDatePicker";

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
    );
  }
  
  export default SearchBox;
  
  