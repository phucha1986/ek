import EKDropdown from "../commons/EKDropdown";
import { EKDatePicker } from "../commons/EKDatePicker";
import EKCheckbox from "../commons/EKCheckbox";
import { departureAirports, arrivalAirports, currentLocation } from "../../data/book";
import { EKDatePickerProvider } from "../commons/EKDatePickerContext";

function SearchBox() {
    
    
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
                        <li id="tab1" data-galabel="my-trips__widget-heading__text" className="automation-widget-tab-my-trips__widget-heading__text widget__tab js-widget-tab  grid__item one-half medium--one-quarter js-tabItem" aria-controls="panel1" aria-selected="false" role="tab" tabindex="-1" widget-type="my-trips">
                            <a href="#panel1" className="widget__tab__link js-widget-tab-link" tabindex="-1">
                                <div className="widget__tab__content">
                                    <i className="widget__tab__icon icon icon-fares" aria-hidden="true"></i>
                                    <p className="widget__tab__label">Manage booking / Check in</p>
                                </div>
                            </a>
                        </li>
                        <li id="tab2" data-galabel="womf__widget-heading__text" className="automation-widget-tab-womf__widget-heading__text widget__tab js-widget-tab  grid__item one-half medium--one-quarter js-tabItem" aria-controls="panel2" aria-selected="false" role="tab" tabindex="-1" widget-type="whats-on-my-flight">
                            <a href="#panel2" className="widget__tab__link js-widget-tab-link" tabindex="-1">
                                <div className="widget__tab__content">
                                    <i className="widget__tab__icon icon icon-whats-on-flight" aria-hidden="true"></i>
                                    <p className="widget__tab__label">What's on your flight</p>
                                </div>
                            </a>
                        </li>
                        <li id="tab3" data-galabel="flight-status__widget-heading__text" className="automation-widget-tab-flight-status__widget-heading__text widget__tab js-widget-tab  grid__item one-half medium--one-quarter js-tabItem" aria-controls="panel3" aria-selected="false" role="tab" tabindex="-1" widget-type="flight-status">
                            <a href="#panel3" className="widget__tab__link js-widget-tab-link" tabindex="-1">
                                <div className="widget__tab__content">
                                    <i className="widget__tab__icon icon icon-flight-status" aria-hidden="true"></i>
                                    <p className="widget__tab__label">Flight status</p>
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
                                    <span className="icon icon-chevron-right" aria-hidden="true"></span>
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
                                                            <EKDropdown Title="Departure Airport" DropdownType="Airport" Items={departureAirports} ID="cboDeparture" CurrentLocation={currentLocation}/>
                                                        </div>
                                                        <div className="grid__item medium--one-half">
                                                            <EKDropdown Title="Arrival Airport" DropdownType="Airport" Items={arrivalAirports} ID="cboArrival"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid__item medium--one-third search-flight__datepicker search-flight--hidden-container">                                                    
                                                    <EKDatePickerProvider>
                                                        <EKDatePicker />
                                                    </EKDatePickerProvider>
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
        </>
    );
  }
  
  export default SearchBox;
  
  